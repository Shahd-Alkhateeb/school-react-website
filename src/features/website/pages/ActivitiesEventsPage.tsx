import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, MapPin, Clock, ChevronLeft, ChevronRight, 
  Award, ChevronRight as ChevronRightIcon, Trophy, Users 
} from 'lucide-react';

// --- Animations ---
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

// --- Types & Config ---
type ActivityCategory = 'All' | 'Sports' | 'Technology' | 'Arts' | 'Science' | 'Community';
type EventType = 'All' | 'Exams' | 'Meetings' | 'Workshops' | 'Trips' | 'Competitions' | 'Graduation';

const activityCategories: ActivityCategory[] = ['All', 'Sports', 'Technology', 'Arts', 'Science', 'Community'];
const eventTypes: EventType[] = ['All', 'Exams', 'Meetings', 'Workshops', 'Trips', 'Competitions', 'Graduation'];

const eventTypeConfig: Record<string, { color: string; bg: string }> = {
  Exams: { color: '#EF4444', bg: '#FEF2F2' },
  Meetings: { color: '#5B4FC7', bg: '#F0EEFF' },
  Workshops: { color: '#4EABBE', bg: '#E6F6FA' },
  Trips: { color: '#10B981', bg: '#ECFDF5' },
  Competitions: { color: '#F59E0B', bg: '#FFFBEB' },
  Graduation: { color: '#EF7B6C', bg: '#FEF2F0' },
};

