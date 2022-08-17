import React from "react";
// icons
import { MdEdit, MdDelete } from "react-icons/md";

const ReadOnly = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="text-center">
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNo}</td>
      <td>{contact.email}</td>
      <td>
        <span
          type="button"
          onClick={(e) => handleEditClick(e, contact)}
          className="text-warning"
        >
          <MdEdit />
        </span>
        <span
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
          className="text-danger"
        >
          <MdDelete />
        </span>
      </td>
    </tr>
  );
};

export default ReadOnly;
