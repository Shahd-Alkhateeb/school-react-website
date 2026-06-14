import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Heart, Eye, Target, Award, BookOpen, Users, Globe, Star, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const values = [
  { icon: Heart, title: 'Compassion', desc: 'We nurture empathy and kindness in every student, building a school community rooted in mutual respect.', color: '#EF7B6C' },
  { icon: Eye, title: 'Integrity', desc: 'Honesty and ethical conduct guide everything we do — from the classroom to the boardroom.', color: '#5B4FC7' },
  { icon: Target, title: 'Excellence', desc: 'We set high standards and support every student in achieving their personal best.', color: '#4EABBE' },
  { icon: Globe, title: 'Innovation', desc: 'We embrace technology and creative thinking to prepare students for a rapidly changing world.', color: '#5B6FE8' },
];

const timeline = [
  { year: '1998', title: 'Founded', desc: 'Nova Academy opens its doors with 120 students and a vision to redefine education in the region.' },
  { year: '2003', title: 'Cambridge Accreditation', desc: 'Achieved full Cambridge International Schools accreditation, the first in the region.' },
  { year: '2008', title: '1000 Students Milestone', desc: 'Enrolled our 1,000th student and opened a new science and technology wing.' },
  { year: '2015', title: 'Smart Campus Launch', desc: 'Launched our digital-first campus with smart classrooms and the first School ERP system.' },
  { year: '2020', title: 'AI Learning Platform', desc: 'Introduced AI-powered personalized learning tools adopted by all grade levels.' },
  { year: '2024', title: 'Regional #1 Ranking', desc: 'Ranked the #1 school in the region by the Ministry of Education Excellence Award.' },
  { year: '2026', title: 'New Science Center', desc: 'Opening our state-of-the-art Science & Innovation Center with robotics lab and maker space.' },
];

const achievements = [
  { value: '28', label: 'National Awards', sublabel: 'Academic excellence recognition' },
  { value: '15+', label: 'University Partners', sublabel: 'Global university partnerships' },
  { value: '98%', label: 'University Acceptance', sublabel: 'Of graduating students' },
  { value: '12', label: 'International Programs', sublabel: 'Exchange & enrichment programs' },
];

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="pt-28 pb-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8F6FF 0%, #EDE9FF 50%, #E8F0FF 100%)' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,79,199,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              <BookOpen className="w-3.5 h-3.5" />
              Our Story
            </motion.span>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', lineHeight: 1.1 }} className="mb-6">
              Building a Legacy of{' '}
              <span style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #4EABBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Academic Excellence
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }}>
              Since 1998, Nova Academy has been shaping the minds of tomorrow's leaders. We combine rigorous Cambridge academics with cutting-edge technology and a nurturing environment to help every student reach their full potential.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                color: '#5B4FC7',
                bg: '#F0EEFF',
                desc: 'To provide an exceptional, technology-enhanced education that develops critical thinkers, compassionate leaders, and lifelong learners who positively impact their communities and the world.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                color: '#4EABBE',
                bg: '#E6F6FA',
                desc: 'To be the leading innovative school in the region, recognized globally for academic excellence, character development, and the integration of technology in transformative education.',
              },
              {
                icon: Star,
                title: 'Our Promise',
                color: '#EF7B6C',
                bg: '#FEF2F0',
                desc: 'Every student at Nova Academy receives personalized attention, world-class resources, and the support they need to discover their unique strengths and pursue their dreams.',
              },
            ].map(({ icon: Icon, title, color, bg, desc }) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-3xl p-8 border border-border/40"
                style={{ background: bg }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${color}22` }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--foreground)' }} className="mb-3">{title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }}>{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Core Values */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }} className="mb-4">Core Values</motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '1.0625rem', color: 'var(--muted-foreground)', maxWidth: 500, margin: '0 auto' }}>
              These principles guide every decision we make and every interaction we have.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc, color }) => (
              <motion.div key={title} variants={fadeUp} className="bg-card rounded-3xl p-6 border border-border/50 text-center">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center" style={{ background: `${color}18` }}>
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>
                <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }} className="mb-2">{title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRINCIPAL'S MESSAGE */}
      <section className="py-24" style={{ background: '#F8F6FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="rounded-3xl overflow-hidden shadow-2xl relative" style={{ aspectRatio: '4/5' }}>
                <img
                  src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?w=600&h=750&fit=crop&auto=format"
                  alt="Dr. Sarah Al-Hassan, Principal of Nova Academy"
                  className="w-full h-full object-cover"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(91,79,199,0.5) 0%, transparent 50%)' }} />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p style={{ fontWeight: 700, fontSize: '1.125rem' }}>Dr. Sarah Al-Hassan</p>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)' }}>Principal, Nova Academy</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
                <Users className="w-3.5 h-3.5" />
                Principal's Message
              </motion.span>
              <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em', lineHeight: 1.2 }} className="mb-6">
                A Message from Our Principal
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4">
                {[
                  'At Nova Academy, we believe that every child is a unique constellation of talents, curiosity, and potential. Our role is not simply to educate — it is to illuminate.',
                  'Over the past 28 years, we have built a community where innovation and tradition coexist beautifully. Our Cambridge-accredited curriculum provides academic rigor, while our technology-enhanced learning environment prepares students for a world we cannot yet fully imagine.',
                  'I invite you to explore Nova Academy — not just as a school, but as a launchpad for your child\'s lifelong journey of discovery. Together, we will build something extraordinary.',
                ].map((para, i) => (
                  <p key={i} style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: 1.8 }}>{para}</p>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8">
                <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }}>Dr. Sarah Al-Hassan</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>Ph.D. in Education, University of Cambridge</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }} className="mb-4">
              Our Journey Through the Years
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '1.0625rem', color: 'var(--muted-foreground)' }}>
              From a small campus with big dreams to a regional leader in education.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex ${i % 2 === 0 ? 'justify-end pr-8 lg:pr-[calc(50%+2rem)]' : 'justify-start pl-8 lg:pl-[calc(50%+2rem)]'}`}
                >
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-0 top-5">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
                  </div>
                  <div className="bg-card rounded-2xl p-5 border border-border/50 shadow-sm max-w-xs w-full">
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.05em' }} className="uppercase mb-1 block">{item.year}</span>
                    <h4 style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--foreground)' }} className="mb-1">{item.title}</h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-24" style={{ background: 'var(--foreground)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }} className="mb-4">
              By the Numbers
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.55)', maxWidth: 500, margin: '0 auto' }}>
              Our achievements speak for themselves.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map(({ value, label, sublabel }) => (
              <motion.div key={label} variants={fadeUp} className="text-center">
                <p style={{ fontSize: '3rem', fontWeight: 800, color: 'white', lineHeight: 1 }} className="mb-2">{value}</p>
                <p style={{ fontWeight: 600, fontSize: '1rem', color: 'rgba(255,255,255,0.85)' }} className="mb-1">{label}</p>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)' }}>{sublabel}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto px-4">
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }} className="mb-4">
            Ready to be Part of the Nova Story?
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: '1rem', color: 'var(--muted-foreground)' }} className="mb-8">
            Join our community of 1,500+ students and families building the future together.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white hover:opacity-90 transition-opacity" style={{ fontWeight: 600 }}>
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground hover:bg-muted/50 transition-colors" style={{ fontWeight: 600 }}>
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
