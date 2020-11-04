import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section>
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">Contact me</p>
          </div>
        </div>
        <div className="row">
          <aside className="eight columns footer-widgets">
            <div className="widget">
              <h4>
                Linked in:
                {resumeData.linkedinId}
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
