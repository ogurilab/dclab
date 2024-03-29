import React from "react";
import { Image } from "@/components/ui/image";

export function ScrapboxIcon({ className }: { className?: string }) {
  return (
    <Image
      alt="scrapbox icon"
      className={className}
      height={24}
      src="/scrapbox.webp"
      width={24}
    />
  );
}
