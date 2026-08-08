// import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { HelpCircle, ChevronDown, MessageSquare, Phone, Mail, BookOpen, Video, FileText, Wrench, GraduationCap, Heart, BarChart3 } from 'lucide-react';

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
// };
// const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

// const categories = [
//   { icon: Wrench, title: 'Technical Support', desc: 'Portal login issues, app problems, device compatibility, and platform technical errors.', color: '#5B4FC7', tickets: 24 },
//   { icon: GraduationCap, title: 'Academic Support', desc: 'Grade queries, assignment clarifications, curriculum questions, and academic progress.', color: '#4EABBE', tickets: 18 },
//   { icon: Heart, title: 'Counseling Support', desc: 'Wellness resources, appointment booking, student mental health, and counselor referrals.', color: '#EF7B6C', tickets: 7 },
//   { icon: BarChart3, title: 'Finance Support', desc: 'Tuition invoices, payment plans, refunds, scholarship applications, and billing queries.', color: '#10B981', tickets: 12 },
// ];

// const resources = [
//   { icon: BookOpen, title: 'Knowledge Base', desc: 'Browse 200+ articles covering every aspect of school life, from enrollment to graduation.' },
//   { icon: Video, title: 'Video Tutorials', desc: 'Step-by-step video guides for the Parent Portal, Student Portal, and mobile app.' },
//   { icon: FileText, title: 'Documentation', desc: 'Official school policies, handbooks, curriculum guides, and form downloads.' },
// ];

// const faqs = [
//   {
//     category: 'Portal & Technology',
//     items: [
//       { q: 'How do I reset my Parent Portal password?', a: 'Visit the Parent Portal login page and click "Forgot Password." Enter your registered email address and you\'ll receive a reset link within 2 minutes. If you don\'t receive it, check your spam folder or contact our tech support team.' },
//       { q: 'The mobile app isn\'t loading — what should I do?', a: 'First, try force-closing and reopening the app. If the issue persists, try uninstalling and reinstalling the app from the App Store or Google Play. Make sure your app is updated to the latest version (v4.2.1). Contact tech support if issues continue.' },
//       { q: 'Can multiple parents access the same student account?', a: 'Yes, each student account supports up to 3 parent/guardian profiles. Additional parents can be added by the primary account holder through Settings > Family Members in the Parent Portal.' },
//     ],
//   },
//   {
//     category: 'Academics & Grades',
//     items: [
//       { q: 'When are grades published?', a: 'Grades are published within 72 hours of exam completion for ongoing assessments. End-of-term reports are released on the last day of each term. Interim reports are available in real-time through the Parent Portal\'s Progress section.' },
//       { q: 'How can I request a grade review?', a: 'Grade review requests must be submitted within 5 business days of grade publication through the Parent Portal (Academics > Grade Review Request) or by emailing academic@novaacademy.edu with your child\'s full name, grade level, and subject.' },
//       { q: 'How is homework tracked in the system?', a: 'All homework is assigned through the Student Portal. Students can view upcoming assignments, submit digitally, and track status. Parents receive daily homework summary notifications if enabled in the Parent Portal notification settings.' },
//     ],
//   },
//   {
//     category: 'School Life & General',
//     items: [
//       { q: 'How do I report my child\'s absence?', a: 'Absences must be reported by 7:30 AM on the day of absence through the Parent Portal (Attendance > Report Absence) or by calling our attendance hotline at +971 4 555 1235. Doctor\'s notes for medical absences should be submitted within 3 days.' },
//       { q: 'What is the school\'s uniform policy?', a: 'Nova Academy has a mandatory uniform policy. The full uniform guide is available in our Knowledge Base. Uniforms can be purchased from our school store or authorized suppliers listed on the Parent Portal. Uniform checks begin on the first day of term.' },
//       { q: 'How do I join the Parent Council?', a: 'The Parent Council holds elections at the start of each academic year. Any parent can apply through the school community section in the Parent Portal. Council meetings are held monthly and are open to all parents to attend.' },
//     ],
//   },
// ];

