// import { motion, useScroll, useTransform } from 'framer-motion';
// import React, { useMemo } from 'react';
// import { useRef, useState, useEffect } from 'react';

// const experiences = [
// 	{
// 		type: "education",
// 		role: "B.Tech — Computer Science & Engineering",
// 		company: "MNNIT Allahabad",
// 		duration: "2023 – 2027",
// 		cgpa: "8.03 CGPA",
// 		description: "Pursuing CSE at one of India's premier NITs. Coursework includes DSA, OOP, OS, DBMS, and Computer Networks. Actively building production-grade full-stack systems alongside academics.",
// 		icon: "🎓",
// 		accentColor: "#1cd8d2",
// 		tags: ["DSA", "OOP", "OS", "DBMS", "Networks"],
// 	},
// 	{
// 		type: "achievement",
// 		role: "LeetCode Knight · Rating 1950",
// 		company: "Competitive Programming",
// 		duration: "2023 – Present",
// 		cgpa: "Global Rank 989",
// 		description: "Achieved Knight tier on LeetCode with a peak rating of 1950. Secured a global rank of 989 in LeetCode Biweekly Contest 157. Reached the penultimate round of Webster — MNNIT's annual web development competition (2024).",
// 		icon: "🏆",
// 		accentColor: "#f59e0b",
// 		tags: ["LeetCode", "Problem Solving", "Webster 2024", "Algorithms"],
// 	},
// 	{
// 		type: "project",
// 		role: "Full-Stack Developer — NexusIDE",
// 		company: "Personal Project",
// 		duration: "2024",
// 		cgpa: "nexuside.in",
// 		description: "Built a real-time collaborative cloud IDE with agentic AI (Gemini), CRDT sync via Yjs/Liveblocks, containerised RCE via Docker, and a full AI proctoring engine using TensorFlow.js and MediaPipe.",
// 		icon: "🚀",
// 		accentColor: "#1cd8d2",
// 		tags: ["Next.js", "WebSockets", "Docker", "Gemini AI", "AWS"],
// 	},
// 	{
// 		type: "project",
// 		role: "Full-Stack Developer — SmartAttend",
// 		company: "Personal Project",
// 		duration: "2024 – 2025",
// 		cgpa: "smartattend.co.in",
// 		description: "Engineered a cross-platform biometric attendance ecosystem — 3 web portals + 2 React Native apps — with InsightFace facial recognition, 100% liveness detection, and AWS production infrastructure.",
// 		icon: "🎯",
// 		accentColor: "#00bf8f",
// 		tags: ["React Native", "InsightFace", "Python", "AWS", "Redis"],
// 	},
// ];

// const typeLabels = {
// 	education: "Education",
// 	achievement: "Achievement",
// 	project: "Project",
// };

// // ─── ExperienceItem ───────────────────────────────────────────────────────────
// // Hooks are at the top level of this component (not inside a .map), which
// // satisfies React's Rules of Hooks.
// function ExperienceItem({ exp, idx, start, end, scrollYProgress, layout }) {
// 	const scale   = useTransform(scrollYProgress, [start, end], [0, 1]);
// 	const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
// 	// Even cards animate from above, odd from below — matches the visual direction
// 	const y = useTransform(scrollYProgress, [start, end], [idx % 2 === 0 ? 30 : -30, 0]);
// 	const x = useTransform(scrollYProgress, [start, end], [-24, 0]);

// 	const accent = exp.accentColor;

// 	if (layout === 'desktop') {
// 		return (
// 			// ── IDENTICAL structure to the original working commented code ──
// 			// relative + flex-1 + justify-center + items-center
// 			//   → the dot sits exactly ON the horizontal line
// 			//   → cards use absolute bottom-N / top-N from that center
// 			//   → NO overflow-hidden here so cards freely extend above/below
// 			<div className='relative flex flex-1 justify-center items-center min-w-0'>

