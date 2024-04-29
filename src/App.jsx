import { Navbar, Body, store, MainContent, WatchPage } from './assets'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import { Provider } from "react-redux"



import './App.css'

const appRouter = new createBrowserRouter(
  [
    
    {

      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContent />,

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
