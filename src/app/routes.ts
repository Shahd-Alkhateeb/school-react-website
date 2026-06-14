import { createBrowserRouter } from 'react-router';
import WebsiteLayout from './components/website/layout/WebsiteLayout';
import HomePage from './components/website/pages/HomePage';
import AboutPage from './components/website/pages/AboutPage';
import AcademicProgramsPage from './components/website/pages/AcademicProgramsPage';
import ActivitiesPage from './components/website/pages/ActivitiesPage';
import EventsPage from './components/website/pages/EventsPage';
import NewsPage from './components/website/pages/NewsPage';
import ScholarshipsPage from './components/website/pages/ScholarshipsPage';
import AdmissionsPage from './components/website/pages/AdmissionsPage';
import SupportPage from './components/website/pages/SupportPage';
import ContactPage from './components/website/pages/ContactPage';
import AdminApp from './components/admin/AdminApp';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: WebsiteLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'programs', Component: AcademicProgramsPage },
      { path: 'activities', Component: ActivitiesPage },
      { path: 'events', Component: EventsPage },
      { path: 'news', Component: NewsPage },
      { path: 'scholarships', Component: ScholarshipsPage },
      { path: 'admissions', Component: AdmissionsPage },
      { path: 'support', Component: SupportPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
  {
    path: '/admin',
    Component: AdminApp,
  },
  {
    path: '/admin/*',
    Component: AdminApp,
  },
]);
