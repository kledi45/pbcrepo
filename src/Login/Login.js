import React, {useState} from 'react';
import { signInWithEmailAndPassword,onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../Firebase/firebase-config';
import {Link} from 'react-router-dom';

function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };
      
      return(
          <>
          <div>
           <h3> Login </h3>
           <label className='custom-field'>
         <input
            type="text" required
            onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <span className = "placeholder">Email</span>
        </label>
        <br></br>
        <br></br>
        <label className='custom-field'>
        <input
              type = "password" required
              onChange={(event) => {
              setLoginPassword(event.target.value);
          }}
        />
            <span className = "placeholder">Password</span>
        </label>
        <br></br>
        <br></br>
            <Link to = "/dashboard">
            <button onClick={login} className = "createButton" > Login</button>
            </Link>
            </div>
          </>
      )
}


export default Login;