import PageTop from '../components/PageTop'

const EVENTS = [
  { img: './assets/images/event/Sept2.jpeg', date: '05', month: 'Sep', title: 'Teacher\'s Day', time: '09.00AM - 10.00AM', place: 'Classroom', text: 'Teacher\'s Day celebration at all classes.' },
  { img: './assets/images/event/Sept1.jpeg', date: '07', month: 'Sep', title: 'Science Exhibition', time: '10.00AM - 1.00PM', place: 'School Auditorium', text: 'Conducted to I-X classes.' },
  { img: './assets/images/event/Sept3.webp', date: '25', month: 'Sep', title: 'Sports Day', time: '10.00AM - 1.00PM', place: 'School Ground', text: 'Conducted to I-X classes.' },
  { img: './assets/images/event/Sept4.webp', date: '26', month: 'Sep', title: 'Grand Parent\'s Day', time: '10.00AM - 12.00PM', place: 'School Auditorium', text: 'KG section student will celebrate Grand Parent\'s Day.' },
]

export default function Events() {
  return (
    <>
      <PageTop title="News & Events" crumb="Events" bg="./assets/images/academics/cocurricular-dance.webp" />

      <section className="our-event section-padding">
        <div className="container">
          <div className="row">
            {EVENTS.map((e) => (
              <div className="col-lg-4 col-sm-6 col-xs-12" key={e.title}>
                <div className="event-slide">
                  <div className="event-img">
                    <img src={e.img} alt={e.title} />
                  </div>
                  <div className="event-content">
                    <h3><a href="#">{e.title}</a></h3>
                    <span><i className="fa fa-table"></i>{e.date}</span>
                    <span>{e.month}</span>
                    <span><i className="fa fa-clock-o"></i>{e.time}</span>
                    <span><strong>{e.place}</strong></span>
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
