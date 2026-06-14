import { Link } from 'react-router';
import { GraduationCap, Twitter, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const sections = [
  {
    title: 'School',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Academic Programs', path: '/programs' },
      { label: 'Activities & Clubs', path: '/activities' },
      { label: 'Events Calendar', path: '/events' },
      { label: 'News & Announcements', path: '/news' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Parent Portal', path: '#' },
      { label: 'Student Portal', path: '#' },
      { label: 'ERP System', path: '/admin' },
      { label: 'Mobile App', path: '#' },
      { label: 'Academic Analytics', path: '#' },
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
      { label: 'FAQ', path: '/support' },
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
              <span style={{ fontWeight: 700, fontSize: '1.125rem' }}>Nova Academy</span>
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
                +971 4 555 1234
              </a>
              <div style={{ fontSize: '0.8125rem' }} className="flex items-start gap-2.5 text-white/60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Academic City, Dubai, UAE
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
            © 2026 Nova Academy. All rights reserved.
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
