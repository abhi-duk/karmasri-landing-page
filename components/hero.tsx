"use client"

import { useState } from "react"
import { Play, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)

  const logos = [
    {
      name: "IAS",
      label: "Administrative",
      color: "from-blue-100 to-blue-100",
      file: "ias-logo.png", // /public/ias-logo.png
    },
    {
      name: "IPS",
      label: "Police Service",
      color: "from-white to-yellow-100",
      file: "ips-logo.png", // /public/ips-logo.png
    },
    {
      name: "IFS",
      label: "Forest Service",
      color: "from-green-100 to-green-200",
      file: "ifs-logo.png", // /public/ifs-logo.png
    },
  ]

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/kerala-secretariat.jpg')`,
        }}
      ></div>

      {/* Blue gradient overlay */}
<div className="absolute inset-0 bg-gradient-to-br from-[#0a1a33]/90 via-[#0d2345]/90 to-[#102b57]/85"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content with Logos */}
          <div className="space-y-8 animate-slideInUp">
            <div className="flex gap-6">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${logo.color} rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-110 transition-transform`}
                  >
                    <Image
                      src={`/${logo.file}`} // uses /public/<file>
                      alt={`${logo.label} (${logo.name}) logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <span className="text-xs font-semibold text-white/90">
                    {logo.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-1">
  {/* Large Golden Title */}
  <h1
    className="
      text-5xl sm:text-6xl font-extrabold 
      bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
      bg-clip-text text-transparent
      tracking-wide drop-shadow-lg
    "
  >
    KARMASRI
  </h1>

  {/* White Headings */}
  <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight text-balance">
    Empowering Leadership.
  </h1>

  <h1 className="text-2xl sm:text-3xl font-bold text-white/95 leading-tight text-balance">
    Elevating Governance.
  </h1>
</div>


            <p className="text-lg text-white/90 leading-relaxed max-w-lg">
              Streamlining workflows and empowering Kerala&apos;s AIS leadership
              through digital innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-0">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 w-fit hover:scale-105 shadow-lg">
                <span>Access Portal</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 w-fit hover:scale-105 backdrop-blur">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="animate-slideInRight relative h-80 sm:h-96">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl group border-4 border-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>

              <video
                className="w-full h-full object-cover"
                poster="/kerala-ais-officers-administrative-excellence-digi.jpg"
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>

              {!isPlaying && (
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative p-4 group/btn transition-all duration-300 hover:scale-125"
                  >
                    <div className="absolute inset-0 bg-primary rounded-full opacity-80 group-hover/btn:opacity-100 transition blur-sm group-hover/btn:blur-md"></div>
                    <div className="relative bg-primary text-white rounded-full p-4 flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
