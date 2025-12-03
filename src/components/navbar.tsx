import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const CustomNavbar = () => {
    const [isOn, setIsOn] = useState(true);

    const handleToggle = () => {
        setIsOn(!isOn)
        if (isOn) {
            document.querySelector('html')?.classList.remove('dark')
        } else {
            document.querySelector('html')?.classList.add('dark')
        }
    };

    return (
        <nav className="sticky dark:bg-slate-900 bg-gray-200 z-10 top-0 w-full h-fit mt-20 p-10 flex flex-row items-center justify-center px-50 gap-20">
            <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-blue-700 dark:from-blue-400 dark:to-emerald-400 to-emerald-700">
                React Auto Table
            </h1>
            <a
                className="hover:scale-110 cursor-pointer transition ease-in-out dark:text-white text-slate-900"
                onClick={handleToggle}
            >
                {isOn ? <FaSun size={25} /> : <FaMoon size={25} />}
            </a>
        </nav>
    )
}

export default CustomNavbar;