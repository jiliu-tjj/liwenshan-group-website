export type MemberCategoryId =
  | 'all'
  | 'assistant-researcher'
  | 'research-assistant'
  | 'postdoc'
  | 'assistant-professor'
  | 'phd'
  | 'master'
  | 'undergraduate'
  | 'alumni'

export type ConcreteMemberCategory = Exclude<MemberCategoryId, 'all'>

export interface MemberCategory {
  id: MemberCategoryId
  label: string
}

export interface MemberProfile {
  id: string
  name: string
  role: string
  category: ConcreteMemberCategory
  year: string
  direction: string
  note: string
  email?: string
  photo?: string
  detailPhoto?: string
  link?: string
}

export const memberCategories: MemberCategory[] = [
  { id: 'all', label: '全部' },
  { id: 'assistant-researcher', label: '助理研究员' },
  { id: 'research-assistant', label: '科研助理' },
  { id: 'postdoc', label: '博士后' },
  { id: 'assistant-professor', label: '助理教授' },
  { id: 'phd', label: '博士研究生' },
  { id: 'master', label: '硕士研究生' },
  { id: 'undergraduate', label: '本科生' },
  { id: 'alumni', label: 'Alumni' },
]

export const members: MemberProfile[] = [
  {
    id: 'xie-rongbin',
    name: '谢荣斌',
    role: '助理研究员',
    category: 'assistant-researcher',
    year: '在组科研人员',
    direction: '碳纳米管分离提纯、碳纳米管薄膜制备及其在光电器件中的应用研究',
    note: '聚焦碳纳米管材料体系的制备、纯化与光电器件应用。',
    email: 'robin-xie@sjtu.edu.cn',
    photo: `${import.meta.env.BASE_URL}members/xie-rongbin.jpg`,
  },
  {
    id: 'wang-zhicun',
    name: '王志存',
    role: '科研助理',
    category: 'research-assistant',
    year: '在组科研人员',
    direction: '晶圆级碳纳米管水平阵列制备与器件',
    note: '开展晶圆级碳纳米管水平阵列制备及相关器件研究。',
    email: 'leowangzhicun@163.com',
    photo: `${import.meta.env.BASE_URL}members/wang-zhicun.jpg`,
  },
  {
    id: 'li-chaoqun',
    name: '李超群',
    role: '博士后',
    category: 'postdoc',
    year: '在站博士后',
    direction: '碳纳米管水平阵列与高性能器件、冷阴极场发射衬底、电磁波吸收材料',
    note: '覆盖碳纳米管水平阵列与逻辑器件、冷阴极场发射衬底、电磁波吸收三大方向。',
    email: 'lichaoqun2025@sjtu.edu.cn',
    photo: `${import.meta.env.BASE_URL}members/li-chaoqun.jpg`,
  },
  {
    id: 'lei-xiao',
    name: '雷骁',
    role: '博士研究生',
    category: 'phd',
    year: '2022年入学',
    direction: '碳纳米管阵列组装及其器件制备与神经形态计算应用',
    note: '聚焦碳纳米管阵列的精确组装及神经形态计算器件研究。',
    email: 'xiaolei1996@sjtu.edu.cn',
    photo: `${import.meta.env.BASE_URL}members/lei-xiao.jpg`,
  },
  {
    id: 'xiao-jianze',
    name: '肖健泽',
    role: '博士研究生',
    category: 'phd',
    year: '2024年入学',
    direction: '全环栅碳纳米管阵列器件与M3D集成',
    note: '聚焦全环栅碳纳米管阵列器件的制备及三维集成应用研究。',
    email: 'xiaojianze@sjtu.edu.cn',
    photo: `${import.meta.env.BASE_URL}members/xiao-jianze.jpg`,
  },
  {
    id: 'tian-junjian',
    name: '田军健',
    role: '博士研究生',
    category: 'phd',
    year: '2026年入学',
    direction: '碳纳米管电子器件',
    note: '研究方向探索中，聚焦碳纳米管电子器件前沿领域。',
    email: 'me_tianjunjian@sina.com',
    photo: `${import.meta.env.BASE_URL}members/tian-junjian.jpg`,
    detailPhoto: `${import.meta.env.BASE_URL}members/tian-junjian-detail.jpg`,
  },
  {
    id: 'yang-yingnan',
    name: '杨英楠',
    role: '博士研究生',
    category: 'phd',
    year: '2021年入学',
    direction: '碳纳米管微电子器件',
    note: '聚焦碳纳米管微电子器件的制备、表征与集成应用研究。',
    email: 'yingnan.yang@sjtu.edu.cn',
    photo: `${import.meta.env.BASE_URL}members/yang-yingnan.jpg`,
  },
  {
    id: 'wang-kai',
    name: '王凯',
    role: '博士（已毕业）',
    category: 'alumni',
    year: '2021—2026',
    direction: '水平碳纳米管阵列介电泳组装研究',
    note: '毕业后入职中国航天科工集团。',
    photo: `${import.meta.env.BASE_URL}members/wang-kai.jpg`,
  },
]

export function filterMembers(category: MemberCategoryId) {
  if (category === 'all') return members
  return members.filter((member) => member.category === category)
}
