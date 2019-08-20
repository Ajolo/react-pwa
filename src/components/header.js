import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleMenuBar(e) {
    const { open } = this.state;
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.setState({
      open: !open,
    });
  }

  closeMenuBar() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div className="hero-head">
      <section className="hero is-primary is-bold is-medium">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className=" navbar-item"><strong>Alex J. Lopez</strong></Link>
              <button
                type="button"
                onClick={e => this.toggleMenuBar(e)}
                className={`navbar-burger ${open ? 'is-active' : ''}`}
                aria-label="menu"
                aria-expanded="false"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                }}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
            <div className={`navbar-menu ${open ? 'is-active' : ''}`}>
              <Link className="navbar-item" to="/contact" onClick={() => this.closeMenuBar()}>
                Contact
              </Link>
              <Link className="navbar-item" to="/projects" onClick={() => this.closeMenuBar()}>
                Projects
              </Link>
              <div className="navbar-end">
                <span className="navbar-item">
                  <a
                    className="button is-primary is-inverted"
                    href="https://github.com/ajolo"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => this.closeMenuBar()}
                  >
                    GitHub
                  </a>
                </span>
                <span className="navbar-item">
                  <a
                    className="button is-primary is-inverted"
                    href="https://www.linkedin.com/in/alex-joel-lopez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => this.closeMenuBar()}
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </section>
      </div>
    );
  }
}
