import { useState } from "react";

const AuthPage = () => { 

    
    const [_login,setLogin] = useState(null)
    const [_passowrd,setPassword] = useState(null)

    function login(){
        console.log("zalogowano")
    }

    function checkInputs(){
        if(_login==="admin"&&_passowrd==="admin")
            login()       
        else
            console.log("podano złe dane")    
    }
      return(
        <>  <div>
                <div>
                    <input type="text" onChange={event=> setLogin(event.target.value)}/>
                    <input type="password" onChange={event=> setPassword(event.target.value)}/>
                    <input type="button" onClick={()=>checkInputs()} value="Log in" />
                </div>
                <p></p>
            </div></>           
    );
}

export default AuthPage;