// --- Mock Data ---
const activities = [
  { id: 1, title: 'Robotics Club', category: 'Technology' as ActivityCategory, image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&h=400&fit=crop&auto=format', description: 'Students design, build, and program robots to compete in regional and international competitions using LEGO Mindstorms and Arduino platforms.', members: 45, sessions: '3× per week', level: 'Grades 5–12', achievements: ['Regional Champions 2025', '2nd Place Arab Robotics Cup 2024'], color: '#5B4FC7' },
  { id: 2, title: 'Programming Academy', category: 'Technology' as ActivityCategory, image: 'https://images.unsplash.com/photo-1527612820672-5b56351f7346?w=600&h=400&fit=crop&auto=format', description: 'Learn web development, mobile apps, game design, and AI. Students graduate with real portfolio projects and coding certifications.', members: 60, sessions: '2× per week', level: 'Grades 4–12', achievements: ['UAE Hackathon Winners 2025', 'Google CS First Certified'], color: '#3D5A9E' },
  { id: 3, title: 'Football Academy', category: 'Sports' as ActivityCategory, image: 'https://images.unsplash.com/photo-1746122072064-3273a25094c2?w=600&h=400&fit=crop&auto=format', description: 'Professional coaching staff guide students through technical skills, tactical awareness, and teamwork. Compete in inter-school leagues.', members: 80, sessions: '4× per week', level: 'All Grades', achievements: ['Dubai Schools League Champions 2025', '3× Regional Finalists'], color: '#10B981' },
  { id: 4, title: 'Science Club', category: 'Science' as ActivityCategory, image: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?w=600&h=400&fit=crop&auto=format', description: 'Weekly experiments, research projects, and science communication. Students participate in national and international science fairs.', members: 55, sessions: '2× per week', level: 'Grades 4–12', achievements: ['National Science Fair Gold 2025', 'Published in Youth Science Journal'], color: '#4EABBE' },
  { id: 5, title: 'Music Academy', category: 'Arts' as ActivityCategory, image: 'https://images.unsplash.com/photo-1638957835514-224c57ffe617?w=600&h=400&fit=crop&auto=format', description: 'Piano, guitar, violin, voice, and Arabic oud lessons. Students perform in biannual concerts and community events.', members: 70, sessions: '2–3× per week', level: 'All Grades', achievements: ['Best School Orchestra 2024', 'Dubai Arts Festival Performers'], color: '#EF7B6C' },
  { id: 6, title: 'Art Studio', category: 'Arts' as ActivityCategory, image: 'https://images.unsplash.com/photo-1578593139939-cccb1e98698c?w=600&h=400&fit=crop&auto=format', description: 'From classical painting to digital art and sculpture — our Art Studio nurtures creative expression across all media.', members: 50, sessions: '2× per week', level: 'All Grades', achievements: ['5 Students at International Art Expo', 'Annual Campus Art Exhibition'], color: '#F59E0B' },
  { id: 7, title: 'Volunteering & Community', category: 'Community' as ActivityCategory, image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop&auto=format', description: 'Students lead community impact projects, partner with local charities, and develop leadership and empathy through service.', members: 120, sessions: 'Weekly + events', level: 'Grades 6–12', achievements: ['3,200+ volunteer hours (2025)', 'UAE Volunteer Award Finalist'], color: '#5B6FE8' },
];

const events = [
  { id: 1, title: 'End of Year Exams — KG & Primary', type: 'Exams' as EventType, date: '2026-06-15', endDate: '2026-06-19', time: '8:00 AM – 1:00 PM', location: 'All Classrooms', desc: 'End of academic year exams for Kindergarten and Primary (Grades 1–5). Students are asked to arrive 15 minutes early.' },
  { id: 2, title: 'IGCSE Final Examinations', type: 'Exams' as EventType, date: '2026-06-15', endDate: '2026-06-26', time: '8:00 AM – 12:00 PM', location: 'Examination Hall A & B', desc: 'Cambridge IGCSE examinations for Grade 10 students, administered by Cambridge Assessment International Education.' },
  { id: 3, title: 'Parent-Teacher Conference', type: 'Meetings' as EventType, date: '2026-07-02', time: '9:00 AM – 5:00 PM', location: 'Main Campus — All Classrooms', desc: 'Book individual 15-minute appointments with your child\'s teachers through the Parent Portal. Report cards will be shared at this meeting.' },
  { id: 4, title: 'Summer Robotics Workshop', type: 'Workshops' as EventType, date: '2026-07-10', endDate: '2026-07-20', time: '9:00 AM – 12:00 PM', location: 'Innovation Lab, Building C', desc: 'An intensive 10-day robotics and programming workshop for Grades 5–9. Students will build and compete with their own robots. Registration limited to 30 students.' },
  { id: 5, title: 'Science Museum Trip — Grade 6', type: 'Trips' as EventType, date: '2026-07-15', time: '7:30 AM – 3:00 PM', location: 'Dubai Science Museum', desc: 'Educational field trip to the Dubai Science Museum. Students will participate in guided workshops on space exploration and renewable energy.' },
];

// --- MiniCalendar Component ---
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function MiniCalendar({ year, month, eventDates, onDateClick, selectedDate }: {
  year: number; month: number; eventDates: Set<string>; onDateClick: (d: string) => void; selectedDate: string | null;
}) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = Array(firstDay).fill(null).concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  return (
    <div className="bg-card rounded-3xl border border-border/50 p-6">
      <div className="mb-5">
        <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }}>{MONTHS[month]} {year}</p>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map(d => <div key={d} className="text-center" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted-foreground)' }}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (!day) return <div key={i} />;
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const hasEvent = eventDates.has(dateStr);
          const isSelected = selectedDate === dateStr;
          return (
            <button
              key={i}
              onClick={() => hasEvent && onDateClick(dateStr)}
              style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: 8,
                fontSize: '0.8125rem',
                fontWeight: hasEvent ? 600 : 400,
                background: isSelected ? 'var(--primary)' : hasEvent ? 'var(--primary)/12' : 'transparent',
                color: isSelected ? 'white' : hasEvent ? 'var(--primary)' : 'var(--foreground)',
                cursor: hasEvent ? 'pointer' : 'default',
              }}
              className={hasEvent ? 'hover:opacity-80' : ''}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// --- Main Page Component ---
export default function ActivitiesEventsPage() {
  const [activeTab, setActiveTab] = useState<'activities' | 'events'>('activities');

  // Activities State
  const [activityCategory, setActivityCategory] = useState<ActivityCategory>('All');
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);

  // Events State
  const [eventType, setEventType] = useState<EventType>('All');
  const [viewMonth, setViewMonth] = useState(5); // June = 5 (0-indexed)
  const [selectedEventDate, setSelectedEventDate] = useState<string | null>(null);

  // Filtered Data
  const filteredActivities = activityCategory === 'All' ? activities : activities.filter(a => a.category === activityCategory);
  const eventDates = new Set(events.map(e => e.date));
  const filteredEvents = events.filter(e => {
    if (eventType !== 'All' && e.type !== eventType) return false;
    if (selectedEventDate && e.date !== selectedEventDate) return false;
    return true;
  });

  const formatDate = (d: string) => {
    const date = new Date(d);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div>
      {/* SHARED HERO SECTION */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8F6FF 0%, #EDE9FF 50%, #E8F0FF 100%)' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,79,199,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              <Award className="w-3.5 h-3.5" />
              Campus Life
            </motion.span>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', lineHeight: 1.1 }} className="mb-5">
              Explore Our{' '}
              <span style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #4EABBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Vibrant Community
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }} className="mb-8">
              Discover opportunities beyond the classroom. Join our diverse clubs, stay updated with the academic calendar, and participate in upcoming school events.
            </motion.p>

            {/* TAB SWITCHER */}
            <motion.div variants={fadeUp} className="inline-flex p-1.5 rounded-2xl bg-card border border-border shadow-sm">
              <button
                onClick={() => setActiveTab('activities')}
                className={`px-6 py-2.5 rounded-xl transition-all font-semibold text-sm ${activeTab === 'activities' ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Activities & Clubs
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-6 py-2.5 rounded-xl transition-all font-semibold text-sm ${activeTab === 'events' ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Events Calendar
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DYNAMIC CONTENT SWITCHER */}
      <AnimatePresence mode="wait">
        
        {/* ================= ACTIVITIES TAB ================= */}
        {activeTab === 'activities' && (
          <motion.div key="activities" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            
            {/* ACTIVITIES FILTERS */}
            <section className="py-8 bg-white border-b border-border">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-2">
                  {activityCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActivityCategory(cat)}
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        background: activityCategory === cat ? 'var(--primary)' : 'transparent',
                        color: activityCategory === cat ? 'white' : 'var(--muted-foreground)',
                        border: activityCategory === cat ? 'none' : '1px solid var(--border)',
                      }}
                      className="px-5 py-2 rounded-full transition-all hover:border-primary/40"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* ACTIVITIES GRID */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredActivities.map((activity, i) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="bg-card rounded-3xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      onClick={() => setExpandedActivity(expandedActivity === activity.id ? null : activity.id)}
                    >
                      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                        <img src={activity.image} alt={activity.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
                        <div className="absolute top-4 left-4">
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, background: activity.color, color: 'white' }} className="px-3 py-1 rounded-full">
                            {activity.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--foreground)' }} className="mb-2">{activity.title}</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }} className="mb-4">{activity.description}</p>

                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Users className="w-3.5 h-3.5" />
                            <span style={{ fontSize: '0.8125rem' }}>{activity.members} members</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            <span style={{ fontSize: '0.8125rem' }}>{activity.sessions}</span>
                          </div>
                        </div>

                        <AnimatePresence>
                          {expandedActivity === activity.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 border-t border-border">
                                <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--foreground)' }} className="mb-2">Open to: {activity.level}</p>
                                <div className="space-y-1.5">
                                  {activity.achievements.map(ach => (
                                    <div key={ach} className="flex items-center gap-2">
                                      <Trophy className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
                                      <span style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{ach}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <button
                          className="mt-4 flex items-center gap-1 transition-colors"
                          style={{ fontSize: '0.8125rem', fontWeight: 600, color: activity.color }}
                        >
                          {expandedActivity === activity.id ? 'Show less' : 'Learn more'}
                          <ChevronRightIcon className={`w-4 h-4 transition-transform ${expandedActivity === activity.id ? 'rotate-90' : ''}`} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ACTIVITIES STATS BANNER */}
            <section className="py-16" style={{ background: '#F8F6FF' }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {[
                    { value: '30+', label: 'Clubs & Activities' },
                    { value: '700+', label: 'Active Participants' },
                    { value: '45+', label: 'Championships Won' },
                    { value: '3,200+', label: 'Volunteer Hours' },
                  ].map(({ value, label }) => (
                    <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <p style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }} className="mb-2">{value}</p>
                      <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', fontWeight: 500 }}>{label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* ================= EVENTS TAB ================= */}
        {activeTab === 'events' && (
          <motion.div key="events" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            
            <section className="py-12 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* EVENTS SIDEBAR (Filters & Calendar) */}
                  <div className="space-y-6">
                    <div className="bg-card rounded-3xl border border-border/50 p-5">
                      <div className="flex items-center justify-between mb-4">
                        <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--foreground)' }}>Filter by type</p>
                        {selectedEventDate && (
                          <button onClick={() => setSelectedEventDate(null)} style={{ fontSize: '0.8125rem', color: 'var(--primary)', fontWeight: 600 }}>Clear date</button>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {eventTypes.map(t => (
                          <button
                            key={t}
                            onClick={() => setEventType(t)}
                            style={{
                              fontSize: '0.8125rem',
                              fontWeight: 600,
                              background: eventType === t ? 'var(--primary)' : 'transparent',
                              color: eventType === t ? 'white' : 'var(--muted-foreground)',
                              border: eventType === t ? 'none' : '1px solid var(--border)',
                            }}
                            className="px-3 py-1.5 rounded-full transition-all"
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3 px-1">
                      <button onClick={() => setViewMonth(m => Math.max(0, m - 1))} className="p-1.5 rounded-lg hover:bg-muted/50 transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button onClick={() => setViewMonth(m => Math.min(11, m + 1))} className="p-1.5 rounded-lg hover:bg-muted/50 transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    <MiniCalendar year={2026} month={viewMonth} eventDates={eventDates} onDateClick={setSelectedEventDate} selectedDate={selectedEventDate} />
                  </div>

                  {/* EVENTS LIST */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                      <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }}>
                        {selectedEventDate ? formatDate(selectedEventDate) : 'All Upcoming Events'}
                      </p>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{filteredEvents.length} events</span>
                    </div>

                    <div className="space-y-4">
                      {filteredEvents.length === 0 && (
                        <div className="text-center py-16 text-muted-foreground">
                          <Calendar className="w-10 h-10 mx-auto mb-3 opacity-30" />
                          <p>No events found for the selected filters.</p>
                        </div>
                      )}
                      
                      {filteredEvents.map((event, i) => {
                        const cfg = eventTypeConfig[event.type] ?? { color: '#5B4FC7', bg: '#F0EEFF' };
                        return (
                          <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-card rounded-3xl p-6 border border-border/50 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-start gap-4">
                              <div className="rounded-2xl p-3 shrink-0" style={{ background: cfg.bg }}>
                                <Calendar className="w-5 h-5" style={{ color: cfg.color }} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <span style={{ fontSize: '0.75rem', fontWeight: 600, background: cfg.bg, color: cfg.color }} className="px-2.5 py-0.5 rounded-full">{event.type}</span>
                                  {event.endDate && <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>Multi-day event</span>}
                                </div>
                                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }} className="mb-2">{event.title}</h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }} className="mb-4">{event.desc}</p>
                                <div className="flex flex-wrap gap-4">
                                  <div className="flex items-center gap-1.5 text-muted-foreground">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span style={{ fontSize: '0.8125rem' }}>{formatDate(event.date)}{event.endDate ? ` – ${formatDate(event.endDate)}` : ''}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5 text-muted-foreground">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span style={{ fontSize: '0.8125rem' }}>{event.time}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5 text-muted-foreground">
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span style={{ fontSize: '0.8125rem' }}>{event.location}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}