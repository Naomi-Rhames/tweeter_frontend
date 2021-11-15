const initialTweet = {
    description: "",
    image_url: "",
}
const initialState = {
    tweets: [],
    createdTweets: initialTweet,
 user: {
     email: "",
     username: "",
     bio: ""
        
  }
}

export  function reducer(state=initialState, action){
    switch(action.type){
        case "SET_TWEETER_USER":
        return{...state, user: action.payload}
        default:
            return {...state}
    }
}
export const tweetsReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_TwEETS":
        return action.payload
        default:
            return state
    }
}