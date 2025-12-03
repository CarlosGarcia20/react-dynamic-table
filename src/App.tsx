import { DynamicTable } from "./components/dynamic-table";
import { useEffect, useState } from "react";
import CustomNavbar from "./components/navbar";

const App = () => {
    const [usersApi, setUsuariosApi] = useState([]);

    const products = [
        { SKU: "A123", Producto: "Laptop Gamer", Precio: 1500, Stock: 5 },
        { SKU: "B456", Producto: "Mouse Inalámbrico", Precio: 25, Stock: 100 },
    ];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const datosFormateados = data.map((user: { id: any; name: any; username: any; email: any; address: { city: any; }; company: { name: any; }; website: any; }) => ({
                    ID: user.id,
                    Nombre: user.name,
                    Usuario: user.username,
                    Email: user.email,
                    Ciudad: user.address.city,
                    Empresa: user.company.name,
                    Web: user.website
                }));
                setUsuariosApi(datosFormateados);
            })
            .catch(error => console.error("Error cargando datos:", error));
    }, []);

    const handleOnclick = (row: any) => {
        console.log(row)
    }

    return (
        <div className="h-screen w-screen px-30">
            <CustomNavbar />

            {/* 
                    Array Users API  =  usersApi 
                    Array Productos  =  products 
            */}

            <div className="flex flex-1 flex-col gap-10 justify-center">

                <DynamicTable
                    data={products}

                />

            </div>
        </div >
    )
}

export default App;