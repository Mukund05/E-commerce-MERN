import { Counter } from './features/counter/Counter';
import './App.css';
import Home from "./pages/Home"
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Cart from './features/cart/cart'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

const router=createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/login',
    element: <Loginpage />
  },
  {
    path:'/signup',
    element: <Signuppage />
  },
  { //only for testing
    path:'/cart',
    element: <Cart />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
