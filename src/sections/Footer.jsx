// import React from 'react'
// import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
// import { FaXTwitter } from 'react-icons/fa6'
// import { motion } from 'framer-motion'


// const socials = [
// 	{Icon: FaGithub, label: "Github", href: "https://github.com/swatantra001"},
// 	{Icon: FaLinkedin, label: "Linkedin", href: "https://www.linkedin.com/in/swatantra-maurya-52731727b/"},
// 	{Icon: FaXTwitter, label: "X", href: "https://x.com/SMaury0"},
// 	{Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/swatantra.mry/"},
// 	{Icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=100045980146490"}
// ]

// const glowVarients = {
// 	initial: {scale: 1, y:0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))"},
// 	hover: {
// 		scale: 1.2, y: -3,
// 		filter: "drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
// 		transition: {type: "spring", stiffness: 300, damping: 15}
// 	},
// 	tap: {scale: 0.95, y:0, transition: {duration:0.08}}
// }

// const Footer = () => {
//   return (
// 	<footer className='relative overflow-hidden bg-black'>
// 		<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,_rgba(13,88,202,0.35),_transparent_70%)]'></div>
//   		<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,_rgba(16,185,129,0.30),_transparent_70%)]'></div>

// 		<motion.div className='relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6'
// 		initial={{opacity: 0, y:30}}
// 		whileInView={{opacity:1, y:0}}
// 		transition={{duration:0.8}}
// 		>
// 			<h1 className='font-semibold leading-none text-white text-center select-none'
// 			style={{
// 				fontSize: "clamp(3rem, 5vw, 14rem)",
// 				letterSpacing: "0.02em",
// 				lineHeight:0.9,
// 				padding: "0 3vw",
// 				whiteSpace: "nowrap",
// 				textShadow: "0 2px 18px rgba(0,0,0,0.45)"
// 			}}>Swatantra Maurya</h1>
// 			<div className='h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#0d58cc] via-cyan-300 to-emerald-400' />
// 			<div className='flex gap-5 text-2xl md:text-3xl'>
// 				{socials.map(({Icon, label, href}) => (
// 					<motion.a href={href}
// 					key={label}
// 					aria-label={label}
// 					target='_blank'
// 					rel="noopener noreferrer"
// 					variants={glowVarients}
// 					initial="initial"
// 					whileHover="hover"
// 					whileTap="tap"
// 					className='text-gray-300 transition-colors duration-200 inline-flex items-center justify-center'
// 					><Icon /></motion.a>
// 				))}
// 			</div>
// 			<p className='text-gray-300 italic max-w-xl'>
// 				"Success is when preparation meets opportunity."
// 			</p>
// 			<p className='text-xs text-gray-400'>&copy; {new Date().getFullYear()} Swatantra Maurya All rights reserved.</p>
// 		</motion.div>
// 	</footer>
//   )
// }

// export default Footer















import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const socials = [
  { Icon: FaGithub,    label: "Github",    href: "https://github.com/swatantra001",                          color: "#e2e8f0" },
  { Icon: FaLinkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/in/swatantra-maurya-52731727b/",  color: "#38bdf8" },
  { Icon: FaXTwitter,  label: "X",         href: "https://x.com/SMaury0",                                   color: "#9ca3af" },
  { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/swatantra.mry/",                 color: "#f472b6" },
  { Icon: FaFacebook,  label: "Facebook",  href: "https://www.facebook.com/profile.php?id=100045980146490", color: "#60a5fa" },
]

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Timeline",   href: "#experience" },
  { label: "Contact",    href: "#contact" },
]

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.25, y: -4,
    filter: "drop-shadow(0 0 10px rgba(28,216,210,0.9)) drop-shadow(0 0 22px rgba(0,191,143,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.92, transition: { duration: 0.08 } },
}

const Footer = () => {
  return (
    <footer className='relative overflow-hidden bg-black text-white'>

      {/* bg glows */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(28,216,210,0.06),transparent_70%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(0,191,143,0.08),transparent_70%)]' />
        {/* top separator glow */}
        <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1cd8d2]/20 to-transparent' />
      </div>

      <motion.div
        className='relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-10'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* ── Top: name + tagline ── */}
        <div className='text-center mb-10'>
          <h1
            className='font-extrabold text-white select-none leading-none'
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 7rem)",
              letterSpacing: "0.01em",
              textShadow: "0 2px 32px rgba(28,216,210,0.18)",
            }}
          >
            Swatantra{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]'>
              Maurya
            </span>
          </h1>
          <p className='mt-3 text-gray-500 text-sm tracking-wide'>
            B.Tech CSE · MNNIT Allahabad · Full-Stack & AI Developer
          </p>
          <div className='mt-4 mx-auto h-[2px] w-20 rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]' />
        </div>

        {/* ── Nav links ── */}
        <div className='flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10'>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href}
              className='text-sm text-gray-500 hover:text-emerald-400 transition-colors duration-200'>
              {label}
            </a>
          ))}
        </div>

        {/* ── Socials ── */}
        <div className='flex justify-center gap-4 text-2xl mb-10'>
          {socials.map(({ Icon, label, href, color }) => (
            <motion.a
              key={label} href={href} target='_blank' rel='noopener noreferrer'
              aria-label={label}
              variants={glowVariants} initial='initial' whileHover='hover' whileTap='tap'
              className='text-gray-500 transition-colors duration-200'
              style={{ '--hover-color': color }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* ── Stats strip ── */}
        <div className='flex flex-wrap justify-center gap-6 mb-10'>
          {[
            { label: "CGPA", value: "8.03" },
            { label: "LeetCode Rating", value: "1950" },
            { label: "Projects Shipped", value: "2+" },
            { label: "Tech Stack", value: "20+" },
          ].map((s, i) => (
            <div key={i} className='text-center'>
              <p className='text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]'>{s.value}</p>
              <p className='text-xs text-gray-600'>{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Quote + copyright ── */}
        <div className='text-center border-t border-white/5 pt-8'>
          <p className='text-gray-500 text-sm italic mb-3'>
            "Success is when preparation meets opportunity."
          </p>
          <p className='text-xs text-gray-600'>
            © {new Date().getFullYear()} Swatantra Maurya · All rights reserved ·{' '}
            <a href='mailto:swatantram07@gmail.com' className='hover:text-emerald-400 transition-colors'>swatantram07@gmail.com</a>
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer