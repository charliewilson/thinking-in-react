import React from 'react'

const Header = ({ title }) =>
  <header>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <img
            alt="Logo ReactJS Academy"
            className="img-responsive logo-academy"
            src="/img/logo.png"
          />
          <div className="intro-text">
            <span className="skills">{title}</span>
          </div>
        </div>
      </div>
    </div>
  </header>

export default Header