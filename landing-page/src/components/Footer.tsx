import React from 'react';
import './Footer.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

const Footer: React.FC = () => {
	const { language } = useLanguage();
	const t = translations[language];

	return (
		<footer className="footer">
			<div className="container footer__inner">
				<a href="#hero" className="footer__logo">
					<span
						className="navbar__logo-bracket"
						style={{ color: 'var(--accent-green)' }}
					>
						&lt;
					</span>
					<span>lelo</span>
					<span
						className="navbar__logo-bracket"
						style={{ color: 'var(--accent-green)' }}
					>
						/&gt;
					</span>
				</a>
				<p className="footer__copy">
					{t.footerBuilt} · {new Date().getFullYear()}
				</p>
				<div className="footer__status">
					<span className="footer__status-dot" />
					{t.footerStatus}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
