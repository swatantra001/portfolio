// import React from 'react'
// import {motion} from "framer-motion"
// import myImage from '../assets/1.Me.jpg'
// import transparentMyImage from '../assets/1.Me_transparent_bg.jpg'

// const About = () => {
// 	const glows = [
// 		"-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
// 		"bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
// 		"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]"
// 	]
// 	const stats = [
// 		{label: "Experience", value: "0-1 years"},
// 		{label: "Speciality", value: "Full Stack & DSA"},
// 		{label: "Focus", value: "Performance & UX"}
// 	]
//   return (
// 	<section id='about' className='min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden'>
// 		<div className='absolute inset-0 pointer-events-none'>
// 			{glows.map((glow, index) => (
// 				<div key={index} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${glow}`}></div>
// 			))}
// 		</div>
// 		<div className='relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12'>
// 			<motion.div className='flex flex-col md:flex-row items-center md:items-stretch gap-8'
// 				initial={{opacity: 0, y:24}}
// 				whileInView={{opacity:1, y:0}}
// 				transition={{duration:0.6}}
// 				viewport={{once:true, amount:0.4}} // only once animation will be done that too when first time it come into viewport
// 			>
// 				<motion.div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25"
// 					whileHover={{scale: 1.02}}
// 					transition={{type:"spring", stiffness:200, damping:18}}
// 				>
// 					<img  src={myImage} alt="profile" className="absolute inset-0"/>
// 				</motion.div>
// 				<div className="flex-1 flex flex-col justify-center text-center md:text-left">
// 					<h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
// 						Swatantra Maurya
// 					</h2>
// 					<p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">Full Stack Developer</p>
// 					<p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">I build scalable, modern applications with a strong focus on clean architecture, delightful UX, and performance. My toolkit spans Java, React, Next.js, TypeScript, Tailwind CSS, and RestfulAPI- bringing ideas to life from concept to production with robust APIs and smooth interfaces.</p>
// 					<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
// 						{stats.map((item, index) => (
// 							<motion.div
// 								key={index}
// 								className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
// 								initial={{opacity:0, y:10}}
// 								whileInView={{opacity:1, y:0}}
// 								transition={{delay:0.05*index, duration:0.4}}
// 								viewport={{once: true, amount:0.3}}
// 							>
// 								<div className="text-sm text-gray-400">{item.label}</div>
// 								<div className="text-base font-semibold">{item.value}</div>
// 							</motion.div>
// 						))}
// 					</div>
// 					<div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
// 						<a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200">View Projects</a>
// 						<a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white bg-white/10 px-5 py-3 hover:bg-white/20 transition">Get in Touch</a>
// 					</div>
// 				</div>
// 			</motion.div>
// 			<motion.div className="text-center md:text-left"
// 				initial={{opacity:1, x:-30}}
// 				whileInView={{opacity:1, x:0}}
// 				transition={{duration:0.6}}
// 				viewport={{once: true, amount:0.4}}
// 			>
// 				<h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">About me</h3>
// 				<p className="text-gray-300 leading-relaxed text-base sm:text-lg">I'm a Software Developer, Content Creator, and Web Developer - passionate about fast, resilient applications and sharing coding insights on Instagram and YouTube.</p>
// 				<p className="mt-4 text-gray-400 text-base sm:text-lg">I love turning ideas into scalable, user-friendly products that make an impact.</p>
// 			</motion.div>
// 		</div>
// 	</section>
//   )
// }

// export default About

















import React from 'react'
import { motion } from "framer-motion"
import myImage from '../assets/1.Me.jpg'

const glows = [
	"-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
	"bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
	"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]"
]

const stats = [
	{ label: "Institute", value: "MNNIT Allahabad" },
	{ label: "CGPA", value: "8.03 / 10" },
	{ label: "LeetCode", value: "Knight · 1950" },
	{ label: "Experience", value: "~1 Year" },
	{ label: "Speciality", value: "Full Stack + AI" },
	{ label: "Focus", value: "Scale & Performance" },
]

const highlights = [
	{ icon: "🚀", title: "NexusIDE", desc: "Real-time cloud IDE with AI coding assistant, CRDT sync, and biometric contest proctoring." },
	{ icon: "🎯", title: "SmartAttend", desc: "AI biometric attendance ecosystem across 3 web portals + 2 mobile apps with 100% liveness detection." },
	{ icon: "🏆", title: "Competitive Programming", desc: "LeetCode Knight (1950 rating), global rank 989 in Biweekly Contest 157." },
]

