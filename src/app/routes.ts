import { createBrowserRouter } from 'react-router';
import WebsiteLayout from '../features/website/layout/WebsiteLayout';
import HomePage from '../features/website/pages/HomePage';
import AboutPage from '../features/website/pages/AboutPage';
import ActivitiesEventsPage from '../features/website/pages/ActivitiesEventsPage';
import AdmissionsPage from '../features/website/pages/AdmissionsPage';
import SupportContactPage from '../features/website/pages/SupportContactPage';
import AdminApp from '../features/admin/AdminApp';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: WebsiteLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'activities-events', Component: ActivitiesEventsPage },
      { path: 'admissions', Component: AdmissionsPage },
      { path: 'support-contact', Component: SupportContactPage },
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