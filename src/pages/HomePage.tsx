import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Atom, Cpu, Radio, Zap, ArrowDown, Mail, GraduationCap, ChevronRight } from 'lucide-react'
import { siteConfig } from '../data/site'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const sectionIds = ['hero', 'about', 'stats', 'research', 'news', 'cta']

const researchAreas = [
  { icon: Atom, title: '低维纳米材料薄膜制备与器件组装', desc: '开发高质量碳纳米管等低维纳米材料的可控薄膜制备技术，研究大面积均匀组装与器件集成方法，建立材料结构—性能关联。', tags: ['碳纳米管', '薄膜制备', '器件组装'], accent: '#BE1E2D' },
  { icon: Cpu, title: '柔性/可穿戴电子器件及传感器', desc: '基于纳米材料的柔性传感器设计与制备，探索在健康监测、人机交互、环境感知等场景中的应用，实现高性能与优异机械柔性。', tags: ['柔性电子', '传感器', '可穿戴设备'], accent: '#1A2B4F' },
  { icon: Radio, title: '纳米材料高频电子器件研发', desc: '研究碳纳米管等纳米材料在射频与毫米波频段的器件性能，开发面向后摩尔时代的高性能、低功耗高频电子器件。', tags: ['射频电子', '高频器件', '后摩尔'], accent: '#C4962C' },
  { icon: Zap, title: '新型纳米材料电子输运特性', desc: '探索新型低维材料的载流子输运机理，通过多尺度表征与理论建模揭示材料本征电子特性，指导器件优化与新材料筛选。', tags: ['电子输运', '物性研究', '机理探索'], accent: '#2C4270' },
]

const stats = [
  { value: 40, suffix: '+', label: '发表论文', href: '#/publications' },
  { value: 5, suffix: '+', label: '在研项目', href: '#/research' },
  { value: 10, suffix: '+', label: '团队成员', href: '#/members' },
]

const newsItems = [
  { date: '2025-09-15', tag: '学术会议', title: '课题组参加2025年全国纳米材料学术研讨会' },
  { date: '2025-07-20', tag: '论文发表', title: '课题组在ACS Nano发表碳纳米管介电泳组装最新成果' },
  { date: '2025-06-01', tag: '组内活动', title: '恭喜王同学通过博士学位论文答辩' },
]

const scienceImages = {
  swcnt: `${import.meta.env.BASE_URL}cnt-background.svg`,
  cathode: `${import.meta.env.BASE_URL}cnt-background.svg`,
}

type ScienceImageKey = keyof typeof scienceImages

function ScienceBackdrop({
  image,
  className = '',
  opacity = 0.16,
  position = 'center',
  tone = 'light',
}: {
  image: ScienceImageKey
  className?: string
  opacity?: number
  position?: string
  tone?: 'light' | 'dark' | 'none'
}) {
  const overlay =
    tone === 'none'
      ? 'transparent'
      : tone === 'dark'
      ? 'linear-gradient(90deg, rgba(36,5,10,0.66), rgba(36,5,10,0.22) 42%, rgba(154,24,36,0.16))'
      : 'linear-gradient(135deg, rgba(255,255,255,0.76), rgba(252,246,247,0.94))'

  return (
    <div aria-hidden="true" className={`absolute pointer-events-none overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url("${scienceImages[image]}")`,
          backgroundPosition: position,
          opacity,
          filter: 'contrast(1.22) brightness(0.98)',
          transform: 'scale(1.02)',
        }}
      />
      <div className="absolute inset-0" style={{ background: overlay }} />
    </div>
  )
}

