import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { 
  Heart, Eye, Target, Award, BookOpen, Users, Globe, Star, 
  ArrowRight, CheckCircle 
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

// --- DATA ---
const values = [
  { icon: Heart, title: 'Compassion', desc: 'We nurture empathy and kindness in every student.', theme: { text: 'text-coral', bg: 'bg-coral/10' } },
  { icon: Eye, title: 'Integrity', desc: 'Honesty and ethical conduct guide everything we do.', theme: { text: 'text-primary', bg: 'bg-primary/10' } },
  { icon: Target, title: 'Excellence', desc: 'We set high standards and support every student.', theme: { text: 'text-teal', bg: 'bg-teal/10' } },
  { icon: Globe, title: 'Innovation', desc: 'We embrace technology and creative thinking.', theme: { text: 'text-royal-blue', bg: 'bg-royal-blue/10' } },
];

const timeline = [
  { year: '1998', title: 'Founded', desc: 'Nova Academy opens its doors with 120 students.' },
  { year: '2003', title: 'Cambridge Accreditation', desc: 'Achieved full Cambridge International Schools accreditation.' },
  { year: '2015', title: 'Smart Campus Launch', desc: 'Launched our digital-first campus and the School ERP system.' },
  { year: '2026', title: 'New Science Center', desc: 'Opening our state-of-the-art Science & Innovation Center.' },
];

const achievements = [
  { value: '28', label: 'National Awards', sublabel: 'Academic excellence recognition' },
  { value: '15+', label: 'University Partners', sublabel: 'Global university partnerships' },
  { value: '98%', label: 'University Acceptance', sublabel: 'Of graduating students' },
  { value: '12', label: 'International Programs', sublabel: 'Exchange programs' },
];

const programs = [
  {
    id: 'kindergarten', label: 'Kindergarten', grades: 'Ages 4–6', theme: { text: 'text-coral', bg: 'bg-coral/10' },
    image: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?w=800&h=500&fit=crop&auto=format',
    tagline: 'Where curiosity takes its first steps',
    overview: 'Play-based learning environment where young children develop foundational skills.',
    curriculum: ['Cambridge Early Years', 'Phonics-based literacy', 'Arabic language'],
    stats: { students: '180', teacherRatio: '1:8', hours: '6 hrs/day' },
  },
  {
    id: 'primary', label: 'Primary School', grades: 'Grades 1–5', theme: { text: 'text-primary', bg: 'bg-primary/10' },
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop&auto=format',
    tagline: 'Building the foundation for lifelong learning',
    overview: 'Builds strong foundations in English, Mathematics, and Science.',
    curriculum: ['Cambridge Primary', 'STEM integration', 'Character education'],
    stats: { students: '420', teacherRatio: '1:18', hours: '7 hrs/day' },
  },
  {
    id: 'highschool', label: 'High School', grades: 'Grades 9–12', theme: { text: 'text-teal', bg: 'bg-teal/10' },
    image: 'https://images.unsplash.com/photo-1773921403832-aaeba299e510?w=800&h=500&fit=crop&auto=format',
    tagline: 'Your passport to global universities',
    overview: 'Leads to internationally recognized Cambridge IGCSE and A-Level qualifications.',
    curriculum: ['Cambridge IGCSE & A-Levels', 'SAT/IELTS preparation', 'University counseling'],
    stats: { students: '420', teacherRatio: '1:16', hours: '8 hrs/day' },
  },
];

export default function AboutProgramsPage() {
  const [activeTab, setActiveTab] = useState<'about' | 'programs'>('about');
  const [activeProgram, setActiveProgram] = useState('primary');
  const selectedProgram = programs.find(p => p.id === activeProgram)!;

  return (
    <div>
      {/* SHARED HERO */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-secondary/30">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-semibold border border-primary/20">
              <BookOpen className="w-4 h-4" />
              Discover Nova Academy
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-5">
              Building a Legacy of{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-teal">
                Academic Excellence
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
              Since 1998, we have combined rigorous Cambridge academics with cutting-edge technology to help every student reach their full potential.
            </motion.p>

            {/* TAB SWITCHER */}
            <motion.div variants={fadeUp} className="inline-flex p-1.5 rounded-2xl bg-card border border-border shadow-sm">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-6 py-2.5 rounded-xl transition-all font-semibold text-sm ${activeTab === 'about' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Our Story & Values
              </button>
              <button
                onClick={() => setActiveTab('programs')}
                className={`px-6 py-2.5 rounded-xl transition-all font-semibold text-sm ${activeTab === 'programs' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Academic Programs
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        
        {/* ================= ABOUT US TAB ================= */}
        {activeTab === 'about' && (
          <motion.div key="about" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            
            {/* CORE VALUES */}
            <section className="py-20 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-foreground mb-4">Our Core Values</h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">These principles guide every decision we make and every interaction we have.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map(({ icon: Icon, title, desc, theme }) => (
                    <div key={title} className="bg-card rounded-3xl p-6 border border-border shadow-sm text-center hover:shadow-md transition-shadow">
                      <div className={`w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center ${theme.bg}`}>
                        <Icon className={`w-7 h-7 ${theme.text}`} />
                      </div>
                      <h4 className="font-bold text-lg text-foreground mb-2">{title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PRINCIPAL MESSAGE */}
            <section className="py-24 bg-card border-y border-border">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="rounded-3xl overflow-hidden shadow-xl relative aspect-[4/5] border border-border/50">
                    <img src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?w=600&h=750&fit=crop&auto=format" alt="Principal" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="font-bold text-lg">Dr. Sarah Al-Hassan</p>
                      <p className="text-sm text-white/80">Principal, Nova Academy</p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">A Message from Our Principal</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>At Nova Academy, we believe that every child is a unique constellation of talents, curiosity, and potential. Our role is not simply to educate — it is to illuminate.</p>
                      <p>Over the past 28 years, we have built a community where innovation and tradition coexist beautifully. Our Cambridge-accredited curriculum provides academic rigor, while our technology-enhanced learning environment prepares students for a world we cannot yet fully imagine.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ACHIEVEMENTS */}
            <section className="py-20 bg-foreground">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-background mb-4">By the Numbers</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {achievements.map(({ value, label, sublabel }) => (
                    <div key={label} className="text-center">
                      <p className="text-4xl md:text-5xl font-extrabold text-background mb-2">{value}</p>
                      <p className="font-bold text-background/90 mb-1">{label}</p>
                      <p className="text-xs text-background/60">{sublabel}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* ================= ACADEMIC PROGRAMS TAB ================= */}
        {activeTab === 'programs' && (
          <motion.div key="programs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            
            <section className="py-8 bg-card border-b border-border sticky top-[72px] z-20 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center gap-2 overflow-x-auto scrollbar-hide">
                  {programs.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setActiveProgram(p.id)}
                      className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                        activeProgram === p.id 
                        ? 'bg-primary text-primary-foreground border-primary' 
                        : 'bg-transparent text-muted-foreground border-border hover:border-primary/40'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-16 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  key={activeProgram}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider mb-3 block ${selectedProgram.theme.text}`}>{selectedProgram.grades}</span>
                      <h2 className="text-4xl font-extrabold text-foreground mb-4">{selectedProgram.label}</h2>
                      <p className={`text-lg font-bold italic mb-6 ${selectedProgram.theme.text}`}>"{selectedProgram.tagline}"</p>
                      <p className="text-muted-foreground leading-relaxed mb-8">{selectedProgram.overview}</p>
                      
                      <div className="flex gap-8">
                        {Object.entries(selectedProgram.stats).map(([k, v]) => (
                          <div key={k}>
                            <p className="font-extrabold text-2xl text-foreground mb-1">{v}</p>
                            <p className="text-xs text-muted-foreground capitalize">{k === 'teacherRatio' ? 'Teacher Ratio' : k === 'hours' ? 'School Day' : 'Students'}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-xl aspect-video border border-border">
                      <img src={selectedProgram.image} alt={selectedProgram.label} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedProgram.theme.bg}`}>
                          <BookOpen className={`w-5 h-5 ${selectedProgram.theme.text}`} />
                        </div>
                        <h4 className="font-bold text-lg text-foreground">Curriculum Highlights</h4>
                      </div>
                      <ul className="space-y-3">
                        {selectedProgram.curriculum.map(item => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 mt-0.5 shrink-0 ${selectedProgram.theme.text}`} />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-card rounded-3xl p-8 border border-border shadow-sm flex flex-col justify-center text-center">
                      <h4 className="font-extrabold text-2xl text-foreground mb-4">Ready to Enroll?</h4>
                      <p className="text-muted-foreground mb-8">
                        Applications for {selectedProgram.label} are now open. Secure your child's seat today.
                      </p>
                      <Link to="/admissions" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-bold shadow-md mx-auto">
                        Apply Now <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}