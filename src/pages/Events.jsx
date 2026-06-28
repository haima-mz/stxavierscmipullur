import PageTop from '../components/PageTop'

const EVENTS = [
  { img: '/assets/images/event/e1.png', date: '24', month: 'Jun', title: 'New Academic Year Orientation', time: '9.00AM - 11.00AM', place: 'School Auditorium', text: 'Welcome session for new and existing students for the academic year 2026-27.' },
  { img: '/assets/images/event/e2.png', date: '15', month: 'Jul', title: 'Parent-Teacher Meeting', time: '10.00AM - 1.00PM', place: 'School Campus', text: 'First PTM of the year to discuss student progress with class teachers.' },
  { img: '/assets/images/event/e3.png', date: '15', month: 'Aug', title: 'Independence Day Celebration', time: '8.00AM - 10.00AM', place: 'School Ground', text: 'Flag hoisting and cultural programme celebrating Independence Day.' },
]

export default function Events() {
  return (
    <>
      <PageTop title="News & Events" crumb="Events" />

      <section className="our-event section-padding">
        <div className="container">
          <div className="row">
            {EVENTS.map((e) => (
              <div className="col-lg-4 col-sm-6 col-xs-12" key={e.title}>
                <div className="event-slide">
                  <div className="event-img">
                    <img src={e.img} alt={e.title} />
                    <div className="event-date">
                      <span className="date">{e.date}</span>
                      <span className="month">{e.month}</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h3><a href="#">{e.title}</a></h3>
                    <span><i className="fa fa-clock-o"></i>{e.time}</span>
                    <span><i className="fa fa-table"></i><strong>{e.place}</strong></span>
                    <p>{e.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
