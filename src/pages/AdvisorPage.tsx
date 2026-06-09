import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Building2, Mail, MapPin, Microscope } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const advisorPhoto = `${import.meta.env.BASE_URL}advisor/li-wenshan.jpg`

const education = [
  {
    period: '2006-2010',
    degree: '学士',
    institution: '广西大学',
    field: '数理试点班专业',
  },
  {
    period: '2007-2010',
    degree: '学士',
    institution: '广西大学',
    field: '计算机科学与技术专业',
  },
  {
    period: '2010-2013',
    degree: '硕士',
    institution: '中国科学院大学',
    field: '材料工程专业',
  },
  {
    period: '2013-2016',
    degree: '博士',
    institution: '德国达姆施塔特工业大学',
    field: '材料科学与工程专业',
  },
]

const appointments = [
  {
    period: '2016.12-2017.10',
    role: '高级科学家',
    institution: '德国卡尔斯鲁厄理工学院',
    detail: '纳米材料与器件研究',
  },
  {
    period: '2017.11-2020.08',
    role: '博士后',
    institution: '英国剑桥大学',
    detail: '低维纳米材料与电子器件相关研究',
  },
  {
    period: '2020-至今',
    role: '副教授',
    institution: '上海交通大学',
    detail: '机械与动力工程学院 · 微纳工程科学研究中心系所主任',
    current: true,
  },
]

const researchDirections = [
  '低维纳米材料薄膜制备与电子器件',
  '柔性可穿戴电子器件以及传感器件',
  '纳米材料高频电子器件',
  '新型纳米材料电子输运特性',
]

const publications = [
  {
    title: 'Principles of Carbon Nanotube Dielectrophoresis',
    journal: 'Nano Research, 2020',
    authors: 'Wenshan Li, Frank Hennrich, Benjamin S. Flavel, Simone Dehm, Manfred Kappes, Ralph Krupke',
  },
  {
    title:
      'Measuring in-situ Length Distributions of Polymer-wrapped Monochiral Single-walled Carbon Nanotubes Dispersed in Toluene with Analytical Ultracentrifugation',
    journal: 'Langmuir, 2019, 35, 10, 3790-3796',
    authors:
      'Pranauv Balaji Selvasundaram, Rainer Kraft, Wenshan Li, Regina Fischer, Manfred M Kappes, Frank Hennrich, Ralph Krupke',
  },
  {
    title:
      'Chiral-Index Resolved Length Mapping of Carbon Nanotubes in Solution Using Electric-Field Induced Differential Absorption Spectroscopy',
    journal: 'Nanotechnology, 2016, 27, 375706',
    authors: 'Wenshan Li, Frank Hennrich, Benjamin S. Flavel, Manfred M. Kappes, Ralph Krupke',
  },
  {
    title:
      'Length Sorted, Large-Diameter, Polyfluorene-Wrapped Semiconducting Single-Walled Carbon Nanotubes for High Density Short Channel Transistors',
    journal: 'ACS Nano, 2016, 10, 1888',
    authors: 'Frank Hennrich, Wenshan Li, Regina Fischer, Sergei Lebedkin, Ralph Krupke, Manfred M. Kappes',
  },
  {
    title: 'Deposition of semiconducting single-walled carbon nanotubes using light-assisted dielectrophoresis',
    journal: 'Phys. Status Solidi B, 2014, 251(12), 2475',
    authors: 'Wenshan Li, Feliks Pyatkov, Simone Dehm, Benjamin S. Flavel, Ralph Krupke',
  },
  {
    title: 'Preparation of Metallic Single-Wall Carbon Nanotubes by Selective Etching',
    journal: 'ACS Nano, 2014, 8(7), 7156',
    authors: 'Peng-Xiang Hou, Wen-Shan Li, Shi-Yong Zhao, Guo-Xian Li, Chao Shi, Chang Liu, Hui-Ming Cheng',
  },
  {
    title: 'High-Quality, Highly Concentrated Semiconducting Single-Wall Carbon Nanotubes for Use in Field Effect Transistors and Biosensors',
    journal: 'ACS Nano, 2013, 7(8), 6831',
    authors:
      'Wen-Shan Li, Peng-Xiang Hou, Chang Liu, Dong-Ming Sun, Jiangtan Yuan, Shi-Yong Zhao, Li-Chang Yin, Hongtao Cong, Hui-Ming Cheng',
  },
]

