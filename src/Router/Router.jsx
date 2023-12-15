import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../default/Main/Main';
import Shop from '../components/Shop/Shop';
import Home from '../components/Home/Home';
import CartProduct from '../components/CartProduct/CartProduct';
import Login from '../components/Login/Login';
import Inventory from '../components/Inventory/Inventory';
import Order from '../components/Order/Order';
import Cart from '../components/Cart/Cart';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                    
                },
                {
                    path:'/shop',
                    element: <Shop/>
                },
                {
                    path:'/cart',
                    element: <Cart />
                },
                {
                    path:'/signin',
                    element:<Login/>
                },
                {
                    path:'/inventory',
                    element:<Inventory/>
                },
                {
                    path:'/order',
                    element:<Order/>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default Router;