import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageTop from '../components/PageTop'
import { getUpcomingEvents, formatEventBadge } from '../data/schoolEvents'

const CATEGORIES = ['All', 'School', 'Sports', 'Events', 'Cultural']
const ITEMS = [
  { id: 1,  category: 'School',   img: './assets/images/gallery/Xviers825x1000-2.webp' },
  { id: 2,  category: 'Sports',   img: './assets/images/gallery/Xviers825x1000-4.webp' },
  { id: 3,  category: 'Events',   img: './assets/images/gallery/Xviers825x1000-3.webp' },
  { id: 4,  category: 'Cultural', img: './assets/images/gallery/Xviers825x1000-5.webp' },
  { id: 5,  category: 'School',   img: './assets/images/gallery/Xviers825x1000-6.webp' },
  { id: 6,  category: 'Events',   img: './assets/images/gallery/Xviers825x1000-7.webp' },
  { id: 7,  category: 'Cultural', img: './assets/images/amenities/dance-1.webp' },
  { id: 8,  category: 'Cultural', img: './assets/images/amenities/dance-2.webp' },
  { id: 9,  category: 'Cultural', img: './assets/images/amenities/dance-3.webp' },
  { id: 10, category: 'Cultural', img: './assets/images/amenities/dance-4.webp' },
  { id: 11, category: 'Cultural', img: './assets/images/amenities/dance-5.webp' },
  { id: 12, category: 'Cultural', img: './assets/images/amenities/dance-6.webp' },
  { id: 13, category: 'School',   img: './assets/images/amenities/classroom-kids-1.webp' },
  { id: 14, category: 'School',   img: './assets/images/amenities/classroom-kids-2.webp' },
  { id: 15, category: 'School',   img: './assets/images/amenities/classroom-kids-3.webp' },
  { id: 16, category: 'School',   img: './assets/images/amenities/classroom-writing.jpg' },
  { id: 17, category: 'Sports',   img: './assets/images/amenities/archery-range.webp' },
  { id: 18, category: 'Sports',   img: './assets/images/amenities/indoor-outdoor-sports.webp' },
]

const REEL_THUMBS = [
  './assets/images/gallery/Xviers825x1000-2.webp',
  './assets/images/gallery/Xviers825x1000-3.webp',
  './assets/images/gallery/Xviers825x1000-4.webp',
  './assets/images/gallery/Xviers825x1000-5.webp',
  './assets/images/gallery/Xviers825x1000-6.webp',
  './assets/images/gallery/Xviers825x1000-7.webp',
  './assets/images/academics/cocurricular-dance.webp',
  './assets/images/academics/preprimary-outdoor-play.webp',
  './assets/images/academics/primary-classroom-backpacks.webp',
]

const SOCIAL_REELS = [
  { platform: 'Facebook',  url: 'https://www.facebook.com/share/r/1JYbqnPwvp/' },
  { platform: 'Instagram', url: 'https://www.instagram.com/reel/DY9MYw3kQsq/?igsh=aDQyZjMwcGxlaW9h' },
  { platform: 'Facebook',  url: 'https://www.facebook.com/share/r/1CZcBpAJBM/' },
  { platform: 'Instagram', url: 'https://www.instagram.com/reel/DZH8JldDB8r/?igsh=OXZlMWQycmYyNzl6' },
  { platform: 'Facebook',  url: 'https://www.facebook.com/share/r/1Lhzzc8htw/' },
  { platform: 'Instagram', url: 'https://www.instagram.com/reel/DZQDqdEERdZ/?igsh=MXZydDMwbzQxNWVwag==' },
  { platform: 'Facebook',  url: 'https://www.facebook.com/share/r/18jB6sVSx5/' },
  { platform: 'Instagram', url: 'https://www.instagram.com/reel/DZXTQcLjOlR/?igsh=MWY3MGMwdnQ5bHB5' },
  { platform: 'Facebook',  url: 'https://www.facebook.com/share/r/1FogTcCRH6/' },
  { platform: 'Instagram', url: 'https://www.instagram.com/reel/DaQFf9bCR2_/?igsh=MXJ3MWdrcnczZjJkYQ==' },
  { platform: 'Facebook',  url: 'https://www.facebook.com/share/r/192LQpDKGZ/' },
  { platform: 'Instagram', url: 'https://www.instagram.com/reel/DaXo3iEDrW4/?igsh=bm80NTF6MTYzaHkx' },
  { platform: 'Facebook',  url: 'https://www.facebook.com/share/r/1CvXXeXKfJ/' },
  { platform: 'Instagram', url: 'https://www.instagram.com/reel/Da2Fc3PAdyg/?igsh=eno4Z3QwcjE1Z243' },
  { platform: 'Facebook',  url: 'https://www.facebook.com/share/r/18EFUM89x9/' },
  { platform: 'Instagram', url: 'https://www.instagram.com/reel/DbF0eHjjRBQ/?igsh=MTBmdXlwanBjNXU3cg==' },
  { platform: 'Facebook',  url: 'https://www.facebook.com/share/r/1By6yjFzSp/' },
  { platform: 'Instagram', url: 'https://www.instagram.com/reel/DbpcLE0Ch3Z/?igsh=YnI1bDZ1dXUwY2Jq' },
].map((reel, idx) => ({ ...reel, thumb: REEL_THUMBS[idx % REEL_THUMBS.length] }))

