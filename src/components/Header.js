import React, { Component, Fragment } from 'react';

export class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a href="#nav-wrap" title="Show navigation" className="mobile-btn">
              {' '}
              Show navigation
            </a>
            <a href="#" className="mobile-btn" title="Hide navigation">
              Hide navigation
            </a>
            <ul className="nav" id="nav">
              <li className="current">
                <a href="#home" className="smoothscroll">
                  Home
                </a>
              </li>
              <li>
                <a href="#resume" className="smoothscroll">
                  Resume
                </a>
              </li>
              <li className="smoothscroll" href="#portfolio">
                Works
              </li>
              <li className="smoothscroll" href="#testimonials">
                Testimonials
              </li>
              <li className="smoothscroll" href="#contact">
                Contact
              </li>
            </ul>
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I am {resumeData.name}.</h1>
              <h3 style={{ color: '#fff', fontFamily: 'sans-serif' }}>
                I am a {resumeData.role}.{resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <a href="#about" className="smoothscroll">
            <i className="icon-down-circle"></i>
          </a>
        </header>
      </Fragment>
    );
  }
}

export default Header;
