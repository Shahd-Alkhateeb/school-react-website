import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowRight, Star, Brain, Users, BookOpen, Bell, BarChart3, Shield,
  Smartphone, GraduationCap, Award, Globe, Zap, TrendingUp, CheckCircle,
  ChevronLeft, ChevronRight, Quote
} from 'lucide-react';

function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 1500, suffix: '+', label: 'Students Enrolled', icon: Users },
  { value: 120, suffix: '+', label: 'Expert Teachers', icon: GraduationCap },
  { value: 30, suffix: '+', label: 'Clubs & Activities', icon: Award },
  { value: 95, suffix: '%', label: 'Graduation Rate', icon: TrendingUp },
  { value: 98, suffix: '%', label: 'Parent Satisfaction', icon: Star },
  { value: 24, suffix: '/7', label: 'Digital Platform', icon: Globe },
];

const features = [
  { icon: Brain, title: 'Smart School ERP', desc: 'Complete enterprise resource planning for seamless school operations management.', color: '#5B4FC7' },
  { icon: Users, title: 'Parent Portal', desc: 'Real-time updates on attendance, grades, and school announcements.', color: '#EF7B6C' },
  { icon: BookOpen, title: 'Student Portal', desc: 'Personalized learning hub with assignments, resources, and progress tracking.', color: '#5B6FE8' },
  { icon: Brain, title: 'AI Assistant', desc: 'Intelligent support for students and teachers powered by advanced AI.', color: '#4EABBE' },
  { icon: CheckCircle, title: 'Attendance Tracking', desc: 'Automated attendance with instant parent notifications and analytics.', color: '#3D5A9E' },
  { icon: Shield, title: 'Counseling System', desc: 'Integrated academic and wellness counseling with appointment booking.', color: '#10B981' },
  { icon: Bell, title: 'Notifications', desc: 'Multi-channel communication across SMS, email, and push notifications.', color: '#F59E0B' },
  { icon: BarChart3, title: 'Academic Analytics', desc: 'Data-driven insights to track and improve student performance.', color: '#EF4444' },
];

const whyUs = [
  {
    icon: Zap,
    title: 'Technology-First Education',
    desc: 'Every classroom is equipped with smart boards, AI learning tools, and digital resources that make learning dynamic and engaging.',
  },
  {
    icon: Globe,
    title: 'International Curriculum',
    desc: 'We follow the Cambridge International curriculum, preparing students for global universities and careers.',
  },
  {
    icon: Shield,
    title: 'Safe & Nurturing Environment',
    desc: 'State-of-the-art security systems, wellness programs, and a dedicated counseling team ensure every student thrives.',
  },
  {
    icon: Smartphone,
    title: 'Always Connected',
    desc: 'Our mobile app keeps parents, students, and teachers connected 24/7 with real-time updates and communication tools.',
  },
];

