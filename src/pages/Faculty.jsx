import PageTop from '../components/PageTop'

const FACULTY = [
  { name: 'Principal', post: 'School Principal', img: './assets/images/team/1.jpg' },
  { name: 'Vice Principal', post: 'Academic Coordinator', img: './assets/images/team/2.jpg' },
  { name: 'Senior Teacher', post: 'Mathematics & Science', img: './assets/images/team/3.jpg' },
  { name: 'Senior Teacher', post: 'English & Languages', img: './assets/images/team/4.jpg' },
]

export default function Faculty() {
  return (
    <>
      <PageTop title="Our Faculty" crumb="Faculty" />

      <section className="team_member section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Meet Our Team</h4>
            <h1>Caring, Experienced Educators</h1>
          </div>
          <div className="row text-center">
            {FACULTY.map((f, i) => (
              <div className="col-md-3 col-sm-6 col-xs-12" key={f.name + i}>
                <div className="our-team">
                  {i % 2 === 0 ? (
                    <>
                      <div className="team-content">
                        <h3 className="title">{f.name}</h3>
                        <span className="post">{f.post}</span>
                      </div>
                      <div className="team_img">
                        <img src={f.img} alt={f.name} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="team_img">
                        <img src={f.img} alt={f.name} />
                      </div>
                      <div className="team-content">
                        <h3 className="title">{f.name}</h3>
                        <span className="post">{f.post}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
