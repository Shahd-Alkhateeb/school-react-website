import { Link } from 'react-router';
import { GraduationCap, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

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
    ],
  },
  {
    title: 'Support & Contact',
    links: [
      { label: 'Contact Us for Help', path: '/support-contact' },
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
    <footer className="bg-sidebar border-t border-white/5">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-extrabold text-xl text-white">Madrasaty Academy</span>
            </Link>
            <p className="text-sm text-sidebar-muted leading-relaxed mb-6 max-w-sm">
              Empowering tomorrow's leaders through innovation, excellence, and a holistic education experience.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@novaacademy.edu" className="flex items-center gap-3 text-sm text-sidebar-muted hover:text-white transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                info@novaacademy.edu
              </a>
              <a href="tel:+963994416088" className="flex items-center gap-3 text-sm text-sidebar-muted hover:text-white transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +963 994 416 088
              </a>
              <div className="flex items-start gap-3 text-sm text-sidebar-muted">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Damascus-Al Mazza, Syria
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {sections.map(section => (
              <div key={section.title}>
                <h4 className="font-bold text-sm text-white/50 tracking-wider uppercase mb-5">
                  {section.title}
                </h4>
                <ul className="space-y-3.5">
                  {section.links.map(link => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-sm text-sidebar-muted hover:text-white transition-colors font-medium"
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

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-sidebar-muted font-medium">
            © 2026 Madrasaty Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary text-sidebar-muted hover:text-white flex items-center justify-center transition-all shadow-sm"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}