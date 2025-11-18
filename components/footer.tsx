import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0B4A8F] text-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Tricolour accent */}
        <div className="flex justify-center gap-1">
          <span className="h-1.5 w-12 rounded-full bg-[#FF9933]" />
          <span className="h-1.5 w-12 rounded-full bg-white" />
          <span className="h-1.5 w-12 rounded-full bg-[#138808]" />
        </div>

        {/* MAIN ROW: Left (KARMASRI) | Right (Owned + Developed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>
            <h3 className="font-semibold text-lg tracking-wide">
              KARMASRI
            </h3>
            <p className="mt-2 text-sm text-slate-100/85 max-w-sm leading-relaxed">
              Streamlining administrative excellence for Kerala cadre All India Services officers.
            </p>
          </div>

          {/* RIGHT SIDE (Ownership + CDIPD/DUK) */}
          <div className="flex flex-col items-start md:items-end gap-6">

            {/* OWNERSHIP */}
            <div className="text-left md:text-right">
              <p className="font-semibold text-sm">Owned By</p>
              <p className="text-xs text-slate-100/80 leading-relaxed">
                General Administration Department (AIS),<br />
                Government of Kerala.
              </p>
            </div>

            {/* CDIPD + DUK */}
            <div className="flex items-center gap-4 md:justify-end">
              
              <div className="text-left md:text-right text-xs leading-tight text-slate-100/80">
                <p className="font-semibold text-slate-50">
                  Designed &amp; Developed by CDIPD
                </p>
                <p className="text-slate-100/75">
                  Digital University Kerala
                </p>
              </div>
<Image
                src="/duk_logo_white.png"
                alt="Digital University Kerala"
                width={100}       // bigger logo
                height={100}
                className="object-contain"
              />
            </div>

          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">

          <p className="text-[0.75rem] text-slate-100/75">
            © 2025 KARMASRI Portal, Government of Kerala.
          </p>

          <div className="flex gap-6 text-[0.75rem] text-slate-100/85">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Accessibility</a>
          </div>

        </div>

      </div>
    </footer>
  )
}
