const initialTweet = {
    description: "",
    image_url: ""
};
const initialUser = {
    username: "",
    email: "",
    bio: ""
}
const initialState = {
    tweets: [],
    createdTweets: initialTweet,
    user: initialUser
}

export function reducer(state=initialState, action){
    switch(action.type){
        case "SET_TWEETER_USER":
        return{...state, user: action.payload}
        case "LOGOUT":
            return {...state, user: initialUser }
        default:
            return {...state}
    }
}

