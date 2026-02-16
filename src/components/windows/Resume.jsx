import React from "react";
import MackWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({ windowName, setWindowsState }) => {
  return (
    <MackWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="resume-window">
        <embed src="/resume.pdf" frameborder="0"></embed>
      </div>
    </MackWindow>
  );
};

export default Resume;
