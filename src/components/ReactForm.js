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
  const nameVal = useRef();
  const emailVal = useRef();
  const addressVal = useRef();
  const phoneNoVal = useRef();
  // states
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNo: "",
    email: "",
  });
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNo: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);
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
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNo: addFormData.phoneNo,
      email: addFormData.email,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    const newVal = [...contacts, newContact];
    setContacts(newVal);
    // clear inputs
    // --------------------
    nameVal.current.value = "";
    emailVal.current.value = "";
    addressVal.current.value = "";
    phoneNoVal.current.value = "";
  };
  // submit edited forms
  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNo: editFormData.phoneNo,
      email: editFormData.email,
    };

    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null);
  };
  // edit button
  const handleEditClick = (e, contacts) => {
    e.preventDefault();
    setEditContactId(contacts.id);

    const formValues = {
      fullName: contacts.fullName,
      address: contacts.address,
      phoneNo: contacts.phoneNo,
      email: contacts.email,
    };
    setEditFormData(formValues);
  };

  // cancel button
  const handleCancelClick = () => {
    setEditContactId(null);
  };
  // delete
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };
  // log data per each change
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <>
      <form onSubmit={handleEditFormSubmit}>
        {contacts.length > 0 && (
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th width="1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <React.Fragment key={contact.id}>
                  {editContactId === contact.id ? (
                    <Editable
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnly
                      contact={contact}
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
              type="text"
              name="fullName"
              required
              placeholder="Enter the name..."
              onChange={handleAddFormChange}
              ref={nameVal}
            />
            <Form.Control
              className="m-1"
              type="text"
              name="email"
              required
              placeholder="Enter the email..."
              onChange={handleAddFormChange}
              ref={emailVal}
            />
            <Form.Control
              className="m-1"
              type="text"
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
