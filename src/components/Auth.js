import {useState} from 'react'

function Auth(props){

    const [signup, setSignup] = useState(false)
    const toggleSignup = () => setSignup(!signup)




    return <>
    {signup ? <i><h2>Signup Page!</h2></i> : <i><h2>Login page!</h2></i>}
    <form>
    <label>
        Email:
         <input type="email" name="email" /><br/>
        </label><br/> 
       
        <label>
        Username:
         <input type="text" name="username" /><br/>
        </label><br/>
       <label>
        Password:
         <input type="password" name="password" />
        </label>
        <p><i><label><br/>
        Bio(tell other people about yourself):
         <textarea type="text" name="name" />
        </label></i></p>
        <br/>
        <imput type="submit" value="Submit"/>
    </form>
    <button onClick={toggleSignup}> Or {signup ? "Login!": "Signup!"}</button>
    </>
}

export default Auth;
