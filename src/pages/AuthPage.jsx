import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
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
    const [_password,setPassword] = useState(null);

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
        if(_login!==""&&_password!=="")
            login();         
        else
            console.log("podano złe dane")    
    }
  
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-gray-800 p-8 shadow-md rounded-2xl w-1/3 relative">
                    <h1 className="text-3xl font-bold mb-4 text-center text-gray-200">
                        Study Smart, Not Hard
                    </h1>
                    <p className="text-sm mb-4 mx-auto text-center text-gray-300">
                        Log in to your account
                    </p>
                    <div className="mb-4 relative">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                        />
                        <input
                            type="text"
                            placeholder="Username"
                            className="border border-gray-300 p-2 pl-10 w-full rounded-md custom-input"
                            onChange={(event) => setLogin(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 relative">
                        <FontAwesomeIcon
                            icon={faKey}
                            className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="border border-gray-300 p-2 pl-10 w-full rounded-md custom-input"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <input
                        type="button"
                        value="Log in"
                        className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-md cursor-pointer w-full "
                        onClick={() => checkInputs()}
                    />
                </div>
            </div>
        </>
    );
};

export default AuthPage;
