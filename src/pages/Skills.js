import React, { useState, useEffect } from "react";
import axios from "axios";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("/api/skills").then((response) => {
      setSkills(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="skills-area  section  padding-top">
        <div className="container">
          <Sectiontitle title="My Skills" />
          <div className="skills">
            <div className="row">
              {skills.map((skill) => (
                <div className="col-lg-12 d-flex category" key={skill.Category}>
                  <div className="col-lg-5">
                    <h5>{skill.Category}</h5>
                  </div>
                  <div className="col-lg-7">
                    <p>{skill.Technologies}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Skills;
