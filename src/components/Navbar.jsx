import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faCalendarAlt, faSignOutAlt, faUser, faSchool } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../redux/userSlice";

const Navbar = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col h-screen bg-black text-white p-4 items-center text-lg">
            <div className="flex flex-col items-center mb-4 py-3 basis-1/12">
                <FontAwesomeIcon icon={faSchool} className="mr-2 py-3" />
                <span>{user.login}</span>
            </div>
            <ul className="list-none basis-11/12 flex flex-col">
                <div>
                    <li className="flex items-center my-2 hover:text-gray-300 cursor-pointer">
                        <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
                    </li>
                    <li className="flex items-center my-2 hover:text-gray-300 cursor-pointer ">
                        <FontAwesomeIcon icon={faCog} className="mr-2" /> Preferences
                    </li>
                    <li className="flex items-center my-2 hover:text-gray-300 cursor-pointer">
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> Calendar
                    </li>
                </div>
                <div className="mt-auto">
                    <li className="flex items-center my-2 hover:text-gray-300 cursor-pointer" onClick={() => dispatch(signOut())}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
