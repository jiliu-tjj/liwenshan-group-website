export type MemberCategoryId =
  | 'all'
  | 'research-staff'
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
  link?: string
}

export const memberCategories: MemberCategory[] = [
  { id: 'all', label: '全部' },
  { id: 'research-staff', label: '科研人员' },
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
    category: 'research-staff',
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
    category: 'research-staff',
    year: '在组科研人员',
    direction: '晶圆级碳纳米管水平阵列制备与器件',
    note: '开展晶圆级碳纳米管水平阵列制备及相关器件研究。',
    email: 'leowangzhicun@163.com',
    photo: `${import.meta.env.BASE_URL}members/wang-zhicun.jpg`,
  },
  {
    id: 'postdoc-placeholder',
    name: '博士后信息待更新',
    role: '博士后',
    category: 'postdoc',
    year: '入组年份待补充',
    direction: '低维纳米材料与器件集成',
    note: '欢迎补充姓名、照片、邮箱与个人主页',
  },
  {
    id: 'phd-1',
    name: '博士研究生 A',
    role: '博士研究生',
    category: 'phd',
    year: '入学年份待补充',
    direction: '碳纳米管薄膜制备',
    note: '成员信息待补充',
  },
  {
    id: 'phd-2',
    name: '博士研究生 B',
    role: '博士研究生',
    category: 'phd',
    year: '入学年份待补充',
    direction: '高频纳米电子器件',
    note: '成员信息待补充',
  },
  {
    id: 'phd-3',
    name: '博士研究生 C',
    role: '博士研究生',
    category: 'phd',
    year: '入学年份待补充',
    direction: '电子输运与物性表征',
    note: '成员信息待补充',
  },
  {
    id: 'master-1',
    name: '硕士研究生 A',
    role: '硕士研究生',
    category: 'master',
    year: '入学年份待补充',
    direction: '可穿戴传感器',
    note: '成员信息待补充',
  },
  {
    id: 'master-2',
    name: '硕士研究生 B',
    role: '硕士研究生',
    category: 'master',
    year: '入学年份待补充',
    direction: '微纳器件加工',
    note: '成员信息待补充',
  },
  {
    id: 'master-3',
    name: '硕士研究生 C',
    role: '硕士研究生',
    category: 'master',
    year: '入学年份待补充',
    direction: '材料组装与界面调控',
    note: '成员信息待补充',
  },
  {
    id: 'undergraduate-1',
    name: '本科生科研训练 A',
    role: '本科生',
    category: 'undergraduate',
    year: '加入年份待补充',
    direction: '科研训练与实验辅助',
    note: '成员信息待补充',
  },
  {
    id: 'alumni-1',
    name: '校友信息待更新',
    role: 'Alumni',
    category: 'alumni',
    year: '毕业年份待补充',
    direction: '毕业去向待补充',
    note: '可补充当前单位或升学去向',
  },
]

export function filterMembers(category: MemberCategoryId) {
  if (category === 'all') return members
  return members.filter((member) => member.category === category)
}
