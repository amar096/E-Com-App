import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Login.css"
import { auth } from 'firebase';

function Login() {

    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) =>{
        event.preventDefault(); // this is to stop refresh
        // login logic...
   
        auth().signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //logged in .. redirect to home page...
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };

    const register = (event) =>{
        event.preventDefault(); // this is to stop refresh
        // register logic...
        auth().createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/");
        })
        .catch((e)=>alert(e.message));
    };

    return (
        <div className="login">
            <Link to = "/" >
                <img src="log.png" alt="" className="login_logo"/>
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type="Password" value={password} onChange={event => setPassword(event.target.value)}/>

                    <button type="submit" className="login_signInButton" onClick={login}>SignIn</button>

                </form>
                <p>By Signing-in , you agree to our terms and conditions</p>
                <button className="login_registerButton" onClick={register}>Create your E-Com account</button>

            </div>
        </div>
    )
}

export default Login