// 				{/* Dot — centered on the line by parent items-center */}
// 				<motion.div
// 					className="z-10 w-7 h-7 rounded-full flex items-center justify-center text-sm"
// 					style={{
// 						scale,
// 						opacity,
// 						backgroundColor: accent + '22',
// 						border: `2px solid ${accent}`,
// 						boxShadow: `0 0 0 6px ${accent}18, 0 0 16px ${accent}44`,
// 					}}
// 				>
// 					{exp.icon}
// 				</motion.div>

// 				{/* Connector stub */}
// 				<motion.div
// 					className={`absolute ${idx % 2 === 0 ? '-top-10' : '-bottom-10'} w-[2px]`}
// 					style={{ height: 40, opacity, backgroundColor: accent + '55' }}
// 				/>

// 				{/* Card — absolute above (even) or below (odd) the dot */}
// 				<motion.article
// 					className={`absolute ${idx % 2 === 0 ? 'bottom-14' : 'top-14'}
// 						rounded-2xl p-5 backdrop-blur-md`}
// 					style={{
// 						opacity,
// 						y,
// 						width: '280px',
// 						background: `linear-gradient(135deg, ${accent}10, #0a0f1ecc)`,
// 						border:     `1px solid ${accent}30`,
// 						boxShadow:  `0 8px 32px ${accent}1a`,
// 					}}
// 					transition={{ duration: 0.4, delay: idx * 0.1 }}
// 				>
// 					<span
// 						className="inline-block mb-2 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
// 						style={{ backgroundColor: accent + '18', color: accent }}
// 					>
// 						{typeLabels[exp.type]}
// 					</span>

// 					<h3 className="text-sm font-bold text-white leading-snug mb-0.5 break-words">
// 						{exp.role}
// 					</h3>
// 					<p className="text-xs font-semibold mb-1" style={{ color: accent }}>
// 						{exp.company}
// 					</p>
// 					<div className="flex flex-wrap items-center gap-x-2 mb-2">
// 						<span className="text-[11px] text-gray-500">{exp.duration}</span>
// 						{exp.cgpa && (
// 							<span className="text-[11px] font-semibold" style={{ color: accent }}>
// 								· {exp.cgpa}
// 							</span>
// 						)}
// 					</div>
// 					<p className="text-gray-400 text-[11px] leading-relaxed mb-3 break-words">
// 						{exp.description}
// 					</p>
// 					<div className="flex flex-wrap gap-1">
// 						{exp.tags.map(t => (
// 							<span
// 								key={t}
// 								className="text-[9px] px-1.5 py-0.5 rounded-full"
// 								style={{
// 									backgroundColor: accent + '15',
// 									color:           accent,
// 									border:          `1px solid ${accent}28`,
// 								}}
// 							>
// 								{t}
// 							</span>
// 						))}
// 					</div>
// 				</motion.article>
// 			</div>
// 		);
// 	}

// 	// ── Mobile ────────────────────────────────────────────────────────────────
// 	return (
// 		<div className='relative flex items-center'>
// 			<motion.div
// 				className="absolute -left-[14px] top-3 z-10 w-7 h-7 rounded-full flex items-center justify-center text-xs"
// 				style={{
// 					scale,
// 					opacity,
// 					backgroundColor: accent + '22',
// 					border:     `2px solid ${accent}`,
// 					boxShadow:  `0 0 0 6px ${accent}18`,
// 				}}
// 			>
// 				{exp.icon}
// 			</motion.div>

