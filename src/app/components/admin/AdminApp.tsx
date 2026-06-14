import { useState } from 'react';
import Sidebar from '../Sidebar';
import StatsCard from '../StatsCard';
import AttendanceCard from '../AttendanceCard';
import AssignmentCard from '../AssignmentCard';
import SchoolMomentCard from '../SchoolMomentCard';
import AttendanceChart from '../AttendanceChart';
import RecentActivities from '../RecentActivities';
import LoginPage from '../auth/LoginPage';
import ForgotPasswordPage from '../auth/ForgotPasswordPage';
import OTPPage from '../auth/OTPPage';
import ResetPasswordPage from '../auth/ResetPasswordPage';
import SuccessPage from '../auth/SuccessPage';
import { Users, BookOpen, GraduationCap, Calendar, Search, Bell, FileText } from 'lucide-react';

type AuthView = 'login' | 'forgot-password' | 'otp' | 'reset-password' | 'success' | 'dashboard';

export default function AdminApp() {
  const [authView, setAuthView] = useState<AuthView>('login');
  const [userEmail, setUserEmail] = useState('');

  if (authView === 'login') {
    return (
      <LoginPage
        onForgotPassword={() => setAuthView('forgot-password')}
        onLogin={() => setAuthView('dashboard')}
      />
    );
  }

  if (authView === 'forgot-password') {
    return (
      <ForgotPasswordPage
        onBack={() => setAuthView('login')}
        onSendOTP={(email) => {
          setUserEmail(email);
          setAuthView('otp');
        }}
      />
    );
  }

  if (authView === 'otp') {
    return (
      <OTPPage
        email={userEmail}
        onBack={() => setAuthView('forgot-password')}
        onVerify={() => setAuthView('reset-password')}
      />
    );
  }

  if (authView === 'reset-password') {
    return (
      <ResetPasswordPage
        onComplete={() => setAuthView('success')}
      />
    );
  }

  if (authView === 'success') {
    return (
      <SuccessPage
        onContinue={() => setAuthView('login')}
      />
    );
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="bg-card border-b border-border sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1>Welcome Back 👋</h1>
              <p className="text-muted-foreground">Alex Warren</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-border bg-input-background w-80"
                />
              </div>
              <button className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
        </header>

        <main className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard title="Total Students" value="1,234" icon={Users} trend="+12% from last month" trendUp={true} color="bg-primary" />
            <StatsCard title="Total Teachers" value="87" icon={GraduationCap} trend="+3 new this month" trendUp={true} color="bg-teal" />
            <StatsCard title="Total Courses" value="45" icon={BookOpen} trend="5 active courses" trendUp={true} color="bg-coral" />
            <StatsCard title="Upcoming Events" value="12" icon={Calendar} trend="3 this week" trendUp={false} color="bg-royal-blue" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2"><AttendanceChart /></div>
            <AttendanceCard />
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2>Assignment Status</h2>
              <button className="text-primary">See All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <AssignmentCard subject="English" lastDate="20/11/2024" color="bg-coral" icon={<FileText className="w-5 h-5" />} />
              <AssignmentCard subject="Hindi" lastDate="12/04/2023" color="bg-royal-blue" icon={<FileText className="w-5 h-5" />} />
              <AssignmentCard subject="Science" lastDate="17/12/2025" color="bg-dark-blue" icon={<FileText className="w-5 h-5" />} />
              <AssignmentCard subject="Maths" lastDate="17/12/2025" color="bg-teal" icon={<FileText className="w-5 h-5" />} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2>School Moments</h2>
                <button className="text-primary">See All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SchoolMomentCard title="Science Fair 2025" description="Showcasing student artwork and innovation across all grades" />
                <SchoolMomentCard title="Yoga & Wellness Day" description="A day promoting mindfulness and healthy living for students" />
              </div>
            </div>
            <RecentActivities />
          </div>
        </main>
      </div>
    </div>
  );
}
