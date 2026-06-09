import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Mail, MapPin } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const education = [
  {
    label: '学士',
    year: '',
    school: '广西大学',
    detail: '物理学 & 计算机科学 · 双学士学位',
  },
  {
    label: '硕士',
    year: '2013',
    school: '中国科学院金属研究所',
    detail: '材料工程 · 先进炭材料研究部',
  },
  {
    label: '博士',
    year: '2016',
    school: '德国达姆施塔特工业大学',
    detail: '材料科学 · 自然科学博士（在卡尔斯鲁厄理工学院纳米技术研究所完成）',
  },
]

const experience = [
  {
    label: '高级科学家',
    year: '2016',
    school: '德国卡尔斯鲁厄理工学院 (KIT)',
    detail: '纳米材料高频电子学',
  },
  {
    label: '副研究员',
    year: '2017',
    school: '英国剑桥大学三一学院',
    detail: '工程系 · 二维材料射频电子学',
  },
  {
    label: '副教授',
    year: '至今',
    school: '上海交通大学',
    detail: '机械与动力工程学院 · 微纳工程科学全国重点实验室',
    highlight: true,
  },
]

const directions = [
  { title: '碳纳米管 CMOS 器件', desc: '超高纯度半导体碳纳米管悬浮液制备、晶圆级阵列组装与高性能窄沟道 CMOS 电子器件研发' },
  { title: '碳纳米管集成电路', desc: '碳纳米管大规模集成电路设计与制造，推动后摩尔时代高性能低功耗芯片技术' },
  { title: '金属型碳纳米管互连', desc: '金属型碳纳米管悬浮液制备，探索其作为先进芯片连接线在三维集成中的应用' },
  { title: '低维纳米材料与器件', desc: '二维材料等低维纳米薄膜制备、器件组装与电子输运特性表征' },
  { title: '柔性可穿戴电子', desc: '基于纳米材料的柔性电子器件与智能传感器，面向健康监测与人机交互' },
  { title: '高频纳米电子器件', desc: '纳米材料在高频、射频领域的新型电子器件开发与性能优化' },
]

const projects = [
  { name: '东方英才计划青年项目', period: '2024 – 2026', desc: '基于介电泳技术的碳纳米管阵列组装制程' },
  { name: '中科盈德极石微纳前沿科技联合实验室', period: '2025 – 2028', desc: '校企合作平台，推动纳米材料器件从实验室走向产业化' },
]

