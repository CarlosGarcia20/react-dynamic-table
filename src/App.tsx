import { FaMoon, FaRegMoon, FaSun } from "react-icons/fa";
import Table from "./components/table";
import { useState } from "react";

const App = () => {
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
        <>
            <nav className="sticky top-0  dark:bg-slate-900 h-15 flex items-center justify-end px-20">
                <a
                    className="hover:scale-110 cursor-pointer transition ease-in-out dark:text-white text-slate-900"
                    onClick={handleToggle}
                >
                    {isOn ? <FaSun size={25} /> : <FaMoon size={25} />}
                </a>

            </nav>
            <Table />
        </>
    )
}

export default App;