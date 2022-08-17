import { useState } from "react";
// bootstrap
import { Table, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

// icons
import { FiEdit2 } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
// fake data
import jsonData from "../mock-data.json";

const ReactForm = () => {
  const [data, setData] = useState(jsonData);
  // states
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNo: "",
    email: "",
  });
  // onChange handler of add new data
  const addFormHandle = (e) => {
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };
  // submit handler of adding new data
  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    console.log(addFormData);
  };

  return (
    <>
      <Table striped bordered hover variant="dark" size="sm" responsive>
        <thead className="text-center">
          <tr>
            <th width="1">Priority</th>
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNo</th>
            <th>Address</th>
            <th width="1">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.priority}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phoneNo}</td>
              <td>{item.address}</td>
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
      {/* Add new data */}
      <form
        onSubmit={handleAddFormSubmit}
        className="d-flex justify-content-center"
      >
        <div className="mt-5">
          <Form.Group controlId="addFormData">
            <Form.Control
              className="m-1"
              type="text"
              name="fullName"
              required
              placeholder="Enter the name..."
              value={addFormData.fullName}
              onChange={addFormHandle}
            />
            <Form.Control
              className="m-1"
              type="text"
              name="email"
              required
              placeholder="Enter the email..."
              value={addFormData.email}
              onChange={addFormHandle}
            />
            <Form.Control
              className="m-1"
              type="text"
              name="phoneNo"
              required
              placeholder="Enter the phoneNo..."
              value={addFormData.phoneNo}
              onChange={addFormHandle}
            />
            <Form.Control
              className="m-1"
              type="text"
              name="address"
              required
              placeholder="Enter the address..."
              value={addFormData.address}
              onChange={addFormHandle}
            />
          </Form.Group>
          <Button type="submit" size="sm" className="m-1">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default ReactForm;
