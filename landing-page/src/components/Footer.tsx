import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
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
					Built with React + TypeScript · {new Date().getFullYear()}
				</p>
				<div className="footer__status">
					<span className="footer__status-dot" />
					All systems nominal
				</div>
			</div>
		</footer>
	);
};

export default Footer;
