import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

/* ── Animated candlestick / live chart canvas ─────────────────────────── */
const CANDLES = 28;

function drawChart(canvas: HTMLCanvasElement) {
	const ctx = canvas.getContext('2d');
	if (!ctx) return;

	const W = canvas.width;
	const H = canvas.height;
	ctx.clearRect(0, 0, W, H);

	const prices: number[] = [100];
	for (let i = 1; i <= CANDLES; i++) {
		prices.push(prices[i - 1] + (Math.random() - 0.47) * 6);
	}

	const min = Math.min(...prices);
	const max = Math.max(...prices);
	const range = max - min || 1;

	const padX = 20;
	const padY = 30;
	const drawW = W - padX * 2;
	const drawH = H - padY * 2;

	const candleW = (drawW / CANDLES) * 0.55;
	const spacing = drawW / CANDLES;

	const toY = (v: number) => padY + drawH - ((v - min) / range) * drawH;

	for (let i = 0; i < CANDLES; i++) {
		const open = prices[i];
		const close = prices[i + 1];
		const high = Math.max(open, close) + Math.random() * 2;
		const low = Math.min(open, close) - Math.random() * 2;

		const x = padX + i * spacing + spacing / 2;
		const isUp = close >= open;
		const color = isUp ? '#00d27a' : '#ff4757';

		ctx.strokeStyle = color + '88';
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(x, toY(high));
		ctx.lineTo(x, toY(low));
		ctx.stroke();

		ctx.fillStyle = isUp ? color + 'cc' : color + 'aa';
		const y = toY(Math.max(open, close));
		const h = Math.max(Math.abs(toY(open) - toY(close)), 1);
		ctx.fillRect(x - candleW / 2, y, candleW, h);
	}

	// Moving average line
	const ma: number[] = [];
	const maPeriod = 5;
	for (let i = 0; i < CANDLES; i++) {
		const slice = prices.slice(Math.max(0, i - maPeriod + 1), i + 1);
		ma.push(slice.reduce((a, b) => a + b, 0) / slice.length);
	}

	ctx.strokeStyle = '#f0b429';
	ctx.lineWidth = 1.5;
	ctx.setLineDash([4, 4]);
	ctx.beginPath();
	ma.forEach((v, i) => {
		const x = padX + i * spacing + spacing / 2;
		const y = toY(v);
		if (i === 0) ctx.moveTo(x, y);
		else ctx.lineTo(x, y);
	});
	ctx.stroke();
	ctx.setLineDash([]);

	// Grid lines
	ctx.strokeStyle = 'rgba(255,255,255,0.04)';
	ctx.lineWidth = 1;
	for (let g = 0; g <= 4; g++) {
		const y = padY + (drawH / 4) * g;
		ctx.beginPath();
		ctx.moveTo(padX, y);
		ctx.lineTo(W - padX, y);
		ctx.stroke();
	}
}

/* ── Floating ticker tape ────────────────────────────────────────────────*/
const TICKERS = [
	{ sym: 'BTC', val: '+2.84%' },
	{ sym: 'SPX', val: '-0.31%' },
	{ sym: 'NVDA', val: '+5.12%' },
	{ sym: 'EURUSD', val: '+0.07%' },
	{ sym: 'ETH', val: '+1.93%' },
	{ sym: 'TSLA', val: '-1.45%' },
	{ sym: 'AAPL', val: '+0.88%' },
	{ sym: 'GOLD', val: '+0.54%' },
];

const Hero: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const { language } = useLanguage();
	const t = translations[language];

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const resize = () => {
			canvas.width = canvas.offsetWidth * window.devicePixelRatio;
			canvas.height = canvas.offsetHeight * window.devicePixelRatio;
			canvas
				.getContext('2d')
				?.scale(window.devicePixelRatio, window.devicePixelRatio);
		};

		resize();
		drawChart(canvas);

		const interval = setInterval(() => drawChart(canvas), 3000);
		window.addEventListener('resize', () => {
			resize();
			drawChart(canvas);
		});
		return () => clearInterval(interval);
	}, []);

	return (
		<section id="hero" className="hero">
			{/* Background grid */}
			<div className="hero__grid" />

			{/* Ticker tape */}
			<div className="ticker">
				<div className="ticker__track">
					{[...TICKERS, ...TICKERS, ...TICKERS, ...TICKERS].map((t, i) => (
						<span key={i} className="ticker__item">
							<span className="ticker__sym">{t.sym}</span>
							<span
								className={`ticker__val ${t.val.startsWith('+') ? 'up' : 'down'}`}
							>
								{t.val}
							</span>
						</span>
					))}
				</div>
			</div>

			{/* Hero content */}
			<div className="hero__content">
				<div className="hero__left">
					<div className="hero__badge">
						<span className="hero__badge-dot" />
						{t.heroBadge}
					</div>

					<h1 className="hero__title">
						{t.heroTitle1}
						<br />
						<span className="hero__title-accent">{t.heroCode}</span> {t.heroAmp}{' '}
						<span className="hero__title-accent2">{t.heroMarkets}</span>
					</h1>

					<p className="hero__subtitle">{t.heroSub}</p>

					<div className="hero__actions">
						<a href="#projects" className="btn btn--primary">
							{t.heroBtnProj}
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path
									d="M1 7h12M7 1l6 6-6 6"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
						<a href="#contact" className="btn btn--ghost">
							{t.heroBtnContact}
						</a>
					</div>

					<div className="hero__stats">
						<div className="hero__stat">
							<span className="hero__stat-val">∞</span>
							<span className="hero__stat-label">{t.heroStat1}</span>
						</div>
						<div className="hero__stat-divider" />
						<div className="hero__stat">
							<span className="hero__stat-val">O(n log n)</span>
							<span className="hero__stat-label">{t.heroStat2}</span>
						</div>
						<div className="hero__stat-divider" />
						<div className="hero__stat">
							<span className="hero__stat-val">100%</span>
							<span className="hero__stat-label">{t.heroStat3}</span>
						</div>
					</div>
				</div>

				<div className="hero__right">
					<div className="hero__chart-card">
						<div className="hero__chart-header">
							<div className="hero__chart-title">
								<span className="hero__chart-sym">{t.heroChartTitle}</span>
								<span className="hero__chart-tag">{t.heroChartTag}</span>
							</div>
							<div className="hero__chart-price">
								<span className="hero__chart-val">+18.4%</span>
								<span className="hero__chart-period">{t.heroChartPeriod}</span>
							</div>
						</div>
						<canvas ref={canvasRef} className="hero__canvas" />
						<div className="hero__chart-footer">
							<span className="legend-dot legend-dot--green" />{' '}
							{t.heroChartOpt}&nbsp;&nbsp;
							<span className="legend-dot legend-dot--gold" /> {t.heroChartMA}
						</div>
					</div>
				</div>
			</div>

			{/* Scroll cue */}
			<div className="hero__scroll">
				<span>{t.heroScroll}</span>
				<div className="hero__scroll-line" />
			</div>
		</section>
	);
};

export default Hero;
