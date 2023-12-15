import { useState } from "react";



const AuthPage = () => { 

    const [login,setLogin] = useState(null)
    const [passowrd,setPassword] = useState(null)
      return(
        <>  <div>
                <div>
                    <input type="text" onChange={event=> setLogin(event.target.value)}/>
                    <input type="password" onChange={event=> setPassword(event.target.value)}/>
                    <input type="button" value="Log in" />
                </div>
                <p></p>
            </div></>           
    );
}

export default AuthPage;