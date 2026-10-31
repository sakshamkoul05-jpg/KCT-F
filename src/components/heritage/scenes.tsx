/**
 * Illustrated scenes for the heritage timeline.
 *
 * Each scene is a 1600×900 SVG drawn in the site's papier-mâché palette.
 * Scroll progress through an era arrives as the CSS custom property `--p`
 * (0 → 1) on a parent element; moving parts read it in their transforms,
 * so scrolling drives the animation without re-rendering React.
 */

import type { CSSProperties, ReactNode } from "react"

const tf = (transform: string, origin?: string): CSSProperties => ({
  transform,
  transformOrigin: origin,
  transformBox: origin ? "view-box" : undefined,
})
/** Fade in between two points of the era's progress. */
const fadeIn = (from: number, to: number): CSSProperties => ({
  opacity: `clamp(0, calc((var(--p) - ${from}) / ${to - from}), 1)` as unknown as number,
})
/** Fade out between two points of the era's progress. */
const fadeOut = (from: number, to: number): CSSProperties => ({
  opacity: `clamp(0, calc((${to} - var(--p)) / ${to - from}), 1)` as unknown as number,
})

function Frame({ children, sky }: { children: ReactNode; sky: [string, string, string?] }) {
  const id = `sky-${sky.join("").replace(/#/g, "")}`
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={sky[0]} />
          <stop offset="0.65" stopColor={sky[1]} />
          {sky[2] && <stop offset="1" stopColor={sky[2]} />}
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F0C66E" stopOpacity="0.9" />
          <stop offset="1" stopColor="#F0C66E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fire" cx="0.5" cy="1" r="0.8">
          <stop offset="0" stopColor="#FFB347" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#D2361E" stopOpacity="0.7" />
          <stop offset="1" stopColor="#5A0B10" stopOpacity="0" />
        </radialGradient>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
        <symbol id="walker" viewBox="0 0 40 90">
          <circle cx="20" cy="10" r="7" />
          <path d="M12 20 Q20 16 28 20 L31 56 L26 56 L24 88 L18 88 L16 56 L9 56Z" />
        </symbol>
        <symbol id="bundle-walker" viewBox="0 0 60 90">
          <circle cx="26" cy="10" r="7" />
          <path d="M18 20 Q26 16 34 20 L37 56 L32 56 L30 88 L24 88 L22 56 L15 56Z" />
          <ellipse cx="44" cy="26" rx="13" ry="11" />
          <path d="M34 22 L42 18" stroke="currentColor" strokeWidth="3" />
        </symbol>
        <symbol id="horseman" viewBox="0 0 160 120">
          <path d="M20 62 Q30 44 62 46 L104 46 Q118 30 126 22 L138 18 L142 26 L132 34 Q130 50 122 60 L118 64 L124 98 L117 98 L110 70 L70 70 L60 98 L53 98 L56 70 Q40 72 30 92 L24 92 Q30 74 20 62Z" />
          <path d="M74 46 L78 22 Q82 12 90 16 L92 30 L96 46Z" />
          <circle cx="86" cy="8" r="7" />
          <path d="M60 0 L118 52" stroke="currentColor" strokeWidth="3" />
          <path d="M60 0 L48 4 L54 12Z" />
        </symbol>
        <symbol id="chinar-leaf" viewBox="0 0 40 40">
          <path d="M20 2 L24 12 L33 7 L30 17 L39 19 L31 24 L35 32 L24 28 L22 38 L20 30 L18 38 L16 28 L5 32 L9 24 L1 19 L10 17 L7 7 L16 12Z" />
        </symbol>
      </defs>
      <rect width="1600" height="900" fill={`url(#${id})`} />
      {children}
    </svg>
  )
}

function Ridges({ far, near, parallax = 40 }: { far: string; near: string; parallax?: number }) {
  return (
    <>
      <g style={tf(`translateY(calc(var(--p) * ${parallax * 0.4}px))`)}>
        <path fill={far} d="M0 520 L120 430 L210 470 L330 360 L420 420 L540 330 L640 410 L760 300 L880 400 L1000 340 L1120 420 L1240 320 L1360 400 L1480 350 L1600 420 L1600 900 L0 900Z" />
        <path fill="#E8ECF5" opacity="0.55" d="M300 383 L330 360 L362 386 L346 380 L330 392 L316 380Z M728 326 L760 300 L794 328 L776 322 L760 336 L744 322Z M1210 344 L1240 320 L1272 346 L1256 340 L1240 352 L1226 340Z" />
      </g>
      <path
        fill={near}
        style={tf(`translateY(calc(var(--p) * ${parallax}px))`)}
        d="M0 640 C200 560 300 600 420 580 C560 556 640 620 800 600 C960 580 1040 520 1200 560 C1340 595 1460 560 1600 590 L1600 900 L0 900Z"
      />
    </>
  )
}

