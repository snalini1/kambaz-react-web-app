import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <Table striped>
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Nalini</span>{" "}
                        <span className="wd-last-name">Singh</span></td>
                        <td className="wd-login-id">00123456S1</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2025-01-04</td>
                        <td className="wd-total-activity">08:47:22</td></tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Abhyuday</span>{" "}
                        <span className="wd-last-name">Singh</span></td>
                        <td className="wd-login-id">00123456S2</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2025-01-02</td>
                        <td className="wd-total-activity">09:10:59</td></tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Amit</span>{" "}
                        <span className="wd-last-name">Singh</span></td>
                        <td className="wd-login-id">00123456S3</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2025-01-07</td>
                        <td className="wd-total-activity">12:00:00</td></tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Monalisa</span>{" "}
                        <span className="wd-last-name">Singh</span></td>
                        <td className="wd-login-id">00123456S4</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2025-01-01</td>
                        <td className="wd-total-activity">04:10:07</td></tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Sourabh</span>{" "}
                        <span className="wd-last-name">Singh</span></td>
                        <td className="wd-login-id">00123456S5</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2025-01-08</td>
                        <td className="wd-total-activity">00:00:33</td></tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Jai</span>{" "}
                        <span className="wd-last-name">Kulkarni</span></td>
                        <td className="wd-login-id">00123456S6</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2025-01-05</td>
                        <td className="wd-total-activity">10:25:00</td></tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Om</span>{" "}
                        <span className="wd-last-name">Watson</span></td>
                        <td className="wd-login-id">00123456S7</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2025-01-01</td>
                        <td className="wd-total-activity">23:01:59</td></tr>
                </tbody>
            </Table>
        </div>);
}