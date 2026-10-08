import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './MarqueeBorder.css'

gsap.registerPlugin(ScrollTrigger)

export default function MarqueeBorder() {
  const borderRef = useRef(null)

  useEffect(() => {
    if (!borderRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
      })

      tl.to('.marquee-top', { scaleX: 1, duration: 0.25, ease: 'none' }, 0)
      tl.to('.marquee-right', { scaleY: 1, duration: 0.25, ease: 'none' }, 0.25)
      tl.to('.marquee-bottom', { scaleX: 1, duration: 0.25, ease: 'none' }, 0.5)
      tl.to('.marquee-left', { scaleY: 1, duration: 0.25, ease: 'none' }, 0.75)
    }, borderRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="marquee-border-wrapper" ref={borderRef}>
      <div className="marquee-border-line marquee-top" />
      <div className="marquee-border-line marquee-right" />
      <div className="marquee-border-line marquee-bottom" />
      <div className="marquee-border-line marquee-left" />
    </div>
  )
}
