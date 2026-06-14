import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Tag, Calculator, CheckCircle, ChevronDown, AlertCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const scholarships = [
  {
    title: 'Academic Excellence Scholarship',
    discount: 'Up to 50% off',
    color: '#5B4FC7',
    bg: '#F0EEFF',
    icon: '🏆',
    criteria: ['GPA 95% or above in previous school', 'Academic recommendation letter', 'Portfolio of achievements', 'Entrance examination required'],
    desc: 'Awarded to exceptional students with outstanding academic records. Covers up to 50% of annual tuition fees and is renewable each year.',
    renewable: true,
  },
  {
    title: 'Sibling Discount Program',
    discount: '10–20% off',
    color: '#4EABBE',
    bg: '#E6F6FA',
    icon: '👨‍👩‍👧‍👦',
    criteria: ['Available for 2nd child (10% discount)', '3rd child receives 15% discount', '4th+ child receives 20% discount', 'Applied automatically on enrollment'],
    desc: 'Supporting families who choose Nova Academy for multiple children. Discounts are stacked with other eligible scholarships up to 25% total.',
    renewable: true,
  },
  {
    title: 'Early Registration Discount',
    discount: '8% off',
    color: '#10B981',
    bg: '#ECFDF5',
    icon: '⏰',
    criteria: ['Registration before March 31, 2026', 'First year only', 'Deposit of AED 5,000 required', 'Non-refundable registration fee applies'],
    desc: 'Register early for the 2026–2027 academic year and enjoy an 8% discount on the first year\'s full tuition fee.',
    renewable: false,
  },
  {
    title: 'Special Achievement Scholarship',
    discount: 'Up to 30% off',
    color: '#EF7B6C',
    bg: '#FEF2F0',
    icon: '⭐',
    criteria: ['National/international achievement in sports, arts, or science', 'Documentation of achievement required', 'Panel review by scholarship committee', 'Renewable based on continued achievement'],
    desc: 'Recognizing students who have achieved excellence in sports, performing arts, visual arts, or STEM competitions at the national or international level.',
    renewable: true,
  },
];

const coupons: Record<string, { discount: number; label: string; expires: string }> = {
  'WELCOME2026': { discount: 5, label: 'New Student Welcome', expires: 'August 31, 2026' },
  'EARLYBIRD': { discount: 8, label: 'Early Bird Registration', expires: 'March 31, 2026' },
  'SCHOLAR50': { discount: 15, label: 'Scholar Partner', expires: 'June 30, 2026' },
  'NOVA10': { discount: 10, label: 'Nova Community Referral', expires: 'July 31, 2026' },
};

const tuitionFees: Record<string, number> = {
  'KG1': 32000,
  'KG2': 32000,
  'Grade 1': 40000,
  'Grade 2': 40000,
  'Grade 3': 40000,
  'Grade 4': 40000,
  'Grade 5': 40000,
  'Grade 6': 48000,
  'Grade 7': 48000,
  'Grade 8': 48000,
  'Grade 9': 56000,
  'Grade 10': 56000,
  'Grade 11': 60000,
  'Grade 12': 60000,
};

