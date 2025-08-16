export default function Modules() {
    return (
      <div>
        <button>Collapse All</button>
        <button>View Progress</button>
        <select id="wd-publish">
         <option value="PUBLISHALL">Publish All</option>
         <option value="PUBLISHSONE">Publish One</option>
       </select>

        <button>+ Module</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1: 1/1 - 1/7</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">Lecture 1 (1/1): Introduction</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Syllabus</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Lecture 2 (1/4): History of Web Development</span>
                <ul className="wd-content">
                  <li className="wd-content-item">History of the internet</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Assignments</span>
                <ul className="wd-content">
                  <li className="wd-content-item">A1 (Due 1/7): Introduction to Web Development</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Exams</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Q1: History of Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2: 1/7 - 1/14</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">Lecture 3 (1/8): MERN Stack</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Creating a Website</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Lecture 4 (1/12): Deploying MERN Stack</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Publishing a Website</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Assignments</span>
                <ul className="wd-content">
                  <li className="wd-content-item">A2 (Due 1/14): Website 1</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Exams</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Q2: MERN Stack Facts</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 1: 1/14 - 1/21</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">Lecture 5 (1/15): CyberSecurity: Making your website safe</span>
                <ul className="wd-content">
                  <li className="wd-content-item">How to secure your website</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Lecture 6 (1/19): Really making sure your website is safe</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Really safe website examples</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Assignments</span>
                <ul className="wd-content">
                  <li className="wd-content-item">A3 (Due 1/21): Safe Websity Checklist</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Exams</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Q3: CyberSecurity</li>
                  <li className="wd-content-item">Q4: Cumulative Quiz</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
