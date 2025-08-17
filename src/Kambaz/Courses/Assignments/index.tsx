export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input placeholder="Search for Assignments"
               id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              Introduction to Web Development
            </a> 
            <div id="wd-p-1">
              Multiple Modules | Not available until Jan 1 at 12:00am 
              | Due Jan 7 at 11:59pm | 100pts
            </div>
            </li>
          <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              Website 1
            </a>
            <div id="wd-p-1">
            Multiple Modules | Not available until Jan 7 at 12:00am | Due Jan 14 at 11:59pm | 100pts
            </div>
          </li>
          <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              Safe Website Checklist
            </a>
            <div id="wd-p-1">
            Multiple Modules | Not available until Jan 14 at 12:00am | Due Jan 21 at 11:59pm | 100pts
            </div>
          </li>
        </ul>
      </div>
  );}
