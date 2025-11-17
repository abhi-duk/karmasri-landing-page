export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
          Ready to Access Your Portal?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Join fellow AIS officers in experiencing streamlined administrative services and resource management through KARMASRI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded-full hover:bg-accent/90 transition font-bold text-lg">
            Officer Login
          </button>
          <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-full hover:bg-white/10 transition font-bold text-lg">
            Request Access
          </button>
        </div>
      </div>
    </section>
  )
}
