import { useState } from 'react';
import { motion } from 'motion/react';
import { Newspaper, Search, Calendar, Tag, ArrowRight, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

type NewsCategory = 'All' | 'Achievements' | 'Technology' | 'Events' | 'Academics' | 'Community';
const categories: NewsCategory[] = ['All', 'Achievements', 'Technology', 'Events', 'Academics', 'Community'];

const categoryConfig: Record<string, { color: string; bg: string }> = {
  Achievements: { color: '#F59E0B', bg: '#FFFBEB' },
  Technology: { color: '#5B4FC7', bg: '#F0EEFF' },
  Events: { color: '#EF7B6C', bg: '#FEF2F0' },
  Academics: { color: '#4EABBE', bg: '#E6F6FA' },
  Community: { color: '#10B981', bg: '#ECFDF5' },
};

const articles = [
  {
    id: 1,
    title: 'Nova Academy Wins Regional Robotics Championship for the Third Consecutive Year',
    category: 'Achievements' as NewsCategory,
    date: '2026-06-10',
    author: 'Nova Academy Communications',
    priority: 'high',
    featured: true,
    image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800&h=450&fit=crop&auto=format',
    excerpt: 'Our Robotics Club dominated the 2026 UAE Regional Robotics Championship, taking first place in three categories: Autonomous Navigation, Team Challenge, and Best Design Award.',
    readTime: '3 min read',
  },
  {
    id: 2,
    title: 'New AI-Powered Learning Platform Launched Across All Grade Levels',
    category: 'Technology' as NewsCategory,
    date: '2026-06-05',
    author: 'Dr. Sarah Al-Hassan',
    priority: 'high',
    featured: false,
    image: 'https://images.unsplash.com/photo-1558137623-ce933996c730?w=800&h=450&fit=crop&auto=format',
    excerpt: 'Nova Academy has officially launched an AI-powered learning platform that creates personalized learning pathways for each student, adapting to their pace, style, and strengths.',
    readTime: '5 min read',
  },
  {
    id: 3,
    title: 'Outstanding IGCSE Results: 87% of Students Achieve A* to B Grades',
    category: 'Academics' as NewsCategory,
    date: '2026-05-28',
    author: 'Academic Affairs Office',
    priority: 'medium',
    featured: false,
    image: 'https://images.unsplash.com/photo-1773921403832-aaeba299e510?w=800&h=450&fit=crop&auto=format',
    excerpt: 'We are incredibly proud to announce that the Class of 2026 IGCSE results are our strongest ever, with 87% of students achieving A* to B grades across all subjects.',
    readTime: '4 min read',
  },
  {
    id: 4,
    title: 'Summer Enrichment Programs 2026: Registration Now Open',
    category: 'Events' as NewsCategory,
    date: '2026-05-20',
    author: 'Student Affairs',
    priority: 'medium',
    featured: false,
    image: 'https://images.unsplash.com/photo-1527612820672-5b56351f7346?w=800&h=450&fit=crop&auto=format',
    excerpt: 'Our summer enrichment programs include Robotics, Coding, Art, Swimming, Math Mastery, and Creative Writing camps running from July 10 to August 14, 2026.',
    readTime: '3 min read',
  },
  {
    id: 5,
    title: 'New State-of-the-Art Science Center to Open in September 2026',
    category: 'Technology' as NewsCategory,
    date: '2026-05-12',
    author: 'Principal\'s Office',
    priority: 'medium',
    featured: false,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=450&fit=crop&auto=format',
    excerpt: 'Nova Academy is proud to announce the completion of our 2,400 square meter Science & Innovation Center, featuring advanced laboratory facilities and a dedicated robotics arena.',
    readTime: '4 min read',
  },
  {
    id: 6,
    title: 'Nova Academy Students Raise AED 85,000 for Local Charities at Annual Gala',
    category: 'Community' as NewsCategory,
    date: '2026-05-05',
    author: 'Community Relations',
    priority: 'low',
    featured: false,
    image: 'https://images.unsplash.com/photo-1746122072064-3273a25094c2?w=800&h=450&fit=crop&auto=format',
    excerpt: 'The 2026 Nova Academy Charity Gala was a spectacular success, raising AED 85,000 for three local charities through student performances, art auctions, and community donations.',
    readTime: '3 min read',
  },
  {
    id: 7,
    title: 'Grade 11 Student Wins National Mathematics Olympiad Gold Medal',
    category: 'Achievements' as NewsCategory,
    date: '2026-04-28',
    author: 'Mathematics Department',
    priority: 'high',
    featured: false,
    image: 'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?w=800&h=450&fit=crop&auto=format',
    excerpt: 'Ahmad Al-Mahmoud, Grade 11, has won the National Mathematics Olympiad gold medal, the first Nova Academy student to achieve this honor. Ahmad will represent the UAE at the International Math Olympiad in July.',
    readTime: '2 min read',
  },
  {
    id: 8,
    title: 'Nova Academy Introduces Mental Wellness Program for All Students',
    category: 'Academics' as NewsCategory,
    date: '2026-04-15',
    author: 'Counseling Department',
    priority: 'medium',
    featured: false,
    image: 'https://images.unsplash.com/photo-1638957835514-224c57ffe617?w=800&h=450&fit=crop&auto=format',
    excerpt: 'In response to growing awareness of student wellbeing, Nova Academy has launched a comprehensive Mental Wellness Program with dedicated counselors, mindfulness sessions, and peer support groups.',
    readTime: '4 min read',
  },
];

const priorityConfig = {
  high: { label: 'Priority', color: '#EF4444', bg: '#FEF2F2' },
  medium: { label: 'Featured', color: '#5B4FC7', bg: '#F0EEFF' },
  low: { label: 'Community', color: '#10B981', bg: '#ECFDF5' },
};

export default function NewsPage() {
  const [category, setCategory] = useState<NewsCategory>('All');
  const [search, setSearch] = useState('');

  const filtered = articles.filter(a => {
    if (category !== 'All' && a.category !== category) return false;
    if (search && !a.title.toLowerCase().includes(search.toLowerCase()) && !a.excerpt.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const featured = articles.find(a => a.featured);
  const rest = filtered.filter(a => !a.featured);

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div>
      {/* HERO */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8F6FF 0%, #EDE9FF 50%, #E8F0FF 100%)' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,79,199,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              <Newspaper className="w-3.5 h-3.5" />
              News & Announcements
            </motion.span>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', lineHeight: 1.1 }} className="mb-5">
              Stay{' '}
              <span style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #4EABBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Informed
              </span>{' '}
              with Nova
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }}>
              The latest news, achievements, events, and announcements from the Nova Academy community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search + Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search news and announcements..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ fontSize: '0.9375rem' }}
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    background: category === c ? 'var(--primary)' : 'transparent',
                    color: category === c ? 'white' : 'var(--muted-foreground)',
                    border: category === c ? 'none' : '1px solid var(--border)',
                  }}
                  className="px-4 py-2.5 rounded-full transition-all"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          {featured && (category === 'All' || category === featured.category) && !search && (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border/50 shadow-lg">
                <div className="relative" style={{ minHeight: 300 }}>
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" style={{ position: 'absolute', inset: 0 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent)' }} />
                  <div className="absolute top-4 left-4">
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, background: '#EF4444', color: 'white' }} className="px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" /> Featured Story
                    </span>
                  </div>
                </div>
                <div className="bg-card p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, background: categoryConfig[featured.category]?.bg ?? '#F0EEFF', color: categoryConfig[featured.category]?.color ?? '#5B4FC7' }} className="px-2.5 py-1 rounded-full">{featured.category}</span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{formatDate(featured.date)}</span>
                  </div>
                  <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--foreground)', letterSpacing: '-0.01em', lineHeight: 1.3 }} className="mb-4">{featured.title}</h2>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }} className="mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{featured.readTime}</span>
                    <button className="inline-flex items-center gap-2 text-primary" style={{ fontWeight: 600, fontSize: '0.875rem' }}>
                      Read Full Story <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Articles Grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => {
              const catCfg = categoryConfig[article.category] ?? { color: '#5B4FC7', bg: '#F0EEFF' };
              return (
                <motion.article
                  key={article.id}
                  variants={fadeUp}
                  className="bg-card rounded-3xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, background: catCfg.bg, color: catCfg.color }} className="px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5" /> {article.category}
                      </span>
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)', lineHeight: 1.4 }} className="mb-3 line-clamp-2">{article.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }} className="mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        <span style={{ fontSize: '0.8125rem' }}>{formatDate(article.date)}</span>
                      </div>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{article.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <Newspaper className="w-10 h-10 mx-auto mb-4 opacity-30" />
              <p style={{ fontSize: '1rem' }}>No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
