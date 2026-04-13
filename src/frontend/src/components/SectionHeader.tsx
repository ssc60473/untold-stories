interface SectionHeaderProps {
  label?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  titleAccent,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col gap-2 ${alignClass} ${className}`}>
      {label && (
        <span className="text-primary text-xs font-body font-semibold tracking-widest uppercase">
          {label}
        </span>
      )}
      <div className="gold-divider w-12 mb-1" />
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground leading-tight">
        {title}{" "}
        {titleAccent && (
          <span className="gradient-gold-text">{titleAccent}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground font-body text-sm sm:text-base max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
