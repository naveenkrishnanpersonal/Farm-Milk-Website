import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    title: 'Collected at Dawn',
    desc: 'Every morning before sunrise, our cows are milked hygienically and every drop is collected in sanitised stainless-steel containers.',
  },
  {
    num: '02',
    title: 'Hygienically Packed',
    desc: 'The milk is immediately cooled, pasteurised, and packed into sterilised eco-friendly bottles to lock in freshness.',
  },
  {
    num: '03',
    title: 'Delivered to You',
    desc: 'Our delivery fleet sets off before dawn. Fresh, cold farm milk lands on your doorstep by 6 AM.',
  },
]

export default function Journey() {
  const sectionRef = useRef(null)
  const [activeSteps, setActiveSteps] = useState(new Set())

  useEffect(() => {
    if (!sectionRef.current) return
    const cards = sectionRef.current.querySelectorAll('.journey-card')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            setActiveSteps((prev) => {
              const next = new Set(prev)
              next.add(index)
              return next
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="journey" className="journey-section" ref={sectionRef}>
      <div className="journey-bg-pattern"></div>
      <div className="container">
        <div className="journey-header">
          <span className="journey-label">The Process</span>
          <h2 className="journey-title">From Farm<br />to <span className="journey-highlight">Your Glass</span></h2>
        </div>

        <div className="journey-track">
          <div className="journey-rope" />
          {steps.map((step, i) => (
            <div
              className={`journey-card ${activeSteps.has(i) ? 'revealed' : ''}`}
              key={i}
              data-index={i}
            >
              <div className="journey-badge">
                <span>{step.num}</span>
              </div>
              <div className="journey-card-body">
                <h3 className="journey-card-title">{step.title}</h3>
                <p className="journey-card-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
