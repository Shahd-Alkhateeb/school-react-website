import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ClipboardList, CheckCircle, ChevronDown, Upload, ArrowRight, Clock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const steps = [
  { step: 1, title: 'Submit Application', desc: 'Complete the online application form and pay the non-refundable AED 500 registration fee.', icon: ClipboardList, color: '#5B4FC7' },
  { step: 2, title: 'Upload Documents', desc: 'Provide all required documents through our secure document portal within 7 days of submission.', icon: Upload, color: '#5B6FE8' },
  { step: 3, title: 'Assessment', desc: 'Students in Grade 2 and above attend a 90-minute academic assessment and a brief interview.', icon: Clock, color: '#4EABBE' },
  { step: 4, title: 'Decision & Offer', desc: 'Receive your admission decision within 5 business days. Accept the offer and pay your deposit to secure your place.', icon: CheckCircle, color: '#10B981' },
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
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  dob: string;
  nationality: string;
  grade: string;
  previousSchool: string;
  heardAbout: string;
  message: string;
};

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    parentName: '', email: '', phone: '', childName: '', dob: '',
    nationality: '', grade: 'Grade 1', previousSchool: '', heardAbout: '', message: '',
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
      {/* HERO */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8F6FF 0%, #EDE9FF 50%, #E8F0FF 100%)' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,79,199,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              <ClipboardList className="w-3.5 h-3.5" />
              Admissions 2026–2027
            </motion.span>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', lineHeight: 1.1 }} className="mb-5">
              Begin Your{' '}
              <span style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #4EABBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Nova Journey
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }}>
              Applications for 2026–2027 are now open. Join our community of 1,500+ students and start your child's journey toward a world-class education.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }} className="mb-4">
              Admissions Process
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '1rem', color: 'var(--muted-foreground)', maxWidth: 480, margin: '0 auto' }}>
              Our streamlined admissions process is designed to be simple, transparent, and respectful of your time.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.step} variants={fadeUp} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border z-0" style={{ transform: 'translateX(-50%)' }} />
                )}
                <div className="bg-card rounded-3xl p-6 border border-border/50 relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${s.color}18` }}>
                    <s.icon className="w-7 h-7" style={{ color: s.color }} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: s.color, letterSpacing: '0.05em' }} className="uppercase mb-2 block">Step {s.step}</span>
                  <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }} className="mb-2">{s.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-16" style={{ background: '#F8F6FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-3xl p-8 border border-border/50">
              <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--foreground)' }} className="mb-5">Required Documents</h3>
              <ul className="space-y-3">
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
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-3xl p-8 border border-border/50">
              <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--foreground)' }} className="mb-5">Fees at Enrollment</h3>
              {[
                { label: 'Non-refundable Registration Fee', amount: 'AED 500' },
                { label: 'Enrollment Deposit (deducted from tuition)', amount: 'AED 5,000' },
                { label: 'Uniform Package (optional at school store)', amount: 'AED 750' },
                { label: 'Digital Resources & Learning Platform', amount: 'Included' },
                { label: 'Annual Books & Materials', amount: 'AED 1,200–2,400' },
              ].map(({ label, amount }) => (
                <div key={label} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                  <span style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>{label}</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--foreground)' }}>{amount}</span>
                </div>
              ))}
              <div className="mt-5">
                <Link to="/scholarships" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)' }} className="flex items-center gap-1 hover:underline">
                  View Scholarship & Discount Programs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-10">
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }} className="mb-3">
              Online Application
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '1rem', color: 'var(--muted-foreground)' }}>
              Fill out the form below and our admissions team will contact you within 24 hours.
            </motion.p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 px-8 bg-card rounded-3xl border border-border/50">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--foreground)' }} className="mb-3">Application Submitted!</h3>
              <p style={{ fontSize: '1rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }} className="mb-6">
                Thank you, {form.parentName}! We've received your application for {form.childName}. Our admissions team will contact you at <strong>{form.email}</strong> within 24 hours.
              </p>
              <button onClick={() => setSubmitted(false)} style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.9375rem' }}>
                Submit another application
              </button>
            </motion.div>
          ) : (
            <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">
                      {field.label}{field.required && <span className="text-destructive ml-0.5">*</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={(form as any)[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      style={{ fontSize: '0.9375rem' }}
                      className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </motion.div>
                ))}
                <motion.div variants={fadeUp}>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">Applying for Grade <span className="text-destructive">*</span></label>
                  <div className="relative">
                    <select name="grade" value={form.grade} onChange={handleChange} required style={{ fontSize: '0.9375rem' }} className="w-full px-4 py-3 pr-10 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 appearance-none cursor-pointer">
                      {['KG1', 'KG2', ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)].map(g => <option key={g}>{g}</option>)}
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>
                </motion.div>
              </div>
              <motion.div variants={fadeUp}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">Additional Information or Questions</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any special requirements, questions, or information you'd like us to know..."
                  style={{ fontSize: '0.9375rem' }}
                  className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </motion.div>
              <motion.button variants={fadeUp} type="submit" className="w-full py-4 rounded-2xl bg-primary text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2" style={{ fontWeight: 700, fontSize: '1rem' }}>
                Submit Application <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.p variants={fadeUp} style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', textAlign: 'center' }}>
                By submitting, you agree to our Privacy Policy. We will never share your information with third parties.
              </motion.p>
            </motion.form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: '#F8F6FF' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-10">
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }} className="mb-3">Admissions FAQ</motion.h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white rounded-2xl border border-border/50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/20 transition-colors"
                >
                  <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--foreground)', paddingRight: '1rem' }}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }} className="px-6 pb-5">{faq.a}</p>
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
