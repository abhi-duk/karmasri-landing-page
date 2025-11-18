import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* PNG Logo Box */}
      <div className="flex items-center justify-center w-14 h-14 flex-shrink-0 overflow-hidden">
        <Image
          src="/Government_of_Kerala_Logo.png"   // <-- place file in /public
          alt="Govt. of Kerala Logo"
          width={56}
          height={56}
          className="object-contain"
          priority
        />
      </div>

      {/* Text branding */}
      <div className="flex flex-col justify-center leading-tight">
        <div className="text-xs font-semibold text-foreground/80">
          Government of Kerala
        </div>
        <div className="text-xs font-medium text-foreground/70">
          General Administration (AIS) Dept
        </div>
        <div className="text-sm font-bold text-primary">
          KARMASRI PORTAL
        </div>
      </div>
    </div>
  );
}
