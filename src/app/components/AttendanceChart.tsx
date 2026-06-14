import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', attendance: 85 },
  { month: 'Feb', attendance: 82 },
  { month: 'Mar', attendance: 88 },
  { month: 'Apr', attendance: 90 },
  { month: 'May', attendance: 86 },
  { month: 'Jun', attendance: 89 },
  { month: 'Jul', attendance: 91 },
  { month: 'Aug', attendance: 87 },
  { month: 'Sep', attendance: 84 },
  { month: 'Oct', attendance: 88 },
  { month: 'Nov', attendance: 85 },
  { month: 'Dec', attendance: 87 },
];

export default function AttendanceChart() {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3>Monthly Attendance</h3>
        <select className="px-3 py-1.5 rounded-lg border border-border bg-background text-sm">
          <option>2025</option>
          <option>2024</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="month" tick={{ fill: '#6B7280', fontSize: 12 }} />
          <YAxis tick={{ fill: '#6B7280', fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          />
          <Bar dataKey="attendance" fill="#5B4FC7" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
