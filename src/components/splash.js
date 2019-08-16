import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
            Alex J. Lopez
        </h1>
        <h2 className="subtitle">
            Recent CS Grad of Seattle Pacific University
        </h2>
        <Link to="/home" className="button">Continue</Link>
      </div>
    </div>
  </section>
);
