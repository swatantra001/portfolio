// import React, { useEffect, useRef, useState } from 'react'
// import OverlayMenu from './OverlayMenu'
// import Logo from "../assets/Logo.png"
// import { FiMenu } from "react-icons/fi";
// const Navbar = () => {
// 	const [menuOpen, setMenuOpen] = useState(false);
// 	const [visible, setVisible] = useState(true);
// 	const [forceVisible, setForceVisible] = useState(false)

// 	const lastScrollY = useRef(0);
// 	const timerId = useRef(null);

// 	useEffect(() => {
// 		const homeSection = document.querySelector("#home");
// 		if (!homeSection) return;

// 		const observer = new IntersectionObserver(([entry]) => {
// 			if (entry.isIntersecting) {
// 				setForceVisible(true);
// 				setVisible(true);
// 			} else {
// 				setForceVisible(false);
// 			}
// 		}, { threshold: 0.1 });

// 		observer.observe(homeSection);

// 		return () => {
// 			observer.unobserve(homeSection);
// 		};
// 	}, []);

// 	// Scroll handler
// 	useEffect(() => {
// 		const handleScroll = () => {
// 			if (forceVisible) {
// 				setVisible(true);
// 				return;
// 			}

// 			const currentScrollY = window.scrollY;

// 			// Scrolling down
// 			if (currentScrollY > lastScrollY.current) {
// 				setVisible(false);
// 			}
// 			// Scrolling up
// 			else {
// 				setVisible(true);

// 				// Clear any existing timeout and set new one to hide after delay
// 				if (timerId.current) clearTimeout(timerId.current);

// 				timerId.current = setTimeout(() => {
// 					// Only hide if user hasn't continued scrolling up
// 					if (!forceVisible) {
// 						setVisible(false);
// 					}
// 				}, 1000); // Increased to 2 seconds for better UX
// 			}

// 			lastScrollY.current = currentScrollY;
// 		};

// 		window.addEventListener("scroll", handleScroll, { passive: true });

// 		return () => {
// 			window.removeEventListener("scroll", handleScroll);
// 			if (timerId.current) clearTimeout(timerId.current);
// 		};
// 	}, [forceVisible]);

// 	return (
// 		<>
// 			<nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
// 				<div className='flex items-center space-x-2'>
// 					<img src={Logo} className='w-8 h-8' />
// 					<div className='text-2xl font-bold text-white hidden sm:block'>Swatantra</div>
// 				</div>
// 				<div className='block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2'>
// 					<button onClick={() => setMenuOpen(true)} className='text-white text-3xl focus:outline-none' aria-label='open menu'>
// 						<FiMenu />
// 					</button>
// 				</div>
// 				<div className='hidden lg:block'>
// 					<a href='#contact' className='bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300'>Reach out</a>
// 				</div>
// 			</nav>
// 			<OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
// 		</>
// 	)
// }

// export default Navbar
















import React, { useEffect, useRef, useState } from 'react'
import OverlayMenu from './OverlayMenu'
import { FiMenu } from 'react-icons/fi'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

const navLinks = ['About', 'Skills', 'Projects', 'Experience']

// ── Inline SVG S logo — no import needed, fully controlled ──────────────────
const SLogo = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    style={{ overflow: 'visible' }}
  >
    <defs>
      <filter id="nb-glow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="halo" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="8"  result="bloom" />
        <feMerge>
          <feMergeNode in="halo" />
          <feMergeNode in="bloom" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="nb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#1cd8d2" />
        <stop offset="50%"  stopColor="#00bf8f" />
        <stop offset="100%" stopColor="#1cd8d2" />
      </linearGradient>
    </defs>

    {/* glow layer */}
    <g filter="url(#nb-glow)" opacity="0.7">
      <path
        d="M 352,108 C 320,78 258,64 205,72 C 152,80 112,108 104,150 C 94,196 120,232 165,254 L 240,282 C 300,304 338,332 335,372 C 332,412 292,438 245,444 C 198,450 152,438 108,416"
        fill="none" stroke="url(#nb-grad)" strokeWidth="30"
        strokeLinecap="butt" strokeLinejoin="round"
      />
      <path
        d="M 326,130 C 300,106 247,95 202,102 C 158,109 126,132 120,168 C 112,207 135,238 174,258 L 242,284 C 296,305 328,332 325,366 C 322,400 286,423 244,428 C 202,433 160,422 122,402"
        fill="none" stroke="url(#nb-grad)" strokeWidth="13"
        strokeLinecap="butt" strokeLinejoin="round"
      />
      <line x1="352" y1="108" x2="326" y2="130" stroke="url(#nb-grad)" strokeWidth="13" strokeLinecap="butt" />
      <line x1="108" y1="416" x2="122" y2="402" stroke="url(#nb-grad)" strokeWidth="13" strokeLinecap="butt" />
    </g>

    {/* crisp white layer */}
    <path
      d="M 352,108 C 320,78 258,64 205,72 C 152,80 112,108 104,150 C 94,196 120,232 165,254 L 240,282 C 300,304 338,332 335,372 C 332,412 292,438 245,444 C 198,450 152,438 108,416"
      fill="none" stroke="white" strokeWidth="30"
      strokeLinecap="butt" strokeLinejoin="round"
    />
    <path
      d="M 326,130 C 300,106 247,95 202,102 C 158,109 126,132 120,168 C 112,207 135,238 174,258 L 242,284 C 296,305 328,332 325,366 C 322,400 286,423 244,428 C 202,433 160,422 122,402"
      fill="none" stroke="white" strokeWidth="13"
      strokeLinecap="butt" strokeLinejoin="round"
    />
    <line x1="352" y1="108" x2="326" y2="130" stroke="white" strokeWidth="13" strokeLinecap="butt" />
    <line x1="108" y1="416" x2="122" y2="402" stroke="white" strokeWidth="13" strokeLinecap="butt" />
  </svg>
)