const researchKeywords = ['低维纳米材料', '电子器件', '可穿戴电子', '高频电子', '电子输运']

function TimelineItem({
  period,
  title,
  subtitle,
  detail,
  current,
  isLast,
}: {
  period: string
  title: string
  subtitle: string
  detail?: string
  current?: boolean
  isLast?: boolean
}) {
  return (
    <li className="relative pl-8">
      <span
        className={`absolute left-0 top-2 h-3 w-3 rounded-full border-2 ${
          current ? 'border-sjtu-red bg-sjtu-red' : 'border-sjtu-gold bg-white'
        }`}
      />
      {!isLast && <span className="absolute left-[5px] top-6 h-[calc(100%+1rem)] w-px bg-slate-200" />}
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-sjtu-red">{period}</p>
      <h4 className="text-[1.05rem] font-semibold leading-snug text-sjtu-blue">{title}</h4>
      <p className="mt-1 text-[15px] leading-relaxed text-gray-700">{subtitle}</p>
      {detail && <p className="mt-1 text-sm leading-relaxed text-gray-500">{detail}</p>}
    </li>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-7 border-b border-slate-200 pb-4">
      <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-sjtu-red">{eyebrow}</p>
      <h3 className="text-2xl font-semibold tracking-wide text-sjtu-blue">{title}</h3>
    </div>
  )
}

