export type Language = 'en' | 'pt';

export const translations = {
	en: {
		// Navbar
		navAbout: 'About',
		navProjects: 'Work',
		navResearch: 'Research',
		navContact: 'Contact',

		// Hero
		heroEyebrow: 'Quantitative finance · Software · Research',
		heroLede:
			'I work on quantitative finance and software — models, trading systems, and research around markets.',
		heroNow:
			"Right now I'm mostly writing Python and C++, reading about portfolio construction and risk, and going down whatever rabbit hole a market question or a physics simulation opens up.",
		heroLinks: 'Work · About · Contact',

		// About
		aboutLabel: 'About',
		aboutGreeting: "I'm Leandro",
		aboutBio1:
			"I'm a software developer with a deep interest in the intersection of computation and finance. I build tools that turn market data into something usable — quantitative models, portfolio optimizers, risk engines, and algorithmic strategies.",
		aboutBio2:
			'Outside of that, I spend time analyzing Formula 1 lap telemetry and running physics simulations, mostly to see how far simple rules can go before they produce something interesting.',
		aboutBio3:
			'I care about software built at the edges — where the math has to meet real constraints, where small inefficiencies compound, and where getting the details right actually pays off.',
		aboutListLabel: 'Working with',
		aboutListQuant: 'Quantitative',
		aboutListQuantItems:
			'Portfolio optimization · Algorithmic trading · Risk metrics · Covariance denoising',
		aboutListCode: 'Software',
		aboutListCodeItems: 'Python · C++ · TypeScript · Rust',
		aboutListSim: 'Simulation',
		aboutListSimItems:
			'N-body simulation · Monte Carlo methods · Fluid dynamics · F1 telemetry',

		// Research
		researchLabel: 'Research',
		researchTitle: 'Quantitative research',
		researchSub: 'Two repos where most of the quant work actually lives.',
		researchIdleTag: 'Python library',
		researchIdleText:
			'A pandas-native quant finance library — a .finance accessor that goes straight from a price DataFrame to returns, risk metrics, and portfolio weights. Covers Black-Litterman and efficient-frontier optimization, Marchenko-Pastur covariance denoising, VaR/CVaR and drawdown risk metrics, bond pricing and duration, Black-Scholes options with a full Greeks and implied-vol surface, DCF and dividend-discount equity valuation, and GBM/jump-diffusion/mean-reverting simulation.',
		researchIdleMeta: 'pip install IdleFinance · MIT license',
		researchQuantTag: 'Research notebooks',
		researchQuantText:
			'A self-study curriculum running from probability theory through derivatives pricing, plus one-off notebooks that test a specific market claim against real data — for example, whether "it can\'t fall any further" holds up against eight real B3 distress cases and a few long-shot Polymarket bets.',
		researchQuantMeta: 'Jupyter notebooks',

		// Projects
		projLabel: 'Work',
		projTitle: 'My portfolio',
		projSub:
			'Pulled live from github.com/Lelozitos — most recently updated first.',
		projLoading: 'Loading repositories…',
		projEmpty: 'No public repositories found.',
		projRateLimited:
			"GitHub's public API is rate-limited and this browser hit that limit — see the projects directly at github.com/Lelozitos instead.",
		projLoadError:
			"Couldn't load repositories — see them directly at github.com/Lelozitos instead.",

		// Contact
		contactLabel: 'Contact',
		contactTitle: 'Get in touch',
		contactSub:
			'If you want to talk about a portfolio problem, a trading system, or market microstructure, reach me here.',
		contactEmail: 'Email',
		contactLinkedIn: 'LinkedIn',
		contactGithub: 'GitHub',

		// Footer
		footerTagline: 'Quantitative finance · Software · Research',
	},
	pt: {
		// Navbar
		navAbout: 'Sobre',
		navProjects: 'Trabalho',
		navResearch: 'Pesquisa',
		navContact: 'Contato',

		// Hero
		heroEyebrow: 'Finanças quantitativas · Software · Pesquisa',
		heroLede:
			'Trabalho com finanças quantitativas e software — modelos, sistemas de negociação e pesquisa sobre mercados.',
		heroNow:
			'No momento estou escrevendo principalmente Python e C++, lendo sobre construção de portfólio e risco, e seguindo qualquer questão de mercado ou simulação de física que desperte curiosidade.',
		heroLinks: 'Trabalho · Sobre · Contato',

		// About
		aboutLabel: 'Sobre',
		aboutGreeting: 'Sou o Leandro',
		aboutBio1:
			'Sou desenvolvedor de software com um interesse profundo pela interseção entre computação e finanças. Construo ferramentas que transformam dados de mercado em algo utilizável — modelos quantitativos, otimizadores de portfólio, motores de risco e estratégias algorítmicas.',
		aboutBio2:
			'Fora isso, dedico tempo a analisar telemetria de voltas de Fórmula 1 e a rodar simulações de física, principalmente para ver até onde regras simples conseguem chegar antes de produzir algo interessante.',
		aboutBio3:
			'Gosto de software construído nos limites — onde a matemática precisa encontrar restrições reais, onde pequenas ineficiências se acumulam, e onde acertar os detalhes realmente compensa.',
		aboutListLabel: 'Com o que trabalho',
		aboutListQuant: 'Quantitativo',
		aboutListQuantItems:
			'Otimização de portfólio · Negociação algorítmica · Métricas de risco · Denoising de covariância',
		aboutListCode: 'Software',
		aboutListCodeItems: 'Python · C++ · TypeScript · Rust',
		aboutListSim: 'Simulação',
		aboutListSimItems:
			'Simulação de N-corpos · Métodos de Monte Carlo · Dinâmica de fluidos · Telemetria de F1',

		// Research
		researchLabel: 'Pesquisa',
		researchTitle: 'Pesquisa quantitativa',
		researchSub:
			'Dois repositórios onde a maior parte do trabalho quant realmente acontece.',
		researchIdleTag: 'Biblioteca Python',
		researchIdleText:
			'Uma biblioteca de finanças quantitativas nativa do pandas — um accessor .finance que vai direto de um DataFrame de preços para retornos, métricas de risco e pesos de portfólio. Cobre otimização Black-Litterman e fronteira eficiente, denoising de covariância via Marchenko-Pastur, métricas de risco VaR/CVaR e drawdown, precificação e duration de títulos, opções Black-Scholes com Greeks completos e superfície de volatilidade implícita, valuation de equities via DCF e modelos de dividendos, e simulação GBM/jump-diffusion/mean-reverting.',
		researchIdleMeta: 'pip install IdleFinance · licença MIT',
		researchQuantTag: 'Notebooks de pesquisa',
		researchQuantText:
			'Um currículo de autoestudo que vai de teoria de probabilidade até precificação de derivativos, além de notebooks pontuais que testam uma afirmação específica de mercado contra dados reais — por exemplo, se "não tem como cair mais" se sustenta diante de oito casos reais de distress na B3 e algumas apostas de cauda no Polymarket.',
		researchQuantMeta: 'Notebooks Jupyter',

		// Projects
		projLabel: 'Trabalho',
		projTitle: 'Meu portfólio',
		projSub:
			'Puxado ao vivo de github.com/Lelozitos — mais recentemente atualizados primeiro.',
		projLoading: 'Carregando repositórios…',
		projEmpty: 'Nenhum repositório público encontrado.',
		projRateLimited:
			'A API pública do GitHub tem limite de requisições e este navegador atingiu esse limite — veja os projetos direto em github.com/Lelozitos.',
		projLoadError:
			'Não foi possível carregar os repositórios — veja-os direto em github.com/Lelozitos.',

		// Contact
		contactLabel: 'Contato',
		contactTitle: 'Entre em contato',
		contactSub:
			'Se quiser conversar sobre um problema de portfólio, um sistema de negociação ou microestrutura de mercado, me encontre por aqui.',
		contactEmail: 'E-mail',
		contactLinkedIn: 'LinkedIn',
		contactGithub: 'GitHub',

		// Footer
		footerTagline: 'Finanças quantitativas · Software · Pesquisa',
	},
};