/* ───────────────────────────── 1. Origins ───────────────────────────── */

function Origins() {
  const stars = [[120, 80], [260, 150], [420, 60], [610, 130], [980, 70], [1130, 160], [1290, 90], [1460, 140], [720, 40], [1540, 60]]
  return (
    <Frame sky={["#0E1645", "#7A4A5E", "#E39A4E"]}>
      <g style={fadeOut(0.1, 0.7)}>
        {stars.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 ? 1.6 : 2.4} fill="#fff" />
        ))}
      </g>
      <g style={tf("translateY(calc(var(--p) * -200px))")}>
        <circle cx="800" cy="620" r="220" fill="url(#glow)" />
        <circle cx="800" cy="620" r="64" fill="#F6D58A" />
      </g>
      <Ridges far="#2B2F6E" near="#1A1F55" />
      {/* lake with sun reflection */}
      <rect y="720" width="1600" height="180" fill="#151B4A" />
      <ellipse cx="800" cy="745" rx="140" ry="8" fill="#F0C66E" style={{ ...fadeIn(0.15, 0.6) }} />
      <ellipse cx="800" cy="770" rx="90" ry="5" fill="#F0C66E" style={fadeIn(0.3, 0.9)} />
      {/* Burzahom: menhirs and pit dwellings */}
      <g fill="#0B1030" style={tf("translateY(calc((1 - var(--p)) * 40px))")}>
        <path d="M170 720 L182 590 L214 584 L222 720Z" />
        <path d="M240 720 L246 630 L270 626 L280 720Z" />
        <path d="M300 720 L310 560 L344 556 L350 720Z" />
        <path d="M1120 720 Q1160 640 1200 720Z" />
        <path d="M1150 650 L1160 600 L1170 650Z" />
        <path d="M1260 720 Q1310 620 1360 720Z" />
        <path d="M1300 640 L1310 580 L1320 640Z" />
        <path d="M1400 720 Q1440 650 1480 720Z" />
      </g>
      <g fill="#0B1030">
        <use href="#walker" x="560" y="640" width="40" height="80" style={tf("translateX(calc(var(--p) * 120px))")} />
      </g>
    </Frame>
  )
}

/* ───────────────────────────── 2. Buddhism ───────────────────────────── */

function Buddhism() {
  return (
    <Frame sky={["#141C4C", "#3D3A7A", "#9C6A86"]}>
      <g style={tf("scale(calc(0.6 + var(--p) * 0.7))", "800px 600px")} fill="none" stroke="#F0C66E">
        {[180, 280, 380, 480].map((r, i) => (
          <circle key={r} cx="800" cy="600" r={r} strokeOpacity={0.35 - i * 0.07} strokeWidth="1.5" />
        ))}
      </g>
      <Ridges far="#26306A" near="#1A2257" />
      <g fill="#0E1442" stroke="#E3A93E" strokeWidth="2" style={tf("translateY(calc((1 - var(--p)) * 60px))")}>
        <rect x="600" y="700" width="400" height="44" />
        <rect x="650" y="660" width="300" height="40" />
        <path d="M672 660 A128 128 0 0 1 928 660 Z" />
        <rect x="778" y="516" width="44" height="22" />
        <path d="M800 516 L800 410" strokeWidth="4" />
        <ellipse cx="800" cy="500" rx="46" ry="8" />
        <ellipse cx="800" cy="474" rx="36" ry="7" />
        <ellipse cx="800" cy="450" rx="26" ry="6" />
        <ellipse cx="800" cy="428" rx="16" ry="5" />
      </g>
      <rect y="744" width="1600" height="160" fill="#0B1035" />
      {/* lotus pond */}
      <g fill="#C94F6D" style={fadeIn(0.2, 0.7)}>
        {[300, 1250].map((x) => (
          <g key={x}>
            <path d={`M${x} 800 Q${x - 30} 770 ${x - 8} 750 Q${x} 772 ${x} 800Z`} />
            <path d={`M${x} 800 Q${x + 30} 770 ${x + 8} 750 Q${x} 772 ${x} 800Z`} />
            <path d={`M${x} 800 Q${x - 12} 760 ${x} 738 Q${x + 12} 760 ${x} 800Z`} fill="#E58AA0" />
          </g>
        ))}
      </g>
      {/* monks walking toward the stupa */}
      <g fill="#B85C14" style={tf("translateX(calc(var(--p) * 260px))")}>
        {[0, 70, 140].map((dx) => (
          <use key={dx} href="#walker" x={180 + dx} y="660" width="36" height="84" />
        ))}
      </g>
    </Frame>
  )
}

