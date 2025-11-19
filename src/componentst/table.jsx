
function Table() {
    const users = [
        { id: 1, name: "Christian Lugo", role: "Desarrollador", status: "Activo" },
        { id: 2, name: "Carlos Garcia", role: "Project Manager", status: "Inactivo" },
        { id: 3, name: "Fernando Soto", role: "Conserje", status: "Activo" },
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 flex justify-center items-center p-5">
            <div className="w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                    React Auto Table
                </h1>
                <div className="overflow-hidden rounded-xl border border-slate-700 shadow-2xl bg-slate-800/50 backdrop-blur-sm">
                    <table className="min-w-full text-left text-sm">
                        <thead className="bg-slate-950 text-slate-100 uppercase font-medium">
                            <tr>
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4">Nombre</th>
                                <th className="px-6 py-4">Rol</th>
                                <th className="px-6 py-4">Estado</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700">
                            {users.map((user) => (
                                <tr
                                    key={user.id}
                                    className="hover:bg-slate-700/50 transition-colors duration-200"
                                >
                                    <td className="px-6 py-4 font-medium text-slate-300">{user.id}</td>
                                    <td className="px-6 py-4">{user.name}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-500/20 text-blue-300 py-1 px-3 rounded-full text-xs font-semibold">
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`py-1 px-3 rounded-full text-xs font-semibold ${user.status === 'Activo' ? 'text-emerald-400' : 'text-red-400'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
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
