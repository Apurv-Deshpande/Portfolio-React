import React from "react";
import ResumeData from "../data/resume.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";

import School from "./School";

class Resume extends React.Component {
  render() {
    let hobbies = [];
    for (let i = 0; i < ResumeData.hobbies.length; i++) {
      hobbies.push(<li key={i}>{ResumeData.hobbies[i]}</li>);
    }

    let titles = [];
    for (let i = 0; i < ResumeData.titles.length; i++) {
      titles.push(
        <h1 key={i} className="res-title">
          {ResumeData.titles[i]}
        </h1>
      );
    }

    let schools = [];
    for (let i = 0; i < ResumeData.schools.length; i++) {
      schools.push(<School key={i} data={ResumeData.schools[i]} />);
    }

    return (
      <>
        <Helmet>
          <title>Resume | Apurv Deshpande</title>
        </Helmet>
        <div className="portfolio-header">
          <h1>Apurv's Resume</h1>
        </div>

        <Container className="resume-page">
          <Row>
            <Col md={4}>
              <div className="resume-section border-box-shadow">
                <h1 className="resume-header">Profile</h1>
                <p className="res-bio">{ResumeData.bio}</p>
                <h1 className="resume-header">Contact</h1>
                <ul>
                  <li>Phone: {ResumeData.contacts.phone}</li>
                  <li>
                    Email:{" "}
                    <a href={`mailto:${ResumeData.contacts.email}`}>
                      {ResumeData.contacts.email}
                    </a>
                  </li>
                  <li>
                    Website:{" "}
                    <a href={`https://${ResumeData.contacts.website}`}>
                      {ResumeData.contacts.website}
                    </a>
                  </li>
                  <li>
                    GitHub:{" "}
                    <a
                      href={`https://github.com/${ResumeData.contacts.github}`}
                    >
                      github.com/{ResumeData.contacts.github}
                    </a>
                  </li>
                </ul>
                <br />
                <h1 className="resume-header">Interests</h1>
                <ul>{hobbies}</ul>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div className="resume-section">
                <h1 className="res-name">{ResumeData.name}</h1>
                {titles}
              </div>
              <div className="resume-section">
                <h1 className="res-header">Education</h1>
                {schools}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Resume;