/* ───────────────────────────── 3. Golden age ───────────────────────────── */

const SHARADA = ["𑆑", "𑆯", "𑆫", "𑆩", "𑆱", "𑆠", "𑆪", "𑆤", "𑆢", "𑆥"]

function GoldenAge() {
  const columns = Array.from({ length: 9 }, (_, i) => i)
  return (
    <Frame sky={["#0B1235", "#1B2A6B", "#6A4A3A"]}>
      <ellipse cx="800" cy="560" rx="560" ry="300" fill="url(#glow)" style={fadeIn(0, 0.8)} />
      <Ridges far="#1C2660" near="#141B4E" parallax={30} />
      {/* Martand: colonnade, then the central shrine */}
      <g fill="#0A0F2E" stroke="#E3A93E" strokeWidth="2">
        {columns.map((i) => (
          <g key={`l${i}`}>
            <rect x={300 + i * 42} y="610" width="34" height="130" />
            <path d={`M${306 + i * 42} 660 Q${317 + i * 42} 630 ${328 + i * 42} 660 L${328 + i * 42} 700 L${306 + i * 42} 700Z`} fill="#E3A93E" fillOpacity="0.25" />
          </g>
        ))}
        {columns.map((i) => (
          <g key={`r${i}`}>
            <rect x={928 + i * 42} y="610" width="34" height="130" />
            <path d={`M${934 + i * 42} 660 Q${945 + i * 42} 630 ${956 + i * 42} 660 L${956 + i * 42} 700 L${934 + i * 42} 700Z`} fill="#E3A93E" fillOpacity="0.25" />
          </g>
        ))}
        <rect x="290" y="596" width="1030" height="16" />
        <g style={tf("translateY(calc((1 - var(--p)) * 80px))")}>
          <rect x="690" y="500" width="220" height="240" />
          <path d="M670 506 L800 330 L930 506Z" />
          <path d="M716 440 L800 310 L884 440" fill="none" />
          <path d="M748 740 L748 600 Q760 560 780 572 Q800 530 820 572 Q840 560 852 600 L852 740Z" fill="#F0C66E" style={{ fillOpacity: "calc(0.2 + var(--p) * 0.7)" as unknown as number }} />
        </g>
      </g>
      <rect y="740" width="1600" height="160" fill="#080C26" />
      {/* lamps */}
      {[360, 520, 1080, 1240].map((x, i) => (
        <g key={x}>
          <ellipse cx={x} cy="770" rx="16" ry="5" fill="#B85C14" />
          <path d={`M${x} 766 Q${x - 6} 754 ${x} 740 Q${x + 6} 754 ${x} 766Z`} fill="#FFB347" className="kct-flicker" style={{ animationDelay: `${i * 0.3}s` }} />
        </g>
      ))}
      {/* Sharada letters rising */}
      <g fill="#F0C66E" className="font-sharada" fontSize="54">
        {SHARADA.map((ch, i) => (
          <text
            key={i}
            x={180 + i * 135}
            y={520 + (i % 3) * 60}
            style={{ ...tf(`translateY(calc(var(--p) * ${-180 - (i % 4) * 40}px))`), ...fadeIn(0.05 + (i % 5) * 0.06, 0.45 + (i % 5) * 0.06) }}
          >
            {ch}
          </text>
        ))}
      </g>
    </Frame>
  )
}

/* ───────────────────────────── 4. Lal Ded & the Rishis ───────────────────────────── */

