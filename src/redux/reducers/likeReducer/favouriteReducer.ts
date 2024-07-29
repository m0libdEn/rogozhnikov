import { createSlice } from "@reduxjs/toolkit";
import Post from "../../../pages/Post/Post";

type initialStateType = {
    favourites: Post | null
}

const initialState:initialStateType = {
    favourites:['piska']
}


export const favouritesReducer = createSlice({
    name: 'favourites',
    initialState,
    reducers:{
        addFavourite:(state, action)=>{
            state.favourites.push(action.payload);
            
        },
        removeFavourite:(state,action)=>{
            state.favourites.filter(el => el.id!== action.payload)
        }
    }
})

export const { addFavourite, removeFavourite } = favouritesReducer.actions;