// 			<motion.article
// 				className="rounded-2xl p-5 ml-12 shadow-lg w-[90vw] max-w-sm backdrop-blur-md"
// 				style={{
// 					opacity,
// 					x,
// 					background: `linear-gradient(135deg, ${accent}10, #0a0f1ecc)`,
// 					border:     `1px solid ${accent}28`,
// 				}}
// 				transition={{ duration: 0.4, delay: idx * 0.1 }}
// 			>
// 				<span
// 					className="inline-block mb-1.5 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
// 					style={{ backgroundColor: accent + '18', color: accent }}
// 				>
// 					{typeLabels[exp.type]}
// 				</span>
// 				<h3 className="text-sm font-bold text-white leading-snug mb-0.5 break-words">
// 					{exp.role}
// 				</h3>
// 				<p className="text-xs font-semibold mb-1 break-words" style={{ color: accent }}>
// 					{exp.company}
// 				</p>
// 				<div className="flex flex-wrap items-center gap-x-2 mb-2">
// 					<span className="text-xs text-gray-500">{exp.duration}</span>
// 					{exp.cgpa && (
// 						<span className="text-xs font-semibold" style={{ color: accent }}>
// 							· {exp.cgpa}
// 						</span>
// 					)}
// 				</div>
// 				<p className="text-gray-400 text-xs leading-relaxed mb-2 break-words">
// 					{exp.description}
// 				</p>
// 				<div className="flex flex-wrap gap-1">
// 					{exp.tags.map(t => (
// 						<span
// 							key={t}
// 							className="text-[9px] px-1.5 py-0.5 rounded-full"
// 							style={{
// 								backgroundColor: accent + '15',
// 								color:           accent,
// 								border:          `1px solid ${accent}28`,
// 							}}
// 						>
// 							{t}
// 						</span>
// 					))}
// 				</div>
// 			</motion.article>
// 		</div>
// 	);
// }

// // ─── Main ─────────────────────────────────────────────────────────────────────
// const Experience = () => {
// 	const sceneRef = useRef(null);
// 	const [isMobile, setIsMobile] = useState(false);

// 	useEffect(() => {
// 		const check = () => setIsMobile(window.innerWidth <= 768);
// 		check();
// 		window.addEventListener('resize', check);
// 		return () => window.removeEventListener('resize', check);
// 	}, []);

// 	// Identical to original — controls how much scroll space each item gets
// 	const SCENE_HEIGHT_VH = isMobile ? 160 * experiences.length : 120 * experiences.length;

// 	const { scrollYProgress } = useScroll({
// 		target: sceneRef,
// 		offset: ['start start', 'end end'],
// 	});

// 	const thresholds = useMemo(
// 		() => experiences.map((_, i) => (i + 1) / experiences.length),
// 		[]
// 	);

// 	const lineSize = useTransform(scrollYProgress, v => `${v * 100}%`);

// 	// Fade the header out as the 3rd card starts emerging (scroll 0.4 → 0.6)
// 	// thresholds[1] = 0.5 (end of 2nd item), so 3rd starts at 0.5
// 	// We begin fading slightly before that so it feels natural
// 	const headerOpacity = useTransform(scrollYProgress, [0.35, 0.55], [1, 0]);

// 	return (
// 		// ── NO overflow-hidden on the section ──
// 		// Cards use absolute positioning and must be allowed to render
// 		// outside the timeline-line container bounds. overflow-hidden kills them.
// 		<section id="experience" className='relative bg-black text-white'>

// 			{/* Ambient glows — pointer-events-none so they don't block scroll */}
// 			<div className="absolute inset-0 pointer-events-none overflow-hidden">
// 				<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1cd8d2] opacity-[0.04] blur-[140px]" />
// 				<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00bf8f] opacity-[0.04] blur-[140px]" />
// 			</div>

// 			{/* ── Scroll scene — same as original ── */}
// 			<div
// 				ref={sceneRef}
// 				style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: '130vh' }}
// 				className='relative'
// 			>
// 				{/* sticky container — NO overflow-hidden so absolute cards show freely */}
// 				<div className='sticky top-0 h-screen flex flex-col'>

// 					{/* Header — fades out as 3rd card starts emerging */}
// 					<motion.div
// 						className="shrink-0 pt-10 pb-2 text-center"
// 						style={{ opacity: headerOpacity }}
// 					>
// 						<span className="inline-block mb-2 text-xs font-bold tracking-widest uppercase text-emerald-400">
// 							Student Journey
// 						</span>
// 						<h2 className='text-4xl sm:text-5xl font-extrabold text-white'>
// 							My{' '}
// 							<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]'>
// 								Timeline
// 							</span>
// 						</h2>
// 						<p className="mt-1 text-sm text-gray-500">Education · Achievements · Projects</p>
// 					</motion.div>

