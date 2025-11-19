import React, { ReactNode } from 'react';

interface DynamicTableProps {
    data?: any[];
    theme?: {
        theadColor?: string;
        theadTextColor?: string;
        bodyColor?: string;
    };
    titles?: { [key: string]: string };
    header?: ReactNode | string[]; 
    children?: ReactNode;
}

export const DynamicTable = ({ 
    data, 
    theme = {}, 
    titles = {}, 
    children, 
    header 
}: DynamicTableProps) => {
    
    if ((!data || data.length === 0) && !children && !header) {
        return <div className="text-white">No hay datos</div>;
    }

    const columns = data && data.length > 0 ? Object.keys(data[0]) : [];

    const renderCell = (item: any, column: string) => {
        const value = item[column];
        if (typeof value === 'object' && value !== null) return JSON.stringify(value);
        return value;
    };

    const defaultTheme = {
        theadColor: "bg-slate-950",
        theadTextColor: "text-slate-100",
        bodyColor: "hover:bg-slate-700/50"
    };

    const finalTheme = { ...defaultTheme, ...theme };

    const showThead = header || columns.length > 0;

    return (
        <div className="min-h-screen text-slate-200 flex justify-center items-center p-5">
            <div className="w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                    React Auto Table
                </h1>

                <div className="overflow-x-auto rounded-xl border border-slate-700 shadow-xl bg-slate-800/50 backdrop-blur-sm">
                    <table className="min-w-full text-left text-sm whitespace-nowrap">
                        
                        {showThead && (
                            <thead className={`${finalTheme.theadColor} ${finalTheme.theadTextColor} uppercase font-medium`}>
                                {Array.isArray(header) ? (
                                    <tr>
                                        {header.map((title, index) => (
                                            <th key={index} className="px-6 py-4">
                                                {title}
                                            </th>
                                        ))}
                                    </tr>
                                ) : header ? (
                                    header
                                ) : (
                                    <tr>
                                        {columns.map((col, index) => (
                                            <th key={index} className="px-6 py-4">
                                                {titles[col] || col}
                                            </th>
                                        ))}
                                    </tr>
                                )}
                            </thead>
                        )}

                        <tbody className="divide-y divide-slate-700">
                            {children ? children : data?.map((row, rowIndex) => (
                                <tr key={rowIndex} className={`${finalTheme.bodyColor} transition-colors`}>
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