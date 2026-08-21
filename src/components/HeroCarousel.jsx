import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SLIDES = [
  {
    bg: './assets/images/banner/Xaviers-web-Banner-01.webp',
    title: 'St. Xavier\'s CMI School is the right choice for your child!',
    text: 'A CBSE affiliated school in Pullur, Irinjalakuda nurturing intellect, faith and character.',
    cta: { label: 'Explore Academics', to: '/academics' },
  },
  {
    bg: './assets/images/banner/Xaviers-web-Banner-02.webp',
    title: 'Building Confident, Compassionate Global Citizens',
    text: 'Holistic, value-based education rooted in the CMI tradition for mind, body and spirit.',
    cta: { label: 'About Our School', to: '/about' },
  },
  {
    bg: './assets/images/banner/Xaviers-web-Banner-03.webp',
    title: 'Admissions Open for 2026-27',
    text: 'Pre-KG to Class VIII, give your child a foundation built on knowledge and character.',
    cta: { label: 'Apply Now', to: '/admissions' },
  },
]

export default function HeroCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 5500)
    return () => clearInterval(id)
  }, [])

  const goTo = (i) => setActive(i)
  const prev = () => setActive((a) => (a - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setActive((a) => (a + 1) % SLIDES.length)

  return (
    <section id="home" className="home_bg school-carousel">
      {SLIDES.map((s, i) => (
        <div
          key={s.title}
          className={`school-carousel__slide ${i === active ? 'is-active' : ''}`}
          style={{ backgroundImage: `url(${s.bg})` }}
        />
      ))}
      <div className="school-carousel__overlay" />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-10 col-xs-12">
            <div className="home_content school-carousel__content">
              <span className="school-carousel__eyebrow">CBSE Affiliation No. 931352</span>
              <h1 key={active} className="school-carousel__fade">{SLIDES[active].title}</h1>
              <p key={active + 'p'} className="school-carousel__fade">{SLIDES[active].text}</p>
            </div>
            <div className="home_btn">
              <Link to={SLIDES[active].cta.to} className="cta">
                <span>{SLIDES[active].cta.label}</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CAROUSEL CONTROLS */}
      <button className="school-carousel__arrow school-carousel__arrow--prev" onClick={prev} aria-label="Previous slide">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="school-carousel__arrow school-carousel__arrow--next" onClick={next} aria-label="Next slide">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="school-carousel__dots">
        {SLIDES.map((s, i) => (
          <button
            key={s.title}
            className={i === active ? 'is-active' : ''}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
