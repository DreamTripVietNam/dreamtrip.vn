import { clsx } from "clsx";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={clsx("shrink-0 flex items-center justify-center", className)}>
      <Image
        src="/static/images/dreamtripvn-logo-transparent.png"
        alt="Dreamtrip Viet Nam Logo"
        width={200}
        height={200}
        objectFit="contain"
      />
    </div>
  );
}
