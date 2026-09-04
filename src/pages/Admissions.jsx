import { useState } from 'react'
import PageTop from '../components/PageTop'

const CLASSES = ['Pre-KG', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII']

export default function Admissions() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', forClass: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageTop title="Admissions" crumb="Admissions" bg="./assets/images/academics/primary-classroom-backpacks.webp" />

      <section className="tp_feature section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>Admission Process</h4>
            <h1>How To Join Our School</h1>
          </div>
          <div className="row">
            {[
              { step: '01', title: 'Enquiry', text: 'Submit the form below or call the school office.' },
              { step: '02', title: 'Application', text: 'Collect and fill the admission application form.' },
              { step: '03', title: 'Documents', text: 'Submit the form with attested copy of birth certificate, 2 stampsize photographs, Transfer certificate (T.C.)' },
              { step: '04', title: 'Confirmation', text: 'Seat confirmed after a short interaction.' },
            ].map((s, i) => (
              <div className="col-lg-3 col-sm-6 col-xs-12" key={s.step}>
                <div className={`single_tp ${i === 1 ? 'st_one' : i === 2 ? 'st_two' : i === 3 ? 'st_one' : 'st_two'}`}>
                  <h3>{s.title}</h3>
                  <i className="fa-solid fa-list-check"></i>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="contact" className="contact_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-sm-12 col-xs-12">
              <div className="section-title text-center">
                <h4>Admission Open 2026-27</h4>
                <a href='https://onlineadmissionforms.gjschool.xyz/applyonline?admission=U1QuWEFWSUVSJ1MgQ01JIFNDSE9PTF82NA==' target='_blank'>
                  <h3>Click Here for Admission Enquiry Form</h3>
                </a>
              </div>
              <div className="contact">
                {/* {submitted ? (
                  <div className="text-center" style={{ padding: '30px 0' }}>
                    <h3>Thank you, {form.name}!</h3>
                    <p>Your enquiry has been received. Our admissions office will contact you on {form.phone} soon.</p>
                  </div>
                ) : (
                 
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
