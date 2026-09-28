import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Icon, Section } from './ui'

const PERSONAS = [
  {
    key: 'public',
    icon: 'user',
    who: 'Public',
    q: 'Is it safe to be outside?',
    body: 'Simple, easy-to-understand local heat guidance — the official alert, the hottest hours and what to do, on one phone screen.',
    points: ['Official alert in plain words', 'Hottest hours for the area', 'Emergency number always visible'],
    img: 'shots/public.png',
    imgClass: 'object-cover object-top',
    aspect: 'aspect-[4/5]',
  },
  {
    key: 'workers',
    icon: 'helmet',
    who: 'Outdoor workers',
    q: 'When is it safer to work or take a break?',
    body: 'Practical exposure and work guidance for construction, street and gig work — people who cannot simply stay indoors.',
    points: ['Peak exposure window', 'Break and hydration prompts', 'Warning signs and first aid'],
    img: 'shots/advice.png',
    imgClass: 'object-cover object-left-top',
    aspect: 'aspect-[4/3]',
  },
  {
    key: 'municipal',
    icon: 'city',
    who: 'Municipal authorities',
    q: 'Where does attention need to be focused?',
    body: 'Localized information for planning and response — which wards are most heat-stressed and how many people live there.',
    points: ['Ward-level heat-stress ranking', 'Population in affected wards', 'Day-by-day planning view'],
    img: 'shots/heatstress.png',
    imgClass: 'object-cover object-[100%_0]',
    aspect: 'aspect-[3/5]',
  },
]

