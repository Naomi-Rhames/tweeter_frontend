
const initialTweet = {
    description: "",
    image_url: "",
    id: null,
    comments: []
};
const initialUser = {
    username: "",
    email: "",
    bio: "",
    id: null
}
const initialState = {
    tweets: [],
    createdTweets: initialTweet,
    user: initialUser,
}

export function reducer(state=initialState, action){
    switch(action.type){
        case "SET_TWEETER_USER":
            return{...state, user: action.payload} // we are copying the current state and we just defining the user
        case "LOGOUT":
            return {...state, user: initialUser }
         case "FETCH_TWEETS":
            return {...state, tweets: action.payload}
        case "FETCH_TWEET":
            return {...state, createdTweets: action.payload }
        case "CLEAR_TWEETS":
            return {...state, createdTweets: initialTweet}
        case "POST_TWEET":
             return{...state, createdTweets: initialTweet, tweets:[ action.payload, ...state.tweets]}
        case "ADD_COMMENT":
            return {...state, createdTweets: {...state.createdTweets, comments:[action.payload, ...state.createdTweets.comments]}}
        default:
            return {...state}
    }
}

