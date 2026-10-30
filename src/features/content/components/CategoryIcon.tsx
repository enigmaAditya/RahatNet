import React from "react";
import {
  ShieldAlert,
  HeartPulse,
  Sprout,
  BookOpen,
  HelpCircle,
  LucideProps,
} from "lucide-react";

interface CategoryIconProps extends LucideProps {
  name: string;
}

export function CategoryIcon({ name, ...props }: CategoryIconProps) {
  switch (name) {
    case "ShieldAlert":
      return <ShieldAlert {...props} />;
    case "HeartPulse":
      return <HeartPulse {...props} />;
    case "Sprout":
      return <Sprout {...props} />;
    case "BookOpen":
      return <BookOpen {...props} />;
    default:
      return <HelpCircle {...props} />;
  }
}
