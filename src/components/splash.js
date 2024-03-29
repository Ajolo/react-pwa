import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <section className="hero is-primary is-fullheight is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
            Alex J. Lopez
        </h1>
        <h2 className="subtitle">
            Recent CompSci Grad of Seattle Pacific University
        </h2>
        <Link to="/about" className="button">Continue</Link>
      </div>
    </div>
  </section>
);
