'use client'

import { Quote } from 'lucide-react'

const mottos = [
  {
    quote: "A civil servant's true strength lies not in position, but in the power to transform lives through transparent and compassionate governance",
    officer: "Dr. M. Viswesvarayya",
    service: "IAS Pioneer"
  },
  {
    quote: "Serve the nation with unwavering integrity; for the trust of citizens is the foundation of strong governance",
    officer: "Sardar Vallabhbhai Patel",
    service: "IAS Legend"
  },
  {
    quote: "Excellence is not a destination, but a continuous journey of improvement in service to the nation",
    officer: "Dr. Rajendra Prasad",
    service: "IAS Visionary"
  },
  {
    quote: "The power to make a difference lies in every decision; use it wisely for the welfare of all",
    officer: "Pandit Jawaharlal Nehru",
    service: "IAS Administrator"
  },
  {
    quote: "Combat corruption through transparency and accountability; this is the foundation of ethical governance",
    officer: "Keshab Mahindra",
    service: "IAS Administrator"
  },
  {
    quote: "Every citizen deserves dignity and justice; let this principle guide every action and decision",
    officer: "K. M. Chandrasekhar",
    service: "IAS Officer"
  }
]

export default function Mottos() {
  return (
    <section id="mottos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Wisdom of <span className="text-primary">Service Excellence</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Inspirational principles from legendary Indian All India Services officers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mottos.slice(1).map((motto, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:border-primary/50 transition-all group">
              <Quote className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-lg text-foreground mb-6 italic font-medium leading-relaxed">
                "{motto.quote}"
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-bold text-primary">{motto.officer}</p>
                <p className="text-xs text-foreground/60">{motto.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6 mt-16">
          <blockquote className="space-y-6">
            <Quote className="w-10 h-10 text-primary mx-auto opacity-60" />
            <p className="text-2xl sm:text-3xl font-semibold text-foreground leading-relaxed text-balance italic">
              "{mottos[0].quote}"
            </p>
            <footer className="space-y-2">
              <p className="text-lg font-bold text-primary">{mottos[0].officer}</p>
              <p className="text-sm text-foreground/60">{mottos[0].service}</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
