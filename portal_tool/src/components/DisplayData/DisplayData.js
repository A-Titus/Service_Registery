import React from "react";
//import Api_list from './Api.data';
//import Apicat from "../ApiData/Apidata.component";
import "./DisplayData.css";
//import './Api.data.js';

import axios from "axios";
//import { Link } from "react-router-dom";

class DisplayData extends React.Component {
  state = {
    api: []
  };

  componentDidMount() {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/${params.id}`).then(res => {
      this.setState({ api: res.data });
    });
  }

  render() {
    return (
      <div className="Api-Data">
        <h5>Api Name</h5>
        <p>{this.state.api.apiName}</p>
        <hr />
        <h5>Category</h5>
        <p>{this.state.api.category}</p>
        <hr />
        <h5>Description</h5>
        <p>{this.state.api.description}</p>
        <hr />
        <h5>Summary</h5>
        <p>{this.state.api.summary}</p>
        <hr />
        <h5>Creator</h5>
        <p>{this.state.api.creatorName}</p>
        <hr />
        <h5>Date</h5>
        <p>{this.state.api.date}</p>
        <hr />
        <a href="https://swagger.io/">Swagger Test Link</a>
      </div>
    );
  }
}

export default DisplayData;
