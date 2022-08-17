// bootstrap
import { Table } from "react-bootstrap";
// icons
import { FiEdit2 } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

const ReactForm = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark" size="sm" responsive>
        <thead className="text-center">
          <tr>
            <th width="1">Priority</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th width="1">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <span className="text-warning">
                <FiEdit2 />
              </span>
              <span className="text-danger">
                <TiDeleteOutline />
              </span>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <span className="text-warning">
                <FiEdit2 />
              </span>
              <span className="text-danger">
                <TiDeleteOutline />
              </span>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Larry the Bird</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>@twitter</td>
            <td>
              <span className="text-warning">
                <FiEdit2 />
              </span>
              <span className="text-danger">
                <TiDeleteOutline />
              </span>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>@twitter</td>
            <td>
              <span className="text-warning">
                <FiEdit2 />
              </span>
              <span className="text-danger">
                <TiDeleteOutline />
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ReactForm;
