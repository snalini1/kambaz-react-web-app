import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>

      <h4>Nalini Singh</h4>

      <a
        id="wd-github"
        href="https://github.com/YOUR_USERNAME/kambaz-react-web-app"
        target="_blank"
        rel="noreferrer"
      >
        GitHub Repository
      </a>

      <TOC />

      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
);}