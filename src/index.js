import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './store/store.js';
import { Provider } from 'react-redux';
import Cart from './component/Cart.js';
import {createBrowserRouter, RouterProvider  } from 'react-router-dom';

const router = createBrowserRouter ([
    {
        path:"/",
        element: <App/>,
        errorElement:<div>Error</div>,
    },
    {
        path:"/cart",
        element:<Cart/>
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
