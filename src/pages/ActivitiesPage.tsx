import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const base = `${import.meta.env.BASE_URL}activities/`

const activities = [
  {
    title: '乒乓球',
    description: '挥拍交流，享受运动中的专注与默契。',
    photos: [
      { file: 'table-tennis-01.jpg', caption: '乒乓球活动现场' },
      { file: 'table-tennis-02.jpg', caption: '乒乓球活动现场' },
    ],
  },
  {
    title: '网球',
    description: '在球场上放松身心，体验网球运动的节奏。',
    photos: [
      { file: 'tennis-01.jpg', caption: '夜间网球活动' },
      { file: 'tennis-02.jpg', caption: '夜间网球活动' },
      { file: 'tennis-03.jpg', caption: '网球场景' },
    ],
  },
  {
    title: '足球',
    description: '走向绿茵场，在运动中保持活力。',
    photos: [{ file: 'football-01.jpg', caption: '足球活动现场' }],
  },
  {
    title: '羽毛球',
    description: '轻松挥拍，在球场上交流与协作。',
    photos: [
      { file: 'badminton-01.jpg', caption: '羽毛球活动现场' },
      { file: 'badminton-02.jpg', caption: '羽毛球场景' },
    ],
  },
]

export default function ActivitiesPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-full relative bg-slate-50">
      <div className="section-inner mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker mb-4">LIFE IN THE GROUP</p>
          <h2 className="text-3xl font-bold text-sjtu-blue sm:text-4xl lg:text-[2.5rem]">文体活动</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
            科研之外，大家也在运动中放松身心、分享日常。这里记录了乒乓球、网球、足球和羽毛球活动的精彩瞬间。
          </p>

          <div className="mt-10 space-y-12">
            {activities.map((activity) => (
              <section key={activity.title} aria-label={`${activity.title}活动`}>
                <div className="mb-5 border-b border-slate-200 pb-3">
                  <h3 className="text-xl font-semibold text-sjtu-blue">{activity.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{activity.description}</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {activity.photos.map((photo) => (
                    <figure key={photo.file} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                      <a
                        href={`${base}${photo.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`查看大图：${photo.caption}`}
                        className="group relative block aspect-[4/3] overflow-hidden bg-slate-100"
                      >
                        <img
                          src={`${base}${photo.file}`}
                          alt={photo.caption}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                        <ArrowUpRight size={18} className="absolute bottom-3 right-3 rounded-full bg-white/90 p-1 text-sjtu-blue" aria-hidden="true" />
                      </a>
                      <figcaption className="px-4 py-3 text-sm text-gray-600">{photo.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
