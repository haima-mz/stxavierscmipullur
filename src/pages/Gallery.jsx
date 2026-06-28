import { useState } from 'react'
import PageTop from '../components/PageTop'

const CATEGORIES = ['All', 'School', 'Sports', 'Events', 'Cultural']
const ITEMS = [
  { id: 1,  category: 'School',   img: '/assets/images/gallery/Xviers825x1000-2.webp' },
  { id: 2,  category: 'Sports',   img: '/assets/images/gallery/Xviers825x1000-4.webp' },
  { id: 3,  category: 'Events',   img: '/assets/images/gallery/Xviers825x1000-3.webp' },
  { id: 4,  category: 'Cultural', img: '/assets/images/gallery/Xviers825x1000-5.webp' },
  { id: 5,  category: 'School',   img: '/assets/images/gallery/Xviers825x1000-6.webp' },
  { id: 6,  category: 'Events',   img: '/assets/images/gallery/Xviers825x1000-7.webp' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const visible = filter === 'All' ? ITEMS : ITEMS.filter((i) => i.category === filter)

  return (
    <>
      <PageTop title="Photo Gallery" crumb="Gallery" />

      <section className="topic_content_p2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>Moments</h4>
            <h1>School Gallery</h1>
          </div>

          <div className="school-gallery-filters">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`school-filter-btn ${filter === c ? 'is-active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="row">
            {visible.map((item) => (
              <div className="col-lg-3 col-sm-6 col-xs-12" key={item.id}>
                <button className="school-gallery-item" 
                        onClick={() => setLightbox(item)} 
                        style={{ backgroundImage: `url(${item.img})` }}
                >
                  <span>{item.category}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="school-lightbox" onClick={() => setLightbox(null)}>
          <div className="school-lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button className="school-lightbox__close" onClick={() => setLightbox(null)}>
              {'\u2715'}
            </button>
            {/* Replace the empty div with an actual img tag */}
            <img
              src={lightbox.img}
              alt={lightbox.category}
              style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
            />
            <p>{lightbox.category}</p>
          </div>
        </div>
      )}
    </>
  )
}
