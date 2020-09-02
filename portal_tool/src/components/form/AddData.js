// import React, { Component } from 'react';
// import './AppData.css';
// //import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === null && (valid = false);
//   });

//   return valid;
// };

// class AddData extends Component {
//   state = {
//     apiName: null,
//     category: null,
//     description: null,
//     creator: null,
//     summary: null,
//     formErrors: {
//       apiName: '',
//       category: '',
//       description: '',
//       creator: '',
//       summary: ''
//     }
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     if (formValid(this.state)) {
//       console.log(`--SUBMITTING--
//       Api: ${this.state.apiName})
//       category: ${this.state.category})
//       description: ${this.state.description})
//       creator: ${this.state.creator})
//       summary: ${this.state.summary}
//       `);
//     } else {
//       console.error('FORM INVALID-- DISPLAY ERROR MESSAGE');
//     }
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     let formErrors = { ...this.state.formErrors };

//     switch (name) {
//       case 'apiName':
//         formErrors.apiName =
//           value.length < 3 ? 'minimum 3 characaters required' : '';
//         break;
//       case 'category':
//         formErrors.category =
//           value === 'select category' ? 'choose a category' : '';
//         break;
//       case 'description':
//         formErrors.description =
//           value.length < 3 ? 'minimum 3 characaters required' : '';
//         break;
//       case 'creator':
//         formErrors.creator =
//           value.length < 6 ? 'minimum 6 characaters required' : '';
//         break;
//       case 'summary':
//         formErrors.summary =
//           value.length < 6 ? 'minimum 6 characaters required' : '';
//         break;
//       default:
//         break;
//     }

//     this.setState({ formErrors, [name]: value }, () => console.log(this.state));
//   };

//   render() {
//     const { formErrors } = this.state;
//     return (
//       <div className="container">
//         <div className="row">
//           <Form onSubmit={this.handleSubmit} noValidate className="addApi-form">
//             <h1>ADD API</h1>
//             <br />
//             <FormGroup row>
//               <Label htmlFor="apiName" sm={2}>
//                 API
//               </Label>
//               <Col sm={10}>
//                 <Input
//                   className={formErrors.apiName.length > 0 ? 'error' : null}
//                   type="text"
//                   name="apiName"
//                   noValidate
//                   onChange={this.handleChange}
//                 />
//               </Col>
//               {formErrors.apiName.length > 0 && (
//                 <span className="errorMessage">{formErrors.apiName}</span>
//               )}
//             </FormGroup>
//             <FormGroup row>
//               <Label for="category" sm={2}>
//                 Category
//               </Label>
//               <Col sm={10}>
//                 <Input
//                   type="select"
//                   name="category"
//                   className={formErrors.category.length > 0 ? 'error' : null}
//                   onChange={this.handleChange}
//                 >
//                   <option>select category</option>
//                   <option>Bundles</option>
//                   <option>Sales</option>
//                   <option>Data</option>
//                   <option>7</option>
//                   <option>5</option>
//                 </Input>
//                 {formErrors.category.length > 0 && (
//                   <span className="errorMessage">{formErrors.category}</span>
//                 )}
//               </Col>
//             </FormGroup>
//             <FormGroup row>
//               <Label htmlFor="description" sm={2}>
//                 Description
//               </Label>
//               <Col sm={10}>
//                 <Input
//                   className={formErrors.description.length > 0 ? 'error' : null}
//                   type="text"
//                   name="description"
//                   noValidate
//                   onChange={this.handleChange}
//                 />
//               </Col>
//               {formErrors.description.length > 0 && (
//                 <span className="errorMessage">{formErrors.description}</span>
//               )}
//             </FormGroup>
//             <FormGroup row>
//               <Label htmlFor="summary" sm={2}>
//                 Summary
//               </Label>
//               <Col sm={10}>
//                 <Input
//                   className={formErrors.summary.length > 0 ? 'error' : null}
//                   type="text"
//                   name="summary"
//                   noValidate
//                   onChange={this.handleChange}
//                 />
//               </Col>
//               {formErrors.description.length > 0 && (
//                 <span className="errorMessage">{formErrors.summary}</span>
//               )}
//             </FormGroup>
//             <FormGroup row>
//               <Label htmlFor="creator" sm={2}>
//                 Creator
//               </Label>
//               <Col sm={10}>
//                 <Input
//                   className={formErrors.creator.length > 0 ? 'error' : null}
//                   type="text"
//                   name="creator"
//                   noValidate
//                   onChange={this.handleChange}
//                 />
//               </Col>
//               {formErrors.creator.length > 0 && (
//                 <span className="errorMessage">{formErrors.creator}</span>
//               )}
//             </FormGroup>
//             <div>
//               <Button style={{ backgroundColor: 'red' }}>Submit</Button>
//             </div>
//           </Form>
//         </div>
//       </div>
//     );
//   }
// }

// export default AddData;
