"use client";
import {Axios} from "axios";
import { useEffect, useState } from "react";
import { TableComponent } from "../../components/TableComponent";
import {
    Employee,
    columnsAttendance as tableColumns,
    IEmployee,
    IAttendanceRecord,
    AttendanceRecord, AttendanceTable
} from "../../interfaces/ITable";

const axios = new Axios({
    baseURL: "http://192.168.1.101:5000/api/devicemanipulator/attendence?machineNumber=254&ipAddress=192.168.1.111&port=4370",
    headers: { "Content-Type": "application/json" },
});

export default function Attendance () {
    const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching data...");
                const response = await axios.get("http://192.168.1.101:5000/api/devicemanipulator/employees?machineNumber=254&ipAddress=192.168.1.111&port=4370", {
                    headers: {"Content-Type": "application/json"}
                });
                const dataRecord = JSON.parse(response.data);
                const employees: Employee[] = await dataRecord.map((item: IEmployee) => new Employee(item.id, item.name, item.fingerPrintId, item.isActive, item.privilege));
                // Fetch attendance records
                const attendanceResponse = await axios.get("http://192.168.1.101:5000/api/devicemanipulator/attendance?machineNumber=254&ipAddress=192.168.1.111&port=4370", {
                    headers: {"Content-Type": "application/json"}
                });
                const attendanceData = JSON.parse(attendanceResponse.data);
                const records = attendanceData.map((record: IAttendanceRecord) => {
                    const employee = employees.find((emp) => {

                        return emp.id == record.userID
                    });
                    return new AttendanceTable(employee ? employee.name : "Unknown", record.attendanceTime, record.attendanceStatus);
                });
                setAttendanceRecords(records);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);


    return (
        <div>
            <main className="main-container">
                <div>
                    {attendanceRecords.length > 0 ? (
                        <TableComponent columns={tableColumns} data={attendanceRecords} />
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </main>
            <footer>
            </footer>
        </div>
    );
}