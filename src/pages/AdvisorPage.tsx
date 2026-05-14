import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function AdvisorPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-full bg-white relative overflow-hidden">
      <div className="section-inner max-w-6xl mx-auto relative z-10">
        <motion.div variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <p className="text-sm tracking-[0.15em] text-sjtu-red font-medium mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            ADVISOR
          </p>
          <h2 className="font-bold text-sjtu-blue mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)' }}>
            导师介绍
          </h2>

          <div className="grid md:grid-cols-5 gap-10">
            {/* Photo placeholder */}
            <div className="md:col-span-2">
              <div className="aspect-[3/4] rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200 text-gray-400">
                <div className="text-center">
                  <p className="text-lg">导师照片</p>
                  <p className="text-sm mt-1">待补充</p>
                </div>
              </div>
            </div>

            {/* Info placeholder */}
            <div className="md:col-span-3">
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 space-y-4 text-gray-400">
                <div>
                  <p className="text-sm font-medium text-gray-500">姓名 / 职称</p>
                  <p className="text-lg">李文山 副教授</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">所属单位</p>
                  <p className="text-base">上海交通大学机械与动力工程学院</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">邮箱</p>
                  <p className="text-base">wenshan.li@sjtu.edu.cn</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">教育及工作经历</p>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 mt-2 text-center">
                    <p>经历时间线待补充</p>
                    <p className="text-sm mt-1">请添加本科、硕士、博士、博士后及工作经历</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
