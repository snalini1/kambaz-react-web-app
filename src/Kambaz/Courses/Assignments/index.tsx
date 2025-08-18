import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButton from "../Modules/LessonControlButton";
import { LuNewspaper } from "react-icons/lu";
import AssignmentsControlButtons from "./AssignmentsControlButton";
import AssignmentsControls from "./AssignmentsControl";
import { IoCaretDown } from "react-icons/io5";

export default function Assignments() {
  return (
    <div>
      <AssignmentsControls />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />  <IoCaretDown /> ASSIGNMENTS <AssignmentsControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" /> <LuNewspaper className="me-2 fs-3" color="green" />
              <div className="wd-assignment-text ms-2">
                <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link d-block">A1: Introduction to Web Development</a>
                <span className="d-block">
                  <span style={{ color: '#DC3545' }}>Multiple Modules</span> | <b>Not available until </b> January 1 at 12:00am |</span>
                <span className="d-block"> <b>Due </b> January 7 at 11:59pm | 100pts </span>
              </div>
              <div className="ms-auto">
                <LessonControlButton />
              </div>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" /> <LuNewspaper className="me-2 fs-3" color="green" />

              <div className="wd-assignment-text ms-2">
                <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link" >A2: Website 1</a>
                <span className="d-block">
                  <span style={{ color: '#DC3545' }}>Multiple Modules</span> | <b>Not available until </b> January 7 at 12:00am |</span>
                <span className="d-block"> <b>Due </b> January 14 at 11:59pm | 100pts </span>
              </div>
              <div className="ms-auto">
                <LessonControlButton />
              </div>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" /> <LuNewspaper className="me-2 fs-3" color="green" />
              <div className="wd-assignment-text ms-2">
                <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link d-block">A3: Safe Website Checklist</a>
                <span className="d-block">
                  <span style={{ color: '#DC3545' }}>Multiple Modules</span> | <b>Not available until </b> January 14 at 12:00am |</span>
                <span className="d-block"> <b>Due </b> January 21 at 11:59pm | 100pts </span>
              </div>
              <div className="ms-auto">
                <LessonControlButton />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
