import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">Shop Ahora!</span>
          </div>
        </div>
      </div>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jakects</h1>
            <span className="subtitle">Shop Ahora!</span>
          </div>
        </div>
      </div>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Snickers</h1>
            <span className="subtitle">Shop Ahora!</span>
          </div>
        </div>
      </div>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Womens</h1>
            <span className="subtitle">Shop Ahora!</span>
          </div>
        </div>
      </div>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Mans</h1>
            <span className="subtitle">Shop Ahora!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
