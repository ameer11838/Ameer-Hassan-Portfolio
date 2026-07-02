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

  const fieldClass =
    'w-full bg-[#1a1a1a] border border-white/[0.08] rounded-lg px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white/20 focus:bg-[#1e1e1e] transition-all duration-150'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-neutral-400 mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-neutral-400 mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-neutral-400 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What's on your mind?"
          value={form.message}
          onChange={handleChange}
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold text-sm py-3 rounded-lg hover:bg-neutral-100 transition-colors duration-150 disabled:opacity-50"
      >
        <Send size={14} />
        {sent ? 'Opening your email client...' : 'Send Message'}
      </button>

      <p className="text-neutral-600 text-xs text-center">
        This opens your email client with the message pre-filled.
      </p>
    </form>
  )
}
