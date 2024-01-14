import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route,Link,Outlet} from "react-router-dom";
import HomeScreen from './pages/HomeScreen'
import ProductsPage from './pages/ProductsPage';
import App from './App';
import Error from './pages/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"





const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route index element={<HomeScreen/>}></Route>
            <Route path="/produits" element={<ProductsPage/>}></Route>
            <Route path="*" element={<Error/>}></Route>


        </Route>


    )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
