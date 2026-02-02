import Link from "next/link";
import React from "react";

interface PrimaryButtonProps {
  text: string;
  href: string;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  href,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`btn-primary touch-manipulation inline-block text-center ${className}`}
    >
      {text}
    </Link>
  );
};

export default PrimaryButton;
