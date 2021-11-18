const initialTweet = {
    description: "",
    image_url: ""
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
    user: initialUser
}

export function reducer(state=initialState, action){
    switch(action.type){
        case "SET_TWEETER_USER":
            return{...state, user: action.payload} // we are copying the current state and we just defining the user
        case "LOGOUT":
            return {...state, user: initialUser }
         case "FETCH_TWEETS":
            return {...state, tweets: [action.payload]}
        case "POST_TWEET":
            console.log(action.payload)
             return{...state, createdTweets: initialTweet, tweets:[ action.payload, ...state.tweets]}
        default:
            return {...state}
    }
}

