import { FaMoon, FaRegMoon, FaSun } from "react-icons/fa";
import Table from "./components/table";
import { useState } from "react";
import { DynamicTable } from "./components/dynamic-table";
import { useEffect } from "react";

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

    // DEFINIMOS UN TEMA TIPO "MATRIX" (Solo por diversión)
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
            <DynamicTable data={usuariosApi} theme={matrixTheme} />
        </>
    )
}

export default App;