import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Award, Eye, Film, Instagram, Play, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { SiX } from "react-icons/si";

const stats = [
  { icon: Eye, value: "20M+", label: "Total Views" },
  { icon: Film, value: "50+", label: "Documentaries" },
  { icon: Youtube, value: "500K+", label: "Subscribers" },
  { icon: Award, value: "5+", label: "Years of Research" },
];

const milestones = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "Started with a simple question: why does no one tell these stories in Hindi? First video on Bhangarh Fort went viral.",
  },
  {
    year: "2020",
    title: "100K Subscribers",
    description:
      "Reached a major milestone. The community proved that people hunger for deep, cinematic storytelling in Hindi.",
  },
  {
    year: "2022",
    title: "Full Production",
    description:
      "Invested in full cinematic production — original music, drone footage, archival research. Quality became the brand.",
  },
  {
    year: "2024",
    title: "500K & Beyond",
    description:
      "Half a million subscribers and 20M+ views. RahasyaVaarta became India's leading Hindi mystery documentary channel.",
  },
];

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-card border-b border-border py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-secondary/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-body font-semibold text-xs uppercase tracking-widest mb-4 block">
                The Creator
              </span>
              <div className="gold-divider w-10 mb-5" />
              <h1 className="font-display font-black text-4xl sm:text-5xl text-foreground mb-5 leading-tight">
                Stories That{" "}
                <span className="gradient-gold-text italic">History</span>
                <br />
                Forgot to Tell
              </h1>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                Namaste. Main hun RahasyaVaarta ka founder — ek storyteller jo
                India ke khoe hue rahasyon ko saamne laana chahta hai. Mera kaam
                ek sawal se shuru hua: "Kyun nahi hai Hindi mein aise
                documentaries?"
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://youtube.com/@rahasya-vaarta"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="about-youtube-link"
                >
                  <Button className="bg-primary text-primary-foreground hover:bg-accent shadow-gold transition-smooth gap-2">
                    <Play className="w-4 h-4 fill-current" />
                    Watch Channel
                  </Button>
                </a>
                <Link to="/contact" data-ocid="about-contact-cta">
                  <Button
                    variant="outline"
                    className="border-border hover:border-primary hover:text-primary transition-smooth"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-gold">
                  <img
                    src="/assets/generated/creator-portrait.dim_600x700.jpg"
                    alt="RahasyaVaarta Creator"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Gold accent ring */}
                <div className="absolute -inset-3 rounded-2xl border border-primary/20 pointer-events-none" />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-body font-bold shadow-gold">
                  500K+ Subscribers
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover-lift card-glow transition-smooth"
                data-ocid={`about-stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="font-display font-black text-3xl gradient-gold-text mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-muted/20 border-y border-border py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="Mission & Vision"
              title="Why We Do "
              titleAccent="This"
              align="center"
            />
            <div className="mt-8 space-y-6 text-center">
              <p className="text-foreground/80 font-body text-lg leading-relaxed">
                India ki dharti aise rahasyon se bhari hai jo kabhi sahi se nahi
                bataye gaye. Hamara mission hai in kahaniyon ko cinematic,
                research-backed aur emotionally powerful tarike se present karna
                — apni matrubhasha Hindi mein.
              </p>
              <p className="text-foreground/80 font-body text-lg leading-relaxed">
                Our vision: to be the most trusted Hindi-language documentary
                brand that makes history and mystery accessible, entertaining,
                and deeply human.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            label="Journey"
            title="From Curiosity to "
            titleAccent="Community"
            className="mb-10"
          />
          <div className="relative max-w-2xl">
            <div
              className="absolute left-4 top-0 bottom-0 w-px gold-divider"
              style={{
                background:
                  "linear-gradient(to bottom, oklch(0.72 0.08 82 / 0.5), transparent)",
              }}
            />
            <div className="space-y-8 pl-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-10 top-1 w-5 h-5 rounded-full bg-primary border-2 border-background shadow-gold" />
                  <span className="text-primary font-body font-semibold text-xs uppercase tracking-widest mb-1 block">
                    {m.year}
                  </span>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {m.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {m.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="bg-card border-t border-border py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-2xl text-foreground mb-6">
            Follow the Investigation
          </h2>
          <div className="flex justify-center gap-6">
            {[
              {
                Icon: Youtube,
                href: "https://youtube.com/@rahasya-vaarta",
                label: "YouTube",
                color: "hover:text-red-500",
              },
              {
                Icon: Instagram,
                href: "https://instagram.com/rahasya.vaarta",
                label: "Instagram",
                color: "hover:text-pink-400",
              },
              {
                Icon: SiX,
                href: "https://x.com/rahasya_vaarta",
                label: "Twitter",
                color: "hover:text-foreground",
              },
            ].map(({ Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-muted-foreground transition-smooth ${color}`}
                data-ocid={`about-social-${label.toLowerCase()}`}
              >
                <Icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
