// import React, { useState } from 'react'
// import ParticlesBackground from '../components/ParticlesBackground'
// import emailjs from '@emailjs/browser';
// import Astra from '../assets/Astra.png'
// import { motion } from 'framer-motion';

// const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
// const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
// const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

// const Contact = () => {
// 	const [formData, setFormData] = useState({
// 		name: '',
// 		email: '',
// 		service: '',
// 		budget: '',
// 		idea: '',
// 	});
// 	const [errors, setErrors] = useState({});
// 	const [status , setStatus] = useState('');

// 	const handleChange = (e) => {
// 		const {name, value} = e.target;
// 		if(name === 'budget' && value && !/^\d+$/.test(value)) return;

// 		setFormData({...formData, [name]: value});
// 		if(errors) setErrors((p) => ({...p, [name]: ''}));
// 	}
// 	const validateForm = () => {
// 		const required = ['name', 'email', 'service', 'idea'];
// 		const newErrors = {};
// 		required.forEach((field) => !formData[field].trim() && (newErrors[field] = "Fill this field"));
// 		if(formData.service !== 'others' && !formData.budget.trim()) newErrors.budget = "Fill this field";

// 		setErrors(newErrors);
// 		return Object.keys(newErrors).length === 0;
// 	}

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		if(!validateForm()) return;
// 		setStatus('sending');
// 		// EmailJS integration to be added here
// 		try {
// 			await emailjs.send(
// 				SERVICE_ID,
// 				TEMPLATE_ID,
// 				{
// 					...formData,
// 					from_name: formData.name,
// 					reply_to: formData.email
// 				},
// 				PUBLIC_KEY
// 			);
// 			setStatus('success');
// 			setFormData({
// 				name: '',
// 				email: '',
// 				service: '',
// 				budget: '',
// 				idea: '',
// 			});
// 		} catch (err) {
// 			console.error('Email sending error:', err);
// 			setStatus('error');
// 		}
// 	}

