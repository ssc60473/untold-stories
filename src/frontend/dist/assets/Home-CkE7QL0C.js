import { c as createLucideIcon, j as jsxRuntimeExports, B as Button, L as Link, u as useNavigate, S as Skeleton, r as reactExports, a as ue } from "./index-qd82Y0rz.js";
import { m as motion, S as SectionHeader } from "./proxy-Dh9HJqYT.js";
import { V as VideoCard } from "./VideoCard-adUHzldE.js";
import { Y as YouTubeEmbed } from "./YouTubeEmbed-BtOc1BbO.js";
import { u as useSubscribeNewsletter } from "./useSubmissions-D7N_xLfM.js";
import { u as useFeaturedVideos, a as useTrendingVideos } from "./useVideos-BRlubH8S.js";
import { P as Play } from "./play-Cdc5Rypd.js";
import { C as ChevronRight } from "./chevron-right-DKbLDWv0.js";
import "./eye-EMjJTKIR.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
        style: {
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container mx-auto px-4 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "text-primary font-body font-semibold text-xs uppercase tracking-widest mb-4",
          children: "रहस्य वार्ता Originals"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.1 },
          className: "font-display font-black text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6",
          children: [
            "Untold",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-gold-text text-accent-glow italic", children: "Stories." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Hidden",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-gold-text text-accent-glow", children: "Truths." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.25 },
          className: "text-foreground/70 font-body text-lg mb-8 max-w-lg",
          children: "Explore India's deepest mysteries, forgotten history, and untold stories — cinematic Hindi documentaries that reveal the truth behind the legends."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.4 },
          className: "flex flex-wrap gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://youtube.com/@rahasya-vaarta",
                target: "_blank",
                rel: "noopener noreferrer",
                "data-ocid": "hero-watch-cta",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-primary text-primary-foreground hover:bg-accent font-body font-semibold shadow-gold hover:shadow-[0_0_30px_rgba(212,165,116,0.6)] transition-smooth gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4 fill-current" }),
                      "Watch Latest Docs"
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/videos",
                search: { category: "" },
                "data-ocid": "hero-explore-cta",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "border-border text-foreground hover:border-primary hover:text-primary transition-smooth gap-2",
                    children: [
                      "Explore All Videos",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                    ]
                  }
                )
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" })
  ] });
}
function FeaturedSection() {
  const { data: videos, isLoading } = useFeaturedVideos();
  const navigate = useNavigate();
  const handleVideoClick = (video) => {
    navigate({
      to: "/videos",
      search: { category: video.category }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          label: "Featured Investigations",
          title: "Latest ",
          titleAccent: "Documentaries"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/videos",
          search: { category: "" },
          className: "hidden sm:flex items-center gap-1 text-primary text-sm font-body font-medium hover:text-accent transition-smooth",
          "data-ocid": "featured-view-all",
          children: [
            "View All ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
          ]
        }
      )
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: ["s1", "s2", "s3"].map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-video rounded-lg w-full" }, id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: videos == null ? void 0 : videos.map((video, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(VideoCard, { video, onClick: handleVideoClick })
      },
      video.id
    )) })
  ] }) });
}
function HeroVideoSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 py-16 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -24 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-body font-semibold text-xs uppercase tracking-widest mb-3 block", children: "Latest Upload" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider w-10 mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-4 leading-tight", children: [
            "भानगढ़ किला:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-gold-text", children: "भारत की सबसे डरावनी जगह" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-base leading-relaxed mb-6", children: "Rajasthan ke is rahasymay kile ki sachchi kahani, jo aaj bhi logon ke man mein darr paida karti hai. 1825 mein bandh hua yeh kila — raat ke baad yahaan jaana aaj bhi mana hai." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-primary" }),
              " Mystery"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "2.4M views" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "24 min" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://youtube.com/@rahasya-vaarta",
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "featured-video-watch",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-primary text-primary-foreground hover:bg-accent shadow-gold transition-smooth gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4 fill-current" }),
                "Watch Now"
              ] })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 24 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.15 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          YouTubeEmbed,
          {
            videoId: "dQw4w9WgXcQ",
            title: "Bhangarh Fort: India's Most Haunted Place",
            className: "shadow-elevated"
          }
        )
      }
    )
  ] }) }) });
}
function TrendingSection() {
  const { data: videos, isLoading } = useTrendingVideos();
  const navigate = useNavigate();
  const handleVideoClick = (video) => {
    navigate({
      to: "/videos",
      search: { category: video.category }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          label: "Trending Now",
          title: "Top ",
          titleAccent: "Investigations",
          subtitle: "Most watched mysteries and histories this month"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-8 h-8 text-primary animate-pulse-gold hidden sm:block" })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4", children: ["t1", "t2", "t3", "t4"].map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-video rounded-lg" }, id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4", children: videos == null ? void 0 : videos.map((video, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.08 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(VideoCard, { video, onClick: handleVideoClick })
      },
      video.id
    )) })
  ] }) });
}
function NewsletterSection() {
  const [email, setEmail] = reactExports.useState("");
  const { mutate, isPending } = useSubscribeNewsletter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    mutate(
      { email },
      {
        onSuccess: () => {
          ue.success("Subscribed!", {
            description: "You'll be notified about new investigations."
          });
          setEmail("");
        },
        onError: () => ue.error("Something went wrong. Please try again.")
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-y border-border py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: "max-w-xl mx-auto text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeader,
          {
            label: "Stay In The Loop",
            title: "Never Miss an ",
            titleAccent: "Investigation",
            subtitle: "Subscribe to get notified when we uncover new mysteries and hidden truths.",
            align: "center"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "flex flex-col sm:flex-row gap-3 mt-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "newsletter-email", className: "sr-only", children: "Email address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "newsletter-email",
                  type: "email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  placeholder: "Enter your email address",
                  required: true,
                  className: "flex-1 bg-background border border-border text-foreground placeholder:text-muted-foreground rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-smooth",
                  "data-ocid": "newsletter-email-input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  disabled: isPending,
                  className: "bg-primary text-primary-foreground hover:bg-accent font-semibold shadow-gold transition-smooth",
                  "data-ocid": "newsletter-submit",
                  children: isPending ? "Subscribing..." : "Subscribe"
                }
              )
            ]
          }
        )
      ]
    }
  ) }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroVideoSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NewsletterSection, {})
  ] });
}
export {
  HomePage
};
