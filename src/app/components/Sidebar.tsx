import { Home, Users, BookOpen, Calendar, FileText, Settings, BarChart3, GraduationCap } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Users, label: 'Students', active: false },
  { icon: GraduationCap, label: 'Teachers', active: false },
  { icon: BookOpen, label: 'Courses', active: false },
  { icon: Calendar, label: 'Schedule', active: false },
  { icon: FileText, label: 'Assignments', active: false },
  { icon: BarChart3, label: 'Reports', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-sidebar flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-white">School Desk</h2>
            <p className="text-xs text-white/70">Management System</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
              item.active
                ? 'bg-white/20 text-white'
                : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
            AW
          </div>
          <div className="flex-1">
            <p className="text-sm text-white">Alex Warren</p>
            <p className="text-xs text-white/70">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
