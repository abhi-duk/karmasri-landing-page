'use client'

import { Award, BookOpen, Briefcase, Eye } from 'lucide-react'

const services = [
  {
    icon: Award,
    title: 'Administrative Excellence',
    description: 'Setting benchmarks for professional governance and administrative reforms across the nation'
  },
  {
    icon: BookOpen,
    title: 'Policy Framework',
    description: 'Creating transformative policies that shape the future of India and improve citizen welfare'
  },
  {
    icon: Briefcase,
    title: 'Leadership',
    description: 'Guiding organizations and departments with vision, integrity, and accountability'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Ensuring open governance and public accountability in all administrative functions'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Areas of Excellence
          </h2>
          <p className="text-xl text-foreground/70">
            How Indian Civil Service Officers contribute to national development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-xl p-8 hover:shadow-lg hover:from-secondary/10 hover:to-accent/10 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
