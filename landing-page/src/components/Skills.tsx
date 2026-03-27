import React from 'react';
import './Skills.css';

interface SkillGroup {
	category: string;
	icon: string;
	color: 'green' | 'gold' | 'blue';
	items: { name: string; level: number }[];
}

const SKILL_GROUPS: SkillGroup[] = [
	{
		category: 'Financial Engineering',
		icon: '📈',
		color: 'green',
		items: [
			{ name: 'Portfolio Optimization', level: 95 },
			{ name: 'Algorithmic Trading', level: 88 },
			{ name: 'Risk Metrics (VaR, CVaR)', level: 90 },
			{ name: 'Efficient Frontier', level: 92 },
			{ name: 'Covariance Denoising', level: 85 },
		],
	},
	{
		category: 'Development',
		icon: '⚙️',
		color: 'blue',
		items: [
			{ name: 'Python / NumPy / Pandas', level: 96 },
			{ name: 'Rust', level: 72 },
			{ name: 'TypeScript / React', level: 88 },
			{ name: 'C++', level: 70 },
			{ name: 'Data Structures & Algorithms', level: 90 },
		],
	},
	{
		category: 'Physics & Simulation',
		icon: '🔭',
		color: 'gold',
		items: [
			{ name: 'N-Body Simulation', level: 80 },
			{ name: 'Fluid Dynamics (SPH)', level: 68 },
			{ name: 'F1 Aerodynamics Models', level: 75 },
			{ name: 'Monte Carlo Methods', level: 88 },
			{ name: 'Numerical Integration', level: 85 },
		],
	},
];

const colorMap = {
	green: 'var(--accent-green)',
	gold: 'var(--accent-gold)',
	blue: 'var(--accent-blue)',
};

const Skills: React.FC = () => {
	return (
		<section id="skills" className="skills section">
			<div className="container">
				<div className="section-label">{'// skills'}</div>
				<h2 className="section-title">What I work with</h2>
				<p className="section-subtitle">
					A toolkit built around performance, precision, and mathematical rigor.
				</p>

				<div className="skills__grid">
					{SKILL_GROUPS.map((group) => (
						<div key={group.category} className="skill-card">
							<div className="skill-card__header">
								<span className="skill-card__icon">{group.icon}</span>
								<h3 className="skill-card__title">{group.category}</h3>
							</div>
							<div className="skill-card__items">
								{group.items.map((item) => (
									<div key={item.name} className="skill-item">
										<div className="skill-item__top">
											<span className="skill-item__name">{item.name}</span>
											<span
												className="skill-item__pct"
												style={{ color: colorMap[group.color] }}
											>
												{item.level}%
											</span>
										</div>
										<div className="skill-item__track">
											<div
												className="skill-item__bar"
												style={{
													width: `${item.level}%`,
													background: colorMap[group.color],
												}}
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
