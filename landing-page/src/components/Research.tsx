import React from 'react';
import './Research.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

const Research: React.FC = () => {
	const { language } = useLanguage();
	const t = translations[language];

	return (
		<section id="research" className="research section">
			<div className="container">
				<div className="section-label">{t.researchLabel}</div>
				<h2 className="section-title">{t.researchTitle}</h2>
				<p className="section-subtitle">{t.researchSub}</p>

				<div className="research__entries">
					<article className="research__entry">
						<div className="research__entry-head">
							<h3 className="research__entry-title">
								<a href="https://github.com/Lelozitos/IdleFinance" target="_blank" rel="noreferrer">
									IdleFinance
								</a>
							</h3>
							<span className="research__entry-tag">{t.researchIdleTag}</span>
						</div>
						<p className="research__entry-text">{t.researchIdleText}</p>
						<p className="research__entry-meta">{t.researchIdleMeta}</p>
					</article>

					<article className="research__entry">
						<div className="research__entry-head">
							<h3 className="research__entry-title">
								<a href="https://github.com/Lelozitos/quant_studies" target="_blank" rel="noreferrer">
									quant_studies
								</a>
							</h3>
							<span className="research__entry-tag">{t.researchQuantTag}</span>
						</div>
						<p className="research__entry-text">{t.researchQuantText}</p>
						<p className="research__entry-meta">{t.researchQuantMeta}</p>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Research;
