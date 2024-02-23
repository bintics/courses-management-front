import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/error-page';
import ClassRoomReservationPage from './pages/classroom-reservation/home';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/classroom-reservations',
          element: <ClassRoomReservationPage />
        }
      ]
    }  
  ]);

export default router;