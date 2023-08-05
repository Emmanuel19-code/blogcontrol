import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import Layout from "../layout/layout";
import UpdatePost from "../Pages/UpdatePost";
import RegisterPage from "../Pages/RegisterPage";
import WritePage from "../Pages/WritePage";
import DraftPage from "../Pages/DraftPage";
import Otp from "../components/Otp";
import ForgotPassword from "../Pages/ForgotPasswordPage";

const router = createBrowserRouter(
    [
        {
            element:<Layout/>,
            children:[
            {
                path:"/edit/updatepost",
                element:<UpdatePost/>
            },
            {
                path:"/edit/writepost",
                element:<WritePage/>
            },
            {
                path:"edit/draft",
                element:<DraftPage/>
            },
            {
                path:"/home",
                element:<HomePage/>
            }
          ]
       },
        {
            path:"/",
            element:<App/>
        },
        {
                path:"/register",
                element:<RegisterPage/>
        },
        {
            path:"/accountverification",
            element:<Otp/>
        },{
            path:"/forgotpassword",
            element:<ForgotPassword/>
        }
    ]
)



export default router