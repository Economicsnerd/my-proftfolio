import React, { Component } from 'react';

export class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
        <section>
          <div className="row">
            <div className="three columns">
              <img
                src="images/profile-pic.jpg"
                alt="profile picture"
                className="profile-pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{resumeData.aboutme}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="adress">
                    <span>{resumeData.name}</span>
                    <br />

                    <span>{resumeData.address}</span>
                    <br />

                    <span>{resumeData.address}</span>
                    <br />

                    <span>{resumeData.website}</span>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
