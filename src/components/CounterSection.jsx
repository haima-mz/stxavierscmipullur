import { useEffect, useRef, useState } from 'react'

const STATS = [
  { icon: 'ti-folder', end: 45, suffix: '+', label: 'Dedicated Teachers', cls: 'sc_one' },
  { icon: 'ti-medall-alt', end: 10, suffix: '+', label: 'Years of Excellence', cls: 'sc_two' },
  { icon: 'ti-id-badge', end: 1500, suffix: '+', label: 'Enrolled Students', cls: 'sc_three' },
  { icon: 'ti-user', end: 100, suffix: '%', label: 'Student-Centric', cls: 'sc_four' },
]

function StatNumber({ end, suffix }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const duration = 1500
        const step = (now) => {
          const p = Math.min((now - start) / duration, 1)
          setValue(Math.floor((1 - Math.pow(1 - p, 3)) * end))
          if (p < 1) requestAnimationFrame(step)
          else setValue(end)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.4 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [end])

  return <h2 className="counter-num" ref={ref}>{value}{suffix}</h2>
}

export default function CounterSection() {
  return (
    <section className="count_area counter_feature">
      <div className="container">
        <div className="row">
          {STATS.map((s) => (
            <div className="col-lg-3 col-sm-6 col-xs-12" key={s.label}>
              <div className={`single-counter count_${s.cls === 'sc_one' ? 'one' : s.cls === 'sc_two' ? 'two' : s.cls === 'sc_three' ? 'three' : 'four'}`}>
                <span className={`${s.icon} ${s.cls}`}></span>
                <StatNumber end={s.end} suffix={s.suffix} />
                <p>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