const About = () => {
	return (
		<section id='about' className='min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden'>

			{/* Background glows */}
			<div className='absolute inset-0 pointer-events-none'>
				{glows.map((glow, i) => (
					<div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${glow}`} />
				))}
			</div>

			<div className='relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-24 flex flex-col gap-16'>

				{/* ── Top: Photo + Identity ── */}
				<motion.div
					className='flex flex-col md:flex-row items-center md:items-stretch gap-10'
					initial={{ opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.65 }}
					viewport={{ once: true, amount: 0.35 }}
				>
					{/* Photo */}
					<motion.div
						className="relative shrink-0 w-[160px] h-[160px] md:w-[210px] md:h-[210px] rounded-2xl overflow-hidden shadow-2xl"
						style={{ boxShadow: "0 0 40px rgba(28,216,210,0.18), 0 0 0 1px rgba(28,216,210,0.15)" }}
						whileHover={{ scale: 1.03 }}
						transition={{ type: "spring", stiffness: 200, damping: 18 }}
					>
						{/* gradient border shimmer */}
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1cd8d2]/30 to-[#302b63]/30 z-10 pointer-events-none" />
						<img src={myImage} alt="Swatantra Maurya" className="w-full h-full object-cover" />
					</motion.div>

					{/* Identity */}
					<div className="flex-1 flex flex-col justify-center text-center md:text-left">
						<motion.span
							className="inline-block mb-2 text-xs font-semibold tracking-widest text-emerald-400 uppercase"
							initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
						>
							B.Tech CSE · MNNIT Allahabad · 2023–27
						</motion.span>

						<h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
							Swatantra Maurya
						</h2>

						<p className="mt-2 text-lg sm:text-xl text-white/80 font-semibold">
							Full-Stack Developer &amp; AI Systems Builder
						</p>

						<p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl">
							I architect production-grade, real-time systems — from collaborative cloud IDEs powered by
							<span className="text-emerald-400 font-medium"> agentic AI &amp; CRDTs</span>, to
							biometric attendance ecosystems with <span className="text-emerald-400 font-medium">facial recognition &amp; liveness detection</span>.
							My stack spans React, Next.js, Node.js, Python, Docker, AWS, and everything in between.
						</p>

						{/* Stats grid */}
						<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl">
							{stats.map((item, i) => (
								<motion.div
									key={i}
									className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur-sm hover:border-emerald-500/30 hover:bg-white/8 transition-all duration-300"
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.05 * i, duration: 0.4 }}
									viewport={{ once: true, amount: 0.3 }}
								>
									<div className="text-xs text-gray-400 mb-0.5">{item.label}</div>
									<div className="text-sm font-semibold text-white">{item.value}</div>
								</motion.div>
							))}
						</div>

						{/* CTAs */}
						<div className="mt-7 flex flex-wrap gap-3 justify-center md:justify-start">
							<a
								href="#projects"
								className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] text-white font-semibold px-6 py-3 hover:scale-105 transition-all shadow-lg text-sm"
							>
								🗂 View Projects
							</a>
							<a
								href="#contact"
								className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white bg-white/8 px-6 py-3 hover:bg-white/15 hover:scale-105 transition-all text-sm font-medium"
							>
								✉️ Get in Touch
							</a>
						</div>
					</div>
				</motion.div>

				{/* ── About narrative ── */}
				<motion.div
					className="text-center md:text-left"
					initial={{ opacity: 0, x: -24 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.35 }}
				>
					<h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
						About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]">Me</span>
					</h3>
					<p className="text-gray-300 leading-relaxed text-base sm:text-lg max-w-3xl">
						I'm a second-year CSE student at <span className="text-white font-medium">MNNIT Allahabad</span>, driven by the challenge of building
						real-world systems that are fast, scalable, and actually solve problems. I thrive at the intersection of
						<span className="text-emerald-400 font-medium"> full-stack engineering</span>,
						<span className="text-emerald-400 font-medium"> AI/ML integration</span>, and
						<span className="text-emerald-400 font-medium"> cloud infrastructure</span>.
					</p>
					<p className="mt-4 text-gray-400 text-base sm:text-lg max-w-3xl">
						Outside of building products, I sharpen my problem-solving through competitive programming —
						reaching a <span className="text-white font-medium">LeetCode Knight rating of 1950</span> and a
						global rank of <span className="text-white font-medium">989</span> in Biweekly Contest 157.
						I believe great engineers ship great products, and I'm always looking for the next hard problem to solve.
					</p>
				</motion.div>

				{/* ── Project Highlights ── */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center md:text-left">
						What I've <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]">Built</span>
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
						{highlights.map((h, i) => (
							<motion.div
								key={i}
								className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-white/8 transition-all duration-300 group"
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 * i, duration: 0.5 }}
								viewport={{ once: true, amount: 0.3 }}
								whileHover={{ y: -4 }}
							>
								<div className="text-3xl mb-3">{h.icon}</div>
								<div className="text-white font-bold text-base mb-1 group-hover:text-emerald-400 transition-colors">{h.title}</div>
								<div className="text-gray-400 text-sm leading-relaxed">{h.desc}</div>
							</motion.div>
						))}
					</div>
				</motion.div>

			</div>
		</section>
	)
}

export default About