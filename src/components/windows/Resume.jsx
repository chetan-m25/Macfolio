import React from 'react'
import MackWindow from "./MacWindow";
import "./resume.scss";

const Resume = () => {
  return (
    <MackWindow>
        <div className="resume-window">
            <embed src="/public/resume.pdf" frameborder="0"></embed>
        </div>
    </MackWindow>
  )
}

export default Resume
