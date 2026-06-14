import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function WebsiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
