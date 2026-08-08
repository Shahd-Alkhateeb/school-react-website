import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Heart, Eye, Target, Award, BookOpen, Users, Globe, Star, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
  },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const values = [
  { icon: Heart, title: 'Compassion', desc: 'We nurture empathy and kindness in every student, building a school community rooted in mutual respect.', theme: { text: 'text-coral', bg: 'bg-coral/10' } },
  { icon: Eye, title: 'Integrity', desc: 'Honesty and ethical conduct guide everything we do — from the classroom to the boardroom.', theme: { text: 'text-primary', bg: 'bg-primary/10' } },
  { icon: Target, title: 'Excellence', desc: 'We set high standards and support every student in achieving their personal best.', theme: { text: 'text-teal', bg: 'bg-teal/10' } },
  { icon: Globe, title: 'Innovation', desc: 'We embrace technology and creative thinking to prepare students for a rapidly changing world.', theme: { text: 'text-royal-blue', bg: 'bg-royal-blue/10' } },
];

const timeline = [
  { year: '1998', title: 'Founded', desc: 'Madrasaty Academy opens its doors with 120 students and a vision to redefine education in the region.' },
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
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-secondary/40">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-teal/10 blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-semibold border border-primary/20">
              <BookOpen className="w-4 h-4" />
              Our Story
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
              Building a Legacy of{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-teal">
                Academic Excellence
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              Since 1998, Madrasaty Academy has been shaping the minds of tomorrow's leaders. We combine rigorous Cambridge academics with cutting-edge technology and a nurturing environment to help every student reach their full potential.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Target, title: 'Our Mission', theme: { text: 'text-primary', bg: 'bg-primary/5', border: 'border-primary/20' }, desc: 'To provide an exceptional, technology-enhanced education that develops critical thinkers, compassionate leaders, and lifelong learners.' },
              { icon: Eye, title: 'Our Vision', theme: { text: 'text-teal', bg: 'bg-teal/5', border: 'border-teal/20' }, desc: 'To be the leading innovative school in the region, recognized globally for academic excellence and character development.' },
              { icon: Star, title: 'Our Promise', theme: { text: 'text-coral', bg: 'bg-coral/5', border: 'border-coral/20' }, desc: 'Every student receives personalized attention, world-class resources, and the support needed to discover their unique strengths.' },
            ].map(({ icon: Icon, title, theme, desc }) => (
              <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`rounded-3xl p-8 border ${theme.border} ${theme.bg} shadow-sm`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-background shadow-sm ${theme.text}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Core Values */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Core Values</motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every interaction we have.
            </motion.p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc, theme }) => (
              <motion.div key={title} variants={fadeUp} className="bg-background rounded-3xl p-6 border border-border shadow-sm text-center hover:shadow-lg transition-all">
                <div className={`w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center ${theme.bg}`}>
                  <Icon className={`w-7 h-7 ${theme.text}`} />
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRINCIPAL'S MESSAGE */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="rounded-3xl overflow-hidden shadow-xl relative aspect-[4/5] border border-border">
                <img src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?w=600&h=750&fit=crop&auto=format" alt="Principal" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-bold text-xl">Dr. Sarah Al-Hassan</p>
                  <p className="text-sm font-medium text-white/80">Principal, Nova Academy</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-semibold border border-primary/20">
                <Users className="w-4 h-4" />
                Principal's Message
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
                A Message from Our Principal
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>At Madrasaty Academy, we believe that every child is a unique constellation of talents, curiosity, and potential. Our role is not simply to educate — it is to illuminate.</p>
                <p>Over the past 28 years, we have built a community where innovation and tradition coexist beautifully. Our Cambridge-accredited curriculum provides academic rigor, while our technology-enhanced learning environment prepares students for a world we cannot yet fully imagine.</p>
                <p>I invite you to explore Madrasaty Academy — not just as a school, but as a launchpad for your child's lifelong journey of discovery. Together, we will build something extraordinary.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8">
                <p className="font-bold text-lg text-foreground">Dr. Sarah Al-Hassan</p>
                <p className="text-sm text-muted-foreground font-medium">Ph.D. in Education, University of Cambridge</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Our Journey Through the Years
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
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
                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md" />
                  </div>
                  <div className="bg-background rounded-2xl p-6 border border-border shadow-sm max-w-sm w-full hover:shadow-md transition-shadow">
                    <span className="text-sm font-bold text-primary tracking-wider uppercase mb-2 block">{item.year}</span>
                    <h4 className="font-bold text-lg text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-24 bg-sidebar text-sidebar-foreground border-y border-white/10 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-sidebar-foreground mb-4">
             By the number
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-sidebar-muted max-w-2xl mx-auto">
              Our achievements reflect our commitment to excellence, innovation, and the holistic development of every student.
             </motion.p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map(({ value, label, sublabel }) => (
              <motion.div key={label} variants={fadeUp} className="text-center">
                <p className="text-5xl md:text-6xl font-extrabold text-sidebar-foreground mb-3">{value}</p>
                <p className="font-bold text-lg text-white mb-1">{label}</p>
                <p className="text-sm text-sidebar-muted font-medium">{sublabel}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center border-b border-border">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto px-4">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Ready to be Part of the Nova Story?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8">
            Join our community of 1,500+ students and families building the future together.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-bold shadow-md">
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/support-contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-card text-foreground hover:bg-muted transition-colors font-bold shadow-sm">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}