export default function ScholarshipsPage() {
  const [grade, setGrade] = useState('Grade 1');
  const [children, setChildren] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<null | { discount: number; label: string; expires: string }>(null);
  const [couponError, setCouponError] = useState('');

  const applyCode = () => {
    const code = couponCode.trim().toUpperCase();
    if (coupons[code]) {
      setAppliedCoupon(coupons[code]);
      setCouponError('');
    } else {
      setAppliedCoupon(null);
      setCouponError('Invalid or expired coupon code. Try: WELCOME2026, EARLYBIRD, or SCHOLAR50');
    }
  };

  const baseFee = tuitionFees[grade] ?? 40000;
  const siblingDiscount = children === 1 ? 0 : children === 2 ? 0.10 : children === 3 ? 0.15 : 0.20;
  const couponDiscount = appliedCoupon ? appliedCoupon.discount / 100 : 0;
  const totalDiscount = Math.min(siblingDiscount + couponDiscount, 0.35);
  const discountedFee = Math.round(baseFee * (1 - totalDiscount));
  const savings = baseFee - discountedFee;
  const totalForAll = discountedFee * children;

  return (
    <div>
      {/* HERO */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8F6FF 0%, #EDE9FF 50%, #E8F0FF 100%)' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,79,199,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              <Award className="w-3.5 h-3.5" />
              Scholarships & Tuition
            </motion.span>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', lineHeight: 1.1 }} className="mb-5">
              Making Excellence{' '}
              <span style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #4EABBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Accessible
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }}>
              Nova Academy is committed to making world-class education accessible. Explore our scholarship programs, discounts, and use our tuition calculator to plan your investment in your child's future.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SCHOLARSHIPS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }} className="mb-4">
              Scholarship Programs
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '1rem', color: 'var(--muted-foreground)', maxWidth: 500, margin: '0 auto' }}>
              Multiple pathways to financial support for deserving students and families.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scholarships.map(s => (
              <motion.div key={s.title} variants={fadeUp} className="rounded-3xl p-7 border border-border/50" style={{ background: s.bg }}>
                <div className="flex items-start gap-4 mb-5">
                  <span style={{ fontSize: '2rem' }}>{s.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--foreground)' }}>{s.title}</h3>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: s.color }}>{s.discount}</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }} className="mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.criteria.map(c => (
                    <li key={c} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: s.color }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>{c}</span>
                    </li>
                  ))}
                </ul>
                {s.renewable && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: s.color }} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" /> Renewable scholarship — maintain eligibility criteria
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COUPON + CALCULATOR */}
      <section className="py-20" style={{ background: '#F8F6FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coupon System */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Tag className="w-5 h-5 text-primary" />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }}>Promotional Codes</h2>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }} className="mb-6">
                Enter a promotional code below to unlock special discounts for the 2026–2027 academic year.
              </p>

              <div className="flex gap-3 mb-4">
                <input
                  type="text"
                  placeholder="Enter coupon code (e.g. WELCOME2026)"
                  value={couponCode}
                  onChange={e => setCouponCode(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && applyCode()}
                  style={{ fontSize: '0.9375rem', fontWeight: 500 }}
                  className="flex-1 px-4 py-3 rounded-2xl border border-border bg-white focus:outline-none focus:border-primary/50 transition-colors uppercase"
                />
                <button
                  onClick={applyCode}
                  className="px-5 py-3 rounded-2xl bg-primary text-white hover:opacity-90 transition-opacity"
                  style={{ fontWeight: 600, fontSize: '0.875rem', whiteSpace: 'nowrap' }}
                >
                  Apply
                </button>
              </div>

              {couponError && (
                <div className="flex items-start gap-2 p-4 rounded-2xl mb-4" style={{ background: '#FEF2F2', color: '#EF4444' }}>
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <p style={{ fontSize: '0.875rem' }}>{couponError}</p>
                </div>
              )}

              {appliedCoupon && (
                <div className="p-5 rounded-2xl border" style={{ background: '#ECFDF5', borderColor: '#A7F3D0' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p style={{ fontWeight: 700, color: '#065F46' }}>Coupon Applied!</p>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#065F46' }}>{appliedCoupon.label} — <strong>{appliedCoupon.discount}% discount</strong></p>
                  <p style={{ fontSize: '0.8125rem', color: '#065F46', opacity: 0.7 }}>Valid until {appliedCoupon.expires}</p>
                </div>
              )}

              <div className="mt-8 space-y-3">
                <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--muted-foreground)' }} className="uppercase tracking-wider">Example Codes</p>
                {Object.entries(coupons).map(([code, info]) => (
                  <div key={code} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-border/50">
                    <div>
                      <span style={{ fontWeight: 700, fontFamily: 'monospace', color: 'var(--primary)', fontSize: '0.9375rem' }}>{code}</span>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{info.label}</p>
                    </div>
                    <span style={{ fontWeight: 700, color: '#10B981', fontSize: '0.9375rem' }}>{info.discount}% off</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tuition Calculator */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }}>Tuition Calculator</h2>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-border/50 shadow-sm">
                <div className="space-y-6 mb-8">
                  <div>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-2">Select Grade</label>
                    <div className="relative">
                      <select
                        value={grade}
                        onChange={e => setGrade(e.target.value)}
                        style={{ fontSize: '0.9375rem', fontWeight: 500 }}
                        className="w-full px-4 py-3 pr-10 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 appearance-none cursor-pointer transition-colors"
                      >
                        {Object.keys(tuitionFees).map(g => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }} className="block mb-2">Number of Children</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map(n => (
                        <button
                          key={n}
                          onClick={() => setChildren(n)}
                          style={{
                            flex: 1,
                            background: children === n ? 'var(--primary)' : 'transparent',
                            color: children === n ? 'white' : 'var(--muted-foreground)',
                            border: children === n ? 'none' : '1px solid var(--border)',
                            fontWeight: 700,
                            fontSize: '0.9375rem',
                          }}
                          className="py-3 rounded-xl transition-all"
                        >
                          {n}{n === 4 ? '+' : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #F0EEFF 0%, #E8F0FF 100%)' }}>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--muted-foreground)' }} className="mb-4 uppercase tracking-wider">Estimated Annual Tuition</p>
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between">
                      <span style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)' }}>Base tuition ({grade})</span>
                      <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--foreground)' }}>AED {baseFee.toLocaleString()}</span>
                    </div>
                    {siblingDiscount > 0 && (
                      <div className="flex justify-between">
                        <span style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)' }}>Sibling discount</span>
                        <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#10B981' }}>−{(siblingDiscount * 100).toFixed(0)}%</span>
                      </div>
                    )}
                    {appliedCoupon && (
                      <div className="flex justify-between">
                        <span style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)' }}>Coupon discount ({couponCode.toUpperCase()})</span>
                        <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#10B981' }}>−{appliedCoupon.discount}%</span>
                      </div>
                    )}
                    {savings > 0 && (
                      <div className="flex justify-between">
                        <span style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)' }}>You save (per child)</span>
                        <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#10B981' }}>AED {savings.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="border-t border-primary/20 pt-3 flex justify-between items-end">
                      <span style={{ fontWeight: 600, color: 'var(--foreground)' }}>Total ({children} {children === 1 ? 'child' : 'children'})</span>
                      <div className="text-right">
                        <p style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>AED {totalForAll.toLocaleString()}</p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>per year</p>
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>
                    * Estimate only. Actual fees may include registration, uniforms, books, and transport. Contact admissions for a detailed breakdown.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PAYMENT PLANS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--foreground)', letterSpacing: '-0.02em' }} className="mb-4">Flexible Payment Options</motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: '1rem', color: 'var(--muted-foreground)', maxWidth: 500, margin: '0 auto 3rem' }}>
              We offer multiple payment plans to suit your family's financial situation.
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Annual Payment', discount: '5% bonus discount', desc: 'Pay the full year upfront and receive an additional 5% discount on top of any existing scholarships.' },
                { title: 'Semester Plan', discount: '2 installments', desc: 'Pay in two equal installments — one at the start of each semester (September and February).' },
                { title: 'Monthly Plan', discount: '10 installments', desc: 'Spread payments over 10 months with a small administrative fee. Available for approved families.' },
              ].map(({ title, discount, desc }) => (
                <motion.div key={title} variants={fadeUp} className="bg-card rounded-3xl p-6 border border-border/50">
                  <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }} className="mb-1">{title}</h4>
                  <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--primary)' }} className="mb-3">{discount}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
