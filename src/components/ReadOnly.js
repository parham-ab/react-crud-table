// icons
import { FiEdit2 } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

const ReadOnly = ({ data }) => {
  return (
      <tr key={data.id}>
        {/* <td>{data.priority}</td> */}
        <td>{data.fullName}</td>
        <td>{data.email}</td>
        <td>{data.phoneNo}</td>
        <td>{data.address}</td>
        <td>
          <span className="text-warning">
            <FiEdit2 />
          </span>
          <span className="text-danger">
            <TiDeleteOutline />
          </span>
        </td>
      </tr>
  );
};

export default ReadOnly;