// export default function SupportPage() {
//   const [openFaq, setOpenFaq] = useState<string | null>(null);
//   const [ticketForm, setTicketForm] = useState({ name: '', email: '', category: 'Technical Support', subject: '', message: '' });
//   const [ticketSubmitted, setTicketSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setTicketSubmitted(true);
//   };

//   return (
//     <div>
//       {/* HERO */}
//       <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8F6FF 0%, #EDE9FF 50%, #E8F0FF 100%)' }}>
//         <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,79,199,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div initial="hidden" animate="visible" variants={stagger}>
//             <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
//               <HelpCircle className="w-3.5 h-3.5" />
//               Support Center
//             </motion.span>
//             <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', lineHeight: 1.1 }} className="mb-5">
//               How Can We{' '}
//               <span style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #4EABBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
//                 Help You?
//               </span>
//             </motion.h1>
//             <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
//               Find answers instantly in our knowledge base, or submit a support ticket for personalized assistance. Our team responds within 4 hours.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* SUPPORT CATEGORIES */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
//             <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }} className="mb-3">Support Categories</motion.h2>
//             <motion.p variants={fadeUp} style={{ fontSize: '1rem', color: 'var(--muted-foreground)' }}>Choose the most relevant category for faster support.</motion.p>
//           </motion.div>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {categories.map(({ icon: Icon, title, desc, color, tickets }) => (
//               <motion.div key={title} variants={fadeUp} className="bg-card rounded-3xl p-6 border border-border/50 hover:shadow-md transition-all cursor-pointer group">
//                 <div className="flex items-start justify-between mb-5">
//                   <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${color}18` }}>
//                     <Icon className="w-6 h-6" style={{ color }} />
//                   </div>
//                   <span style={{ fontSize: '0.75rem', fontWeight: 600, background: `${color}18`, color }} className="px-2.5 py-1 rounded-full">{tickets} open</span>
//                 </div>
//                 <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }} className="mb-2">{title}</h4>
//                 <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>{desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* RESOURCES */}
//       <section className="py-16" style={{ background: '#F8F6FF' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-10">
//             <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }} className="mb-3">Self-Service Resources</motion.h2>
//           </motion.div>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-5">
//             {resources.map(({ icon: Icon, title, desc }) => (
//               <motion.div key={title} variants={fadeUp} className="bg-white rounded-3xl p-6 border border-border/50 flex items-start gap-4 hover:shadow-md transition-all cursor-pointer">
//                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
//                   <Icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }} className="mb-1">{title}</h4>
//                   <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>{desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-20 bg-white">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
//             <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }} className="mb-3">Frequently Asked Questions</motion.h2>
//           </motion.div>
//           <div className="space-y-8">
//             {faqs.map(group => (
//               <div key={group.category}>
//                 <h3 style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--primary)', letterSpacing: '0.06em' }} className="uppercase mb-4">{group.category}</h3>
//                 <div className="space-y-2">
//                   {group.items.map((item, i) => {
//                     const key = `${group.category}-${i}`;
//                     return (
//                       <div key={key} className="bg-card rounded-2xl border border-border/50 overflow-hidden">
//                         <button
//                           onClick={() => setOpenFaq(openFaq === key ? null : key)}
//                           className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/20 transition-colors"
//                         >
//                           <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--foreground)', paddingRight: '1rem' }}>{item.q}</span>
//                           <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaq === key ? 'rotate-180' : ''}`} />
//                         </button>
//                         <AnimatePresence>
//                           {openFaq === key && (
//                             <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
//                               <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }} className="px-6 pb-5">{item.a}</p>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SUBMIT TICKET + CONTACT OPTIONS */}
//       <section className="py-20" style={{ background: '#F8F6FF' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
//             {/* Ticket Form */}
//             <div className="lg:col-span-3">
//               <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }} className="mb-3">Submit a Support Ticket</h2>
//               <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)' }} className="mb-8">Our support team responds to all tickets within 4 business hours.</p>

