import { r as reactExports, j as jsxRuntimeExports } from "./index-qd82Y0rz.js";
import { P as Play } from "./play-Cdc5Rypd.js";
function YouTubeEmbed({
  videoId,
  title = "YouTube video",
  thumbnail,
  className = "",
  autoplay = false
}) {
  const [isPlaying, setIsPlaying] = reactExports.useState(autoplay);
  const thumbUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  if (!isPlaying) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: `relative overflow-hidden rounded-lg bg-card cursor-pointer group w-full text-left ${className}`,
        onClick: () => setIsPlaying(true),
        "aria-label": `Play ${title}`,
        "data-ocid": "youtube-embed-play",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video w-full relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: thumbUrl,
              alt: title,
              className: "w-full h-full object-cover transition-smooth group-hover:scale-105",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cinematic-overlay" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-smooth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-gold transition-smooth group-hover:scale-110 group-hover:bg-primary group-hover:shadow-[0_0_30px_rgba(212,165,116,0.6)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-7 h-7 text-primary-foreground fill-primary-foreground ml-1" }) }) })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg overflow-hidden ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "iframe",
    {
      src: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`,
      title,
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowFullScreen: true,
      className: "w-full h-full border-0",
      loading: "lazy"
    }
  ) }) });
}
export {
  YouTubeEmbed as Y
};
