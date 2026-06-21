import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
}

export function BrandLogo({ className = "", imageClassName = "" }: BrandLogoProps) {
  const imageClasses = `h-auto w-auto ${imageClassName}`;

  return (
    <span className={`inline-flex items-center ${className}`} aria-hidden="true">
      <Image
        src="/brand/zenix-logo-light.webp"
        alt=""
        width={640}
        height={166}
        priority
        className={`brand-logo-light ${imageClasses}`}
      />
      <Image
        src="/brand/zenix-logo-dark.webp"
        alt=""
        width={640}
        height={166}
        priority
        className={`brand-logo-dark ${imageClasses}`}
      />
    </span>
  );
}
