function DynamicTable() {
    // Tu array de datos masivo
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
            Ocupacion: "Ingeniera",
            Email: "mariana.dev@techcorp.com",
            Telefono: "+52 555 987 6543",
            Ciudad: "Guadalajara",
            Direccion: "Calle Vallarta 4500",
            Departamento: "Desarrollo",
            SueldoMensual: "$45,000.00",
            UltimoAcceso: "2025-11-18 09:15 AM"
        },
    ];

    // 1. OBTENER LAS COLUMNAS DINÁMICAMENTE
    // Si hay usuarios, tomamos las llaves del primero. Si no, array vacío.
    const columns = usuarios.length > 0 ? Object.keys(usuarios[0]) : [];

    // 2. FUNCIÓN PARA FORMATEAR CELDAS ESPECIALES
    // Esta función decide cómo se ve el dato dependiendo de la columna
    const renderCell = (item, column) => {
        const value = item[column];

        // Caso especial: GENERO
        if (column === 'Genero') {
            const isMale = value === 'M';
            return (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${isMale ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-pink-500/10 text-pink-400 border-pink-500/20'
                    }`}>
                    {isMale ? 'Masculino' : 'Femenino'}
                </span>
            );
        }

        // Caso por defecto: Renderizar el texto tal cual
        return value;
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 flex justify-center items-center p-10">
            <div className="w-full max-w-[95vw]"> {/* Hice el contenedor más ancho para tantos datos */}

                <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                    React Auto Table Dinámica
                </h1>

                <div className="overflow-x-auto rounded-xl border border-slate-700 shadow-2xl bg-slate-800/50 backdrop-blur-sm">
                    <table className="min-w-full text-left text-sm whitespace-nowrap">

                        {/* CABECERA DINÁMICA */}
                        <thead className="bg-slate-950 text-slate-100 uppercase font-medium">
                            <tr>
                                {columns.map((col, index) => (
                                    <th key={index} className="px-6 py-4 hover:bg-slate-900 transition-colors cursor-default">
                                        {/* Insertamos un espacio antes de las mayúsculas para leer mejor (ej. ApellidoPaterno -> Apellido Paterno) */}
                                        {col.replace(/([A-Z])/g, ' $1').trim()}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* CUERPO DINÁMICO */}
                        <tbody className="divide-y divide-slate-700">
                            {usuarios.map((user, userIndex) => (
                                <tr key={userIndex} className="hover:bg-slate-700/50 transition-colors duration-200">

                                    {/* Aquí ocurre la magia: Mapeamos las columnas para cada usuario */}
                                    {columns.map((col, colIndex) => (
                                        <td key={`${userIndex}-${colIndex}`} className="px-6 py-4 text-slate-300">
                                            {renderCell(user, col)}
                                        </td>
                                    ))}

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

                <p className="text-center text-slate-500 text-sm mt-6">
                    {usuarios.length} registros cargados automáticamente
                </p>
            </div>
        </div>
    );
}

export default DynamicTable;