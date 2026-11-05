import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fineBase = `${import.meta.env.BASE_URL}news/fine-2026`
const defenseBase = `${import.meta.env.BASE_URL}news/wang-kai-defense`
const liuChangBase = `${import.meta.env.BASE_URL}news/liu-chang-talk-2025`

const articles = [
  {
    id: 'fine-2026',
    date: '2026-06-10',
    tag: '展会交流',
    title: '课题组参加2026未来产业新材料博览会并作展示汇报',
    subtitle: 'FINE 2026 · 碳纳米管材料、阵列晶圆、器件与集成',
    cover: `${fineBase}/04-group-expo.jpg`,
    coverAlt: '课题组成员在FINE 2026博览会现场合影',
    paragraphs: [
      '2026年6月10日，李文山课题组参加2026未来产业新材料博览会（FINE 2026），并在现场进行展示汇报。',
      '课题组围绕碳纳米管材料、阵列晶圆、器件与集成相关研究和服务平台展示成果，与参观者交流技术与应用方向。',
    ],
    gallery: [
      { src: `${fineBase}/01-presentation.jpg`, caption: '展位交流与展示汇报' },
      { src: `${fineBase}/02-booth.jpg`, caption: '碳纳米管材料、阵列晶圆、器件与集成展位' },
      { src: `${fineBase}/03-group-booth.jpg`, caption: '参展人员在展位前合影' },
      { src: `${fineBase}/04-group-expo.jpg`, caption: '参展人员在FINE 2026展会现场合影' },
    ],
  },
  {
    id: 'wang-kai-defense',
    date: '2026-05-20',
    tag: '组内活动',
    title: '王凯博士顺利完成博士学位论文答辩',
    subtitle: '论文题目：单层碳纳米管阵列介电泳组装制备研究',
    cover: `${defenseBase}/05-group-photo.jpg`,
    coverAlt: '王凯博士学位论文答辩合影',
    paragraphs: [
      '2026年5月20日，李文山课题组博士研究生王凯在上海交通大学顺利完成博士学位论文答辩。王凯博士论文题目为《单层碳纳米管阵列介电泳组装制备研究》，指导教师为李文山副教授。',
      '答辩过程中，王凯围绕单层碳纳米管阵列的介电泳组装制备开展系统汇报，介绍了研究背景、实验方法、关键结果与论文创新点，并就答辩委员会专家提出的问题进行了认真回应。',
      '课题组向王凯博士表示热烈祝贺，祝愿他在未来的科研与工作中继续保持探索精神，取得新的成绩。',
    ],
    gallery: [
      { src: `${defenseBase}/01-defense-title.jpg`, caption: '王凯博士学位论文答辩现场' },
      { src: `${defenseBase}/02-defense-report.jpg`, caption: '王凯进行论文答辩汇报' },
      { src: `${defenseBase}/03-defense-report.jpg`, caption: '答辩汇报现场' },
      { src: `${defenseBase}/04-advisor-photo.jpg`, caption: '答辩后与指导教师李文山副教授合影' },
      { src: `${defenseBase}/05-group-photo.jpg`, caption: '答辩委员会与师生合影' },
    ],
  },
  {
    id: 'liu-chang-talk-2025',
    date: '2025-12-18',
    tag: '学术报告',
    title: '中国科学院金属研究所刘畅研究员来访并作学术报告',
    subtitle: '报告题目：单壁碳纳米管宏观体及其复合结构的制备与性能研究',
    cover: `${liuChangBase}/01-title.jpg`,
    coverAlt: '刘畅研究员学术报告现场',
    paragraphs: [
      '2025年12月18日上午，应李文山副教授邀请，中国科学院金属研究所刘畅研究员在上海交通大学机械与动力工程学院高田会堂作题为《单壁碳纳米管宏观体及其复合结构的制备与性能研究》的学术报告。',
      '刘畅研究员是中国科学院金属研究所先进炭及二维材料研究部主任、博士生导师，主要从事碳纳米管的制备、性能与应用研究，已发表SCI收录论文200余篇，编著出版专著《碳纳米管》，并担任《Carbon》和《Nano Materials Science》期刊副主编。',
      '报告中，刘畅研究员介绍了采用浮动催化剂化学气相沉积法宏量制备高纯度单壁碳纳米管，并通过气相过滤连续制备大面积高质量薄膜的研究进展；围绕单壁碳纳米管网络结构与相互作用的调控，展示了其在透明导电电极、柔性热电复合薄膜及器件中的应用；还介绍了湿法纺丝制备高电导率、高强度单壁碳纳米管纤维，以及铜包覆单壁碳纳米管核壳复合纤维等工作。',
      '报告结束后，现场师生围绕相关问题与刘畅研究员进行了交流讨论。',
    ],
    gallery: [
      { src: `${liuChangBase}/01-title.jpg`, caption: '刘畅研究员作学术报告' },
      { src: `${liuChangBase}/02-speaker.jpg`, caption: '报告现场' },
      { src: `${liuChangBase}/03-audience.jpg`, caption: '师生交流讨论' },
    ],
  },
]

