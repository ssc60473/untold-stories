import { c as createLucideIcon, g as useParams, j as jsxRuntimeExports, S as Skeleton, L as Link, B as Button } from "./index-qd82Y0rz.js";
import { m as motion, S as SectionHeader } from "./proxy-Dh9HJqYT.js";
import { Y as YouTubeEmbed } from "./YouTubeEmbed-BtOc1BbO.js";
import { B as Badge, C as Clock, S as SAMPLE_VIDEOS } from "./useVideos-BRlubH8S.js";
import { a as useBlogPost, u as useBlogPosts, C as Calendar, T as Tag } from "./useBlog-oOj3zr0f.js";
import "./play-Cdc5Rypd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
const ARTICLE_CONTENT = {
  default: [
    "India ki dharti par aisi kai jagahein hain jahan itihas aur rahasya ek saath milte hain. Yeh jagahein sirf patharr aur mitti nahi hain — yeh un logon ki yaadein hain jo kaafi pehle yahaan rehte the.",
    "Archaeological research ne hamare paas aise saboot laye hain jo hume sochne par majboor karte hain. Scientists aur historians abhi bhi is mystery ko solve karne ki koshish kar rahe hain.",
    "Local legends aur scientific evidence dono alag alag kahaniyan sunu rahe hain. Sach kahin beech mein chupi hai — aur hum usse dhundhne ki koshish kar rahe hain.",
    "Is jagah ke baare mein jo bhi documents available hain, unhe study karne ke baad ek baat toh clear hai: yeh sirf ek kahani nahi hai. Yeh ek complete civilization ki baaki ka gawah hai.",
    "Aagaamee years mein jab aur khudai hogi, shayad aur bhi rahasya saamne aayenge. Tab tak, hum jo jaante hain ussi ke saath kaam karte hain — aur apni imagination ko free rakhte hain."
  ]
};
function BlogPostPage() {
  var _a;
  const { slug } = useParams({ strict: false });
  const { data: post, isLoading } = useBlogPost(slug);
  const { data: allPosts } = useBlogPosts();
  const related = allPosts == null ? void 0 : allPosts.filter((p) => p.slug !== slug && p.category === (post == null ? void 0 : post.category)).slice(0, 3);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16 space-y-6 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-2/3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 w-full rounded-xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-5/6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4/6" })
    ] });
  }
  if (!post) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container mx-auto px-4 py-24 text-center",
        "data-ocid": "blog-post-not-found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-foreground mb-4", children: "Article not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Back to Blog"
          ] }) })
        ]
      }
    );
  }
  const paragraphs = ARTICLE_CONTENT[post.slug] ?? ARTICLE_CONTENT.default;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10 max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/blog",
        className: "flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-body transition-smooth mb-8",
        "data-ocid": "blog-post-back",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
          " Back to Blog"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "border-primary/40 text-primary mb-4",
              children: post.category
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-3xl sm:text-4xl text-foreground leading-tight mb-4", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed mb-6", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-y border-border py-4 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
              new Date(post.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
              post.readTime,
              " read"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto font-semibold text-foreground", children: post.author })
          ] })
        ]
      }
    ),
    post.relatedVideoId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, delay: 0.2 },
        className: "mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            YouTubeEmbed,
            {
              videoId: ((_a = SAMPLE_VIDEOS.find((v) => v.id === post.relatedVideoId)) == null ? void 0 : _a.youtubeId) ?? post.relatedVideoId ?? "",
              title: post.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs text-center mt-2", children: "Watch the full documentary on YouTube" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.3 },
        className: "prose prose-invert prose-lg max-w-none mb-10",
        children: paragraphs.map((para) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-foreground/80 font-body text-base leading-relaxed mb-5",
            children: para
          },
          para.slice(0, 20)
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-12", children: post.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: "flex items-center gap-1 text-xs text-muted-foreground border border-border px-3 py-1 rounded-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3 h-3" }),
          tag
        ]
      },
      tag
    )) }),
    related && related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider mb-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          label: "Related",
          title: "More ",
          titleAccent: "Investigations",
          className: "mb-6"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: related.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/blog/$slug",
          params: { slug: r.slug },
          className: "flex gap-4 items-start bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-smooth group",
          "data-ocid": "blog-related-post",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-1", children: r.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm line-clamp-1 mt-1", children: r.excerpt })
          ] })
        },
        r.id
      )) })
    ] })
  ] }) }) });
}
export {
  BlogPostPage
};
