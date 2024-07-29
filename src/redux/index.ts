import { configureStore } from "@reduxjs/toolkit";
import { favouritesReducer } from "./reducers/likeReducer/favouriteReducer";
import { postsReducer } from "./reducers/postReducer/reducer";


const store = configureStore({
    reducer:{
        post:postsReducer,
        favourites:favouritesReducer
    }
})


export default store  