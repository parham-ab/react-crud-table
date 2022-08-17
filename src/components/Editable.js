// bootstrap
import Form from "react-bootstrap/Form";

const Editable = () => {
  return (
    <>
      <tr>
        {/* <td>{item.priority}</td> */}
        <td>
          <Form.Control
            className="m-1"
            type="text"
            name="fullName"
            required
            placeholder="Enter the name..."
            //   onChange={addFormHandle}
            //   ref={nameVal}
          />
        </td>
        <td>
          <Form.Control
            className="m-1"
            type="text"
            name="email"
            required
            placeholder="Enter the email..."
            //   onChange={addFormHandle}
            //   ref={nameVal}
          />
        </td>
        <td>
          <Form.Control
            className="m-1"
            type="text"
            name="phoneNo"
            required
            placeholder="Enter the PhoneNo..."
            //   onChange={addFormHandle}
            //   ref={nameVal}
          />
        </td>
        <td>
          <Form.Control
            className="m-1"
            type="text"
            name="address"
            required
            placeholder="Enter the Address..."
            //   onChange={addFormHandle}
            //   ref={nameVal}
          />
        </td>
      </tr>
    </>
  );
};

export default Editable;
