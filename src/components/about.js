import React from 'react';
import PropTypes from 'prop-types';
import GuestLayout from './guest-layout';

const Column = (props) => {
  const { title, description, link } = props;
  return (
    <div className="column">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {title}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {description}
            {' '}
            {!!link.length && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Read more
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
Column.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default () => (
  <GuestLayout>
    <section className="hero is-primary is-bold is-medium"> 
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2">
            Summary
          </h1>
        </div>
      </div>
    </section>
    <section className="m-t-lg">
      <div className="container p-l-md p-r-md">
        <div className="box">
          <h3 className="subtitle is-5">
            > Located in Seattle, Washington
          </h3>
          <h3 className="subtitle is-5">
            > Language familiarity: C++, C#, C, Java, Python, HTML, CSS, JavaScript, GoLang, Assembly, PowerShell, Transact-SQL
          </h3>
          <h3 className="subtitle is-5">
            > Experience building responsive, RESTful web programs that use custom routing and libraries such as Node and React.js
          </h3>
          <h3 className="subtitle is-5">
            > Comfortable with Windows/Unix environments as well as using the CLI
          </h3>
          <h3 className="subtitle is-5">
            > Have worked with RESTful APIs in various instances, including development in JavaScript and Python for personal projects, as well as in PowerShell scripts for http request automation while working at NetApp
          </h3>
          <h3 className="subtitle is-5">
            > Experience with version control software such as Git/GitHub on personal and group projects
          </h3>
          <h3 className="subtitle is-5">
            > Familiarity with VM management using Hyper-V in addition to container services such as Docker
          </h3>
          <h3 className="subtitle is-5">
            > Have designed and implemented SQL database residing on Azure for the purpose of storing highly available user data
          </h3>
        </div>
      </div>
    </section>
    <br/>
    <section className="hero is-primary is-bold is-medium"> 
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2">
            Education
          </h1>
        </div>
      </div>
    </section>
    <section className="m-t-lg">
      <div className="container p-l-md p-r-md">
        <div className="box">
          <h3 className="title is-3">
            Seattle Pacific University
          </h3>
          <h3 className="subtitle is-5">
            Bachelor of Computer Science (September 2017 - June 2019)
          </h3>
        </div>
        <div className="box">
          <h3 className="title is-3">
            Everett Community College
          </h3>
          <h3 className="subtitle is-5">
            Computer Science Transfer Degree (September 2014 - June 2017)
          </h3>
        </div>
      </div>
    </section>
    <br/>
    <section className="hero is-primary is-bold is-medium"> 
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2">
            Work History
          </h1>
        </div>
      </div>
    </section>
    <section className="m-t-lg">
      <div className="container p-l-md p-r-md">
        <div className="box">
          <h3 className="title is-3">
            NetApp
          </h3>
          <h3 className="subtitle is-5">
            Assisted in the administration of the Bellevue lab environment, including management of 
            on-premises servers and data storage. During tenure, I explored IT and data management 
            concepts, including cloud storage management using NetApp software on Amazon Web Services, 
            as well as VM management (Hyper-V) and containerization (Docker, K8s). Much of the work 
            done was also able to eventually be automated with the use of PowerShell scripts written 
            by myself. Was also fortunate enough to work directly with developers of NetApp products 
            such as those working on the Cloud Volumes Service, as well as shadow their more senior 
            Technical Marketing Engineers while on the job.
          </h3>
        </div>
        <div className="box">
          <h3 className="title is-3">
            Safeway
          </h3>
          <h3 className="subtitle is-5">
            Worked full-time while taking classes at EvCC, during which I was developing soft skills 
            through customer facing work involving frequent social interaction and conflict resolution.
          </h3>
        </div>
      </div>
    </section>
    <br/>
    <section className="hero is-primary is-bold is-medium"> 
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2">
            Related Coursework
          </h1>
        </div>
      </div>
    </section>
    <section className="m-t-lg">
      <div className="container p-l-md p-r-md">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-3 is-child">
              <p className="subtitle box">C++ Fundamentals</p>
            </div>
            <div className="tile is-3 is-child">
              <p className="subtitle box">Advanced Data Structures</p>
            </div>
            <div className="tile is-3 is-child">
              <p className="subtitle box">Java II</p>
            </div>
            <div className="tile is-3 is-child">
              <p className="subtitle box">Systems Design</p>
            </div>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-3 is-child">
              <p className="subtitle box">Concepts in Programming Languages</p>
            </div>
            <div className="tile is-3 is-child">
              <p className="subtitle box">Algorithm Design and Analysis</p>
            </div>
            <div className="tile is-3 is-child">
              <p className="subtitle box">Applications Programming</p>
            </div>
            <div className="tile is-3 is-child">
              <p className="subtitle box">Netcentric Computing</p>
            </div>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-3 is-child">
              <p className="subtitle box">Computer Networks</p>
            </div>
            <div className="tile is-3 is-child">
              <p className="subtitle box">Operating Systems Programming</p>
            </div>
            <div className="tile is-3 is-child">
              <p className="subtitle box">Advanced Programming</p>
            </div>
            <div className="tile is-3 is-child">
              <p className="subtitle box">Software Engineering I & II</p>
            </div>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-4 is-child">
              <p className="subtitle box">Computer Org. and Assembly Language</p>
            </div>
            <div className="tile is-4 is-child">
              <p className="subtitle box">Theory of Computation and Algorithms</p>
            </div>
            <div className="tile is-4 is-child">
              <p className="subtitle box">Information and Database Systems</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
    </section>

  </GuestLayout>
);
