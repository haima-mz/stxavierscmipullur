import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <span className="school-logo-text school-logo-text--footer">St. Xavier's <span>CMI School</span></span>
              <p>
                A CBSE affiliated institution run by the Carmelites of Mary Immaculate, nurturing
                intellect, faith and character in Pullur, Irinjalakuda, Kerala.
              </p>
            </div>
            <div className="foot_social">
              <ul>
                <li><a href="https://www.facebook.com/stxavierscmischool14" target="_blank" rel="noreferrer" className="top_f_facebook"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/stxavierscmischool" target="_blank" rel="noreferrer" className="top_f_instagram"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/@st.xavierscmischoolpullur6961" target="_blank" rel="noreferrer" className="top_f_linkedin"><i className="fa-brands fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Academics</h4>
              <ul>
                <li><Link to="/academics#pre-primary">Pre-Primary</Link></li>
                <li><Link to="/academics#primary">Primary School</Link></li>
                <li><Link to="/academics#middle">Middle School</Link></li>
                <li><Link to="/academics#senior">Senior School</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>School</h4>
              <ul>
                <li><Link to="/visionmission">About Us</Link></li>
                <li><Link to="/faculty">Faculty</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/downloads">Downloads</Link></li>
                <li><Link to="/mandatorydisclosure">Mandatory Disclosure</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Contact Info</h4>
              <div className="sf_contact">
                <span className="ti-mobile"></span>
                <h3>Phone number</h3>
                <p>+91 70250 92120</p>
              </div>
              <div className="sf_contact">
                <span className="ti-email"></span>
                <h3>Email Address</h3>
                <p>officeadmin@stxavierscmischool.com</p>
              </div>
              <div className="sf_contact">
                <span className="ti-map"></span>
                <h3>Office Address</h3>
                <p>Pullur P.O., Irinjalakuda, Thrissur, Kerala</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Admissions</h4>
              <p>Admissions for 2026-27 are now open, Pre-KG to Class VIII.</p>
              <a
                href="https://onlineadmissionforms.gjschool.xyz/applyonline?admission=U1QuWEFWSUVSJ1MgQ01JIFNDSE9PTF82NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="cta"
                style={{ marginTop: '10px', display: 'inline-flex' }}
              >
                <span>Apply Now</span>

                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="row fc">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_copyright">
              <p>&copy; {new Date().getFullYear()} St. Xavier's CMI School, Pullur. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footer_menu">
              <ul>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about#disclosure">Disclosure</Link></li>
                <li><Link to="/downloads">Downloads</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
