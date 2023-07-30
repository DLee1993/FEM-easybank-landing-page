import companyLogo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import { useState } from "react";
const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <header className="flex justify-between items-center h-16 px-5 relative">
            <figure>
                <img src={companyLogo} alt="company logo" />
            </figure>
            <ul
                className={`flex flex-col sm:flex-row justify-center items-center absolute z-0 sm:relative ${
                    menu ? "top-20 pointer-events-auto" : "top-44 opacity-0 pointer-events-none"
                } sm:top-0 opacity-1 sm:opacity-100 sm:pointer-events-auto right-1/2 translate-x-1/2 sm:right-0 sm:translate-x-0 w-[95%] sm:w-auto sm:h-full gap-y-3 sm:gap-y-0 sm:gap-x-3 md:gap-x-5 lg:gap-x-10 rounded sm:rounded-none py-5 sm:py-0 transition-all duration-500 bg-white`}
            >
                <li className="cursor-pointer h-full flex items-center">Home</li>
                <li className="cursor-pointer h-full flex items-center">About</li>
                <li className="cursor-pointer h-full flex items-center">Contact</li>
                <li className="cursor-pointer h-full flex items-center">Blog</li>
                <li className="cursor-pointer h-full flex items-center">Contact</li>
            </ul>
            <button className="hidden sm:block">Request Invite</button>
            <figure className="sm:hidden cursor-pointer">
                <img
                    src={hamburger}
                    alt="open menu button"
                    onClick={() => setMenu(!menu)}
                    className={`${
                        menu ? "rotate-90" : "rotate-0"
                    } transition-transform duration-300`}
                />
            </figure>
        </header>
    );
};

export default Header;
