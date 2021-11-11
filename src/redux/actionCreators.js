export const submitSignup = (user) => {
    return dispatch => fetch("http://localhost:3000/users",
    {method: 'POST', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
}) 
.then(res => res.json())
.then(console.log)
}

export const submitLogin = (user) => {
    return dispatch => fetch("http://localhost:3000/sessions",
    {method: 'POST', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
}) 
.then(res => res.json())
.then(console.log)
}
