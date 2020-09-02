import React from 'react';
import { withRouter } from 'react-router-dom';
import './Apidata.styles.css';

const ApiCat = ({title}) => (
    <div>
        <h2 className='title1'>{title.toUpperCase()}</h2>
        <span className='subtitle'></span>
    </div>
);

export default withRouter(ApiCat);