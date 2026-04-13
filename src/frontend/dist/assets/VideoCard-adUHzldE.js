import { j as jsxRuntimeExports } from "./index-qd82Y0rz.js";
import { B as Badge, C as Clock } from "./useVideos-BRlubH8S.js";
import { E as Eye } from "./eye-EMjJTKIR.js";
const categoryColors = {
  History: "border-blue-500/40 text-blue-400",
  Mystery: "border-primary/40 text-primary",
  Horror: "border-red-500/40 text-red-400",
  Documentary: "border-green-500/40 text-green-400",
  All: "border-border text-muted-foreground"
};
function VideoCard({
  video,
  onClick,
  size = "default"
}) {
  const handleClick = () => onClick == null ? void 0 : onClick(video);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: `group bg-card rounded-lg overflow-hidden border border-border hover-lift card-glow transition-smooth cursor-pointer text-left w-full ${size === "large" ? "flex flex-col" : ""}`,
      onClick: handleClick,
      "aria-label": `Watch ${video.title}`,
      "data-ocid": "video-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden aspect-video", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
              alt: video.title,
              className: "w-full h-full object-cover transition-smooth group-hover:scale-105",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cinematic-overlay opacity-60 group-hover:opacity-80 transition-smooth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2 right-2 bg-background/90 text-foreground text-xs font-mono px-1.5 py-0.5 rounded", children: video.duration }),
          video.trending && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 bg-primary/90 text-primary-foreground text-xs font-body font-semibold px-2 py-0.5 rounded animate-pulse-gold", children: "TRENDING" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: `w-fit text-xs font-body font-medium ${categoryColors[video.category]}`,
              children: video.category
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: `font-display font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-smooth ${size === "large" ? "text-lg" : "text-base"}`,
              children: video.titleHindi || video.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-muted-foreground text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
              video.views,
              " views"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-muted-foreground text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              video.duration
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  VideoCard as V
};
