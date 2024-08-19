import React from "react";
import resume from "../assets/cv-dolor.edwin.pdf";

const Resume = () => {
    return (
        <a
            href={resume}
            download="Edwin-Dolor-Resume.pdf"
            className="border-2 border-secondary text-secondary px-10 py-3 rounded"
        >
            Download My Resume
        </a>
    );
};

export default Resume;
