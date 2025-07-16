// src/Kambaz/Courses/Modules/ModuleControlButtons.tsx
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaPlus className="fs-5 me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
