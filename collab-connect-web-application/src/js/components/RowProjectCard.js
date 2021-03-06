import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/frameworks/normalize.css";
import ProjectCard from "./ProjectCard";

// Things to consider

//  - use className instead of class
//  - self closing tag must be closed with a slash
//     - example: <img />
//  - this is not html, it is jsx
//  - all styles must follow camelCase format
//     - background-color becomes backgroundColor
//     - onclick becomes onClick
//  - you can use {} inside of attributes and text nodes
//     - inside the curly you can put any js expressions
//  - You can add example image using this link
//     - https://picsum.photos/width/height
//     - Be sure to change the width and height

class RowProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: this.props.projectData,
    };
    // any method using this keyword must bind
    // example: this.method = this.method.bind(this)
  }

  componentDidMount() {
    // Things to do when the component is first rendered into the dom
  }

  componentWillUnmount() {
    // Things to do when the component is removed
  }

  render() {
    const columns = this.props.projectData.map((value, index) => {
      return (
        <div className="col-sm mx-2" key={index}>
          <ProjectCard projectCardData={value} />
        </div>
      );
    });

    return (
      <div className="RowProjectCard">
        <div className="row">{columns}</div>
      </div>
    );
  }
}

export default RowProjectCard;

/*
<div className="RowProjectCard">
        <div className="row">
          <div className="col-sm mx-2">
            <ProjectCard projectCardData={this.state.projectData[0]} />
          </div>
          <div className="col-sm mx-2">
            <ProjectCard projectCardData={this.state.projectData[1]} />
          </div>
          <div className="col-sm mx-2">
            <h1>Hello World</h1>
          </div>
        </div>
      </div>
*/
