// bootstrap
import { useState } from "react";
import { Table } from "react-bootstrap";
// icons
import { FiEdit2 } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
// fake data
import jsonData from "../mock-data.json";

const ReactForm = () => {
  const [data, setData] = useState(jsonData);

  return (
    <>
      <Table striped bordered hover variant="dark" size="sm" responsive>
        <thead className="text-center">
          <tr>
            <th width="1">Priority</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th width="1">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.priority}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.phoneNo}</td>
              <td>{item.email}</td>
              <td>
                <span className="text-warning">
                  <FiEdit2 />
                </span>
                <span className="text-danger">
                  <TiDeleteOutline />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ReactForm;
