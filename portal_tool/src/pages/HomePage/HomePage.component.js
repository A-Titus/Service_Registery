import React from 'react';
import Category from '../../components/Category/Category.component';
import SearchApi from '../../components/Search/Search.component';
import './HomePage.styles.css';

const HomePage = () => (
    <div className='homepage'>
        <SearchApi placeholder='Search for Api' />
        <Category />
    </div>
)

export default HomePage;