function Rishis() {
  const leaves = Array.from({ length: 14 }, (_, i) => i)
  return (
    <Frame sky={["#1B2A6B", "#6E5C8C", "#E8B07A"]}>
      <Ridges far="#3A3F7C" near="#2A2E66" />
      <rect y="700" width="1600" height="200" fill="#1A1E50" />
      <path d="M0 760 C300 740 600 770 900 750 C1200 735 1400 760 1600 750 L1600 900 L0 900Z" fill="#14183F" />
      {/* the shrine */}
      <g fill="#120F2A" stroke="#E3A93E" strokeWidth="2" style={tf("translate(-140px, calc((1 - var(--p)) * 50px))")}>
        <rect x="1060" y="560" width="250" height="180" />
        <path d="M1020 566 L1185 476 L1350 566Z" />
        <path d="M1080 488 L1185 420 L1290 488Z" />
        <path d="M1130 428 L1185 384 L1240 428Z" />
        <rect x="1178" y="320" width="14" height="70" />
        <circle cx="1185" cy="314" r="8" />
        <rect x="1160" y="640" width="50" height="100" fill="#F0C66E" fillOpacity="0.5" />
      </g>
      {/* the chinar */}
      <g style={tf("translateY(calc((1 - var(--p)) * 30px))")}>
        <path d="M290 760 C300 640 270 560 300 470 L330 470 C350 560 330 650 350 760Z" fill="#2A1712" />
        <path d="M305 520 C260 470 220 460 190 430 M320 500 C380 450 420 440 450 400" stroke="#2A1712" strokeWidth="14" fill="none" />
        {Array.from({ length: 34 }, (_, i) => {
          const a = (i * 137.5 * Math.PI) / 180
          const r = 30 + ((i * 41) % 150)
          const size = 70 + ((i * 29) % 50)
          return (
            <use
              key={i}
              href="#chinar-leaf"
              x={330 + Math.cos(a) * r * 1.3 - size / 2}
              y={380 + Math.sin(a) * r * 0.75 - size / 2}
              width={size}
              height={size}
              fill={["#C2491F", "#A3341C", "#D95A22", "#8A2A16"][i % 4]}
            />
          )
        })}
      </g>
      {/* falling chinar leaves */}
      <g fill="#D95A22">
        {leaves.map((i) => (
          <use
            key={i}
            href="#chinar-leaf"
            x={150 + ((i * 97) % 520)}
            y={300 + ((i * 53) % 120)}
            width={22 + (i % 3) * 6}
            height={22 + (i % 3) * 6}
            className="kct-fall"
            style={{ animationDelay: `${(i * 0.7) % 6}s`, animationDuration: `${7 + (i % 4)}s` }}
          />
        ))}
      </g>
      {/* Lal Ded, wandering */}
      <g fill="#0E0B22" style={tf("translateX(calc(var(--p) * -260px))")}>
        <circle cx="900" cy="618" r="11" />
        <path d="M886 632 Q900 624 914 632 L930 742 L870 742Z" />
      </g>
    </Frame>
  )
}

/* ───────────────────────────── 5. Mughal & Afghan rule ───────────────────────────── */