// ── Animated brand mark ──────────────────────────────────────────────────────
const BrandLogo = () => {
  const [hovered, setHovered] = useState(false)

  // Magnetic pull on hover
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 300, damping: 25 })
  const sy = useSpring(my, { stiffness: 300, damping: 25 })

  const handleMove = (e) => {
    if (!hovered) return
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width  / 2
    const cy = rect.top  + rect.height / 2
    mx.set((e.clientX - cx) * 0.25)
    my.set((e.clientY - cy) * 0.25)
  }
  const handleLeave = () => {
    setHovered(false)
    mx.set(0)
    my.set(0)
  }

  return (
    <a
      href="#home"
      className="flex items-center gap-2 select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
      style={{ textDecoration: 'none' }}
    >
      {/* ── Logo icon wrapper ── */}
      <motion.div
        style={{ x: sx, y: sy }}
        whileHover={{ scale: 1.12 }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        className="relative flex items-center justify-center"
      >
        {/* Rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full"
          style={{
            width: 44, height: 44,
            background: 'conic-gradient(from 0deg, #1cd8d2, #00bf8f, transparent, #1cd8d2)',
            padding: 1.5,
            borderRadius: '50%',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
            mask:        'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
          }}
        />

        {/* Pulsing backdrop glow */}
        <motion.div
          animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.18, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute rounded-full"
          style={{
            width: 38, height: 38,
            background: 'radial-gradient(circle, rgba(28,216,210,0.45) 0%, transparent 70%)',
          }}
        />

        {/* The actual S logo */}
        <div className="relative z-10 flex items-center justify-center" style={{ width: 38, height: 38 }}>
          <SLogo size={28} />
        </div>
      </motion.div>

      {/* ── "Swatantra" wordmark ── */}
      <motion.div
        style={{ x: sx, y: sy }}
        className="hidden sm:flex flex-col leading-none"
      >
        {/* Main name — letter-by-letter stagger on mount */}
        <div className="flex items-baseline overflow-hidden">
          {'Swatantra'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.04 * i + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ color: '#1cd8d2', y: -2 }}
              style={{
                display: 'inline-block',
                fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: '1.15rem',
                letterSpacing: '-0.02em',
                color: 'white',
                transition: 'color 0.2s, transform 0.2s',
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Subtitle underline — animated width on mount */}
        <div className="relative overflow-hidden" style={{ height: 12, marginTop: -1 }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-1 h-[1.5px] rounded-full"
            style={{ background: 'linear-gradient(90deg, #1cd8d2, #00bf8f, transparent)' }}
          />
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 0.4 }}
            style={{
              fontSize: '0.52rem',
              letterSpacing: '0.18em',
              color: '#1cd8d2',
              fontWeight: 600,
              textTransform: 'uppercase',
              fontFamily: 'monospace',
              paddingTop: 3,
              display: 'block',
            }}
          >
            portfolio
          </motion.span>
        </div>
      </motion.div>
    </a>
  )
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
const Navbar = () => {
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [visible,      setVisible]      = useState(true)
  const [forceVisible, setForceVisible] = useState(false)
  const [scrolled,     setScrolled]     = useState(false)

  const lastScrollY = useRef(0)
  const timerId    = useRef(null)

  useEffect(() => {
    const homeSection = document.querySelector('#home')
    if (!homeSection) return
    const io = new IntersectionObserver(([e]) => {
      setForceVisible(e.isIntersecting && e.intersectionRatio > 0.1)
      if (e.isIntersecting) setVisible(true)
    }, { threshold: 0.1 })
    io.observe(homeSection)
    return () => io.unobserve(homeSection)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const cur = window.scrollY
      setScrolled(cur > 40)
      if (forceVisible) { setVisible(true); lastScrollY.current = cur; return }
      if (cur > lastScrollY.current + 4) {
        setVisible(false)
      } else if (cur < lastScrollY.current - 2) {
        setVisible(true)
        if (timerId.current) clearTimeout(timerId.current)
        timerId.current = setTimeout(() => {
          if (!forceVisible) setVisible(false)
        }, 1800)
      }
      lastScrollY.current = cur
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (timerId.current) clearTimeout(timerId.current)
    }
  }, [forceVisible])

  return (
    <>
      <motion.nav
        animate={{ y: visible ? 0 : -90, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: scrolled
            ? 'rgba(0,0,0,0.72)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(28,216,210,0.08)' : 'none',
          transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        }}
      >
        {/* LEFT: brand */}
        <BrandLogo />

        {/* CENTER: nav links */}
        <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * i + 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg transition-colors duration-200 group"
            >
              {link}
              {/* animated underline */}
              <span
                className="absolute bottom-1 left-4 right-4 h-[1.5px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: 'linear-gradient(90deg, #1cd8d2, #00bf8f)' }}
              />
            </motion.a>
          ))}
        </div>

        {/* RIGHT: hamburger + CTA */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            className="text-white text-xl p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
          >
            <FiMenu />
          </motion.button>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-black"
            style={{
              background: 'linear-gradient(135deg, #1cd8d2 0%, #00bf8f 100%)',
              boxShadow: '0 0 20px rgba(28,216,210,0.35), 0 4px 12px rgba(0,0,0,0.3)',
              fontFamily: "'Syne', sans-serif",
              letterSpacing: '-0.01em',
            }}
          >
            Reach out
            {/* animated mail emoji */}
            <motion.span
              animate={{ rotate: [0, -12, 12, -8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 3 }}
              style={{ display: 'inline-block' }}
            >
              ✉️
            </motion.span>
          </motion.a>
        </div>
      </motion.nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Navbar