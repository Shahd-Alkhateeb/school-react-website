import { Link } from 'react-router';
import { GraduationCap, Twitter, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const footerSections = [
  {
    title: 'School',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Academic Programs', path: '/programs' },
      { label: 'Activities & Clubs', path: '/activities' },
      { label: 'Events', path: '/events' },
      { label: 'News', path: '/news' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Parent Portal', path: '#' },
      { label: 'Student Portal', path: '#' },
      { label: 'Admin ERP', path: '/admin' },
      { label: 'Mobile App', path: '#' },
      { label: 'AI Assistant', path: '#' },
    ],
  },
  {
    title: 'Admissions',
    links: [
      { label: 'Apply Now', path: '/admissions' },
      { label: 'Scholarships', path: '/scholarships' },
      { label: 'Tuition & Fees', path: '/scholarships' },
      { label: 'Requirements', path: '/admissions' },
      { label: 'FAQs', path: '/support' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', path: '/support' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Documentation', path: '/support' },
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
    ],
  },
];

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Banner */}
      <div className="bg-gradient-to-r from-primary via-accent to-primary border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '1.5rem' }}>
                Stay Updated with SchoolDesk
              </h3>
              <p className="text-white/80 mt-1" style={{ fontSize: '0.95rem' }}>
                Get the latest news, events, and announcements delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                style={{ fontSize: '0.9rem' }}
              />
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-xl hover:bg-white/90 transition-colors whitespace-nowrap" style={{ fontWeight: 700, fontSize: '0.9rem' }}>
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                School<span style={{ color: '#a78bfa' }}>Desk</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6" style={{ fontSize: '0.9rem' }}>
              A premium smart educational institution powered by an enterprise-grade School ERP ecosystem. Empowering students, parents, and educators through technology.
            </p>

            <div className="space-y-3 mb-6">
              <a href="mailto:info@schooldesk.edu" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.85rem' }}>
                <Mail className="w-4 h-4 text-primary shrink-0" />
                info@schooldesk.edu
              </a>
              <a href="tel:+1-800-123-4567" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors" style={{ fontSize: '0.85rem' }}>
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +1 (800) 123-4567
              </a>
              <div className="flex items-start gap-3 text-white/60" style={{ fontSize: '0.85rem' }}>
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                123 Education Blvd, Knowledge City, KC 10001
              </div>
            </div>

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-primary/80 flex items-center justify-center text-white/60 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white mb-5" style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-white/55 hover:text-white transition-colors"
                      style={{ fontSize: '0.875rem' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40" style={{ fontSize: '0.8rem' }}>
            © 2026 SchoolDesk. All rights reserved. Built with ❤️ for education.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-white/40 hover:text-white/70 transition-colors" style={{ fontSize: '0.8rem' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
