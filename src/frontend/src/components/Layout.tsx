import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouterState } from "@tanstack/react-router";
import { Film, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Footer } from "./Footer";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Videos", to: "/videos" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

function NavLink({
  to,
  label,
  active,
  onClick,
}: {
  to: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative font-body font-medium text-sm transition-smooth group ${
        active ? "text-primary" : "text-foreground/80 hover:text-foreground"
      }`}
      data-ocid={`nav-${label.toLowerCase()}`}
    >
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-smooth ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-smooth ${
          scrolled
            ? "bg-card/95 backdrop-blur-md border-b border-border shadow-elevated"
            : "bg-card border-b border-border"
        }`}
        data-ocid="header"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="RahasyaVaarta Home"
            data-ocid="header-logo"
          >
            <div className="w-8 h-8 rounded-md gradient-gold flex items-center justify-center shadow-gold transition-smooth group-hover:shadow-[0_0_24px_rgba(212,165,116,0.5)]">
              <Film className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-base text-foreground tracking-tight">
                RahasyaVaarta
              </span>
              <span className="font-body text-[9px] text-primary uppercase tracking-widest">
                रहस्य वार्ता
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                label={link.label}
                active={
                  link.to === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.to)
                }
              />
            ))}
          </nav>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <a
              href="https://youtube.com/@rahasya-vaarta"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
              data-ocid="header-subscribe-cta"
            >
              <Button
                variant="default"
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-accent font-body font-semibold text-xs tracking-wide transition-smooth shadow-gold hover:shadow-[0_0_20px_rgba(212,165,116,0.5)]"
              >
                Subscribe
              </Button>
            </a>

            {/* Mobile Hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-foreground"
                  aria-label="Open menu"
                  data-ocid="header-mobile-menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-card border-l border-border w-72 p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile header */}
                  <div className="flex items-center justify-between p-5 border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md gradient-gold flex items-center justify-center">
                        <Film className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                      <span className="font-display font-bold text-foreground">
                        RahasyaVaarta
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setMobileOpen(false)}
                      aria-label="Close menu"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Mobile nav links */}
                  <nav className="flex flex-col gap-1 p-4 flex-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center px-3 py-3 rounded-md font-body font-medium text-base transition-smooth ${
                          (
                            link.to === "/"
                              ? pathname === "/"
                              : pathname.startsWith(link.to)
                          )
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/80 hover:bg-muted hover:text-foreground"
                        }`}
                        data-ocid={`mobile-nav-${link.label.toLowerCase()}`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="p-4 border-t border-border">
                    <a
                      href="https://youtube.com/@rahasya-vaarta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-accent font-semibold shadow-gold">
                        Subscribe on YouTube
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