const testimonials = [
  {
    name: 'Fatima Al-Rashid',
    role: 'Parent of Grade 8 Student',
    avatar: 'FA',
    color: '#5B4FC7',
    quote: 'Nova Academy has completely transformed how I stay connected with my son\'s education. The parent portal is incredibly intuitive and the teachers are truly exceptional.',
    rating: 5,
  },
  {
    name: 'Ahmed Hassan',
    role: 'Grade 11 Student',
    avatar: 'AH',
    color: '#EF7B6C',
    quote: 'The AI learning tools and robotics club here are incredible. I\'ve learned more in two years at Nova than I ever expected, and I\'m now preparing for MIT.',
    rating: 5,
  },
  {
    name: 'Dr. Sarah Williams',
    role: 'Head of Science Department',
    avatar: 'SW',
    color: '#4EABBE',
    quote: 'Teaching at Nova Academy is a dream. The analytics platform shows me exactly where each student needs support, and the administration is always available to help.',
    rating: 5,
  },
  {
    name: 'Mohammed Al-Khalidi',
    role: 'Parent of Three Students',
    avatar: 'MK',
    color: '#3D5A9E',
    quote: 'All three of my children attend Nova Academy and the consistency in quality across grade levels is remarkable. The sibling discount program is also very generous.',
    rating: 5,
  },
  {
    name: 'Layla Nour',
    role: 'Grade 12 Student — Top Graduate',
    avatar: 'LN',
    color: '#5B6FE8',
    quote: 'I won a full scholarship to University College London thanks to the academic foundation Nova Academy gave me. The teachers genuinely care about your future.',
    rating: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const prev = () => setTestimonialIndex(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setTestimonialIndex(i => (i + 1) % testimonials.length);

  const visible = [
    testimonials[testimonialIndex],
    testimonials[(testimonialIndex + 1) % testimonials.length],
    testimonials[(testimonialIndex + 2) % testimonials.length],
  ];

  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #F8F6FF 0%, #EDE9FF 50%, #E8F0FF 100%)' }}
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,79,199,0.12) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(78,171,190,0.1) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', top: '30%', left: '45%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,111,232,0.08) 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
                  style={{ fontSize: '0.8125rem', fontWeight: 600 }}
                >
                  <Star className="w-3.5 h-3.5" />
                  #1 Ranked School in the Region 2026
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--foreground)' }}
                className="mb-6"
              >
                Empowering{' '}
                <span style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #5B6FE8 60%, #4EABBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Tomorrow's
                </span>
                {' '}Leaders Today
              </motion.h1>

              <motion.p
                variants={fadeUp}
                style={{ fontSize: '1.125rem', lineHeight: 1.75, color: 'var(--muted-foreground)' }}
                className="mb-10 max-w-xl"
              >
                Nova Academy combines world-class Cambridge education with cutting-edge technology to deliver a transformative learning experience for students from KG to Grade 12.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white hover:opacity-90 transition-opacity shadow-lg"
                  style={{ fontWeight: 600, fontSize: '0.9375rem' }}
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-white/70 text-foreground hover:bg-white transition-colors"
                  style={{ fontWeight: 600, fontSize: '0.9375rem' }}
                >
                  Discover More
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['#5B4FC7', '#EF7B6C', '#4EABBE', '#5B6FE8'].map((c, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white" style={{ background: c, fontSize: '0.75rem', fontWeight: 700 }}>
                      {['FA', 'AH', 'SW', 'MK'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>
                    Trusted by <strong style={{ color: 'var(--foreground)' }}>1,500+ families</strong>
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop&auto=format"
                  alt="Students learning at Nova Academy"
                  className="w-full h-full object-cover"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(91,79,199,0.3) 0%, transparent 60%)' }} />
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--foreground)' }}>95%</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>Graduation Rate</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-6 bottom-1/4 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--foreground)' }}>30+</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>Award-Winning Clubs</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {stats.map(({ value, suffix, label, icon: Icon }) => (
              <motion.div key={label} variants={fadeUp} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div style={{ fontWeight: 800, fontSize: '2rem', color: 'var(--foreground)', lineHeight: 1 }} className="mb-1">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', fontWeight: 500 }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24" style={{ background: '#F8F6FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              <Zap className="w-3.5 h-3.5" />
              Powered by Smart ERP
            </motion.span>
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', lineHeight: 1.2 }} className="mb-4">
              Everything Your School Needs,{' '}
              <span style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #4EABBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                In One Platform
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '1.0625rem', color: 'var(--muted-foreground)', maxWidth: 560, margin: '0 auto' }}>
              Our integrated School ERP ecosystem brings together every aspect of school management into a single, intuitive platform.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {features.map(({ icon: Icon, title, desc, color }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-white rounded-3xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center" style={{ background: `${color}18` }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }} className="mb-2">{title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
                <Award className="w-3.5 h-3.5" />
                Why Nova Academy
              </motion.span>
              <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', lineHeight: 1.2 }} className="mb-4">
                The Future of Education is{' '}
                <span style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #4EABBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Already Here
                </span>
              </motion.h2>
              <motion.p variants={fadeUp} style={{ fontSize: '1.0625rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }} className="mb-8">
                We don't just teach — we prepare students for the real world through a blend of rigorous academics, technology, and character development.
              </motion.p>

              <motion.div variants={stagger} className="space-y-5">
                {whyUs.map(({ icon: Icon, title, desc }) => (
                  <motion.div key={title} variants={fadeUp} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--foreground)' }} className="mb-1">{title}</h4>
                      <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
                <img
                  src="https://images.unsplash.com/photo-1758611228434-7b5b697abd0a?w=800&h=600&fit=crop&auto=format"
                  alt="Nova Academy modern campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, color: 'var(--foreground)' }}>Cambridge Certified</p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>Since 1998 · KG to Grade 12</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24" style={{ background: 'var(--foreground)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-white/70" style={{ background: 'rgba(255,255,255,0.08)', fontSize: '0.8125rem', fontWeight: 600 }}>
              <Quote className="w-3.5 h-3.5" />
              Real Stories
            </motion.span>
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'white', lineHeight: 1.2 }} className="mb-4">
              What Our Community Says
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.5)', maxWidth: 560, margin: '0 auto' }}>
              Hear from students, parents, and teachers about their Nova Academy experience.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {visible.map((t, i) => (
              <motion.div
                key={`${testimonialIndex}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-3xl p-7"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="flex text-yellow-400 mb-5">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75 }} className="mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: t.color, fontSize: '0.75rem', fontWeight: 700 }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, color: 'white', fontSize: '0.9375rem' }}>{t.name}</p>
                    <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)' }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button onClick={prev} className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className="rounded-full transition-all"
                  style={{ width: i === testimonialIndex ? 24 : 8, height: 8, background: i === testimonialIndex ? 'white' : 'rgba(255,255,255,0.25)' }}
                />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 rounded-full flex items-center justify-center transition-colors hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="rounded-3xl p-12 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #5B6FE8 60%, #4EABBE 100%)' }}
            >
              <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ position: 'absolute', bottom: -60, left: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />

              <div className="relative z-10">
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', lineHeight: 1.2 }} className="mb-4">
                  Ready to Join Nova Academy?
                </h2>
                <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.75)', maxWidth: 480, margin: '0 auto 2rem' }}>
                  Applications for the 2026–2027 academic year are now open. Secure your child's future today.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/admissions"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary hover:opacity-90 transition-opacity"
                    style={{ fontWeight: 700, fontSize: '0.9375rem' }}
                  >
                    Start Application
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white border transition-colors"
                    style={{ fontWeight: 600, fontSize: '0.9375rem', borderColor: 'rgba(255,255,255,0.35)' }}
                  >
                    Book a Campus Tour
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
