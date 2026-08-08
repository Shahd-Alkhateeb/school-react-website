import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
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
  { step: 1, title: 'Submit Application', desc: 'Complete the online application form and pay the non-refundable AED 500 registration fee.', icon: ClipboardList, theme: { text: 'text-primary', bg: 'bg-primary/10' } },
  { step: 2, title: 'Upload Documents', desc: 'Provide all required documents through our secure document portal within 7 days of submission.', icon: Upload, theme: { text: 'text-royal-blue', bg: 'bg-royal-blue/10' } },
  { step: 3, title: 'Assessment', desc: 'Students in Grade 2 and above attend a 90-minute academic assessment and a brief interview.', icon: Clock, theme: { text: 'text-teal', bg: 'bg-teal/10' } },
  { step: 4, title: 'Decision & Offer', desc: 'Receive your admission decision within 5 business days. Accept the offer and pay your deposit.', icon: CheckCircle, theme: { text: 'text-success', bg: 'bg-success/10' } },
];

const faqs = [
  { q: 'When does the application deadline close?', a: 'Applications for the 2026–2027 academic year are accepted on a rolling basis. We recommend applying by June 30, 2026 for guaranteed consideration. Late applications may be reviewed subject to seat availability.' },
  { q: 'What curriculum does Nova Academy follow?', a: 'Nova Academy follows the Cambridge International Curriculum (Cambridge Primary, Cambridge Lower Secondary, Cambridge IGCSE, and Cambridge A-Levels). Arabic language and Islamic Studies are also core components.' },
  { q: 'Is there an entrance exam?', a: 'Students applying for Grade 2 and above are required to complete an academic assessment in English and Mathematics. KG and Grade 1 applicants have an informal readiness interview instead.' },
  { q: 'Do you offer a school bus service?', a: 'Yes, we have a comprehensive transportation network covering most areas of Dubai and Sharjah. Transport fees are separate from tuition and vary by zone. Please contact admissions for your zone\'s fee.' },
  { q: 'Can I arrange a school tour?', a: 'Absolutely! We offer open campus tours every Tuesday and Thursday from 9 AM to 11 AM during the school year. Please contact us via the Contact page to book your tour.' },
  { q: 'What is the student-to-teacher ratio?', a: 'Our average ratio is 18:1 for primary and 20:1 for secondary grades. KG classes maintain a 1:8 ratio with additional teaching assistants in every classroom.' },
  { q: 'Are there part-time or flexible enrollment options?', a: 'We currently offer full-time enrollment only (Sunday to Thursday, 7:30 AM to 2:30 PM). Extended day care is available from 2:30 PM to 5:30 PM at an additional fee.' },
  { q: 'Does Nova Academy accept students mid-year?', a: 'We accept mid-year transfer students subject to seat availability and a successful assessment. Please contact our admissions office to discuss your specific situation.' },
];

type FormData = {
  parentName: string; email: string; phone: string; childName: string; dob: string;
  nationality: string; grade: string; previousSchool: string; message: string;
};

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    parentName: '', email: '', phone: '', childName: '', dob: '',
    nationality: '', grade: 'Grade 1', previousSchool: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              Admissions 2026–2027
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-5">
              Begin Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-teal">
                Nova Journey
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
              Applications for 2026–2027 are now open. Join our community of 1,500+ students and start your child's journey toward a world-class education.
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
              Our streamlined admissions process is designed to be simple, transparent, and respectful of your time.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting Line for Desktop */}
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

      {/* REQUIREMENTS & FEES */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-card rounded-3xl p-8 border border-border shadow-sm">
              <h3 className="font-extrabold text-2xl text-foreground mb-6">Required Documents</h3>
              <ul className="space-y-4">
                {[
                  'Completed online application form',
                  'Passport copies (student + parent/guardian)',
                  'UAE Resident Visa copy (if applicable)',
                  'Original birth certificate with Arabic translation',
                  'Previous school reports (last 2 years)',
                  'Transfer certificate (if transferring mid-year)',
                  'Medical fitness certificate',
                  'Passport-sized photos (4 copies)',
                ].map(doc => (
                  <li key={doc} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground font-medium">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-card rounded-3xl p-8 border border-border shadow-sm flex flex-col">
              <h3 className="font-extrabold text-2xl text-foreground mb-6">Fees at Enrollment</h3>
              <div className="space-y-1 flex-1">
                {[
                  { label: 'Non-refundable Registration Fee', amount: 'AED 500' },
                  { label: 'Enrollment Deposit (deducted from tuition)', amount: 'AED 5,000' },
                  { label: 'Uniform Package (optional)', amount: 'AED 750' },
                  { label: 'Digital Resources & Platform', amount: 'Included' },
                  { label: 'Annual Books & Materials', amount: 'AED 1,200–2,400' },
                ].map(({ label, amount }) => (
                  <div key={label} className="flex justify-between items-center py-4 border-b border-border last:border-0">
                    <span className="text-muted-foreground font-medium pr-4">{label}</span>
                    <span className="font-bold text-foreground shrink-0">{amount}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <Link to="/scholarships" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                  View Scholarship & Discount Programs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Online Application
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
              Fill out the form below and our admissions team will contact you within 24 hours.
            </motion.p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 px-8 bg-background rounded-3xl border border-border shadow-sm">
              <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              <h3 className="font-extrabold text-3xl text-foreground mb-4">Application Submitted!</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                Thank you, {form.parentName}! We've received your application for {form.childName}. Our admissions team will contact you at <strong>{form.email}</strong> within 24 hours.
              </p>
              <button onClick={() => setSubmitted(false)} className="font-bold text-primary hover:underline">
                Submit another application
              </button>
            </motion.div>
          ) : (
            <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} onSubmit={handleSubmit} className="bg-background rounded-3xl p-8 md:p-10 border border-border shadow-lg space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'parentName', label: "Parent/Guardian's Full Name", type: 'text', required: true },
                  { name: 'email', label: 'Email Address', type: 'email', required: true },
                  { name: 'phone', label: 'Phone / WhatsApp Number', type: 'tel', required: true },
                  { name: 'childName', label: "Student's Full Name", type: 'text', required: true },
                  { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
                  { name: 'nationality', label: 'Nationality', type: 'text', required: true },
                  { name: 'previousSchool', label: 'Previous School (if any)', type: 'text', required: false },
                ].map(field => (
                  <motion.div key={field.name} variants={fadeUp}>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      {field.label}{field.required && <span className="text-destructive ml-1">*</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={(form as any)[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                    />
                  </motion.div>
                ))}
                
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Applying for Grade <span className="text-destructive ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select name="grade" value={form.grade} onChange={handleChange} required className="w-full px-4 py-3 pr-10 rounded-xl border border-border bg-card focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer text-sm font-medium">
                      {['KG1', 'KG2', ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)].map(g => <option key={g}>{g}</option>)}
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fadeUp} className="pt-2">
                <label className="block text-sm font-semibold text-foreground mb-2">Additional Information or Questions</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any special requirements, questions, or information you'd like us to know..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-sm"
                />
              </motion.div>

              <motion.div variants={fadeUp} className="pt-4">
                <button type="submit" className="w-full py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-bold shadow-md">
                  Submit Application <ArrowRight className="w-5 h-5" />
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
                {/* FAQ Content */}
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="overflow-hidden bg-background/50 border-t border-border/50">
                    <p className="text-sm text-muted-foreground leading-relaxed p-6">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}