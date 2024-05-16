import { Navbar, Body, store, WatchPage } from './assets'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React,  { Suspense } from 'react'



import { Provider } from "react-redux"



import './App.css';
const LazyComponent = React.lazy(() => import("./assets/index").then(module => ({ default: module.MainContent })));


// Define a fallback component to show while the lazy-loaded component is loading
const LoadingFallback = () => <div>Loading...</div>;
const appRouter = new createBrowserRouter(
  [    
    {

      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Suspense
            fallback={<LoadingFallback />}>
            <LazyComponent />
          </Suspense>,

        },
        {
          path: "/watch",
          element: <WatchPage />,
        }
      ]

    },
    
    
  ]
)



function App() {




  return (
    <Provider store={store} >

      <div className="mx-0 my-0">
        <Navbar />
        <RouterProvider router={appRouter} />

      </div>
    </Provider>
  )
}

export default App