// 					{/* ── Content area ──
// 					    flex-1 + flex + justify-center + items-center
// 					    → vertically centers the timeline line + dots in remaining space
// 					    → this is what makes absolute cards offset correctly above/below
// 					    ── NO overflow-hidden ── */}
// 					<div className='flex-1 flex justify-center items-center px-6 pb-25'>

// 						{/* ── Desktop ── */}
// 						{!isMobile && (
// 							<div className='relative w-full max-w-6xl'>

// 								{/* Progress track */}
// 								<div className='relative h-[4px] bg-white/10 rounded-full'>
// 									<motion.div
// 										className='absolute left-0 top-0 h-[4px] rounded-full origin-left'
// 										style={{
// 											width:      lineSize,
// 											background: 'linear-gradient(90deg, #1cd8d2, #00bf8f, #f59e0b)',
// 											boxShadow:  '0 0 12px #1cd8d255',
// 										}}
// 									/>
// 								</div>

// 								{/* ── Same structure as original commented code ──
// 								    relative flex justify-between mt-0
// 								    Each ExperienceItem is flex-1 and positions its card absolutely */}
// 								<div className='relative flex justify-between mt-0'>
// 									{experiences.map((exp, idx) => (
// 										<ExperienceItem
// 											key={idx}
// 											exp={exp}
// 											idx={idx}
// 											start={idx === 0 ? 0 : thresholds[idx - 1]}
// 											end={thresholds[idx]}
// 											scrollYProgress={scrollYProgress}
// 											layout="desktop"
// 										/>
// 									))}
// 								</div>

// 								{/* Year labels */}
// 								<div className='flex justify-between mt-3'>
// 									{experiences.map((exp, idx) => (
// 										<div key={idx} className="flex flex-1 justify-center">
// 											<span className="text-[10px] text-gray-600">
// 												{exp.duration.split(' ')[0]}
// 											</span>
// 										</div>
// 									))}
// 								</div>
// 							</div>
// 						)}

// 						{/* ── Mobile ── */}
// 						{isMobile && (
// 							<div className='relative w-full max-w-md'>
// 								{/* Vertical track */}
// 								<div className='absolute left-0 top-0 bottom-0 w-[4px] bg-white/10 rounded-full'>
// 									<motion.div
// 										className='absolute left-0 top-0 w-[4px] rounded-full origin-top'
// 										style={{
// 											height:     lineSize,
// 											background: 'linear-gradient(180deg, #1cd8d2, #00bf8f, #f59e0b)',
// 											boxShadow:  '0 0 10px #1cd8d255',
// 										}}
// 									/>
// 								</div>

// 								<div className='relative flex flex-col gap-10 mt-2 pb-28'>
// 									{experiences.map((exp, idx) => (
// 										<ExperienceItem
// 											key={idx}
// 											exp={exp}
// 											idx={idx}
// 											start={idx === 0 ? 0 : thresholds[idx - 1]}
// 											end={thresholds[idx]}
// 											scrollYProgress={scrollYProgress}
// 											layout="mobile"
// 										/>
// 									))}
// 								</div>
// 							</div>
// 						)}
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Experience;





















import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useMemo } from 'react';
import { useRef, useState, useEffect } from 'react';

