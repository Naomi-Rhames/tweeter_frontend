const initialTweet = {
    description: "",
    imageUrl: ""
}

const initialState = {
 tweets: [],
 createdTweet: initialTweet,
 user: {
     email: "",
     username: ""
        
  }
}

export function reducer(state=initialState, action){
    switch(action.type){
        case "SET_USER":
        return{...state, user: action.payload}
        default:
            return {...state}
    }
}