const latest = [
  { date: '2026-09-17', tag: '论文发表', title: '课题组在 Small 发表碳纳米管提纯研究论文', href: '#/publications', summary: '王凯参与、李文山为通讯作者的研究论文已发表。', targetId: '' },
  { date: '2026-08-31', tag: '论文发表', title: '课题组在 ACS Applied Materials & Interfaces 发表综述', href: '#/publications', summary: '综述碳纳米管接触层在硅光伏中的应用。', targetId: '' },
  ...articles.map((article) => ({ date: article.date, tag: article.tag, title: article.title, href: '#/news', summary: article.subtitle, targetId: article.id })),
]

export default function NewsPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-full relative bg-white">
      <div className="section-inner mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }}>
          <p className="section-kicker mb-4">NEWS</p>
          <h2 className="mb-8 text-3xl font-bold text-sjtu-blue sm:text-4xl lg:text-[2.5rem]">新闻动态</h2>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
            <main className="min-w-0 space-y-14">
              {articles.map((article) => (
                <article id={article.id} key={article.id} className="scroll-mt-24">
                  <div className="overflow-hidden border border-slate-200 bg-white shadow-[0_18px_48px_rgba(26,43,79,0.07)]">
                    <img src={article.cover} alt={article.coverAlt} className="h-auto w-full object-cover" />
                    <div className="p-6 sm:p-8">
                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        <time dateTime={article.date} className="text-sm text-gray-400">{article.date}</time>
                        <span className="rounded bg-sjtu-red/10 px-2.5 py-1 text-xs font-medium text-sjtu-red">{article.tag}</span>
                      </div>
                      <h3 className="text-2xl font-semibold leading-snug text-sjtu-blue sm:text-3xl">{article.title}</h3>
                      <p className="mt-3 text-base font-medium text-sjtu-red">{article.subtitle}</p>
                      <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
                        {article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className="mb-5 border-b border-slate-200 pb-3 text-sm font-semibold tracking-[0.08em] text-sjtu-red">现场照片</p>
                    <div className="grid gap-5 sm:grid-cols-2">
                      {article.gallery.map((photo) => (
                        <figure key={photo.src}>
                          <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`查看大图：${photo.caption}`} className="block aspect-[4/3] overflow-hidden border border-slate-200 bg-slate-50">
                            <img src={photo.src} alt={photo.caption} loading="lazy" className="h-full w-full object-cover" />
                          </a>
                          <figcaption className="mt-2 text-sm text-gray-500">{photo.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </main>

            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              <section>
                <h3 className="mb-3 text-sm font-semibold text-gray-500">最新动态</h3>
                <div className="space-y-1">
                  {latest.map((item) => (
                    <a key={`${item.date}-${item.title}`} href={item.href} onClick={(event) => {
                      if (item.targetId) {
                        event.preventDefault()
                        document.getElementById(item.targetId)?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }} className="block border-b border-gray-100 py-3 last:border-b-0 hover:text-sjtu-red">
                      <time dateTime={item.date} className="text-xs text-gray-400">{item.date}</time>
                      <p className="mt-1 text-sm font-medium leading-snug text-sjtu-blue">{item.title}</p>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500">{item.summary}</p>
                    </a>
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
