import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogPosts } from "@/hooks/useBlog";
import { SAMPLE_VIDEOS } from "@/hooks/useVideos";
import type { VideoCategory } from "@/types";
import { Link } from "@tanstack/react-router";
import { Calendar, ChevronRight, Clock, Search, Tag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const categories: VideoCategory[] = [
  "All",
  "History",
  "Mystery",
  "Horror",
  "Documentary",
];

export function BlogPage() {
  const { data: posts, isLoading } = useBlogPosts();
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("All");
  const [search, setSearch] = useState("");

  const filtered = posts?.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
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
              label="Stories & Articles"
              title="The Investigation "
              titleAccent="Files"
              subtitle="Deep dives, research articles, and written explorations behind our documentaries."
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-background min-h-screen py-10">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-body font-medium transition-smooth border ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-gold"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                  data-ocid={`blog-filter-${cat.toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative sm:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles…"
                className="bg-card border border-border text-foreground placeholder:text-muted-foreground rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth w-full sm:w-56"
                data-ocid="blog-search-input"
              />
            </div>
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["s1", "s2", "s3", "s4", "s5", "s6"].map((id) => (
                <Skeleton key={id} className="h-64 rounded-xl" />
              ))}
            </div>
          ) : filtered?.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-24 gap-4"
              data-ocid="blog-empty-state"
            >
              <Search className="w-12 h-12 text-muted-foreground" />
              <p className="font-display text-xl text-foreground">
                No articles found
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered?.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover-lift card-glow transition-smooth group"
                  data-ocid="blog-post-card"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${SAMPLE_VIDEOS.find((v) => v.id === post.relatedVideoId)?.youtubeId ?? post.relatedVideoId ?? "dQw4w9WgXcQ"}/maxresdefault.jpg`}
                      alt={post.title}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 cinematic-overlay opacity-50" />
                    <Badge
                      variant="outline"
                      className="absolute top-3 left-3 border-primary/40 text-primary bg-background/80 text-xs"
                    >
                      {post.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h2 className="font-display font-bold text-lg text-foreground leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime} read
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 text-xs text-muted-foreground border border-border px-2 py-0.5 rounded-full"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="flex items-center gap-1 text-primary text-sm font-semibold hover:text-accent transition-smooth"
                      data-ocid="blog-read-more"
                    >
                      Read Article <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
