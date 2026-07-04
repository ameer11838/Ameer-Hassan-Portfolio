import { useState, type FormEvent, type ChangeEvent } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    )
    window.location.href = `mailto:ameer.hassan726@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const fieldStyle = {
    background: 'rgba(59,130,246,0.03)',
    border: '1px solid rgba(59,130,246,0.15)',
    color: '#FFFFFF',
  }

  const fieldClass =
    'w-full rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-all duration-200 outline-none'

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'
    e.currentTarget.style.background = 'rgba(59,130,246,0.06)'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.15)'
    e.currentTarget.style.background = 'rgba(59,130,246,0.03)'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-medium" style={{ color: '#94A3B8' }}>
          Name
        </label>
        <input
          id="name" name="name" type="text" required
          placeholder="Your name"
          value={form.name} onChange={handleChange}
          className={fieldClass} style={fieldStyle}
          onFocus={handleFocus} onBlur={handleBlur}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium" style={{ color: '#94A3B8' }}>
          Email
        </label>
        <input
          id="email" name="email" type="email" required
          placeholder="you@example.com"
          value={form.email} onChange={handleChange}
          className={fieldClass} style={fieldStyle}
          onFocus={handleFocus} onBlur={handleBlur}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium" style={{ color: '#94A3B8' }}>
          Message
        </label>
        <textarea
          id="message" name="message" required rows={5}
          placeholder="What's on your mind?"
          value={form.message} onChange={handleChange}
          className={`${fieldClass} resize-none`} style={fieldStyle}
          onFocus={handleFocus} onBlur={handleBlur}
        />
      </div>

      <button type="submit" className="btn-primary w-full justify-center">
        <Send size={13} />
        {sent ? 'Opening email client…' : 'Send Message'}
      </button>

      <p className="text-center text-xs" style={{ color: '#475569' }}>
        Opens your email client with the message pre-filled.
      </p>
    </form>
  )
}
