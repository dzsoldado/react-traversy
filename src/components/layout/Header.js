import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Header = (props)=>{
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
      <div className="container">
        <a href="/" className="text-white navbar-brand">{props.pageName}</a>
      
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
              <ion-icon name="home-outline"></ion-icon>
              Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
              <ion-icon name="information-circle-outline"></ion-icon>
              About</Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
              <ion-icon name="add-circle-outline"></ion-icon>
              Add</Link>
            </li>    
          </ul>
        </div>
      </div>
    
    </nav>
  )
}

Header.defaultProps = {
  pageName: "Constacts"
}

Header.propTypes = {
  pageName: PropTypes.string.isRequired
}

export default Header
