import React from 'react';
import './Hero.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

const Hero: React.FC = () => {
	const { language } = useLanguage();
	const t = translations[language];

	return (
		<section id="hero" className="hero">
			<div className="hero__content">
				<p className="hero__eyebrow">{t.heroEyebrow}</p>

				<h1 className="hero__name">Leandro Fabre</h1>

				<p className="hero__lede">{t.heroLede}</p>

				<p className="hero__now">{t.heroNow}</p>

				<nav className="hero__nav" aria-label="Section links">
					<a href="#about">{t.navAbout}</a>
					<span className="hero__nav-sep">·</span>
					<a href="#research">{t.navResearch}</a>
					<span className="hero__nav-sep">·</span>
					<a href="#projects">{t.navProjects}</a>
					<span className="hero__nav-sep">·</span>
					<a href="#contact">{t.navContact}</a>
				</nav>
			</div>
		</section>
	);
};

export default Hero;
