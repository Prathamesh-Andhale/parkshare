import React, { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { siteData } from '../data/siteData'
import { Mail, MapPin, Send, CheckCircle2, Building, ShieldCheck } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    if (error) setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and message.')
      return
    }

    const emailSubject = encodeURIComponent(
      formData.subject.trim() 
        ? `[ParkShare Inquiry] ${formData.subject}` 
        : `[ParkShare Inquiry] Message from ${formData.name}`
    )

    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via ParkShare Web Portal`
    )

    // Open default mail client with prefilled details
    const mailtoLink = `mailto:${siteData.startup.contactEmail}?subject=${emailSubject}&body=${emailBody}`
    window.location.href = mailtoLink

    setSubmitted(true)
  }

  return (
    <div className="space-y-16 pb-20">
      
      {/* HEADER SECTION */}
      <section className="pt-12 sm:pt-16 pb-4 text-center max-w-4xl mx-auto px-4">
        <SectionHeading
          badge="Get in Touch"
          title="Contact the ParkShare Team"
          subtitle="Have questions about our Greater Mumbai pilot, space partnerships, or academic venture research? Reach out to us directly."
        />
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal">Academic Startup</span>
                <h3 className="text-xl font-bold text-navy mt-1">ParkShare Operations</h3>
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  Project under the Entrepreneurship and IPR course (Experiment 9: Venture Creation) by S.Y. MCA students.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100 text-sm">
                
                {/* Official Public Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-bg text-teal flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">
                      Official Contact Email
                    </span>
                    <a
                      href={`mailto:${siteData.startup.contactEmail}`}
                      className="font-semibold text-navy hover:text-teal transition-colors"
                    >
                      {siteData.startup.contactEmail}
                    </a>
                    <span className="text-[10px] text-muted block mt-0.5">Monitored by Team Lead</span>
                  </div>
                </div>

                {/* College Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">
                      Campus Address
                    </span>
                    <p className="font-semibold text-navy leading-snug">
                      {siteData.startup.fullAddress}
                    </p>
                    <span className="text-[10px] text-muted block mt-0.5">Bhavan's Campus, Andheri West</span>
                  </div>
                </div>

              </div>

              <div className="bg-surface p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-teal">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Privacy Notice</span>
                </div>
                <p className="text-[11px] text-muted">
                  In compliance with privacy norms, direct contact is handled through institutional email and official campus correspondence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mailto Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-1">Send a Message</h3>
              <p className="text-xs text-muted mb-6">
                Fill in the details below. Submitting will open your default email application with a pre-filled draft.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900">Email Draft Prepared!</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Your email client should have opened with your pre-filled inquiry addressed to <strong>{siteData.startup.contactEmail}</strong>. If not, you can copy the email directly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-emerald-700 underline hover:text-emerald-900"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy mb-1.5" htmlFor="name">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy mb-1.5" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy mb-1.5" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Space Partnership in Andheri West"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy mb-1.5" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your question or proposal here..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-navy focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-teal hover:bg-teal-dark text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-teal/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open Email Draft (mailto)</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
