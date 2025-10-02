import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ITable>[] = [
    {
        accessorKey: "id",
        header: "ID",
        size: 50,
    },
    {
        accessorKey: "name",
        header: "Name",
        size: 150,
    },
    {
        accessorKey: "numberFingerPrint",
        header: "Number of FingerPrint",
        size: 150,
    },
    {
        accessorKey: "isActive",
        header: "Is Active",
        size: 100,
    },
    {
        accessorKey: "privilege",
        header: "Privilege",
        size: 100,
    }
]

export type ITable = {
    id: number;
    name: string;
    numberFingerPrint: number;
    isActive: boolean;
    privilege: number;
 }

export interface DataTableProps<TData, TValue = unknown> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export class Employee implements ITable {
    id: number;
    name: string;
    numberFingerPrint: number;
    isActive: boolean;
    privilege: number;

    constructor(id: number, name: string, hasFingerPrint: number, isActive: boolean, privilege: number) {
        this.id = id;
        this.name = name;
        this.numberFingerPrint = hasFingerPrint + 1;
        this.isActive = isActive;
        this.privilege = privilege;
    }
}

export interface IEmployee {
    id: number;
    name: string;
    fingerPrintId: number;
    isActive: boolean;
    privilege: number;
}

export type AttendanceRecord = {
    name: string;
    timestamp: string;
    attendanceStatus: string;
}

export const columnsAttendance: ColumnDef<AttendanceRecord>[] = [
    {
        accessorKey: "name",
        header: "Name",
        size: 150,
    },
    {
        accessorKey: "timestamp",
        header: "Timestamp",
        size: 200,
    },
    {
        accessorKey: "attendanceStatus",
        header: "Attendance Status",
        size: 150,
    }
]

export class AttendanceTable {
    name: string;
    timestamp: string
    attendanceStatus: string;

    constructor(name: string, timestamp: string, attendanceStatus: string) {
        this.name = name;
        this.timestamp = timestamp;
        this.attendanceStatus = attendanceStatus;
    }
}

export interface IAttendanceRecord {
    attendanceMachineID : number;
    userID : number;
    attendanceTime : string;
    accessMode : string;
    attendanceStatus : string;
}