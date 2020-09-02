import React from "react";
//import Api_list from './Api.data';
import Apicat from "../ApiData/Apidata.component";
import "./ApiCollection.styles.css";
//import './Api.data.js';

import { Link } from "react-router-dom";
import axios from "axios";

class ApiCollection extends React.Component {
  constructor() {
    super();

    this.state = {
      api: []
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    console.log(params.id);
    axios.get(`http://localhost:5000/api/category/${params.id}`).then(res => {
      this.setState({ api: res.data });
    });
  }

  render() {
    return (
      <div className="category1-menu">
        {this.state.api.map(api => (
          <Link to={`/api/${api._id}`} key={api._id} className='api-content'>
            <Apicat title={api.apiName} />
          </Link>
        ))}
      </div>
    );
  }
}

export default ApiCollection;
