import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'motion/react';
import {
  ArrowRight, Play, Users, BookOpen, Trophy, TrendingUp, Star, CheckCircle,
  Brain, Smartphone, Bell, BarChart2, Calendar, HeartHandshake, Shield,
  Zap, GraduationCap, ChevronRight, Quote
} from 'lucide-react';

// ── Animated Counter ──────────────────────────────────────────────────
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ── Wave Divider ──────────────────────────────────────────────────────
function WaveDivider({ flip = false, fill = '#F8F9FE' }: { flip?: boolean; fill?: string }) {
  return (
    <div className={`relative h-20 ${flip ? 'scale-y-[-1]' : ''}`} style={{ overflow: 'hidden' }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
        <path
          d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

const stats = [
  { value: 1500, suffix: '+', label: 'Active Students', icon: Users, color: 'text-primary' },
  { value: 120, suffix: '+', label: 'Expert Teachers', icon: GraduationCap, color: 'text-coral' },
  { value: 30, suffix: '+', label: 'Club Activities', icon: Trophy, color: 'text-teal' },
  { value: 95, suffix: '%', label: 'Graduation Rate', icon: TrendingUp, color: 'text-royal-blue' },
  { value: 98, suffix: '%', label: 'Parent Satisfaction', icon: Star, color: 'text-primary' },
  { value: 24, suffix: '/7', label: 'Digital Platform', icon: Shield, color: 'text-accent' },
];

const features = [
  { icon: Brain, title: 'Smart School ERP', desc: 'Complete enterprise management for every department — admissions to graduation.', color: 'bg-primary/10 text-primary' },
  { icon: Smartphone, title: 'Parent & Student Portals', desc: 'Real-time grades, attendance, and communication at your fingertips.', color: 'bg-coral/10 text-coral' },
  { icon: BarChart2, title: 'Academic Analytics', desc: 'AI-powered insights to identify learning gaps and track student progress.', color: 'bg-teal/10 text-teal' },
  { icon: Bell, title: 'Smart Notifications', desc: 'Instant alerts for absences, assignments, events, and important news.', color: 'bg-royal-blue/10 text-royal-blue' },
  { icon: Calendar, title: 'Attendance Tracking', desc: 'Automated digital attendance with live reporting for every class.', color: 'bg-accent/10 text-accent' },
  { icon: HeartHandshake, title: 'Counseling System', desc: 'Academic, psychological, and career guidance integrated in one platform.', color: 'bg-primary/10 text-primary' },
  { icon: Zap, title: 'AI Assistant', desc: 'Intelligent homework help, doubt resolution, and personalized learning paths.', color: 'bg-coral/10 text-coral' },
  { icon: Shield, title: 'Secure & Compliant', desc: 'Enterprise-grade security with full data privacy compliance for peace of mind.', color: 'bg-teal/10 text-teal' },
];

const whyUs = [
  'International curriculum aligned with global standards',
  'Qualified teachers with advanced degrees and certifications',
  'State-of-the-art STEM and innovation laboratories',
  'Full sports complex and swimming facility',
  'Psychological counseling and wellness programs',
  'Strong university placement record — 92% admitted to top-tier colleges',
  'Safe, inclusive, and diverse learning environment',
  'Award-winning arts and performing arts programs',
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Parent of 2 students',
    text: 'SchoolDesk transformed how we stay connected with our children\'s education. The parent portal shows real-time grades and attendance — we never miss a thing.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format',
    rating: 5,
  },
  {
    name: 'James Okafor',
    role: 'Grade 11 Student',
    text: 'The AI assistant helped me understand calculus concepts I was struggling with for months. The personalized learning path made a huge difference in my grades.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
    rating: 5,
  },
  {
    name: 'Dr. Linda Cheng',
    role: 'Head of Science Department',
    text: 'The ERP system completely eliminated paperwork. Attendance, grading, lesson planning — everything is digital and instant. I can focus entirely on teaching.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
    rating: 5,
  },
];

const programs = [
  { name: 'Kindergarten', age: 'Ages 4–6', desc: 'Playful early learning building social, emotional, and cognitive foundations.', color: 'from-coral/20 to-coral/5', accent: 'text-coral', border: 'border-coral/20' },
  { name: 'Primary School', age: 'Grades 1–5', desc: 'Core curriculum with rich extracurriculars developing well-rounded learners.', color: 'from-primary/20 to-primary/5', accent: 'text-primary', border: 'border-primary/20' },
  { name: 'Middle School', age: 'Grades 6–8', desc: 'Advanced subjects, research skills, and leadership development programs.', color: 'from-teal/20 to-teal/5', accent: 'text-teal', border: 'border-teal/20' },
  { name: 'High School', age: 'Grades 9–12', desc: 'University-preparatory curriculum with AP courses and career pathways.', color: 'from-royal-blue/20 to-royal-blue/5', accent: 'text-royal-blue', border: 'border-royal-blue/20' },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/40 pt-20">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(91,79,199,0.12) 1px, transparent 0)', backgroundSize: '48px 48px' }}
        />
        {/* Purple glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/6 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary" style={{ fontSize: '0.8rem', fontWeight: 600 }}>Smart Educational Institution 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-foreground mb-6 leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-0.03em' }}
            >
              Education
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Reimagined
              </span>
              for the Digital Era
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground mb-8 leading-relaxed"
              style={{ fontSize: '1.1rem', maxWidth: '500px' }}
            >
              Where innovation meets academic excellence. Our smart campus, enterprise ERP platform, and dedicated educators empower every student to reach their full potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                to="/admissions"
                className="flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all"
                style={{ fontWeight: 700, fontSize: '1rem' }}
              >
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="flex items-center gap-3 px-7 py-4 bg-white rounded-2xl shadow-md border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play className="w-4 h-4 text-primary ml-0.5" />
                </div>
                <span style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--foreground)' }}>Watch Tour</span>
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              {['ISO Certified', 'Ministry Approved', 'Award-Winning'].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-muted-foreground" style={{ fontSize: '0.8rem' }}>
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&h=500&fit=crop&auto=format"
                alt="Students in a modern classroom using technology"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-primary/10"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-foreground" style={{ fontWeight: 700, fontSize: '1.1rem' }}>1,500+</div>
                <div className="text-muted-foreground" style={{ fontSize: '0.7rem' }}>Active Students</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-8 top-1/3 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-teal/10"
            >
              <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-teal" />
              </div>
              <div>
                <div className="text-foreground" style={{ fontWeight: 700, fontSize: '1.1rem' }}>95%</div>
                <div className="text-muted-foreground" style={{ fontSize: '0.7rem' }}>Graduation Rate</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 left-1/4 bg-gradient-to-r from-primary to-accent rounded-2xl shadow-xl p-4 text-white"
            >
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 fill-white" />
                <span style={{ fontWeight: 700 }}>98% Satisfaction</span>
              </div>
              <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>From 3,200+ parent reviews</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-foreground mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.03em' }}>
              Our Numbers Speak
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>
              A decade of excellence reflected in every metric that matters.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center p-6 rounded-2xl bg-background hover:shadow-lg hover:shadow-primary/8 border border-transparent hover:border-primary/10 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${stat.color.replace('text-', 'bg-').replace('primary', 'primary/10').replace('coral', 'coral/10').replace('teal', 'teal/10').replace('royal-blue', 'royal-blue/10')}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`${stat.color} mb-1`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '2rem', letterSpacing: '-0.03em' }}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground" style={{ fontSize: '0.82rem', fontWeight: 500 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary mb-4" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
              🚀 Technology Platform
            </span>
            <h2 className="text-foreground mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.03em' }}>
              Everything You Need in One Platform
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto' }}>
              From smart ERP to AI-powered learning tools — our digital ecosystem covers every dimension of modern education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-white rounded-2xl shadow-sm border border-border hover:shadow-lg hover:border-primary/15 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-foreground mb-2" style={{ fontWeight: 700, fontSize: '1rem' }}>{f.title}</h3>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary mb-4" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                📚 Academic Programs
              </span>
              <h2 className="text-foreground mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.03em' }}>
                Four Stages,<br />One Transformative Journey
              </h2>
              <p className="text-muted-foreground mb-8" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                From kindergarten through high school graduation, our curriculum is designed to develop critical thinkers, creative problem-solvers, and global citizens ready for a rapidly changing world.
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                style={{ fontWeight: 700 }}
              >
                Explore All Programs <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {programs.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${p.color} border ${p.border} cursor-pointer transition-all hover:shadow-lg`}
                >
                  <div className={`${p.accent} mb-2`} style={{ fontWeight: 800, fontSize: '1.05rem' }}>{p.name}</div>
                  <div className="text-muted-foreground mb-3" style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{p.age}</div>
                  <p className="text-foreground/70" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white mb-4" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                ✨ Why Choose Us
              </span>
              <h2 className="text-white mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.03em' }}>
                We Don't Just Teach.<br />We Prepare for Life.
              </h2>
              <p className="text-white/80 mb-8" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                SchoolDesk is more than a school — it's an ecosystem of growth. Every program, every teacher, every technology is aligned to help students discover and develop their unique potential.
              </p>
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-primary rounded-2xl hover:shadow-lg hover:scale-105 transition-all"
                style={{ fontWeight: 700, fontSize: '1rem' }}
              >
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 gap-3">
              {whyUs.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15"
                >
                  <CheckCircle className="w-5 h-5 text-white/90 shrink-0 mt-0.5" />
                  <span className="text-white/90" style={{ fontSize: '0.9rem' }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTAL PREVIEW ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary mb-4" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
              📱 Digital Portals
            </span>
            <h2 className="text-foreground mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.03em' }}>
              Connected. Informed. Empowered.
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto' }}>
              Dedicated portals keep every stakeholder in sync — anytime, anywhere.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Parent Portal',
                icon: Users,
                color: 'from-coral/15 to-coral/5 border-coral/20',
                accent: 'text-coral',
                bg: 'bg-coral/10',
                items: ['Real-time grades & attendance', 'Teacher communication', 'Fee payment & invoices', 'Event notifications', 'Progress reports'],
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop&auto=format',
              },
              {
                title: 'Student Portal',
                icon: BookOpen,
                color: 'from-primary/15 to-primary/5 border-primary/20',
                accent: 'text-primary',
                bg: 'bg-primary/10',
                items: ['Assignment submissions', 'AI homework assistant', 'Study resources library', 'Class schedules', 'Exam preparation'],
                img: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=400&h=250&fit=crop&auto=format',
              },
              {
                title: 'Mobile App',
                icon: Smartphone,
                color: 'from-teal/15 to-teal/5 border-teal/20',
                accent: 'text-teal',
                bg: 'bg-teal/10',
                items: ['Push notifications', 'Offline access to materials', 'Digital ID cards', 'Bus tracking', 'Emergency alerts'],
                img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&auto=format',
              },
            ].map((portal, i) => (
              <motion.div
                key={portal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className={`rounded-3xl border bg-gradient-to-br ${portal.color} overflow-hidden transition-all hover:shadow-xl`}
              >
                <div className="overflow-hidden h-44">
                  <img src={portal.img} alt={portal.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className={`w-10 h-10 ${portal.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <portal.icon className={`w-5 h-5 ${portal.accent}`} />
                  </div>
                  <h3 className="text-foreground mb-4" style={{ fontWeight: 700, fontSize: '1.1rem' }}>{portal.title}</h3>
                  <ul className="space-y-2">
                    {portal.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '0.85rem' }}>
                        <CheckCircle className={`w-3.5 h-3.5 ${portal.accent} shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary mb-4" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
              💬 Testimonials
            </span>
            <h2 className="text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '-0.03em' }}>
              Voices from Our Community
            </h2>
          </motion.div>

          <div className="relative">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: activeTestimonial === i ? 1 : 0, y: activeTestimonial === i ? 0 : 20, position: activeTestimonial === i ? 'relative' : 'absolute' }}
                transition={{ duration: 0.5 }}
                className={activeTestimonial === i ? '' : 'pointer-events-none top-0 left-0 right-0'}
              >
                <div className="bg-white rounded-3xl p-10 shadow-lg border border-border text-center">
                  <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
                  <p className="text-foreground mb-8 leading-relaxed" style={{ fontSize: '1.15rem', fontStyle: 'italic' }}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                    <div className="text-left">
                      <div className="text-foreground" style={{ fontWeight: 700 }}>{t.name}</div>
                      <div className="text-muted-foreground" style={{ fontSize: '0.85rem' }}>{t.role}</div>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all ${activeTestimonial === i ? 'w-8 bg-primary' : 'w-2 bg-primary/25'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
            />
            <div className="relative px-10 py-16 text-center">
              <h2 className="text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-0.03em' }}>
                Ready to Join SchoolDesk?
              </h2>
              <p className="text-white/85 mb-8" style={{ fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                Applications for the 2026–2027 academic year are now open. Secure your child's place in a world-class institution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/admissions"
                  className="flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-2xl hover:shadow-lg hover:scale-105 transition-all"
                  style={{ fontWeight: 700, fontSize: '1.05rem' }}
                >
                  Apply Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm border border-white/30 text-white rounded-2xl hover:bg-white/25 transition-all"
                  style={{ fontWeight: 600, fontSize: '1.05rem' }}
                >
                  Contact Admissions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
