// import React, { useEffect, useMemo, useState } from 'react'
// import ParticlesBackground from '../components/ParticlesBackground'
// import {motion } from 'framer-motion'
// import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
// import avator from '../assets/avator.png'


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
// const Home = () => {
// 	const roles = useMemo(() => ["Web Developer", "Software Developer"], [])
// 	const [index, setIndex] = useState(0);
// 	const [subIndex, setSubIndex] = useState(0);
// 	const [deleting, setDeleting] = useState(false);

// 	useEffect(() => {
// 		const current = roles[index];
// 		const timeout = setTimeout(() => {
// 			if(!deleting && subIndex < current.length) setSubIndex(v => v+1);
// 			else if(!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200);
// 			else if(deleting && subIndex > 0) setSubIndex(v => v-1);
// 			else if(deleting && subIndex === 0) {
// 				setDeleting(false);
// 				setIndex( p => (p+1) % roles.length);
// 				setSubIndex(0);
// 			}
// 		}, deleting ? 40:60);
// 		return () => clearTimeout(timeout)
// 	}, [index, subIndex, deleting, roles])

//   return (
// 	<section id='home' className='w-full h-screen relative bg-black overflow-hidden'>
// 		<ParticlesBackground />
// 		<div className='absolute inset-0'>
// 			<div className='absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse'></div>
// 			<div className='absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500'></div>
// 		</div>
// 		<div className='relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2'>
// 			<div className='flex flex-col justify-center h-full md:ml-10 text-center lg:text-left relative'>
// 				<div className='w-full lg:pr-24 mx-auto max-w-3xl'>
// 					<motion.div
// 						className='mb-1 mt-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]'
// 						initial= {{opacity: 0, y: 12}}
// 						animate={{opacity: 1, y: 0}}
// 						transition={{duration: 0.6}}
// 					>
// 						<span>{roles[index].substring(0, subIndex)}</span>
// 						<span className='inline-block w-[2px] ml-1 bg-white animate-pulse align-middle' style={{height: "1em"}}></span>
// 					</motion.div>
// 					<motion.h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg'
// 						initial= {{opacity: 0, y: 40}}
// 						animate={{opacity: 1, y: 0}}
// 						transition={{duration: 1}}
// 					>
// 						Hello, I'm
// 						<br />
// 						<span  className='text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:whitespace-nowrap'>Swatantra Maurya</span>
// 					</motion.h1>
// 					<motion.p className='mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0'
// 						initial= {{opacity: 0, y: 40}}
// 						animate={{opacity: 1, y: 0}}
// 						transition={{duration: 0.4}}
// 					>
// 						I turn complex ideas into seamless, high-impact web experiences - building modern, scalable, and lightning-fast applications that make a difference.
// 					</motion.p>

// 					<motion.div className='mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6'
// 						initial={{opacity:0}}
// 						animate={{opacity: 1}}
// 						transition={{duration: 0.8, delay: 0.8}}
// 					>
// 						<a href='#projects' className='px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all'>View My Work</a>
// 						<a href='https://pay-scan.vercel.app/' className='px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all'>Track your Transaction</a>
// 					</motion.div>

// 					<div className='mt-10 flex -gap-5 text-2xl md:text-3xl justify-center lg:justify-start'>
// 						{socials.map(({Icon, label, href}) => (
// 							<motion.a
// 								href={href}
// 								target='_blank'
// 								rel='noopener noreferrer'
// 								key={label}
// 								aria-label={label}
// 								varients={glowVarients}
// 								className='text-gray-300 m-2'
// 							>
// 								<Icon />
// 							</motion.a>
// 						))}
// 					</div>
// 				</div>
// 			</div>

