import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { BookOpen, ArrowRight, CheckCircle, Users, Clock, Award, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const programs = [
  {
    id: 'kindergarten',
    label: 'Kindergarten',
    grades: 'Ages 4–6',
    color: '#EF7B6C',
    bg: '#FEF2F0',
    image: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?w=800&h=500&fit=crop&auto=format',
    tagline: 'Where curiosity takes its first steps',
    overview: 'Our Kindergarten program provides a nurturing, play-based learning environment where young children develop foundational skills in literacy, numeracy, creativity, and social-emotional development.',
    curriculum: ['Cambridge Early Years Framework', 'Phonics-based literacy program', 'Hands-on mathematics exploration', 'Arabic language foundations', 'Islamic studies (age-appropriate)', 'Arts & creative expression'],
    subjects: ['English Language', 'Arabic', 'Mathematics', 'Science Discovery', 'Art & Craft', 'Music & Movement', 'Physical Education'],
    methodology: ['Project-Based Learning (PBL)', 'Montessori-inspired centres', 'Daily reading circles', 'Outdoor learning sessions', 'Digital literacy (iPad-based)'],
    assessment: ['Portfolio-based assessment', 'Ongoing teacher observation', 'Parent progress reports (3×/year)', 'No formal examinations'],
    activities: ['School Farm visits', 'Cooking & baking sessions', 'Drama & storytelling', 'Swimming lessons', 'Nature walks'],
    stats: { students: '180', teacherRatio: '1:8', hours: '6 hrs/day' },
  },
  {
    id: 'primary',
    label: 'Primary School',
    grades: 'Grades 1–5 (Ages 6–11)',
    color: '#5B4FC7',
    bg: '#F0EEFF',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop&auto=format',
    tagline: 'Building the foundation for lifelong learning',
    overview: 'Cambridge Primary builds strong foundations in English, Mathematics, and Science, while our expanded curriculum develops Arabic fluency, critical thinking, and digital citizenship skills essential for the 21st century.',
    curriculum: ['Cambridge Primary Program', 'Cambridge Primary Checkpoint (Grade 5)', 'STEM integration across subjects', 'Arabic bilingual curriculum', 'Character & Values education'],
    subjects: ['English Language & Literature', 'Arabic', 'Mathematics', 'Science', 'Social Studies', 'ICT & Computing', 'Art', 'Music', 'PE', 'Islamic Studies'],
    methodology: ['Inquiry-based learning', 'Collaborative group projects', 'Reading for pleasure programme', 'Math mastery approach', 'Weekly STEM challenges'],
    assessment: ['Cambridge Checkpoint Exams (Grade 5)', 'Continuous assessment (40%)', 'End-of-year exams (60%)', 'Digital portfolios', 'Termly parent reports'],
    activities: ['Science Fair', 'Math Olympiad', 'Drama productions', 'Art exhibitions', 'Inter-school sports'],
    stats: { students: '420', teacherRatio: '1:18', hours: '7 hrs/day' },
  },
  {
    id: 'middle',
    label: 'Middle School',
    grades: 'Grades 6–8 (Ages 11–14)',
    color: '#4EABBE',
    bg: '#E6F6FA',
    image: 'https://images.unsplash.com/photo-1638957835514-224c57ffe617?w=800&h=500&fit=crop&auto=format',
    tagline: 'Discovering strengths, developing passions',
    overview: 'Cambridge Lower Secondary prepares students for the rigorous IGCSE program. Students develop independence, analytical thinking, and leadership skills while exploring their academic interests through an expanding range of subjects.',
    curriculum: ['Cambridge Lower Secondary', 'Cambridge Checkpoint (Grade 8)', 'Elective subjects from Grade 7', 'Global Perspectives (Cambridge)', 'Coding & Robotics curriculum'],
    subjects: ['English', 'Arabic', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'History', 'Geography', 'Computer Science', 'Business Studies', 'Art & Design', 'PE'],
    methodology: ['Socratic seminars', 'Research-based projects', 'Interdisciplinary units', 'Debate & public speaking', 'Design thinking workshops'],
    assessment: ['Cambridge Checkpoint (Grade 8)', 'Internal exams (50%)', 'Coursework & projects (30%)', 'Class participation (20%)', 'Biannual parent meetings'],
    activities: ['Model UN', 'Robotics Club', 'School newspaper', 'Community service', 'Regional competitions'],
    stats: { students: '480', teacherRatio: '1:20', hours: '7.5 hrs/day' },
  },
  {
    id: 'highschool',
    label: 'High School',
    grades: 'Grades 9–12 (Ages 14–18)',
    color: '#3D5A9E',
    bg: '#EBF0F9',
    image: 'https://images.unsplash.com/photo-1773921403832-aaeba299e510?w=800&h=500&fit=crop&auto=format',
    tagline: 'Your passport to global universities',
    overview: 'Our High School program leads to internationally recognized Cambridge IGCSE (Grades 9–10) and A-Level qualifications (Grades 11–12), opening doors to top universities worldwide. Students receive dedicated university counseling from Grade 10.',
    curriculum: ['Cambridge IGCSE (Grades 9–10)', 'Cambridge A-Levels (Grades 11–12)', 'University preparation program', 'SAT/IELTS/TOEFL preparation', 'Extended Project Qualification (EPQ)'],
    subjects: ['Mathematics', 'Further Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English Literature', 'Economics', 'Business', 'Psychology', 'History', 'Art & Design'],
    methodology: ['University-style seminars', 'Independent research projects', 'Laboratory practicals', 'TOK (Theory of Knowledge)', 'Mentorship with industry leaders'],
    assessment: ['Cambridge IGCSE Exams (Grade 10)', 'Cambridge A-Level Exams (Grade 12)', 'Coursework & Extended Essays', 'Mock exams (2× per year)', 'University application support'],
    activities: ['Student Council', 'TEDx Student Talks', 'Entrepreneurship Club', 'University tours', 'Internship program'],
    stats: { students: '420', teacherRatio: '1:16', hours: '8 hrs/day' },
  },
];

export default function AcademicProgramsPage() {
  const [active, setActive] = useState('primary');
  const program = programs.find(p => p.id === active)!;

  return (
    <div>
      {/* HERO */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8F6FF 0%, #EDE9FF 50%, #E8F0FF 100%)' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,79,199,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              <BookOpen className="w-3.5 h-3.5" />
              Academic Programs
            </motion.span>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', lineHeight: 1.1 }} className="mb-5">
              Cambridge-Accredited{' '}
              <span style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #4EABBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Programs
              </span>{' '}
              for Every Stage
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }}>
              From nurturing our youngest learners in Kindergarten to preparing Grade 12 students for top universities worldwide — our programs are designed to challenge, inspire, and empower every student.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* TABS */}
      <section className="sticky top-16 lg:top-20 z-30 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {programs.map(p => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                style={{ fontWeight: 600, fontSize: '0.875rem', borderBottom: active === p.id ? `2px solid ${p.color}` : '2px solid transparent', color: active === p.id ? p.color : 'var(--muted-foreground)', whiteSpace: 'nowrap' }}
                className="px-5 py-4 transition-colors hover:text-foreground"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM DETAIL */}
      <AnimatePresence mode="wait">
        <motion.section
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: program.color, letterSpacing: '0.05em' }} className="uppercase mb-3 block">{program.grades}</span>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em', lineHeight: 1.2 }} className="mb-3">{program.label}</h2>
                <p style={{ fontSize: '1.125rem', color: program.color, fontWeight: 600 }} className="mb-5 italic">"{program.tagline}"</p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: 1.8 }} className="mb-8">{program.overview}</p>
                <div className="flex gap-6">
                  {Object.entries(program.stats).map(([k, v]) => (
                    <div key={k} className="text-center">
                      <p style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--foreground)', lineHeight: 1 }} className="mb-1">{v}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', textTransform: 'capitalize' }}>{k === 'teacherRatio' ? 'Teacher Ratio' : k === 'hours' ? 'School Day' : 'Students'}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: '16/10' }}>
                <img src={program.image} alt={program.label} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Curriculum', icon: BookOpen, items: program.curriculum, color: program.color },
                { title: 'Subjects Offered', icon: Star, items: program.subjects, color: '#5B6FE8' },
                { title: 'Learning Methodology', icon: Users, items: program.methodology, color: '#4EABBE' },
                { title: 'Assessment System', icon: CheckCircle, items: program.assessment, color: '#10B981' },
                { title: 'Extracurricular Activities', icon: Award, items: program.activities, color: '#EF7B6C' },
              ].map(({ title, icon: Icon, items, color }) => (
                <div key={title} className="bg-card rounded-3xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${color}18` }}>
                      <Icon className="w-4.5 h-4.5" style={{ color }} />
                    </div>
                    <h4 style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--foreground)' }}>{title}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color }} />
                        <span style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-card rounded-3xl p-6 border border-border/50 flex flex-col justify-between" style={{ background: `linear-gradient(135deg, ${program.color}18 0%, ${program.color}08 100%)` }}>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--foreground)' }} className="mb-3">Ready to Enroll?</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }} className="mb-6">
                    Applications for {program.label} are now open for the 2026–2027 academic year. Limited seats available.
                  </p>
                </div>
                <Link to="/admissions" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white hover:opacity-90 transition-opacity" style={{ background: program.color, fontWeight: 600, fontSize: '0.875rem' }}>
                  Apply for {program.label} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
