import React, { useEffect, useState } from 'react';
import './Projects.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

const GITHUB_USER = 'Lelozitos';

/* Featured separately in the Research section — don't duplicate here. */
const EXCLUDED_REPOS = new Set(['idlefinance', 'quant_studies']);

interface GithubRepo {
	id: number;
	name: string;
	description: string | null;
	html_url: string;
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	size: number;
	pushed_at: string;
	topics: string[];
}

/* Row skeleton */
const SkeletonRow: React.FC<{ index: number }> = ({ index }) => (
	<li className="project-row project-row--skeleton">
		<span className="project-row__index">{String(index + 1).padStart(2, '0')}</span>
		<div className="project-row__body">
			<div className="skel skel--title" />
			<div className="skel skel--desc" />
		</div>
	</li>
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
				const res = await fetch(
					`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner`,
					{ headers: { Accept: 'application/vnd.github.v3+json' } },
				);
				if (!res.ok) {
					if (res.status === 403 && res.headers.get('X-RateLimit-Remaining') === '0') {
						throw new Error(t.projRateLimited);
					}
					throw new Error(`GitHub API error: ${res.status}`);
				}
				const all: GithubRepo[] = await res.json();

				const sorted = all
					.filter((r) => !('fork' in r && (r as any).fork))
					.filter((r) => !EXCLUDED_REPOS.has(r.name.toLowerCase()))
					.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
					.slice(0, 6);

				if (cancelled) return;
				setRepos(sorted);
			} catch (e: any) {
				if (!cancelled) setError(e.message ?? t.projLoadError);
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
					>
						github.com/{GITHUB_USER}
					</a>
					{t.projSub.split('github.com/Lelozitos')[1]}
				</p>

				{error && <div className="projects__error">{error}</div>}

				<ol className="projects__list">
					{loading
						? Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} index={i} />)
						: repos.map((repo, i) => (
								<li className="project-row" key={repo.id}>
									<span className="project-row__index">{String(i + 1).padStart(2, '0')}</span>
									<div className="project-row__body">
										<h3 className="project-row__title">
											<a href={repo.html_url} target="_blank" rel="noreferrer" className="project-row__link">
												{repo.name}
											</a>
										</h3>
										<p className="project-row__desc">
											{repo.description ?? 'No description provided.'}
										</p>
										<div className="project-row__meta">
											{repo.language && <span>{repo.language}</span>}
											{repo.stargazers_count > 0 && <span>★ {repo.stargazers_count}</span>}
										</div>
									</div>
								</li>
							))}
					{!loading && !error && repos.length === 0 && (
						<li className="projects__empty">{t.projEmpty}</li>
					)}
				</ol>
			</div>
		</section>
	);
};

export default Projects;
