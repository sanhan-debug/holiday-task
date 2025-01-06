import About from "../pages/User/About";
import Favorites from "../pages/User/Favorites";
import Home from "../pages/User/Home";
import Products from "../pages/User/Products";
import UserRoot from "../pages/User/UserRoot";



const ROUTES = [
    {
        path:'/',
        element:<UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"favorites",
                element:<Favorites/>
            },
            {
                path:"products",
                element:<Products/>
            },
            {
                path:"about",
                element:<About/>
            }
        ]
    }
]

export default ROUTES