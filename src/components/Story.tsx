import { Flow, Frame, Icon, Section } from './ui'

export function Problem() {
  const affects = [
    ['People', 'How the body actually copes, not just what the thermometer says.'],
    ['Outdoor activity', 'Whether a walk, a commute or a shift is reasonable right now.'],
    ['Vulnerable communities', 'Older residents, children and those without cooling feel it first.'],
    ['Urban areas', 'Two neighbourhoods in one city can live very different afternoons.'],
    ['Daily decisions', 'When to go out, when to rest, when to check on someone.'],
  ]
  return (
    <Section
      id="problem"
      index="01"
      eyebrow="The problem"
      title={
        <>
          Temperature alone does not
          <br className="hidden md:block" /> tell the whole story.
        </>
      }
      lede="A city-wide temperature is a useful headline, but it rarely answers the question people are really asking: what does this heat mean for me, here, today? Conventional warnings can leave that gap open."
    >
      <div className="grid gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {affects.map(([t, d]) => (
          <div key={t} data-stagger className="bg-white p-6">
            <p className="text-[15px] font-semibold">{t}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">{d}</p>
          </div>
        ))}
      </div>

      <div data-reveal className="mt-14 grid items-center gap-4 rounded-[10px] border border-line bg-white p-6 md:grid-cols-[1fr_auto_1fr] md:p-10">
        <div>
          <p className="eyebrow">What most warnings share</p>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-ink-3">Weather data</p>
          <p className="mt-1 font-mono text-sm text-ink-3">one number · one city</p>
        </div>
        <div data-transition-bar className="relative mx-auto h-px w-full min-w-[120px] bg-line md:w-40">
          <span data-transition-fill className="absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-sky via-sun to-heat" />
        </div>
        <div className="md:text-right">
          <p className="eyebrow">What people need</p>
          <p className="mt-3 text-2xl font-semibold tracking-tight">Human-relevant heat risk</p>
          <p className="mt-1 font-mono text-sm text-heat">local · personal · actionable</p>
        </div>
      </div>
    </Section>
  )
}

export function DataToDecision() {
  return (
    <Section
      id="decision"
      index="02"
      eyebrow="From data to decision"
      title="Complex conditions in. Clear guidance out."
      lede="HeatLens takes the environmental picture of a city and turns it into something a resident, a supervisor or a ward officer can act on — without needing to interpret the science themselves."
    >
      <Flow steps={['ENVIRONMENT', 'HEAT RISK', 'HUMAN GUIDANCE', 'ACTION']} />
    </Section>
  )
}

const SHOTS = [
  { src: 'shots/dashboard.png', label: 'Dashboard', cap: 'Today at a glance — official alert, heat stress, peak hours and the 5-day outlook side by side.' },
  { src: 'shots/forecast.png', label: 'Forecast', cap: 'Clear risk communication for each of the next five days, with what to do.' },
  { src: 'shots/advice.png', label: 'Health & advice', cap: 'Personalized guidance for everyone, older people and outdoor workers.' },
]

export function Product() {
  return (
    <Section
      id="product"
      index="03"
      eyebrow="Product experience"
      title="A working prototype, not a mock-up."
      lede="Every screen below is captured from the running HeatLens application for Ahmedabad."
    >
      <div data-reveal>
        <Frame src={SHOTS[0].src} alt="HeatLens dashboard" label="heatlens / dashboard" />
        <p className="mt-4 text-sm text-ink-2">
          <span className="font-mono text-xs text-ink-3">Fig. 1 — </span>
          {SHOTS[0].cap}
        </p>
      </div>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {SHOTS.slice(1).map((s, i) => (
          <div key={s.src} data-reveal>
            <Frame src={s.src} alt={`HeatLens ${s.label}`} label={`heatlens / ${s.label.toLowerCase()}`} />
            <p className="mt-4 text-sm text-ink-2">
              <span className="font-mono text-xs text-ink-3">Fig. {i + 2} — </span>
              {s.cap}
            </p>
          </div>
        ))}
      </div>
      <ul className="mt-14 grid gap-x-8 gap-y-3 border-t border-line pt-8 text-sm text-ink-2 sm:grid-cols-2 lg:grid-cols-3">
        {[
          'Localized heat-risk visualization',
          'Clear risk communication',
          'Personalized guidance',
          'Interactive map experience',
          'Practical safety recommendations',
          'Decision-support views',
        ].map((f) => (
          <li key={f} data-stagger className="flex items-center gap-3">
            <span className="h-px w-4 bg-sun" />
            {f}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function BeyondNumber() {
  const steps = [
    ['Environmental conditions', 'Air temperature is only the start. Humidity, sun, wind and how warm nights stay all shape what a body goes through.'],
    ['Thermal understanding', 'Multiple established thermal indicators, used together, describe heat the way people experience it.'],
    ['Actionable risk', 'That understanding becomes a plain-language level and a next step for each place and person.'],
  ]
  return (
    <Section
      id="beyond"
      index="06"
      eyebrow="Beyond a single number"
      title="Heat is felt, not just measured."
      lede="HeatLens considers several environmental factors together to give a richer picture of human heat stress than temperature alone can."
    >
      <div className="mx-auto max-w-3xl">
        {steps.map(([t, d], i) => (
          <div key={t}>
            <div data-stagger className={`card flex gap-6 p-7 ${i === steps.length - 1 ? 'border-ink' : ''}`}>
              <span className="font-mono text-xs text-sun">0{i + 1}</span>
              <div>
                <p className="text-xl font-semibold tracking-tight">{t}</p>
                <p className="mt-2 leading-relaxed text-ink-2">{d}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-2 text-ink-3">
                <Icon name="arrow" className="h-4 w-4 rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Actionable() {
  const items = [
    { icon: 'clock', t: 'Safer outdoor periods', d: 'The hottest hours for your ward, so plans can move around them.', ex: 'Hottest hours: 9 AM – 5 PM' },
    { icon: 'pause', t: 'Work / rest guidance', d: 'Practical pacing for people who cannot simply stay indoors.', ex: 'Take shade breaks; stop if unwell' },
    { icon: 'sun', t: 'Exposure awareness', d: 'How heat in the sun differs from heat in the shade.', ex: 'Stay out of direct sun in the hottest hours' },
    { icon: 'drop', t: 'Hydration & shade', d: 'Simple reminders that match the day, not a generic checklist.', ex: 'Drink water regularly' },
    { icon: 'bell', t: 'Heat-risk alerts', d: 'Official AMC alert levels shown clearly alongside HeatLens heat stress.', ex: 'Very unwell from the heat? Call 108' },
  ]
  return (
    <Section id="actionable" index="07" eyebrow="Make heat actionable" title="Every screen ends in a next step." lede="Guidance is phrased the way people talk — short, specific and tied to today.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.t} data-stagger data-lift className="card flex flex-col p-6">
            <span className="grid h-9 w-9 place-items-center rounded-[8px] bg-[#fff4e8] text-sun">
              <Icon name={it.icon} />
            </span>
            <p className="mt-5 text-[17px] font-semibold">{it.t}</p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">{it.d}</p>
            <p className="mt-5 border-t border-dashed border-line pt-4 font-mono text-[12px] text-ink">“{it.ex}”</p>
          </div>
        ))}
        <div data-stagger className="flex flex-col justify-end rounded-[10px] bg-ink p-6 text-white">
          <p className="eyebrow !text-white/50">Wording</p>
          <p className="mt-3 text-lg leading-snug">All examples above are real guidance text shown by the prototype.</p>
        </div>
      </div>
    </Section>
  )
}