function Conquest() {
  const embers = Array.from({ length: 22 }, (_, i) => i)
  return (
    <Frame sky={["#1B2A6B", "#8A4A4A", "#D9824A"]}>
      {/* the sky darkens to blood red as the era goes on */}
      <rect width="1600" height="900" fill="#4A0A0E" style={{ opacity: "calc(var(--p) * 0.9)" as unknown as number }} />
      <Ridges far="#3A1F3A" near="#2A1430" />
      {/* fires along the ridge */}
      <g style={tf("scaleY(calc(0.1 + var(--p) * 1.1))", "800px 620px")}>
        {[180, 520, 980, 1380].map((x, i) => (
          <ellipse key={x} cx={x} cy="600" rx={140 + i * 10} ry="160" fill="url(#fire)" className="kct-flicker" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </g>
      {/* smoke */}
      <g fill="#1A0A12" filter="url(#soft)" style={{ ...fadeIn(0.2, 0.7), ...tf("translateY(calc(var(--p) * -120px))") }}>
        {[200, 540, 1000, 1400].map((x) => (
          <g key={x} opacity="0.6">
            <ellipse cx={x} cy="420" rx="70" ry="50" />
            <ellipse cx={x + 30} cy="340" rx="90" ry="60" />
            <ellipse cx={x - 10} cy="250" rx="110" ry="70" />
          </g>
        ))}
      </g>
      {/* the Mughal garden: terraces, water channel, cypresses */}
      <g style={tf("translateY(calc(var(--p) * 30px))")}>
        <rect y="700" width="1600" height="200" fill="#160A1E" />
        <path d="M200 700 L1400 700 L1460 740 L140 740Z" fill="#22122A" />
        <rect x="770" y="700" width="60" height="200" fill="#3A5A8A" style={{ opacity: "calc(1 - var(--p) * 0.8)" as unknown as number }} />
        {[260, 380, 1220, 1340].map((x) => (
          <ellipse key={x} cx={x} cy="640" rx="18" ry="80" fill="#120818" />
        ))}
        <g fill="#120818" stroke="#E3A93E" strokeWidth="1.5" style={{ strokeOpacity: "calc(1 - var(--p))" as unknown as number }}>
          <rect x="680" y="600" width="240" height="100" />
          <path d="M670 600 L800 560 L930 600Z" />
          {[700, 760, 820, 880].map((x) => (
            <path key={x} d={`M${x} 700 L${x} 650 Q${x + 10} 630 ${x + 20} 650 L${x + 20} 700`} fill="#3A1A1A" />
          ))}
        </g>
      </g>
      {/* horsemen riding in */}
      <g fill="#0A0408" color="#0A0408" style={tf("translateX(calc(var(--p) * 1300px - 700px))")}>
        {[0, 150, 290, 450, 600].map((dx, i) => (
          <use key={dx} href="#horseman" x={dx * 1.3} y={600 + (i % 2) * 40} width="220" height="165" />
        ))}
      </g>
      {/* embers */}
      <g fill="#FFB347">
        {embers.map((i) => (
          <circle
            key={i}
            cx={60 + ((i * 131) % 1500)}
            cy={760 - ((i * 37) % 200)}
            r={i % 3 ? 2 : 3.5}
            className="kct-ember"
            style={{ animationDelay: `${(i * 0.37) % 5}s`, opacity: "var(--p)" as unknown as number }}
          />
        ))}
      </g>
    </Frame>
  )
}

/* ───────────────────────────── 6. The exodus ───────────────────────────── */

function Exodus() {
  const flakes = Array.from({ length: 70 }, (_, i) => i)
  const houses = [
    { x: 980, w: 150, h: 110 },
    { x: 1150, w: 170, h: 130 },
    { x: 1340, w: 140, h: 100 },
    { x: 1490, w: 130, h: 120 },
  ]
  return (
    <Frame sky={["#03061A", "#0D1440", "#1B2A6B"]}>
      <g style={tf("translateY(calc(var(--p) * 60px))")}>
        <circle cx="260" cy="170" r="54" fill="#E8ECF5" opacity="0.9" />
        <circle cx="282" cy="160" r="50" fill="#03061A" />
      </g>
      <Ridges far="#141C4C" near="#0E1442" parallax={20} />
      {/* snow-covered ground and the road out */}
      <path d="M0 700 C300 680 700 700 1000 690 C1300 680 1450 700 1600 690 L1600 900 L0 900Z" fill="#AEB6CC" />
      <path d="M1040 760 C820 760 600 800 380 820 C220 834 100 840 0 846 L0 870 C120 866 240 858 400 846 C640 826 860 790 1060 784Z" fill="#7D86A3" />
      {/* homes: lights go out one by one */}
      {houses.map((h, i) => {
        const off = 0.12 + i * 0.16
        return (
          <g key={h.x}>
            <rect x={h.x} y={740 - h.h} width={h.w} height={h.h} fill="#0A0E2A" />
            <path d={`M${h.x - 14} ${740 - h.h} L${h.x + h.w / 2} ${740 - h.h - 60} L${h.x + h.w + 14} ${740 - h.h}Z`} fill="#141A40" />
            <path d={`M${h.x - 14} ${740 - h.h} L${h.x + h.w / 2} ${740 - h.h - 60} L${h.x + h.w + 14} ${740 - h.h} L${h.x + h.w} ${740 - h.h - 6} L${h.x + h.w / 2} ${740 - h.h - 50} L${h.x} ${740 - h.h - 6}Z`} fill="#DDE2EE" />
            {[0.25, 0.65].map((fx) => (
              <rect
                key={fx}
                x={h.x + h.w * fx - 14}
                y={740 - h.h + 26}
                width="28"
                height="34"
                fill="#F0C66E"
                style={{ opacity: `clamp(0.06, calc((${off} - var(--p)) * 12), 1)` as unknown as number }}
              />
            ))}
          </g>
        )
      })}
      {/* one lamp left burning on a doorstep */}
      <g>
        <ellipse cx="1240" cy="744" rx="12" ry="4" fill="#B85C14" />
        <path d="M1240 741 Q1235 732 1240 722 Q1245 732 1240 741Z" fill="#FFB347" className="kct-flicker" />
        <circle cx="1240" cy="732" r="26" fill="url(#glow)" opacity="0.5" />
      </g>
      {/* the people leaving */}
      <g fill="#05081C" color="#05081C" style={tf("translateX(calc(var(--p) * -760px))")}>
        {[0, 70, 130, 210, 270, 350, 420, 480].map((dx, i) => (
          <use
            key={dx}
            href={i % 3 === 1 ? "#walker" : "#bundle-walker"}
            x={1000 + dx}
            y={i % 2 ? 672 : 660}
            width={i % 4 === 3 ? 44 : 64}
            height={i % 4 === 3 ? 80 : 106}
          />
        ))}
      </g>
      {/* snow */}
      <g fill="#fff">
        {flakes.map((i) => (
          <circle
            key={i}
            cx={(i * 113) % 1600}
            cy={-20 - ((i * 71) % 300)}
            r={i % 4 ? 1.8 : 3}
            className="kct-snow"
            style={{ animationDelay: `${(i * 0.29) % 8}s`, animationDuration: `${8 + (i % 5)}s` }}
          />
        ))}
      </g>
    </Frame>
  )
}

/* ───────────────────────────── 7. Keeping it alive ───────────────────────────── */

const DIASPORA = [
  { x: 640, y: 560, at: 0.15 }, // Delhi
  { x: 560, y: 620, at: 0.2 }, // Mumbai
  { x: 700, y: 640, at: 0.3 }, // Bengaluru
  { x: 420, y: 470, at: 0.4 }, // London
  { x: 210, y: 520, at: 0.5 }, // New York
  { x: 130, y: 600, at: 0.6 }, // California
  { x: 1020, y: 700, at: 0.65 }, // Melbourne
  { x: 940, y: 520, at: 0.55 }, // Singapore
  { x: 520, y: 540, at: 0.45 }, // Dubai
]
const KASHMIR = { x: 680, y: 500 }

function Preservation() {
  return (
    <Frame sky={["#1B2A6B", "#4A4A8A", "#F0C66E"]}>
      <circle cx="800" cy="300" r="380" fill="url(#glow)" style={fadeIn(0, 0.9)} />
      {/* the globe rising */}
      <g style={tf("translateY(calc((1 - var(--p)) * 220px))")}>
        <circle cx="700" cy="1080" r="640" fill="#121C4C" stroke="#E3A93E" strokeWidth="2" />
        {[0.25, 0.5, 0.75].map((k) => (
          <ellipse key={k} cx="700" cy="1080" rx={640 * k} ry="640" fill="none" stroke="#E3A93E" strokeOpacity="0.25" />
        ))}
        {[520, 640, 760, 880].map((y) => (
          <line key={y} x1="0" x2="1400" y1={y} y2={y} stroke="#E3A93E" strokeOpacity="0.2" />
        ))}
        {DIASPORA.map((d) => (
          <g key={`${d.x}-${d.y}`} style={fadeIn(d.at, d.at + 0.12)}>
            <path
              d={`M${KASHMIR.x} ${KASHMIR.y} Q${(KASHMIR.x + d.x) / 2} ${Math.min(KASHMIR.y, d.y) - 120} ${d.x} ${d.y}`}
              fill="none"
              stroke="#F0C66E"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
            <circle cx={d.x} cy={d.y} r="7" fill="#F0C66E" />
            <circle cx={d.x} cy={d.y} r="18" fill="url(#glow)" />
          </g>
        ))}
        <circle cx={KASHMIR.x} cy={KASHMIR.y} r="11" fill="#B0222A" stroke="#fff" strokeWidth="3" />
      </g>
      {/* Koshur, in its three scripts */}
      <g textAnchor="middle" fill="#fff">
        <text x="1060" y="250" fontSize="92" className="font-nastaliq" style={fadeIn(0.2, 0.45)}>کٲشُر</text>
        <text x="1060" y="380" fontSize="80" className="font-devanagari" style={fadeIn(0.35, 0.6)}>कॉशुर</text>
        <text x="1060" y="490" fontSize="76" className="font-sharada" style={fadeIn(0.5, 0.75)}>𑆑𑆯𑆶𑆫</text>
      </g>
    </Frame>
  )
}

export const SCENES = [Origins, Buddhism, GoldenAge, Rishis, Conquest, Exodus, Preservation]
