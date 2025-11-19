function Table() {
    const usuarios = [
        {
            id: 1,
            Nombre: "Christian",
            ApellidoPaterno: "Lugo",
            ApellidoMaterno: "Rodríguez",
            Edad: 22,
            Nacimiento: "15/03/2003",
            Genero: "M",
            Ocupacion: "Estudiante",
            Email: "christian.lugo@university.edu",
            Telefono: "+52 668 123 4567",
            Ciudad: "Los Mochis",
            Direccion: "Av. Independencia 123, Centro",
            Departamento: "TI",
            SueldoMensual: "$12,500.00",
            UltimoAcceso: "2025-11-18 08:30 AM"
        },
        {
            id: 2,
            Nombre: "Mariana",
            ApellidoPaterno: "Sánchez",
            ApellidoMaterno: "Pérez",
            Edad: 28,
            Nacimiento: "12/08/1996",
            Genero: "F",
            Ocupacion: "Ingeniera de Software",
            Email: "mariana.dev@techcorp.com",
            Telefono: "+52 555 987 6543",
            Ciudad: "Guadalajara",
            Direccion: "Calle Vallarta 4500, Americana",
            Departamento: "Desarrollo",
            SueldoMensual: "$45,000.00",
            UltimoAcceso: "2025-11-18 09:15 AM"
        },
        {
            id: 3,
            Nombre: "Alejandro",
            ApellidoPaterno: "Ruiz",
            ApellidoMaterno: "Gómez",
            Edad: 35,
            Nacimiento: "04/11/1989",
            Genero: "M",
            Ocupacion: "Gerente de Ventas",
            Email: "alex.ventas@empresa.com",
            Telefono: "+52 818 111 2222",
            Ciudad: "Monterrey",
            Direccion: "Paseo de los Leones 890, Cumbres",
            Departamento: "Ventas",
            SueldoMensual: "$55,000.00",
            UltimoAcceso: "2025-11-17 06:45 PM"
        },
        {
            id: 4,
            Nombre: "Fernanda",
            ApellidoPaterno: "López",
            ApellidoMaterno: "Díaz",
            Edad: 24,
            Nacimiento: "22/01/2001",
            Genero: "F",
            Ocupacion: "Diseñadora Gráfica",
            Email: "fer.design@studio.com",
            Telefono: "+52 667 333 4444",
            Ciudad: "Culiacán",
            Direccion: "Blvd. Pedro Infante 200, Las Flores",
            Departamento: "Marketing",
            SueldoMensual: "$18,000.00",
            UltimoAcceso: "2025-11-18 10:00 AM"
        },
        {
            id: 5,
            Nombre: "Ricardo",
            ApellidoPaterno: "Mendoza",
            ApellidoMaterno: "Vega",
            Edad: 42,
            Nacimiento: "30/06/1982",
            Genero: "M",
            Ocupacion: "Contador Público",
            Email: "r.mendoza@finanzas.com",
            Telefono: "+52 555 777 8888",
            Ciudad: "CDMX",
            Direccion: "Av. Reforma 505, Juárez",
            Departamento: "Finanzas",
            SueldoMensual: "$38,500.00",
            UltimoAcceso: "2025-11-18 07:55 AM"
        },
    ];

    return (
        <div className="min-h-screen text-slate-200 flex justify-center items-center p-5">
            <div className="w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                    React Auto Table
                </h1>
                <div className="overflow-x-auto rounded-xl border border-slate-700 shadow-2xl bg-slate-800/50 backdrop-blur-sm">
                    <table className="min-w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-950 text-slate-100 uppercase font-medium">
                            <tr>
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4">Nombre Completo</th>
                                <th className="px-6 py-4">Edad</th>
                                <th className="px-6 py-4">Nacimiento</th>
                                <th className="px-6 py-4">Género</th>
                                <th className="px-6 py-4">Ocupación</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Télefono</th>
                                <th className="px-6 py-4">Ciudad</th>
                                <th className="px-6 py-4">Dirección</th>
                                <th className="px-6 py-4">Departamento</th>
                                <th className="px-6 py-4">Sueldo mensual</th>
                                <th className="px-6 py-4">Último acceso</th>

                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700">
                            {usuarios.map((usuario) => (
                                <tr key={usuario.id} className="hover:bg-slate-700/50 transition-colors duration-200">
                                    <td className="px-6 py-4 text-slate-300">{usuario.id}</td>
                                    {/* Concatenamos nombres para que se vea bien */}
                                    <td className="px-6 py-4 font-medium text-slate-200">
                                        {usuario.Nombre} {usuario.ApellidoPaterno} {usuario.ApellidoMaterno}
                                    </td>
                                    <td className="px-6 py-4">{usuario.Edad} años</td>
                                    <td className="px-6 py-4">{usuario.Nacimiento}</td>
                                    <td className="px-6 py-4">
                                        {usuario.Genero === 'M' ? 'Masculino' : 'Femenino'}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-500/20 text-blue-300 py-1 px-3 rounded-full text-xs font-semibold">
                                            {usuario.Ocupacion}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{usuario.Email}</td>
                                    <td className="px-6 py-4">{usuario.Telefono}</td>
                                    <td className="px-6 py-4">{usuario.Ciudad}</td>
                                    <td className="px-6 py-4">{usuario.Direccion}</td>
                                    <td className="px-6 py-4">{usuario.Departamento}</td>
                                    <td className="px-6 py-4">{usuario.SueldoMensual}</td>
                                    <td className="px-6 py-4">{usuario.UltimoAcceso}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table
