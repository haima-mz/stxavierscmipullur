import { Link } from 'react-router-dom'
import PageTop from '../components/PageTop'

export default function NotFound() {
  return (
    <>
      <PageTop title="404 - Page Not Found" crumb="404" />
      <section className="section-padding text-center">
        <div className="container">
          <p style={{ marginBottom: '24px' }}>The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="cta">
            <span>Back to Home</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