// 			<div className='relative hidden lg:block'>
// 				<div 
// 					className='absolute right-15! top-1/2 -translate-y-1/2 pointer-events-none'
// 					style={{right:"10px", width: "min(22vw, 410px)", height: "min(40vw, 760px)", borderRadius: "50%", filter: "blur(38px)", opacity:0.32, background: "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)"}}
// 				/>
// 				<motion.img 
// 					src={avator} 
// 					alt='Swatantra Maurya' 
// 					style={{right: "-30px", width: "min(45vw, 780px)", maxHeight: "90vh"}} 
// 					className='absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none'
// 					initial={{opacity:0, y:40, scale:0.98}}
// 					animate={{opacity:1, y:0, scale:1}}
// 					transition={{delay:0.6, duration:0.8}}
// 				/>	
// 			</div>
// 		</div>
// 	</section>
//   )
// }

// export default Home











import React, { useEffect, useMemo, useState } from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaFacebook } from 'react-icons/fa6'
import avator from '../assets/avator.png'

const socials = [
	{ Icon: FaGithub, label: "Github", href: "https://github.com/swatantra001" },
	{ Icon: FaLinkedin, label: "Linkedin", href: "https://www.linkedin.com/in/swatantra-maurya-52731727b/" },
	{ Icon: FaXTwitter, label: "X", href: "https://x.com/SMaury0" },
	{ Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/swatantra.mry/" },
	{ Icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=100045980146490" },
]

const glowVariants = {
	initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
	hover: {
		scale: 1.25, y: -4,
		filter: "drop-shadow(0 0 10px rgba(28, 216, 210, 0.95)) drop-shadow(0 0 22px rgba(0,191,143,0.85))",
		transition: { type: "spring", stiffness: 300, damping: 15 }
	},
	tap: { scale: 0.93, y: 0, transition: { duration: 0.08 } }
}

// Floating badge component
const Badge = ({ children, delay = 0 }) => (
	<motion.span
		className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-emerald-400 backdrop-blur-sm'
		initial={{ opacity: 0, scale: 0.8 }}
		animate={{ opacity: 1, scale: 1 }}
		transition={{ delay, duration: 0.4 }}
	>
		{children}
	</motion.span>
)

const Home = () => {
	const roles = useMemo(() => [
		"Full-Stack Developer",
		"AI Systems Builder",
		"Cloud & DevOps Engineer",
		"Competitive Programmer",
	], [])

	const [index, setIndex] = useState(0)
	const [subIndex, setSubIndex] = useState(0)
	const [deleting, setDeleting] = useState(false)

	useEffect(() => {
		const current = roles[index]
		const timeout = setTimeout(() => {
			if (!deleting && subIndex < current.length) setSubIndex(v => v + 1)
			else if (!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1400)
			else if (deleting && subIndex > 0) setSubIndex(v => v - 1)
			else if (deleting && subIndex === 0) {
				setDeleting(false)
				setIndex(p => (p + 1) % roles.length)
				setSubIndex(0)
			}
		}, deleting ? 35 : 55)
		return () => clearTimeout(timeout)
	}, [index, subIndex, deleting, roles])

	return (
		<section id='home' className='w-full h-screen relative bg-black overflow-hidden'>
			<ParticlesBackground />

			{/* Background glows */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[520px] max-h-[520px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-25 md:opacity-15 blur-[120px] sm:blur-[140px] md:blur-[160px] animate-pulse' />
				<div className='absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[520px] max-h-[520px] rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] opacity-25 md:opacity-15 blur-[120px] sm:blur-[140px] md:blur-[160px] animate-pulse delay-700' />
				{/* Extra subtle center glow */}
				<div className='absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] rounded-full bg-[#00bf8f] opacity-5 blur-[100px]' />
			</div>

			<div className='relative z-10 h-full w-full max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2'>

				{/* LEFT: Text content */}
				<div className='flex flex-col justify-center h-full text-center lg:text-left'>
					<div className='w-full lg:pr-16 mx-auto max-w-3xl'>

						{/* Badges row */}
						<motion.div
							className='flex flex-wrap gap-2 justify-center lg:justify-start mb-5'
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<Badge delay={0.1}>⚡ MNNIT Allahabad</Badge>
							<Badge delay={0.2}>🏆 LeetCode Knight · 1950</Badge>
							<Badge delay={0.3}>🎓 B.Tech CSE · 8.03 CGPA</Badge>
						</motion.div>

						{/* Typewriter role */}
						<motion.div
							className='mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide min-h-[1.8em]'
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]'>
								{roles[index].substring(0, subIndex)}
							</span>
							<span
								className='inline-block w-[2px] ml-0.5 bg-emerald-400 animate-pulse align-middle'
								style={{ height: "1em" }}
							/>
						</motion.div>

						{/* Name */}
						<motion.h1
							className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.9 }}
						>
							<span className='text-gray-400 font-medium text-2xl sm:text-3xl md:text-4xl block mb-1'>Hello, I'm</span>
							<span className='text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:whitespace-nowrap drop-shadow-lg'>
								Swatantra{' '}
								<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]'>
									Maurya
								</span>
							</span>
						</motion.h1>

						{/* Bio */}
						<motion.p
							className='mt-5 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed'
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							I architect{' '}
							<span className='text-emerald-400 font-medium'>real-time, AI-powered</span> full-stack systems —
							from collaborative cloud IDEs with agentic AI to biometric attendance ecosystems —
							built for scale, speed, and production.
						</motion.p>

						{/* CTA Buttons */}
						<motion.div
							className='mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.55 }}
						>
							<a
								href='#projects'
								className='group relative px-7 py-3 rounded-full font-semibold text-base text-white overflow-hidden shadow-xl hover:scale-105 transition-all duration-300'
								style={{ background: "linear-gradient(135deg, #1cd8d2, #00bf8f, #302b63)" }}
							>
								<span className='relative z-10'>View My Work</span>
								<span className='absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full' />
							</a>
							<a
								href='https://nexuside.in'
								target='_blank'
								rel='noopener noreferrer'
								className='group px-7 py-3 rounded-full text-base font-semibold text-black bg-white hover:bg-emerald-50 shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2'
							>
								<span>🚀 Try NexusIDE</span>
							</a>
						</motion.div>

						{/* Socials */}
						<motion.div
							className='mt-8 flex gap-1 text-2xl md:text-3xl justify-center lg:justify-start'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.85 }}
						>
							{socials.map(({ Icon, label, href }) => (
								<motion.a
									href={href}
									target='_blank'
									rel='noopener noreferrer'
									key={label}
									aria-label={label}
									variants={glowVariants}
									initial='initial'
									whileHover='hover'
									whileTap='tap'
									className='text-gray-400 hover:text-emerald-400 m-2 transition-colors duration-200'
								>
									<Icon />
								</motion.a>
							))}
						</motion.div>
					</div>
				</div>

				{/* RIGHT: Avatar */}
				<div className='relative hidden lg:block'>
					{/* Conic glow behind avatar */}
					<div
						className='absolute top-1/2 -translate-y-1/2 pointer-events-none'
						style={{
							right: "10px",
							width: "min(22vw, 420px)",
							height: "min(42vw, 780px)",
							borderRadius: "50%",
							filter: "blur(44px)",
							opacity: 0.28,
							background: "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)"
						}}
					/>
					{/* Subtle ring decoration */}
					<div
						className='absolute top-1/2 -translate-y-1/2 pointer-events-none border border-emerald-500/10 rounded-full'
						style={{ right: "-10px", width: "min(46vw, 790px)", height: "min(46vw, 790px)" }}
					/>
					<motion.img
						src={avator}
						alt='Swatantra Maurya'
						style={{ right: "-30px", width: "min(45vw, 780px)", maxHeight: "90vh" }}
						className='absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none'
						initial={{ opacity: 0, y: 50, scale: 0.96 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ delay: 0.5, duration: 0.9 }}
					/>
				</div>
			</div>
		</section>
	)
}

export default Home