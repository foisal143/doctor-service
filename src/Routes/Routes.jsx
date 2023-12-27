import { createBrowserRouter } from 'react-router-dom';
import Main from '../layoutes/Main';
import Home from '../pages/Home/Home/Home';
import ServicesDetails from '../pages/ServiceDetails/ServicesDetails';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
import Login from '../pages/Login/Login';
import Reigster from '../pages/Register/Reigster';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import OrderReview from '../pages/OrderReview/OrderReview';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/:id',
        element: (
          <PrivateRoute>
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: 'checkout/:id',
        element: (
          <PrivateRoute>
            <CheckoutPage></CheckoutPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: 'order-review',
        element: (
          <PrivateRoute>
            <OrderReview></OrderReview>
          </PrivateRoute>
        ),
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Reigster></Reigster>,
      },
    ],
  },
]);

export default router;
