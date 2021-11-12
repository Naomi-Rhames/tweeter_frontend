export const submitSignup = (user) => {
    return dispatch => fetch("http://127.0.0.1:3000/users",
    {method: 'POST', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
}) 
.then(res => res.json())
.then(user => dispatch({type: "SET_TWEETER_USER", payload: user}))
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
.then(user => dispatch({type: "SET_TWEETER_USER", payload: user}))
}
