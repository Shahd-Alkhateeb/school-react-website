import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, GraduationCap } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Activities', path: '/activities' },
  { label: 'Events', path: '/events' },
  { label: 'News', path: '/news' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Scholarships', path: '/scholarships' },
  { label: 'Support', path: '/support' },
  { label: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--foreground)' }}>
              Nova Academy
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={{ fontSize: '0.8125rem', fontWeight: 500 }}
                className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/8'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a
              href="#"
              style={{ fontSize: '0.8125rem', fontWeight: 500 }}
              className="px-3.5 py-2 rounded-lg border border-border text-foreground hover:bg-muted/50 transition-colors whitespace-nowrap"
            >
              Parent Portal
            </a>
            <a
              href="#"
              style={{ fontSize: '0.8125rem', fontWeight: 500 }}
              className="px-3.5 py-2 rounded-lg border border-border text-foreground hover:bg-muted/50 transition-colors whitespace-nowrap"
            >
              Student Portal
            </a>
            <Link
              to="/admissions"
              style={{ fontSize: '0.8125rem', fontWeight: 600 }}
              className="px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm"
            >
              Apply Now
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-0.5">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{ fontSize: '0.9375rem', fontWeight: 500 }}
                  className={`block px-4 py-3 rounded-xl transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/8'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t border-border mt-4">
                <a href="#" style={{ fontWeight: 500 }} className="block px-4 py-3 rounded-xl border border-border text-center text-muted-foreground">Parent Portal</a>
                <a href="#" style={{ fontWeight: 500 }} className="block px-4 py-3 rounded-xl border border-border text-center text-muted-foreground">Student Portal</a>
                <Link to="/admissions" style={{ fontWeight: 600 }} className="block px-4 py-3 rounded-xl bg-primary text-white text-center shadow-sm">Apply Now</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
