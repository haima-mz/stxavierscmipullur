import { useEffect, useState } from 'react'

/**
 * Small self-contained fade carousel for a set of images inside a section.
 * Falls back to a single static image (no controls) when only one image is given.
 */
export default function ImageCarousel({ images, alt, interval = 4000, badge }) {
  const [active, setActive] = useState(0)
  const multi = images.length > 1

  useEffect(() => {
    if (!multi) return
    const id = setInterval(() => setActive((a) => (a + 1) % images.length), interval)
    return () => clearInterval(id)
  }, [multi, images.length, interval])

  const prev = () => setActive((a) => (a - 1 + images.length) % images.length)
  const next = () => setActive((a) => (a + 1) % images.length)

  return (
    <div className="ab_img school-img-carousel">
      <div className="school-img-carousel__frame">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            className={`img-fluid school-img-carousel__img ${i === active ? 'is-active' : ''}`}
          />
        ))}
      </div>

      {badge && (
        <div className="wc_year">
          <h3><span>{badge}</span></h3>
        </div>
      )}

      {multi && (
        <>
          <button
            type="button"
            className="school-img-carousel__arrow school-img-carousel__arrow--prev"
            onClick={prev}
            aria-label="Previous image"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            type="button"
            className="school-img-carousel__arrow school-img-carousel__arrow--next"
            onClick={next}
            aria-label="Next image"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <div className="school-img-carousel__dots">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={i === active ? 'is-active' : ''}
                onClick={() => setActive(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
