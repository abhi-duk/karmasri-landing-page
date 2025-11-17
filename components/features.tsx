export default function Features() {
  const features = [
    {
      icon: '📦',
      title: 'Resource Management',
      description: 'Centralized resource allocation and tracking for efficient administrative operations'
    },
    {
      icon: '🔄',
      title: 'Service Interface',
      description: 'Streamlined service request processing with real-time status updates'
    },
    {
      icon: '📈',
      title: 'Dashboard Analytics',
      description: 'Real-time insights and comprehensive reporting for data-driven decisions'
    },
    {
      icon: '🔐',
      title: 'Secure Access',
      description: 'Role-based authentication ensuring secure and authorized access to all services'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Platform <span className="text-primary">Features</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive tools designed specifically for Kerala cadre AIS officers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 border-2 border-primary/5 hover:border-primary/20 hover:shadow-lg transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
