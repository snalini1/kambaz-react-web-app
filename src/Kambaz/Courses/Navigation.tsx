import { Link, useParams, useLocation } from "react-router-dom";
import classNames from "classnames";

export default function CourseNavigation() {
  const { cid } = useParams();
  const location = useLocation();

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div className="list-group">
      {links.map((link) => {
        const path = `/Kambaz/Courses/${cid}/${link}`;
        const isActive = location.pathname.includes(path);

        return (
          <Link
            key={link}
            to={path}
            className={classNames("list-group-item list-group-item-action", {
              active: isActive,
            })}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}


const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];