import React from 'react';
import './About.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

const About: React.FC = () => {
	const { language } = useLanguage();
	const t = translations[language];

	return (
		<section id="about" className="about section">
			<div className="container">
				<div className="section-label">{t.aboutLabel}</div>
				<div className="about__inner">
					<div className="about__avatar">
						<div className="about__avatar-ring" />
						<div className="about__avatar-core">
							<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
								<path
									d="M12 44L24 20l8 16 6-10 10 18"
									stroke="#00d27a"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<circle
									cx="30"
									cy="30"
									r="28"
									stroke="rgba(0,210,122,0.3)"
									strokeWidth="1"
								/>
							</svg>
						</div>
					</div>

					<div className="about__text">
						<h2 className="about__name">
							{t.aboutGreeting} <span className="accent-green">Lelo</span> 👋
						</h2>
						<p className="about__bio">{t.aboutBio1}</p>
						<p className="about__bio">{t.aboutBio2}</p>
						<p className="about__bio">{t.aboutBio3}</p>

						<div className="about__tags">
							{[
								'Quant Finance',
								'Algorithmic Trading',
								'AI',
								'C++',
								'Python',
								'Physics Simulation',
								'F1 Telemetry',
							].map((tag) => (
								<span key={tag} className="tag">
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
