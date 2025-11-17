'use client'

import { Shield, Heart, Brain, Users, Zap } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Unwavering commitment to ethical conduct and transparency in all governance matters'
  },
  {
    icon: Users,
    title: 'Public Service',
    description: 'Dedicated to serving citizens and putting nation-building before personal interests'
  },
  {
    icon: Brain,
    title: 'Excellence',
    description: 'Pursuit of highest standards in administration and decision-making'
  },
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Empathy and concern for the welfare of all citizens and communities'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Modern approaches to solve contemporary challenges faced by the nation'
  }
]

export default function Values() {
  return (
    <section id="values" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Core Values
          </h2>
          <p className="text-xl text-foreground/70">
            The principles that guide every Indian Civil Service Officer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-secondary/50 transition-all group">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
