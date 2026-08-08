import { createBrowserRouter } from 'react-router';
import WebsiteLayout from '../features/website/layout/WebsiteLayout';
import HomePage from '../features/website/pages/HomePage';
import AboutPage from '../features/website/pages/AboutPage';
import ActivitiesEventsPage from '../features/website/pages/ActivitiesEventsPage';
import SupportContactPage from '../features/website/pages/SupportContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: WebsiteLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'activities-events', Component: ActivitiesEventsPage },
      { path: 'support-contact', Component: SupportContactPage },
    ],
  },
 
]);