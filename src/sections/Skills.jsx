// import React, {useState, useRef, useEffect} from 'react'
// import { FaJava, FaReact,} from "react-icons/fa";
// import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi, SiPython, SiDocker,  SiMongodb, SiAngular} from "react-icons/si";
// import {DiNodejsSmall, } from 'react-icons/di'
// import {motion, useMotionValue} from "framer-motion"

// const Skills = () => {
	
// const skills = [
//     { icon: <FaJava />, name: "Java" },
//     { icon: <FaReact />, name: "React" },
//     { icon: <SiNextdotjs />, name: "Next.js" },
//     { icon: <SiTypescript />, name: "TypeScript" },
//     { icon: <SiTailwindcss />, name: "Tailwind CSS" },
//     { icon: <SiFastapi />, name: "FastAPI" },
//     { icon: <SiPython />, name: "Python" },
//     { icon: <SiDocker />, name: "Docker" },
//     { icon: <DiNodejsSmall />, name: "Node.js" },
//     { icon: <SiMongodb />, name: "MongoDB" },
//     { icon: <SiAngular />, name: "Angular" },
//   ];

//   const repeated = [...skills, ...skills];

//   const [dir, setDir] = useState(-1);
//   const [active, setActive] = useState(false);
//   const sectionRef = useRef(null);
//   const trackRef = useRef(null);
//   const touchY = useRef(null);
//   const x = useMotionValue(0);

//   	useEffect(() => {                          // does my skill is visible in view port or not
// 		const el = sectionRef.current;
// 		if(!el) return;
		
// 		const io = new IntersectionObserver(([entry]) => {
// 			setActive(entry.isIntersecting && entry.intersectionRatio > 0.1)
// 		}, {threshold: [0.1]});
// 		io.observe(el);
// 		return () => io.disconnect(el);
// 	}, [])

// 	useEffect(() => {
// 		if(!active) return;
// 		const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1); // deltaY < 0 ==> scroll-up
// 		const onTouchStart = (e) => (touchY.current = e.touches[0].clientY);

// 		const onTouchMove = (e) => {
// 			if(touchY.current == null) return;
// 			const delta = e.touches[0].clientY - touchY.current;
// 			setDir(delta > 0 ? 1 : -1);
// 			touchY.current = e.touches[0].clientY;
// 		}
// 		window.addEventListener("wheel", onWheel, {passive: true});
// 		window.addEventListener("touchstart", onTouchStart, {passive: true});
// 		window.addEventListener("touchmove", onTouchMove, {passive: true});

// 		return () => {
// 			window.removeEventListener("wheel", onWheel);
// 			window.removeEventListener("touchstart", onTouchStart);
// 			window.removeEventListener("touchmove", onTouchMove);
// 		}
// 	}, [active]);


// 	useEffect(() => {
// 		let id;
// 		let last = performance.now();
// 		const SPEED = 80;
		
// 		const tick = (now) => {
// 			const dt = (now-last)/1000;
// 			last = now;
// 			let next = x.get() + SPEED * dir * dt
// 			const loop = trackRef.current?.scrollWidth/2 || 0; // skills are repeated twice that why divided by 2

// 			if(loop) {
// 				if(next <= -loop) next += loop;
// 				else if(next >= 0) next -= loop;
// 			}
// 			x.set(next);
// 			id = requestAnimationFrame(tick);
// 		}
// 		id = requestAnimationFrame(tick);
// 		return () => cancelAnimationFrame(id);
// 	}, [dir, x]);

//   return (
// 	<section ref={sectionRef} id="skills" className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">
// 		<div className="absolute inset-0 pointer-events-none">
// 			<div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />
// 			<div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500" />
// 		</div>
// 		<motion.h2
// 			className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
// 			initial={{opacity:0, y:-30}}
// 			whileInView={{opacity:1, y:0}}
// 			transition={{duration:0.5, delay:0.1}}
// 		>
// 			My Skills
// 		</motion.h2>
// 		<motion.p
// 			className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
// 			initial={{opacity:0, y:-10}}
// 			whileInView={{opacity:1, y:0}}
// 			transition={{duration:0.5, delay:0.1}}
// 		>
// 			Modern Applications | Modern Technologies
// 		</motion.p>
// 		<div className="relative w-full overflow-hidden">
// 			<motion.div
// 				ref={trackRef}
// 				style={{x, whiteSpace: "nowrap", willChange: "transform"}}
// 				className="flex gap-10 text-6xl text-[#1cd8d2]"
// 			>
// 				{repeated.map((skill, index) => (
// 					<div
// 						key={index}
// 						className="flex flex-col items-center gap-2 min-w-[120px]"
// 						aria-label={skill.name}
// 						title={skill.name}
// 					>
// 						<span className="hover:scale-125 transition-transform duration-300">{skill.icon}</span>
// 						<p className="text-sm">{skill.name}</p>
// 					</div>
// 				))}
// 			</motion.div>
// 		</div>
// 	</section>
//   )
// }