const experiences = [
	{
		type: "education",
		role: "B.Tech — Computer Science & Engineering",
		company: "MNNIT Allahabad",
		duration: "2023 – 2027",
		cgpa: "8.03 CGPA",
		description: "Pursuing CSE at one of India's premier NITs. Coursework includes DSA, OOP, OS, DBMS, and Computer Networks. Actively building production-grade full-stack systems alongside academics.",
		icon: "🎓",
		accentColor: "#1cd8d2",
		tags: ["DSA", "OOP", "OS", "DBMS", "Networks"],
	},
	{
		type: "achievement",
		role: "LeetCode Knight · Rating 1950",
		company: "Competitive Programming",
		duration: "2024 – Present",
		cgpa: "Global Rank 989",
		description: "Achieved Knight tier on LeetCode with a peak rating of 1950. Secured a global rank of 989 in LeetCode Biweekly Contest 157. Reached the penultimate round of Webster — MNNIT's annual web development competition (2024).",
		icon: "🏆",
		accentColor: "#f59e0b",
		tags: ["LeetCode", "Problem Solving", "Webster 2024", "Algorithms"],
	},
	{
		type: "project",
		role: "Full-Stack Developer — NexusIDE",
		company: "Personal Project",
		duration: "2025 - 2026",
		cgpa: "nexuside.in",
		description: "Built a real-time collaborative cloud IDE with agentic AI (Gemini), CRDT sync via Yjs/Liveblocks, containerised RCE via Docker, and a full AI proctoring engine using TensorFlow.js and MediaPipe.",
		icon: "🚀",
		accentColor: "#1cd8d2",
		tags: ["Next.js", "WebSockets", "Docker", "Gemini AI", "AWS"],
	},
	{
		type: "project",
		role: "Full-Stack Developer — SmartAttend",
		company: "Personal Project",
		duration: "2026 – Present",
		cgpa: "smartattend.co.in",
		description: "Engineered a cross-platform biometric attendance ecosystem — 3 web portals + 2 React Native apps — with InsightFace facial recognition, 100% liveness detection, and AWS production infrastructure.",
		icon: "🎯",
		accentColor: "#00bf8f",
		tags: ["React Native", "InsightFace", "Python", "AWS", "Redis"],
	},
];

const typeLabels = {
	education: "Education",
	achievement: "Achievement",
	project: "Project",
};

