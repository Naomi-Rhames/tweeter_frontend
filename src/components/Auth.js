import {useState} from 'react'
import { submitSignup, submitLogin } from  '../redux/actionCreators'
import { connect } from 'react-redux' 

function Auth(props){
console.log(props)
    const [signup, setSignup] = useState(false)
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [bio, setBio] = useState("")
    const [password, setPassword] = useState("")

    const toggleSignup = () => setSignup(!signup)

    const handleSubmit = (e) => {
        e.preventDeafualt()
        signup ? props.submitSignup({ email, username, bio, password }) : props.submitLogin({ username, password })
    }

 
    return <>
    {signup ? <i><h2>Signup Page!</h2></i> : <i><h2>Login page!</h2></i>}
    <form onsubmit={handleSubmit}> 
   {signup && <label>
       Email:
         <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
        </label>}<br/>
       
        <label>
        Username:
         <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
        </label><br/>
       <label>
        Password:
         <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        { signup && <p><i><label><br/>
        Bio(tell other people about yourself):
         <textarea type="text" name="name" value={bio} onChange={(e) => setBio(e.target.value)}/>
        </label></i></p>}
        <br/>
        <input type="submit" value="Submit"/>
    </form>
    <br/>
    <button onClick={toggleSignup}> Or {signup ? "Login!": "Signup!"}</button>
    </>
}

export default connect(null, {submitSignup, submitLogin})(Auth);
 