// export default Skills









import React, { useState, useRef, useEffect } from 'react'
import { FaReact, FaAws, FaDocker, FaPython } from "react-icons/fa";
import {
	SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiDocker,
	SiMongodb, SiNodedotjs, SiExpress, SiRedis, SiNginx,
	SiPostgresql, SiFirebase, SiTensorflow, SiGit,
	SiPrisma, SiFramer, SiCplusplus, SiJavascript,
	SiCloudflare, SiSupabase, SiStripe
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion, useMotionValue } from "framer-motion"

// ── Skill categories for the grid ──
const categories = [
	{
		label: "Languages",
		color: "from-cyan-500/20 to-teal-500/20",
		border: "border-cyan-500/20",
		accent: "text-cyan-400",
		items: [
			{ icon: <SiCplusplus />, name: "C / C++" },
			{ icon: <SiJavascript />, name: "JavaScript" },
			{ icon: <SiTypescript />, name: "TypeScript" },
			{ icon: <FaPython />, name: "Python" },
		]
	},
	{
		label: "Frontend",
		color: "from-emerald-500/20 to-green-500/20",
		border: "border-emerald-500/20",
		accent: "text-emerald-400",
		items: [
			{ icon: <FaReact />, name: "React.js" },
			{ icon: <SiNextdotjs />, name: "Next.js" },
			{ icon: <TbBrandReactNative />, name: "React Native" },
			{ icon: <SiTailwindcss />, name: "Tailwind CSS" },
			{ icon: <SiFramer />, name: "Framer Motion" },
		]
	},
	{
		label: "Backend & Servers",
		color: "from-violet-500/20 to-purple-500/20",
		border: "border-violet-500/20",
		accent: "text-violet-400",
		items: [
			{ icon: <SiNodedotjs />, name: "Node.js" },
			{ icon: <SiExpress />, name: "Express.js" },
			{ icon: <SiRedis />, name: "Redis" },
			{ icon: <SiNginx />, name: "Nginx" },
		]
	},
	{
		label: "Databases & Cloud",
		color: "from-orange-500/20 to-amber-500/20",
		border: "border-orange-500/20",
		accent: "text-orange-400",
		items: [
			{ icon: <FaAws />, name: "AWS (EC2/S3)" },
			{ icon: <SiSupabase />, name: "Supabase" },
			{ icon: <SiMongodb />, name: "MongoDB" },
			{ icon: <SiFirebase />, name: "Firebase" },
			{ icon: <SiCloudflare />, name: "Cloudflare" },
		]
	},
	{
		label: "AI & Computer Vision",
		color: "from-pink-500/20 to-rose-500/20",
		border: "border-pink-500/20",
		accent: "text-pink-400",
		items: [
			{ icon: <SiTensorflow />, name: "TensorFlow.js" },
			{ icon: <FaPython />, name: "InsightFace" },
			{ icon: <FaPython />, name: "MediaPipe" },
			{ icon: <FaPython />, name: "Gemini API" },
		]
	},
	{
		label: "Tools & DevOps",
		color: "from-sky-500/20 to-blue-500/20",
		border: "border-sky-500/20",
		accent: "text-sky-400",
		items: [
			{ icon: <FaDocker />, name: "Docker" },
			{ icon: <SiGit />, name: "Git / GitHub" },
			{ icon: <SiPrisma />, name: "Prisma / Drizzle" },
			{ icon: <SiStripe />, name: "Stripe" },
		]
	},
]

// ── Marquee skills (all in one flat list) ──
const marqueeSkills = categories.flatMap(c => c.items)

