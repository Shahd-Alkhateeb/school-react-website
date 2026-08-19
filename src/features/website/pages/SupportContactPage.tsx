import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from "@formspree/react";
import { useWebsiteContent } from '../hooks/useWebsiteContent';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, 
  ArrowRight, ChevronDown, Wrench, GraduationCap, Heart, BarChart3 
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const departments = [
  { id: 'admissions', label: 'Admissions Office', email: 'admissions@madrasaty.edu', phone: '+963 998 531 853' },
  { id: 'academic', label: 'Academic Affairs', email: 'academic@madrasaty.edu', phone: '+963 994 488 707' },
  { id: 'technical', label: 'Technical Support', email: 'support@madrasaty.edu', phone: '+963 933 606 808' },
];

const supportCategories = [
  { icon: Wrench, title: 'Technical Support', desc: 'Portal login issues, app problems, device compatibility.', theme: { text: 'text-primary', bg: 'bg-primary/10' }, tickets: 24 },
  { icon: GraduationCap, title: 'Academic Support', desc: 'Grade queries, assignment clarifications, curriculum questions.', theme: { text: 'text-teal', bg: 'bg-teal/10' }, tickets: 18 },
  { icon: Heart, title: 'Counseling Support', desc: 'Wellness resources, appointment booking, student mental health.', theme: { text: 'text-coral', bg: 'bg-coral/10' }, tickets: 7 },
  { icon: BarChart3, title: 'Finance Support', desc: 'Tuition invoices, payment plans, refunds, scholarship applications.', theme: { text: 'text-success', bg: 'bg-success/10' }, tickets: 12 },
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
  const { data } = useWebsiteContent();
  const content = data?.support_contact_page;

  const [activeTab, setActiveTab] = useState<'contact' | 'support'>('contact');
  const [state, formspreeSubmit] = useForm("xpqekbrd");
  const [form, setForm] = useState({ name: '', email: '', phone: '', department: 'admissions', subject: '', message: '' });
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-secondary/40">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-semibold border border-primary/20">
              <MessageSquare className="w-4 h-4" />
              {content?.hero?.badge || 'Help & Communications Hub'}
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-5">
              {content?.hero?.title || 'How Can We Assist You Today?'}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
              {content?.hero?.description || 'Get in touch with our administrative departments or browse our support center. We are always here to help.'}
            </motion.p>

            <motion.div variants={fadeUp} className="inline-flex p-1.5 rounded-2xl bg-card border border-border shadow-sm">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-2.5 rounded-xl transition-all font-semibold text-sm ${activeTab === 'contact' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {content?.hero?.tabs?.contact || 'Contact & Departments'}
              </button>
              <button
                onClick={() => setActiveTab('support')}
                className={`px-6 py-2.5 rounded-xl transition-all font-semibold text-sm ${activeTab === 'support' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {content?.hero?.tabs?.support || 'Support Center & FAQs'}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {activeTab === 'contact' && (
          <motion.div key="contact" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <section className="py-16 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {/* ... Cards ... */}
                  {[
                    { icon: Phone, title: 'Main Reception', value: '+963 994 416 080', sub: 'Sun–Thu, 7 AM – 5 PM', theme: { text: 'text-primary', bg: 'bg-primary/10' }, href: 'tel:+963994416080' },
                    { icon: Mail, title: 'General Enquiries', value: 'info@madrasaty.edu', sub: 'Response within 24h', theme: { text: 'text-teal', bg: 'bg-teal/10' }, href: 'mailto:info@madrasaty.edu' },
                    { icon: MapPin, title: 'Address', value: 'Damascus-AlMazza', sub: 'Building 7, Syria', theme: { text: 'text-coral', bg: 'bg-coral/10' }, href: '#map' },
                    { icon: MessageSquare, title: 'WhatsApp', value: '+963 994 416 080', sub: 'Quick queries', theme: { text: 'text-success', bg: 'bg-success/10' }, href: 'https://wa.me/963994416080' },
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
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-extrabold text-foreground mb-3">{content?.contact_tab?.form?.title || 'Send Us a Direct Message'}</h2>
                    <p className="text-muted-foreground mb-8">{content?.contact_tab?.form?.description || 'Fill out the form below and the relevant department will respond within one business day.'}</p>

                    {state.succeeded ? (
                      <div className="bg-card rounded-3xl p-12 border border-border text-center shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-5">
                          <CheckCircle className="w-8 h-8 text-success" />
                        </div>
                        <h3 className="font-bold text-2xl text-foreground mb-3">{content?.contact_tab?.form?.success?.title || 'Message Sent!'}</h3>
                        <p className="text-muted-foreground">{content?.contact_tab?.form?.success?.message || "We've received your message and will reply shortly."}</p>
                        <button onClick={() => window.location.reload()} className="mt-6 font-bold text-primary hover:underline">{content?.contact_tab?.form?.success?.button || 'Send another message'}</button>
                      </div>
                    ) : (
                      <form onSubmit={formspreeSubmit} className="bg-card rounded-3xl p-8 border border-border shadow-sm space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">{content?.contact_tab?.form?.labels?.name || 'Full Name *'}</label>
                            <input name="name" type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">{content?.contact_tab?.form?.labels?.email || 'Email Address *'}</label>
                            <input name="email" type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">{content?.contact_tab?.form?.labels?.phone || 'Phone Number'}</label>
                            <input name="phone" type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">{content?.contact_tab?.form?.labels?.department || 'Department'}</label>
                            <div className="relative">
                              <select name="department" value={form.department} onChange={e => setForm(f => ({ ...f, department: e.target.value }))} className="w-full px-4 py-3 pr-10 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer text-sm font-medium text-foreground">
                                {departments.map(d => <option key={d.id} value={d.id}>{d.label}</option>)}
                              </select>
                              <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">{content?.contact_tab?.form?.labels?.subject || 'Subject *'}</label>
                          <input name="subject" type="text" required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} placeholder={content?.contact_tab?.form?.placeholders?.subject || "What is your enquiry about?"} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">{content?.contact_tab?.form?.labels?.message || 'Message *'}</label>
                          <textarea name="message" required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={5} placeholder={content?.contact_tab?.form?.placeholders?.message || "Please provide details..."} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-sm text-foreground" />
                        </div>
                        <button type="submit" disabled={state.submitting} className="w-full py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-bold shadow-md">
                          {state.submitting ? (content?.contact_tab?.form?.submitting_btn || "Sending...") : (content?.contact_tab?.form?.submit_btn || "Send Message")} <ArrowRight className="w-5 h-5" />
                        </button>
                      </form>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-4">{content?.contact_tab?.directory?.title || 'Department Directory'}</h3>
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
                        <h4 className="font-bold text-foreground">{content?.contact_tab?.office_hours?.title || 'Office Hours'}</h4>
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

        {activeTab === 'support' && (
          <motion.div key="support" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <section className="py-16 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-foreground mb-3">{content?.support_tab?.categories?.title || 'Support Categories'}</h2>
                  <p className="text-muted-foreground">{content?.support_tab?.categories?.description || 'Explore our main help categories for quick answers.'}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                  {supportCategories.map(({ icon: Icon, title, desc, theme, tickets }) => (
                    <div key={title} className="bg-card rounded-3xl p-6 border border-border hover:shadow-md transition-shadow cursor-pointer group">
                      <div className="flex items-start justify-between mb-5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${theme.bg}`}>
                          <Icon className={`w-6 h-6 ${theme.text}`} />
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${theme.bg} ${theme.text}`}>
                          {tickets} {content?.support_tab?.categories?.topics_label || 'topics'}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg text-foreground mb-2">{title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-10">
                    <h3 className="font-extrabold text-2xl text-foreground">{content?.support_tab?.faqs?.title || 'Frequently Asked Questions'}</h3>
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

              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="map" className="py-0">
        <div className="w-full h-[400px] relative overflow-hidden bg-secondary/30 border-t border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent flex items-center justify-center">
            <div className="text-center bg-card/80 backdrop-blur-md p-8 rounded-3xl border border-border/50 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 shadow-md">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="font-extrabold text-xl text-foreground mb-1">{content?.map_section?.title || 'Madrasaty Academy'}</p>
              <p className="text-sm text-muted-foreground mb-5">{content?.map_section?.subtitle || 'Academic City, Syria'}</p>
              <a
                href="https://maps.google.com/?q=Academic+City+Syria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-bold text-sm shadow-md"
              >
                {content?.map_section?.button || 'Open in Google Maps'} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}