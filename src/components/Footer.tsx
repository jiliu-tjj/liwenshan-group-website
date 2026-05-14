import { useState } from 'react'
import { siteConfig } from '../data/site'
import { Copy, Check } from 'lucide-react'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer style={{ background: '#1A2B4F' }} className="text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Address */}
          <div>
            <h3 className="text-sm font-semibold text-white/50 mb-4 tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              CONTACT
            </h3>
            <p className="text-sm text-white/65 leading-relaxed">
              {siteConfig.address}
            </p>
            <button
              onClick={copyEmail}
              className="mt-3 flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              {siteConfig.email}
              {copied && <span className="text-green-400 text-xs">已复制</span>}
            </button>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white/50 mb-4 tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              LINKS
            </h3>
            <div className="space-y-2">
              {['上海交通大学', '机械与动力工程学院', '微纳工程科学全国重点实验室'].map((name) => (
                <a key={name} href="#" className="block text-sm text-white/50 hover:text-white/80 transition-colors">
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold text-white/50 mb-4 tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {siteConfig.schoolShort}
            </h3>
            <p className="text-sm text-white/40 leading-relaxed">
              {siteConfig.lab}
              <br />
              {siteConfig.school}
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/8 text-center text-xs text-white/25">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
