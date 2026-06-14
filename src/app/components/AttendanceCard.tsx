import { TrendingUp } from 'lucide-react';

export default function AttendanceCard() {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3>Attendance</h3>
        <button className="text-sm text-primary">View Details</button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20 transform -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="32"
              stroke="#E5E7EB"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r="32"
              stroke="#5B4FC7"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 32 * 0.87} ${2 * Math.PI * 32}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl">87%</span>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-sm text-muted-foreground">December 2025</p>
          <p className="text-sm text-success flex items-center gap-1 mt-1">
            <TrendingUp className="w-4 h-4" />
            +5% from last month
          </p>
        </div>
      </div>
    </div>
  );
}
