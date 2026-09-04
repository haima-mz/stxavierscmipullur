import { useState } from 'react'
import PageTop from '../components/PageTop'

const FILES = [
  { name: 'Affiliation Letter', category: 'General', size: '240 KB', file: './assets/documents/Affiliation Letter.pdf' },
  { name: 'Building Safety Certificate', category: 'Certificate', size: '180 KB', file: './assets/documents/Building Safety Certificate.pdf'  },
  { name: 'Fee Structure 2026-27', category: 'General', size: '120 KB', file: './assets/documents/fees  structure 2026-27.pdf'  },
  { name: 'Fire Safety Certificate', category: 'Certificate', size: '300 KB', file: './assets/documents/Fire Safety Certificate.pdf'  },
  { name: 'Last 3 Year Result', category: 'Academics', size: '90 KB', file: './assets/documents/last 3 Year Result.pdf'  },
  { name: 'NOC', category: 'Certificate', size: '150 KB', file: './assets/documents/NOC.pdf'  },
  { name: 'PTA Committee', category: 'General', size: '150 KB', file: './assets/documents/PTA.pdf'  },
  { name: 'Recognition Certificate', category: 'Certificate', size: '150 KB', file: './assets/documents/Recognition Certificate.pdf'  },
  { name: 'School Diary', category: 'General', size: '150 KB', file: './assets/documents/St. Xaviers Diary 2026 - 27.pdf'  },
  { name: 'School Management Committee', category: 'General', size: '150 KB', file: './assets/documents/School Management Committee.pdf'  },
  { name: 'Trust Certificate', category: 'Certificate', size: '150 KB', file: './assets/documents/Trust Certificate.pdf'  },
]

export default function MandatoryDisclosures() {
  const [query, setQuery] = useState('')
  const filtered = FILES.filter((f) => f.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <>
      <PageTop title="Mandatory Disclosures" crumb="About" bg="./assets/images/academics/senior-classroom-reading.webp" />

      <section id="disclosure" className="topic_content_p2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h1>Mandatory Disclosures</h1>
            <h4>Documents to Download</h4>
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
                  <p>{f.category} - {f.size}</p>
                  <a href={f.file} download className="cta">
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
