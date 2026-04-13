import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  useSubmitContact,
  useSubscribeNewsletter,
} from "@/hooks/useSubmissions";
import type { ContactFormData } from "@/types";
import { Instagram, Mail, MessageSquare, Send, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiX } from "react-icons/si";
import { toast } from "sonner";

const socialLinks = [
  {
    Icon: Youtube,
    href: "https://youtube.com/@rahasya-vaarta",
    label: "YouTube",
    username: "@rahasya-vaarta",
    color: "hover:border-red-500/50 hover:bg-red-500/5",
    iconColor: "text-red-400",
  },
  {
    Icon: Instagram,
    href: "https://instagram.com/rahasya.vaarta",
    label: "Instagram",
    username: "@rahasya.vaarta",
    color: "hover:border-pink-500/50 hover:bg-pink-500/5",
    iconColor: "text-pink-400",
  },
  {
    Icon: SiX,
    href: "https://x.com/rahasya_vaarta",
    label: "Twitter / X",
    username: "@rahasya_vaarta",
    color: "hover:border-foreground/30 hover:bg-foreground/5",
    iconColor: "text-foreground",
  },
  {
    Icon: Mail,
    href: "mailto:contact@rahasya-vaarta.com",
    label: "Email",
    username: "contact@rahasya-vaarta.com",
    color: "hover:border-primary/50 hover:bg-primary/5",
    iconColor: "text-primary",
  },
];

export function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [email, setNewsEmail] = useState("");

  const { mutate: submitContact, isPending: isSubmitting } = useSubmitContact();
  const { mutate: subscribe, isPending: isSubscribing } =
    useSubscribeNewsletter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact(form, {
      onSuccess: () => {
        toast.success("Message sent!", {
          description: "We'll get back to you within 48 hours.",
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      },
      onError: () => toast.error("Something went wrong. Please try again."),
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    subscribe(
      { email },
      {
        onSuccess: () => {
          toast.success("Subscribed!", {
            description: "You'll get updates on new investigations.",
          });
          setNewsEmail("");
        },
        onError: () => toast.error("Something went wrong. Please try again."),
      },
    );
  };

  return (
    <>
      {/* Page header */}
      <div className="bg-card border-b border-border py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              label="Get In Touch"
              title="Contact "
              titleAccent="Us"
              subtitle="Have a story tip, business inquiry, or just want to say hello? We'd love to hear from you."
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-background min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h2 className="font-display font-bold text-xl text-foreground">
                  Send a Message
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact-form"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="font-body text-sm text-foreground"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Kumar"
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      data-ocid="contact-name-input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="font-body text-sm text-foreground"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      required
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      data-ocid="contact-email-input"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="subject"
                    className="font-body text-sm text-foreground"
                  >
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Story tip / Business inquiry / Fan message"
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                    data-ocid="contact-subject-input"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="font-body text-sm text-foreground"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your story tip, or whatever's on your mind…"
                    required
                    rows={5}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                    data-ocid="contact-message-input"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-accent font-semibold shadow-gold transition-smooth gap-2"
                  data-ocid="contact-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Right panel */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Social links */}
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-5">
                  Find Us Online
                </h2>
                <div className="space-y-3">
                  {socialLinks.map(
                    ({ Icon, href, label, username, color, iconColor }) => (
                      <a
                        key={label}
                        href={href}
                        target={
                          href.startsWith("mailto") ? undefined : "_blank"
                        }
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-3 rounded-lg border border-border transition-smooth ${color}`}
                        data-ocid={`contact-social-${label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <Icon className={`w-5 h-5 shrink-0 ${iconColor}`} />
                        <div className="min-w-0">
                          <div className="font-body font-medium text-sm text-foreground">
                            {label}
                          </div>
                          <div className="text-muted-foreground text-xs truncate">
                            {username}
                          </div>
                        </div>
                      </a>
                    ),
                  )}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-2">
                  Newsletter
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Subscribe to get notified when we publish new investigations
                  and behind-the-scenes content.
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <label
                    htmlFor="contact-newsletter-email-input"
                    className="sr-only"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-newsletter-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 bg-background border border-border text-foreground placeholder:text-muted-foreground rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    data-ocid="contact-newsletter-email"
                  />
                  <Button
                    type="submit"
                    disabled={isSubscribing}
                    className="bg-primary text-primary-foreground hover:bg-accent shadow-gold transition-smooth"
                    data-ocid="contact-newsletter-submit"
                  >
                    {isSubscribing ? "…" : "Subscribe"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
