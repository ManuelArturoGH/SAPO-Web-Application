"use client";
import {Axios, AxiosResponse} from "axios";
import { useEffect, useState } from "react";
import { TableComponent } from "../../components/TableComponent";
import {Employee, columns as tableColumns, ITable, IEmployee, columns} from "../../interfaces/ITable";

const axios = new Axios({
    baseURL: "http://192.168.1.101:5000/api/devicemanipulator/employees?machineNumber=254&ipAddress=192.168.1.111&port=4370",
    headers: { "Content-Type": "application/json" },
});






export default function Users (){
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching data...");
                const response  = await axios.get("http://192.168.1.101localhost:5000/api/devicemanipulator/employees?machineNumber=254&ipAddress=192.168.1.111&port=4370", {
                    headers: { "Content-Type": "application/json" }
                });
                const data = JSON.parse(response.data);
                const employees : ITable = data.map((item: IEmployee) => new Employee(item.id, item.name, item.fingerPrintId, item.isActive, item.privilege));
                setRows(employees);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <main className="main-container">
                <div>
                    {rows.length > 0 ? (
                       <TableComponent columns={columns} data={rows} />
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