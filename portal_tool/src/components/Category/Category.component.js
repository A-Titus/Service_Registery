import React from 'react';
import MenuCat from '../MenuCategory/Menu.component';
import './Category.styles.css';

import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      perPage: 6,
      currentPage: 0,
    };
  }

  receivedData() {
    axios.get(`http://localhost:5000/categories/`).then((res) => {
      const data = res.data;
      console.log(res.data);

      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      //console.log(slice);

      const postData = slice.map((pd) => (
        <React.Fragment key={pd._id}>
          {/* <p>{pd.category}</p> */}
          <Link
            to={`/api/category/${pd.category}`}
            key={pd._id}
            className="menu-content"
          >
            <MenuCat title={pd.category} />
          </Link>
        </React.Fragment>
      ));
      //console.log(postData);

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),

        postData,
      });
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    this.receivedData();
  }

  render() {
    //console.log(this.state.postData);
    return (
      <div className="category-menu">
        {this.state.postData}
        <div>
          <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            // breakLabel={'...'}
            // breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            //subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    );
  }
}

export default Pagination;
