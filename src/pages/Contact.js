import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";

function Contact() {
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    axios.get("/api/contactinfo").then((response) => {
      setPhoneNumber(response.data.phoneNumber);
      setEmailAddress(response.data.emailAddress);
      setAddress(response.data.address);
    });
  }, []);

  return (
    <Layout>
      <div className=" contact-area  section  padding-top  padding-bottom">
        <div className="container">
          <Sectiontitle title="Contact Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-info">
                {!phoneNumber ? null : (
                  <div className="contact-infoblock">
                    <span className="contact-infoblock-icon">
                      <Icon.Phone />
                    </span>
                    <div className="contact-infoblock-content">
                      <h6>Phone</h6>
                      {/* <p>{phoneNumber}</p> */}
                      <a href={phoneNumber} rel="nofollow">
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-info">
                {!emailAddress ? null : (
                  <div className="contact-infoblock">
                    <span className=" contact-infoblock-icon">
                      <Icon.Mail />
                    </span>
                    <div className="contact-infoblock-content">
                      <h6>Email</h6>
                      {emailAddress.map((email) => (
                        <p key={email}>
                          <a href={`mailto:${email}`}>{email}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-info">
                {!phoneNumber ? null : (
                  <div className="contact-infoblock">
                    <span className="contact-infoblock-icon">
                      <Icon.MapPin />
                    </span>
                    <div className="contact-infoblock-content">
                      <h6>Address</h6>
                      <p>{address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
