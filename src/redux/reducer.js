
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
    setTweet: initialTweet,
    user: initialUser,
}

export function reducer(state=initialState, action){
    switch(action.type){
        case "SET_TWEETER_USER":
            return{...state, user: action.payload} // we are copying the current state and we just defining the user
        case "FETCH_USER":
            return{...state, user: action.payload}
        case "LOGOUT":
            return {...state, user: initialUser }
         case "FETCH_TWEETS":
            return {...state, tweets: action.payload }
        case "FETCH_TWEET":
            return {...state, setTweet: action.payload }
        case "CLEAR_TWEETS":
            return {...state, setTweet: initialTweet }
        case "POST_TWEET":
             return{...state, setTweet: initialTweet, tweets:[ action.payload, ...state.tweets] }
        case "ADD_COMMENT":
             return {...state, setTweet: {...state.setTweet, comments: [ action.payload, ...state.setTweet.comments]} }
        default:
            return {...state }
    }
}