export default function AdvisorPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="section-full bg-[#f7f8f6] text-slate-900"
      style={{ alignItems: 'flex-start', paddingTop: '6rem' }}
    >
      <div className="section-inner mx-auto max-w-6xl">
        <motion.div variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="mb-8 border-b border-slate-200 pb-6">
            <div>
              <p className="section-kicker mb-3">教师主页</p>
              <h2 className="text-4xl font-semibold tracking-wide text-sjtu-blue sm:text-5xl">导师介绍</h2>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem]">
            <div className="min-w-0">
              <div className="overflow-hidden border border-slate-200 bg-white shadow-[0_20px_60px_rgba(26,43,79,0.08)]">
                <div className="grid md:grid-cols-[18rem_minmax(0,1fr)]">
                  <div className="flex h-full flex-col justify-between border-r border-slate-200 bg-white p-5">
                    <div className="aspect-[4/5] overflow-hidden bg-slate-50">
                      <img
                        src={advisorPhoto}
                        alt="李文山导师照片"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <p className="text-sm font-semibold tracking-[0.12em] text-sjtu-blue">李文山</p>
                      <p className="mt-2 text-xs leading-relaxed text-gray-500">
                        副教授
                        <br />
                        微纳工程科学研究中心系所主任
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-10">
                    <div>
                      <div className="mb-7 flex flex-wrap items-center gap-3">
                        <span className="border-l-2 border-sjtu-red pl-3 text-sm font-medium text-sjtu-blue">
                          上海交通大学
                        </span>
                        <span className="text-sm text-slate-500">
                          机械与动力工程学院
                        </span>
                      </div>

                      <h3 className="text-4xl font-semibold tracking-wide text-sjtu-blue sm:text-5xl">李文山</h3>
                      <p className="mt-4 text-lg font-medium leading-relaxed text-sjtu-red">
                        副教授
                        <span className="mx-2 hidden text-slate-300 sm:inline">|</span>
                        <span className="block sm:inline">微纳工程科学研究中心系所主任</span>
                      </p>
                      <div className="mt-7 max-w-2xl border-t border-slate-200 pt-6">
                        <h4 className="mb-3 text-base font-semibold tracking-wide text-sjtu-blue">研究简介</h4>
                        <p className="text-base leading-relaxed text-gray-600">
                          研究聚焦低维纳米材料薄膜制备、电子器件、柔性可穿戴器件、
                          高频纳米电子器件及新型纳米材料电子输运特性。
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {researchKeywords.map((keyword) => (
                          <span key={keyword} className="border border-slate-200 px-3 py-1.5 text-xs text-gray-600">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-8 xl:grid-cols-2">
                <section className="bg-white p-6 shadow-[0_12px_38px_rgba(26,43,79,0.06)] ring-1 ring-slate-200 sm:p-7">
                  <SectionHeading eyebrow="教育经历" title="教育背景" />
                  <ol className="space-y-7">
                    {education.map((item, index) => (
                      <TimelineItem
                        key={`${item.period}-${item.field}`}
                        period={item.period}
                        title={`${item.degree} · ${item.field}`}
                        subtitle={item.institution}
                        isLast={index === education.length - 1}
                      />
                    ))}
                  </ol>
                </section>

                <section className="bg-white p-6 shadow-[0_12px_38px_rgba(26,43,79,0.06)] ring-1 ring-slate-200 sm:p-7">
                  <SectionHeading eyebrow="任职经历" title="工作经历" />
                  <ol className="space-y-7">
                    {appointments.map((item, index) => (
                      <TimelineItem
                        key={`${item.period}-${item.role}`}
                        period={item.period}
                        title={`${item.role} · ${item.institution}`}
                        subtitle={item.detail}
                        current={item.current}
                        isLast={index === appointments.length - 1}
                      />
                    ))}
                  </ol>
                </section>
              </div>

              <section className="mt-8 bg-white p-6 shadow-[0_12px_38px_rgba(26,43,79,0.06)] ring-1 ring-slate-200 sm:p-8">
                <SectionHeading eyebrow="论文成果" title="代表性论文专著" />
                <div className="divide-y divide-slate-100">
                  {publications.map((paper, index) => (
                    <article key={paper.title} className="grid gap-4 py-5 first:pt-0 last:pb-0 sm:grid-cols-[3rem_minmax(0,1fr)]">
                      <p className="font-mono text-sm text-sjtu-red">{String(index + 1).padStart(2, '0')}</p>
                      <div>
                        <h4 className="text-base font-semibold leading-snug text-sjtu-blue">{paper.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-gray-500">{paper.authors}</p>
                        <p className="mt-2 text-sm font-medium text-sjtu-red">{paper.journal}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <section className="bg-white p-6 shadow-[0_12px_38px_rgba(26,43,79,0.06)] ring-1 ring-slate-200">
                <h3 className="mb-5 text-lg font-semibold text-sjtu-blue">联系方式</h3>
                <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                  <div className="flex gap-3">
                    <Building2 size={17} className="mt-1 shrink-0 text-sjtu-gold" />
                    <span>微纳工程科学研究中心</span>
                  </div>
                  <a
                    href="mailto:wenshan.li@sjtu.edu.cn"
                    className="flex gap-3 transition-colors hover:text-sjtu-red"
                  >
                    <Mail size={17} className="mt-1 shrink-0 text-sjtu-gold" />
                    <span>wenshan.li@sjtu.edu.cn</span>
                  </a>
                  <div className="flex gap-3">
                    <MapPin size={17} className="mt-1 shrink-0 text-sjtu-gold" />
                    <span>上海市闵行区东川路800号上海交通大学机械楼D楼</span>
                  </div>
                </div>
              </section>

              <section className="bg-white p-6 shadow-[0_12px_38px_rgba(26,43,79,0.06)] ring-1 ring-slate-200">
                <div className="mb-4 flex items-center gap-3">
                  <Microscope size={20} className="text-sjtu-red" />
                  <h3 className="text-lg font-semibold text-sjtu-blue">研究方向</h3>
                </div>
                <div className="space-y-3">
                  {researchDirections.map((direction, index) => (
                    <div key={direction} className="border-t border-slate-100 pt-3 first:border-t-0 first:pt-0">
                      <p className="text-xs font-semibold tracking-[0.08em] text-sjtu-red">
                        方向 {String(index + 1).padStart(2, '0')}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{direction}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
                  <img
                    src={`${import.meta.env.BASE_URL}advisor/research-overview.jpg`}
                    alt="研究方向概览图"
                    className="w-full object-cover"
                  />
                </div>
              </section>

              <section className="bg-white p-6 shadow-[0_12px_38px_rgba(26,43,79,0.06)] ring-1 ring-slate-200">
                <div className="mb-4 flex items-center gap-3">
                  <BookOpen size={19} className="text-sjtu-red" />
                  <h3 className="text-lg font-semibold text-sjtu-blue">学术关键词</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {researchKeywords.map((keyword) => (
                    <span key={keyword} className="border border-slate-200 px-3 py-1.5 text-xs text-gray-600">
                      {keyword}
                    </span>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
