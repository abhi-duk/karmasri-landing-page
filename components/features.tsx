export default function Features() {
  const features = [
    {
      icon: '📦',
      title: 'Resource Management',
      description:
        'Centralized allocation and tracking of human, physical, and digital resources for seamless administration.',
    },
    {
      icon: '🔄',
      title: 'Service Interface',
      description:
        'Unified portal for service requests with structured workflows, approvals, and real-time status visibility.',
    },
    {
      icon: '📈',
      title: 'Dashboard Analytics',
      description:
        'Actionable insights and data-rich dashboards to support evidence-based governance.',
    },
    {
      icon: '🔐',
      title: 'Secure Access',
      description:
        'Role-based authenticated access ensuring confidentiality, accountability, and integrity.',
    },
  ]

  return (
    <section
      id="features"
      className="
        py-20 px-4 sm:px-6 lg:px-8
        bg-gradient-to-b from-blue-50 via-sky-50/60 to-white
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-4">
            Key Capabilities
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Platform <span className="text-primary">Features</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Purpose-built digital modules to support efficient administration for Kerala cadre AIS officers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="
                relative overflow-hidden
                rounded-2xl bg-white/90
                border border-slate-100
                shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                p-7 sm:p-8
                transition-all duration-200
                group
                hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]
              "
            >
              {/* Soft highlight */}
              <div className="pointer-events-none absolute inset-x-0 -top-16 h-24 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon badge */}
              <div className="relative mb-5">
                <div
                  className="
                    inline-flex items-center justify-center
                    w-12 h-12 rounded-xl
                    bg-gradient-to-br from-primary/90 to-blue-700
                    text-white text-2xl shadow-sm
                    group-hover:scale-105 transition-transform
                  "
                >
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative text-base sm:text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative underline */}
              <div
                className="
                  relative mt-4 h-0.5 w-10
                  bg-gradient-to-r from-primary/70 to-emerald-400
                  rounded-full
                  opacity-0 group-hover:opacity-100
                  group-hover:w-14 transition-all duration-200
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
