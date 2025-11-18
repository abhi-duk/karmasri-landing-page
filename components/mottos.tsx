'use client'

export default function CivilServiceObservance() {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">

      {/* Soft background gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-emerald-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">

        {/* Soft emphasis heading */}
        <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary/90 mb-6">
          April 21 — National Civil Service Day
        </div>

        {/* India tricolour underline */}
        <div className="flex justify-center gap-1 mb-10">
          <span className="h-1 w-12 rounded-full bg-[#FF9933]" />
          <span className="h-1 w-12 rounded-full bg-white border border-slate-200/40" />
          <span className="h-1 w-12 rounded-full bg-[#138808]" />
        </div>

        {/* Main Paragraph */}
        <p className="text-sm sm:text-lg leading-relaxed text-foreground/90 font-medium px-4">
          It was on this day in 1947 that 
          <span className="font-semibold text-amber-700"> Sardar Vallabhbhai Patel</span>, 
          the great “Iron Man of India”, honoured civil servants by calling them the
          <span className="px-1.5 py-0.5 mx-1 rounded-md bg-primary/10 text-primary font-semibold italic">
            “Steel Frame of India”
          </span>
          — the resolute force that executes the policies of the government and
          strengthens the wheel of governance that propels the nation forward.
        </p>

        {/* Minimal motif */}
        <div className="mt-10 flex justify-center items-center gap-2 text-[0.65rem] text-foreground/60">
          <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
          In honour of India’s dedicated civil servants
          <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
