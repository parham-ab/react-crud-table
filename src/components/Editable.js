// bootstrap
import Form from "react-bootstrap/Form";
// icons
import { BiSave } from "react-icons/bi";
import { MdNotInterested } from "react-icons/md";

const Editable = () => {
  return (
    <>
      <tr>
        {/* <td>{item.priority}</td> */}
        <td>
          <Form.Control
            className="m-1 text-center m-auto "
            type="text"
            name="fullName"
            required
            placeholder="Enter the name..."
            size="sm"
            //   onChange={addFormHandle}
            //   ref={nameVal}
          />
        </td>
        <td>
          <Form.Control
            className="m-1 text-center m-auto"
            type="text"
            name="email"
            required
            placeholder="Enter the email..."
            size="sm"
            //   onChange={addFormHandle}
            //   ref={nameVal}
          />
        </td>
        <td>
          <Form.Control
            className="m-1 text-center m-auto"
            type="text"
            name="phoneNo"
            required
            placeholder="Enter the PhoneNo..."
            size="sm"
            //   onChange={addFormHandle}
            //   ref={nameVal}
          />
        </td>
        <td>
          <Form.Control
            className="m-1 text-center m-auto"
            type="text"
            name="address"
            required
            placeholder="Enter the Address..."
            size="sm"
            //   onChange={addFormHandle}
            //   ref={nameVal}
          />
        </td>
        <td>
          <span className="text-info">
            <BiSave />
          </span>
          <span className="text-danger">
            <MdNotInterested />
          </span>
        </td>
      </tr>
    </>
  );
};

export default Editable;
