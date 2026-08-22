import React from 'react';
import './About.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

const About: React.FC = () => {
	const { language } = useLanguage();
	const t = translations[language];

	const items = [
		{ label: t.aboutListQuant, value: t.aboutListQuantItems },
		{ label: t.aboutListCode, value: t.aboutListCodeItems },
		{ label: t.aboutListSim, value: t.aboutListSimItems },
	];

	return (
		<section id="about" className="about section">
			<div className="container">
				<div className="section-label">{t.aboutLabel}</div>
				<h2 className="about__name">{t.aboutGreeting}</h2>

				<div className="about__text">
					<p className="about__bio">{t.aboutBio1}</p>
					<p className="about__bio">{t.aboutBio2}</p>
					<p className="about__bio">{t.aboutBio3}</p>
				</div>

				<div className="about__list">
					<p className="about__list-label">{t.aboutListLabel}</p>
					<dl className="about__dl">
						{items.map((item) => (
							<div className="about__dl-row" key={item.label}>
								<dt>{item.label}</dt>
								<dd>{item.value}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
};

export default About;
