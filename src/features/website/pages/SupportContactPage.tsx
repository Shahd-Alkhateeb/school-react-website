import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from "@formspree/react";
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, 
  ArrowRight, ChevronDown, HelpCircle, BookOpen, Video, 
  FileText, Wrench, GraduationCap, Heart, BarChart3 
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

// ✅ تم ربط الألوان بمتغيرات الثيم
const departments = [
  { id: 'admissions', label: 'Admissions Office', email: 'admissions@madrasaty.edu', phone: '+971 4 555 1236' },
  { id: 'finance', label: 'Finance Department', email: 'finance@madrasaty.edu', phone: '+971 4 555 1237' },
  { id: 'academic', label: 'Academic Affairs', email: 'academic@madrasaty.edu', phone: '+971 4 555 1238' },
  { id: 'counseling', label: 'Student Counseling', email: 'counseling@madrasaty.edu', phone: '+971 4 555 1239' },
  { id: 'technical', label: 'Technical Support', email: 'support@madrasaty.edu', phone: '+971 4 555 1240' },
  { id: 'principal', label: "Principal's Office", email: 'principal@madrasaty.edu', phone: '+971 4 555 1234' },
];

const supportCategories = [
  { icon: Wrench, title: 'Technical Support', desc: 'Portal login issues, app problems, device compatibility.', theme: { text: 'text-primary', bg: 'bg-primary/10' }, tickets: 24 },
  { icon: GraduationCap, title: 'Academic Support', desc: 'Grade queries, assignment clarifications, curriculum questions.', theme: { text: 'text-teal', bg: 'bg-teal/10' }, tickets: 18 },
  { icon: Heart, title: 'Counseling Support', desc: 'Wellness resources, appointment booking, student mental health.', theme: { text: 'text-coral', bg: 'bg-coral/10' }, tickets: 7 },
  { icon: BarChart3, title: 'Finance Support', desc: 'Tuition invoices, payment plans, refunds, scholarship applications.', theme: { text: 'text-success', bg: 'bg-success/10' }, tickets: 12 },
];

const resources = [
  { icon: BookOpen, title: 'Knowledge Base', desc: 'Browse 200+ articles covering every aspect of school life.' },
  { icon: Video, title: 'Video Tutorials', desc: 'Step-by-step video guides for the Portals and mobile app.' },
  { icon: FileText, title: 'Documentation', desc: 'Official school policies, handbooks, and form downloads.' },
];

const faqs = [
  {
    category: 'Portal & Technology',
    items: [
      { q: 'How do I reset my Parent Portal password?', a: 'Visit the Parent Portal login page and click "Forgot Password." Enter your registered email address and you\'ll receive a reset link.' },
      { q: 'The mobile app isn\'t loading — what should I do?', a: 'Try force-closing and reopening the app. Make sure your app is updated to the latest version. Contact tech support if issues continue.' },
    ],
  },
  {
    category: 'Academics & Grades',
    items: [
      { q: 'When are grades published?', a: 'Grades are published within 72 hours of exam completion. End-of-term reports are released on the last day of each term.' },
      { q: 'How can I request a grade review?', a: 'Grade review requests must be submitted within 5 business days of grade publication through the Parent Portal.' },
    ],
  },
];

