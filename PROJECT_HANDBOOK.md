# 李文山课题组展示网站 — 项目交接文档

## 项目概述

为上海交通大学机械与动力工程学院 **李文山副教授** 课题组（微纳工程科学全国重点实验室）构建的学术展示网站。

- **课题组研究方向**：低维纳米材料（碳纳米管等）高性能电子器件与传感器
- **导师信息**：李文山，副教授，德国达姆施塔特工业大学博士，曾于剑桥大学三一学院、KIT从事研究
- **网站定位**：面向学界同行、潜在学生及公众，展示研究方向、成果、成员与招生信息

---

## 技术栈

| 层面 | 选型 | 版本 |
|------|------|------|
| 框架 | React + TypeScript | 19.x / 6.x |
| 构建工具 | Vite | 8.x |
| 样式 | Tailwind CSS | 4.x |
| 路由 | react-router-dom (HashRouter) | 7.x |
| 动画 | framer-motion | 12.x |
| 图标 | lucide-react | 1.x |
| 部署 | 纯静态文件，GitHub Pages 或任意静态托管 | — |

---

## 命令

```bash
npm install          # 安装依赖
npm run dev          # 启动开发服务器 → http://localhost:5173
npm run build        # 构建到 dist/
npm run preview      # 预览构建产物
```

---

## 文件结构

```
d:\Claude\
├── index.html                    # 入口 HTML
├── vite.config.ts                # Vite 配置（React + Tailwind 插件）
├── tsconfig.json                 # TypeScript 配置
├── package.json                  # 依赖与脚本
├── PROJECT_HANDBOOK.md           # 本文档（交接用）
│
├── docs/
│   └── superpowers/specs/
│       └── 2026-05-14-research-group-website-design.md   # 原始设计文档
│
└── src/
    ├── main.tsx                  # React 入口，HashRouter
    ├── App.tsx                   # 路由配置 + 滚动进度条
    ├── index.css                 # 全局样式 + CSS 变量 + 排版体系
    ├── vite-env.d.ts             # Vite 类型声明
    │
    ├── data/
    │   └── site.ts               # 网站全局配置（名称、地址、邮箱、导航菜单）
    │
    ├── components/
    │   ├── Navbar.tsx             # 固定顶部导航栏（交大红背景，移动端汉堡菜单）
    │   └── Footer.tsx             # 全局页脚（深蓝背景，三列布局，邮箱可复制）
    │
    └── pages/
        ├── HomePage.tsx           # 首页（6个全屏区块，已完整实现）
        ├── ResearchPage.tsx       # 研究方向页（框架占位，待填内容）
        ├── AdvisorPage.tsx        # 导师介绍页（框架占位，待填内容）
        ├── MembersPage.tsx        # 团队成员页（框架占位，待填内容）
        ├── PublicationsPage.tsx   # 论文成果页（框架占位，待填内容）
        ├── NewsPage.tsx           # 新闻动态页（框架占位，待填内容）
        └── RecruitmentPage.tsx    # 招生信息页（框架占位，待填内容）
```

---

## 设计系统

### 配色方案

| 用途 | 色值 | Tailwind 类名 |
|------|------|---------------|
| 交大红（主色） | `#BE1E2D` | `text-sjtu-red` / `bg-sjtu-red` |
| 交大红深色 | `#9A1824` | `text-sjtu-red-dark` |
| 深蓝（辅助） | `#1A2B4F` | `text-sjtu-blue` / `bg-sjtu-blue` |
| 深蓝浅色 | `#2C4270` | `text-sjtu-blue-light` |
| 金色 | `#C4962C` | `text-sjtu-gold` |
| 浅灰背景 | `#F5F5F5` | `text-sjtu-gray` |

### 字体层级

```css
/* 全局基础 */
body { font-size: 18px; line-height: 1.8; }

/* 标题层级 */
h1 { font-size: 3.5rem; }    /* Hero 大标题，clamp(3rem, 6vw, 4.5rem) */
h2 { font-size: 2.5rem; }    /* 区块标题，clamp(2rem, 3.5vw, 2.5rem) */
h3 { font-size: 1.5rem; }    /* 子标题 */

/* 正文 */
.text-lg { font-size: 1.125rem; }  /* 18px 正文 */
.text-base { font-size: 1rem; }     /* 16px 辅助文字 */
.text-sm { font-size: 0.875rem; }   /* 14px 标签/小字 */
```

### 页面布局规范

- **全屏区块**：每个页面使用 `section-full` 类（高度 100vh，flex 垂直居中，上下有 padding 留出导航栏和箭头空间）
- **内容容器**：`section-inner` 类包裹实际内容
- **区块标签**：每个区块顶部用大写英文标签（ABOUT US / RESEARCH / NEWS 等），字体 Inter，tracking-wider

---

## 各页面当前状态

### 首页（HomePage）— 已完成

6 个全屏区块依次排列：

| 序号 | 区块 | ID | 内容状态 |
|------|------|----|----------|
| 1 | Hero 头图 | `#hero` | 课题名称 + 英文副标题 + 学院信息 + 碳纳米管SVG装饰 |
| 2 | 课题组简介 | `#about` | 三段文字介绍 + 导师照片占位框 |
| 3 | 数据统计 | `#stats` | 3 个可点击统计数字（论文/项目/成员），链接到对应内页，数字进入视口时从0递增动画 |
| 4 | 研究方向 | `#research` | 4 张卡片（CNT薄膜 / 柔性电子 / 高频器件 / 电子输运），hover上浮效果 |
| 5 | 新闻动态 | `#news` | 3 条新闻预览，hover红色强调 |
| 6 | 加入我们 | `#cta` | CTA 双按钮（招生详情 / 联系导师） |

