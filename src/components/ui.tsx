import type { ReactNode } from 'react'

export function Section({
  id,
  index,
  eyebrow,
  title,
  lede,
  children,
  className = '',
}: {
  id: string
  index: string
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`relative border-t border-line py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-6 md:grid-cols-[180px_1fr]">
          <div data-reveal className="flex items-baseline gap-3 md:block">
            <span className="font-mono text-xs text-sun">{index}</span>
            <p className="eyebrow md:mt-2">{eyebrow}</p>
          </div>
          <div>
            <h2 data-reveal className="h2 max-w-4xl">
              {title}
            </h2>
            {lede && (
              <p data-reveal className="lede mt-6">
                {lede}
              </p>
            )}
          </div>
        </div>
        {children && <div className="mt-14 md:mt-20">{children}</div>}
      </div>
    </section>
  )
}

/** Browser chrome around a real prototype screenshot. */
export function Frame({
  src,
  alt,
  label,
  className = '',
  imgClassName = '',
}: {
  src: string
  alt: string
  label?: string
  className?: string
  imgClassName?: string
}) {
  return (
    <figure className={`frame ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-[#fbfaf7] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e4e1d8]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e4e1d8]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e4e1d8]" />
        {label && <span className="ml-3 font-mono text-[11px] text-ink-3">{label}</span>}
      </div>
      <div className="overflow-hidden">
        <img data-img-reveal src={src} alt={alt} loading="lazy" className={`block w-full ${imgClassName}`} />
      </div>
    </figure>
  )
}

/** Small line icons, drawn to one 24px grid so they read as a set. */
const PATHS: Record<string, ReactNode> = {
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" />
    </>
  ),
  helmet: (
    <>
      <path d="M4 16h16M5 16a7 7 0 0 1 14 0" />
      <path d="M10 9.5V6.5h4v3" />
      <path d="M3 19h18" />
    </>
  ),
  city: (
    <>
      <path d="M3 20h18M5 20V9l5-3v14M10 20V4h6v16M16 20v-8h3v8" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  drop: <path d="M12 3.5c3 3.8 5.5 6.8 5.5 10a5.5 5.5 0 0 1-11 0c0-3.2 2.5-6.2 5.5-10Z" />,
  shade: (
    <>
      <path d="M3 12a9 9 0 0 1 18 0Z" />
      <path d="M12 12v7a2 2 0 0 0 4 0" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15Z" />
      <path d="M10 20.5a2 2 0 0 0 4 0" />
    </>
  ),
  pause: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10 9v6M14 9v6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Z" />
      <path d="M5 19 13 11" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
}

export function Icon({ name, className = 'h-5 w-5' }: { name: keyof typeof PATHS | string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {PATHS[name]}
    </svg>
  )
}

/** Horizontal step flow: A → B → C. */
export function Flow({ steps, accentLast = true }: { steps: string[]; accentLast?: boolean }) {
  return (
    <ol data-flow className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-0">
      {steps.map((s, i) => {
        const last = i === steps.length - 1
        return (
          <li key={s} className="flex flex-1 items-center gap-3 md:gap-0">
            <div
              data-flow-step
              className={`flex-1 rounded-[10px] border px-5 py-5 ${
                last && accentLast ? 'border-ink bg-ink text-white' : 'border-line bg-white'
              }`}
            >
              <span className={`font-mono text-[11px] ${last && accentLast ? 'text-sun' : 'text-ink-3'}`}>0{i + 1}</span>
              <p className="mt-2 text-[15px] font-semibold tracking-[0.04em]">{s}</p>
            </div>
            {!last && (
              <span data-flow-arrow className="hidden px-3 text-ink-3 md:block">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            )}
          </li>
        )
      })}
    </ol>
  )
}
