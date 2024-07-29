import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../../node_modules/react-redux/dist/react-redux";
import { url } from "../../consts";
import { setPosts } from "../../redux/reducers/postReducer/actions";
import fetchData from "./getFetch";
import Post from "./Post";


const PostList = () => {
    const dispatch = useDispatch( )
    //const [post, setPost] = useState([]);
    const posts = useSelector(state => state.post.posts)
    

    useEffect( () => {
      const getPosts = async () => {
        const data = await fetchData(url);
        dispatch(setPosts(data))
      };
      
      getPosts();
    },[dispatch]);
    return(
        <div className="posts__list">
          {posts.map((post) => (
            <Post
              id={post.id}
              date={post.date}
              title={post.title}
              text={post.description}
              image={
                post.image
              }
            />
          ))}
        </div>
    )
}

export default PostList