//               {ticketSubmitted ? (
//                 <div className="bg-white rounded-3xl p-10 border border-border/50 text-center">
//                   <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
//                     <HelpCircle className="w-7 h-7 text-green-600" />
//                   </div>
//                   <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--foreground)' }} className="mb-2">Ticket Submitted!</h3>
//                   <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)' }}>We'll email you at <strong>{ticketForm.email}</strong> within 4 hours.</p>
//                   <button onClick={() => setTicketSubmitted(false)} style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.9375rem' }} className="mt-5">Submit another ticket</button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-border/50 space-y-5">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                     <div>
//                       <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">Full Name *</label>
//                       <input type="text" required value={ticketForm.name} onChange={e => setTicketForm(f => ({ ...f, name: e.target.value }))} style={{ fontSize: '0.9375rem' }} className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors" />
//                     </div>
//                     <div>
//                       <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">Email Address *</label>
//                       <input type="email" required value={ticketForm.email} onChange={e => setTicketForm(f => ({ ...f, email: e.target.value }))} style={{ fontSize: '0.9375rem' }} className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors" />
//                     </div>
//                   </div>
//                   <div>
//                     <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">Support Category *</label>
//                     <select value={ticketForm.category} onChange={e => setTicketForm(f => ({ ...f, category: e.target.value }))} style={{ fontSize: '0.9375rem' }} className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 appearance-none cursor-pointer">
//                       {['Technical Support', 'Academic Support', 'Counseling Support', 'Finance Support'].map(c => <option key={c}>{c}</option>)}
//                     </select>
//                   </div>
//                   <div>
//                     <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">Subject *</label>
//                     <input type="text" required value={ticketForm.subject} onChange={e => setTicketForm(f => ({ ...f, subject: e.target.value }))} placeholder="Brief description of your issue" style={{ fontSize: '0.9375rem' }} className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors" />
//                   </div>
//                   <div>
//                     <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">Message *</label>
//                     <textarea required value={ticketForm.message} onChange={e => setTicketForm(f => ({ ...f, message: e.target.value }))} rows={5} placeholder="Please describe your issue in detail..." style={{ fontSize: '0.9375rem' }} className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors resize-none" />
//                   </div>
//                   <button type="submit" className="w-full py-3.5 rounded-2xl bg-primary text-white hover:opacity-90 transition-opacity" style={{ fontWeight: 700, fontSize: '0.9375rem' }}>
//                     Submit Support Ticket
//                   </button>
//                 </form>
//               )}
//             </div>

//             {/* Contact Options */}
//             <div className="lg:col-span-2 space-y-5">
//               <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--foreground)' }} className="mb-5">Other Ways to Reach Us</h3>
//               {[
//                 { icon: Phone, title: 'Phone Support', value: '+971 4 555 1234', sub: 'Sunday–Thursday, 7 AM–5 PM', color: '#5B4FC7' },
//                 { icon: Mail, title: 'Email Support', value: 'support@novaacademy.edu', sub: 'Response within 24 hours', color: '#4EABBE' },
//                 { icon: MessageSquare, title: 'WhatsApp', value: '+971 50 555 1234', sub: 'Quick queries, Mon–Fri 8 AM–4 PM', color: '#10B981' },
//               ].map(({ icon: Icon, title, value, sub, color }) => (
//                 <div key={title} className="bg-white rounded-2xl p-5 border border-border/50 flex items-start gap-4">
//                   <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}18` }}>
//                     <Icon className="w-5 h-5" style={{ color }} />
//                   </div>
//                   <div>
//                     <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--foreground)' }}>{title}</p>
//                     <p style={{ fontWeight: 600, fontSize: '0.875rem', color }} className="mb-0.5">{value}</p>
//                     <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{sub}</p>
//                   </div>
//                 </div>
//               ))}
//               <div className="bg-primary/8 rounded-2xl p-5 border border-primary/15">
//                 <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--foreground)' }} className="mb-1">Average Response Time</p>
//                 <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>4 hrs</p>
//                 <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>During school hours. 98% satisfaction rate.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
