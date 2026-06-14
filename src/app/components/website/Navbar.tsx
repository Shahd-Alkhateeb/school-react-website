import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap, Menu, X, ChevronDown, LogIn, UserCircle, BookOpen
} from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Academic Programs', path: '/programs' },
  { label: 'Activities', path: '/activities' },
  { label: 'Events', path: '/events' },
  { label: 'News', path: '/news' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Scholarships', path: '/scholarships' },
  { label: 'Support', path: '/support' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portalsOpen, setPortalsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-primary/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span
                  className="text-foreground"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '1.125rem', letterSpacing: '-0.02em' }}
                >
                  School<span className="text-primary">Desk</span>
                </span>
                <p className="text-muted-foreground" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Smart ERP Platform</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/8'
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  }`}
                  style={{ fontSize: '0.8rem', fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="relative">
                <button
                  onClick={() => setPortalsOpen(!portalsOpen)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-primary/20 text-primary hover:bg-primary/5 transition-all"
                  style={{ fontSize: '0.8rem', fontWeight: 600 }}
                >
                  <UserCircle className="w-4 h-4" />
                  Portals
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${portalsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {portalsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl shadow-primary/10 border border-primary/10 overflow-hidden"
                    >
                      <Link
                        to="/admin"
                        className="flex items-center gap-2.5 px-4 py-3 hover:bg-primary/5 text-foreground/80 hover:text-primary transition-colors"
                        style={{ fontSize: '0.85rem' }}
                        onClick={() => setPortalsOpen(false)}
                      >
                        <LogIn className="w-4 h-4" />
                        Admin Portal
                      </Link>
                      <a
                        href="#"
                        className="flex items-center gap-2.5 px-4 py-3 hover:bg-primary/5 text-foreground/80 hover:text-primary transition-colors"
                        style={{ fontSize: '0.85rem' }}
                        onClick={() => setPortalsOpen(false)}
                      >
                        <UserCircle className="w-4 h-4" />
                        Parent Portal
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2.5 px-4 py-3 hover:bg-primary/5 text-foreground/80 hover:text-primary transition-colors"
                        style={{ fontSize: '0.85rem' }}
                        onClick={() => setPortalsOpen(false)}
                      >
                        <BookOpen className="w-4 h-4" />
                        Student Portal
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                to="/admissions"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all"
                style={{ fontSize: '0.8rem', fontWeight: 700 }}
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg text-foreground hover:bg-primary/5 transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm xl:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl xl:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '1rem' }}>
                      School<span className="text-primary">Desk</span>
                    </span>
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-1 mb-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl transition-all ${
                        location.pathname === link.path
                          ? 'bg-primary text-white'
                          : 'text-foreground/70 hover:bg-primary/5 hover:text-primary'
                      }`}
                      style={{ fontSize: '0.9rem', fontWeight: 500 }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="space-y-3 border-t border-border pt-6">
                  <Link to="/admin" className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-primary/30 text-primary" style={{ fontWeight: 600 }}>
                    <LogIn className="w-4 h-4" />
                    Admin Portal
                  </Link>
                  <Link to="/admissions" className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25" style={{ fontWeight: 700 }}>
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
