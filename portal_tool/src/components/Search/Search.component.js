import React from 'react';
import './Search.styles.css';


class CateGory extends React.Component {
    constructor() {
        super();

        this.state = {
            searchField: ''
        }
    }

    render() {
        return (
            <div className='search'>
                <input
                className='search2'
                type='search'
                placeholder='Search'
                onChange={e => console.log(e.target.value)}
                />
            </div>
        );
    }
}

export default CateGory;