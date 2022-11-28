import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
 import Home from '../Pages/Home.js'
import Categoreyitem from '../Pages/Caragorey/Categoreyitem';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoiute from '../PrivateRoute/PrivateRoiute';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Myorder from '../Pages/Dashboard/Dashboardbar/Myorder';
import Myproduct from '../Pages/Dashboard/Dashboardbar/Myproduct';
import Addproduct from '../Pages/Dashboard/Dashboardbar/Addproduct';
import Mybuyers from '../Pages/Dashboard/Dashboardbar/Mybuyers';
import Allseller from '../Pages/Dashboard/Dashboardbar/Allseller';
import Allbuyer from '../Pages/Dashboard/Dashboardbar/Allbuyer';
import UseAdmin from '../UseAdmin.js/UseAdmin';
import Homepostproduct from '../Pages/Homepost/Homepostproduct';
import ErrorRoute from '../ErrorRoute/ErrorRoute';
import BlogPage from '../Pages/Blog Page/BlogPage';
 const route=createBrowserRouter([

    {
        path:'/',element:<Main></Main>,
        errorElement:<ErrorRoute/>,
        children:[
            {
                path:'/Home',element:<Home/>
            },
            {
                path:'/',element:<Home/>
            },
            {
                path:'/catagoreyitem/:id',element:<PrivateRoiute><Categoreyitem></Categoreyitem></PrivateRoiute>,
                loader:({params})=>fetch(`https://carreseller-server-side.vercel.app/catagoreyitem/${params.id}`)
            },{
                path:'/ads/:id',element:<Homepostproduct/>,
                loader:({params})=>fetch(`https://carreseller-server-side.vercel.app/ads/${params.id}`)
            },{
                path:'/blog',element:<BlogPage/>
            }
            
        ]
    },
    {
        path:'/register',element:<Register/>
    },
    {
        path:'/login',element:<Login/>
    },

    {
        path:'/Dashboard',element:<PrivateRoiute><Dashboard/></PrivateRoiute> 
    }, {
        path:'/Dashboard/myorder',element:<Myorder/>
    },
    {
        path:'/Dashboard/addProduct',element:<Addproduct/>
    },
    {
        path:'/Dashboard/myproduct',element:<Myproduct/>
    },
    {
        path:'//Dashboard/mybuyer',element:<Mybuyers/>
    },
    {
        path:'/Dashboard/allseller',element:<Allseller/>
    },
    {
        path:'/Dashboard/allbuyer',element:<Allbuyer/>
    }

 ])
 export default route;