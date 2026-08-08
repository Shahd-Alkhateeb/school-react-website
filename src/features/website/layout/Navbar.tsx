import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, GraduationCap, Moon, Sun } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Activities & Events', path: '/activities-events' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Support & Contact', path: '/support-contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('school_theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('school_theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-card border-b border-border py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-extrabold text-lg text-foreground font-brand">
              Madrasaty Academy
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1 bg-muted/40 p-1.5 rounded-2xl border border-border">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap text-sm font-medium ${
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-all shadow-sm"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-warning" /> : <Moon className="w-5 h-5 text-primary" />}
            </button>
           
            <Link
              to="/admissions"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 rounded-xl text-sm font-bold inline-flex items-center justify-center transition-colors shadow-sm"
            >
              Apply Now
            </Link>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground shadow-sm"
            >
              {isDark ? <Sun className="w-5 h-5 text-warning" /> : <Moon className="w-5 h-5 text-primary" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl bg-card border border-border text-foreground shadow-sm"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-1.5">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl transition-colors text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2.5 border-t border-border mt-4">
                <Link to="/admin" className="block px-4 py-3 rounded-xl border border-border text-center text-foreground font-semibold bg-background">ERP System Login</Link>
                <Link to="/admissions" className="bg-primary text-primary-foreground block text-center py-3.5 rounded-xl font-bold">Apply Now</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}