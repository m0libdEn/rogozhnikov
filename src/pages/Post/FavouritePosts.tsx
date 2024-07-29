import React from 'react';
import { useSelector } from "react-redux";
import Post from "./Post";

const FavouritePosts = () => {
    return (
        <div className="favourite-posts">
            {favourites.length > 0 ? favourites.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    date={post.date}
                    title={post.title}
                    text={post.text}
                    image={post.image}
                />
            )) : <p>No favourite posts yet.</p>}
        </div>
    );
};

export default FavouritePosts;
