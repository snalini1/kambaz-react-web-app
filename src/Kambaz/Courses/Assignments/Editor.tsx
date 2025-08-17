export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h2>Edit Assignment</h2>

      {/* Assignment Name */}
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" value="Introduction to Web Development" /><br /><br />

      {/* Description */}
      <label htmlFor="wd-description">Description</label><br />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of your web app.
      </textarea>
      <br /><br />

      <table>
        <tbody>
          {/* Points */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" value={100} />
            </td>
          </tr>

          {/* Group */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr>

          {/* Display Grade As */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Points</option>
              </select>
            </td>
          </tr>

          {/* Submission Type */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>On Paper</option>
              </select>
            </td>
          </tr>

          {/* Online Entry Options */}
          <tr>
            <td align="right" valign="top">
              <label>Online Entry Options</label>
            </td>
            <td>
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label><br />

              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label><br />

              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />

              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />

              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Upload</label>
            </td>
          </tr>

          {/* Assign To */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>

          {/* Due Date */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" value="2025-01-07" />
            </td>
          </tr>

          {/* Available From */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" value="2025-01-01" />
            </td>
          </tr>

          {/* Until */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" value="2025-01-07" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
