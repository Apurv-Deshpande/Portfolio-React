import React from "react";
import { Helmet } from "react-helmet";
import Project from "./Project";
import { ProjectData} from "../data/projects.js";
import CardColumns from "react-bootstrap/CardColumns";

class Portfolio extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const proj_all = [];
    for (let i = 0; i < ProjectData.length; i++) {
      let proj = <Project key={i} data={ProjectData[i]} />;
      proj_all.push(proj);
    }
    return (
      <>
        <Helmet>
          <title>Portfolio | Apurv Deshpande</title>
        </Helmet>
        <div className="portfolio-header">
          <h1>Apurv's Portfolio</h1>
          <p>
            Below you can find a collection of my work sorted by project type.
            Each project may either have a live demo or a download link along
            with a link to the project on GitHub.
          </p>
          <CardColumns>{proj_all}</CardColumns>
        </div>
      </>
    );
  }
}

export default Portfolio;
