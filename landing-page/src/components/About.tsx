import React from 'react';
import './About.css';

const About: React.FC = () => {
	return (
		<section id="about" className="about section">
			<div className="container">
				<div className="section-label">{'// about me'}</div>
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
							Hey, I'm <span className="accent-green">Lelo</span> 👋
						</h2>
						<p className="about__bio">
							I'm a software developer with a deep passion for the intersection
							of computation and finance. I build tools that turn market noise
							into signal — quantitative models, portfolio optimizers, risk
							engines, and algorithmic strategies.
						</p>
						<p className="about__bio">
							When I'm not knee-deep in order books and covariance matrices,
							you'll find me analyzing lap telemetry from a Formula 1 race or
							running physics simulations just to watch particles behave in
							interesting ways.
						</p>
						<p className="about__bio">
							I believe the best software is built at the edges — where pure
							math meets real-world constraints, where microseconds matter, and
							where elegance pays off.
						</p>

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
