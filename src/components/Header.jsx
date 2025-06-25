import { useState } from "react";
import Logo from "../assets/logo.svg";
import Hamburger from "../assets/hamburger.svg";
import Close from "../assets/close.svg";

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    function handleToggleMenu() {
        setToggleMenu((prevToggleMenu) => !prevToggleMenu)
    }

    return (
        <header className="bg-primary px-5 py-[1.356rem] md:py-[1.6rem] md:px-10 xl:px-20">
            <div className="flex item-center justify-between gap-4 max-w-[90rem] mx-auto">
                <a href="" className="w-[9.5rem] block md:w-[14.125rem]"><img src={Logo} alt="logo" /></a>
                <button className="cursor-pointer md:hidden" onClick={handleToggleMenu}><img src={Hamburger} alt="menu" /></button>
                <div className={`bg-white fixed z-1 left-0 right-0 top-0 bottom-0 px-5 py-4 overflow-y-auto duration-300 md:hidden ${!toggleMenu ? "translate-x-full invisible" : ""}`}>
                    <ul className="text-nowrap text-sm font-medium uppercase text-[#100C08]">
                        <li className="py-1 mb-9"><a href="">Home</a></li>
                        <li className="py-1 mb-9"><a href="">Services</a></li>
                        <li className="py-1 mb-9"><a href="">About Us</a></li>
                        <li className="py-1 mb-9"><a href="">Contact Us</a></li>
                        <li className="py-1"><a href="">Careers</a></li>
                    </ul>
                    <button className="absolute top-4 right-5 mt-[0.1875rem] cursor-pointer" onClick={handleToggleMenu}><img src={Close} alt="close" /></button>
                </div>
                <ul className="hidden md:flex md:flex-row md:items-center md:text-sm md:font-medium md:text-white md:uppercase md:gap-7">
                    <li><a href="">Services</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Careers</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;