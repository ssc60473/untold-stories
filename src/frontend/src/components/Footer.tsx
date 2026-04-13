import { Link } from "@tanstack/react-router";
import { Film } from "lucide-react";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";

const socialLinks = [
  {
    icon: SiYoutube,
    href: "https://youtube.com/@rahasya-vaarta",
    label: "YouTube",
    color: "hover:text-red-500",
  },
  {
    icon: SiInstagram,
    href: "https://instagram.com/rahasya.vaarta",
    label: "Instagram",
    color: "hover:text-pink-400",
  },
  {
    icon: SiX,
    href: "https://x.com/rahasya_vaarta",
    label: "Twitter / X",
    color: "hover:text-foreground",
  },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Videos", to: "/videos" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const categories = [
  { label: "Mystery", category: "Mystery" },
  { label: "History", category: "History" },
  { label: "Horror", category: "Horror" },
  { label: "Documentary", category: "Documentary" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const caffeine = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <footer
      className="bg-card border-t border-border mt-auto"
      data-ocid="footer"
    >
      <div className="gold-divider" />

      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md gradient-gold flex items-center justify-center shadow-gold">
                <Film className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                RahasyaVaarta
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px]">
              Untold Stories. Hidden Truths. — Hindi documentary channel
              exploring mysteries, history, and cinematic storytelling.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`text-muted-foreground transition-smooth ${s.color}`}
                  data-ocid={`footer-social-${s.label.toLowerCase()}`}
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground text-sm hover:text-primary transition-smooth"
                    data-ocid={`footer-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-body font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.category}>
                  <Link
                    to="/videos"
                    search={{ category: cat.category }}
                    className="text-muted-foreground text-sm hover:text-primary transition-smooth"
                    data-ocid={`footer-cat-${cat.label.toLowerCase()}`}
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="text-muted-foreground text-sm mb-3">
              Get notified when we publish new investigations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/40 px-4 py-2 rounded-md hover:bg-primary/10 transition-smooth"
              data-ocid="footer-newsletter-cta"
            >
              Subscribe Now
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {year} RahasyaVaarta. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={caffeine}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-smooth"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
