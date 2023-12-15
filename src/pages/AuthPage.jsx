import { useState } from "react";

const AuthPage = () => {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

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
                    />
                </div>
            </div>
        </>
    );
};

export default AuthPage;
