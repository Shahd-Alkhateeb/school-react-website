import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from "@formspree/react";
import { ClipboardList, CheckCircle, ChevronDown, Upload, ArrowRight, Clock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } 
  },
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const steps = [
  { step: 1, title: 'Submit Application', desc: 'Complete the online application form and submit your student details.', icon: ClipboardList, theme: { text: 'text-primary', bg: 'bg-primary/10' } },
  { step: 2, title: 'Upload Documents', desc: 'Provide all required documents through our secure portal within 7 days.', icon: Upload, theme: { text: 'text-royal-blue', bg: 'bg-royal-blue/10' } },
  { step: 3, title: 'Assessment & Interview', desc: 'Students attend a brief academic assessment and an introductory interview.', icon: Clock, theme: { text: 'text-teal', bg: 'bg-teal/10' } },
  { step: 4, title: 'Decision & Offer', desc: 'Receive your admission decision within 5 business days and secure your seat.', icon: CheckCircle, theme: { text: 'text-success', bg: 'bg-success/10' } },
];

const faqs = [
  { q: 'When does the application deadline close?', a: 'Applications for the academic year are accepted on a rolling basis. We recommend applying early for guaranteed consideration. Late applications may be reviewed subject to seat availability.' },
  { q: 'What curriculum does Madrasaty Academy follow?', a: 'Madrasaty Academy follows an advanced international curriculum specifically tailored for middle school (Grades 7 to 9), focusing on core sciences, mathematics, languages, and modern technologies.' },
  { q: 'Is there an entrance exam?', a: 'Students applying are required to complete a baseline academic assessment in English and Mathematics along with a friendly interview.' },
  { q: 'Do you offer a school bus service?', a: 'Yes, we have a comprehensive transportation network covering major areas. Transport fees are separate from tuition and vary by zone.' },
  { q: 'Can I arrange a school tour?', a: 'Absolutely! We offer scheduled campus tours during the school week. Please contact us via the Contact page to book your tour.' },
  { q: 'What is the student-to-teacher ratio?', a: 'Our average ratio is 18:1 to ensure personalized attention and optimal academic guidance for every student in grades 7 through 9.' },
];

type FormData = {
  parentName: string; email: string; phone: string; childName: string; dob: string;
  nationality: string; grade: string; previousSchool: string; message: string;
};

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  

  const [state, formspreeSubmit] = useForm("xpqekbrd");

  const [form, setForm] = useState<FormData>({
    parentName: '', email: '', phone: '', childName: '', dob: '',
    nationality: '', grade: 'Grade 7', previousSchool: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-secondary/40">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-semibold border border-primary/20">
              <ClipboardList className="w-4 h-4" />
              Admissions Open (Grades 7–9)
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-5">
              Begin Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-teal">
                Madrasaty Journey
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
              Applications are now open for Middle School (Grades 7, 8, and 9). Secure your child's place today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Admissions Process
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined admissions process is designed to be simple, transparent, and efficient.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-border z-0" />
            
            {steps.map((s) => (
              <motion.div key={s.step} variants={fadeUp} className="relative z-10 bg-background rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${s.theme.bg}`}>
                  <s.icon className={`w-7 h-7 ${s.theme.text}`} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${s.theme.text}`}>Step {s.step}</span>
                <h4 className="font-bold text-lg text-foreground mb-3">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* APPLICATION FORM (Formspree) */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Online Application (Grades 7–9)
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
              Fill out the form below and our admissions team will contact you within 24 hours.
            </motion.p>
          </motion.div>

          {state.succeeded ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 px-8 bg-background rounded-3xl border border-border shadow-sm">
              <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              <h3 className="font-extrabold text-3xl text-foreground mb-4">Application Submitted Successfully!</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                Thank you, <strong className="text-foreground">{form.parentName}</strong>! We've received the application for <strong className="text-foreground">{form.childName}</strong>. We will contact you at <strong className="text-foreground">{form.email}</strong> shortly.
              </p>
              <button onClick={() => window.location.reload()} className="font-bold text-primary hover:underline">
                Submit another application
              </button>
            </motion.div>
          ) : (
            <motion.form 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={stagger} 
              onSubmit={formspreeSubmit} 
              className="bg-background rounded-3xl p-8 md:p-10 border border-border shadow-lg space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Parent Name */}
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Parent/Guardian's Full Name <span className="text-destructive ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    required
                    value={form.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground"
                  />
                </motion.div>

                {/* Email Address */}
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address <span className="text-destructive ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground"
                  />
                </motion.div>

                {/* Phone Number */}
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone / WhatsApp Number <span className="text-destructive ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground"
                  />
                </motion.div>

                {/* Student Full Name */}
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Student's Full Name <span className="text-destructive ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="childName"
                    required
                    value={form.childName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground"
                  />
                </motion.div>

                {/* Date of Birth */}
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Date of Birth <span className="text-destructive ml-1">*</span>
                  </label>
                  <input
                    type="date"
                    name="dob"
                    required
                    value={form.dob}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground"
                  />
                </motion.div>

                {/* Nationality */}
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nationality <span className="text-destructive ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    required
                    value={form.nationality}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground"
                  />
                </motion.div>

                {/* Previous School */}
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Previous School (if any)
                  </label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={form.previousSchool}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm text-foreground"
                  />
                </motion.div>

                {/* Applying for Grade (Grades 7, 8, 9 only) */}
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Applying for Grade <span className="text-destructive ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      name="grade" 
                      value={form.grade} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 pr-10 rounded-xl border border-border bg-card focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer text-sm font-medium text-foreground"
                    >
                      {['Grade 7', 'Grade 8', 'Grade 9'].map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>
                </motion.div>
              </div>

              {/* Message */}
              <motion.div variants={fadeUp} className="pt-2">
                <label className="block text-sm font-semibold text-foreground mb-2">Additional Information or Questions</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any special requirements, questions, or information you'd like us to know..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-sm text-foreground"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={fadeUp} className="pt-4">
                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-bold shadow-md"
                >
                  {state.submitting ? "Submitting Application..." : "Submit Application"} <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-muted-foreground text-center mt-4 font-medium">
                  By submitting, you agree to our Privacy Policy. We will never share your information.
                </p>
              </motion.div>
            </motion.form>
          )}
        </div>
      </section>

      {/* ADMISSIONS FAQ */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Admissions FAQ</motion.h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-bold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-background/50 border-t border-border/50">
                      <p className="text-sm text-muted-foreground leading-relaxed p-6">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}