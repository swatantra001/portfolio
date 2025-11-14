import React, { useEffect, useRef, useState } from 'react'
import OverlayMenu from './OverlayMenu'
import Logo from "../assets/Logo.png"
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [visible, setVisible] = useState(true);
	const [forceVisible, setForceVisible] = useState(false)

	const lastScrollY = useRef(0);
	const timerId = useRef(null);

	useEffect(() => {
		const homeSection = document.querySelector("#home");
		if (!homeSection) return;

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setForceVisible(true);
				setVisible(true);
			} else {
				setForceVisible(false);
			}
		}, { threshold: 0.1 });

		observer.observe(homeSection);

		return () => {
			observer.unobserve(homeSection);
		};
	}, []);

	// Scroll handler
	useEffect(() => {
		const handleScroll = () => {
			if (forceVisible) {
				setVisible(true);
				return;
			}

			const currentScrollY = window.scrollY;

			// Scrolling down
			if (currentScrollY > lastScrollY.current) {
				setVisible(false);
			}
			// Scrolling up
			else {
				setVisible(true);

				// Clear any existing timeout and set new one to hide after delay
				if (timerId.current) clearTimeout(timerId.current);

				timerId.current = setTimeout(() => {
					// Only hide if user hasn't continued scrolling up
					if (!forceVisible) {
						setVisible(false);
					}
				}, 1000); // Increased to 2 seconds for better UX
			}

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (timerId.current) clearTimeout(timerId.current);
		};
	}, [forceVisible]);

	return (
		<>
			<nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
				<div className='flex items-center space-x-2'>
					<img src={Logo} className='w-8 h-8' />
					<div className='text-2xl font-bold text-white hidden sm:block'>Swatantra</div>
				</div>
				<div className='block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2'>
					<button onClick={() => setMenuOpen(true)} className='text-white text-3xl focus:outline-none' aria-label='open menu'>
						<FiMenu />
					</button>
				</div>
				<div className='hidden lg:block'>
					<a href='#contact' className='bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300'>Reach out</a>
				</div>
			</nav>
			<OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
		</>
	)
}

export default Navbar
