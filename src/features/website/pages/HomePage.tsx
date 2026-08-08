import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowRight, Star, Brain, Users, BookOpen, Bell, BarChart3, Shield,
  Smartphone, GraduationCap, Award, Globe, Zap, TrendingUp, CheckCircle,
  ChevronLeft, ChevronRight, Quote
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

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
];

const features = [
  { icon: Brain, title: 'Smart School ERP', desc: 'Complete enterprise resource planning for seamless operations.', theme: { text: 'text-primary', bg: 'bg-primary/10' } },
  { icon: Users, title: 'Parent Portal', desc: 'Real-time updates on attendance, grades, and announcements.', theme: { text: 'text-coral', bg: 'bg-coral/10' } },
  { icon: BookOpen, title: 'Student Portal', desc: 'Personalized learning hub with assignments and progress tracking.', theme: { text: 'text-royal-blue', bg: 'bg-royal-blue/10' } },
  { icon: Brain, title: 'AI Assistant', desc: 'Intelligent support for students and teachers powered by AI.', theme: { text: 'text-teal', bg: 'bg-teal/10' } },
  { icon: CheckCircle, title: 'Attendance Tracking', desc: 'Automated attendance with instant parent notifications.', theme: { text: 'text-dark-blue', bg: 'bg-dark-blue/10' } },
  { icon: Shield, title: 'Counseling System', desc: 'Integrated academic and wellness counseling with bookings.', theme: { text: 'text-success', bg: 'bg-success/10' } },
  { icon: Bell, title: 'Notifications', desc: 'Multi-channel communication across SMS, email, and push.', theme: { text: 'text-warning', bg: 'bg-warning/10' } },
  { icon: BarChart3, title: 'Academic Analytics', desc: 'Data-driven insights to track and improve performance.', theme: { text: 'text-destructive', bg: 'bg-destructive/10' } },
];

const whyUs = [
  { icon: Zap, title: 'Technology-First Education', desc: 'Smart boards, AI learning tools, and digital resources make learning dynamic and engaging.' },
  { icon: Globe, title: 'International Curriculum', desc: 'We follow the Cambridge International curriculum, preparing students for global universities.' },
  { icon: Shield, title: 'Safe & Nurturing Environment', desc: 'State-of-the-art security, wellness programs, and dedicated counseling ensure every student thrives.' },
  { icon: Smartphone, title: 'Always Connected', desc: 'Our mobile app keeps parents, students, and teachers connected 24/7 with real-time updates.' },
];

const testimonials = [
  { name: 'Fatima Al-Rashid', role: 'Parent of Grade 8 Student', avatar: 'FA', theme: 'bg-primary', quote: 'Madrasaty Academy has completely transformed how I stay connected with my son\'s education. The parent portal is incredibly intuitive.', rating: 5 },
  { name: 'Ahmed Hassan', role: 'Grade 11 Student', avatar: 'AH', theme: 'bg-coral', quote: 'The AI learning tools and robotics club here are incredible. I\'ve learned more in two years at Madrasaty than I ever expected.', rating: 5 },
  { name: 'Dr. Sarah Williams', role: 'Head of Science Department', avatar: 'SW', theme: 'bg-teal', quote: 'Teaching at Madrasaty Academy is a dream. The analytics platform shows me exactly where each student needs support.', rating: 5 },
  { name: 'Mohammed Al-Khalidi', role: 'Parent of Three Students', avatar: 'MK', theme: 'bg-dark-blue', quote: 'All three of my children attend Madrasaty Academy and the consistency in quality across grade levels is remarkable.', rating: 5 },
  { name: 'Layla Nour', role: 'Grade 12 Student', avatar: 'LN', theme: 'bg-royal-blue', quote: 'I won a full scholarship to UCL thanks to the academic foundation Madrasaty Academy gave me.', rating: 5 },
];

