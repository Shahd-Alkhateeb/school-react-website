// import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { Award, ChevronRight, Trophy, Users, Clock } from 'lucide-react';

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
// };
// const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

// type Category = 'All' | 'Sports' | 'Technology' | 'Arts' | 'Science' | 'Community';
// const categories: Category[] = ['All', 'Sports', 'Technology', 'Arts', 'Science', 'Community'];

// const activities = [
//   {
//     id: 1,
//     title: 'Robotics Club',
//     category: 'Technology' as Category,
//     image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&h=400&fit=crop&auto=format',
//     description: 'Students design, build, and program robots to compete in regional and international competitions using LEGO Mindstorms and Arduino platforms.',
//     members: 45,
//     sessions: '3× per week',
//     level: 'Grades 5–12',
//     achievements: ['Regional Champions 2025', '2nd Place Arab Robotics Cup 2024'],
//     color: '#5B4FC7',
//   },
//   {
//     id: 2,
//     title: 'Programming Academy',
//     category: 'Technology' as Category,
//     image: 'https://images.unsplash.com/photo-1527612820672-5b56351f7346?w=600&h=400&fit=crop&auto=format',
//     description: 'Learn web development, mobile apps, game design, and AI. Students graduate with real portfolio projects and coding certifications.',
//     members: 60,
//     sessions: '2× per week',
//     level: 'Grades 4–12',
//     achievements: ['UAE Hackathon Winners 2025', 'Google CS First Certified'],
//     color: '#3D5A9E',
//   },
//   {
//     id: 3,
//     title: 'Football Academy',
//     category: 'Sports' as Category,
//     image: 'https://images.unsplash.com/photo-1746122072064-3273a25094c2?w=600&h=400&fit=crop&auto=format',
//     description: 'Professional coaching staff guide students through technical skills, tactical awareness, and teamwork. Compete in inter-school leagues.',
//     members: 80,
//     sessions: '4× per week',
//     level: 'All Grades',
//     achievements: ['Dubai Schools League Champions 2025', '3× Regional Finalists'],
//     color: '#10B981',
//   },
//   {
//     id: 4,
//     title: 'Science Club',
//     category: 'Science' as Category,
//     image: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?w=600&h=400&fit=crop&auto=format',
//     description: 'Weekly experiments, research projects, and science communication. Students participate in national and international science fairs.',
//     members: 55,
//     sessions: '2× per week',
//     level: 'Grades 4–12',
//     achievements: ['National Science Fair Gold 2025', 'Published in Youth Science Journal'],
//     color: '#4EABBE',
//   },
//   {
//     id: 5,
//     title: 'Music Academy',
//     category: 'Arts' as Category,
//     image: 'https://images.unsplash.com/photo-1638957835514-224c57ffe617?w=600&h=400&fit=crop&auto=format',
//     description: 'Piano, guitar, violin, voice, and Arabic oud lessons. Students perform in biannual concerts and community events.',
//     members: 70,
//     sessions: '2–3× per week',
//     level: 'All Grades',
//     achievements: ['Best School Orchestra 2024', 'Dubai Arts Festival Performers'],
//     color: '#EF7B6C',
//   },
//   {
//     id: 6,
//     title: 'Art Studio',
//     category: 'Arts' as Category,
//     image: 'https://images.unsplash.com/photo-1578593139939-cccb1e98698c?w=600&h=400&fit=crop&auto=format',
//     description: 'From classical painting to digital art and sculpture — our Art Studio nurtures creative expression across all media.',
//     members: 50,
//     sessions: '2× per week',
//     level: 'All Grades',
//     achievements: ['5 Students at International Art Expo', 'Annual Campus Art Exhibition'],
//     color: '#F59E0B',
//   },
//   {
//     id: 7,
//     title: 'Volunteering & Community',
//     category: 'Community' as Category,
//     image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop&auto=format',
//     description: 'Students lead community impact projects, partner with local charities, and develop leadership and empathy through service.',
//     members: 120,
//     sessions: 'Weekly + events',
//     level: 'Grades 6–12',
//     achievements: ['3,200+ volunteer hours (2025)', 'UAE Volunteer Award Finalist'],
//     color: '#5B6FE8',
//   },
//   {
//     id: 8,
//     title: 'Swimming Team',
//     category: 'Sports' as Category,
//     image: 'https://images.unsplash.com/photo-1758611228434-7b5b697abd0a?w=600&h=400&fit=crop&auto=format',
//     description: 'Olympic-standard pool, professional coaching, and a competitive team environment that has produced national-level swimmers.',
//     members: 65,
//     sessions: '5× per week',
//     level: 'All Grades',
//     achievements: ['National Youth Swimming Champions', '4 Students in UAE Squad'],
//     color: '#3D5A9E',
//   },
//   {
//     id: 9,
//     title: 'Drama & Theatre',
//     category: 'Arts' as Category,
//     image: 'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?w=600&h=400&fit=crop&auto=format',
//     description: 'Acting, directing, stagecraft, and script writing. Students produce two full theatrical productions per year for the school community.',
//     members: 45,
//     sessions: '3× per week',
//     level: 'Grades 3–12',
//     achievements: ['Best School Production – Dubai Arts 2025', 'Cambridge Drama Award'],
//     color: '#EF7B6C',
//   },
// ];

