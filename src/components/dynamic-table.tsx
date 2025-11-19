import { ReactNode } from 'react';

interface DynamicTableProps {
    titles?: ReactNode | string[];
    data?: any[];
    theadStyle?: string;
    rowStyle?: string;
    divideStyle?: string;
    borderStyle?: string;
    onClickRow?: (row: any) => void;
}

export const DynamicTable = ({
    titles,
    data = [
        { Título1: "Sin datos", Título2: "Sin datos", Título3: "Sin datos", Título4: "Sin datos", Título5: "Sin datos" },
        { Título1: "Sin datos", Título2: "Sin datos", Título3: "Sin datos", Título4: "Sin datos", Título5: "Sin datos" },
        { Título1: "Sin datos", Título2: "Sin datos", Título3: "Sin datos", Título4: "Sin datos", Título5: "Sin datos" },
        { Título1: "Sin datos", Título2: "Sin datos", Título3: "Sin datos", Título4: "Sin datos", Título5: "Sin datos" },
    ],
    theadStyle = 'bg-slate-300 dark:bg-slate-900 uppercase font-medium dark:text-white text-gray-900',
    rowStyle = 'dark:bg-slate-800 dark:text-white cursor-pointer hover:dark:bg-slate-700 hover:bg-gray-300 transition-colors',
    divideStyle = 'divide-y divide-gray-300 dark:divide-slate-700',
    borderStyle = 'border border-gray-300 dark:border-slate-700',
    onClickRow
}: DynamicTableProps) => {
    const dataKeys = data && data.length > 0 ? Object.keys(data[0]) : [];
    const renderCell = (item: any, column: string) => {
        const value = item[column];
        if (typeof value === 'object' && value !== null) return JSON.stringify(value);
        return value;
    };

    const rendertitles = () => {
        if (!Array.isArray(titles) && titles) {
            return titles;
        }

        let finaltitless: string[] = [];

        if (Array.isArray(titles)) {
            finaltitless = [...titles];
        }

        if (finaltitless.length === 0) {
            finaltitless = dataKeys;
        } else {
            dataKeys.forEach((key, index) => {
                if (index >= finaltitless.length) {
                    finaltitless.push(key);
                }
            });
        }

        return (
            <tr>
                {finaltitless.map((title, index) => (
                    <th key={index} className="px-6 py-4">
                        {title}
                    </th>
                ))}
            </tr>
        );
    };

    const showThead = !!titles || dataKeys.length > 0;

    return (
        <div className={`overflow-x-auto rounded-xl shadow-xl backdrop-blur-sm ${borderStyle}`}>
            <table className="min-w-full text-left text-sm whitespace-nowrap">
                {showThead && (
                    <thead className={`${theadStyle}`}>
                        {rendertitles()}
                    </thead>
                )}

                <tbody className={`${divideStyle}`}>
                    {data.map((row, rowIndex) => (
                        <tr onClick={onClickRow ? () => onClickRow(row) : undefined} key={rowIndex} className={`${rowStyle}`}>
                            {dataKeys.map((col, colIndex) => (
                                <td key={`${rowIndex}-${colIndex}`} className="px-6 py-4">
                                    {renderCell(row, col)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};