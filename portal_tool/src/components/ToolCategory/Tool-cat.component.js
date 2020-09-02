import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../CustomButton/button.component';
import './Tool-cat.styles.scss';
import axios from "axios";

class CateGory extends React.Component {
    constructor() {
        super();

        this.state = {
            ApiCategory: ''
        }
    }

    handleSubmit = async event => {
        axios
        .post("http://localhost:5000/categories/", {
            category: this.state.ApiCategory
        })
        .then(res => {
            console.log(res.data);
            alert("catagory added sucessfully")
        });
        console.log(this.state.ApiCategory);
    };
    
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
        
    }

    render() {
        return (
            <div className='cat-tool'>
                <h2 className='title'>The Api Category</h2>
                <span>Add The Category Api if not available.</span>
                <form onSubmit={this.handleSubmit}>
                     <FormInput
                     type='text'
                     name='ApiCategory'
                     value={this.state.ApiCategory}
                     onChange={this.handleChange}
                     label='API Category'
                     required
                     />
                    <CustomButton type='submit'>SUBMIT</CustomButton>
                </form>
            </div>
        )
    }
}

export default CateGory;