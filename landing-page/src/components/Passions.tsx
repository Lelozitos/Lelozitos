import React, { useEffect, useRef } from 'react';
import './Passions.css';

/* ── Mini F1-style speed chart ───────────────────────────────────────────*/
function drawSpeedTrace(canvas: HTMLCanvasElement) {
	const ctx = canvas.getContext('2d');
	if (!ctx) return;
	const W = canvas.offsetWidth;
	const H = canvas.offsetHeight;
	canvas.width = W * window.devicePixelRatio;
	canvas.height = H * window.devicePixelRatio;
	ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

	// Simplified speed trace shape (corners and straights)
	const points: number[] = [
		60, 300, 320, 280, 340, 200, 300, 310, 280, 295, 270, 200, 340, 320, 310,
		290, 330, 320, 280, 300, 260,
	];

	const norm = points.map((v) => (v - 200) / 160);
	const step = W / (points.length - 1);

	// Throttle (green) – approximation
	const gradient = ctx.createLinearGradient(0, 0, W, 0);
	gradient.addColorStop(0, '#00d27a');
	gradient.addColorStop(0.5, '#f0b429');
	gradient.addColorStop(1, '#ff4757');

	ctx.strokeStyle = gradient;
	ctx.lineWidth = 2;
	ctx.lineJoin = 'round';
	ctx.beginPath();
	norm.forEach((v, i) => {
		const x = i * step;
		const y = H - 8 - v * (H - 16);
		if (i === 0) ctx.moveTo(x, y);
		else ctx.lineTo(x, y);
	});
	ctx.stroke();

	// Area fill
	const fillGrad = ctx.createLinearGradient(0, 0, 0, H);
	fillGrad.addColorStop(0, 'rgba(0,210,122,0.18)');
	fillGrad.addColorStop(1, 'rgba(0,210,122,0)');
	ctx.fillStyle = fillGrad;
	ctx.lineTo(W, H);
	ctx.lineTo(0, H);
	ctx.closePath();
	ctx.fill();

	// Grid
	ctx.strokeStyle = 'rgba(255,255,255,0.04)';
	ctx.lineWidth = 1;
	for (let i = 0; i <= 3; i++) {
		const y = (H / 3) * i;
		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.lineTo(W, y);
		ctx.stroke();
	}
}

const Passions: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (canvasRef.current) drawSpeedTrace(canvasRef.current);
	}, []);

	return (
		<section id="passions" className="passions section">
			<div className="container">
				<div className="section-label">{'// beyond the code'}</div>
				<h2 className="section-title">What drives me</h2>

				<div className="passions__grid">
					{/* F1 Card */}
					<div className="passion-card passion-card--f1">
						<div className="passion-card__bg" />
						<div className="passion-card__content">
							<div className="passion-card__header">
								<span className="passion-card__emoji">🏎️</span>
								<div>
									<h3 className="passion-card__title">Formula 1</h3>
									<p className="passion-card__sub">
										Where physics meets the limit
									</p>
								</div>
							</div>
							<p className="passion-card__text">
								F1 is engineering at its most extreme. The aerodynamics, tire
								degradation strategies, and race simulations are as complex as
								any financial model. I analyze lap telemetry, study DRS
								deployment timing, and understand why the undercut works when it
								does.
							</p>
							<div className="f1-metrics">
								<div className="f1-metric">
									<span className="f1-metric__val" style={{ color: '#ff4757' }}>
										340+
									</span>
									<span className="f1-metric__label">km/h top speed</span>
								</div>
								<div className="f1-metric">
									<span className="f1-metric__val" style={{ color: '#f0b429' }}>
										6G
									</span>
									<span className="f1-metric__label">Braking force</span>
								</div>
								<div className="f1-metric">
									<span className="f1-metric__val" style={{ color: '#00d27a' }}>
										1.82s
									</span>
									<span className="f1-metric__label">Fastest pit stop</span>
								</div>
							</div>
							<div className="f1-chart">
								<div className="f1-chart__label">Speed trace — Monaco S1</div>
								<canvas ref={canvasRef} className="f1-canvas" />
							</div>
						</div>
					</div>

					{/* Physics Card */}
					<div className="passion-card passion-card--physics">
						<div className="passion-card__bg" />
						<div className="passion-card__content">
							<div className="passion-card__header">
								<span className="passion-card__emoji">⚛️</span>
								<div>
									<h3 className="passion-card__title">Physics Simulations</h3>
									<p className="passion-card__sub">The universe, in a loop</p>
								</div>
							</div>
							<p className="passion-card__text">
								There's something deeply satisfying about watching emergent
								complexity bloom from simple physical rules. I build simulations
								to understand — gravity, fluid dynamics, electromagnetic fields
								— and to see if the math holds up when you push it to 10,000
								particles.
							</p>

							<div className="physics-sim">
								{Array.from({ length: 32 }).map((_, i) => (
									<div
										key={i}
										className="sim-particle"
										style={
											{
												'--delay': `${(i * 0.19) % 3}s`,
												'--x': `${Math.cos((i / 32) * Math.PI * 2) * 40 + 50}%`,
												'--y': `${Math.sin((i / 32) * Math.PI * 2) * 40 + 50}%`,
												'--size': `${2 + (i % 3)}px`,
												'--hue': `${((i * 11) % 60) + 160}`,
											} as React.CSSProperties
										}
									/>
								))}
								<div className="sim-center-force" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Passions;
