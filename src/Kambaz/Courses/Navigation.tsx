import { Link, useParams } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to={`/Kambaz/Courses/${cid}/Home`}
        className="list-group-item active border border-0"
      >
        Home
      </Link>
      <Link
        to={`/Kambaz/Courses/${cid}/Modules`}
        className="list-group-item text-danger border border-0"
      >
        Modules
      </Link>
      <Link
        to={`/Kambaz/Courses/${cid}/Piazza`}
        className="list-group-item text-danger border border-0"
      >
        Piazza
      </Link>
      <Link
        to={`/Kambaz/Courses/${cid}/Zoom`}
        className="list-group-item text-danger border border-0"
      >
        Zoom
      </Link>
      <Link
        to={`/Kambaz/Courses/${cid}/Assignments`}
        className="list-group-item text-danger border border-0"
      >
        Assignments
      </Link>
      <Link
        to={`/Kambaz/Courses/${cid}/Quizzes`}
        className="list-group-item text-danger border border-0"
      >
        Quizzes
      </Link>
      <Link
        to={`/Kambaz/Courses/${cid}/People`}
        className="list-group-item text-danger border border-0"
      >
        People
      </Link>
    </div>
  );
}