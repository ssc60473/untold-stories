import { Badge } from "@/components/ui/badge";
import type { Video } from "@/types";
import type { VideoCategory } from "@/types";
import { Clock, Eye } from "lucide-react";

const categoryColors: Record<VideoCategory, string> = {
  History: "border-blue-500/40 text-blue-400",
  Mystery: "border-primary/40 text-primary",
  Horror: "border-red-500/40 text-red-400",
  Documentary: "border-green-500/40 text-green-400",
  All: "border-border text-muted-foreground",
};

interface VideoCardProps {
  video: Video;
  onClick?: (video: Video) => void;
  size?: "default" | "large";
}

export function VideoCard({
  video,
  onClick,
  size = "default",
}: VideoCardProps) {
  const handleClick = () => onClick?.(video);

  return (
    <button
      type="button"
      className={`group bg-card rounded-lg overflow-hidden border border-border hover-lift card-glow transition-smooth cursor-pointer text-left w-full ${
        size === "large" ? "flex flex-col" : ""
      }`}
      onClick={handleClick}
      aria-label={`Watch ${video.title}`}
      data-ocid="video-card"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 cinematic-overlay opacity-60 group-hover:opacity-80 transition-smooth" />

        {/* Duration badge */}
        <span className="absolute bottom-2 right-2 bg-background/90 text-foreground text-xs font-mono px-1.5 py-0.5 rounded">
          {video.duration}
        </span>

        {/* Trending badge */}
        {video.trending && (
          <span className="absolute top-2 left-2 bg-primary/90 text-primary-foreground text-xs font-body font-semibold px-2 py-0.5 rounded animate-pulse-gold">
            TRENDING
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col gap-1.5">
        {/* Category */}
        <Badge
          variant="outline"
          className={`w-fit text-xs font-body font-medium ${categoryColors[video.category]}`}
        >
          {video.category}
        </Badge>

        {/* Title */}
        <h3
          className={`font-display font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-smooth ${
            size === "large" ? "text-lg" : "text-base"
          }`}
        >
          {video.titleHindi || video.title}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-3 mt-1">
          <span className="flex items-center gap-1 text-muted-foreground text-xs">
            <Eye className="w-3 h-3" />
            {video.views} views
          </span>
          <span className="flex items-center gap-1 text-muted-foreground text-xs">
            <Clock className="w-3 h-3" />
            {video.duration}
          </span>
        </div>
      </div>
    </button>
  );
}
