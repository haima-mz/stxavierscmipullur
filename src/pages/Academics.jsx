import PageTop from '../components/PageTop'
import ImageCarousel from '../components/ImageCarousel'

const STAGES = [
  {
    id: 'pre-primary',
    title: 'Pre-Primary',
    sub: 'Pre-KG \u2013 UKG',
    text: 'A warm, child-centred space welcoming little learners with play-based early education.',
    images: [
      './assets/images/academics/preprimary-puzzle-kids.webp',
      './assets/images/academics/preprimary-play-furniture.webp',
      './assets/images/academics/preprimary-indoor-play.webp',
      './assets/images/academics/preprimary-outdoor-play.webp',
      './assets/images/academics/preprimary-wooden-toys.webp',
    ],
  },
  {
    id: 'primary',
    title: 'Primary School',
    sub: 'Class I \u2013 IV',
    text: 'Concept-based, application-oriented learning that builds independent, confident young learners.',
    images: [
      './assets/images/academics/primary-classroom-backpacks.webp',
      './assets/images/academics/primary-classroom.webp',
    ],
  },
  {
    id: 'middle',
    title: 'Middle School',
    sub: 'Class V \u2013 VII',
    text: 'A subject-based curriculum with rich assignments balancing academics and social growth.',
    images: [
      './assets/images/all-img/about2.png',
    ],
  },
  {
    id: 'senior',
    title: 'Senior School',
    sub: 'Class VIII',
    text: 'CBSE curriculum grooming students for secondary education and the challenges ahead.',
    images: [
      './assets/images/academics/senior-classroom-reading.webp',
    ],
  },
]

export default function Academics() {
  return (
    <>
      <PageTop title="Academics" crumb="Academics" bg="./assets/images/academics/science-lab-microscope.webp"/>

      {STAGES.map((s, i) => (
        <section id={s.id} key={s.id} className={`ab_one section-padding ${i % 2 === 1 ? 'school-row-reverse' : ''}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <ImageCarousel images={s.images} alt={s.title} badge={s.sub} />
              </div>
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <div className="ab_content">
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                </div>
                <div className="abmv">
                  <i className="fa-solid fa-graduation-cap"></i>
                  <h4>CBSE Curriculum</h4>
                  <p>Activity-based learning aligned with NEP 2020, balancing rigour with creativity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* SCIENCE LAB */}
      <section className="ab_one section-padding school-lab-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <ImageCarousel
                images={['./assets/images/academics/science-lab-microscope.webp']}
                alt="Science Laboratory"
              />
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_content">
                <h2>Hands-On Science &amp; Computer Labs</h2>
                <p>
                  Our well-equipped science laboratory gives students the chance to move beyond
                  textbooks and explore concepts through direct observation and experimentation.
                  From examining specimens under the microscope to studying human anatomy models,
                  every session is designed to build curiosity, precision and a genuine love for
                  scientific enquiry. Guided by experienced faculty, students learn to ask questions,
                  test ideas and draw their own conclusions \u2014 skills that carry far beyond the
                  classroom.
                </p>
              </div>
              <div className="abmv">
                <i className="fa-solid fa-flask"></i>
                <h4>Physics, Chemistry &amp; Biology Labs</h4>
                <p>Dedicated lab spaces with proper safety equipment for every science stream.</p>
              </div>
              <div className="abmv">
                <i className="fa-solid fa-microscope"></i>
                <h4>Guided, Hands-On Sessions</h4>
                <p>Small groups and close supervision ensure every student gets real lab time.</p>
              </div>
              <div className="school-lab-stats">
                <div className="school-lab-stat">
                  <h3>3</h3>
                  <span>Dedicated Labs</span>
                </div>
                <div className="school-lab-stat">
                  <h3>1:1</h3>
                  <span>Equipment Access</span>
                </div>
                <div className="school-lab-stat">
                  <h3>100%</h3>
                  <span>Safety Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="topic_content_p2 section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Beyond Academics</h4>
            <h1>Co-Curricular & Activities</h1>
          </div>
          <div className="row">
            {[
              { icon: 'fa-solid fa-palette', title: 'Arts & Crafts' },
              { icon: 'fa-solid fa-music', title: 'Music & Dance', img: './assets/images/academics/cocurricular-dance.webp' },
              { icon: 'fa-solid fa-futbol', title: 'Sports & Fitness' },
              { icon: 'fa-solid fa-flask', title: 'Science & Computer Labs', img: './assets/images/academics/science-lab-microscope.webp' },
            ].map((c, i) => (
              <div className="col-lg-3 col-sm-6 col-xs-12" key={c.title}>
                {c.img ? (
                  <div className="school-cocurr-card" style={{ backgroundImage: `url(${c.img})` }}>
                    <div className="school-cocurr-card__body">
                      <i className={c.icon}></i>
                      <h2><span>{c.title}</span></h2>
                    </div>
                  </div>
                ) : (
                  <div className={`single_tca sc_${['one', 'two', 'three', 'four'][i]}`}>
                    <i className={c.icon} style={{ fontSize: '34px', marginBottom: '10px', display: 'block' }}></i>
                    <h2><span>{c.title}</span></h2>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
