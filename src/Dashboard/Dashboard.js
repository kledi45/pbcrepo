import React, {useState} from "react";
import {auth} from '../Firebase/firebase-config';
import { onAuthStateChanged, signOut} from 'firebase/auth';

function Dashboard(){

    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  
    const logout = async () => {
            await signOut(auth);
          };

    return(
        <>
         <h4> User Logged In: </h4>
            {user?.email}    
            <br></br>
            <br></br>
            <button onClick={logout}> Sign Out </button>
        </>
    )
}


export default Dashboard;