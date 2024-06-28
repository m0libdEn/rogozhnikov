import { useEffect, useState } from "react";
import { url } from "../../consts";
import Post from "./Post";


const PostList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => setPosts(data))
          .catch((error) => console.error("Error fetching posts:", error));
      }, []);
      
  
    return(
        <div className="posts__list">
          {posts.map((post) => (
            <Post
              key={post.id}
              date={"Jun - 06 - 2024"}
              title={post.title}
              text={post.body}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWYvhYGA__NFDSPignPsIgi7W__JcIT1CpQ&s"
              }
            />
          ))}
        </div>
    )
}

export default PostList