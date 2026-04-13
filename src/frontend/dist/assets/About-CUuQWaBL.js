import { c as createLucideIcon, j as jsxRuntimeExports, B as Button, L as Link, F as Film, f as SiX } from "./index-qd82Y0rz.js";
import { m as motion, S as SectionHeader } from "./proxy-Dh9HJqYT.js";
import { P as Play } from "./play-Cdc5Rypd.js";
import { E as Eye } from "./eye-EMjJTKIR.js";
import { Y as Youtube, I as Instagram } from "./youtube-DHxPq5FX.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode);
const stats = [
  { icon: Eye, value: "20M+", label: "Total Views" },
  { icon: Film, value: "50+", label: "Documentaries" },
  { icon: Youtube, value: "500K+", label: "Subscribers" },
  { icon: Award, value: "5+", label: "Years of Research" }
];
const milestones = [
  {
    year: "2019",
    title: "The Beginning",
    description: "Started with a simple question: why does no one tell these stories in Hindi? First video on Bhangarh Fort went viral."
  },
  {
    year: "2020",
    title: "100K Subscribers",
    description: "Reached a major milestone. The community proved that people hunger for deep, cinematic storytelling in Hindi."
  },
  {
    year: "2022",
    title: "Full Production",
    description: "Invested in full cinematic production — original music, drone footage, archival research. Quality became the brand."
  },
  {
    year: "2024",
    title: "500K & Beyond",
    description: "Half a million subscribers and 20M+ views. RahasyaVaarta became India's leading Hindi mystery documentary channel."
  }
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-card border-b border-border py-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-card to-secondary/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-14 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-body font-semibold text-xs uppercase tracking-widest mb-4 block", children: "The Creator" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider w-10 mb-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-4xl sm:text-5xl text-foreground mb-5 leading-tight", children: [
                "Stories That",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-gold-text italic", children: "History" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Forgot to Tell"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-lg leading-relaxed mb-6", children: 'Namaste. Main hun RahasyaVaarta ka founder — ek storyteller jo India ke khoe hue rahasyon ko saamne laana chahta hai. Mera kaam ek sawal se shuru hua: "Kyun nahi hai Hindi mein aise documentaries?"' }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://youtube.com/@rahasya-vaarta",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "about-youtube-link",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-primary text-primary-foreground hover:bg-accent shadow-gold transition-smooth gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4 fill-current" }),
                      "Watch Channel"
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "about-contact-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    className: "border-border hover:border-primary hover:text-primary transition-smooth",
                    children: "Get In Touch"
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.15 },
            className: "flex justify-center lg:justify-end",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/assets/generated/creator-portrait.dim_600x700.jpg",
                  alt: "RahasyaVaarta Creator",
                  className: "w-full h-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3 rounded-2xl border border-primary/20 pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-body font-bold shadow-gold", children: "500K+ Subscribers" })
            ] })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-5", children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.08 },
        className: "bg-card border border-border rounded-xl p-6 text-center hover-lift card-glow transition-smooth",
        "data-ocid": `about-stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "w-6 h-6 text-primary mx-auto mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-3xl gradient-gold-text mb-1", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm font-body", children: stat.label })
        ]
      },
      stat.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 border-y border-border py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              label: "Mission & Vision",
              title: "Why We Do ",
              titleAccent: "This",
              align: "center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 font-body text-lg leading-relaxed", children: "India ki dharti aise rahasyon se bhari hai jo kabhi sahi se nahi bataye gaye. Hamara mission hai in kahaniyon ko cinematic, research-backed aur emotionally powerful tarike se present karna — apni matrubhasha Hindi mein." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 font-body text-lg leading-relaxed", children: "Our vision: to be the most trusted Hindi-language documentary brand that makes history and mystery accessible, entertaining, and deeply human." })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          label: "Journey",
          title: "From Curiosity to ",
          titleAccent: "Community",
          className: "mb-10"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute left-4 top-0 bottom-0 w-px gold-divider",
            style: {
              background: "linear-gradient(to bottom, oklch(0.72 0.08 82 / 0.5), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8 pl-12", children: milestones.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -16 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: i * 0.1 },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-10 top-1 w-5 h-5 rounded-full bg-primary border-2 border-background shadow-gold" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-body font-semibold text-xs uppercase tracking-widest mb-1 block", children: m.year }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground mb-2", children: m.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm leading-relaxed", children: m.description })
            ]
          },
          m.year
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-t border-border py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-6", children: "Follow the Investigation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-6", children: [
        {
          Icon: Youtube,
          href: "https://youtube.com/@rahasya-vaarta",
          label: "YouTube",
          color: "hover:text-red-500"
        },
        {
          Icon: Instagram,
          href: "https://instagram.com/rahasya.vaarta",
          label: "Instagram",
          color: "hover:text-pink-400"
        },
        {
          Icon: SiX,
          href: "https://x.com/rahasya_vaarta",
          label: "Twitter",
          color: "hover:text-foreground"
        }
      ].map(({ Icon, href, label, color }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": label,
          className: `text-muted-foreground transition-smooth ${color}`,
          "data-ocid": `about-social-${label.toLowerCase()}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7" })
        },
        label
      )) })
    ] }) })
  ] });
}
export {
  AboutPage
};
