import React from 'react'
import {motion} from "framer-motion"
import myImage from '../assets/1.Me.jpg'
import transparentMyImage from '../assets/1.Me_transparent_bg.jpg'

const About = () => {
	const glows = [
		"-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
		"bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
		"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]"
	]
	const stats = [
		{label: "Experience", value: "0-1 years"},
		{label: "Speciality", value: "Full Stack & DSA"},
		{label: "Focus", value: "Performance & UX"}
	]
  return (
	<section id='about' className='min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden'>
		<div className='absolute inset-0 pointer-events-none'>
			{glows.map((glow, index) => (
				<div key={index} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${glow}`}></div>
			))}
		</div>
		<div className='relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12'>
			<motion.div className='flex flex-col md:flex-row items-center md:items-stretch gap-8'
				initial={{opacity: 0, y:24}}
				whileInView={{opacity:1, y:0}}
				transition={{duration:0.6}}
				viewport={{once:true, amount:0.4}} // only once animation will be done that too when first time it come into viewport
			>
				<motion.div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25"
					whileHover={{scale: 1.02}}
					transition={{type:"spring", stiffness:200, damping:18}}
				>
					<img  src={myImage} alt="profile" className="absolute inset-0"/>
				</motion.div>
				<div className="flex-1 flex flex-col justify-center text-center md:text-left">
					<h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
						Swatantra Maurya
					</h2>
					<p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">Full Stack Developer</p>
					<p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">I build scalable, modern applications with a strong focus on clean architecture, delightful UX, and performance. My toolkit spans Java, React, Next.js, TypeScript, Tailwind CSS, and RestfulAPI- bringing ideas to life from concept to production with robust APIs and smooth interfaces.</p>
					<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
						{stats.map((item, index) => (
							<motion.div
								key={index}
								className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
								initial={{opacity:0, y:10}}
								whileInView={{opacity:1, y:0}}
								transition={{delay:0.05*index, duration:0.4}}
								viewport={{once: true, amount:0.3}}
							>
								<div className="text-sm text-gray-400">{item.label}</div>
								<div className="text-base font-semibold">{item.value}</div>
							</motion.div>
						))}
					</div>
					<div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
						<a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200">View Projects</a>
						<a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white bg-white/10 px-5 py-3 hover:bg-white/20 transition">Get in Touch</a>
					</div>
				</div>
			</motion.div>
			<motion.div className="text-center md:text-left"
				initial={{opacity:1, x:-30}}
				whileInView={{opacity:1, x:0}}
				transition={{duration:0.6}}
				viewport={{once: true, amount:0.4}}
			>
				<h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">About me</h3>
				<p className="text-gray-300 leading-relaxed text-base sm:text-lg">I'm a Software Developer, Content Creator, and Web Developer - passionate about fast, resilient applications and sharing coding insights on Instagram and YouTube.</p>
				<p className="mt-4 text-gray-400 text-base sm:text-lg">I love turning ideas into scalable, user-friendly products that make an impact.</p>
			</motion.div>
		</div>
	</section>
  )
}

export default About