// export default function ActivitiesPage() {
//   const [selected, setSelected] = useState<Category>('All');
//   const [expanded, setExpanded] = useState<number | null>(null);

//   const filtered = selected === 'All' ? activities : activities.filter(a => a.category === selected);

//   return (
//     <div>
//       {/* HERO */}
//       <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8F6FF 0%, #EDE9FF 50%, #E8F0FF 100%)' }}>
//         <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,79,199,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
//             <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
//               <Award className="w-3.5 h-3.5" />
//               Activities & Clubs
//             </motion.span>
//             <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', lineHeight: 1.1 }} className="mb-5">
//               Beyond the{' '}
//               <span style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #4EABBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
//                 Classroom
//               </span>
//             </motion.h1>
//             <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }}>
//               With 30+ clubs and activities, every student at Nova Academy has the opportunity to explore their passions, develop talents, and build lifelong friendships.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* FILTERS */}
//       <section className="py-10 bg-white border-b border-border">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap gap-2">
//             {categories.map(cat => (
//               <button
//                 key={cat}
//                 onClick={() => setSelected(cat)}
//                 style={{
//                   fontSize: '0.875rem',
//                   fontWeight: 600,
//                   background: selected === cat ? 'var(--primary)' : 'transparent',
//                   color: selected === cat ? 'white' : 'var(--muted-foreground)',
//                   border: selected === cat ? 'none' : '1px solid var(--border)',
//                 }}
//                 className="px-5 py-2.5 rounded-full transition-all hover:border-primary/40"
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* GRID */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selected}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             >
//               {filtered.map((activity, i) => (
//                 <motion.div
//                   key={activity.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.06 }}
//                   className="bg-card rounded-3xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
//                   onClick={() => setExpanded(expanded === activity.id ? null : activity.id)}
//                 >
//                   <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
//                     <img src={activity.image} alt={activity.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                     <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
//                     <div className="absolute top-4 left-4">
//                       <span style={{ fontSize: '0.75rem', fontWeight: 600, background: activity.color, color: 'white' }} className="px-3 py-1 rounded-full">
//                         {activity.category}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--foreground)' }} className="mb-2">{activity.title}</h3>
//                     <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }} className="mb-4">{activity.description}</p>

//                     <div className="flex items-center gap-4 mb-4">
//                       <div className="flex items-center gap-1.5 text-muted-foreground">
//                         <Users className="w-3.5 h-3.5" />
//                         <span style={{ fontSize: '0.8125rem' }}>{activity.members} members</span>
//                       </div>
//                       <div className="flex items-center gap-1.5 text-muted-foreground">
//                         <Clock className="w-3.5 h-3.5" />
//                         <span style={{ fontSize: '0.8125rem' }}>{activity.sessions}</span>
//                       </div>
//                     </div>

//                     <AnimatePresence>
//                       {expanded === activity.id && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: 'auto' }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="overflow-hidden"
//                         >
//                           <div className="pt-4 border-t border-border">
//                             <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--foreground)' }} className="mb-2">Open to: {activity.level}</p>
//                             <div className="space-y-1.5">
//                               {activity.achievements.map(ach => (
//                                 <div key={ach} className="flex items-center gap-2">
//                                   <Trophy className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
//                                   <span style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{ach}</span>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>

//                     <button
//                       className="mt-4 flex items-center gap-1 transition-colors"
//                       style={{ fontSize: '0.8125rem', fontWeight: 600, color: activity.color }}
//                     >
//                       {expanded === activity.id ? 'Show less' : 'Learn more'}
//                       <ChevronRight className={`w-4 h-4 transition-transform ${expanded === activity.id ? 'rotate-90' : ''}`} />
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* STATS BANNER */}
//       <section className="py-16" style={{ background: '#F8F6FF' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {[
//               { value: '30+', label: 'Clubs & Activities' },
//               { value: '700+', label: 'Active Participants' },
//               { value: '45+', label: 'Championships Won' },
//               { value: '3,200+', label: 'Volunteer Hours (2025)' },
//             ].map(({ value, label }) => (
//               <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//                 <p style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }} className="mb-2">{value}</p>
//                 <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', fontWeight: 500 }}>{label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