const PLATFORM_STYLE = {
  Facebook: { icon: 'fa-brands fa-facebook', color: '#1877F2', label: 'Watch on Facebook' },
  Instagram: { icon: 'fa-brands fa-instagram', color: '#E1306C', label: 'Watch on Instagram' },
}

const EVENT_TAG_COLOR = {
  Celebration: '#2eca7f',
  Academic: '#2c7aff',
  Holiday: '#e1306c',
}

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const visible = filter === 'All' ? ITEMS : ITEMS.filter((i) => i.category === filter)
  const upcomingEvents = getUpcomingEvents(8)

  return (
    <>
      <PageTop title="Photo Gallery" crumb="Gallery" bg="./assets/images/gallery/Xviers825x1000-2.webp" />

      {/* UPCOMING EVENTS (from the 2026-27 school calendar) */}
      <section className="topic_content_p2 section-padding" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="section-title text-center">
            <h4>What's Next</h4>
            <h1>Upcoming School Events</h1>
            <p>Straight from our official 2026-27 school calendar, mark your dates!</p>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="row">
              {upcomingEvents.map((e) => {
                const badge = formatEventBadge(e.dateObj)
                return (
                  <div className="col-lg-3 col-sm-6 col-xs-12" key={e.date + e.title} style={{ marginBottom: '24px' }}>
                    <div
                      style={{
                        display: 'flex',
                        gap: '14px',
                        alignItems: 'flex-start',
                        padding: '20px',
                        borderRadius: '10px',
                        background: '#f7f7f9',
                        border: '1px solid #ececec',
                        height: '100%',
                      }}
                    >
                      <div
                        style={{
                          flexShrink: 0,
                          width: '54px',
                          textAlign: 'center',
                          background: '#1c2530',
                          borderRadius: '8px',
                          padding: '8px 0',
                          color: '#fff',
                        }}
                      >
                        <div style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1 }}>{badge.day}</div>
                        <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{badge.month}</div>
                      </div>
                      <div>
                        <span
                          style={{
                            display: 'inline-block',
                            fontSize: '11px',
                            fontWeight: 600,
                            color: EVENT_TAG_COLOR[e.category] || '#2c7aff',
                            marginBottom: '4px',
                          }}
                        >
                          {e.category}
                        </span>
                        <p style={{ margin: 0, fontSize: '14px', color: '#1c2530', fontWeight: 500 }}>{e.title}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <p className="text-center">Check back soon for updates to the school calendar.</p>
          )}

          <div className="text-center" style={{ margin: '10px 0 50px' }}>
            <Link to="/events" className="cta">
              <span>View Full Events Page</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>

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

      {/* SOCIAL MEDIA REELS */}
      <section className="topic_content_p2 section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-title text-center">
            <h4>Follow Our Journey</h4>
            <h1>School Moments on Social Media</h1>
            <p>Catch our latest highlights, events and celebrations, straight from our Facebook and Instagram pages.</p>
          </div>

          <div className="row">
            {SOCIAL_REELS.map((reel, idx) => {
              const meta = PLATFORM_STYLE[reel.platform]
              return (
                <div className="col-lg-3 col-sm-6 col-xs-12" key={idx} style={{ marginBottom: '24px' }}>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'block',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      background: '#f7f7f9',
                      border: '1px solid #ececec',
                      textDecoration: 'none',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        aspectRatio: '4 / 5',
                        backgroundImage: `url(${reel.thumb})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, rgba(10,20,40,0.05) 45%, rgba(10,20,40,0.75) 100%)',
                        }}
                      />
                      {/* platform badge */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          background: meta.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <i className={meta.icon} style={{ fontSize: '15px', color: '#fff' }}></i>
                      </div>
                      {/* play button */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '46px',
                          height: '46px',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <i className="fa-solid fa-play" style={{ fontSize: '16px', color: '#1c2530', marginLeft: '3px' }}></i>
                      </div>
                      {/* label */}
                      <div style={{ position: 'absolute', bottom: '10px', left: '12px', right: '12px' }}>
                        <span style={{ fontWeight: 600, color: '#fff', fontSize: '13px', display: 'block' }}>{meta.label}</span>
                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)' }}>Reel #{Math.floor(idx / 2) + 1}</span>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>

          <div className="text-center" style={{ marginTop: '10px' }}>
            <a href="https://www.facebook.com/stxavierscmischool14" target="_blank" rel="noreferrer" className="cta" style={{ marginRight: '15px' }}>
              <span>Visit our Facebook Page</span>
            </a>
            <a href="https://www.instagram.com/stxavierscmischool" target="_blank" rel="noreferrer" className="cta">
              <span>Visit our Instagram Page</span>
            </a>
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
