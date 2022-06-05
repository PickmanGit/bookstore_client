import { BsStar } from "react-icons/bs";
import Authorization from "./pages/authorization/Authorization";
import Register from "./pages/authorization/Register";
import Basket from "./pages/basket/Basket";
import BookPreview from "./pages/bookPreview/BookPreview";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist/Wishlist";
import {AUTHORIZATION_ROUTE, BASKET_ROUTE, BOOK_PREVIEW_ROUTE, HOME_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE, WISHLIST_ROUTE} from './components/utils/const';
import { useRoutes } from "react-router-dom";
import { FC } from "react";
import Profile from "./pages/profile/Profile";

export  const pageOptions = {
    home : {src:'/',name:'home'},
    basket : {src:'/basket' , name:'Basket'},
    wishlist : {src:'/wishlist' , name:'Wishlist'},
    entrance : {src:'/entrance' , name:'Entrance'},
    register : {src:'/register', name:'Register'},
    profile : {src:'/profile', name:'Profile'},
    bookPreview : {src:'/book_preview/:id', name:'Book preview'}
}



export const authRoutes = [

]

export const PublicRoutes = [
        {
            path: HOME_ROUTE,
            element :<Home/>
            
        },
        {
            path: BASKET_ROUTE,
            element : <Basket/>
        },
        {
            path: WISHLIST_ROUTE,
            element : <Wishlist/>
        },
        {
            path: AUTHORIZATION_ROUTE,
            element : <Authorization/>
        },
        {
            path: REGISTER_ROUTE,
            element : <Register/>
        },
        {
            path: BOOK_PREVIEW_ROUTE + '/:id',
            element : <BookPreview/>
        },
        {
            path: PROFILE_ROUTE,
            element : <Profile/>
        },
        {
            path: '*',
            element : <Home/>
        },
]
