import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from "@formspree/react";

import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const} },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const departments = [
  { id: 'admissions', label: 'Admissions Office', email: 'admissions@novaacademy.edu', phone: '+963 933 505 771' },
  { id: 'finance', label: 'Finance Department', email: 'finance@novaacademy.edu', phone: '+963 977 780 850' },
  { id: 'academic', label: 'Academic Affairs', email: 'academic@novaacademy.edu', phone: '+963 933 505 771' },
  { id: 'counseling', label: 'Student Counseling', email: 'counseling@novaacademy.edu', phone: '+963 933 505 771' },
  { id: 'technical', label: 'Technical Support', email: 'support@novaacademy.edu', phone: '+963 933 505 771' },
  { id: 'principal', label: 'Principal\'s Office', email: 'principal@novaacademy.edu', phone: '+963 977 780 850' },
];

export default function ContactPage() {
 const [state, formspreeSubmit] = useForm("xpqekbrd");

const [form, setForm] = useState({
  name: '',
  email: '',
  phone: '',
  department: 'admissions',
  subject: '',
  message: ''
});
  return (
    <div>
      {/* HERO */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8F6FF 0%, #EDE9FF 50%, #E8F0FF 100%)' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,79,199,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              <MessageSquare className="w-3.5 h-3.5" />
              Contact Us
            </motion.span>
            <motion.h1 variants ={fadeUp} style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', lineHeight: 1.1 }} className="mb-5">
              We'd Love to{' '}
              <span style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #4EABBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Hear from You
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }}>
              Whether you're a prospective family, a current parent, or a community partner — our team is here to help. Reach out through any channel and we'll get back to you promptly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { icon: Phone, title: 'Main Reception', value: '+971 4 555 1234', sub: 'Sun–Thu, 7:00 AM – 5:00 PM', color: '#5B4FC7', href: 'tel:+97145551234' },
              { icon: Mail, title: 'General Enquiries', value: 'info@novaacademy.edu', sub: 'Response within 24 hours', color: '#4EABBE', href: 'mailto:info@novaacademy.edu' },
              { icon: MapPin, title: 'Campus Address', value: 'Academic City, Dubai', sub: 'Nova Academy Road, Building 7', color: '#EF7B6C', href: '#map' },
              { icon: MessageSquare, title: 'WhatsApp', value: '+971 50 555 1234', sub: 'Quick queries & responses', color: '#10B981', href: 'https://wa.me/971505551234' },
            ].map(({ icon: Icon, title, value, sub, color, href }) => (
              <motion.a
                key={title}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 block group"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: `${color}18` }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--muted-foreground)', letterSpacing: '0.04em' }} className="uppercase mb-1">{title}</p>
                <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--foreground)' }} className="mb-1">{value}</p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{sub}</p>
              </motion.a>
            ))}
          </div>

          {/* FORM + DEPARTMENTS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }} className="mb-3">Send Us a Message</h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)' }} className="mb-8">Fill out the form and the relevant department will respond within one business day.</p>

             {state.succeeded ? (
                <div className="bg-card rounded-3xl p-12 border border-border/50 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.375rem', color: 'var(--foreground)' }} className="mb-3">Message Sent!</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                    Thank you, {form.name}! We've received your message and will reply to <strong>{form.email}</strong> within one business day.
                  </p>
                  <button onClick={() => window.location.reload()} style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.9375rem' }} className="mt-6">Send another message</button>
                </div>
              ) : (
                <form onSubmit={formspreeSubmit} className="bg-card rounded-3xl p-8 border border-border/50 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">Full Name *</label>
                      <input name="name" type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={{ fontSize: '0.9375rem' }} className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">Email Address *</label>
                      <input name="email" type="email" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={{ fontSize: '0.9375rem' }} className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">Phone Number</label>
                      <input name="phone" type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} style={{ fontSize: '0.9375rem' }} className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">Department</label>
                      <div className="relative">
                        <select name="department" value={form.department} onChange={e => setForm(f => ({ ...f, department: e.target.value }))} style={{ fontSize: '0.9375rem' }} className="w-full px-4 py-3 pr-10 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 appearance-none cursor-pointer">
                          {departments.map(d => <option key={d.id} value={d.id}>{d.label}</option>)}
                        </select>
                        <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">Subject *</label>
                    <input name="subject" type="text" required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} placeholder="What is your enquiry about?" style={{ fontSize: '0.9375rem' }} className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors" />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-1.5">Message *</label>
                    <textarea name="message" required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={6} placeholder="Please provide as much detail as possible..." style={{ fontSize: '0.9375rem' }} className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                  </div>
                  <button  type="submit"  disabled={state.submitting} 
                  className="w-full py-4 rounded-2xl bg-primary text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2" style={{ fontWeight: 700, fontSize: '1rem' }} >
                    {state.submitting ? "Sending..." : "Send Message"} <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Departments + Hours */}
            <div className="space-y-6">
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--foreground)' }} className="mb-4">Department Directory</h3>
                <div className="space-y-3">
                  {departments.map(dept => (
                    <div key={dept.id} className="bg-card rounded-2xl p-4 border border-border/50">
                      <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--foreground)' }} className="mb-1">{dept.label}</p>
                      <a href={`mailto:${dept.email}`} style={{ fontSize: '0.8125rem', color: 'var(--primary)' }} className="block hover:underline">{dept.email}</a>
                      <a href={`tel:${dept.phone}`} style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{dept.phone}</a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/8 rounded-2xl p-6 border border-primary/15">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }}>Office Hours</h4>
                </div>
                {[
                  { day: 'Sunday – Thursday', hours: '7:00 AM – 5:00 PM' },
                  { day: 'Friday', hours: '8:00 AM – 12:00 PM' },
                  { day: 'Saturday', hours: 'Closed' },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between py-2 border-b border-primary/10 last:border-0">
                    <span style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>{day}</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="py-0">
        <div className="w-full" style={{ height: 420, background: '#E5E7F0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #EDE9FF 0%, #E8F0FF 100%)' }} className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 shadow-xl">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <p style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--foreground)' }}>Nova Academy</p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)' }}>Academic City, Dubai, UAE</p>
              <a
                href="https://maps.google.com/?q=Academic+City+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-opacity"
                style={{ fontWeight: 600, fontSize: '0.875rem' }}
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