// ─── ExperienceItem ───────────────────────────────────────────────────────────
// Hooks are at the top level of this component (not inside a .map), which
// satisfies React's Rules of Hooks.
function ExperienceItem({ exp, idx, start, end, scrollYProgress, layout }) {
	const scale = useTransform(scrollYProgress, [start, end], [0, 1]);
	const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
	// Even cards animate from above, odd from below — matches the visual direction
	const y = useTransform(scrollYProgress, [start, end], [idx % 2 === 0 ? 30 : -30, 0]);
	const x = useTransform(scrollYProgress, [start, end], [-24, 0]);

	const accent = exp.accentColor;

	if (layout === 'desktop') {
		return (
			// ── IDENTICAL structure to the original working commented code ──
			// relative + flex-1 + justify-center + items-center
			//   → the dot sits exactly ON the horizontal line
			//   → cards use absolute bottom-N / top-N from that center
			//   → NO overflow-hidden here so cards freely extend above/below
			<div className='relative flex flex-1 justify-center items-center min-w-0'>

				{/* Dot — centered on the line by parent items-center */}
				<motion.div
					className="z-10 w-7 h-7 rounded-full flex items-center justify-center text-sm"
					style={{
						scale,
						opacity,
						backgroundColor: accent + '22',
						border: `2px solid ${accent}`,
						boxShadow: `0 0 0 6px ${accent}18, 0 0 16px ${accent}44`,
					}}
				>
					{exp.icon}
				</motion.div>

				{/* Connector stub */}
				<motion.div
					className={`absolute ${idx % 2 === 0 ? '-top-10' : '-bottom-10'} w-[2px]`}
					style={{ height: 40, opacity, backgroundColor: accent + '55' }}
				/>

				{/* Card — absolute above (even) or below (odd) the dot */}
				<motion.article
					className={`absolute ${idx % 2 === 0 ? 'bottom-14' : 'top-14'}
						rounded-2xl p-3 backdrop-blur-md`}
					style={{
						opacity,
						y,
						width: '280px',
						background: `linear-gradient(135deg, ${accent}10, #0a0f1ecc)`,
						border: `1px solid ${accent}30`,
						boxShadow: `0 8px 32px ${accent}1a`,
					}}
					transition={{ duration: 0.4, delay: idx * 0.1 }}
				>
					<span
						className="inline-block mb-2 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
						style={{ backgroundColor: accent + '18', color: accent }}
					>
						{typeLabels[exp.type]}
					</span>

					<h3 className="text-sm font-bold text-white leading-snug mb-0.5 break-words">
						{exp.role}
					</h3>
					<p className="text-xs font-semibold mb-1" style={{ color: accent }}>
						{exp.company}
					</p>
					<div className="flex flex-wrap items-center gap-x-2 mb-2">
						<span className="text-[11px] text-gray-500">{exp.duration}</span>
						{exp.cgpa && (
							<span className="text-[11px] font-semibold" style={{ color: accent }}>
								· {exp.cgpa}
							</span>
						)}
					</div>
					<p className="text-gray-400 text-[11px] leading-relaxed mb-3 break-words">
						{exp.description}
					</p>
					<div className="flex flex-wrap gap-1">
						{exp.tags.map(t => (
							<span
								key={t}
								className="text-[9px] px-1.5 py-0.5 rounded-full"
								style={{
									backgroundColor: accent + '15',
									color: accent,
									border: `1px solid ${accent}28`,
								}}
							>
								{t}
							</span>
						))}
					</div>
				</motion.article>
			</div>
		);
	}

	// ── Mobile ────────────────────────────────────────────────────────────────
	return (
		<div className='relative flex items-center'>
			<motion.div
				className="absolute -left-[14px] top-3 z-10 w-7 h-7 rounded-full flex items-center justify-center text-xs"
				style={{
					scale,
					opacity,
					backgroundColor: accent + '22',
					border: `2px solid ${accent}`,
					boxShadow: `0 0 0 6px ${accent}18`,
				}}
			>
				{exp.icon}
			</motion.div>

			<motion.article
				className="rounded-2xl p-5 ml-12 shadow-lg w-[90vw] max-w-sm backdrop-blur-md"
				style={{
					opacity,
					x,
					background: `linear-gradient(135deg, ${accent}10, #0a0f1ecc)`,
					border: `1px solid ${accent}28`,
				}}
				transition={{ duration: 0.4, delay: idx * 0.1 }}
			>
				<span
					className="inline-block mb-1.5 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
					style={{ backgroundColor: accent + '18', color: accent }}
				>
					{typeLabels[exp.type]}
				</span>
				<h3 className="text-sm font-bold text-white leading-snug mb-0.5 break-words">
					{exp.role}
				</h3>
				<p className="text-xs font-semibold mb-1 break-words" style={{ color: accent }}>
					{exp.company}
				</p>
				<div className="flex flex-wrap items-center gap-x-2 mb-2">
					<span className="text-xs text-gray-500">{exp.duration}</span>
					{exp.cgpa && (
						<span className="text-xs font-semibold" style={{ color: accent }}>
							· {exp.cgpa}
						</span>
					)}
				</div>
				<p className="text-gray-400 text-xs leading-relaxed mb-2 break-words">
					{exp.description}
				</p>
				<div className="flex flex-wrap gap-1">
					{exp.tags.map(t => (
						<span
							key={t}
							className="text-[9px] px-1.5 py-0.5 rounded-full"
							style={{
								backgroundColor: accent + '15',
								color: accent,
								border: `1px solid ${accent}28`,
							}}
						>
							{t}
						</span>
					))}
				</div>
			</motion.article>
		</div>
	);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
const Experience = () => {
	const sceneRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth <= 768);
		check();
		window.addEventListener('resize', check);
		return () => window.removeEventListener('resize', check);
	}, []);

	// Identical to original — controls how much scroll space each item gets
	const SCENE_HEIGHT_VH = isMobile ? 160 * experiences.length : 130 * experiences.length;

	const { scrollYProgress } = useScroll({
		target: sceneRef,
		offset: ['start start', 'end end'],
	});

	const thresholds = useMemo(
		() => experiences.map((_, i) => (i + 1) / experiences.length),
		[]
	);

	const lineSize = useTransform(scrollYProgress, v => `${v * 100}%`);

