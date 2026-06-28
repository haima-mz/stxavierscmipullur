import PageTop from '../components/PageTop'

export default function About() {
  return (
    <>
      <PageTop title="About Us" crumb="About" />

      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_img">
                <img src="/assets/images/all-img/Xaviers-Banner-825x1000.webp" className="img-fluid" alt="About St. Xavier's CMI School" />
                <div className="wc_year">
                  <h3><span>931352</span> <br />CBSE Affiliation No.</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_content">
                <h2>About St. Xavier's CMI School</h2>
                <p>
                  We, the Carmelites of Mary Immaculate, after the example of our founder Blessed
                  Kuriakose Elias Chavara, consider education integral to the formation of the
                  human person for the fulfilment of his/her individual and social responsibilities.
                </p>
              </div>
              <div className="abmv">
                <i className="fa-regular fa-lightbulb"></i>
                <h4>Our Vision</h4>
                <p>Rooted in faith and guided by love, we nurture intellect, shape hearts, and transform lives.</p>
              </div>
              <div className="abmv">
                <i className="fa-solid fa-satellite-dish"></i>
                <h4>Our Mission</h4>
                <p>Holistic education rooted in Christian values, nurturing each child's unique potential.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="principal" className="ab_one section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_content">
                <h2>Principal's Message</h2>
                <p>
                  Welcome to St. Xavier's CMI School. We are pleased with the progress our school
                  has made and remain committed to the holistic growth of every student. Following
                  the example of our founder, we provide a platform for comprehensive,
                  value-based education \u2014 nurturing well-rounded, principled individuals.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_img">
                <img src="/assets/images/all-img/about2.png" className="img-fluid" alt="Principal" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="disclosure" className="tp_feature section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>CBSE Requirement</h4>
            <h1>Mandatory Public Disclosure</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp">
                <h3>Affiliation No.</h3>
                <i className="fa-solid fa-id-badge"></i>
                <p>931352</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp st_one">
                <h3>Address</h3>
                <i className="fa-solid fa-location-dot"></i>
                <p>Pullur P.O., Irinjalakuda, Thrissur, Kerala \u2013 680683</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp st_two">
                <h3>Email</h3>
                <i className="fa-solid fa-envelope"></i>
                <p>info@stxavierscmischool.com</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp st_three">
                <h3>Phone</h3>
                <i className="fa-solid fa-phone"></i>
                <p>+91 70250 92120</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
