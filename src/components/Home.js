import React from 'react';
import ResumeData from '../data/resume.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from "react-helmet";

import Project from '../components/Project';
import {ProjectData} from '../data/projects.js';
import SkillData from '../data/skills.json';

import { Link } from "react-router-dom";

class Home extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    let projectIndex = null;
    while (projectIndex === null) {
      let nextIndex = Math.floor(Math.random() * Math.floor(ProjectData.length));
      if (ProjectData[nextIndex].homepage) {
        projectIndex = nextIndex;
        break;



      }

    }


    let skills = [];
    for (let i = 0; i < SkillData.skills.length; i++) {
      skills.push(
        <span key={i} className="tech-tag">
          <span
            className={`tech-tag-icon tech-tag-${SkillData.skills[
              i
            ].toLowerCase()}`}
          ></span>
          {SkillData.skills[i]}
        </span>
      );
    }

    return (
      <>
        <Helmet>
          <title>Apurv Deshpande</title>
        </Helmet>
        <div className="portfolio-header">

          <h1>
            Apurv Deshpande
                </h1>
        </div>
        <Container className="home-page">
          <Row>
            <Col md={4}>
              <div className="home-section dark-border-box-shadow">
                <div>
                  <h1 className="home-header">Profile</h1>
                  <p className="res-bio">
                    {ResumeData.bio}
                  </p>
                  <h1 className="home-header">Contact</h1>
                  <ul>
                    <li>Phone: {ResumeData.contacts.phone}</li>
                    <li>Email: <a href={`mailto:${ResumeData.contacts.email}`}>{ResumeData.contacts.email}</a></li>
                    <li>Website: <a href={`https://${ResumeData.contacts.website}`}>{ResumeData.contacts.website}</a></li>
                    <li>GitHub: <a href={`https://github.com/${ResumeData.contacts.github}`}>github.com/{ResumeData.contacts.github}</a></li>
                  </ul>
                  <br />
                </div>
              </div>
            </Col>
            <Col md={5} style={{ padding: '0' }}>
              <div className="home-section dark-border-box-shadow" style={{ textAlign: 'center' }}>
                <h3>Random Project</h3>
                <Link to="/portfolio" style={{ paddingBottom: "20px" }}>View more in my portfolio</Link>
                <Project data={ProjectData[projectIndex]} />
              </div>
            </Col>
            <Col md={3}>
              <h2>Skills</h2>
              {skills}
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Home;
