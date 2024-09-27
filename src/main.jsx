import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from  './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'

const router = createBrowserRouter([
  {
    //Elementos PAI
    path:'/',element:<App/>,
    errorElement:<Error/>,

    //Elementos FILHO
    children:[
      {path:'/',element:<Home/>},
      {path:'/produtos',element:<Produtos/>},
    ]
  
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