export default function SupportContactPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'support'>('contact');
  const [state, formspreeSubmit] = useForm("xpqekbrd");
  const [form, setForm] = useState({ name: '', email: '', phone: '', department: 'admissions', subject: '', message: '' });

  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [ticketForm, setTicketForm] = useState({ name: '', email: '', category: 'Technical Support', subject: '', message: '' });
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSubmitted(true);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-secondary/40">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-semibold border border-primary/20">
              <MessageSquare className="w-4 h-4" />
              Help & Communications Hub
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-5">
              How Can We{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-teal">
                Assist You Today?
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
              Get in touch with our administrative departments or open an instant support ticket. We are always here to help.
            </motion.p>

            <motion.div variants={fadeUp} className="inline-flex p-1.5 rounded-2xl bg-card border border-border shadow-sm">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-2.5 rounded-xl transition-all font-semibold text-sm ${activeTab === 'contact' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Contact & Departments
              </button>
              <button
                onClick={() => setActiveTab('support')}
                className={`px-6 py-2.5 rounded-xl transition-all font-semibold text-sm ${activeTab === 'support' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Support Center & FAQs
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {/* ================= CONTACT TAB ================= */}
        {activeTab === 'contact' && (
          <motion.div key="contact" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            
            <section className="py-16 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* QUICK CONTACT CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {[
                    { icon: Phone, title: 'Main Reception', value: '+971 4 555 1234', sub: 'Sun–Thu, 7 AM – 5 PM', theme: { text: 'text-primary', bg: 'bg-primary/10' }, href: 'tel:+97145551234' },
                    { icon: Mail, title: 'General Enquiries', value: 'info@madrasaty.edu', sub: 'Response within 24h', theme: { text: 'text-teal', bg: 'bg-teal/10' }, href: 'mailto:info@madrasaty.edu' },
                    { icon: MapPin, title: 'Campus Address', value: 'Academic City', sub: 'Building 7, Dubai', theme: { text: 'text-coral', bg: 'bg-coral/10' }, href: '#map' },
                    { icon: MessageSquare, title: 'WhatsApp', value: '+971 50 555 1234', sub: 'Quick queries', theme: { text: 'text-success', bg: 'bg-success/10' }, href: 'https://wa.me/971505551234' },
                  ].map(({ icon: Icon, title, value, sub, theme, href }) => (
                    <a key={title} href={href} className="bg-card rounded-3xl p-6 border border-border hover:shadow-lg transition-all duration-300 block group">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${theme.bg}`}>
                        <Icon className={`w-6 h-6 ${theme.text}`} />
                      </div>
                      <p className="text-xs font-bold text-muted-foreground tracking-wider uppercase mb-1">{title}</p>
                      <p className="font-bold text-lg text-foreground mb-1">{value}</p>
                      <p className="text-sm text-muted-foreground">{sub}</p>
                    </a>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {/* MESSAGE FORM */}
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-extrabold text-foreground mb-3">Send Us a Direct Message</h2>
                    <p className="text-muted-foreground mb-8">Fill out the form below and the relevant department will respond within one business day.</p>

                    {state.succeeded ? (
                      <div className="bg-card rounded-3xl p-12 border border-border text-center shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-5">
                          <CheckCircle className="w-8 h-8 text-success" />
                        </div>
                        <h3 className="font-bold text-2xl text-foreground mb-3">Message Sent!</h3>
                        <p className="text-muted-foreground">Thank you, {form.name}! We've received your message and will reply shortly.</p>
                        <button onClick={() => window.location.reload()} className="mt-6 font-bold text-primary hover:underline">Send another message</button>
                      </div>
                    ) : (
                      <form onSubmit={formspreeSubmit} className="bg-card rounded-3xl p-8 border border-border shadow-sm space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                            <input name="name" type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                            <input name="email" type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                            <input name="phone" type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Department</label>
                            <div className="relative">
                              <select name="department" value={form.department} onChange={e => setForm(f => ({ ...f, department: e.target.value }))} className="w-full px-4 py-3 pr-10 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer text-sm font-medium text-foreground">
                                {departments.map(d => <option key={d.id} value={d.id}>{d.label}</option>)}
                              </select>
                              <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Subject *</label>
                          <input name="subject" type="text" required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} placeholder="What is your enquiry about?" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                          <textarea name="message" required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={5} placeholder="Please provide details..." className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-sm text-foreground" />
                        </div>
                        <button type="submit" disabled={state.submitting} className="w-full py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-bold shadow-md">
                          {state.submitting ? "Sending..." : "Send Message"} <ArrowRight className="w-5 h-5" />
                        </button>
                      </form>
                    )}
                  </div>

                  {/* DIRECTORY & HOURS */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-4">Department Directory</h3>
                      <div className="space-y-3">
                        {departments.map(dept => (
                          <div key={dept.id} className="bg-card rounded-2xl p-5 border border-border shadow-sm">
                            <p className="font-bold text-foreground mb-1">{dept.label}</p>
                            <a href={`mailto:${dept.email}`} className="block text-sm text-primary font-medium hover:underline mb-1">{dept.email}</a>
                            <a href={`tel:${dept.phone}`} className="text-sm text-muted-foreground">{dept.phone}</a>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                      <div className="flex items-center gap-2.5 mb-5">
                        <Clock className="w-5 h-5 text-primary" />
                        <h4 className="font-bold text-foreground">Office Hours</h4>
                      </div>
                      <div className="space-y-3">
                        {[
                          { day: 'Sunday – Thursday', hours: '7:00 AM – 5:00 PM' },
                          { day: 'Friday', hours: '8:00 AM – 12:00 PM' },
                          { day: 'Saturday', hours: 'Closed' },
                        ].map(({ day, hours }) => (
                          <div key={day} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0 text-sm">
                            <span className="text-muted-foreground">{day}</span>
                            <span className="font-bold text-foreground">{hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* ================= SUPPORT TAB ================= */}
        {activeTab === 'support' && (
          <motion.div key="support" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            
            <section className="py-16 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* CATEGORIES */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-foreground mb-3">Support Categories</h2>
                  <p className="text-muted-foreground">Select a category to route your ticket to the right experts.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                  {supportCategories.map(({ icon: Icon, title, desc, theme, tickets }) => (
                    <div key={title} className="bg-card rounded-3xl p-6 border border-border hover:shadow-md transition-shadow cursor-pointer group">
                      <div className="flex items-start justify-between mb-5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${theme.bg}`}>
                          <Icon className={`w-6 h-6 ${theme.text}`} />
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${theme.bg} ${theme.text}`}>{tickets} open</span>
                      </div>
                      <h4 className="font-bold text-lg text-foreground mb-2">{title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                {/* FAQ SECTION */}
                <div className="max-w-3xl mx-auto mb-20">
                  <div className="text-center mb-10">
                    <h3 className="font-extrabold text-2xl text-foreground">Frequently Asked Questions</h3>
                  </div>
                  <div className="space-y-8">
                    {faqs.map(group => (
                      <div key={group.category}>
                        <h4 className="font-bold text-sm text-primary tracking-wider uppercase mb-4">{group.category}</h4>
                        <div className="space-y-3">
                          {group.items.map((item, i) => {
                            const key = `${group.category}-${i}`;
                            return (
                              <div key={key} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                                <button onClick={() => setOpenFaq(openFaq === key ? null : key)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/30 transition-colors">
                                  <span className="font-bold text-foreground">{item.q}</span>
                                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaq === key ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                  {openFaq === key && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-background/50 border-t border-border/50">
                                      <p className="text-sm text-muted-foreground leading-relaxed p-6">{item.a}</p>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TICKET FORM */}
                <div className="max-w-3xl mx-auto bg-card rounded-3xl p-8 sm:p-12 border border-border shadow-lg">
                  <h3 className="font-extrabold text-2xl text-foreground mb-2 text-center">Submit a Support Ticket</h3>
                  <p className="text-muted-foreground mb-8 text-center">Need direct help? Fill out the ticket form and we'll get back within 4 hours.</p>

                  {ticketSubmitted ? (
                    <div className="bg-success/5 rounded-3xl p-10 text-center border border-success/20">
                      <CheckCircle className="w-14 h-14 text-success mx-auto mb-4" />
                      <h4 className="font-bold text-xl text-foreground mb-2">Ticket Submitted Successfully!</h4>
                      <p className="text-muted-foreground">We've sent a confirmation to <span className="font-medium text-foreground">{ticketForm.email}</span>.</p>
                      <button onClick={() => setTicketSubmitted(false)} className="mt-6 text-primary font-bold hover:underline">Submit another ticket</button>
                    </div>
                  ) : (
                    <form onSubmit={handleTicketSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                           <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                           <input type="text" required value={ticketForm.name} onChange={e => setTicketForm(f => ({ ...f, name: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all text-foreground" />
                        </div>
                        <div>
                           <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                           <input type="email" required value={ticketForm.email} onChange={e => setTicketForm(f => ({ ...f, email: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all text-foreground" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Category</label>
                        <div className="relative">
                          <select value={ticketForm.category} onChange={e => setTicketForm(f => ({ ...f, category: e.target.value }))} className="w-full px-4 py-3 pr-10 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm font-medium appearance-none cursor-pointer transition-all text-foreground">
                            {['Technical Support', 'Academic Support', 'Counseling Support', 'Finance Support'].map(c => <option key={c}>{c}</option>)}
                          </select>
                          <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                        <input type="text" required value={ticketForm.subject} onChange={e => setTicketForm(f => ({ ...f, subject: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all text-foreground" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Description</label>
                        <textarea required rows={5} value={ticketForm.message} onChange={e => setTicketForm(f => ({ ...f, message: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm resize-none transition-all text-foreground" />
                      </div>
                      <button type="submit" className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold shadow-md hover:opacity-95 transition-opacity">
                        Submit Support Ticket
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SHARED MAP SECTION */}
      <section id="map" className="py-0">
        <div className="w-full h-[400px] relative overflow-hidden bg-secondary/30 border-t border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent flex items-center justify-center">
            <div className="text-center bg-card/80 backdrop-blur-md p-8 rounded-3xl border border-border/50 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 shadow-md">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="font-extrabold text-xl text-foreground mb-1">Madrasaty Academy</p>
              <p className="text-sm text-muted-foreground mb-5">Academic City, Dubai, UAE</p>
              <a
                href="https://maps.google.com/?q=Academic+City+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-bold text-sm shadow-md"
              >
                Open in Google Maps <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}