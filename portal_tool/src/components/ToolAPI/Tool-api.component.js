import React from 'react';
import CustomButton from '../CustomButton/button.component';
import FormInput from '../form-input/form-input.component';
import './Tool-api.styles.scss';
import axios from 'axios';

class ApiSub extends React.Component {
  constructor() {
    super();

    this.state = {
      categoryOptions: [],
      ApiName: '',
      category: '',
      description: '',
      Apiauthor: '',
      // date: '',
      summary: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/categories/')
      .then((res) => {
        var mapper = [];

        for (const category of res.data)
          mapper.push({
            value: category['category'],
            label: category['category'],
            id: category['_id'],
          });

        this.setState({ categoryOptions: mapper });
        console.log(mapper);
        console.log('ha ha ha');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSubmit = async (event) => {
    axios.post('http://localhost:5000/api/', {
      apiName: this.state.ApiName,
      category: this.state.category,
      description: this.state.description,
      creatorName: this.state.Apiauthor,
      summary: this.state.summary,
    });

    axios.post('http://localhost:5000/categories/', {
      category: this.state.category,
    });
    alert('api added successfully');
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    let options = this.state.categoryOptions.map((data) => (
      <option key={data.id} value={data.value}>
        {data.label}
      </option>
    ));
    return (
      <div className="api">
        <h2 className="title">The API</h2>
        <span>Add the required API if not available.</span>
        <form className="api-section" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="ApiName"
            value={this.state.ApiName}
            onChange={this.handleChange}
            label="Api Name"
            required
          />
          <FormInput
            type="select"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            label="Category"
            options={options}
            required
          >
            <option disabled hidden></option>
            {options}
          </FormInput>
          <FormInput
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            label="description"
            required
          />
          <FormInput
            type="text"
            name="Apiauthor"
            value={this.state.Apiauthor}
            onChange={this.handleChange}
            label="Author API Name"
            required
          />
          {/* <FormInput
            type="text"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
            label="Date"
            required
          /> */}
          <FormInput
            type="text"
            name="summary"
            value={this.state.summary}
            onChange={this.handleChange}
            label="API Summary"
            required
          />
          <CustomButton type="submit">SUBMIT</CustomButton>
        </form>
      </div>
    );
  }
}

export default ApiSub;
