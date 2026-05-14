import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function ResearchPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-full bg-white relative overflow-hidden">
      <div className="section-inner max-w-6xl mx-auto relative z-10">
        <motion.div variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <p className="text-sm tracking-[0.15em] text-sjtu-red font-medium mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            RESEARCH
          </p>
          <h2 className="font-bold text-sjtu-blue mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)' }}>
            研究方向
          </h2>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center text-gray-400">
            <p className="text-lg">研究方向详细内容待补充</p>
            <p className="text-sm mt-2">请在此处添加各研究方向的详细介绍、图片、代表性成果等内容</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
