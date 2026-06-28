import PageTop from '../components/PageTop'

const STAGES = [
  { id: 'pre-primary', title: 'Pre-Primary', sub: 'Pre-KG \u2013 UKG', text: 'A warm, child-centred space welcoming little learners with play-based early education.' },
  { id: 'primary', title: 'Primary School', sub: 'Class I \u2013 IV', text: 'Concept-based, application-oriented learning that builds independent, confident young learners.' },
  { id: 'middle', title: 'Middle School', sub: 'Class V \u2013 VII', text: 'A subject-based curriculum with rich assignments balancing academics and social growth.' },
  { id: 'senior', title: 'Senior School', sub: 'Class VIII', text: 'CBSE curriculum grooming students for secondary education and the challenges ahead.' },
]

export default function Academics() {
  return (
    <>
      <PageTop title="Academics" crumb="Academics" />

      {STAGES.map((s, i) => (
        <section id={s.id} key={s.id} className={`ab_one section-padding ${i % 2 === 1 ? 'school-row-reverse' : ''}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <div className="ab_img">
                  <img src={`/assets/images/all-img/about${(i % 3) + 1}.png`} className="img-fluid" alt={s.title} />
                  <div className="wc_year">
                    <h3><span>{s.sub}</span></h3>
                  </div>
                </div>
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

      <section className="topic_content_p2 section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Beyond Academics</h4>
            <h1>Co-Curricular & Activities</h1>
          </div>
          <div className="row">
            {[
              { icon: 'fa-solid fa-palette', title: 'Arts & Crafts' },
              { icon: 'fa-solid fa-music', title: 'Music & Dance' },
              { icon: 'fa-solid fa-futbol', title: 'Sports & Fitness' },
              { icon: 'fa-solid fa-flask', title: 'Science & Computer Labs' },
            ].map((c, i) => (
              <div className="col-lg-3 col-sm-6 col-xs-12" key={c.title}>
                <div className={`single_tca sc_${['one', 'two', 'three', 'four'][i]}`}>
                  <i className={c.icon} style={{ fontSize: '34px', marginBottom: '10px', display: 'block' }}></i>
                  <h2><span>{c.title}</span></h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
