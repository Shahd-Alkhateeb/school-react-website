import { Clock } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'New assignment posted',
    description: 'Mathematics homework due on Dec 20',
    time: '2 hours ago',
    color: 'bg-teal/10 text-teal',
  },
  {
    id: 2,
    title: 'Attendance marked',
    description: 'Class 10-A attendance completed',
    time: '4 hours ago',
    color: 'bg-success/10 text-success',
  },
  {
    id: 3,
    title: 'Grade updated',
    description: 'Science test results published',
    time: '1 day ago',
    color: 'bg-royal-blue/10 text-royal-blue',
  },
  {
    id: 4,
    title: 'Event scheduled',
    description: 'Parent-teacher meeting on Dec 22',
    time: '2 days ago',
    color: 'bg-coral/10 text-coral',
  },
];

export default function RecentActivities() {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <h3 className="mb-4">Recent Activities</h3>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3">
            <div className={`w-10 h-10 rounded-lg ${activity.color} flex items-center justify-center flex-shrink-0`}>
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm mb-0.5">{activity.title}</h4>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
