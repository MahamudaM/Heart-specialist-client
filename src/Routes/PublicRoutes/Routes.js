import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Services from "../../pages/Services/Services";
import ServicesDetails from "../../pages/ServicesDetails/ServicesDetails"
export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/services/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
                
            }
        ]
    }
])