**交互特性**：
- 鼠标滚轮一次 = 翻一页（JS自定义wheel事件，900ms防抖）
- 视口底部固定箭头，点击翻到下一页，最后一页隐藏
- 滚动进入视口时触发入场动画（framer-motion）
- SVG 碳纳米管艺术插图作背景装饰（卷曲管束 + 冷阴极针尖阵列）
- 所有 CSS 类名 `.section-full` 和 `.section-inner` 在 `index.css` 中定义

### 研究方向页（ResearchPage）— 框架完成

路由 `#/research`，结构：
- RESEARCH 标签 + 标题
- 一块虚线占位区域（`border-2 border-dashed`），等待填入真实的研究方向详细介绍

### 导师介绍页（AdvisorPage）— 框架完成

路由 `#/advisor`，结构：
- ADVISOR 标签 + 标题
- 左侧 3:4 照片占位框
- 右侧信息卡：姓名/职称、单位、邮箱（已填基础数据）、教育经历时间线占位区

### 团队成员页（MembersPage）— 框架完成

路由 `#/members`，结构：
- MEMBERS 标签 + 标题
- 顶部分类标签栏：全部 / 博士研究生 / 硕士研究生 / 本科生 / Alumni
- 8 宫格成员卡片（4列→2列→1列响应式），每张含头像圆圈 + 姓名 + 身份 + 研究方向
- 分类标签和卡片目前都是静态展示，筛选交互待实现

### 论文成果页（PublicationsPage）— 框架完成

路由 `#/publications`，结构：
- PUBLICATIONS 标签 + 标题
- 年份筛选按钮（全部 / 2025-2020）+ 右侧搜索输入框
- 5 条论文列表模板（编号 + 作者 + 标题 + 期刊信息 + 年份）
- 底部分页按钮
- 搜索和筛选交互待实现

### 新闻动态页（NewsPage）— 框架完成

路由 `#/news`，结构：
- NEWS 标签 + 标题
- 左侧 3/4：5 条新闻列表（日期 + 分类标签 + 标题 + 摘要）
- 右侧 1/4：分类标签云 + 时间归档列表
- 底部分页
- 分类筛选、归档点击交互待实现

### 招生信息页（RecruitmentPage）— 框架完成

路由 `#/recruitment`，结构：
- RECRUITMENT 标签 + 标题
- 招生方向框（博士 / 硕士）
- 申请要求列表
- 联系导师按钮（邮箱已填入 `wenshan.li@sjtu.edu.cn`）
- 虚线框内内容为示例文字，待替换

---

## 数据文件

### `src/data/site.ts` — 网站全局配置

```typescript
export const siteConfig = {
  name: '李文山课题组',
  nameEn: 'Li Wenshan Research Group',
  lab: '微纳工程科学全国重点实验室',
  school: '上海交通大学机械与动力工程学院',
  schoolShort: 'SJTU ME',
  address: '上海市闵行区东川路800号上海交通大学机械与动力工程学院',
  email: 'wenshan.li@sjtu.edu.cn',
}

export const navItems = [
  { label: '首页', href: '#/' },
  { label: '研究方向', href: '#/research' },
  { label: '导师介绍', href: '#/advisor' },
  { label: '团队成员', href: '#/members' },
  { label: '论文成果', href: '#/publications' },
  { label: '新闻动态', href: '#/news' },
  { label: '招生信息', href: '#/recruitment' },
]
```

修改此文件可更新全站导航菜单和页脚信息。建议后续将成员、论文、新闻等数据也按此模式添加到 `src/data/` 目录下。

---

## 开发注意事项

1. **路由使用 HashRouter**：所有链接用 `#/xxx` 格式，如 `href="#/research"`
2. **全屏区块规范**：新建页面请使用 `<section className="section-full">` + 内部 `<div className="section-inner">` 包裹内容，保持与首页一致的布局
3. **配色使用 Tailwind 自定义色值**：`text-sjtu-red`、`bg-sjtu-blue` 等，不要硬编码色值
4. **动画使用 framer-motion**：已有 `fadeIn` 预设可从 HomePage 复制
5. **图标使用 lucide-react**：`import { Xxx } from 'lucide-react'`
6. **SVG id 冲突**：首页的 SVG 插图（CNTTubes / CNTCathode）使用了带 `b` 后缀的 gradient ID（如 `tubeGrad1b`），如果在其他页面复用这些组件，注意 id 不要冲突
7. **移动端适配**：Navbar 有汉堡菜单，卡片网格使用 `grid-cols-2 lg:grid-cols-4` 等响应式类

---

## 待办事项

- [ ] 填入导师真实照片和个人详细经历
- [ ] 填入团队成员信息（照片、姓名、身份、方向）
- [ ] 填入代表性论文列表
- [ ] 填入新闻动态内容
- [ ] 完善招生信息（具体方向、要求、待遇等）
- [ ] 实现成员页分类筛选交互
- [ ] 实现论文页搜索和年份筛选功能
- [ ] 实现新闻页分类和归档功能
- [ ] 添加实验室真实照片
- [ ] 考虑英文双语版
- [ ] 部署到线上