const Skills = () => {
	const sectionRef = useRef(null)
	const trackRef = useRef(null)
	const touchY = useRef(null)
	const [dir, setDir] = useState(-1)
	const [active, setActive] = useState(false)
	const x = useMotionValue(0)

	const repeated = [...marqueeSkills, ...marqueeSkills]

	useEffect(() => {
		const el = sectionRef.current
		if (!el) return
		const io = new IntersectionObserver(([entry]) => {
			setActive(entry.isIntersecting && entry.intersectionRatio > 0.1)
		}, { threshold: [0.1] })
		io.observe(el)
		return () => io.disconnect()
	}, [])

	useEffect(() => {
		if (!active) return
		const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1)
		const onTouchStart = (e) => (touchY.current = e.touches[0].clientY)
		const onTouchMove = (e) => {
			if (touchY.current == null) return
			const delta = e.touches[0].clientY - touchY.current
			setDir(delta > 0 ? 1 : -1)
			touchY.current = e.touches[0].clientY
		}
		window.addEventListener("wheel", onWheel, { passive: true })
		window.addEventListener("touchstart", onTouchStart, { passive: true })
		window.addEventListener("touchmove", onTouchMove, { passive: true })
		return () => {
			window.removeEventListener("wheel", onWheel)
			window.removeEventListener("touchstart", onTouchStart)
			window.removeEventListener("touchmove", onTouchMove)
		}
	}, [active])

	useEffect(() => {
		let id
		let last = performance.now()
		const SPEED = 65
		const tick = (now) => {
			const dt = (now - last) / 1000
			last = now
			let next = x.get() + SPEED * dir * dt
			const loop = trackRef.current?.scrollWidth / 2 || 0
			if (loop) {
				if (next <= -loop) next += loop
				else if (next >= 0) next -= loop
			}
			x.set(next)
			id = requestAnimationFrame(tick)
		}
		id = requestAnimationFrame(tick)
		return () => cancelAnimationFrame(id)
	}, [dir, x])

	return (
		<section ref={sectionRef} id="skills" className="w-full py-24 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">

			{/* Background glows */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/4 left-0 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-15 blur-[130px] animate-pulse" />
				<div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] opacity-15 blur-[130px] animate-pulse delay-500" />
			</div>

			{/* ── Heading ── */}
			<motion.h2
				className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				My Skills
			</motion.h2>
			<motion.p
				className="mt-2 mb-12 text-gray-400 text-base sm:text-lg z-10"
				initial={{ opacity: 0, y: -10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.1 }}
				viewport={{ once: true }}
			>
				Real-time systems · AI/ML · Cloud infrastructure · Full-stack
			</motion.p>

			{/* ── Category Grid ── */}
			<div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
				{categories.map((cat, ci) => (
					<motion.div
						key={ci}
						className={`rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.color} p-5 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.07 * ci, duration: 0.5 }}
						viewport={{ once: true, amount: 0.2 }}
					>
						<h3 className={`text-xs font-bold tracking-widest uppercase mb-4 ${cat.accent}`}>{cat.label}</h3>
						<div className="flex flex-wrap gap-2">
							{cat.items.map((skill, si) => (
								<motion.div
									key={si}
									className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 hover:border-white/25 hover:bg-white/10 transition-all duration-200 cursor-default"
									whileHover={{ scale: 1.06 }}
								>
									<span className={`text-base ${cat.accent}`}>{skill.icon}</span>
									<span>{skill.name}</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				))}
			</div>

			{/* ── Marquee strip ── */}
			<div className="relative w-full overflow-hidden z-10">
				{/* fade edges */}
				<div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
				<div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

				<motion.div
					ref={trackRef}
					style={{ x, whiteSpace: "nowrap", willChange: "transform" }}
					className="flex gap-8 text-5xl text-[#1cd8d2]"
				>
					{repeated.map((skill, i) => (
						<div
							key={i}
							className="flex flex-col items-center gap-2 min-w-[100px] hover:text-emerald-400 transition-colors duration-200"
							title={skill.name}
						>
							<span className="hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(28,216,210,0.5)]">
								{skill.icon}
							</span>
							<p className="text-xs text-gray-400">{skill.name}</p>
						</div>
					))}
				</motion.div>
			</div>

			{/* ── Coursework chips ── */}
			<motion.div
				className="relative z-10 mt-14 flex flex-wrap justify-center gap-3 px-6 max-w-3xl"
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				viewport={{ once: true, amount: 0.3 }}
			>
				<p className="w-full text-center text-xs font-semibold tracking-widest uppercase text-gray-500 mb-1">Coursework</p>
				{["Data Structures & Algorithms", "OOP", "Operating Systems", "DBMS", "Computer Networks"].map((c, i) => (
					<span key={i} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-200">
						{c}
					</span>
				))}
			</motion.div>

		</section>
	)
}

export default Skills