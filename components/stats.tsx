'use client'

export default function Stats() {
  const stats = [
    { number: '500+', label: 'Active AIS Officers' },
    { number: '1000+', label: 'Service Requests Processed' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Platform Availability' }
  ]

  return (
    <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            KARMASRI by the Numbers
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Exceptional service delivery for Kerala cadre officers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="text-4xl sm:text-5xl font-bold text-amber-300 mb-3 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <p className="text-lg text-primary-foreground/90 font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
