import { c as createLucideIcon, j as jsxRuntimeExports, d as cn, r as reactExports, E as createSlot, B as Button, f as SiX, a as ue } from "./index-qd82Y0rz.js";
import { m as motion, S as SectionHeader } from "./proxy-Dh9HJqYT.js";
import { a as useSubmitContact, u as useSubscribeNewsletter } from "./useSubmissions-D7N_xLfM.js";
import { Y as Youtube, I as Instagram } from "./youtube-DHxPq5FX.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$1);
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
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const socialLinks = [
  {
    Icon: Youtube,
    href: "https://youtube.com/@rahasya-vaarta",
    label: "YouTube",
    username: "@rahasya-vaarta",
    color: "hover:border-red-500/50 hover:bg-red-500/5",
    iconColor: "text-red-400"
  },
  {
    Icon: Instagram,
    href: "https://instagram.com/rahasya.vaarta",
    label: "Instagram",
    username: "@rahasya.vaarta",
    color: "hover:border-pink-500/50 hover:bg-pink-500/5",
    iconColor: "text-pink-400"
  },
  {
    Icon: SiX,
    href: "https://x.com/rahasya_vaarta",
    label: "Twitter / X",
    username: "@rahasya_vaarta",
    color: "hover:border-foreground/30 hover:bg-foreground/5",
    iconColor: "text-foreground"
  },
  {
    Icon: Mail,
    href: "mailto:contact@rahasya-vaarta.com",
    label: "Email",
    username: "contact@rahasya-vaarta.com",
    color: "hover:border-primary/50 hover:bg-primary/5",
    iconColor: "text-primary"
  }
];
function ContactPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [email, setNewsEmail] = reactExports.useState("");
  const { mutate: submitContact, isPending: isSubmitting } = useSubmitContact();
  const { mutate: subscribe, isPending: isSubscribing } = useSubscribeNewsletter();
  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    submitContact(form, {
      onSuccess: () => {
        ue.success("Message sent!", {
          description: "We'll get back to you within 48 hours."
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      },
      onError: () => ue.error("Something went wrong. Please try again.")
    });
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    subscribe(
      { email },
      {
        onSuccess: () => {
          ue.success("Subscribed!", {
            description: "You'll get updates on new investigations."
          });
          setNewsEmail("");
        },
        onError: () => ue.error("Something went wrong. Please try again.")
      }
    );
  };
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
            label: "Get In Touch",
            title: "Contact ",
            titleAccent: "Us",
            subtitle: "Have a story tip, business inquiry, or just want to say hello? We'd love to hear from you."
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background min-h-screen py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -16 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5 },
          className: "bg-card border border-border rounded-xl p-6 sm:p-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-5 h-5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "Send a Message" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                className: "space-y-5",
                "data-ocid": "contact-form",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "name",
                          className: "font-body text-sm text-foreground",
                          children: "Your Name"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "name",
                          name: "name",
                          value: form.name,
                          onChange: handleChange,
                          placeholder: "Rahul Kumar",
                          required: true,
                          className: "bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary",
                          "data-ocid": "contact-name-input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "email",
                          className: "font-body text-sm text-foreground",
                          children: "Email Address"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "email",
                          name: "email",
                          type: "email",
                          value: form.email,
                          onChange: handleChange,
                          placeholder: "rahul@example.com",
                          required: true,
                          className: "bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary",
                          "data-ocid": "contact-email-input"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "subject",
                        className: "font-body text-sm text-foreground",
                        children: "Subject"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "subject",
                        name: "subject",
                        value: form.subject,
                        onChange: handleChange,
                        placeholder: "Story tip / Business inquiry / Fan message",
                        required: true,
                        className: "bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary",
                        "data-ocid": "contact-subject-input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "message",
                        className: "font-body text-sm text-foreground",
                        children: "Message"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        id: "message",
                        name: "message",
                        value: form.message,
                        onChange: handleChange,
                        placeholder: "Tell us about your story tip, or whatever's on your mind…",
                        required: true,
                        rows: 5,
                        className: "bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none",
                        "data-ocid": "contact-message-input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "submit",
                      disabled: isSubmitting,
                      className: "w-full bg-primary text-primary-foreground hover:bg-accent font-semibold shadow-gold transition-smooth gap-2",
                      "data-ocid": "contact-submit-btn",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                        isSubmitting ? "Sending…" : "Send Message"
                      ]
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 16 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.1 },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6 sm:p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-5", children: "Find Us Online" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: socialLinks.map(
                ({ Icon, href, label, username, color, iconColor }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href,
                    target: href.startsWith("mailto") ? void 0 : "_blank",
                    rel: "noopener noreferrer",
                    className: `flex items-center gap-4 p-3 rounded-lg border border-border transition-smooth ${color}`,
                    "data-ocid": `contact-social-${label.toLowerCase().replace(/\s+/g, "-")}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 shrink-0 ${iconColor}` }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body font-medium text-sm text-foreground", children: label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs truncate", children: username })
                      ] })
                    ]
                  },
                  label
                )
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-6 sm:p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-2", children: "Newsletter" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-5", children: "Subscribe to get notified when we publish new investigations and behind-the-scenes content." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubscribe, className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "contact-newsletter-email-input",
                    className: "sr-only",
                    children: "Email address"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "contact-newsletter-email-input",
                    type: "email",
                    value: email,
                    onChange: (e) => setNewsEmail(e.target.value),
                    placeholder: "your@email.com",
                    required: true,
                    className: "flex-1 bg-background border border-border text-foreground placeholder:text-muted-foreground rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth",
                    "data-ocid": "contact-newsletter-email"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    disabled: isSubscribing,
                    className: "bg-primary text-primary-foreground hover:bg-accent shadow-gold transition-smooth",
                    "data-ocid": "contact-newsletter-submit",
                    children: isSubscribing ? "…" : "Subscribe"
                  }
                )
              ] })
            ] })
          ]
        }
      )
    ] }) }) })
  ] });
}
export {
  ContactPage
};
