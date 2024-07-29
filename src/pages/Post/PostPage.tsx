import { useEffect, useState } from "react"
import { useParams } from "../../../node_modules/react-router-dom/dist/index"
import { url } from "../../consts"
import fetchData from "./getFetch"
import Post from "./Post"


const PostPage = () => {
    const {postId} = useParams()
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const getData = async ()=>{
            const data = await fetchData(url, postId)
            setPost(data[0])
            console.log(data[0]);
            
        }
        getData()
        setLoading(false)
    }
    , [postId])    
    
    return(loading===false && <Post id={post.id} date={post.date} title = {post.title} text = {post.description} image = {post.image}/>)

}


export default PostPage