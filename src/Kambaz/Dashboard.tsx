import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2345/Home" className="wd-dashboard-course-link">
            <img src="/images/nodejs.jpg" width={200} />
            <div>
              <h5>CS2345 Node.js</h5>
              <p className="wd-dashboard-course-title">Server-Side Programming</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3456/Home" className="wd-dashboard-course-link">
            <img src="/images/mongodb.jpg" width={200} />
            <div>
              <h5>CS3456 MongoDB</h5>
              <p className="wd-dashboard-course-title">NoSQL Databases</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4567/Home" className="wd-dashboard-course-link">
            <img src="/images/javascript.jpg" width={200} />
            <div>
              <h5>CS4567 JavaScript</h5>
              <p className="wd-dashboard-course-title">Frontend Fundamentals</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link">
            <img src="/images/typescript.jpg" width={200} />
            <div>
              <h5>CS5678 TypeScript</h5>
              <p className="wd-dashboard-course-title">Typed JS for React</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/6789/Home" className="wd-dashboard-course-link">
            <img src="/images/github.jpg" width={200} />
            <div>
              <h5>CS6789 Git & GitHub</h5>
              <p className="wd-dashboard-course-title">Version Control Basics</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/7890/Home" className="wd-dashboard-course-link">
            <img src="/images/htmlcss.jpg" width={200} />
            <div>
              <h5>CS7890 HTML & CSS</h5>
              <p className="wd-dashboard-course-title">Web Foundations</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}