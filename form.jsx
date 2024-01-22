import React, { useState } from "react";
import EmpForm from "./table";
import jsonData from "./data.json";

function TableData() {
  const [empData, setEmpData] = useState(jsonData);
  const tableRows = empData.map((information) => {
    return (
      <tr>
        <td>{information.sNo}</td>
        <td>{information.name}</td>
        <td>{information.id}</td>
        <td>{information.number}</td>
        <td>{information.role}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalCount = empData.length;
    data.sNo = totalCount + 1;
    const updatedEmpData = [...empData];
    updatedEmpData.push(data);
    setEmpData(updatedEmpData);
  };

  return (
    <div>
      <table className="table table-stripped">
        <thead>
          {" "}
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Id</th>
            <th>Mobile Number</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <EmpForm function={addRows} />
    </div>
  );
}

export default TableData;
