import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Search } from 'lucide-react'
import { publications } from '../data/publications'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const years = ['全部', ...Array.from(new Set(publications.map((publication) => String(publication.year))))]

export default function PublicationsPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [year, setYear] = useState('全部')
  const [query, setQuery] = useState('')
  const filtered = publications.filter((publication) => {
    if (year !== '全部' && String(publication.year) !== year) return false
    const searchText = `${publication.title} ${publication.authors} ${publication.journal} ${publication.doi}`.toLowerCase()
    return searchText.includes(query.trim().toLowerCase())
  })

  return (
    <section ref={ref} className="section-full relative overflow-hidden bg-white">
      <div className="section-inner relative z-10 mx-auto max-w-6xl">
        <motion.div variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <p className="section-kicker mb-4">PUBLICATIONS</p>
          <h2 className="mb-4 text-3xl font-bold text-sjtu-blue sm:text-4xl lg:text-[2.5rem]">论文成果</h2>
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-gray-500">
            以下收录王凯参与、李文山为通讯作者的已发表论文。点击标题可查看期刊页面及 DOI。
          </p>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2" aria-label="按年份筛选论文">
              {years.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setYear(item)}
                  aria-pressed={year === item}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${year === item ? 'border-sjtu-red bg-sjtu-red text-white' : 'border-gray-200 text-gray-500 hover:border-sjtu-red hover:text-sjtu-red'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="relative block sm:w-64">
              <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <span className="sr-only">搜索论文</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="搜索标题、作者、期刊…"
                className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-3 text-sm text-gray-700 outline-none transition-colors focus:border-sjtu-red"
              />
            </label>
          </div>

          <p className="mb-3 text-sm text-gray-400" aria-live="polite">共 {filtered.length} 篇</p>
          <div className="divide-y divide-gray-100 border-t border-gray-100">
            {filtered.map((publication, index) => (
              <article key={publication.doi} className="group flex gap-4 py-6 sm:gap-7">
                <span className="min-w-8 pt-1 text-sm text-gray-400">[{index + 1}]</span>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded bg-sjtu-red/10 px-2 py-0.5 text-xs font-medium text-sjtu-red">{publication.kind}</span>
                    <span className="text-xs text-gray-400">{publication.year}</span>
                  </div>
                  <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1.5 text-lg font-semibold leading-snug text-sjtu-blue transition-colors hover:text-sjtu-red">
                    {publication.title}<ArrowUpRight size={16} className="mt-1 shrink-0" aria-hidden="true" />
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{publication.authors}</p>
                  <p className="mt-1 text-sm text-gray-500"><cite>{publication.journal}</cite>, {publication.citation} · DOI: {publication.doi}</p>
                </div>
              </article>
            ))}
            {filtered.length === 0 && <p className="py-10 text-center text-gray-500">没有找到匹配的论文。</p>}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
