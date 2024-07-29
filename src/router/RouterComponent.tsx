import { BrowserRouter, Navigate, Route, Routes } from "../../node_modules/react-router-dom/dist/index"
import PostList from "../pages/Post/PostList"
import PostPage from "../pages/Post/PostPage"
import SignIn from "../pages/Sign In/SignIn"
import PageWrapper from "./PageWrapper"


const Sign = () => <SignIn/>

const Posts = () => <PageWrapper Component = {<PostList/>}/>
const Post =() => <PostPage/>

const Favourite = () => <Favourite></Favourite>

const RouterComponent = () => {


    return <BrowserRouter>
        <Routes>
            <Route path={'log'} Component={Sign}></Route>
            <Route path={'home'} Component={Posts}></Route>
            <Route path={''} Component={()=><Navigate to = {'log'}/>}/>
            <Route path={'post/:postId'} Component = {Post}/>
            <Route path={'fav'} Component={Favourite}></Route> //4 test
        </Routes>
    </BrowserRouter>
}

export default RouterComponent