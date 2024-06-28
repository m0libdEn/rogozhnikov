import { BrowserRouter, Route, Routes } from "../node_modules/react-router-dom/dist/index"
import PostList from "./pages/Post/PostList"
import SignIn from "./pages/Sign In/SignIn"

const RouterComponent = () => {


    return <BrowserRouter>
        <Routes>
            <Route path={'sign'} Component={SignIn}></Route>
            <Route path={'home'} Component={PostList}></Route>
        </Routes>
    </BrowserRouter>
}

export default RouterComponent