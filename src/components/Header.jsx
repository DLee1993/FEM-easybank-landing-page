import MobileMenu from "./MobileMenu";
import companyLogo from "../assets/images/logo.svg";
const Header = () => {
    return (
        <header className="flex justify-between items-center h-16 px-5 relative">
            <figure>
                <img src={companyLogo} alt="company logo" />
            </figure>
            <ul
                className={`hidden sm:flex flex-row justify-center items-center relative sm:h-full gap-x-3 md:gap-x-5 lg:gap-x-10 bg-white`}
            >
                <li className="cursor-pointer h-full flex items-center">Home</li>
                <li className="cursor-pointer h-full flex items-center">About</li>
                <li className="cursor-pointer h-full flex items-center">Contact</li>
                <li className="cursor-pointer h-full flex items-center">Blog</li>
                <li className="cursor-pointer h-full flex items-center">Contact</li>
            </ul>
            <button className="hidden sm:block">Request Invite</button>
            <MobileMenu />
        </header>
    );
};

export default Header;
