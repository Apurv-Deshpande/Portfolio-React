import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class HeaderItem extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let innerLink = (
      <div className="hover-typewriter">{this.props.info.title}</div>
    );
    let link = (
      <Link to={this.props.info.url} className="nav-link">
        {innerLink}
      </Link>
    );

    return <>{link}</>;
  }
}

class Header extends React.Component {
  constructor(props) {
    super();
    this.navItemInfos = [
      {
        title: "Home",
        url: "/home",
        side: "left"
      },
      {
        title: "Portfolio",
        url: "/portfolio",
        side: "left"
      },
      {
        title: "Resume",
        url: "/resume",
        side: "left"
      }

    ];
  }

  render() {
    let navItems = [];
    for (let i = 0; i < this.navItemInfos.length; i++) {
      navItems.push(
        <HeaderItem key={i} info={this.navItemInfos[i]}></HeaderItem>
      );
    }

    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">{navItems}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
