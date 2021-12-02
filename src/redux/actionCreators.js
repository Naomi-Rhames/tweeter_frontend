

export const submitSignup = (user) => {
    return dispatch => fetch("http://127.0.0.1:3000/users",
    {method: 'POST', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
}) 
 .then(res => handleUserResponse(res, dispatch))
 // token will be saved in local storage
  // the user will be dispatched into the reducer
}

export const submitLogin = (user) => {
    return dispatch => fetch("http://127.0.0.1:3000/sessions",
    {method: 'POST', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
}) 
.then(res => handleUserResponse(res, dispatch))
}


export const autoLogin = () => {
  return dispatch => fetch("http://localhost:3000/tweeter", {
    headers: {
      'Authorization': localStorage.token
    }
  })
  .then(res => handleUserResponse(res, dispatch))
}



export const fetchTweets = () => {
  return dispatch => fetch("http://127.0.0.1:3000/tweets")
  .then(res => res.json())
  .then(tweets => dispatch({ type: 'FETCH_TWEETS', payload: tweets}))
    
}

export const fetchTweet = (id) => {
  return dispatch => fetch(`http://127.0.0.1:3000/tweets/${id}`)
  .then(res => res.json())
  .then(tweet => dispatch({type: 'FETCH_TWEET', payload: tweet})
  )}

export const clearTweets = () => ({type: "CLEAR_TWEETS"})

export const addTweet= tweet => {
  return dispatch => fetch("http://127.0.0.1:3000/tweets",
  {method: 'POST', // or 'PUT'
  headers: {
  'Content-Type': 'application/json',
  'Authorization': localStorage.token
},
body: JSON.stringify(tweet),
}) 
.then(res => res.json())
.then(tweets => {
dispatch({type: "POST_TWEET", payload: tweets})
})
}

export const submitComment = (comment, tweetId) => {

  return dispatch => fetch(`http://127.0.0.1:3000/tweets/${tweetId}/comments`, {
  method: 'POST', // or 'PUT'
  headers: {
  'Content-Type': 'application/json',
  'Authorization': localStorage.token
},
body: JSON.stringify(comment)
}) 
.then(res => res.json()) 
.then( comment => {
  dispatch({type: "ADD_COMMENT", payload: comment})}
  // } else {
    // res.json()
    // .then(res => alert(res.errors))
  
)
}


export const logout = () => {
  return dispatch => {
    localStorage.clear()
    dispatch({type: "LOGOUT"})
  }
}

function handleUserResponse(res, dispatch){
  if (res.ok) {
    res.json()
    .then(response => {
      localStorage.token = response.token
      dispatch({type: "SET_TWEETER_USER", payload: response.user})
    })
  } else {
    res.json()
    .then(res => alert(res.errors))
  }
}

