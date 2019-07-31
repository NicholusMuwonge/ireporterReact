/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './RecordFetch.scss';


const Logout = () => {
  sessionStorage.clear();
};

const RecordFetchComponent = ({ record }) => (

  <Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="cream">
      <div className="container">
        <strong className="title">iReporter</strong>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                        Incidents
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary-lg login" to="/none">Account</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary-lg signup" to="/login" onClick={Logout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {record && (record.length > 0 && true) && Array.isArray(record) ? record.map(item => (
      <div key={item}>
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <div className="title-section">
                <span>
                  <strong>
                    Title:
                    {' '}
                    <span className="text-uppercase" style={{ color: 'teal' }}>{item.record_title}</span>
                  </strong>
                </span>
                {item.record_type === 'intervention' ? <span className="type">{item.record_type}</span> : <span className="types">{item.record_type}</span> }
                <span>
                  <strong style={{ color: 'grey' }}> status: </strong>
                  {item.status}
                </span>
                <span>
                  <strong style={{ color: 'grey' }}>cordinates:</strong>
                  {item.record_geolocation}
                </span>
              </div>
              <strong style={{ color: 'grey', marginLeft: '25px' }}>
                      published on:
                <span style={{ marginLeft: '46px' }}>{item.record_placement_date}</span>
              </strong>
              <hr className="line" />
              {item.body}
            </div>
            <hr className="" />
            <div className="edit">
              <strong>
                <span>Edit</span>
                <span>Delete</span>
              </strong>
            </div>
          </div>
        </div>
      </div>
    )) : (
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <p style={{ color: 'grey', fontSize: '40px' }}>OOPPSs! There are no records to display. Go on and Create some new records</p>
          </div>
        </div>
      </div>
    )}
  </Fragment>
);

export default RecordFetchComponent;