export function Perspectives() {
  const [active, setActive] = useState(0)
  const panel = useRef<HTMLDivElement>(null)
  const p = PERSONAS[active]

  useGSAP(
    () => {
      gsap.fromTo('[data-persona-anim]', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.06, ease: 'power2.out' })
    },
    { scope: panel, dependencies: [active] },
  )

  return (
    <Section
      id="perspectives"
      index="04"
      eyebrow="One heat event. Three decisions."
      title={
        <>
          One heat event.
          <br /> Different decisions.
        </>
      }
      lede="The same afternoon means different things to a resident, a worker and a city official. HeatLens answers each of them in their own terms."
    >
      <div role="tablist" aria-label="User perspectives" className="grid gap-3 md:grid-cols-3">
        {PERSONAS.map((x, i) => (
          <button
            key={x.key}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`group rounded-[10px] border p-5 text-left transition-colors ${
              i === active ? 'border-ink bg-ink text-white' : 'border-line bg-white hover:border-ink-3'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`eyebrow ${i === active ? '!text-white/60' : ''}`}>{x.who}</span>
              <Icon name={x.icon} className={`h-5 w-5 ${i === active ? 'text-sun' : 'text-ink-3'}`} />
            </div>
            <p className="mt-4 text-lg font-semibold leading-snug tracking-tight">“{x.q}”</p>
          </button>
        ))}
      </div>

      <div ref={panel} className="mt-6 grid items-start gap-10 rounded-[12px] border border-line bg-white p-6 md:grid-cols-[1fr_1.1fr] md:p-10">
        <div>
          <p data-persona-anim className="eyebrow">Guidance for {p.who.toLowerCase()}</p>
          <p data-persona-anim className="mt-4 text-2xl font-semibold leading-snug tracking-tight">{p.body}</p>
          <ul className="mt-8 space-y-3">
            {p.points.map((pt) => (
              <li key={pt} data-persona-anim className="flex items-center gap-3 border-b border-line pb-3 text-ink-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sun" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
        <div data-persona-anim className={`mx-auto w-full overflow-hidden rounded-[10px] border border-line ${p.key === 'public' ? 'max-w-[320px]' : p.key === 'municipal' ? 'max-w-[360px]' : ''}`}>
          <img src={p.img} alt={`HeatLens view for ${p.who}`} className={`block h-full w-full ${p.aspect} ${p.imgClass}`} />
        </div>
      </div>

      <p data-reveal className="mt-12 text-center text-xl font-semibold tracking-tight">
        One intelligence layer. <span className="text-sun">Different decisions.</span>
      </p>
    </Section>
  )
}

export function Local() {
  return (
    <Section
      id="local"
      index="05"
      eyebrow="Localized intelligence"
      title="See the heat locally."
      lede="Instead of one reading for a whole city, HeatLens shows how heat differs from ward to ward across Ahmedabad — so attention can go where it is needed."
    >
      <div className="grid items-end gap-10 lg:grid-cols-[1fr_300px]">
        <div data-map-wrap className="frame">
          <div className="flex items-center justify-between border-b border-line bg-[#fbfaf7] px-4 py-2.5">
            <span className="font-mono text-[11px] text-ink-3">Ahmedabad Municipal Corporation · ground heat by ward</span>
          </div>
          <div className="overflow-hidden">
            <img data-map-zoom src="shots/map.png" alt="Ahmedabad ward heat map in HeatLens" className="block w-full origin-[45%_60%]" />
          </div>
        </div>
        <div className="space-y-8">
          <div data-reveal>
            <p className="text-[88px] font-bold leading-none tracking-[-0.05em]">
              <span data-count="48">48</span>
            </p>
            <p className="mt-2 text-lg font-semibold">AMC municipal wards</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">Mapped on real ward boundaries, each with its own heat picture.</p>
          </div>
          <div data-reveal className="border-t border-line pt-6">
            <div className="space-y-2 text-sm">
              {[
                ['#e5483a', 'Much hotter than city average'],
                ['#f08a2a', 'Hotter'],
                ['#f5bf3a', 'About average'],
                ['#9bd48a', 'Cooler'],
              ].map(([c, l]) => (
                <p key={l} className="flex items-center gap-3 text-ink-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
                  {l}
                </p>
              ))}
            </div>
            <p className="mt-4 font-mono text-[11px] text-ink-3">Legend as shown in the prototype.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

/** Real replies from the running prototype assistant, captured 28 Sep 2026. */
const CHAT = [
  {
    q: 'Is it safe to go outside now?',
    a: 'Today Ahmedabad has no AMC heat alert (White – no alert). HeatLens rates the city’s heat stress as Moderate, and the peak stress hours are 09:00–18:00 with the hottest hour at 13:00. Stay hydrated, use shade or a hat, and take breaks if you feel unwell, especially during the peak hours.',
  },
  {
    q: 'When should outdoor work be avoided?',
    a: 'Today Ahmedabad has no AMC heat alert (White – no alert). The city’s peak heat-stress period is 09:00–18:00, with the hottest hour at 13:00. On no-alert days there is no official restriction on outdoor work, but stay hydrated, take shade breaks, and stop if you feel unwell. If you notice signs of heat exhaustion or stroke, move to a cool place, give water, and call 108 if needed.',
  },
  {
    q: 'What is the heat situation in my area?',
    area: 'Maninagar',
    a: 'Maninagar today is in the Moderate heat-stress band. Humidity and a night that stays warmer than the city average keep the stress moderate. The city-wide AMC alert is no alert (White).',
  },
]

export function Ask() {
  const [idx, setIdx] = useState(0)
  const [shown, setShown] = useState('')
  const [thinking, setThinking] = useState(true)
  const started = useRef(false)
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = box.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        run(0)
      }
    }, { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const timer = useRef<number | undefined>(undefined)
  function run(i: number) {
    window.clearInterval(timer.current)
    setIdx(i)
    setShown('')
    setThinking(true)
    const full = CHAT[i].a
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.setTimeout(() => {
      setThinking(false)
      if (reduce) return setShown(full)
      let n = 0
      timer.current = window.setInterval(() => {
        n += 3
        setShown(full.slice(0, n))
        if (n >= full.length) window.clearInterval(timer.current)
      }, 16)
    }, 700)
  }
  useEffect(() => () => window.clearInterval(timer.current), [])

  const c = CHAT[idx]
  return (
    <Section
      id="ask"
      index="08"
      eyebrow="Ask about the heat"
      title="Ask about the heat. Get a straight answer."
      lede="A conversational assistant inside HeatLens answers everyday questions about local heat conditions in plain language, grounded in the same data the dashboard shows."
    >
      <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
        <div className="space-y-3">
          <p className="eyebrow mb-4">Try a question</p>
          {CHAT.map((x, i) => (
            <button
              key={x.q}
              onClick={() => run(i)}
              className={`w-full rounded-[10px] border px-4 py-3.5 text-left text-[15px] transition-colors ${
                i === idx ? 'border-ink bg-white font-medium' : 'border-line bg-transparent text-ink-2 hover:bg-white'
              }`}
            >
              “{x.q}”
            </button>
          ))}
        </div>
        <div ref={box} className="frame">
          <div className="flex items-center gap-3 border-b border-line px-5 py-3.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-sun">
              <Icon name="sun" className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">Ask HeatLens</p>
              <p className="text-[11px] text-ink-3">Ahmedabad · English, हिन्दी, ગુજરાતી</p>
            </div>
          </div>
          <div className="min-h-[340px] space-y-5 bg-[#fbfaf7] p-5 md:p-7">
            <div className="flex justify-end">
              <p className="max-w-[80%] rounded-[14px] rounded-br-[4px] bg-ink px-4 py-3 text-[15px] text-white">
                {c.area ? `What is the heat situation in ${c.area}?` : c.q}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line bg-white text-sun">
                <Icon name="sun" className="h-3.5 w-3.5" />
              </span>
              <div className="max-w-[88%] rounded-[14px] rounded-tl-[4px] border border-line bg-white px-4 py-3 text-[15px] leading-relaxed text-ink">
                {thinking ? (
                  <span className="flex gap-1 py-1.5" aria-label="Assistant is responding">
                    {[0, 1, 2].map((d) => (
                      <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-3" style={{ animationDelay: `${d * 0.12}s` }} />
                    ))}
                  </span>
                ) : (
                  shown
                )}
              </div>
            </div>
          </div>
          <p className="border-t border-line px-5 py-3 font-mono text-[11px] text-ink-3">
            Real replies from the prototype assistant, 28 Sep 2026{c.area ? ' · condensed' : ''}.
          </p>
        </div>
      </div>
    </Section>
  )
}

/** Phrases taken verbatim from the prototype's public view (EN / HI / GU). */
const LANGS = [
  { code: 'EN', name: 'English', cls: '', alert: 'No heat alert', todo: 'What to do today', a: 'Drink water regularly', b: 'Stay out of direct sun in the hottest hours', sos: 'Very unwell from the heat? Call 108' },
  { code: 'HI', name: 'हिन्दी', cls: 'hindi', alert: 'कोई गर्मी चेतावनी नहीं', todo: 'आज क्या करें', a: 'पानी पिएं', b: 'सबसे गर्म घंटों में सीधी धूप से बचें', sos: 'गर्मी से बहुत बीमार? 108 पर कॉल करें' },
  { code: 'GU', name: 'ગુજરાતી', cls: 'gujarati', alert: 'કોઈ ગરમી ચેતવણી નથી', todo: 'આજે શું કરવું', a: 'પાણી પીવો', b: 'સૌથી ગરમ કલાકોમાં સીધા તડકાથી બચો', sos: 'ગરમીથી ખૂબ બીમાર? 108 પર કૉલ કરો' },
]

export function Accessible() {
  return (
    <Section
      id="accessible"
      index="09"
      eyebrow="Local. Simple. Accessible."
      title="Local. Simple. Accessible."
      lede="Heat advice only helps if people can read it. The public view speaks the languages of Ahmedabad."
    >
      <p data-reveal className="mb-10 font-mono text-sm tracking-[0.12em] text-ink-2">ENGLISH • HINDI • GUJARATI</p>
      <div className="grid gap-5 md:grid-cols-3">
        {LANGS.map((l) => (
          <article key={l.code} data-stagger data-lift className="card overflow-hidden">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="font-mono text-[11px] text-ink-3">{l.code}</span>
              <span className={`text-sm ${l.cls}`}>{l.name}</span>
            </div>
            <div className={`p-6 ${l.cls}`}>
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#1f8a4c]">AMC</p>
              <p className="mt-1 text-2xl font-semibold leading-tight">{l.alert}</p>
              <p className="mt-6 text-xs font-medium text-ink-3">{l.todo}</p>
              <ul className="mt-3 space-y-2.5 text-[15px]">
                <li className="flex gap-3">
                  <Icon name="drop" className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                  {l.a}
                </li>
                <li className="flex gap-3">
                  <Icon name="shade" className="mt-0.5 h-4 w-4 shrink-0 text-sun" />
                  {l.b}
                </li>
              </ul>
              <p className="mt-6 rounded-[8px] bg-[#fdf0ee] px-3.5 py-2.5 text-sm font-medium text-heat">{l.sos}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
