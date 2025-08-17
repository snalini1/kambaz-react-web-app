// src/Kambaz/Courses/Modules/GreenCheckmark.tsx
import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span className="me-1 position-relative">
      <FaCheckCircle className="text-success position-absolute fs-5" style={{ top: "2px" }} />
      <FaCircle className="text-white fs-6" />
    </span>
  );
}