import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {AttendanceRecord, IAttendanceRecord, IEmployee, ITable} from "../../interfaces/ITable";

export const exportToExcel = (rows: Array<AttendanceRecord | IEmployee | ITable>, fileName: string) => {
    // 1. Convert data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(rows);
    // 2. Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    // 3. Write workbook to binary array
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    // 4. Trigger download
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, `${fileName}.xlsx`);
};
