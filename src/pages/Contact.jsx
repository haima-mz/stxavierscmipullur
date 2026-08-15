import { useState } from 'react'
import PageTop from '../components/PageTop'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageTop title="Contact Us" crumb="Contact" bg="./assets/images/academics/preprimary-outdoor-play.webp"/>

      <section className="tp_feature section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp">
                <h3>Visit Us</h3>
                <i className="fa-solid fa-location-dot"></i>
                <p>Pullur P.O., Irinjalakuda, Thrissur, Kerala \u2013 680683</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp st_one">
                <h3>Call Us</h3>
                <i className="fa-solid fa-phone"></i>
                <p>+91 70250 92120</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp st_two">
                <h3>Email Us</h3>
                <i className="fa-solid fa-envelope"></i>
                <p>info@stxavierscmischool.com</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp st_three">
                <h3>Office Hours</h3>
                <i className="fa-solid fa-clock"></i>
                <p>Mon to Sat: 9am \u2013 4pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact" className="contact_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="school-map">
                <iframe
                  title="School Location"
                  src="https://www.google.com/maps?q=Pullur,Irinjalakuda,Thrissur,Kerala&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="section-title">
                <h4>Get In Touch</h4>
                <h1>Send Us A Message</h1>
              </div>
              <div className="contact">
                {sent ? (
                  <div style={{ padding: '20px 0' }}>
                    <h3>Thank you, {form.name}!</h3>
                    <p>Your message has been received. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form className="form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input type="text" name="name" className="form-control" required placeholder="Your Name" value={form.name} onChange={handleChange} />
                      </div>
                      <div className="form-group col-md-6">
                        <input type="email" name="email" className="form-control" required placeholder="Your Email" value={form.email} onChange={handleChange} />
                      </div>
                      <div className="form-group col-md-12">
                        <input type="text" name="subject" className="form-control" placeholder="Your Subject" value={form.subject} onChange={handleChange} />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea rows="6" name="message" className="form-control" required placeholder="Your Message" value={form.message} onChange={handleChange}></textarea>
                      </div>
                    </div>
                    <button type="submit" className="cta school-form-submit">
                      <span>Send Message</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
