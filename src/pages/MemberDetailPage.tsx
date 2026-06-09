import { useParams, Link } from 'react-router-dom'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, CalendarDays, FlaskConical, Mail, MapPin, UserRound } from 'lucide-react'
import { members } from '../data/members'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const categoryLabels: Record<string, string> = {
  'assistant-researcher': '助理研究员',
  'research-assistant': '科研助理',
  postdoc: '博士后',
  'assistant-professor': '助理教授',
  phd: '博士研究生',
  master: '硕士研究生',
  undergraduate: '本科生',
  alumni: 'Alumni',
}

export default function MemberDetailPage() {
  const { id } = useParams<{ id: string }>()
  const member = members.find((m) => m.id === id)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  if (!member) {
    return (
      <section className="section-full bg-slate-50">
        <div className="section-inner mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-sjtu-blue">成员未找到</h2>
          <p className="mt-4 text-gray-500">未找到该成员信息。</p>
          <Link
            to="/members"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-sjtu-red px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sjtu-red-dark"
          >
            <ArrowLeft size={16} />
            返回团队成员
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="section-full bg-slate-50" style={{ alignItems: 'flex-start', paddingTop: '6rem' }}>
      <div className="section-inner mx-auto max-w-4xl">
        <motion.div variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {/* Back button */}
          <Link
            to="/members"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-sjtu-red"
          >
            <ArrowLeft size={16} />
            返回团队成员列表
          </Link>

          {/* Hero card */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(26,43,79,0.08)]">
            {/* Top: Photo + Identity */}
            <div className="grid md:grid-cols-[320px_minmax(0,1fr)]">
              {/* Photo */}
              <div className="border-b border-gray-100 bg-gradient-to-br from-sjtu-blue/5 via-white to-sjtu-red/5 p-6 sm:p-8 md:border-b-0 md:border-r md:border-gray-100">
                <div className="mx-auto aspect-[3/4] max-w-56 overflow-hidden rounded-xl bg-white shadow-sm md:max-w-full">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={`${member.name}照片`}
                      className="h-full w-full object-cover object-center"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-sjtu-blue/5">
                      <span className="text-6xl font-bold text-sjtu-blue/20">{member.name[0]}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Identity */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <span className="mb-3 inline-block w-fit rounded-md bg-sjtu-red/10 px-3 py-1.5 text-sm font-medium text-sjtu-red">
                  {member.role}
                </span>
                <h2 className="text-3xl font-bold text-sjtu-blue sm:text-4xl">{member.name}</h2>
                <p className="mt-4 text-sm text-gray-500">
                  所属类别：{categoryLabels[member.category] ?? member.category}
                </p>

                <div className="mt-6 space-y-3 text-[15px] text-gray-600">
                  <div className="flex items-center gap-3">
                    <CalendarDays size={17} className="shrink-0 text-sjtu-gold" />
                    <span>{member.year}</span>
                  </div>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-3 transition-colors hover:text-sjtu-red"
                    >
                      <Mail size={17} className="shrink-0 text-sjtu-gold" />
                      <span>{member.email}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-6 border-t border-gray-100 sm:mx-8 lg:mx-10" />

            {/* Detail sections */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Research Direction */}
              <section className="mb-8">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-sjtu-blue">
                  <FlaskConical size={20} className="text-sjtu-red" />
                  研究方向
                </h3>
                <p className="text-[15px] leading-relaxed text-gray-700">{member.direction}</p>
              </section>

              {/* Bio / Note */}
              <section className="mb-8">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-sjtu-blue">
                  <UserRound size={20} className="text-sjtu-red" />
                  个人简介
                </h3>
                <p className="text-[15px] leading-relaxed text-gray-700">{member.note}</p>
              </section>

              {/* Contact */}
              <section className="mb-8">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-sjtu-blue">
                  <MapPin size={20} className="text-sjtu-red" />
                  联系方式
                </h3>
                <div className="space-y-2 text-[15px] text-gray-600">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 transition-colors hover:text-sjtu-red"
                    >
                      <Mail size={16} className="text-sjtu-gold" />
                      {member.email}
                    </a>
                  )}
                  <p className="text-sm text-gray-400">
                    上海交通大学机械与动力工程学院 · 微纳工程科学全国重点实验室
                  </p>
                </div>
              </section>

              {/* Placeholder for future expansion */}
              <div className="rounded-xl border-2 border-dashed border-gray-200 p-6 text-center">
                <p className="text-sm text-gray-400">
                  教育背景、研究成果等更多信息待补充
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
