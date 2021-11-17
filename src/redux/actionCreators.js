

export const submitSignup = (user) => {
    return dispatch => fetch("http://127.0.0.1:3000/users",
    {method: 'POST', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
}) 
.then(res => res.json())
.then(response => { 
  localStorage.token = response.token
  dispatch({type: "SET_TWEETER_USER", payload: response.user})
})
}

export const submitLogin = (user) => {
    return dispatch => fetch("http://127.0.0.1:3000/sessions",
    {method: 'POST', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
}) 
.then(res => res.json())
.then(response => {
  localStorage.token = response.token
  dispatch({type: "SET_TWEETER_USER", payload: response.user})
})
}

export const autoLogin = () => {
  return dispatch => fetch("http://localhost:3000/tweeter", {
    headers: {
      'Authorization': localStorage.token
    }
  })
  .then(res => res.json())
  .then(response => { 
    localStorage.token = response.token
    dispatch({type: "SET_TWEETER_USER", payload: response.user})
  })
}

export const fetchTweets = () => {
  return dispatch => fetch("http://127.0.0.1:3000/tweets")
  .then(res => res.json())
  .then(tweets => dispatch({ type: 'FETCH_TWEETS', payload: tweets.createdTweets}))
    
}

export const addTweet= tweet => {
  return dispatch => fetch("http://127.0.0.1:3000/tweets",
  {method: 'POST', // or 'PUT'
  headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify(tweet),
}) 
.then(res => res.json())
.then(tweets => {
dispatch({type: "POST_TWEET", tweets})
})
}

export const logout = () => {
  return dispatch => {
    localStorage.clear()
    dispatch({type: "LOGOUT"})
  }
}
