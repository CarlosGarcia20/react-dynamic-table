// src/components/AutoTable.jsx
import React from 'react';

export const DynamicTable = ({ data }) => {

    console.log(data);

    if (!data || data.length === 0) {
        return (
            <div className="p-4 text-center text-slate-500 bg-slate-800 rounded-lg border border-slate-700">
                No hay datos para mostrar.
            </div>
        );
    }

    const columns = Object.keys(data[0]);

    const renderCell = (item, column) => {
        const value = item[column];

        return value;
    };

    return (
        <div className='min-h-screen text-slate-200 flex justify-center items-center p-5'>
            <div className='w-full max-w-4xl'>
                <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                    React Auto Table
                </h1>
                <div className="overflow-x-auto rounded-xl border border-slate-700 shadow-xl bg-slate-800/50 backdrop-blur-sm">
                    <table className="min-w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-950 text-slate-100 uppercase font-medium">
                            <tr>
                                {columns.map((col, index) => (
                                    <th key={index} className="px-6 py-4">
                                        {col.replace(/([A-Z])/g, ' $1').trim()}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700">
                            {data.map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-slate-700/50 transition-colors">
                                    {columns.map((col, colIndex) => (
                                        <td key={`${rowIndex}-${colIndex}`} className="px-6 py-4 text-slate-300">
                                            {renderCell(row, col)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};