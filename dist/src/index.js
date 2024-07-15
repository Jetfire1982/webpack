import { jsx as _jsx } from "react/jsx-runtime";
// import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Shop } from './pages/shop';
import { Suspense } from 'react';
import { LazyAbout } from './pages/about/About.lazy';
var root = document.getElementById('root');
if (!root) {
    throw new Error('root not found');
}
var container = createRoot(root);
var router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(App, {}),
        children: [
            {
                path: '/about',
                element: _jsx(Suspense, { fallback: 'Loading...', children: _jsx(LazyAbout, {}) })
                // element: <About/>
            },
            {
                path: '/shop',
                element: _jsx(Suspense, { fallback: 'Loading...', children: _jsx(Shop, {}) })
                // element: <Shop/>
            }
        ]
    }
]);
container.render(_jsx(RouterProvider, { router: router }));
