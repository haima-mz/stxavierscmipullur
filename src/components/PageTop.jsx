import { Link } from 'react-router-dom'

export default function PageTop({ title, crumb, bg }) {
  return (
    <section
      className={`section-top ${bg ? 'school-pagetop--img' : ''}`}
      style={bg ? { backgroundImage: `url(${bg})` } : undefined}
    >
      {bg && <div className="school-pagetop__overlay" />}
      <div className="container">
        <div className="col-lg-10 offset-lg-1 text-center">
          <div className="section-top-title">
            <h1>{title}</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li> / {crumb}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
