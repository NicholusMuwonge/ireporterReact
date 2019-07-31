import React, { Component, Fragment } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Fragment>
        <header>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner" role="listbox">
              {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
              <div
                className="carousel-item active"
                style={{ backgroundImage: "url('https://source.unsplash.com/KSdfplrJreg/1920x720')" }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="display-4">Community Incidents</h1>
                  <p className="">Get to raise the issues that impact your community</p>
                </div>
              </div>
              {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
              <div
                className="carousel-item"
                style={{ backgroundImage: "url('https://source.unsplash.com/udXD2NrbXS8/1920x720')" }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="display-4">Raise Corruption Related Crimes</h2>
                  <p className="lead">These are sensitive issues that hold your community aback, so raise them right away</p>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{ backgroundImage: "url('https://source.unsplash.com/lbLgFFlADrY/1920*720')" }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h2 className="display-4">Reconcile All the Community Differences</h2>
                  <p className="lead">We get further together and in Unisson compared to being of different sides.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </header>
      </Fragment>
    );
  }
}


export default Home;
