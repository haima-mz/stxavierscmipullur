import { Link } from 'react-router-dom'

export default function PageTop({ title, crumb }) {
  return (
    <section className="section-top">
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
