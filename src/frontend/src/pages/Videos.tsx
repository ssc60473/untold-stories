import { SectionHeader } from "@/components/SectionHeader";
import { VideoCard } from "@/components/VideoCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { useVideos } from "@/hooks/useVideos";
import type { Video, VideoCategory } from "@/types";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const categories: VideoCategory[] = [
  "All",
  "History",
  "Mystery",
  "Horror",
  "Documentary",
];

export function VideosPage() {
  const search = useSearch({ from: "/videos" });
  const navigate = useNavigate({ from: "/videos" });
  const rawCategory = search.category ?? "";
  const activeCategory: VideoCategory =
    (categories.find((c) => c === rawCategory) as VideoCategory | undefined) ??
    "All";

  const [searchText, setSearchText] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const { data: videos, isLoading } = useVideos(activeCategory);

  const setActiveCategory = (cat: VideoCategory) => {
    navigate({
      search: { category: cat === "All" ? "" : cat },
    });
  };

  const filtered = videos?.filter((v) => {
    const matchSearch =
      !searchText ||
      v.title.toLowerCase().includes(searchText.toLowerCase()) ||
      v.titleHindi?.includes(searchText);
    return matchSearch;
  });

  return (
    <>
      {/* Page header */}
      <div className="bg-card border-b border-border py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              label="All Videos"
              title="Explore Our "
              titleAccent="Investigations"
              subtitle="Documentaries on mysteries, history, horror, and untold stories of India."
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-background min-h-screen py-10">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Category filter */}
            <div
              className="flex gap-2 flex-wrap"
              role="tablist"
              aria-label="Video categories"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-body font-medium transition-smooth border ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-gold"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                  data-ocid={`filter-category-${cat.toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative sm:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search videos…"
                className="bg-card border border-border text-foreground placeholder:text-muted-foreground rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth w-full sm:w-56"
                data-ocid="video-search-input"
              />
            </div>
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"].map((id) => (
                <Skeleton key={id} className="aspect-video rounded-lg" />
              ))}
            </div>
          ) : filtered?.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-24 gap-4"
              data-ocid="videos-empty-state"
            >
              <Search className="w-12 h-12 text-muted-foreground" />
              <p className="font-display text-xl text-foreground">
                No videos found
              </p>
              <p className="text-muted-foreground text-sm">
                Try a different search or category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered?.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <VideoCard video={video} onClick={setSelectedVideo} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Video modal */}
      <Dialog
        open={!!selectedVideo}
        onOpenChange={(open) => !open && setSelectedVideo(null)}
      >
        <DialogContent
          className="bg-card border-border max-w-3xl p-4 sm:p-6"
          data-ocid="video-modal"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-foreground">
              {selectedVideo?.titleHindi || selectedVideo?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <YouTubeEmbed
              videoId={selectedVideo.youtubeId}
              title={selectedVideo.title}
              autoplay
            />
          )}
          {selectedVideo?.description && (
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              {selectedVideo.description}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