function VisibleCNTNetwork() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="#070707" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-100 718 C190 570 314 355 548 430 C760 498 820 210 1044 278 C1266 346 1358 585 1710 354" strokeWidth="32" opacity="0.72" />
        <path d="M-110 505 C160 418 305 210 520 282 C736 354 846 118 1070 170 C1308 225 1425 355 1708 188" strokeWidth="23" opacity="0.68" />
        <path d="M-96 804 C162 642 360 650 548 712 C742 776 902 598 1110 660 C1328 726 1460 758 1720 650" strokeWidth="26" opacity="0.70" />
        <path d="M-80 270 C150 105 342 90 536 168 C760 258 872 366 1092 300 C1305 236 1428 70 1710 82" strokeWidth="21" opacity="0.66" />
        <path d="M50 940 C232 760 420 790 612 672 C810 550 880 440 1096 430 C1325 420 1460 510 1705 460" strokeWidth="20" opacity="0.64" />
        <path d="M-70 95 C205 52 338 248 552 220 C768 192 842 28 1068 54 C1310 82 1452 222 1710 218" strokeWidth="17" opacity="0.62" />
      </g>
      <g fill="none" stroke="#000" strokeLinecap="round">
        <path d="M-30 670 C220 550 370 485 590 520 C790 552 930 565 1120 500 C1330 430 1458 402 1660 368" strokeWidth="5" opacity="0.56" />
        <path d="M-22 690 C226 570 380 505 598 540 C800 572 940 586 1130 522 C1342 452 1470 425 1670 390" strokeWidth="4" opacity="0.50" />
        <path d="M76 438 C270 378 390 270 580 318 C790 372 890 292 1080 260 C1288 226 1412 280 1585 235" strokeWidth="5" opacity="0.54" />
        <path d="M84 458 C278 398 398 290 588 338 C798 392 902 312 1088 282 C1298 248 1422 302 1595 256" strokeWidth="4" opacity="0.48" />
        <path d="M130 205 C320 172 420 212 585 242 C775 276 920 158 1085 165 C1296 174 1418 210 1598 176" strokeWidth="4" opacity="0.46" />
      </g>
      <g fill="#000" opacity="0.72">
        <circle cx="548" cy="430" r="13" />
        <circle cx="1044" cy="278" r="10" />
        <circle cx="1110" cy="660" r="11" />
        <circle cx="536" cy="168" r="8" />
        <circle cx="1092" cy="300" r="7" />
      </g>
    </svg>
  )
}

/* ═══════════════════════════════════════
   Fixed scroll arrow
   ═══════════════════════════════════════ */
function FixedArrow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight
      let best = 0; let bestOverlap = 0
      sectionIds.forEach((id, i) => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const overlap = Math.max(0, Math.min(vh, rect.bottom) - Math.max(0, rect.top))
        if (overlap > bestOverlap) { bestOverlap = overlap; best = i }
      })
      setCurrent(best)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (current >= sectionIds.length - 1) return null

  const nextId = sectionIds[current + 1]
  const isDark = current === 0

  return (
    <div className="fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 pointer-events-none md:block">
      <button
        onClick={() => document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth' })}
        className="pointer-events-auto cursor-pointer"
        aria-label="下一页"
      >
        <ArrowDown size={36}
          className={`transition-colors duration-300 animate-bounce ${
            isDark ? 'text-white/30 hover:text-white/70' : 'text-gray-400 hover:text-sjtu-red'
          }`}
        />
      </button>
    </div>
  )
}

/* ═══════════════════════════════════════
   HomePage — with smooth page-by-page scroll
   ═══════════════════════════════════════ */
export default function HomePage() {
  const scrolling = useRef(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrolling.current) return
      const delta = e.deltaY
      if (Math.abs(delta) < 30) return // ignore tiny scrolls / trackpad

      const vh = window.innerHeight
      const currentY = window.scrollY

      // Find current section
      let currentIdx = 0
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= currentY + vh * 0.3) {
          currentIdx = i
          break
        }
      }

      let targetIdx: number
      if (delta > 0) {
        targetIdx = Math.min(currentIdx + 1, sectionIds.length - 1)
      } else {
        targetIdx = Math.max(currentIdx - 1, 0)
      }

      if (targetIdx === currentIdx) return

      e.preventDefault()
      scrolling.current = true
      const target = document.getElementById(sectionIds[targetIdx])
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
      setTimeout(() => { scrolling.current = false }, 900)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div>
      <Hero />
      <About />
      <Stats />
      <Research />
      <News />
      <CTA />
      <FixedArrow />
    </div>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section id="hero" className="section-full hero-section relative overflow-hidden"
      style={{ background: '#5E0D18' }}>
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#7B111F_0%,#BE1E2D_54%,#5E0D18_100%)]" />
      <VisibleCNTNetwork />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(70,8,16,0.20),rgba(190,30,45,0.06)_48%,rgba(70,8,16,0.14)),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(38,5,10,0.16))]" />
      <div className="absolute left-1/2 top-1/2 h-[24rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 bg-[#3A0811]/35 blur-3xl" />
      <div className="section-inner relative z-10 text-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <p className="text-white/60 text-sm sm:text-base tracking-[0.2em] mb-8 sm:mb-10" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            SHANGHAI JIAO TONG UNIVERSITY &middot; SCHOOL OF MECHANICAL ENGINEERING
          </p>
          <h1 className="mb-6 text-balance text-[2.7rem] font-bold leading-[1.15] tracking-wide text-white sm:text-6xl lg:text-[4.5rem]">
            {siteConfig.name}
          </h1>
          <p className="text-white/75 text-xl sm:text-2xl mb-3 font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Li Wenshan Research Group</p>
          <p className="text-white/55 text-base sm:text-lg">{siteConfig.lab}</p>
        </motion.div>
      </div>
    </section>
  )
}

