import { Form } from "react-bootstrap";
// icons
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Editable = ({
  handleEditFormChange,
  editFormData,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            className="text-center"
            type="text"
            name="fullName"
            required
            placeholder="Enter the name..."
            value={editFormData.fullName}
            onChange={handleEditFormChange}
          />
        </Form.Group>
      </td>
      <td>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            className="text-center"
            type="text"
            name="address"
            required
            placeholder="Enter the address..."
            value={editFormData.address}
            onChange={handleEditFormChange}
          />
        </Form.Group>
      </td>
      <td>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            className="text-center"
            type="text"
            name="phoneNo"
            required
            placeholder="Enter the phoneNo..."
            value={editFormData.phoneNo}
            onChange={handleEditFormChange}
          />
        </Form.Group>
      </td>
      <td>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            className="text-center"
            type="text"
            name="email"
            required
            placeholder="Enter the email..."
            value={editFormData.email}
            onChange={handleEditFormChange}
          />
        </Form.Group>
      </td>
      <td>
        <button className="text-info" style={{ background: "transparent" }}>
          <FaSave type="submit" />
        </button>
        <span className="text-danger" type="button" onClick={handleCancelClick}>
          <MdCancel />
        </span>
      </td>
    </tr>
  );
};

export default Editable;
