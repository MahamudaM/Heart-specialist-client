import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddService from "../../pages/AddService/AddService";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import UpdateReview from "../../pages/MyReviews/UpdateReview";
import Services from "../../pages/Services/Services";
import ServicesDetails from "../../pages/ServicesDetails/ServicesDetails"
import Signup from "../../pages/Signup/Signup";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
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
                path:'/signUp',
                element:<Signup></Signup>
            },
            {
                path:'/services/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader:({params})=>fetch(`https://backend-database-server-a11.vercel.app/services/${params.id}`)
                
            },
            {
                path:'/myReviews',
                element:<PrivetRoutes><MyReviews></MyReviews></PrivetRoutes>
            },
            
            {
                path:'/addService',
                element:<PrivetRoutes><AddService></AddService></PrivetRoutes>,
                // loader:({params})=>fetch(`https://backend-database-server-a11.vercel.app/services/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blogs></Blogs>
            },
            {
                path:'/update/:id',
                element:<UpdateReview></UpdateReview>,
                loader:({params})=>fetch(`https://backend-database-server-a11.vercel.app/reviews/${params.id}`)
            }
            
        ]
    }
])