import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

type EventType = 'All' | 'Exams' | 'Meetings' | 'Workshops' | 'Trips' | 'Competitions' | 'Graduation';

const eventTypes: EventType[] = ['All', 'Exams', 'Meetings', 'Workshops', 'Trips', 'Competitions', 'Graduation'];

const typeConfig: Record<string, { color: string; bg: string }> = {
  Exams: { color: '#EF4444', bg: '#FEF2F2' },
  Meetings: { color: '#5B4FC7', bg: '#F0EEFF' },
  Workshops: { color: '#4EABBE', bg: '#E6F6FA' },
  Trips: { color: '#10B981', bg: '#ECFDF5' },
  Competitions: { color: '#F59E0B', bg: '#FFFBEB' },
  Graduation: { color: '#EF7B6C', bg: '#FEF2F0' },
};

const events = [
  { id: 1, title: 'End of Year Exams — KG & Primary', type: 'Exams' as EventType, date: '2026-06-15', endDate: '2026-06-19', time: '8:00 AM – 1:00 PM', location: 'All Classrooms', desc: 'End of academic year exams for Kindergarten and Primary (Grades 1–5). Students are asked to arrive 15 minutes early.' },
  { id: 2, title: 'IGCSE Final Examinations', type: 'Exams' as EventType, date: '2026-06-15', endDate: '2026-06-26', time: '8:00 AM – 12:00 PM', location: 'Examination Hall A & B', desc: 'Cambridge IGCSE examinations for Grade 10 students, administered by Cambridge Assessment International Education.' },
  { id: 3, title: 'Parent-Teacher Conference', type: 'Meetings' as EventType, date: '2026-07-02', time: '9:00 AM – 5:00 PM', location: 'Main Campus — All Classrooms', desc: 'Book individual 15-minute appointments with your child\'s teachers through the Parent Portal. Report cards will be shared at this meeting.' },
  { id: 4, title: 'Summer Robotics Workshop', type: 'Workshops' as EventType, date: '2026-07-10', endDate: '2026-07-20', time: '9:00 AM – 12:00 PM', location: 'Innovation Lab, Building C', desc: 'An intensive 10-day robotics and programming workshop for Grades 5–9. Students will build and compete with their own robots. Registration limited to 30 students.' },
  { id: 5, title: 'Science Museum Trip — Grade 6', type: 'Trips' as EventType, date: '2026-07-15', time: '7:30 AM – 3:00 PM', location: 'Dubai Science Museum', desc: 'Educational field trip to the Dubai Science Museum. Students will participate in guided workshops on space exploration and renewable energy.' },
  { id: 6, title: 'Regional Math Olympiad', type: 'Competitions' as EventType, date: '2026-07-18', time: '9:00 AM – 2:00 PM', location: 'Dubai International Academic City', desc: 'Nova Academy\'s top math students compete at the Regional Math Olympiad. 12 students have qualified from Grades 7–12.' },
  { id: 7, title: 'Regional Science Competition', type: 'Competitions' as EventType, date: '2026-07-22', time: '8:00 AM – 5:00 PM', location: 'Expo City Dubai', desc: 'Annual regional science fair where student research projects compete for regional and national recognition. Nova Academy enters 8 projects this year.' },
  { id: 8, title: 'Welcome Back to School — Parents Night', type: 'Meetings' as EventType, date: '2026-08-24', time: '5:00 PM – 7:30 PM', location: 'School Auditorium', desc: 'Welcome evening for returning and new families. Meet the teaching staff, learn about the new academic year programs, and tour the campus.' },
  { id: 9, title: 'Graduation Ceremony 2026', type: 'Graduation' as EventType, date: '2026-07-30', time: '6:00 PM – 9:00 PM', location: 'Grand Ballroom, Atlantis The Palm', desc: 'A formal graduation ceremony celebrating the Class of 2026. All Grade 12 students, parents, and faculty are invited. Dress code: formal.' },
  { id: 10, title: 'Coding Bootcamp — Grades 8–10', type: 'Workshops' as EventType, date: '2026-08-03', endDate: '2026-08-07', time: '10:00 AM – 2:00 PM', location: 'Computer Lab, Building B', desc: 'Five-day intensive coding bootcamp covering Python, web development, and mobile app basics. Students receive a certificate upon completion.' },
];

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

export default function EventsPage() {
  const [filterType, setFilterType] = useState<EventType>('All');
  const [viewMonth, setViewMonth] = useState(5); // June = 5 (0-indexed)
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const eventDates = new Set(events.map(e => e.date));
  const filtered = events.filter(e => {
    if (filterType !== 'All' && e.type !== filterType) return false;
    if (selectedDate && e.date !== selectedDate) return false;
    return true;
  });

  const formatDate = (d: string) => {
    const date = new Date(d);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div>
      {/* HERO */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8F6FF 0%, #EDE9FF 50%, #E8F0FF 100%)' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,79,199,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6" style={{ fontSize: '0.8125rem', fontWeight: 600 }}>
              <Calendar className="w-3.5 h-3.5" />
              Events Calendar
            </motion.span>
            <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', lineHeight: 1.1 }} className="mb-5">
              What's{' '}
              <span style={{ background: 'linear-gradient(135deg, #5B4FC7 0%, #4EABBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Happening
              </span>{' '}
              at Nova
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.75 }}>
              Stay up to date with exams, parent meetings, workshops, school trips, and celebrations throughout the academic year.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar: Calendar + Filters */}
            <div className="space-y-6">
              <div className="bg-card rounded-3xl border border-border/50 p-5">
                <div className="flex items-center justify-between mb-4">
                  <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--foreground)' }}>Filter by type</p>
                  {selectedDate && (
                    <button onClick={() => setSelectedDate(null)} style={{ fontSize: '0.8125rem', color: 'var(--primary)', fontWeight: 600 }}>Clear date</button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {eventTypes.map(t => (
                    <button
                      key={t}
                      onClick={() => setFilterType(t)}
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        background: filterType === t ? 'var(--primary)' : 'transparent',
                        color: filterType === t ? 'white' : 'var(--muted-foreground)',
                        border: filterType === t ? 'none' : '1px solid var(--border)',
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
              <MiniCalendar year={2026} month={viewMonth} eventDates={eventDates} onDateClick={setSelectedDate} selectedDate={selectedDate} />
            </div>

            {/* Events List */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }}>
                  {selectedDate ? formatDate(selectedDate) : 'All Upcoming Events'}
                </p>
                <span style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)' }}>{filtered.length} events</span>
              </div>

              <div className="space-y-4">
                {filtered.length === 0 && (
                  <div className="text-center py-16 text-muted-foreground">
                    <Calendar className="w-10 h-10 mx-auto mb-3 opacity-30" />
                    <p>No events found for the selected filters.</p>
                  </div>
                )}
                {filtered.map((event, i) => {
                  const cfg = typeConfig[event.type] ?? { color: '#5B4FC7', bg: '#F0EEFF' };
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
    </div>
  );
}
