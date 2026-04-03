import React from 'react';
import './Skills.css';

interface SkillGroup {
	category: string;
	icon: string;
	color: 'green' | 'gold' | 'blue';
	items: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
	{
		category: 'Financial Engineering',
		icon: '📈',
		color: 'green',
		items: [
			'Portfolio Optimization',
			'Algorithmic Trading',
			'Risk Metrics',
			'Covariance Denoising',
		],
	},
	{
		category: 'Development',
		icon: '⚙️',
		color: 'blue',
		items: ['Python', 'C++', 'TypeScript', 'Rust'],
	},
	{
		category: 'Physics & Simulation',
		icon: '🔭',
		color: 'gold',
		items: [
			'Fluid Dynamics',
			'F1 Aerodynamics Models',
			'N-Body Simulation',
			'Monte Carlo Methods',
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
									<span
										key={item}
										className="skill-tag"
										style={{
											color: colorMap[group.color],
											borderColor: colorMap[group.color] + '33',
											background: colorMap[group.color] + '0d',
										}}
									>
										{item}
									</span>
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
