import React, { useEffect, useState } from 'react';
import './Projects.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

const GITHUB_USER = 'Lelozitos';

interface GithubRepo {
	id: number;
	name: string;
	description: string | null;
	html_url: string;
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	size: number;
	topics: string[];
	commitCount?: number;
}

/* Fetch total commit count via Link header pagination trick */
async function fetchCommitCount(repo: string): Promise<number> {
	try {
		const res = await fetch(
			`https://api.github.com/repos/${GITHUB_USER}/${repo}/commits?per_page=1`,
			{ headers: { Accept: 'application/vnd.github.v3+json' } },
		);
		if (!res.ok) return 0;
		const link = res.headers.get('Link') ?? '';
		const match = link.match(/page=(\d+)>;\s*rel="last"/);
		return match ? parseInt(match[1], 10) : 1;
	} catch {
		return 0;
	}
}


/* Map language → accent color */
const LANG_COLOR: Record<string, string> = {
	Python: '#3776ab',
	TypeScript: '#3d9df3',
	JavaScript: '#f0d060',
	Rust: '#ff6b35',
	'C++': '#b980f0',
	C: '#b980f0',
	Go: '#00d27a',
	Java: '#f0b429',
	HTML: '#ff4757',
};

function accentFor(lang: string | null): string {
	return lang ? (LANG_COLOR[lang] ?? '#00d27a') : '#00d27a';
}

/* ── Static fallback / previous projects (commented out) ────────────────
const PROJECTS_STATIC = [
  {
    title: 'QuantLib Python Wrapper',
    icon: '📊',
    description:
      'High-performance pandas-native library for portfolio analytics — efficient frontier, Marchenko-Pastur covariance denoising, Sharpe optimization, VaR/CVaR reporting.',
    tags: ['Python', 'NumPy', 'Pandas', 'Portfolio Theory'],
    accent: '#00d27a',
    status: 'Active',
  },
  {
    title: 'Algo Trading Engine',
    icon: '⚡',
    description:
      'Event-driven backtesting and live trading framework with plug-and-play strategy modules, real-time order book parsing, and latency-optimized execution logic.',
    tags: ['Python', 'Asyncio', 'WebSockets', 'Low Latency'],
    accent: '#3d9df3',
    status: 'Active',
  },
  {
    title: 'Risk Analytics Dashboard',
    icon: '🛡️',
    description:
      'Real-time risk monitoring dashboard computing rolling VaR, drawdown, correlation heatmaps, and stress-tests across a multi-asset portfolio.',
    tags: ['React', 'TypeScript', 'Chart.js', 'REST API'],
    accent: '#f0b429',
    status: 'Active',
  },
  {
    title: 'F1 Telemetry Analyzer',
    icon: '🏎️',
    description:
      'Parses FastF1 session data to compare driver lap telemetry — speed traces, brake/throttle overlays, sector deltas — with custom visualization layers.',
    tags: ['Python', 'FastF1', 'Matplotlib', 'Signal Processing'],
    accent: '#ff4757',
    status: 'Hobby',
  },
  {
    title: 'N-Body Physics Sim',
    icon: '🌌',
    description:
      'A Barnes-Hut tree-accelerated N-body gravitational simulation rendered in real-time. Supports thousands of particles at interactive framerates using spatial indexing.',
    tags: ['C++', 'Barnes-Hut', 'OpenGL', 'Physics'],
    accent: '#b980f0',
    status: 'Hobby',
  },
  {
    title: 'Monte Carlo Option Pricer',
    icon: '🎲',
    description:
      'Geometric Brownian Motion option pricer with variance reduction via antithetic variates and control variates. Supports European, Asian, and barrier options.',
    tags: ['Python', 'Monte Carlo', 'GBM', 'Options'],
    accent: '#00d27a',
    status: 'Active',
  },
];
──────────────────────────────────────────────────────────────────────── */

/* Skeleton card */
const SkeletonCard: React.FC = () => (
	<div className="project-card project-card--skeleton">
		<div className="skel skel--icon" />
		<div className="skel skel--title" />
		<div className="skel skel--desc" />
		<div className="skel skel--desc short" />
		<div className="skel skel--tags" />
	</div>
);

const Projects: React.FC = () => {
	const { language } = useLanguage();
	const t = translations[language];

	const [repos, setRepos] = useState<GithubRepo[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let cancelled = false;

		(async () => {
			try {
				// 1. Fetch all repos
				const res = await fetch(
					`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner`,
					{ headers: { Accept: 'application/vnd.github.v3+json' } },
				);
				if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
				const all: GithubRepo[] = await res.json();

				// Filter forks, pick top-20 by size as candidates (avoids too many API calls)
				const candidates = all
					.filter((r) => !('fork' in r && (r as any).fork))
					.sort((a, b) => b.size - a.size)
					.slice(0, 20);
				// 2. Fetch commit counts in parallel
				const withCommits = await Promise.all(
					candidates.map(async (r) => ({
						...r,
						commitCount: await fetchCommitCount(r.name),
					})),
				);

				if (cancelled) return;

				// 3. Sort by commits, take top 6
				const sorted = withCommits
					.sort((a, b) => (b.commitCount ?? 0) - (a.commitCount ?? 0))
					.slice(0, 6);

				setRepos(sorted);
			} catch (e: any) {
				if (!cancelled) setError(e.message ?? 'Failed to load repos');
			} finally {
				if (!cancelled) setLoading(false);
			}
		})();

		return () => {
			cancelled = true;
		};
	}, []);

	return (
		<section id="projects" className="projects section">
			<div className="container">
				<div className="section-label">{t.projLabel}</div>
				<h2 className="section-title">{t.projTitle}</h2>
				<p className="section-subtitle">
					{t.projSub.split('github.com/Lelozitos')[0]}
					<a
						href={`https://github.com/${GITHUB_USER}`}
						target="_blank"
						rel="noreferrer"
						className="projects__gh-link"
					>
						github.com/{GITHUB_USER}
					</a>
					{t.projSub.split('github.com/Lelozitos')[1]}
				</p>

				{error && (
					<div className="projects__error">
						⚠️ Couldn't load repositories: {error}
					</div>
				)}

				<div className="projects__grid">
					{loading
						? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
						: repos.map((repo) => {
								const accent = accentFor(repo.language);
								return (
									<a
										key={repo.id}
										href={repo.html_url}
										target="_blank"
										rel="noreferrer"
										className="project-card project-card--link"
										style={{ '--card-accent': accent } as React.CSSProperties}
									>
										<div className="project-card__top">
											<span
												className="project-card__lang-dot"
												style={{ background: accent }}
											/>
											<div className="project-card__meta">
												{repo.stargazers_count > 0 && (
													<span className="project-meta-item">
														⭐ {repo.stargazers_count}
													</span>
												)}
												{repo.commitCount !== undefined && (
													<span className="project-meta-item project-meta-item--commits">
														↑ {repo.commitCount} {t.projCommits}
													</span>
												)}
											</div>
										</div>

										<h3 className="project-card__title">{repo.name}</h3>
										<p className="project-card__desc">
											{repo.description ?? 'No description provided.'}
										</p>

										<div className="project-card__tags">
											{repo.language && (
												<span
													className="project-tag"
													style={{
														color: accent,
														borderColor: accent + '33',
														background: accent + '0d',
													}}
												>
													{repo.language}
												</span>
											)}
											{repo.topics.slice(0, 3).map((t) => (
												<span key={t} className="project-tag">
													{t}
												</span>
											))}
										</div>
									</a>
								);
							})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
