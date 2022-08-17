import React, { useEffect, useRef, useState } from "react";
// bootstrap components
import { Button, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// uuid
import { v4 as uuidv4 } from "uuid";
// components
import ReadOnly from "./ReadOnly";
import Editable from "./Editable";

const ReactForm = () => {
  // refs
  const priorityVal = useRef();
  const nameVal = useRef();
  const emailVal = useRef();
  const addressVal = useRef();
  const phoneNoVal = useRef();
  // states
  const [data, setData] = useState([]);
  const [addFormData, setAddFormData] = useState({
    priority: "",
    fullName: "",
    address: "",
    phoneNo: "",
    email: "",
  });
  const [editFormData, setEditFormData] = useState({
    priority: "",
    fullName: "",
    address: "",
    phoneNo: "",
    email: "",
  });
  const [refVals, setRefVals] = useState([
    priorityVal,
    nameVal,
    emailVal,
    addressVal,
    phoneNoVal,
  ]);

  const [editDataId, setEditDataId] = useState(null);
  // onchange handler of inputs
  const handleAddFormChange = (e) => {
    e.preventDefault();
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };
  // edit forms
  const handleEditFormChange = (e) => {
    e.preventDefault();
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };
  // add new value to the table
  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      priority: addFormData.priority,
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNo: addFormData.phoneNo,
      email: addFormData.email,
    };
    const newData = [...data, newContact];
    setData(newData);
    localStorage.setItem("crud-table-data", JSON.stringify(newData));
    // clear inputs
    refVals.forEach((items) => {
      items.current.value = "";
    });
  };
  // submit edited forms
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const editedData = {
      id: editDataId,
      priority: editFormData.priority,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNo: editFormData.phoneNo,
      email: editFormData.email,
    };
    const newData = [...data];
    const index = data.findIndex((item) => item.id === editDataId);
    newData[index] = editedData;
    setData(newData);
    localStorage.setItem("crud-table-data", JSON.stringify(newData));
    setEditDataId(null);
  };
  // edit button
  const handleEditClick = (e, data) => {
    e.preventDefault();
    setEditDataId(data.id);
    const formValues = {
      priority: data.priority,
      fullName: data.fullName,
      address: data.address,
      phoneNo: data.phoneNo,
      email: data.email,
    };
    setEditFormData(formValues);
  };
  // cancel button
  const handleCancelClick = () => {
    setEditDataId(null);
  };
  // delete
  const handleDeleteClick = (contactId) => {
    const newData = [...data];
    const index = data.findIndex((contact) => contact.id === contactId);
    newData.splice(index, 1);
    setData(newData);
    localStorage.setItem("crud-table-data", JSON.stringify(newData));
  };
  // load data from localStorage per each change
  useEffect(() => {
    const savedData = localStorage.getItem("crud-table-data");
    const parsedData = JSON.parse(savedData);
    setData(parsedData);
  }, []);
  // reorder tables based on priority
  const [reorderedData, setReOrderedData] = useState([]);
  useEffect(() => {
    const sortedData = data.sort((a, b) => a.priority - b.priority);
    setReOrderedData(sortedData);
  }, [data]);

  return (
    <>
      <form onSubmit={handleEditFormSubmit}>
        {data.length > 0 && (
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr className="text-center">
                <th width="1">Priority</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th width="1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reorderedData.map((item) => (
                <React.Fragment key={item.id}>
                  {editDataId === item.id ? (
                    <Editable
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnly
                      data={item}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        )}
      </form>
      {/* add new data */}
      <form
        onSubmit={handleAddFormSubmit}
        className="d-flex justify-content-center"
      >
        <div className="mt-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              className="m-1"
              type="number"
              name="priority"
              min={0}
              required
              placeholder="Enter the priority..."
              onChange={handleAddFormChange}
              ref={priorityVal}
            />
            <Form.Control
              className="m-1"
              type="text"
              name="fullName"
              required
              placeholder="Enter the name..."
              onChange={handleAddFormChange}
              ref={nameVal}
            />
            <Form.Control
              className="m-1"
              type="email"
              name="email"
              required
              placeholder="Enter the email..."
              onChange={handleAddFormChange}
              ref={emailVal}
            />
            <Form.Control
              className="m-1"
              type="number"
              min={0}
              name="phoneNo"
              required
              placeholder="Enter the phoneNo..."
              onChange={handleAddFormChange}
              ref={phoneNoVal}
            />
            <Form.Control
              className="m-1"
              type="text"
              name="address"
              required
              placeholder="Enter the address..."
              onChange={handleAddFormChange}
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
