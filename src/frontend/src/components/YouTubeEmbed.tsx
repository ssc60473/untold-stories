import { Play } from "lucide-react";
import { useState } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  thumbnail?: string;
  className?: string;
  autoplay?: boolean;
}

export function YouTubeEmbed({
  videoId,
  title = "YouTube video",
  thumbnail,
  className = "",
  autoplay = false,
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const thumbUrl =
    thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (!isPlaying) {
    return (
      <button
        type="button"
        className={`relative overflow-hidden rounded-lg bg-card cursor-pointer group w-full text-left ${className}`}
        onClick={() => setIsPlaying(true)}
        aria-label={`Play ${title}`}
        data-ocid="youtube-embed-play"
      >
        <div className="aspect-video w-full relative">
          <img
            src={thumbUrl}
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 cinematic-overlay" />
          <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-smooth" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-gold transition-smooth group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(212,165,116,0.6)]">
              <Play className="w-7 h-7 text-primary-foreground fill-primary-foreground ml-1" />
            </div>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
