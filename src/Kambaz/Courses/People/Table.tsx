import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td>001234561S</td>
            <td>S101</td>
            <td>STUDENT</td>
            <td>2020-10-01T00:00:00.000Z</td>
            <td>10:21:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span>{" "}
              <span className="wd-last-name">Wayne</span>
            </td>
            <td>001234562S</td>
            <td>S101</td>
            <td>STUDENT</td>
            <td>2020-11-02T00:00:00.000Z</td>
            <td>15:32:43</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Steve</span>{" "}
              <span className="wd-last-name">Rogers</span>
            </td>
            <td>001234563S</td>
            <td>S101</td>
            <td>STUDENT</td>
            <td>2020-10-02T00:00:00.000Z</td>
            <td>23:32:43</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
