import { Flow, Frame, Icon, Section } from './ui'

export function Progress() {
  const metrics = [
    { n: 48, t: 'AMC wards', d: 'Real municipal ward boundaries for Ahmedabad.' },
    { n: null, t: 'Interactive heat visualization', d: 'Pan, zoom and tap any ward on the city map.' },
    { n: 3, t: 'Persona-based guidance', d: 'Everyone, older people and outdoor workers.' },
    { n: null, t: 'Safety recommendations', d: 'Warning signs, first aid and what to do today.' },
    { n: 3, t: 'Languages', d: 'English, Hindi and Gujarati in the public view.' },
    { n: 5, t: 'Day decision-support outlook', d: 'Day-by-day planning view for the city.' },
  ]
  return (
    <Section
      id="progress"
      index="10"
      eyebrow="From concept to prototype"
      title="From concept to a running prototype."
      lede="HeatLens already runs end to end for Ahmedabad — live forecasts in, ward-level guidance out."
    >
      <div className="grid gap-px overflow-hidden rounded-[12px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.t} data-stagger className="bg-white p-7">
            <p className="h-12 text-5xl font-bold leading-none tracking-[-0.04em]">
              {m.n !== null ? <span data-count={m.n}>{m.n}</span> : <Icon name="shield" className="h-9 w-9 text-sun" />}
            </p>
            <p className="mt-5 text-[17px] font-semibold">{m.t}</p>
            <p className="mt-1.5 text-sm text-ink-2">{m.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div data-reveal>
          <Frame src="shots/forecast.png" alt="HeatLens five-day forecast view" label="heatlens / forecast" imgClassName="aspect-[16/9] object-cover object-top" />
        </div>
        <div data-reveal>
          <Frame src="shots/public.png" alt="HeatLens public mobile view" label="heatlens / public" imgClassName="aspect-[16/13] object-cover object-top" />
        </div>
      </div>
    </Section>
  )
}

export function Scale() {
  const cols = [
    { t: 'Data', d: 'Public weather forecasts, satellite observations, official ward boundaries and population estimates.' },
    { t: 'Intelligence', d: 'A heat-stress layer that turns conditions into localized risk and plain-language guidance.' },
    { t: 'Experience', d: 'City dashboard, mobile public view, shareable advisories and the conversational assistant.' },
  ]
  const tech = ['React', 'TypeScript', 'Python', 'FastAPI', 'Leaflet', 'OpenStreetMap', 'Open weather APIs', 'Earth-observation data']
  return (
    <Section
      id="scale"
      index="11"
      eyebrow="Built for scale"
      title="Built for scale."
      lede="A clean separation between data, intelligence and experience means a new city is a matter of new inputs, not a new product."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {cols.map((c, i) => (
          <div key={c.t} data-stagger className={`rounded-[10px] border p-7 ${i === 1 ? 'border-ink bg-ink text-white' : 'border-line bg-white'}`}>
            <span className={`font-mono text-[11px] ${i === 1 ? 'text-sun' : 'text-ink-3'}`}>Layer 0{i + 1}</span>
            <p className="mt-3 text-2xl font-semibold tracking-tight">{c.t}</p>
            <p className={`mt-3 text-sm leading-relaxed ${i === 1 ? 'text-white/70' : 'text-ink-2'}`}>{c.d}</p>
          </div>
        ))}
      </div>
      <div data-reveal className="mt-10 flex flex-wrap items-center gap-2">
        <span className="eyebrow mr-3">Built with</span>
        {tech.map((t) => (
          <span key={t} className="rounded-full border border-line bg-white px-3.5 py-1.5 font-mono text-[12px] text-ink-2">
            {t}
          </span>
        ))}
      </div>
    </Section>
  )
}

export function Impact() {
  const areas = [
    { icon: 'user', t: 'Public safety', d: 'Clearer heat-risk communication.' },
    { icon: 'helmet', t: 'Worker safety', d: 'More practical outdoor guidance.' },
    { icon: 'city', t: 'Municipal planning', d: 'Better localized awareness.' },
    { icon: 'leaf', t: 'Climate resilience', d: 'Stronger preparedness for extreme heat.' },
  ]
  return (
    <Section id="impact" index="12" eyebrow="From data to action" title="From data to action.">
      <Flow steps={['UNDERSTAND', 'IDENTIFY', 'GUIDE', 'ACT']} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map((a) => (
          <div key={a.t} data-stagger data-lift className="card p-6">
            <Icon name={a.icon} className="h-6 w-6 text-sky" />
            <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.12em]">{a.t}</p>
            <p className="mt-2 text-ink-2">{a.d}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

type Person = { name: string; role: string; desc: string; img: string; pos?: string }

const LEAD: Person = {
  name: 'Shaila Neelofar K',
  role: 'Team Lead & Pitch',
  desc: 'Sets direction, keeps the team aligned to the problem statement and presents HeatLens to the jury.',
  img: 'team/shaila.jpg',
  pos: '50% 22%',
}

const MEMBERS: Person[] = [
  { name: 'Pravin Lenin Naidu', role: 'Backend Engineer', desc: 'Builds the services and APIs that power every HeatLens view.', img: 'team/pravin.jpg', pos: '50% 30%' },
  { name: 'Mohammed Fazil S', role: 'Data Scientist', desc: 'Works on the heat-stress intelligence and the data behind it.', img: 'team/fazil.jpg', pos: '50% 30%' },
  { name: 'Rifat N', role: 'Frontend / UI Developer', desc: 'Designs and builds the dashboard, map and public views.', img: 'team/rifat.jpg', pos: '50% 25%' },
  { name: 'Rohith S', role: 'Public Health & Policy Researcher', desc: 'Grounds guidance in public-health practice and heat action plans.', img: 'team/rohith.jpg', pos: '50% 30%' },
  { name: 'Nishok Kumar R', role: 'Testing, Demo & Docs', desc: 'Tests the product, runs the live demo and writes the documentation.', img: 'team/nishok.jpg', pos: '50% 30%' },
]

const MENTORS: Person[] = [
  { name: 'Muthusamy K', role: 'Project Mentor', desc: '', img: 'team/muthusamy.png', pos: '50% 25%' },
  { name: 'Siva Prakash P', role: 'Technical Mentor', desc: '', img: 'team/sivaprakash.png', pos: '50% 30%' },
]

function Portrait({ p, className = '' }: { p: Person; className?: string }) {
  return (
    <div className={`overflow-hidden bg-[#eeece6] ${className}`}>
      <img
        src={p.img}
        alt={p.name}
        loading="lazy"
        style={{ objectPosition: p.pos }}
        className="h-full w-full object-cover grayscale-[35%] transition-[filter,transform] duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
      />
    </div>
  )
}

export function Team() {
  return (
    <Section id="team" index="13" eyebrow="Team CodeHydra" title="The people behind HeatLens." lede="Six builders across engineering, data, design and public health — guided by two mentors.">
      <article data-reveal className="group grid overflow-hidden rounded-[12px] border border-line bg-white md:grid-cols-[380px_1fr]">
        <Portrait p={LEAD} className="aspect-[4/5] md:aspect-auto md:h-full" />
        <div className="flex flex-col justify-between p-8 md:p-12">
          <div>
            <p className="eyebrow">Team leader</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">{LEAD.name}</h3>
            <p className="mt-3 font-mono text-sm text-sun">{LEAD.role}</p>
          </div>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-ink-2">{LEAD.desc}</p>
        </div>
      </article>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {MEMBERS.map((m, i) => (
          <article key={m.name} data-stagger className="group">
            <Portrait p={m} className="aspect-[4/5] rounded-[10px] border border-line" />
            <p className="mt-4 font-mono text-[11px] text-ink-3">0{i + 2}</p>
            <h3 className="mt-1 text-[17px] font-semibold leading-snug">{m.name}</h3>
            <p className="mt-1 text-[13px] font-medium text-sun">{m.role}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">{m.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-10">
        <p className="eyebrow">Mentors</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {MENTORS.map((m) => (
            <article key={m.name} data-stagger className="group card flex items-center gap-5 p-4">
              <Portrait p={m} className="h-20 w-20 shrink-0 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-ink-2">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function Closing() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-[1240px] px-6 py-28 md:px-10 md:py-40">
        <h2 data-reveal className="max-w-5xl text-[clamp(2.8rem,8vw,6.6rem)] font-bold leading-[0.92] tracking-[-0.045em]">
          HEAT IS NOT
          <br />
          JUST A <span className="text-sun">NUMBER.</span>
        </h2>
        <p data-reveal className="mt-10 max-w-xl text-xl leading-relaxed text-white/70">
          HeatLens turns heat information into decisions people can understand and act on.
        </p>
        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/15 pt-8 font-mono text-[12px] text-white/50 md:flex-row">
          <p>CodeHydra • Smart India Hackathon 2026 • SIH 26083</p>
          <a href="#top" className="hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