//   return (
// 	<section id='contact' className='w-full min-h-screen relative bg-black overflow-hidden text-white py-20 md:px-20 flex flex-col md:flex-row items-center gap-10'>
// 		<ParticlesBackground />
// 		{/* left section */ }
// 		<div className='relative z-10 w-full flex flex-col md:flex-row items-center gap-10'>
// 			<motion.div className='w-full md:w-1/2 flex justify-center'>
// 				<motion.img src={Astra} alt='Contact'
// 				className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
// 				animate={{y: [0,-10,0]}}
// 				transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
// 				/>
// 			</motion.div>
// 			{/* right section */ }
// 			<motion.div className='w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10'
// 			initial={{opacity: 0, x: 50}}
// 			animate={{opacity: 1, x: 0}}
// 			transition={{duration: 0.6}}
// 			>
// 				<h2 className='text-2xl font-bold mb-6'>Get in Touch</h2>
// 				<form onSubmit={handleSubmit} className='flex flex-col gap-3'>
// 					<div className='flex flex-col'>
// 						<label className='mb-1'>Your Name<span className='text-red-500'>*</span></label>
// 						<input type="text" name="name" value={formData.name} onChange={handleChange}
// 						className={`p-2 rounded-md bg-white/10 border ${errors.name ? 'border-red-500' : 'border-gray-500'} text-white focus:outline-none focus:border-blue-500`}
// 						/>
// 						{errors.name && <span className='text-red-500 text-xs'>{errors.name}</span>}
// 					</div>
// 					<div className='flex flex-col'>
// 						<label className='mb-1'>Your Email<span className='text-red-500'>*</span></label>
// 						<input type="email" name="email" value={formData.email} onChange={handleChange}
// 						className={`p-2 rounded-md bg-white/10 border ${errors.email ? 'border-red-500' : 'border-gray-500'} text-white focus:outline-none focus:border-blue-500`}
// 						/>
// 						{errors.email && <span className='text-red-500 text-xs'>{errors.email}</span>}
// 					</div>
// 					<div className='flex flex-col'>
// 						<label className='mb-1'>Service Needed <span className='text-red-500'>*</span></label>
// 						<select name="service" value={formData.service} onChange={handleChange}
// 						className={`p-2 rounded-md bg-white/10 border ${errors.service ? 'border-red-500' : 'border-gray-500'} text-white focus:outline-none focus:border-blue-500`}
// 						>
// 							<option value="" disabled  className='text-black'>Select a service</option>
// 							<option value="web development" className='text-black'>Web Development</option>
// 							<option value="mobile app development" className='text-black'>Mobile App Development</option>
// 							<option value="ui/ux design" className='text-black'>UI/UX Design</option>
// 							<option value="others" className='text-black'>Other</option>
// 						</select>
// 						{errors.service && <span className='text-red-500 text-xs'>{errors.service}</span>}
// 					</div>
// 					{formData.service && formData.service.toLowerCase() !== 'others' && (
// 						<div className='flex flex-col'>
// 							<label className='mb-1'>Budget<span className='text-red-500'>*</span></label>
// 							<input type="text" name="budget" value={formData.budget} onChange={handleChange}
// 							className={`p-2 rounded-md bg-white/10 border ${errors.budget ? 'border-red-500' : 'border-gray-500'} text-white focus:outline-none focus:border-blue-500`}
// 							/>
// 							{errors.budget && <span className='text-red-500 text-xs'>{errors.budget}</span>}
// 						</div>
// 					)}
// 					<div className='flex flex-col'>
// 						<label className='mb-1'>Project Idea*</label>	
// 						<textarea name="idea" rows={5} value={formData.idea} onChange={handleChange}
// 						className={`p-2 rounded-lg bg-white/10 border ${errors.idea ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-blue-500`}
// 						/>
// 						{errors.idea && <span className='text-red-500 text-sm mt-1'>{errors.idea}</span>}
// 					</div>
// 					{status && (
// 						<p className={`text-sm ${status === 'success' ? 'text-green-400' : status === 'error' ? 'text-red-500' : 'text-yellow-400'}`}>
// 							{status === 'sending' ? 'Sending...' : status === 'success' ? "Message Sent successfully ✅" : "Something went wrong ❌"}
// 						</p>
// 					)}
// 					<motion.button className='bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-md font-semibold transition'
// 					whileHover={{scale: 1.05}}
// 					whileTap={{scale: 0.95}}
// 					disabled={status === 'sending'}
// 					type='submit'
// 					>
// 						{status === 'sending' ? 'Sending...' : 'Send Message'}
// 					</motion.button>
// 				</form>
// 			</motion.div>
// 		</div>
// 	</section>
//   )
// }

// export default Contact









import React, { useState } from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const SERVICE_ID  = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_PUBLIC_KEY

const contactInfo = [
  { icon: "✉️", label: "Email",    value: "swatantram07@gmail.com",              href: "mailto:swatantram07@gmail.com" },
  { icon: "🎓", label: "Institute", value: "MNNIT Allahabad, Prayagraj",          href: null },
  { icon: "🌐", label: "NexusIDE", value: "nexuside.in",                          href: "https://nexuside.in" },
  { icon: "🎯", label: "LeetCode", value: "Knight · Rating 1950",                 href: "https://leetcode.com/" },
]

