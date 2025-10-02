import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
    SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import {AttendanceRecord, DataTableProps, IEmployee, ITable} from "../interfaces/ITable";
import {exportToExcel} from "../app/scripts/main";
import {IAttendanceRecord} from "../interfaces/ITable";




export function TableComponent<TData extends ITable | AttendanceRecord, TValue>( {
                                                  columns,
                                                  data,
                                              }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setColumnFilters] = useState("");
    const [filterDate, setFilterDate] = useState(new Date());

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter,
        },
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });
    const handleDownload = () => {
        exportToExcel(data, "Asistencias "+ filterDate.toISOString().split("T")[0])// file name as needed
    };

    return (
        <div className="container mt-4">
            {/* Input de búsqueda global */}
            <div className="mb-3">
                <input
                    placeholder="Buscar..."
                    value={globalFilter ?? ""}
                    onChange={(e) => setColumnFilters(e.target.value)}
                    className="form-control"
                />
            </div>

            {/* Tabla con Bootstrap */}
            <table className="table table-striped table-hover table-bordered table-fixed-height">
                <thead className="table-dark">
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th
                                key={header.id}
                                role="button"
                                onClick={header.column.getToggleSortingHandler()}
                                className="text-center"
                            >
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                                {{
                                    asc: " 🔺",
                                    desc: " 🔻",
                                }[header.column.getIsSorted() as string] ?? null}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className="text-center">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Paginación con Bootstrap */}
            <div className="d-flex justify-content-between align-items-center mt-3">
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="btn btn-secondary"
                >
                    ◀ Anterior
                </button>
                <span>
                    Página <strong>{table.getState().pagination.pageIndex + 1}</strong> de{" "}
                    {table.getPageCount()}
                    <button
                        onClick={handleDownload}
                        className="btn btn-secondary"
                    >Descargar</button>
                </span>
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="btn btn-secondary"
                >
                    Siguiente ▶
                </button>
            </div>
        </div>
    )
}