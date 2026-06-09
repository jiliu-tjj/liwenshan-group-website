import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const newsBase = `${import.meta.env.BASE_URL}news/wang-kai-defense`

const featuredNews = {
  date: '2026-05-20',
  tag: '组内活动',
  title: '王凯博士顺利完成博士学位论文答辩',
  subtitle: '论文题目：单层碳纳米管阵列介电泳组装制备研究',
  cover: `${newsBase}/05-group-photo.jpg`,
  paragraphs: [
    '2026年5月20日，李文山课题组博士研究生王凯在上海交通大学顺利完成博士学位论文答辩。王凯博士论文题目为《单层碳纳米管阵列介电泳组装制备研究》，指导教师为李文山副教授。',
    '答辩过程中，王凯围绕单层碳纳米管阵列的介电泳组装制备开展系统汇报，介绍了研究背景、实验方法、关键结果与论文创新点，并就答辩委员会专家提出的问题进行了认真回应。',
    '课题组向王凯博士表示热烈祝贺，祝愿他在未来的科研与工作中继续保持探索精神，取得新的成绩。',
  ],
}

const gallery = [
  {
    src: `${newsBase}/01-defense-title.jpg`,
    caption: '王凯博士学位论文答辩现场',
  },
  {
    src: `${newsBase}/02-defense-report.jpg`,
    caption: '王凯进行论文答辩汇报',
  },
  {
    src: `${newsBase}/03-defense-report.jpg`,
    caption: '答辩汇报现场',
  },
  {
    src: `${newsBase}/04-advisor-photo.jpg`,
    caption: '答辩后与指导教师李文山副教授合影',
  },
  {
    src: `${newsBase}/05-group-photo.jpg`,
    caption: '答辩委员会与师生合影',
  },
]

const newsItems = [
  {
    date: featuredNews.date,
    tag: featuredNews.tag,
    title: featuredNews.title,
    summary: '李文山课题组博士研究生王凯完成博士学位论文答辩，论文聚焦单层碳纳米管阵列介电泳组装制备研究。',
  },
  {
    date: '2025-07-20',
    tag: '论文发表',
    title: '课题组在 ACS Nano 发表碳纳米管介电泳组装最新成果',
    summary: '围绕碳纳米管阵列制备与器件应用取得阶段性进展。',
  },
  {
    date: '2025-09-15',
    tag: '学术会议',
    title: '课题组参加全国纳米材料学术研讨会',
    summary: '团队成员围绕低维纳米材料与电子器件方向开展学术交流。',
  },
]

const tags = ['全部', '组内活动', '论文发表', '学术会议']

export default function NewsPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-full bg-white relative overflow-hidden">
      <div className="section-inner max-w-6xl mx-auto relative z-10">
        <motion.div variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <p className="section-kicker mb-4">NEWS</p>
          <h2 className="font-bold text-sjtu-blue mb-8" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)' }}>
            新闻动态
          </h2>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
            <main className="min-w-0">
              <article className="overflow-hidden border border-slate-200 bg-white shadow-[0_18px_48px_rgba(26,43,79,0.07)]">
                <img
                  src={featuredNews.cover}
                  alt="王凯博士学位论文答辩合影"
                  className="h-auto w-full object-cover"
                />
                <div className="p-6 sm:p-8">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="text-sm text-gray-400" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {featuredNews.date}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded font-medium" style={{ background: '#BE1E2D12', color: '#BE1E2D' }}>
                      {featuredNews.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold leading-snug text-sjtu-blue sm:text-3xl">
                    {featuredNews.title}
                  </h3>
                  <p className="mt-3 text-base font-medium text-sjtu-red">{featuredNews.subtitle}</p>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
                    {featuredNews.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>

              <section className="mt-10">
                <div className="mb-5 border-b border-slate-200 pb-3">
                  <p className="text-sm font-semibold tracking-[0.08em] text-sjtu-red">现场照片</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  {gallery.map((item, index) => (
                    <figure
                      key={item.src}
                      className={index === 4 ? 'sm:col-span-2' : ''}
                    >
                      <div className={`overflow-hidden border border-slate-200 bg-slate-50 ${index === 4 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                        <img src={item.src} alt={item.caption} className="h-full w-full object-cover" />
                      </div>
                      <figcaption className="mt-2 text-sm text-gray-500">{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            </main>

            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              <section>
                <h3 className="text-sm font-semibold text-gray-500 mb-3">分类</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs border border-gray-200 text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-sm font-semibold text-gray-500 mb-3">最新动态</h3>
                <div className="space-y-1">
                  {newsItems.map((item) => (
                    <div key={`${item.date}-${item.title}`} className="border-b border-gray-100 py-3 last:border-b-0">
                      <p className="text-xs text-gray-400" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {item.date}
                      </p>
                      <p className="mt-1 text-sm font-medium leading-snug text-sjtu-blue">{item.title}</p>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500">{item.summary}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-sm font-semibold text-gray-500 mb-3">时间归档</h3>
                <div className="space-y-1">
                  {['2026年', '2025年'].map((year) => (
                    <span
                      key={year}
                      className="block px-3 py-1.5 rounded text-sm text-gray-500"
                    >
                      {year}
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
