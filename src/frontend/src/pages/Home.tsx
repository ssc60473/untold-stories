import { SectionHeader } from "@/components/SectionHeader";
import { VideoCard } from "@/components/VideoCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSubscribeNewsletter } from "@/hooks/useSubmissions";
import { useFeaturedVideos, useTrendingVideos } from "@/hooks/useVideos";
import type { Video } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronRight, Play, Star, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Cinematic background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-body font-semibold text-xs uppercase tracking-widest mb-4"
          >
            रहस्य वार्ता Originals
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6"
          >
            Untold{" "}
            <span className="gradient-gold-text text-accent-glow italic">
              Stories.
            </span>
            <br />
            Hidden{" "}
            <span className="gradient-gold-text text-accent-glow">Truths.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-foreground/70 font-body text-lg mb-8 max-w-lg"
          >
            Explore India's deepest mysteries, forgotten history, and untold
            stories — cinematic Hindi documentaries that reveal the truth behind
            the legends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://youtube.com/@rahasya-vaarta"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero-watch-cta"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-accent font-body font-semibold shadow-gold hover:shadow-[0_0_30px_rgba(212,165,116,0.6)] transition-smooth gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                Watch Latest Docs
              </Button>
            </a>
            <Link
              to="/videos"
              search={{ category: "" }}
              data-ocid="hero-explore-cta"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:border-primary hover:text-primary transition-smooth gap-2"
              >
                Explore All Videos
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function FeaturedSection() {
  const { data: videos, isLoading } = useFeaturedVideos();
  const navigate = useNavigate();

  const handleVideoClick = (video: Video) => {
    navigate({
      to: "/videos",
      search: { category: video.category },
    });
  };

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <SectionHeader
            label="Featured Investigations"
            title="Latest "
            titleAccent="Documentaries"
          />
          <Link
            to="/videos"
            search={{ category: "" }}
            className="hidden sm:flex items-center gap-1 text-primary text-sm font-body font-medium hover:text-accent transition-smooth"
            data-ocid="featured-view-all"
          >
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {["s1", "s2", "s3"].map((id) => (
              <Skeleton key={id} className="aspect-video rounded-lg w-full" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos?.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <VideoCard video={video} onClick={handleVideoClick} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function HeroVideoSection() {
  return (
    <section className="bg-muted/20 py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-body font-semibold text-xs uppercase tracking-widest mb-3 block">
              Latest Upload
            </span>
            <div className="gold-divider w-10 mb-4" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4 leading-tight">
              भानगढ़ किला:{" "}
              <span className="gradient-gold-text">भारत की सबसे डरावनी जगह</span>
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
              Rajasthan ke is rahasymay kile ki sachchi kahani, jo aaj bhi logon
              ke man mein darr paida karti hai. 1825 mein bandh hua yeh kila —
              raat ke baad yahaan jaana aaj bhi mana hai.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-primary" /> Mystery
              </span>
              <span>2.4M views</span>
              <span>24 min</span>
            </div>
            <a
              href="https://youtube.com/@rahasya-vaarta"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="featured-video-watch"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-accent shadow-gold transition-smooth gap-2">
                <Play className="w-4 h-4 fill-current" />
                Watch Now
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <YouTubeEmbed
              videoId="dQw4w9WgXcQ"
              title="Bhangarh Fort: India's Most Haunted Place"
              className="shadow-elevated"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrendingSection() {
  const { data: videos, isLoading } = useTrendingVideos();
  const navigate = useNavigate();

  const handleVideoClick = (video: Video) => {
    navigate({
      to: "/videos",
      search: { category: video.category },
    });
  };

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <SectionHeader
            label="Trending Now"
            title="Top "
            titleAccent="Investigations"
            subtitle="Most watched mysteries and histories this month"
          />
          <TrendingUp className="w-8 h-8 text-primary animate-pulse-gold hidden sm:block" />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {["t1", "t2", "t3", "t4"].map((id) => (
              <Skeleton key={id} className="aspect-video rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos?.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <VideoCard video={video} onClick={handleVideoClick} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { mutate, isPending } = useSubscribeNewsletter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    mutate(
      { email },
      {
        onSuccess: () => {
          toast.success("Subscribed!", {
            description: "You'll be notified about new investigations.",
          });
          setEmail("");
        },
        onError: () => toast.error("Something went wrong. Please try again."),
      },
    );
  };

  return (
    <section className="bg-card border-y border-border py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <SectionHeader
            label="Stay In The Loop"
            title="Never Miss an "
            titleAccent="Investigation"
            subtitle="Subscribe to get notified when we uncover new mysteries and hidden truths."
            align="center"
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mt-6"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-background border border-border text-foreground placeholder:text-muted-foreground rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
              data-ocid="newsletter-email-input"
            />
            <Button
              type="submit"
              disabled={isPending}
              className="bg-primary text-primary-foreground hover:bg-accent font-semibold shadow-gold transition-smooth"
              data-ocid="newsletter-submit"
            >
              {isPending ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <HeroVideoSection />
      <TrendingSection />
      <NewsletterSection />
    </>
  );
}
