import {createBrowserRouter} from "react-router-dom";
import { Category, Dashboard, Detail, Home, Payment,Calendar,Settings,NotFound} from "../pages";
import { MainLayout } from "../layout";

const router=[
{
    path: "/",
    element: <MainLayout/>,
    errorElement: <NotFound />,  
    children:[
        {path: "/", element: <Dashboard/>},
        {path: "/home", element: <Home/>},
        {path: "/category", element: <Category/>},
        {path: "/detail", element: <Detail/>},
        {path: "/payment", element: <Payment/>},
        {path: "/calendar", element: <Calendar/>},
        {path: "/settings", element: <Settings/>},
        
        
        {path: "*", element: <NotFound />}  
        
    ]
},

]

export const Router = createBrowserRouter(router);