/* ── About ── */
function About() {
  const ref = useRef(null); const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="about" ref={ref} className="section-full bg-white relative overflow-hidden">
      <ScienceBackdrop image="swcnt" className="-bottom-24 -left-20 h-[50%] w-[48%] opacity-70 md:h-[62%] md:w-[42%]" opacity={0.11} position="center" />
      <div className="section-inner max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-center">
          <motion.div className="md:col-span-3" variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <p className="section-kicker mb-4">ABOUT US</p>
            <h2 className="mb-8 text-3xl font-bold text-sjtu-blue sm:text-4xl lg:text-[2.5rem]">课题组简介</h2>
            <div className="space-y-5 text-lg leading-relaxed text-gray-600">
              <p>本课题组依托<strong className="text-gray-800">上海交通大学机械与动力工程学院</strong>和<strong className="text-gray-800">微纳工程科学全国重点实验室</strong>，聚焦于<strong style={{ color: '#BE1E2D' }}>低维纳米材料高性能电子器件与传感器</strong>的研发。</p>
              <p>课题组以碳纳米管（CNT）等一维/二维纳米材料为核心研究对象，围绕材料可控制备、器件组装、性能表征及系统集成等关键科学问题开展系统性研究，致力于推动后摩尔时代新型半导体器件的突破。</p>
              <p>课题组与德国卡尔斯鲁厄理工学院、英国剑桥大学等多所国际顶尖高校保持密切合作，欢迎具有材料、物理、半导体、微电子背景的同学加入。</p>
            </div>
          </motion.div>
          <motion.div className="md:col-span-2" variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div className="academic-card aspect-[3/4] flex items-center justify-center relative overflow-hidden">
              <ScienceBackdrop image="swcnt" className="inset-0" opacity={0.18} position="center" />
              <div className="text-center text-sjtu-blue/35 relative z-10"><GraduationCap size={56} className="mx-auto mb-3" /><span className="text-base">导师照片</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Stats ── */
function Stats() {
  const ref = useRef(null); const inView = useInView(ref, { once: true })
  return (
    <section id="stats" ref={ref} className="section-full relative overflow-hidden" style={{ background: '#1A2B4F' }}>
      <ScienceBackdrop image="cathode" className="inset-y-0 right-0 w-full md:w-[62%]" opacity={0.22} position="center" tone="dark" />
      <div className="absolute inset-0 bg-[#4A0914]/78" />
      <div className="section-inner max-w-3xl mx-auto relative z-10">
        <div className="grid grid-cols-3 gap-4 text-center md:gap-16">
          {stats.map((stat, i) => (
            <motion.a
              key={i}
              href={stat.href}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group block no-underline"
            >
              <div className="mb-2 text-4xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:scale-105 sm:text-5xl lg:text-[3.5rem]">
                <AnimatedCount target={stat.value} trigger={inView} delay={i * 200} />
                <span className="text-white/35 font-light">{stat.suffix}</span>
              </div>
              <div className="text-white/55 text-sm group-hover:text-white/80 transition-colors duration-300 sm:text-lg">
                {stat.label}
                <span className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-white/40 text-sm">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCount({ target, trigger, delay = 0 }: { target: number; trigger: boolean; delay?: number }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let current = 0
    let interval: ReturnType<typeof setInterval> | null = null
    const step = Math.max(1, Math.ceil(target / (2800 / 16)))
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        current += step
        if (current >= target) { setCount(target); if (interval) clearInterval(interval) }
        else setCount(current)
      }, 16)
    }, delay)
    return () => { clearTimeout(timeout); if (interval) clearInterval(interval) }
  }, [target, trigger, delay])
  return <>{count}</>
}

