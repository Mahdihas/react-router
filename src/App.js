import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/Main/Main';
import Home from './component/Home/Home';
import Orders from './component/Orders/Orders';
import Granpa from './component/Grandpa/Granpa';
import About from './component/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch ('tshirt.json')
           } ,
          element:<Home></Home>
      },

        {
          path: '/home',
          loader: () => {
           return fetch ('tshirt.json')
          } ,
          element: <Home></Home>
        },
        
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/about',
          element:<About></About>
        },
        {
          path: '/grandpa',
          element: <Granpa></Granpa>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
