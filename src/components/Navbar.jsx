import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faCalendarAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/Logo_appka.png";

const Navbar = () => {
    return (
        <div className="flex flex-col h-screen bg-black text-white p-4 items-center text-lg">
            <div className="flex flex-col items-center mb-4 basis-1/12">
                <img src={logo} alt="logo" className="w-20 h-20 mr-2" />
                <span>AppName</span>
            </div>
            <ul className="list-none basis-11/12 flex flex-col">
                <div>
                    <li className="flex items-center my-2 hover:text-gray-300 cursor-pointer ">
                        <FontAwesomeIcon icon={faCog} className="mr-2" /> Opcje
                    </li>
                    <li className="flex items-center my-2 hover:text-gray-300 cursor-pointer">
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> Kalendarz
                    </li>
                </div>
                <div className="mt-auto">
                    <li className="flex items-center my-2 hover:text-gray-300 cursor-pointer">
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Wyloguj
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
