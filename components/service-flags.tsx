import Image from 'next/image'

export default function ServiceFlags() {
  const services = [
    {
      name: 'IAS',
      fullName: 'Indian Administrative Service',
      description: 'Civil Administration & Governance',
      image: '/ias-administrative-service-emblem.jpg',
      color: 'from-primary to-primary/70'
    },
    {
      name: 'IPS',
      fullName: 'Indian Police Service',
      description: 'Law & Order Management',
      image: '/ips-police-service-emblem.jpg',
      color: 'from-secondary to-secondary/70'
    },
    {
      name: 'IFS',
      fullName: 'Indian Forest Service',
      description: 'Environmental Management',
      image: '/ifs-forest-service-emblem.jpg',
      color: 'from-green-600 to-green-500'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Serving All <span className="text-primary">India Services</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Supporting Kerala cadre officers across all three major service streams with unified platform access
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            {services.map((service) => (
              <div key={service.name} className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50 p-8 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="w-full h-40 rounded-lg overflow-hidden mb-6 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-2xl font-bold text-white">{service.name}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{service.name}</h3>
                <p className="text-sm font-semibold text-foreground/60 mb-3">{service.fullName}</p>
                <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
