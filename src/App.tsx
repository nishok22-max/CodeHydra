import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Hero, Nav } from './components/Hero'
import { Actionable, BeyondNumber, DataToDecision, Problem, Product } from './components/Story'
import { Accessible, Ask, Local, Perspectives } from './components/Interactive'
import { Closing, Impact, Progress, Scale, Team } from './components/Outro'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function App() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Hero
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from('[data-hero]', { y: 28, autoAlpha: 0, duration: 0.9, stagger: 0.09 })
          .from('[data-hero-visual]', { y: 40, autoAlpha: 0, duration: 1.1 }, 0.25)
          .from('[data-hero-map]', { scale: 1.12, duration: 1.8, ease: 'power2.out' }, 0.25)
          .from('[data-hotspot]', { scale: 0, autoAlpha: 0, duration: 0.5, stagger: 0.15, ease: 'back.out(2)' }, 1.1)
          .from('[data-hero-chip]', { y: 16, autoAlpha: 0, duration: 0.7, stagger: 0.15 }, 1.25)

        // Headings, paragraphs, figures
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
          gsap.from(el, { y: 32, autoAlpha: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%', once: true } })
        })

        // Screenshot reveal: a soft settle inside its frame
        gsap.utils.toArray<HTMLElement>('[data-img-reveal]').forEach((el) => {
          gsap.from(el, { scale: 1.06, duration: 1.4, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } })
        })

        // Grouped cards
        ScrollTrigger.batch('[data-stagger]', {
          start: 'top 88%',
          once: true,
          onEnter: (els) => gsap.from(els, { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out' }),
        })

        // Step flows
        gsap.utils.toArray<HTMLElement>('[data-flow]').forEach((flow) => {
          gsap
            .timeline({ scrollTrigger: { trigger: flow, start: 'top 82%', once: true } })
            .from(flow.querySelectorAll('[data-flow-step]'), { y: 18, autoAlpha: 0, duration: 0.6, stagger: 0.18, ease: 'power2.out' })
            .from(flow.querySelectorAll('[data-flow-arrow]'), { x: -8, autoAlpha: 0, duration: 0.4, stagger: 0.18 }, 0.3)
        })

        // Weather data → human-relevant risk
        gsap.from('[data-transition-fill]', {
          scaleX: 0,
          duration: 1.4,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: '[data-transition-bar]', start: 'top 80%', once: true },
        })

        // Map: zoom out to the whole city as the section scrolls in
        gsap.fromTo(
          '[data-map-zoom]',
          { scale: 1.35 },
          { scale: 1, ease: 'none', scrollTrigger: { trigger: '[data-map-wrap]', start: 'top 90%', end: 'center 45%', scrub: 0.6 } },
        )

        // Count-ups
        gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
          const end = Number(el.dataset.count)
          const obj = { v: 0 }
          gsap.to(obj, {
            v: end,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            onUpdate: () => (el.textContent = String(Math.round(obj.v))),
          })
        })

        // Card hover lift
        const cleanups: (() => void)[] = []
        gsap.utils.toArray<HTMLElement>('[data-lift]').forEach((el) => {
          const enter = () => gsap.to(el, { y: -4, duration: 0.3, ease: 'power2.out' })
          const leave = () => gsap.to(el, { y: 0, duration: 0.4, ease: 'power2.out' })
          el.addEventListener('mouseenter', enter)
          el.addEventListener('mouseleave', leave)
          cleanups.push(() => {
            el.removeEventListener('mouseenter', enter)
            el.removeEventListener('mouseleave', leave)
          })
        })
        return () => cleanups.forEach((f) => f())
      })
    },
    { scope: root },
  )

  return (
    <div ref={root}>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <DataToDecision />
        <Product />
        <Perspectives />
        <Local />
        <BeyondNumber />
        <Actionable />
        <Ask />
        <Accessible />
        <Progress />
        <Scale />
        <Impact />
        <Team />
      </main>
      <Closing />
    </div>
  )
}
