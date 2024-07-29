const defaultState = {
    posts:[]
}

export const postsReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'SET_POSTS': return{
            ...state, posts:action.posts
        }
        default:return state
    } 
}