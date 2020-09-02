import React from 'react';
import { withRouter } from 'react-router-dom';
import './Menu.styles.css';

const MenuCat = ({title, size, history, linkUrl, match}) => (
    <div className={`${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <h2 className='title'>{title.toUpperCase()}</h2>
    </div>
);

export default withRouter(MenuCat);