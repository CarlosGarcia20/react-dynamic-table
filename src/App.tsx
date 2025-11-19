import { FaMoon, FaRegMoon, FaSun } from "react-icons/fa";
import Table from "./components/table";
import { DynamicTable } from "./components/dynamic-table";
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

    const matrixTheme = {
        theadColor: "bg-red-500",
        theadTextColor: "text-stone-950",
        bodyColor: "text-cyan-700 hover:bg-cyan-900/30 font-mono",
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

    const [usuariosApi, setUsuariosApi] = useState([]);
    const [cargando, setCargando] = useState(true);

    // Datos de una API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const datosFormateados = data.map(user => ({
                    ID: user.id,
                    Nombre: user.name,
                    Usuario: user.username,
                    Email: user.email,
                    Ciudad: user.address.city,
                    Empresa: user.company.name,
                    Web: user.website
                }));

                setUsuariosApi(datosFormateados);
                setCargando(false);
            })
            .catch(error => console.error("Error cargando datos:", error));
    }, []);

    // Datos de la PokeAPI
    // const [pokemonData, setPokemonData] = useState([]);
    // useEffect(() => {
    //     const fetchPokemons = async () => {
    //         try {
    //             const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    //             const data = await response.json();

    //             const promises = data.results.map(async (pokemon) => {
    //                 const res = await fetch(pokemon.url);
    //                 return res.json();
    //             });

    //             const results = await Promise.all(promises);

    //             const formattedData = results.map(poke => ({
    //                 ID: poke.id,
    //                 Imagen: poke.sprites.front_default,
    //                 Nombre: poke.name.charAt(0).toUpperCase() + poke.name.slice(1),
    //                 Tipo: poke.types[0].type.name,
    //                 Altura: `${poke.height / 10} m`,
    //                 Peso: `${poke.weight / 10} kg`,
    //                 Experiencia: poke.base_experience
    //             }));

    //             setPokemonData(formattedData);
    //             setCargando(false);
    //         } catch (error) {
    //             setCargando(false);
    //         }
    //     };

    //     fetchPokemons();
    // }, []);

    return (
        <div className="flex flex-row h-screen w-screen">
            <div className="dark:bg-slate-800 w-80 mx-5 my-10 rounded-xl shadow-xl/20 p-5 flex flex-col gap-4 ">
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
                <div className="flex flex-col gap-4 overflow-auto">
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
                    <h1 className="dark:text-white text-lg font-semibold">Colores tema obscuro</h1>
                    <div className="flex flex-row justify-center gap-5">
                        <div className="flex flex-col justify-center items-center">
                            <label className="dark:text-white" htmlFor="darkText">Texto</label>
                            <input
                                type="color"
                                id="darkText"
                                name="darkText"
                                value={colorThead}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label className="dark:text-white" htmlFor="darkThead">Títulos</label>
                            <input
                                type="color"
                                id="darkThead"
                                name="darkThead"
                                value={colorThead}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <label className="dark:text-white" htmlFor="darkRows">Filas</label>
                            <input
                                type="color"
                                id="darkRows"
                                name="darkRows"
                                value={colorThead}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    <h1 className="dark:text-white text-lg font-semibold">Datos</h1>
                    <div className="flex flex-col gap-4 overflow-y-auto" >
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
            <div className=" w-full h-full">
                <DynamicTable 
                    // header={['Producto', 'Precio', 'Stock', 'Estado']}
                    data={usuarios}   
                >
                </DynamicTable>
            </div>
        </div>
    )
}

export default App;