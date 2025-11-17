export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">KARMASRI</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A comprehensive platform transforming resource management and service delivery for Kerala cadre All India Services officers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#mottos" className="hover:text-white transition">Inspiration</a></li>
              <li><a href="#stats" className="hover:text-white transition">Platform Stats</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">AIS Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition">IAS Officers</a></li>
              <li><a href="#" className="hover:text-white transition">IPS Officers</a></li>
              <li><a href="#" className="hover:text-white transition">IFS Officers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Connect</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition">Support Portal</a></li>
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-sm text-primary-foreground/70">
              &copy; 2025 KARMASRI - General Administration Department, Government of Kerala. Serving with Integrity.
            </p>
            <div className="flex gap-6 md:justify-end text-sm text-primary-foreground/70">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