export default function AdvisorPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-full bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sjtu-red/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sjtu-blue/3 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="section-inner max-w-6xl mx-auto relative z-10">
        <motion.div variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          <p className="section-kicker mb-4">ADVISOR</p>
          <h2 className="font-bold text-sjtu-blue mb-10" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)' }}>
            导师介绍
          </h2>

          {/* ── Hero card: photo + identity ── */}
          <div className="academic-card overflow-hidden mb-12">
            <div className="grid md:grid-cols-12">
              {/* Left: photo area */}
              <div className="md:col-span-4 bg-gradient-to-br from-sjtu-blue/8 via-sjtu-blue/3 to-white p-6 sm:p-8 flex items-center justify-center">
                <div className="aspect-[3/4] w-full max-w-64 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-sjtu-blue/8 flex items-center justify-center">
                      <span className="text-3xl font-bold text-sjtu-blue/25">李</span>
                    </div>
                    <p className="text-sm text-gray-400">导师照片待补充</p>
                  </div>
                </div>
              </div>

              {/* Right: basic info */}
              <div className="md:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-sjtu-blue tracking-wide mb-2">李文山</h3>
                <p className="text-base sm:text-lg text-sjtu-red font-medium mb-6">
                  副教授 · 博士生导师
                </p>

                <div className="space-y-3 text-[15px] text-gray-600">
                  <div className="flex items-start gap-3">
                    <Building2 size={17} className="mt-0.5 shrink-0 text-sjtu-gold" />
                    <span>上海交通大学机械与动力工程学院<br />微纳工程科学全国重点实验室</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={17} className="mt-0.5 shrink-0 text-sjtu-gold" />
                    <span>上海市闵行区东川路800号 机械楼D楼</span>
                  </div>
                  <a
                    href="mailto:wenshan.li@sjtu.edu.cn"
                    className="flex items-center gap-3 hover:text-sjtu-red transition-colors"
                  >
                    <Mail size={17} className="shrink-0 text-sjtu-gold" />
                    <span>wenshan.li@sjtu.edu.cn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Two-column grid ── */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Left column: Education + Experience */}
            <div className="space-y-8">
              {/* Education */}
              <div>
                <h4 className="text-lg font-semibold text-sjtu-blue mb-5 pb-3 border-b border-gray-100">
                  <span className="inline-block w-1 h-4 bg-sjtu-red rounded-full mr-2 align-middle -mt-1" />
                  教育背景
                </h4>
                <div className="relative pl-6 border-l-2 border-gray-100 space-y-5">
                  {education.map((item, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[calc(1.5rem+5px)] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-sjtu-red" />
                      <span className="text-xs font-semibold text-sjtu-red tracking-wider uppercase bg-sjtu-red/5 px-2 py-0.5 rounded">
                        {item.label}
                      </span>
                      <p className="mt-1.5 font-medium text-gray-800 text-[15px]">
                        {item.school}
                        {item.year && (
                          <span className="ml-2 text-sm font-normal text-gray-400">{item.year} 年</span>
                        )}
                      </p>
                      <p className="text-[13px] text-gray-500 mt-0.5">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-lg font-semibold text-sjtu-blue mb-5 pb-3 border-b border-gray-100">
                  <span className="inline-block w-1 h-4 bg-sjtu-red rounded-full mr-2 align-middle -mt-1" />
                  工作经历
                </h4>
                <div className="relative pl-6 border-l-2 border-gray-100 space-y-5">
                  {experience.map((item, i) => (
                    <div key={i} className={`relative ${item.highlight ? 'bg-sjtu-red/[0.03] -mx-4 px-4 py-3 rounded-lg border border-sjtu-red/10' : ''}`}>
                      <div className={`absolute -left-[calc(1.5rem+5px)] top-1.5 w-3 h-3 rounded-full border-2 ${item.highlight ? 'bg-sjtu-red border-sjtu-red' : 'bg-white border-sjtu-red'}`} />
                      <span className="text-xs font-semibold text-sjtu-red tracking-wider uppercase bg-sjtu-red/5 px-2 py-0.5 rounded">
                        {item.label}
                      </span>
                      <p className="mt-1.5 font-medium text-gray-800 text-[15px]">
                        {item.school}
                        <span className="ml-2 text-sm font-normal text-gray-400">{item.year}</span>
                      </p>
                      <p className="text-[13px] text-gray-500 mt-0.5">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: Research + Projects + Collaboration */}
            <div className="space-y-8">
              {/* Research Directions */}
              <div>
                <h4 className="text-lg font-semibold text-sjtu-blue mb-5 pb-3 border-b border-gray-100">
                  <span className="inline-block w-1 h-4 bg-sjtu-red rounded-full mr-2 align-middle -mt-1" />
                  研究方向
                </h4>
                <div className="space-y-3">
                  {directions.map((d, i) => (
                    <div key={i} className="academic-card p-4 group hover:border-sjtu-red/20 transition-all duration-300">
                      <h5 className="font-semibold text-gray-800 text-[15px] group-hover:text-sjtu-red transition-colors">
                        {String(i + 1).padStart(2, '0')} · {d.title}
                      </h5>
                      <p className="text-[13px] text-gray-500 mt-1.5 leading-relaxed">{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h4 className="text-lg font-semibold text-sjtu-blue mb-5 pb-3 border-b border-gray-100">
                  <span className="inline-block w-1 h-4 bg-sjtu-red rounded-full mr-2 align-middle -mt-1" />
                  在研项目
                </h4>
                <div className="space-y-3">
                  {projects.map((p, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-lg bg-slate-50 border border-gray-100">
                      <span className="text-xs font-semibold text-sjtu-red shrink-0 mt-0.5 whitespace-nowrap">{p.period}</span>
                      <div>
                        <p className="font-medium text-gray-800 text-[15px]">{p.name}</p>
                        <p className="text-[13px] text-gray-500 mt-1">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* International Collaboration */}
              <div className="rounded-xl bg-gradient-to-br from-sjtu-blue/5 to-sjtu-red/5 border border-gray-100 p-5">
                <h4 className="font-semibold text-sjtu-blue text-[15px] mb-2">国际合作</h4>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  课题组与德国卡尔斯鲁厄理工学院（KIT）、德国洪堡大学、英国剑桥大学、英国伦敦大学学院（UCL）
                  等国际顶尖高校团队保持紧密合作，致力于后摩尔定律时代新型高性能低功耗电子及传感应用的研发。
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
