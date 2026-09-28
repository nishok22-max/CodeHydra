import { useEffect, useState } from 'react'
import { Icon } from './ui'

const NAV = [
  ['Problem', '#problem'],
  ['Product', '#product'],
  ['Perspectives', '#perspectives'],
  ['Local', '#local'],
  ['Progress', '#progress'],
  ['Team', '#team'],
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-paper/90 backdrop-blur-sm' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-[6px] bg-ink text-sun">
            <Icon name="sun" className="h-4 w-4" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight">HeatLens</span>
          <span className="hidden font-mono text-[11px] text-ink-3 sm:inline">/ CodeHydra</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="text-[13px] text-ink-2 transition-colors hover:text-ink">
              {l}
            </a>
          ))}
        </nav>
        <span className="font-mono text-[11px] text-ink-3">SIH 26083</span>
      </div>
    </header>
  )
}

/** Hotspots sit over the warmest wards in the real map capture (percent of image box). */
const HOTSPOTS = [
  { x: 46, y: 64, d: 0 },
  { x: 69, y: 36, d: 0.6 },
  { x: 65, y: 65, d: 1.2 },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #e7e5de 1px, transparent 1px), linear-gradient(to bottom, #e7e5de 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 70% 40%, black, transparent 75%)',
        }}
      />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-6 md:px-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <p data-hero className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-heat" />
            Smart India Hackathon 2026 • SIH 26083
          </p>
          <h1 data-hero className="mt-7 text-[clamp(3.6rem,9vw,7.2rem)] font-bold leading-[0.88] tracking-[-0.045em]">
            HEAT
            <br />
            LENS<span className="text-sun">.</span>
          </h1>
          <p data-hero className="mt-8 max-w-md text-[22px] font-medium leading-snug tracking-tight">
            Hyperlocal Heat Intelligence for Safer Decisions
          </p>
          <p data-hero className="mt-4 max-w-md text-ink-2 leading-relaxed">
            Turning complex heat and environmental information into clear, localized guidance.
          </p>
          <div data-hero className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#product"
              className="group inline-flex items-center gap-2 rounded-[8px] bg-ink px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#13305a]"
            >
              See the prototype
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#problem" className="rounded-[8px] border border-line bg-white px-5 py-3 text-sm font-medium text-ink-2 hover:border-ink-3">
              Why it matters
            </a>
          </div>
        </div>

        <div data-hero-visual className="relative">
          <figure className="frame">
            <div className="flex items-center justify-between border-b border-line bg-[#fbfaf7] px-4 py-2.5">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e4e1d8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e4e1d8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e4e1d8]" />
              </div>
              <span className="font-mono text-[11px] text-ink-3">heatlens · Ahmedabad · city map</span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#1f8a4c]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1f8a4c]" /> live
              </span>
            </div>
            <div className="relative overflow-hidden">
              <img data-hero-map src="shots/map-crop.png" alt="HeatLens city map of Ahmedabad showing heat by municipal ward" className="block w-full" />
              {HOTSPOTS.map((h, i) => (
                <span key={i} data-hotspot style={{ left: `${h.x}%`, top: `${h.y}%`, animationDelay: `${h.d}s` }} className="absolute -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute -inset-3 animate-ping rounded-full bg-heat/25 [animation-duration:2.4s]" />
                  <span className="relative block h-2.5 w-2.5 rounded-full border-2 border-white bg-heat" />
                </span>
              ))}
            </div>
          </figure>

          <div data-hero-chip className="card absolute -bottom-8 -left-4 w-[250px] p-4 shadow-[0_18px_40px_-24px_rgba(11,31,58,0.4)] md:-left-10">
            <p className="eyebrow">Ward view</p>
            <p className="mt-2 text-[15px] font-semibold">Ramol Hathijan</p>
            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-line pt-3">
              <div>
                <p className="text-[11px] text-ink-3">Heat stress</p>
                <p className="text-sm font-semibold text-sun">Moderate</p>
              </div>
              <div>
                <p className="text-[11px] text-ink-3">Hottest hours</p>
                <p className="text-sm font-semibold">9 AM – 5 PM</p>
              </div>
            </div>
          </div>

          <div data-hero-chip className="card absolute -top-5 -right-3 hidden items-center gap-3 px-4 py-3 shadow-[0_18px_40px_-24px_rgba(11,31,58,0.4)] sm:flex md:-right-6">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#fff1e3] text-sun">
              <Icon name="bell" className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[11px] text-ink-3">Next step</p>
              <p className="text-[13px] font-semibold">Stay out of direct sun at peak</p>
            </div>
          </div>
        </div>
      </div>
      <p className="relative mx-auto mt-16 max-w-[1240px] px-6 font-mono text-[11px] text-ink-3 md:px-10">
        Captured from the working HeatLens prototype, 28 Sep 2026.
      </p>
    </section>
  )
}