/* ── Research ── */
function Research() {
  const ref = useRef(null); const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="research" ref={ref} className="section-full bg-gray-50/70 relative overflow-hidden">
      <ScienceBackdrop image="swcnt" className="-right-20 top-0 h-[54%] w-[60%]" opacity={0.10} position="center" />
      <div className="section-inner max-w-6xl mx-auto relative z-10">
        <motion.div className="text-center mb-16" variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <p className="section-kicker mb-4">RESEARCH</p>
          <h2 className="mb-5 text-3xl font-bold text-sjtu-blue sm:text-4xl lg:text-[2.5rem]">研究方向</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">围绕低维纳米材料电子器件，开展从材料制备到器件应用的全链条研究</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, i) => (
            <motion.div key={i} variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ delay: i * 0.08 }}
              className="academic-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-xl md:p-7">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105" style={{ background: area.accent + '12', color: area.accent }}><area.icon size={24} /></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-snug">{area.title}</h3>
              <p className="text-[17px] text-gray-500 leading-relaxed mb-5">{area.desc}</p>
              <div className="flex flex-wrap gap-2">{area.tags.map(tag => <span key={tag} className="text-sm px-3 py-1 rounded-md bg-gray-100 text-gray-500 group-hover:bg-red-50 group-hover:text-sjtu-red transition-colors">{tag}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── News ── */
function News() {
  const ref = useRef(null); const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="news" ref={ref} className="section-full bg-white relative overflow-hidden">
      <ScienceBackdrop image="cathode" className="-bottom-16 -right-10 h-[44%] w-[54%]" opacity={0.10} position="center" />
      <div className="section-inner max-w-6xl mx-auto relative z-10">
        <motion.div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-10" variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div>
            <p className="section-kicker mb-4">NEWS</p>
            <h2 className="text-3xl font-bold text-sjtu-blue sm:text-4xl lg:text-[2.5rem]">新闻动态</h2>
          </div>
          <a href="#/news" className="hidden sm:flex items-center gap-1.5 text-lg font-medium text-sjtu-red hover:gap-2.5 transition-all">查看全部 <ChevronRight size={20} /></a>
        </motion.div>
        <div className="space-y-0">
          {newsItems.map((item, i) => (
            <motion.a key={i} href="#/news" variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ delay: i * 0.08 }}
              className="group flex flex-col gap-2 py-5 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/60 -mx-4 px-4 rounded-lg transition-colors sm:flex-row sm:items-center sm:gap-8 sm:py-6">
              <span className="text-lg text-gray-400 whitespace-nowrap min-w-[100px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{item.date}</span>
              <span className="text-sm px-3 py-1 rounded-md font-medium whitespace-nowrap" style={{ background: '#BE1E2D12', color: '#BE1E2D' }}>{item.tag}</span>
              <span className="text-lg text-gray-700 group-hover:text-sjtu-red transition-colors sm:truncate sm:text-xl">{item.title}</span>
            </motion.a>
          ))}
        </div>
        <a href="#/news" className="sm:hidden flex items-center justify-center gap-1.5 mt-8 text-lg font-medium text-sjtu-red">查看全部 <ChevronRight size={20} /></a>
      </div>
    </section>
  )
}

/* ── CTA ── */
function CTA() {
  const ref = useRef(null); const inView = useInView(ref, { once: true })
  return (
    <section id="cta" ref={ref} className="section-full relative overflow-hidden" style={{ background: '#FAFAFA' }}>
      <ScienceBackdrop image="swcnt" className="-left-24 top-0 h-[52%] w-[52%]" opacity={0.09} position="center" />
      <div className="section-inner max-w-3xl mx-auto text-center relative z-10">
        <motion.div variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <p className="section-kicker mb-4">JOIN US</p>
          <h2 className="mb-6 text-3xl font-bold text-sjtu-blue sm:text-4xl lg:text-[2.5rem]">加入我们</h2>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-xl mx-auto">课题组长期招收博士、硕士研究生。欢迎具有微纳器件加工经验、材料、物理、半导体、微电子背景的同学联系报考。本科生科研训练同样欢迎。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#/recruitment" className="inline-flex items-center justify-center gap-2.5 px-10 py-3.5 rounded-lg text-lg font-medium text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg" style={{ background: '#BE1E2D' }}><GraduationCap size={20} />查看招生详情</a>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center justify-center gap-2.5 px-10 py-3.5 rounded-lg text-lg font-medium border-2 transition-all duration-200 hover:bg-sjtu-red hover:text-white hover:border-sjtu-red" style={{ borderColor: '#BE1E2D', color: '#BE1E2D' }}><Mail size={20} />联系导师</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
