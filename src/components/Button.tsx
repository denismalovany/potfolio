import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "link";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md border font-medium shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

  const variantClasses = {
    primary:
      "border-indigo-600 bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700",
    secondary:
      "border-indigo-600 bg-white px-6 py-3 text-indigo-600 hover:bg-indigo-50",
    link: "border-transparent bg-transparent px-0 py-0 text-indigo-600 hover:text-indigo-500",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}