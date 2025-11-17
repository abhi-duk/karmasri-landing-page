'use client'

export default function Impact() {
  const stats = [
    { number: '10,000+', label: 'Dedicated Officers Serving' },
    { number: '70+', label: 'Years of Excellence' },
    { number: '1.4B', label: 'Citizens Impacted' },
    { number: '100%', label: 'Commitment to Integrity' }
  ]

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Impact by the Numbers
          </h2>
          <p className="text-xl text-primary-foreground/90">
            The remarkable scale of service and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-3">
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
