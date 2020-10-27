import React from 'react';
import Dashboard from './containers/Dashboard';
import Product from './containers/Product'; 
const routes = [
    {
        path: '/',
        exact: true,
        main:()=> <Dashboard/>
    },
    {
        path: '/product',
        exact: true,
        main:()=> <Product/>
    },
]
export default routes;