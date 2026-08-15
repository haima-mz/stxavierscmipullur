import { useState } from 'react'
import PageTop from '../components/PageTop'

const FILES = [
  { name: 'Admission Application Form 2026-27', category: 'Admissions', size: '240 KB' },
  { name: 'Mandatory Public Disclosure', category: 'CBSE Compliance', size: '180 KB' },
  { name: 'Fee Structure 2026-27', category: 'Admissions', size: '120 KB' },
  { name: 'Academic Calendar', category: 'Academics', size: '300 KB' },
  { name: 'Transfer Certificate Request Form', category: 'Admissions', size: '90 KB' },
  { name: 'School Uniform & Code of Conduct', category: 'General', size: '150 KB' },
]

export default function Downloads() {
  const [query, setQuery] = useState('')
  const filtered = FILES.filter((f) => f.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <>
      <PageTop title="Downloads" crumb="Downloads" bg="./assets/images/academics/primary-classroom.webp"/>

      <section className="topic_content_p2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>Resources</h4>
            <h1>Forms & Documents</h1>
          </div>

          <div className="text-center" style={{ marginBottom: '36px' }}>
            <input
              type="text"
              className="form-control school-search-input"
              placeholder="Search documents..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="row">
            {filtered.map((f) => (
              <div className="col-lg-6 col-xs-12" key={f.name}>
                <div className="single_tp school-download-item" style={{ textAlign: 'left' }}>
                  <i className="fa-solid fa-file-pdf" style={{ color: '#2c7aff', fontSize: '28px' }}></i>
                  <h3 style={{ marginTop: '14px' }}>{f.name}</h3>
                  <p>{f.category} \u00b7 {f.size}</p>
                  <a href="#" className="cta">
                    <span>Download</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