const quickLinks = [
  { icon: <FaGithub />,   label: "GitHub",   href: "https://github.com/swatantra001",                            color: "#e2e8f0" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/swatantra-maurya-52731727b/",    color: "#38bdf8" },
  { icon: <FaXTwitter />, label: "X / Twitter", href: "https://x.com/SMaury0",                                  color: "#9ca3af" },
]

const serviceOptions = [
  { value: "full-stack-web",    label: "Full-Stack Web App" },
  { value: "mobile-app",        label: "Mobile App (React Native)" },
  { value: "ai-integration",    label: "AI / ML Integration" },
  { value: "cloud-devops",      label: "Cloud & DevOps Setup" },
  { value: "collaboration",     label: "Open Source / Collaboration" },
  { value: "others",            label: "Other" },
]

const inputCls = (err) =>
  `w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-gray-600 focus:outline-none transition-all duration-200 ${
    err
      ? 'border-red-500/60 focus:border-red-400'
      : 'border-white/10 focus:border-[#1cd8d2]/60 focus:bg-white/8'
  }`

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', budget: '', idea: '' })
  const [errors,   setErrors]   = useState({})
  const [status,   setStatus]   = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'budget' && value && !/^\d+$/.test(value)) return
    setFormData(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const validate = () => {
    const req = ['name', 'email', 'service', 'idea']
    const errs = {}
    req.forEach(f => !formData[f].trim() && (errs[f] = 'Required'))
    if (formData.service && formData.service !== 'others' && !formData.budget.trim())
      errs.budget = 'Required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        ...formData, from_name: formData.name, reply_to: formData.email,
      }, PUBLIC_KEY)
      setStatus('success')
      setFormData({ name: '', email: '', service: '', budget: '', idea: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id='contact' className='w-full min-h-screen relative bg-black overflow-hidden text-white py-24'>
      <ParticlesBackground />

      {/* bg glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1cd8d2] opacity-[0.04] blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#302b63] opacity-[0.12] blur-[140px]" />
      </div>

      <div className='relative z-10 max-w-6xl mx-auto px-6 md:px-10'>

        {/* heading */}
        <motion.div className='text-center mb-14'
          initial={{ opacity: 0, y: -24 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          <span className='text-xs font-bold tracking-widest uppercase text-emerald-400'>Let's Connect</span>
          <h2 className='mt-2 text-4xl sm:text-5xl font-extrabold text-white'>
            Get in{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]'>
              Touch
            </span>
          </h2>
          <p className='mt-3 text-gray-400 text-base max-w-xl mx-auto'>
            Open to collaborations, internships, freelance projects, or just a good tech conversation.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>

          {/* ── LEFT PANEL ── */}
          <motion.div className='lg:col-span-2 flex flex-col gap-6'
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            {/* intro card */}
            <div className='rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/20 flex items-center justify-center text-2xl'>
                  👋
                </div>
                <div>
                  <p className='text-white font-bold'>Swatantra Maurya</p>
                  <p className='text-emerald-400 text-xs'>B.Tech CSE · MNNIT Allahabad</p>
                </div>
              </div>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Full-stack developer & AI systems builder. Available for internships,
                freelance projects, and open-source collaboration.
              </p>
            </div>

            {/* contact info */}
            <div className='rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm flex flex-col gap-3'>
              <p className='text-xs font-bold tracking-widest uppercase text-gray-500 mb-1'>Contact Info</p>
              {contactInfo.map((c, i) => (
                <div key={i} className='flex items-center gap-3 text-sm'>
                  <span className='text-base w-6 shrink-0'>{c.icon}</span>
                  <div className='min-w-0'>
                    <p className='text-gray-500 text-xs'>{c.label}</p>
                    {c.href
                      ? <a href={c.href} target='_blank' rel='noopener noreferrer'
                          className='text-gray-300 hover:text-emerald-400 transition-colors truncate block'>
                          {c.value}
                        </a>
                      : <p className='text-gray-300'>{c.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* social quick links */}
            <div className='rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm'>
              <p className='text-xs font-bold tracking-widest uppercase text-gray-500 mb-3'>Find me online</p>
              <div className='flex flex-col gap-2'>
                {quickLinks.map((s, i) => (
                  <motion.a key={i} href={s.href} target='_blank' rel='noopener noreferrer'
                    className='flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/15 transition-all duration-200 text-sm text-gray-300 hover:text-white'
                    whileHover={{ x: 4 }}
                  >
                    <span style={{ color: s.color }} className='text-base'>{s.icon}</span>
                    {s.label}
                    <span className='ml-auto text-gray-600 text-xs'>↗</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: FORM ── */}
          <motion.div className='lg:col-span-3'
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
          >
            <div className='rounded-2xl border border-white/10 bg-white/4 p-8 backdrop-blur-sm h-full'>
              <h3 className='text-xl font-bold text-white mb-6'>Send a Message</h3>

              <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                {/* name + email row */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-xs text-gray-400 mb-1.5'>
                      Your Name <span className='text-red-400'>*</span>
                    </label>
                    <input type='text' name='name' value={formData.name} onChange={handleChange}
                      placeholder='Rahul Sharma'
                      className={inputCls(errors.name)} />
                    {errors.name && <p className='text-red-400 text-xs mt-1'>{errors.name}</p>}
                  </div>
                  <div>
                    <label className='block text-xs text-gray-400 mb-1.5'>
                      Email <span className='text-red-400'>*</span>
                    </label>
                    <input type='email' name='email' value={formData.email} onChange={handleChange}
                      placeholder='you@example.com'
                      className={inputCls(errors.email)} />
                    {errors.email && <p className='text-red-400 text-xs mt-1'>{errors.email}</p>}
                  </div>
                </div>

                {/* service */}
                <div>
                  <label className='block text-xs text-gray-400 mb-1.5'>
                    I need help with <span className='text-red-400'>*</span>
                  </label>
                  <select name='service' value={formData.service} onChange={handleChange}
                    className={`${inputCls(errors.service)} bg-[#0a0f1e]`}
                  >
                    <option value='' disabled>Select a service</option>
                    {serviceOptions.map(o => (
                      <option key={o.value} value={o.value} className='bg-[#0a0f1e] text-white'>{o.label}</option>
                    ))}
                  </select>
                  {errors.service && <p className='text-red-400 text-xs mt-1'>{errors.service}</p>}
                </div>

                {/* budget — only if not "others" */}
                {formData.service && formData.service !== 'others' && (
                  <div>
                    <label className='block text-xs text-gray-400 mb-1.5'>
                      Budget (₹) <span className='text-red-400'>*</span>
                    </label>
                    <input type='text' name='budget' value={formData.budget} onChange={handleChange}
                      placeholder='e.g. 15000'
                      className={inputCls(errors.budget)} />
                    {errors.budget && <p className='text-red-400 text-xs mt-1'>{errors.budget}</p>}
                  </div>
                )}

                {/* idea / message */}
                <div>
                  <label className='block text-xs text-gray-400 mb-1.5'>
                    Your Message / Project Idea <span className='text-red-400'>*</span>
                  </label>
                  <textarea name='idea' rows={5} value={formData.idea} onChange={handleChange}
                    placeholder="Tell me about your idea, what you're building, or what you need help with..."
                    className={`${inputCls(errors.idea)} resize-none`}
                  />
                  {errors.idea && <p className='text-red-400 text-xs mt-1'>{errors.idea}</p>}
                </div>

                {/* status message */}
                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                    className={`text-sm font-medium ${
                      status === 'success' ? 'text-emerald-400'
                      : status === 'error'   ? 'text-red-400'
                      : 'text-yellow-400'
                    }`}
                  >
                    {status === 'sending' ? '⏳ Sending your message...'
                     : status === 'success' ? '✅ Message sent! I\'ll get back to you soon.'
                     : '❌ Something went wrong. Please try again.'}
                  </motion.p>
                )}

                {/* submit */}
                <motion.button
                  type='submit'
                  disabled={status === 'sending'}
                  className='relative w-full py-3.5 rounded-xl font-bold text-sm text-black overflow-hidden transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
                  style={{ background: 'linear-gradient(135deg, #1cd8d2, #00bf8f)' }}
                  whileHover={{ boxShadow: '0 8px 32px rgba(28,216,210,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'sending' ? 'Sending...' : '🚀 Send Message'}
                </motion.button>

              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact