import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const NavHeader = ({ count }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/history"  >History</Link>
              </li>
            </ul>


            <Link className="btn btn-default my-2 my-sm-0 m-3" to="/cartitems" aria-label="shoppingcart">
              <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" style={{ color: '#ffffff' }}></i>
              <span className='badge badge-warning' id='lblCartCount'> {count} </span>
            </Link>

          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.totalCount
  }
}
export default connect(mapStateToProps, null)(NavHeader);