import { Link } from 'react-router';
import { GraduationCap, Twitter, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const sections = [
  {
    title: 'School',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Activities & Events', path: '/activities-events' },
      { label: 'Academic Programs', path: '/admissions' },
    ],
  },
  {
    title: 'Admissions',
    links: [
      { label: 'Apply Now', path: '/admissions' },
      { label: 'Tuition & Fees', path: '/admissions' },
      { label: 'Requirements', path: '/admissions' },
    ],
  },
  {
    title: 'Support & Contact',
    links: [
      { label: 'Help Center', path: '/support-contact' },
      { label: 'Contact Us', path: '/support-contact' },
      { label: 'Privacy Policy', path: '#' },
    ],
  },
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.125rem' }}>Madrasaty Academy</span>
            </Link>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.625' }} className="text-white/60 mb-6">
              Empowering tomorrow's leaders through innovation, excellence, and a holistic education experience.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:info@novaacademy.edu" style={{ fontSize: '0.8125rem' }} className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                info@novaacademy.edu
              </a>
              <a href="tel:+97145551234" style={{ fontSize: '0.8125rem' }} className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +963 994416055
              </a>
              <div style={{ fontSize: '0.8125rem' }} className="flex items-start gap-2.5 text-white/60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Academic City, Syria
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {sections.map(section => (
              <div key={section.title}>
                <h4 style={{ fontWeight: 600, fontSize: '0.8125rem', letterSpacing: '0.05em' }} className="text-white/40 uppercase mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map(link => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        style={{ fontSize: '0.875rem' }}
                        className="text-white/70 hover:text-white transition-colors"
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

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontSize: '0.8125rem' }} className="text-white/40">
            © 2026 Madrasaty Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4 text-white/70" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}