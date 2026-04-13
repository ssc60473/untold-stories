import { SectionHeader } from "@/components/SectionHeader";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogPost, useBlogPosts } from "@/hooks/useBlog";
import { SAMPLE_VIDEOS } from "@/hooks/useVideos";
import { useParams } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { motion } from "motion/react";

const ARTICLE_CONTENT: Record<string, string[]> = {
  default: [
    "India ki dharti par aisi kai jagahein hain jahan itihas aur rahasya ek saath milte hain. Yeh jagahein sirf patharr aur mitti nahi hain — yeh un logon ki yaadein hain jo kaafi pehle yahaan rehte the.",
    "Archaeological research ne hamare paas aise saboot laye hain jo hume sochne par majboor karte hain. Scientists aur historians abhi bhi is mystery ko solve karne ki koshish kar rahe hain.",
    "Local legends aur scientific evidence dono alag alag kahaniyan sunu rahe hain. Sach kahin beech mein chupi hai — aur hum usse dhundhne ki koshish kar rahe hain.",
    "Is jagah ke baare mein jo bhi documents available hain, unhe study karne ke baad ek baat toh clear hai: yeh sirf ek kahani nahi hai. Yeh ek complete civilization ki baaki ka gawah hai.",
    "Aagaamee years mein jab aur khudai hogi, shayad aur bhi rahasya saamne aayenge. Tab tak, hum jo jaante hain ussi ke saath kaam karte hain — aur apni imagination ko free rakhte hain.",
  ],
};

export function BlogPostPage() {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const { data: post, isLoading } = useBlogPost(slug);
  const { data: allPosts } = useBlogPosts();

  const related = allPosts
    ?.filter((p) => p.slug !== slug && p.category === post?.category)
    .slice(0, 3);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 space-y-6 max-w-3xl">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-64 w-full rounded-xl" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    );
  }

  if (!post) {
    return (
      <div
        className="container mx-auto px-4 py-24 text-center"
        data-ocid="blog-post-not-found"
      >
        <p className="font-display text-2xl text-foreground mb-4">
          Article not found
        </p>
        <Link to="/blog">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  const paragraphs = ARTICLE_CONTENT[post.slug] ?? ARTICLE_CONTENT.default;

  return (
    <>
      <div className="bg-background min-h-screen">
        <div className="container mx-auto px-4 py-10 max-w-3xl">
          {/* Back */}
          <Link
            to="/blog"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-body transition-smooth mb-8"
            data-ocid="blog-post-back"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="border-primary/40 text-primary mb-4"
            >
              {post.category}
            </Badge>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-foreground leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-y border-border py-4 mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime} read
              </span>
              <span className="ml-auto font-semibold text-foreground">
                {post.author}
              </span>
            </div>
          </motion.div>

          {/* Hero image / YouTube */}
          {post.relatedVideoId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <YouTubeEmbed
                videoId={
                  SAMPLE_VIDEOS.find((v) => v.id === post.relatedVideoId)
                    ?.youtubeId ??
                  post.relatedVideoId ??
                  ""
                }
                title={post.title}
              />
              <p className="text-muted-foreground text-xs text-center mt-2">
                Watch the full documentary on YouTube
              </p>
            </motion.div>
          )}

          {/* Article body */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none mb-10"
          >
            {paragraphs.map((para) => (
              <p
                key={para.slice(0, 20)}
                className="text-foreground/80 font-body text-base leading-relaxed mb-5"
              >
                {para}
              </p>
            ))}
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-xs text-muted-foreground border border-border px-3 py-1 rounded-full"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Related */}
          {related && related.length > 0 && (
            <div>
              <div className="gold-divider mb-8" />
              <SectionHeader
                label="Related"
                title="More "
                titleAccent="Investigations"
                className="mb-6"
              />
              <div className="grid gap-4">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    to="/blog/$slug"
                    params={{ slug: r.slug }}
                    className="flex gap-4 items-start bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-smooth group"
                    data-ocid="blog-related-post"
                  >
                    <div>
                      <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-1">
                        {r.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-1 mt-1">
                        {r.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
