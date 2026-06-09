import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Briefcase, Building2, FlaskConical, GraduationCap, Mail, MapPin, Award } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const education = [
  { period: '—2013', degree: '硕士', school: '中国科学院金属研究所', major: '材料工程（先进炭材料研究部）' },
  { period: '—2016', degree: '博士（自然科学博士）', school: '德国达姆施塔特工业大学', major: '材料科学（在卡尔斯鲁厄理工学院纳米技术研究所完成）' },
]

const experience = [
  { period: '2016—2017', role: '高级科学家', org: '德国卡尔斯鲁厄理工学院（KIT）', detail: '从事纳米材料高频电子学研究' },
  { period: '2017—', role: '副研究员', org: '英国剑桥大学三一学院 / 工程系', detail: '开展二维材料射频电子学研究' },
]

const directions = [
  '半导体型碳纳米管悬浮液制备与晶圆级阵列组装',
  '高性能窄沟道碳纳米管 CMOS 电子器件与大规模集成电路',
  '金属型碳纳米管芯片连接线',
  '低维纳米材料薄膜制备、器件组装与电子输运特性',
  '柔性可穿戴电子器件及传感器',
  '高频纳米电子器件',
]

const projects = [
  { name: '东方英才计划青年项目', period: '2024—2026', detail: '基于介电泳技术的碳纳米管阵列组装制程' },
  { name: '上海交通大学-中科盈德极石微纳前沿科技联合实验室', period: '2025—2028', detail: '' },
]

export default function AdvisorPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-full bg-white relative overflow-hidden">
      <div className="section-inner max-w-6xl mx-auto relative z-10">
        <motion.div variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          <p className="section-kicker mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            ADVISOR
          </p>
          <h2 className="text-3xl font-bold text-sjtu-blue sm:text-4xl lg:text-[2.5rem] mb-8">
            导师介绍
          </h2>

          {/* Top: Photo + Basic Info */}
          <div className="grid md:grid-cols-5 gap-8 mb-10">
            {/* Photo */}
            <div className="md:col-span-2">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-sjtu-blue/5 via-white to-sjtu-red/5 border border-gray-100 shadow-md">
                <div className="h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <GraduationCap size={48} className="mx-auto mb-3 text-sjtu-blue/30" />
                    <p className="text-lg font-medium text-gray-500">李文山 副教授</p>
                    <p className="text-sm mt-1 text-gray-400">导师照片待补充</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="md:col-span-3 space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-sjtu-blue">李文山</h3>
                <p className="text-lg text-sjtu-red font-medium mt-1">副教授，博士生导师</p>
              </div>

              <div className="flex items-start gap-3 text-gray-600">
                <Building2 size={18} className="mt-0.5 shrink-0 text-sjtu-gold" />
                <span>上海交通大学机械与动力工程学院<br />微纳工程科学全国重点实验室</span>
              </div>

              <div className="flex items-start gap-3 text-gray-600">
                <MapPin size={18} className="mt-0.5 shrink-0 text-sjtu-gold" />
                <span>上海市闵行区东川路800号上海交通大学机械楼D楼</span>
              </div>

              <a href="mailto:wenshan.li@sjtu.edu.cn" className="flex items-center gap-3 text-gray-600 hover:text-sjtu-red transition-colors">
                <Mail size={18} className="shrink-0 text-sjtu-gold" />
                <span>wenshan.li@sjtu.edu.cn</span>
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-sjtu-blue mb-4">
              <BookOpen size={20} className="text-sjtu-red" />
              教育背景
            </h4>
            <div className="space-y-3">
              <p className="text-sm text-gray-500 mb-2">
                本科毕业于广西大学，获物理学 & 计算机科学双学士学位。
              </p>
              {education.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-gray-100">
                  <span className="text-sm font-medium text-sjtu-red shrink-0 w-20">{item.period}</span>
                  <div>
                    <p className="font-medium text-gray-800">{item.degree}</p>
                    <p className="text-sm text-gray-500">{item.school}，{item.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-sjtu-blue mb-4">
              <Briefcase size={20} className="text-sjtu-red" />
              工作经历
            </h4>
            <div className="space-y-3">
              {experience.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-gray-100">
                  <span className="text-sm font-medium text-sjtu-red shrink-0 w-24">{item.period}</span>
                  <div>
                    <p className="font-medium text-gray-800">{item.role} — {item.org}</p>
                    <p className="text-sm text-gray-500">{item.detail}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 p-4 bg-sjtu-red/5 rounded-lg border border-sjtu-red/10">
                <span className="text-sm font-medium text-sjtu-red shrink-0 w-24">至今</span>
                <div>
                  <p className="font-medium text-gray-800">副教授 — 上海交通大学机械与动力工程学院</p>
                  <p className="text-sm text-gray-500">依托微纳工程科学全国重点实验室，组建低维纳米材料电子器件课题组</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Directions */}
          <div className="mb-8">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-sjtu-blue mb-4">
              <FlaskConical size={20} className="text-sjtu-red" />
              研究方向
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {directions.map((d, i) => (
                <div key={i} className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg border border-gray-100">
                  <span className="text-sjtu-red font-bold mt-0.5">{i + 1}.</span>
                  <span className="text-sm text-gray-700">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-sjtu-blue mb-4">
              <Award size={20} className="text-sjtu-red" />
              在研项目
            </h4>
            <div className="space-y-3">
              {projects.map((p, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-gray-100">
                  <span className="text-sm font-medium text-sjtu-red shrink-0 w-24">{p.period}</span>
                  <div>
                    <p className="font-medium text-gray-800">{p.name}</p>
                    {p.detail && <p className="text-sm text-gray-500">{p.detail}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International Collaboration */}
          <div className="bg-gradient-to-r from-sjtu-blue/5 to-sjtu-red/5 rounded-xl p-6 border border-gray-100">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-sjtu-blue mb-3">
              国际合作
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              课题组与德国卡尔斯鲁厄理工学院（KIT）、德国洪堡大学、英国剑桥大学、英国伦敦大学学院（UCL）等国际顶尖高校团队保持紧密合作，致力于后摩尔定律时代新型高性能低功耗电子及传感应用的研发。
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
