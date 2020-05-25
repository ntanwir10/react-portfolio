import React from "react";

function Resume(props) {
  const { year, position, course, university, company, details, location } = props.resumeData;
  return (
    <div className="resume mt-30">
      <div className="resume-summary">
        <h6 className="resume-year">{year}</h6>
      </div>
      <div className="resume-details">
        <h5>{position || course}</h5>
        <h6 className="resume-company">{company || university}</h6>
        <p><i className="lni lni-map-marker"></i>{location}</p>
        <p className="description">{details}</p>
      </div>
    </div>
  );
};

export default Resume;
