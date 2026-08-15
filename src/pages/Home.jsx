import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import CounterSection from '../components/CounterSection'
import { getUpcomingEvents, formatEventBadge } from '../data/schoolEvents'

const GALLERY_PREVIEW = [
  './assets/images/gallery/Xviers825x1000-2.webp',
  './assets/images/gallery/Xviers825x1000-4.webp',
  './assets/images/gallery/Xviers825x1000-3.webp',
  './assets/images/gallery/Xviers825x1000-5.webp',
]

const FEATURES = [
  { title: 'Faith-Centered Education', icon: 'fa-solid fa-medal', cls: '', text: 'Holistic learning rooted in Christian values and the CMI tradition.' },
  { title: 'Quality CBSE Curriculum', icon: 'fa-solid fa-book-journal-whills', cls: 'st_one', text: 'A curriculum that balances academic rigour with experiential learning.' },
  { title: 'Caring, Experienced Faculty', icon: 'fa-solid fa-user-graduate', cls: 'st_two', text: 'Dedicated teachers who know and nurture every student personally.' },
  { title: 'Safe & Supportive Campus', icon: 'fa-solid fa-headset', cls: 'st_three', text: 'A disciplined, secure environment where every child can thrive.' },
]

const STAGES = [
  { title: 'Pre-Primary', sub: 'Pre-KG \u2013 UKG', to: '/academics#pre-primary' },
  { title: 'Primary School', sub: 'Class I \u2013 IV', to: '/academics#primary' },
  { title: 'Middle School', sub: 'Class V \u2013 VII', to: '/academics#middle' },
  { title: 'Senior School', sub: 'Class VIII', to: '/academics#senior' },
]

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <br/><br/><br/><br/>
      <CounterSection />

      {/* ABOUT */}
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_img">
                <img src="./assets/images/all-img/Xaviers-Banner-825x1000.webp" className="img-fluid" alt="St. Xavier's CMI School" />
                <div className="wc_year">
                  <h3><span>10+</span> <br />Years of Excellence</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_content">
                <h2>Education rooted in faith, built on values.</h2>
                <p>
                  We, the Carmelites of Mary Immaculate, following the example of our founder
                  Blessed Kuriakose Elias Chavara, consider education integral to forming the
                  whole person \u2014 academically, morally and spiritually.
                </p>
              </div>
              <div className="abmv">
                <i className="fa-regular fa-lightbulb"></i>
                <h4>A nurturing learning environment</h4>
                <p>Small class sizes and caring teachers ensure every child is known and supported.</p>
              </div>
              <div className="abmv">
                <i className="fa-solid fa-satellite-dish"></i>
                <h4>A true school community</h4>
                <p>Faith, discipline and compassion woven into every part of school life.</p>
              </div>
              <div className="cta_two">
                <Link to="/about" className="cta">
                  <span>Discover More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="tp_feature section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>Why Choose Us</h4>
            <h1>Built For Your Child's Growth.</h1>
          </div>
          <div className="row">
            {FEATURES.map((f) => (
              <div className="col-lg-3 col-sm-6 col-xs-12" key={f.title}>
                <div className={`single_tp ${f.cls}`}>
                  <h3>{f.title}</h3>
                  <i className={f.icon}></i>
                  <p>{f.text}</p>
                  <Link to="/about" className="cta">
                    <span>Learn More</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM STAGES */}
      <section className="topic_content_p2 section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Academics</h4>
            <h1>Our Curriculum, Stage by Stage.</h1>
          </div>
          <div className="row">
            {STAGES.map((s, i) => (
              <div className="col-lg-3 col-sm-6 col-xs-12" key={s.title}>
                <Link to={s.to} className="single_tca-link">
                  <div className={`single_tca sc_${['one', 'two', 'three', 'four'][i]}`}>
                    <i className="fa-solid fa-graduation-cap" style={{ fontSize: '34px', marginBottom: '10px', display: 'block' }}></i>
                    <h2><span>{s.title}</span></h2>
                    <span>{s.sub}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY & UPCOMING EVENTS TEASER */}
      <section className="topic_content_p2 section-padding">
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                }}
              >
                {GALLERY_PREVIEW.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt="Life at St. Xavier's CMI School"
                    className="img-fluid"
                    style={{
                      borderRadius: '10px',
                      height: '160px',
                      width: '100%',
                      objectFit: 'cover',
                      marginTop: i % 2 === 1 ? '20px' : 0,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_content">
                <h2>Life at Our School</h2>
                <p>
                  From classroom moments to festivals, sports days and celebrations \u2014 our
                  gallery captures it all. Here's what's coming up next on the school calendar:
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                {getUpcomingEvents(3).map((e) => {
                  const badge = formatEventBadge(e.dateObj)
                  return (
                    <div
                      key={e.date + e.title}
                      style={{
                        display: 'flex',
                        gap: '14px',
                        alignItems: 'center',
                        padding: '12px 0',
                        borderBottom: '1px solid #ececec',
                      }}
                    >
                      <div
                        style={{
                          flexShrink: 0,
                          width: '50px',
                          textAlign: 'center',
                          background: '#1c2530',
                          borderRadius: '8px',
                          padding: '6px 0',
                          color: '#fff',
                        }}
                      >
                        <div style={{ fontSize: '17px', fontWeight: 700, lineHeight: 1 }}>{badge.day}</div>
                        <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{badge.month}</div>
                      </div>
                      <p style={{ margin: 0, fontSize: '14px', color: '#1c2530', fontWeight: 500 }}>{e.title}</p>
                    </div>
                  )
                })}
              </div>

              <div className="cta_two">
                <Link to="/gallery" className="cta">
                  <span>Visit Our Gallery</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSIONS CTA (insfreecourse pattern) */}
      <section className="insfreecourse section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="single_ins">
                <div className="single_ins_content">
                  <h4>Admissions 2026\u201327</h4>
                  <h1>Join Our School Family</h1>
                  <p>Pre-KG to Class VIII \u2014 seats filling fast for the new academic year.</p>
                  <Link to="/admissions" className="cta">
                    <span>Apply Now</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
                <div className="single_ins_img">
                  <img src="./assets/images/all-img/become-ins.png" className="img-fluid" alt="Admissions" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="single_ins">
                <div className="single_ins_content">
                  <h4>We're Hiring</h4>
                  <h1>Join Our Faculty</h1>
                  <p>Passionate educators \u2014 send your CV and cover letter to our office.</p>
                  <Link to="/contact" className="cta">
                    <span>Contact Us</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
                <div className="single_ins_img">
                  <img src="./assets/images/all-img/free-course.png" className="img-fluid" alt="Careers" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter_area section-padding">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-6 offset-lg-3 col-sm-12 col-xs-12">
              <div className="subs_form">
                <h3>Stay updated with school news & events</h3>
                <p>Subscribe to receive announcements, circulars and event updates by email.</p>
                <form action="#" className="home_subs" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" className="subscribe__input" placeholder="Enter your Email Address" />
                  <button type="submit" className="subscribe__btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
