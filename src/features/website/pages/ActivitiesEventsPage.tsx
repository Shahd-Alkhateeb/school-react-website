import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useWebsiteContent } from '../hooks/useWebsiteContent';
import { 
  Calendar, MapPin, Clock, ChevronLeft, ChevronRight, 
  Award, ChevronRight as ChevronRightIcon, Trophy, Users 
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

type ActivityCategory = 'All' | 'Sports' | 'Technology' | 'Arts' | 'Science' | 'Community';
type EventType = 'All' | 'Exams' | 'Meetings' | 'Workshops' | 'Trips' | 'Competitions' | 'Graduation';

const activityCategories: ActivityCategory[] = ['All', 'Sports', 'Technology', 'Arts', 'Science', 'Community'];
const eventTypes: EventType[] = ['All', 'Exams', 'Meetings', 'Workshops', 'Trips', 'Competitions', 'Graduation'];

const eventTypeConfig: Record<string, { color: string; bg: string }> = {
  Exams: { color: 'var(--destructive)', bg: 'color-mix(in srgb, var(--destructive) 12%, transparent)' },
  Meetings: { color: 'var(--primary)', bg: 'color-mix(in srgb, var(--primary) 10%, transparent)' },
  Workshops: { color: 'var(--teal)', bg: 'color-mix(in srgb, var(--teal) 12%, transparent)' },
  Trips: { color: 'var(--success)', bg: 'color-mix(in srgb, var(--success) 12%, transparent)' },
  Competitions: { color: 'var(--warning)', bg: 'color-mix(in srgb, var(--warning) 14%, transparent)' },
  Graduation: { color: 'var(--coral)', bg: 'color-mix(in srgb, var(--coral) 12%, transparent)' },
};

const activities = [
  { id: 1, title: 'Robotics Club', category: 'Technology' as ActivityCategory, image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&h=400&fit=crop&auto=format', description: 'Students design, build, and program robots to compete in regional and international competitions using LEGO Mindstorms and Arduino platforms.', members: 45, sessions: '3× per week', level: 'Grades 5–12', achievements: ['Regional Champions 2025', '2nd Place Arab Robotics Cup 2024'], color: '#5B4FC7' },
  // ... باقي النشاطات
];

const events = [
  { id: 1, title: 'End of Year Exams — KG & Primary', type: 'Exams' as EventType, date: '2026-06-15', endDate: '2026-06-19', time: '8:00 AM – 1:00 PM', location: 'All Classrooms', desc: 'End of academic year exams for Kindergarten and Primary.' },
  // ... باقي الأحداث
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function MiniCalendar({ year, month, eventDates, onDateClick, selectedDate }: { year: number; month: number; eventDates: Set<string>; onDateClick: (d: string) => void; selectedDate: string | null; }) {
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
                width: '100%', aspectRatio: '1', borderRadius: 8, fontSize: '0.8125rem',
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

export default function ActivitiesEventsPage() {
  const { data } = useWebsiteContent();
  const content = data?.activities_events_page;

  const [activeTab, setActiveTab] = useState<'activities' | 'events'>('activities');
  const [activityCategory, setActivityCategory] = useState<ActivityCategory>('All');
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);

  const [eventType, setEventType] = useState<EventType>('All');
  const [viewMonth, setViewMonth] = useState(5);
  const [selectedEventDate, setSelectedEventDate] = useState<string | null>(null);

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
      <section className="pt-28 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-secondary/40">
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 12%, transparent) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              <Award className="w-3.5 h-3.5" />
              {content?.hero?.badge || 'Campus Life'}
            </motion.span>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', lineHeight: 1.1 }} className="mb-5">
              {content?.hero?.title || 'Explore Our Vibrant Community'}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }} className="mb-8">
              {content?.hero?.description || 'Discover opportunities beyond the classroom. Join our diverse clubs, stay updated with the academic calendar, and participate in upcoming school events.'}
            </motion.p>

            <motion.div variants={fadeUp} className="inline-flex p-1.5 rounded-2xl bg-card border border-border shadow-sm">
              <button
                onClick={() => setActiveTab('activities')}
                className={`px-6 py-2.5 rounded-xl transition-all font-semibold text-sm ${activeTab === 'activities' ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {content?.hero?.tabs?.activities || 'Activities & Clubs'}
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-6 py-2.5 rounded-xl transition-all font-semibold text-sm ${activeTab === 'events' ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {content?.hero?.tabs?.events || 'Events Calendar'}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {activeTab === 'activities' && (
          <motion.div key="activities" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <section className="py-8 bg-background border-b border-border">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-2">
                  {activityCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActivityCategory(cat)}
                      style={{
                        fontSize: '0.875rem', fontWeight: 600,
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

            <section className="py-16 bg-background">
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
                            <span style={{ fontSize: '0.8125rem' }}>{activity.members} {content?.activities_tab?.members_label || 'members'}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            <span style={{ fontSize: '0.8125rem' }}>{activity.sessions}</span>
                          </div>
                        </div>

                        <AnimatePresence>
                          {expandedActivity === activity.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 border-t border-border">
                                <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--foreground)' }} className="mb-2">
                                  {content?.activities_tab?.open_to_label || 'Open to:'} {activity.level}
                                </p>
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

                        <button className="mt-4 flex items-center gap-1 transition-colors" style={{ fontSize: '0.8125rem', fontWeight: 600, color: activity.color }}>
                          {expandedActivity === activity.id 
                            ? (content?.activities_tab?.buttons?.show_less || 'Show less') 
                            : (content?.activities_tab?.buttons?.learn_more || 'Learn more')}
                          <ChevronRightIcon className={`w-4 h-4 transition-transform ${expandedActivity === activity.id ? 'rotate-90' : ''}`} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === 'events' && (
          <motion.div key="events" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <section className="py-12 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="space-y-6">
                    <div className="bg-card rounded-3xl border border-border/50 p-5">
                      <div className="flex items-center justify-between mb-4">
                        <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--foreground)' }}>
                          {content?.events_tab?.filter_label || 'Filter by type'}
                        </p>
                        {selectedEventDate && (
                          <button onClick={() => setSelectedEventDate(null)} style={{ fontSize: '0.8125rem', color: 'var(--primary)', fontWeight: 600 }}>
                            {content?.events_tab?.clear_date || 'Clear date'}
                          </button>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {eventTypes.map(t => (
                          <button
                            key={t} onClick={() => setEventType(t)}
                            style={{
                              fontSize: '0.8125rem', fontWeight: 600,
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

                  <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                      <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }}>
                        {selectedEventDate ? formatDate(selectedEventDate) : (content?.events_tab?.all_upcoming || 'All Upcoming Events')}
                      </p>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>
                        {filteredEvents.length} {content?.events_tab?.events_count_label || 'events'}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {filteredEvents.length === 0 && (
                        <div className="text-center py-16 text-muted-foreground">
                          <Calendar className="w-10 h-10 mx-auto mb-3 opacity-30" />
                          <p>{content?.events_tab?.no_events || 'No events found for the selected filters.'}</p>
                        </div>
                      )}
                      
                      {filteredEvents.map((event, i) => {
                        const cfg = eventTypeConfig[event.type] ?? { color: 'var(--primary)', bg: 'color-mix(in srgb, var(--primary) 10%, transparent)' };
                        return (
                          <motion.div key={event.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-card rounded-3xl p-6 border border-border/50 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                              <div className="rounded-2xl p-3 shrink-0" style={{ background: cfg.bg }}>
                                <Calendar className="w-5 h-5" style={{ color: cfg.color }} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <span style={{ fontSize: '0.75rem', fontWeight: 600, background: cfg.bg, color: cfg.color }} className="px-2.5 py-0.5 rounded-full">{event.type}</span>
                                  {event.endDate && <span style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>{content?.events_tab?.multi_day_badge || 'Multi-day event'}</span>}
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