// Fade the header out as the 3rd card starts emerging(scroll 0.4 → 0.6)
// 	thresholds[1] = 0.5(end of 2nd item), so 3rd starts at 0.5
// 	We begin fading slightly before that so it feels natural
	const headerOpacity = useTransform(scrollYProgress, [0.35, 0.55], [1, 0]);

	return (
		// ── NO overflow-hidden on the section ──
		// Cards use absolute positioning and must be allowed to render
		// outside the timeline-line container bounds. overflow-hidden kills them.
		<section id="experience" className='relative bg-black text-white'>

			{/* Ambient glows — pointer-events-none so they don't block scroll */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1cd8d2] opacity-[0.04] blur-[140px]" />
				<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00bf8f] opacity-[0.04] blur-[140px]" />
			</div>

			{/* ── Scroll scene — same as original ── */}
			<div
				ref={sceneRef}
				style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: '130vh' }}
				className='relative'
			>
				{/* sticky container — NO overflow-hidden so absolute cards show freely */}
				<div className='sticky top-0 h-screen flex flex-col'>

					{/* Header — fades out as 3rd card starts emerging */}
					<motion.div
						className="shrink-0 pt-10 pb-2 text-center"
						style={{ opacity: headerOpacity }}
					>
						<span className="inline-block mb-2 text-xs font-bold tracking-widest uppercase text-emerald-400">
							Student Journey
						</span>
						<h2 className='text-4xl sm:text-5xl font-extrabold text-white'>
							My{' '}
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]'>
								Timeline
							</span>
						</h2>
						<p className="mt-1 text-sm text-gray-500">Education · Achievements · Projects</p>
					</motion.div>

					{/* ── Content area ──
					    flex-1 + flex + justify-center + items-center
					    → vertically centers the timeline line + dots in remaining space
					    → this is what makes absolute cards offset correctly above/below
					    ── NO overflow-hidden ── */}
					<div className='flex-1 flex justify-center items-center px-6 pb-25'>

						{/* ── Desktop ── */}
						{!isMobile && (
							<div className='relative w-full max-w-6xl'>

								{/* Progress track */}
								<div className='relative h-[4px] bg-white/10 rounded-full'>
									<motion.div
										className='absolute left-0 top-0 h-[4px] rounded-full origin-left'
										style={{
											width: lineSize,
											background: 'linear-gradient(90deg, #1cd8d2, #00bf8f, #f59e0b)',
											boxShadow: '0 0 12px #1cd8d255',
										}}
									/>
								</div>

								{/* ── Same structure as original commented code ──
								    relative flex justify-between mt-0
								    Each ExperienceItem is flex-1 and positions its card absolutely */}
								<div className='relative flex justify-between mt-0'>
									{experiences.map((exp, idx) => (
										<ExperienceItem
											key={idx}
											exp={exp}
											idx={idx}
											start={idx === 0 ? 0 : thresholds[idx - 1]}
											end={thresholds[idx]}
											scrollYProgress={scrollYProgress}
											layout="desktop"
										/>
									))}
								</div>

								{/* Year labels */}
								<div className='flex justify-between mt-3'>
									{experiences.map((exp, idx) => (
										<div key={idx} className="flex flex-1 justify-center">
											<span className="text-[10px] text-gray-600">
												{exp.duration.split(' ')[0]}
											</span>
										</div>
									))}
								</div>
							</div>
						)}

						{/* ── Mobile ── */}
						{isMobile && (
							<div className='relative w-full max-w-md'>
								{/* Vertical track */}
								<div className='absolute left-0 top-0 bottom-0 w-[4px] bg-white/10 rounded-full'>
									<motion.div
										className='absolute left-0 top-0 w-[4px] rounded-full origin-top'
										style={{
											height: lineSize,
											background: 'linear-gradient(180deg, #1cd8d2, #00bf8f, #f59e0b)',
											boxShadow: '0 0 10px #1cd8d255',
										}}
									/>
								</div>

								<div className='relative flex flex-col gap-10 mt-6 pb-28'>
									{experiences.map((exp, idx) => (
										<ExperienceItem
											key={idx}
											exp={exp}
											idx={idx}
											start={idx === 0 ? 0 : thresholds[idx - 1]}
											end={thresholds[idx]}
											scrollYProgress={scrollYProgress}
											layout="mobile"
										/>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;