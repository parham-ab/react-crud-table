// icons
import { MdDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

const ReadOnly = ({ data, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="text-center">
      <td>{data.priority}</td>
      <td>{data.fullName}</td>
      <td>{data.address}</td>
      <td>{data.phoneNo}</td>
      <td>{data.email}</td>
      <td>
        <span
          type="button"
          onClick={(e) => handleEditClick(e, data)}
          className="text-warning"
        >
          <FiEdit2 />
        </span>
        <span
          type="button"
          onClick={() => handleDeleteClick(data.id)}
          className="text-danger"
        >
          <MdDelete />
        </span>
      </td>
    </tr>
  );
};

export default ReadOnly;
