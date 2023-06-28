import {
  createBrowserRouter,
  RouterProvider
 } from 'react-router-dom';
import EditEventPage from './pages/event/EditEventPage';
import EventDetailPage from './pages/event/EventDetailPage';
import EventsPage from './pages/event/EventsPage';
import NewEventPage from './pages/event/NewEventPage';
import HomePage from './pages/HomePage';

 import Root from "./routes/Root.js";

// Challenge / Exercise
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {index: true, element: <HomePage/> },
      {path: 'events', element: <EventsPage/> },
      {path: 'events/new', element: <NewEventPage/> },
      {path: 'events/:eventId', element: <EventDetailPage/> },
      {path: 'events/:eventId/edit', element: <EditEventPage/> },
    ]
  }
])

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  return <RouterProvider router={router} />;
}

export default App;
