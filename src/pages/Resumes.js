import React, { useState, useEffect } from "react";
import axios from "axios";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Layout from "../components/Layout";
import Resume from "../components/Resume";

function Resumes() {
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get("/api/experience").then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
    });
  }, []);

  return (
    <Layout>
      <div className="resume-area section padding-top padding-bottom">
        <div className="container">
          <Sectiontitle title="Resume" />
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="resume-wrapper">
            {educationExperience.map((educatonExp) => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>

          <div className="mt-30"></div>
          <Smalltitle title="Working Experience" icon="briefcase" />
          <div className="resume-wrapper">
            {workingExperience.map((workingExp) => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
