import React, {useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../Firebase/firebase-config';
import "./register.css";
import {Link} from 'react-router-dom';


function Register(){

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    
  

    const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    
  
    return (
      <div className="App">
        <div className='register-form'>
        <h3> Register User </h3>
        <br></br>
        <label className='custom-field'>
        <input type = "text" required 
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <span className = "placeholder">Shkruaj e-mail </span>
        </label>
        <br></br>
        <br></br>
        <lablel className = 'custom-field'>  
        <input
          type = "password" required
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <span className = "placeholder">Shkruaj password </span>
        </lablel>
        <br></br>
        <br></br>
        <button onClick={register} className ='createButton'> Krijo User-in</button>
    
        <p>Ke hapur llogarinë? <Link to = "/login"> Login këtu</Link></p>
        <br></br>
      </div> 

      
     </div>
    );
}


export default Register;