import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { CalendarDays, FlaskConical, Mail, UserRound } from 'lucide-react'
import {
  filterMembers,
  memberCategories,
  members,
  type MemberCategoryId,
  type MemberProfile,
} from '../data/members'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const roleMarks: Record<MemberProfile['category'], string> = {
  'assistant-researcher': 'AR',
  'research-assistant': 'RA',
  postdoc: 'PD',
  'assistant-professor': 'AP',
  phd: 'PhD',
  master: 'MS',
  undergraduate: 'UG',
  alumni: 'AL',
}

function getCategoryCount(category: MemberCategoryId) {
  if (category === 'all') return members.length
  return members.filter((member) => member.category === category).length
}

function MemberCard({ member, index }: { member: MemberProfile; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35, ease: 'easeOut' }}
      className="academic-card group p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sjtu-red/20 hover:shadow-xl sm:p-6"
    >
      <div className="mb-5 flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-sjtu-blue/10 bg-gradient-to-br from-sjtu-blue/10 via-white to-sjtu-red/10 text-sm font-semibold text-sjtu-blue">
          {member.photo ? (
            <img
              src={member.photo}
              alt={`${member.name}照片`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            roleMarks[member.category]
          )}
        </div>
        <div className="min-w-0">
          <h3 className="text-xl font-semibold leading-snug text-gray-800">{member.name}</h3>
          <p className="mt-1 inline-flex rounded-md bg-sjtu-red/10 px-2.5 py-1 text-sm font-medium text-sjtu-red">
            {member.role}
          </p>
        </div>
      </div>

      <div className="space-y-3 text-[15px] leading-relaxed text-gray-500">
        <p className="flex gap-2">
          <CalendarDays size={17} className="mt-1 shrink-0 text-sjtu-gold" />
          <span>{member.year}</span>
        </p>
        <p className="flex gap-2">
          <FlaskConical size={17} className="mt-1 shrink-0 text-sjtu-gold" />
          <span>{member.direction}</span>
        </p>
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="flex gap-2 transition-colors hover:text-sjtu-red"
          >
            <Mail size={17} className="mt-1 shrink-0 text-sjtu-gold" />
            <span>{member.email}</span>
          </a>
        )}
        <p className="flex gap-2 border-t border-gray-100 pt-3 text-gray-400">
          <UserRound size={17} className="mt-1 shrink-0 text-gray-300" />
          <span>{member.note}</span>
        </p>
      </div>
    </motion.article>
  )
}

export default function MembersPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [activeCategory, setActiveCategory] = useState<MemberCategoryId>('all')
  const visibleMembers = filterMembers(activeCategory)

  return (
    <section ref={ref} className="section-full relative overflow-hidden bg-slate-50">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-sjtu-red/20 to-transparent" />

      <div className="section-inner relative z-10 mx-auto max-w-6xl">
        <motion.div variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker mb-4">MEMBERS</p>
              <h2 className="text-3xl font-bold text-sjtu-blue sm:text-4xl lg:text-[2.5rem]">
                团队成员
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-gray-500 sm:text-right">
              按成员身份快速筛选。真实照片、姓名和个人主页可在数据文件中继续补充。
            </p>
          </div>

          <div className="mb-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0" role="tablist" aria-label="成员分类">
            {memberCategories.map((category) => {
              const isActive = activeCategory === category.id
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.id)}
                  className={`shrink-0 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? 'border-sjtu-red bg-sjtu-red text-white shadow-md shadow-sjtu-red/15'
                      : 'border-gray-200 bg-white text-gray-500 hover:border-sjtu-red/50 hover:text-sjtu-red'
                  }`}
                >
                  {category.label}
                  <span className={`ml-2 ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                    {getCategoryCount(category.id)}
                  </span>
                </button>
              )
            })}
          </div>

          <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleMembers.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