const achievements = [
  { value: '28', label: 'National Awards', sublabel: 'Academic excellence recognition' },
  { value: '15+', label: 'University Partners', sublabel: 'Global university partnerships' },
  { value: '98%', label: 'University Acceptance', sublabel: 'Of graduating students' },
  { value: '12', label: 'International Programs', sublabel: 'Exchange & enrichment programs' },
];

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
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-teal/5 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-semibold border border-primary/20">
                  <Star className="w-4 h-4" />
                  #1 Ranked School in the Region 2026
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
                Empowering{' '}
                <span className="text-primary">
                  Tomorrow's
                </span>
                {' '}Leaders Today
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                Madrasaty Academy combines world-class Cambridge education with cutting-edge technology to deliver a transformative learning experience for students from seventh to Grade 12.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">

                <Link to="/admissions" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center transition-colors shadow-sm gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border bg-card text-foreground hover:bg-muted transition-colors font-bold shadow-sm">
                  Discover More
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {visible.map((t, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-background flex items-center justify-center text-white text-xs font-bold shadow-sm ${t.theme}`}>
                      {t.avatar}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-warning mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Trusted by <strong className="text-foreground">1,500+ families</strong>
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] p-2 bg-card border border-border shadow-lg">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop&auto=format" alt="Madrasaty Academy" className="w-full h-full object-cover rounded-[1.5rem]" />
              </div>

              {/* Floating stat cards */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute -left-8 top-1/4 bg-card rounded-2xl p-5 border border-border shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-extrabold text-2xl text-foreground">95%</p>
                    <p className="text-xs text-muted-foreground font-semibold">Graduation Rate</p>
                  </div>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="absolute -right-6 bottom-1/4 bg-card rounded-2xl p-5 border border-border shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <p className="font-extrabold text-2xl text-foreground">30+</p>
                    <p className="text-xs text-muted-foreground font-semibold">Award-Winning Clubs</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION*/}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: '-100px' }} 
            variants={stagger} 
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
          >
            {stats.map(({ value, suffix, label, icon: Icon }) => (
              <motion.div 
                key={label} 
                variants={fadeUp} 
                className="flex flex-col items-center justify-center text-center p-4 rounded-2xl hover:bg-muted/30 transition-colors group min-w-[160px]"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-extrabold text-2xl text-foreground mb-1">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <p className="text-xs text-muted-foreground font-semibold">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 text-sm font-semibold border border-primary/20">
              <Zap className="w-4 h-4" />
              Powered by Smart ERP
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
              Everything Your School Needs,<br />
              <span className="text-primary">
                In One Platform
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our integrated School ERP ecosystem brings together every aspect of school management into a single, intuitive platform.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc, theme }) => (
              <motion.div key={title} variants={fadeUp} className="bg-card rounded-3xl p-6 border border-border hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-2xl mb-5 flex items-center justify-center ${theme.bg}`}>
                  <Icon className={`w-7 h-7 ${theme.text}`} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 text-sm font-semibold border border-primary/20">
                <Award className="w-4 h-4" />
                Why Madrasaty Academy
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-5">
                The Future of Education is{' '}
                <span className="text-primary">
                  Already Here
                </span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-10">
                We don't just teach — we prepare students for the real world through a blend of rigorous academics, technology, and character development.
              </motion.p>

              <motion.div variants={stagger} className="space-y-6">
                {whyUs.map(({ icon: Icon, title, desc }) => (
                  <motion.div key={title} variants={fadeUp} className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-1">{title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] p-2 bg-background border border-border shadow-lg">
                <img src="https://images.unsplash.com/photo-1758611228434-7b5b697abd0a?w=800&h=600&fit=crop&auto=format" alt="Campus" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-3xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Cambridge Certified</p>
                    <p className="text-sm text-muted-foreground font-medium">Since 1998 · KG to Grade 12</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ ACHIEVEMENTS*/}
      <section className="py-24 bg-sidebar text-sidebar-foreground border-y border-white/10 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-sidebar-foreground leading-tight mb-4">
              By the Numbers
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-sidebar-muted max-w-2xl mx-auto">
              Our achievements speak for themselves.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map(({ value, label, sublabel }) => (
              <motion.div key={label} variants={fadeUp} className="text-center">
                <p className="text-5xl md:text-6xl font-extrabold text-sidebar-foreground mb-2">{value}</p>
                <p className="font-bold text-lg text-white mb-1">{label}</p>
                <p className="text-sm text-sidebar-muted font-medium">{sublabel}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="text-center mb-16">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-primary bg-primary/10 text-sm font-semibold border border-primary/20">
              <Quote className="w-4 h-4" />
              Real Stories
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">
              What Our Community Says
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from students, parents, and teachers about their Madrasaty Academy experience.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {visible.map((t, i) => (
              <motion.div key={`${testimonialIndex}-${i}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.4 }} className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex text-warning mb-6">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm italic">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm ${t.theme}`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-5">
            <button onClick={prev} className="w-12 h-12 rounded-full flex items-center justify-center transition-colors bg-card border border-border hover:bg-muted text-foreground">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIndex(i)} className={`h-2.5 rounded-full transition-all ${i === testimonialIndex ? 'w-8 bg-primary' : 'w-2.5 bg-border'}`} />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full flex items-center justify-center transition-colors bg-card border border-border hover:bg-muted text-foreground">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/*CTA BANNER*/}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden bg-background border border-border shadow-sm">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight mb-5">
                  Ready to Join Madrasaty Academy?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                  Join our community of 1,500+ students and families building the future together.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">

                  <Link to="/admissions" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center transition-colors shadow-sm gap-2">
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground hover:bg-muted transition-colors font-bold bg-card shadow-sm">
                    Contact Us
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