import { FaMoon, FaRegMoon, FaSun } from "react-icons/fa";
import Table from "./components/table";
import { useState } from "react";
import { DynamicTable } from "./components/dynamic-table";

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

    const usuarios = [
        { id: 1, Nombre: "Christian", Edad: 22, Genero: "M", Ocupacion: "Dev" },
        { id: 2, Nombre: "Mariana", Edad: 28, Genero: "F", Ocupacion: "Lead" },
        { id: 3, Nombre: "Pedro", Edad: 35, Genero: "M", Ocupacion: "Manager" },
    ];

    const productos = [
        { SKU: "A123", Producto: "Laptop Gamer", Precio: 1500, Stock: 5 },
        { SKU: "B456", Producto: "Mouse Inalámbrico", Precio: 25, Stock: 100 },
    ];

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
            {/* <Table /> */}
            <DynamicTable data={usuarios} />
        </>
    )
}

export default App;