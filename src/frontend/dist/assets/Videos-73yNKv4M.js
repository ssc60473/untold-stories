import { j as jsxRuntimeExports, R as Root, C as Content, b as Close, X, d as cn, T as Title, P as Portal, O as Overlay, e as useSearch, u as useNavigate, r as reactExports, S as Skeleton } from "./index-qd82Y0rz.js";
import { m as motion, S as SectionHeader } from "./proxy-Dh9HJqYT.js";
import { V as VideoCard } from "./VideoCard-adUHzldE.js";
import { Y as YouTubeEmbed } from "./YouTubeEmbed-BtOc1BbO.js";
import { b as useVideos } from "./useVideos-BRlubH8S.js";
import { S as Search } from "./search-HTxqqYi0.js";
import "./eye-EMjJTKIR.js";
import "./play-Cdc5Rypd.js";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
const categories = [
  "All",
  "History",
  "Mystery",
  "Horror",
  "Documentary"
];
function VideosPage() {
  const search = useSearch({ from: "/videos" });
  const navigate = useNavigate({ from: "/videos" });
  const rawCategory = search.category ?? "";
  const activeCategory = categories.find((c) => c === rawCategory) ?? "All";
  const [searchText, setSearchText] = reactExports.useState("");
  const [selectedVideo, setSelectedVideo] = reactExports.useState(null);
  const { data: videos, isLoading } = useVideos(activeCategory);
  const setActiveCategory = (cat) => {
    navigate({
      search: { category: cat === "All" ? "" : cat }
    });
  };
  const filtered = videos == null ? void 0 : videos.filter((v) => {
    var _a;
    const matchSearch = !searchText || v.title.toLowerCase().includes(searchText.toLowerCase()) || ((_a = v.titleHindi) == null ? void 0 : _a.includes(searchText));
    return matchSearch;
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
            label: "All Videos",
            title: "Explore Our ",
            titleAccent: "Investigations",
            subtitle: "Documentaries on mysteries, history, horror, and untold stories of India."
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background min-h-screen py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex gap-2 flex-wrap",
            role: "tablist",
            "aria-label": "Video categories",
            children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": activeCategory === cat,
                onClick: () => setActiveCategory(cat),
                className: `px-4 py-1.5 rounded-full text-sm font-body font-medium transition-smooth border ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary shadow-gold" : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`,
                "data-ocid": `filter-category-${cat.toLowerCase()}`,
                children: cat
              },
              cat
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative sm:ml-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "search",
              value: searchText,
              onChange: (e) => setSearchText(e.target.value),
              placeholder: "Search videos…",
              className: "bg-card border border-border text-foreground placeholder:text-muted-foreground rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth w-full sm:w-56",
              "data-ocid": "video-search-input"
            }
          )
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"].map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-video rounded-lg" }, id)) }) : (filtered == null ? void 0 : filtered.length) === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-24 gap-4",
          "data-ocid": "videos-empty-state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-12 h-12 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-foreground", children: "No videos found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Try a different search or category." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: filtered == null ? void 0 : filtered.map((video, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.05 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(VideoCard, { video, onClick: setSelectedVideo })
        },
        video.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!selectedVideo,
        onOpenChange: (open) => !open && setSelectedVideo(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "bg-card border-border max-w-3xl p-4 sm:p-6",
            "data-ocid": "video-modal",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-xl text-foreground", children: (selectedVideo == null ? void 0 : selectedVideo.titleHindi) || (selectedVideo == null ? void 0 : selectedVideo.title) }) }),
              selectedVideo && /* @__PURE__ */ jsxRuntimeExports.jsx(
                YouTubeEmbed,
                {
                  videoId: selectedVideo.youtubeId,
                  title: selectedVideo.title,
                  autoplay: true
                }
              ),
              (selectedVideo == null ? void 0 : selectedVideo.description) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-3 leading-relaxed", children: selectedVideo.description })
            ]
          }
        )
      }
    )
  ] });
}
export {
  VideosPage
};
