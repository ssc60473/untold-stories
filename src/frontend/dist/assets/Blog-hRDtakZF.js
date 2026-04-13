import { r as reactExports, j as jsxRuntimeExports, S as Skeleton, L as Link } from "./index-qd82Y0rz.js";
import { m as motion, S as SectionHeader } from "./proxy-Dh9HJqYT.js";
import { S as SAMPLE_VIDEOS, B as Badge, C as Clock } from "./useVideos-BRlubH8S.js";
import { u as useBlogPosts, C as Calendar, T as Tag } from "./useBlog-oOj3zr0f.js";
import { S as Search } from "./search-HTxqqYi0.js";
import { C as ChevronRight } from "./chevron-right-DKbLDWv0.js";
const categories = [
  "All",
  "History",
  "Mystery",
  "Horror",
  "Documentary"
];
function BlogPage() {
  const { data: posts, isLoading } = useBlogPosts();
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [search, setSearch] = reactExports.useState("");
  const filtered = posts == null ? void 0 : posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            label: "Stories & Articles",
            title: "The Investigation ",
            titleAccent: "Files",
            subtitle: "Deep dives, research articles, and written explorations behind our documentaries."
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background min-h-screen py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveCategory(cat),
            className: `px-4 py-1.5 rounded-full text-sm font-body font-medium transition-smooth border ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary shadow-gold" : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`,
            "data-ocid": `blog-filter-${cat.toLowerCase()}`,
            children: cat
          },
          cat
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative sm:ml-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "search",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search articles…",
              className: "bg-card border border-border text-foreground placeholder:text-muted-foreground rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth w-full sm:w-56",
              "data-ocid": "blog-search-input"
            }
          )
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: ["s1", "s2", "s3", "s4", "s5", "s6"].map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 rounded-xl" }, id)) }) : (filtered == null ? void 0 : filtered.length) === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-24 gap-4",
          "data-ocid": "blog-empty-state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-12 h-12 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-foreground", children: "No articles found" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered == null ? void 0 : filtered.map((post, i) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: i * 0.06 },
            className: "bg-card border border-border rounded-xl overflow-hidden hover-lift card-glow transition-smooth group",
            "data-ocid": "blog-post-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: `https://img.youtube.com/vi/${((_a = SAMPLE_VIDEOS.find((v) => v.id === post.relatedVideoId)) == null ? void 0 : _a.youtubeId) ?? post.relatedVideoId ?? "dQw4w9WgXcQ"}/maxresdefault.jpg`,
                    alt: post.title,
                    className: "w-full h-full object-cover transition-smooth group-hover:scale-105",
                    loading: "lazy"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cinematic-overlay opacity-50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "absolute top-3 left-3 border-primary/40 text-primary bg-background/80 text-xs",
                    children: post.category
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-smooth", children: post.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4", children: post.excerpt }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                    new Date(post.publishedAt).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                    post.readTime,
                    " read"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: post.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "flex items-center gap-1 text-xs text-muted-foreground border border-border px-2 py-0.5 rounded-full",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-2.5 h-2.5" }),
                      tag
                    ]
                  },
                  tag
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/blog/$slug",
                    params: { slug: post.slug },
                    className: "flex items-center gap-1 text-primary text-sm font-semibold hover:text-accent transition-smooth",
                    "data-ocid": "blog-read-more",
                    children: [
                      "Read Article ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                    ]
                  }
                )
              ] })
            ]
          },
          post.id
        );
      }) })
    ] }) })
  ] });
}
export {
  BlogPage
};
