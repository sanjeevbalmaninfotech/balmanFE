import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  children,
  className = "",
  align = "center",
}: SectionHeadingProps) => {
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <h2
      className={`text-gradient font-bold leading-[110%] tracking-tight ${alignClass} ${className}`}
      style={{
        fontSize: "clamp(24px, 5vw, 36px)",
      }}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
