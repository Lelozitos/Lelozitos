export type Language = 'en' | 'pt';

export const translations = {
  en: {
    // Navbar
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navPassions: 'Passions',
    navContact: 'Contact',
    navLetsTalk: "Let's Talk",
    
    // Hero
    heroBadge: 'Open to opportunities',
    heroTitle1: 'Building at the edge of',
    heroCode: 'code',
    heroAmp: '&',
    heroMarkets: 'markets.',
    heroSub: 'Developer crafting high-performance systems for financial markets — from algorithmic trading engines to portfolio optimization and real-time risk analytics.',
    heroBtnProj: 'View Projects',
    heroBtnContact: 'Get in Touch',
    heroStat1: 'Iterations',
    heroStat2: 'Avg Complexity',
    heroStat3: 'Caffeine-driven',
    heroChartTitle: 'PORTFOLIO',
    heroChartTag: 'LIVE SIM',
    heroChartPeriod: 'YTD',
    heroChartOpt: 'Optimized',
    heroChartMA: 'Moving Avg',
    heroScroll: 'Scroll',

    // About
    aboutLabel: '// about me',
    aboutGreeting: "Hey, I'm",
    aboutBio1: "I'm a software developer with a deep passion for the intersection of computation and finance. I build tools that turn market noise into signal — quantitative models, portfolio optimizers, risk engines, and algorithmic strategies.",
    aboutBio2: "When I'm not knee-deep in order books and covariance matrices, you'll find me analyzing lap telemetry from a Formula 1 race or running physics simulations just to watch particles behave in interesting ways.",
    aboutBio3: "I believe the best software is built at the edges — where pure math meets real-world constraints, where microseconds matter, and where elegance pays off.",

    // Skills
    skillsLabel: '// skills',
    skillsTitle: 'What I work with',
    skillsSub: 'A toolkit built around performance, precision, and mathematical rigor.',
    skillsCat1: 'Financial Engineering',
    skillsCat2: 'Development',
    skillsCat3: 'Physics & Simulation',

    // Projects
    projLabel: '// projects',
    projTitle: "Things I've built",
    projSub: 'Pulled live from github.com/Lelozitos — sorted by most commits.',
    projCommits: 'commits',

    // Passions
    passLabel: '// beyond the code',
    passTitle: 'What drives me',
    passF1Title: 'Formula 1',
    passF1Sub: 'Where physics meets the limit',
    passF1Text: 'F1 is engineering at its most extreme. The aerodynamics, tire degradation strategies, and race simulations are as complex as any financial model. I analyze lap telemetry, study DRS deployment timing, and understand why the undercut works when it does.',
    passF1Stat1: 'km/h top speed',
    passF1Stat2: 'Braking force',
    passF1Stat3: 'Fastest pit stop',
    passF1Chart: 'Speed trace — Monaco S1',
    passPhysTitle: 'Physics Simulations',
    passPhysSub: 'The universe, in a loop',
    passPhysText: "There's something deeply satisfying about watching emergent complexity bloom from simple physical rules. I build simulations to understand — gravity, fluid dynamics, electromagnetic fields — and to see if the math holds up when you push it to 10,000 particles.",

    // Contact & Footer
    contactLabel: '// contact',
    contactTitle: "Let's build something.",
    contactSub: "Whether you're looking to optimize a portfolio, build a high-frequency trading engine, or just want to chat about market microstructure.",
    contactEmail: 'Send an Email',
    contactLinkedIn: 'Connect on LinkedIn',
    contactGithub: 'View GitHub',
    footerBuilt: 'Built with React + TypeScript',
    footerStatus: 'All systems nominal',
  },
  pt: {
    // Navbar
    navAbout: 'Sobre',
    navSkills: 'Habilidades',
    navProjects: 'Projetos',
    navPassions: 'Paixões',
    navContact: 'Contato',
    navLetsTalk: 'Vamos Conversar',

    // Hero
    heroBadge: 'Aberto a oportunidades',
    heroTitle1: 'Construindo no limite de',
    heroCode: 'código',
    heroAmp: 'e',
    heroMarkets: 'mercados.',
    heroSub: 'Desenvolvedor criando sistemas de alta performance para mercados financeiros — desde motores de negociação algorítmica até otimização de portfólio e análise de risco em tempo real.',
    heroBtnProj: 'Ver Projetos',
    heroBtnContact: 'Entrar em Contato',
    heroStat1: 'Iterações',
    heroStat2: 'Complex. Média',
    heroStat3: 'Movido a Cafeína',
    heroChartTitle: 'PORTFÓLIO',
    heroChartTag: 'SIMULAÇÃO',
    heroChartPeriod: 'ANO',
    heroChartOpt: 'Otimizado',
    heroChartMA: 'Média Móvel',
    heroScroll: 'Rolar',

    // About
    aboutLabel: '// sobre mim',
    aboutGreeting: "Olá, sou",
    aboutBio1: "Sou um desenvolvedor de software com uma profunda paixão pela interseção de computação e finanças. Construo ferramentas que transformam ruído de mercado em sinal — modelos quantitativos, otimizadores de portfólio, motores de risco e estratégias algorítmicas.",
    aboutBio2: "Quando não estou imerso em books de ofertas e matrizes de covariância, você me encontrará analisando telemetria de uma corrida de Fórmula 1 ou executando simulações de física apenas para ver como as partículas se comportam de maneiras interessantes.",
    aboutBio3: "Acredito que o melhor software é construído nos limites — onde a matemática pura encontra restrições do mundo real, onde microssegundos importam e onde a elegância compensa.",

    // Skills
    skillsLabel: '// habilidades',
    skillsTitle: 'Com o que trabalho',
    skillsSub: 'Um conjunto de ferramentas focado em performance, precisão e rigor matemático.',
    skillsCat1: 'Engenharia Financeira',
    skillsCat2: 'Desenvolvimento',
    skillsCat3: 'Física & Simulação',

    // Projects
    projLabel: '// projetos',
    projTitle: 'O que construí',
    projSub: 'Puxado do github.com/Lelozitos — ordenado por número de commits.',
    projCommits: 'commits',

    // Passions
    passLabel: '// além do código',
    passTitle: 'O que me motiva',
    passF1Title: 'Fórmula 1',
    passF1Sub: 'Onde a física encontra o limite',
    passF1Text: 'A F1 é engenharia no seu extremo. A aerodinâmica, estratégias de degradação de pneus e simulações de corrida são tão complexas quanto qualquer modelo financeiro. Analiso telemetria de voltas, estudo o timing do DRS e entendo por que o undercut funciona quando funciona.',
    passF1Stat1: 'velocidade máx.',
    passF1Stat2: 'Força de frenagem',
    passF1Stat3: 'Pit stop mais rápido',
    passF1Chart: 'Traçado de vel. — Monaco S1',
    passPhysTitle: 'Simulações de Física',
    passPhysSub: 'O universo, em um loop',
    passPhysText: "Há algo profundamente satisfatório em observar uma complexidade emergente florescer a partir de regras físicas simples. Construo simulações para entender — gravidade, dinâmica de fluidos, campos eletromagnéticos — e para ver se a matemática se sustenta quando você a expande para 10.000 partículas.",

    // Contact & Footer
    contactLabel: '// contato',
    contactTitle: "Vamos construir algo.",
    contactSub: "Seja para otimizar um portfólio, construir um motor de negociação de alta frequência ou apenas conversar sobre a microestrutura do mercado.",
    contactEmail: 'Enviar um E-mail',
    contactLinkedIn: 'Conectar no LinkedIn',
    contactGithub: 'Ver GitHub',
    footerBuilt: 'Construído com React + TypeScript',
    footerStatus: 'Todos os sistemas nominais',
  }
};
