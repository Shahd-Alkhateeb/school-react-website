import { FileText } from 'lucide-react';

interface AssignmentCardProps {
  subject: string;
  lastDate: string;
  color: string;
  icon?: React.ReactNode;
}

export default function AssignmentCard({ subject, lastDate, color, icon }: AssignmentCardProps) {
  return (
    <div className={`${color} rounded-xl p-5 text-white relative overflow-hidden`}>
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <h4>{subject}</h4>
          {icon || <FileText className="w-5 h-5" />}
        </div>
        <p className="text-sm opacity-90">Last Date: {lastDate}</p>
      </div>
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white/10 rounded-full"></div>
    </div>
  );
}
