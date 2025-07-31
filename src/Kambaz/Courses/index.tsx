import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../Database";
import { useParams, useLocation } from "react-router";

export default function Courses() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  const course = courses.find((course) => course._id === cid);

  // Extract section name from path like /Kambaz/Courses/CS1234/Modules
  const section = pathname.split("/")[4]; // "Modules", "Assignments", etc.

  if (!course) {
    return <h2 className="text-danger">Course not found</h2>;
  }

  return (
    <div id="wd-courses">
      <h2 className="text-danger d-flex align-items-center">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course.name}
        {section && <span className="ms-2"> &gt; {section}</span>}
      </h2>

      <div className="mb-3">
        <strong>Course Code:</strong> {course.number} <br />
        <strong>Department:</strong> {course.department} <br />
        <strong>Credits:</strong> {course.credits} <br />
        <strong>Dates:</strong> {course.startDate} – {course.endDate}
      </div>

      <div className="mb-3">
        <p>{course.description}</p>
      </div>
    </div>
  );
}
