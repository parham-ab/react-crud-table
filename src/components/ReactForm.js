import { useRef, useState } from "react";
// bootstrap
import { Table, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// uuid
import { v4 as uuidv4 } from "uuid";
// fake data
import jsonData from "../mock-data.json";
// components
import ReadOnly from "./ReadOnly";

const ReactForm = () => {
  const [data, setData] = useState(jsonData);
  // refs
  const nameVal = useRef();
  const emailVal = useRef();
  const phoneNoVal = useRef();
  const addressVal = useRef();
  // states
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNo: "",
    email: "",
  });
  const [inputRefs, setInputRefs] = useState([
    nameVal,
    emailVal,
    phoneNoVal,
    addressVal,
  ]);
  // onChange handler of add new data
  const addFormHandle = (e) => {
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };
  // submit handler of adding new data
  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const enteredData = {
      id: uuidv4(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNo: addFormData.phoneNo,
      email: addFormData.email,
    };
    const newVal = [...data, enteredData];
    setData(newVal);
    // clear inputs after submission
    inputRefs.forEach((item) => {
      item.current.value = "";
    });
  };

  return (
    <>
      <Table striped bordered hover variant="dark" size="sm" responsive>
        <thead className="text-center">
          <tr>
            {/* <th width="1">Priority</th> */}
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNo</th>
            <th>Address</th>
            <th width="1">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((item) => (
            <ReadOnly key={item.id} data={item} />
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
              onChange={addFormHandle}
              ref={nameVal}
            />
            <Form.Control
              className="m-1"
              type="text"
              name="email"
              required
              placeholder="Enter the email..."
              onChange={addFormHandle}
              ref={emailVal}
            />
            <Form.Control
              className="m-1"
              type="text"
              name="phoneNo"
              required
              placeholder="Enter the phoneNo..."
              onChange={addFormHandle}
              ref={phoneNoVal}
            />
            <Form.Control
              className="m-1"
              type="text"
              name="address"
              required
              placeholder="Enter the address..."
              onChange={addFormHandle}
              ref={addressVal}
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
