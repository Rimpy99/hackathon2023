import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setUser } from "../redux/userSlice";

const mockStudent = {
    id: 1234,
    token: 11111111111,
    permission: 'parent'
}

const mockParent = {
    id: 2222,
    token: 123456789,
    permission: 'parent'
}

const mockTeacher = {
    id: 3333,
    token: 133456789,
    permission: 'teacher'
}

const AuthPage = () => { 
    const [_login,setLogin] = useState(null);
    const [_passowrd,setPassword] = useState(null);

    const dispatch = useDispatch();

    const login = () => {
        switch(_login){
            case 'student':
                dispatch(setUser(mockStudent));
                break;
            case 'parent':
                dispatch(setUser(mockParent));
                break;
            case 'teacher':
                dispatch(setUser(mockTeacher));
                break;
        }
    }

    function checkInputs(){
        if(_login==="admin"&&_passowrd==="admin")
            login();         
        else
            console.log("podano złe dane")    
    }
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-gray-800 p-8 shadow-md rounded-md">
                    <input
                        type="text"
                        placeholder="Username"
                        className="border border-gray-300 p-2 mb-4 w-full rounded-md custom-input"
                        onChange={(event) => setLogin(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-gray-300 p-2 mb-4 w-full rounded-md custom-input"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <input
                        type="button"
                        value="Log in"
                        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer w-full"
                        onClick={()=>checkInputs()}
                    />
                </div>
            </div>
        </>
    );
};

export default AuthPage;
