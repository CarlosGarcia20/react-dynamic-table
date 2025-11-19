import { FaMoon, FaRegMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const App = () => {
    const [isOn, setIsOn] = useState(true);
    const [colorThead, setColorThead] = useState()

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
        <div className="flex flex-row h-screen w-screen">
            <div className="dark:bg-slate-800 w-80 mx-5 my-20 rounded-xl shadow-xl/20 p-5 flex flex-col gap-4 ">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="dark:text-white text-slate-900 font-bold text-2xl">Propiedades</h1>
                    <a
                        className="hover:scale-110 cursor-pointer transition ease-in-out dark:text-white text-slate-900"
                        onClick={handleToggle}
                    >
                        {isOn ? <FaSun size={25} /> : <FaMoon size={25} />}
                    </a>
                </div>
                {/* body propierties */}
                <div className="flex flex-col gap-4">
                    <h1 className="dark:text-white text-lg font-semibold">Colores</h1>
                    <div className="flex flex-row justify-center gap-5">
                        <div className="flex flex-col justify-center items-center">
                            <label className="dark:text-white" htmlFor="text">Texto</label>
                            <input
                                type="color"
                                id="text"
                                name="text"
                                value={colorThead}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label className="dark:text-white" htmlFor="thead">Títulos</label>
                            <input
                                type="color"
                                id="thead"
                                name="thead"
                                value={colorThead}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label className="dark:text-white" htmlFor="rows">Filas</label>
                            <input
                                type="color"
                                id="rows"
                                name="rows"
                                value={colorThead}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    <h1 className="dark:text-white text-lg font-semibold">Datos</h1>
                    <div className="flex flex-col gap-4" >
                        <textarea
                            className="dark:bg-slate-700 dark:text-white rounded-lg w-full border border-gray-300 p-3"
                            name="thead" rows={10}
                            defaultValue="Títulos"
                        />
                        <textarea
                            className="dark:bg-slate-700 dark:text-white rounded-lg w-full border border-gray-300 p-3"
                            name="rows" rows={10}
                            defaultValue="Filas"
                        />
                    </div>
                </div>
            </div>
            <div className=" w-full h-full"></div>
        </div>
    )
}

export default App;