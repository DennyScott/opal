import React, { Component } from 'react';
import { connect } from 'react-redux';

import parallaxImage from 'assets/images/office.jpg';

import './landing-page.css';

import Header from 'modules/header';
import Services from 'modules/services';
import Notebooks from 'modules/notebooks';
import Bars from 'modules/bars';
import Portfolio from 'modules/portfolio';
import Tools from 'modules/tools';
import Experience from 'modules/experience';
import Testimonials from 'modules/testimonials';
import GeneralSkills from 'modules/general-skills';

class LandingPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Services />
        <Notebooks />
        <Bars />

        <Portfolio />
        <Experience />
        <Testimonials image={parallaxImage} />
        <GeneralSkills />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  landingPage: state.landingPage,
});

export default connect(mapStateToProps)(LandingPage);
