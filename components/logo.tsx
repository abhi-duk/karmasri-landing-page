export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg shadow-md flex-shrink-0">
        {/* Government of Kerala Seal - Simplified circular design */}
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          {/* Outer circle */}
          <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="2"/>
          
          {/* Inner circle with Ashoka Chakra theme */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="1.5" opacity="0.8"/>
          
          {/* Center emblem - stylized Kerala symbol */}
          <circle cx="50" cy="50" r="25" fill="white" opacity="0.95"/>
          <text x="50" y="58" textAnchor="middle" className="fill-amber-700 font-bold text-xl" fontSize="24">K</text>
          
          {/* Decorative elements */}
          <circle cx="50" cy="50" r="22" fill="none" stroke="white" strokeWidth="1" opacity="0.6"/>
        </svg>
      </div>

      {/* Text branding */}
      <div className="flex flex-col justify-center leading-tight">
        <div className="text-xs font-semibold text-foreground/80">Government of Kerala</div>
        <div className="text-xs font-medium text-foreground/70">General Administration (AIS) Dept</div>
        <div className="text-sm font-bold text-primary">KARMASRI PORTAL</div>
      </div>
    </div>
  )
}
