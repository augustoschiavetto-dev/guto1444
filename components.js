// ==========================================
// OFFICIAL CAMPAIGN WEB COMPONENTS BUNDLE (GUTO 1444)
// ==========================================

// 1. HEADER COMPONENT
class CampaignHeader extends HTMLElement {
    connectedCallback() {
        const isHomePage = window.location.pathname === '/' || 
                           window.location.pathname.endsWith('/index.html') || 
                           window.location.pathname.split('/').pop() === '';
        
        const pathPrefix = isHomePage ? '' : './index.html';

        this.innerHTML = `
        <header id="main-header" class="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-darkBg/35 border-b border-white/5 py-4">
            <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <!-- Brand Logo -->
                <a href="${pathPrefix}#hero" class="flex items-center gap-3 group focus:outline-none" aria-label="Guto Schiavetto 1444">
                    <img src="./logo.png" alt="Guto Schiavetto 1444" class="h-10 md:h-12 w-auto object-contain block">
                </a>

                <!-- Navigation Links (Desktop) -->
                <nav class="hidden md:flex items-center gap-8">
                    <a href="${pathPrefix}#historia" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200" aria-label="Navegar para Minha História">História</a>
                    <a href="${pathPrefix}#propostas" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200" aria-label="Navegar para Propostas">Propostas</a>
                    <a href="${pathPrefix}#plano" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200" aria-label="Navegar para Plano de Mandato">Plano de Mandato</a>
                    <a href="${pathPrefix}#vaquinha" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200" aria-label="Navegar para Vaquinha">Vaquinha</a>
                    <a href="${pathPrefix}#impulsionador" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200" aria-label="Navegar para Seja Impulsionador">Seja Impulsionador</a>
                    <a href="${pathPrefix}#materiais" class="nav-link text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200" aria-label="Navegar para Central de Materiais">Materiais</a>
                </nav>

                <!-- Call to Action Button (Desktop) -->
                <div class="hidden md:flex items-center gap-4">
                    <a href="${pathPrefix}#vaquinha" class="ripple-btn inline-flex items-center justify-center px-5 py-2.5 bg-primary hover:bg-primaryDark text-darkBg font-semibold text-sm rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-glow hover:shadow-glowHover focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-darkBg focus:outline-none">
                        Apoie a Campanha
                    </a>
                </div>

                <!-- Hamburger Button (Mobile) -->
                <button id="mobile-menu-btn" class="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-lg text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" aria-label="Abrir Menu Lateral" aria-expanded="false">
                    <span class="w-6 h-0.5 bg-current transition-all duration-300 origin-center mb-1.5" id="hamburger-top"></span>
                    <span class="w-6 h-0.5 bg-current transition-all duration-300 origin-center mb-1.5" id="hamburger-middle"></span>
                    <span class="w-6 h-0.5 bg-current transition-all duration-300 origin-center" id="hamburger-bottom"></span>
                </button>
            </div>

            <!-- Mobile Navigation Menu Dropdown -->
            <div id="mobile-menu" class="hidden md:hidden fixed inset-x-0 top-[73px] bg-darkBg/95 backdrop-blur-lg border-b border-white/10 py-6 px-6 flex flex-col gap-6 shadow-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto">
                <a href="${pathPrefix}#historia" class="mobile-nav-link text-lg font-medium text-gray-300 hover:text-white" aria-label="Navegar para Minha História">História</a>
                <a href="${pathPrefix}#propostas" class="mobile-nav-link text-lg font-medium text-gray-300 hover:text-white" aria-label="Navegar para Propostas">Propostas</a>
                <a href="${pathPrefix}#plano" class="mobile-nav-link text-lg font-medium text-gray-300 hover:text-white" aria-label="Navegar para Plano de Mandato">Plano de Mandato</a>
                <a href="${pathPrefix}#vaquinha" class="mobile-nav-link text-lg font-medium text-gray-300 hover:text-white" aria-label="Navegar para Vaquinha">Vaquinha</a>
                <a href="${pathPrefix}#impulsionador" class="mobile-nav-link text-lg font-medium text-gray-300 hover:text-white" aria-label="Navegar para Seja Impulsionador">Seja Impulsionador</a>
                <a href="${pathPrefix}#materiais" class="mobile-nav-link text-lg font-medium text-gray-300 hover:text-white" aria-label="Navegar para Central de Materiais">Materiais</a>
                <hr class="border-white/10">
                <a href="${pathPrefix}#vaquinha" class="ripple-btn flex items-center justify-center py-3.5 bg-primary hover:bg-primaryDark text-darkBg font-bold rounded-xl transition-all duration-200 shadow-glow">
                    Apoie a Campanha
                </a>
            </div>
        </header>
        `;
    }
}
customElements.define('campaign-header', CampaignHeader);

// 2. HERO COMPONENT
class CampaignHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="hero" class="min-h-[calc(100vh-73px)] flex flex-col justify-center py-16 px-6 relative">
            <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Hero Content (Left) -->
                <div class="lg:col-span-1 flex flex-col items-start text-left relative z-10">
                    <!-- Badge -->
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 reveal">
                        <span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                        <span class="text-xs font-semibold uppercase tracking-wider text-primary">Deputado Federal por São Paulo - 1444</span>
                    </div>

                    <!-- Title (Logo Image) -->
                    <div class="mb-8 w-full flex justify-start reveal">
                        <img src="./logo.png" alt="Guto Schiavetto" class="max-w-[760px] -ml-2 md:-ml-4 w-full h-auto object-contain block">
                    </div>

                    <!-- Paragraph placeholder -->
                    <p class="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-normal reveal">
                        Um Futuro Glorioso começa pelo Congresso Nacional!
                    </p>

                    <!-- CTAs -->
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto reveal">
                        <a href="#impulsionador" class="ripple-btn inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primaryDark text-darkBg font-bold text-base rounded-xl transition-all duration-300 shadow-glow hover:shadow-glowHover transform hover:-translate-y-0.5 focus:ring-2 focus:ring-primary focus:outline-none">
                            Seja um Impulsionador
                        </a>
                        <a href="#propostas" class="ripple-btn inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold text-base rounded-xl transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 focus:ring-2 focus:ring-white/20 focus:outline-none">
                            Conheça as Propostas
                        </a>
                    </div>
                </div>

                <!-- Hero Photo (Right) -->
                <div class="lg:col-span-1 flex justify-center lg:justify-start relative">
                    <!-- Tech decorative box background -->
                    <div class="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-transparent to-white/5 rounded-3xl blur-2xl opacity-50 z-0"></div>
                    
                    <div class="w-full max-w-[460px] aspect-[4/5] relative overflow-hidden flex flex-col items-center justify-end group reveal">
                        <!-- Skeleton loading pulse before image renders -->
                        <div class="absolute inset-0 skeleton-loader z-0" id="hero-img-skeleton"></div>
                        
                        <!-- Main Image (Scaled back down to prevent cutting the head) -->
                        <img src="./candidato.png" alt="Guto Schiavetto" class="absolute inset-0 w-full h-full object-contain object-bottom z-10 transition-all duration-500 group-hover:scale-105">
                        
                        <!-- Premium gradient overlay to fade the bottom of the photo -->
                        <div class="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-darkBg to-transparent z-20 pointer-events-none"></div>
                    </div>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer z-10 hover:text-primary transition-colors duration-200" onclick="document.getElementById('manifesto').scrollIntoView();">
                <span class="text-[10px] font-semibold uppercase tracking-widest text-gray-400 hover:text-primary">Role para Explorar</span>
                <div class="w-6 h-10 border border-white/20 rounded-full p-1 flex justify-center items-start">
                    <div class="w-1.5 h-2 bg-primary rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('campaign-hero', CampaignHero);

// 3. MANIFESTO COMPONENT
class CampaignManifesto extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="manifesto" class="py-28 px-6 relative border-t border-white/5 bg-[#080808]">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                <!-- Left: Cinematic Scrolling text -->
                <div class="lg:col-span-7 flex flex-col items-start justify-center">
                    <span class="text-xs font-bold uppercase tracking-widest text-primary mb-4">Por que quero ser deputado federal?</span>
                    
                    <div id="manifesto-text-container" class="flex flex-col gap-6 text-gray-500 font-display">
                        <p class="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight transition-colors duration-500 manifesto-line">
                            Em 2006, me tornei pai de minhas filhas gêmeas. Não enxergava e continuo não enxergando um futuro bom para elas em nosso país e resolvi fazer minha parte para mudá-lo.
                        </p>
                        <p class="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight transition-colors duration-500 manifesto-line">
                            Em 2015, decidi que assistir aos escândalos de corrupção do país de braços cruzados não era mais uma opção.
                        </p>
                        <p class="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight transition-colors duration-500 manifesto-line">
                            Liderei milhares de pessoas nas ruas e, mais tarde, apliquei tecnologia e gestão de dados na prática da administração pública.
                        </p>
                        <p class="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight transition-colors duration-500 manifesto-line text-white">
                            Me preparei tecnicamente e entrei na política de forma definitiva porque estados e municípios precisam de representação qualificada, transparente e eficiente no plano federal.
                        </p>
                        <p class="text-sm font-semibold uppercase tracking-wider text-primary mt-4 cursor-pointer flex items-center gap-1.5" onclick="document.getElementById('historia').scrollIntoView({behavior: 'smooth'});">
                            Conheça minha trajetória na política <i data-lucide="arrow-down" class="w-4 h-4"></i>
                        </p>
                    </div>
                </div>

                <!-- Right: Conceptual Video Placeholder -->
                <div class="lg:col-span-5 flex justify-center lg:justify-end reveal">
                    <div class="w-full max-w-[480px] aspect-video sm:aspect-square rounded-3xl border border-white/10 bg-cardBg/40 backdrop-blur-md overflow-hidden relative shadow-2xl flex flex-col items-center justify-center group">
                        <!-- Skeleton loading pulse -->
                        <div class="absolute inset-0 skeleton-loader z-0"></div>
                        
                        <!-- Video Placeholder overlay styling -->
                        <div class="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent z-10"></div>
                        <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        
                        <!-- Play Button visual -->
                        <button class="z-20 w-16 h-16 rounded-full bg-primary hover:bg-primaryDark text-darkBg flex items-center justify-center shadow-glow transition-all duration-300 transform group-hover:scale-110 focus:ring-2 focus:ring-primary focus:outline-none" aria-label="Assistir ao vídeo do manifesto">
                            <i data-lucide="play" class="w-6 h-6 fill-darkBg ml-1"></i>
                        </button>
                        
                        <!-- Caption -->
                        <div class="absolute bottom-6 left-6 right-6 z-20 text-left">
                            <span class="text-[9px] font-bold text-primary uppercase tracking-widest block mb-1">Vídeo Oficial</span>
                            <h4 class="font-semibold text-sm text-white uppercase">Vídeo do Manifesto</h4>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        `;
    }
}
customElements.define('campaign-manifesto', CampaignManifesto);

// 4. TIMELINE COMPONENT
class CampaignTimeline extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="historia" class="py-24 px-6 relative border-t border-white/5">
            <div class="max-w-7xl mx-auto">
                <!-- Section Title -->
                <div class="text-center max-w-3xl mx-auto mb-20 reveal">
                    <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4">Minha História</h2>
                    <div class="w-12 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p class="text-gray-400 text-lg">Conheça a trajetória técnica e de mobilização social que embasa o nosso projeto de renovação política.</p>
                </div>

                <!-- Timeline Core -->
                <div class="relative w-full before:absolute before:top-0 before:bottom-0 before:left-4 lg:before:left-1/2 before:w-[2px] before:bg-white/10 before:-translate-x-1/2">
                    
                    <!-- Node 1 -->
                    <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                        <div class="lg:col-span-5 lg:text-right flex flex-col justify-center order-2 lg:order-1 reveal">
                            <span class="font-display font-black text-4xl text-primary mb-3">2000</span>
                            <h3 class="font-display font-bold text-xl text-white mb-2">Ciência da Computação na PUC-SP</h3>
                            <p class="text-gray-400 leading-relaxed">Aos 18 anos, Guto mudou-se para a capital paulista para iniciar sua formação acadêmica básica. A graduação em Ciência da Computação estruturou seu raciocínio lógico focado em inovação, eficiência de processos e gestão baseada em dados, bagagem técnica que se tornaria o pilar de todas as suas atuações futuras.</p>
                        </div>
                        
                        <!-- Timeline Node Dot -->
                        <div class="lg:col-span-2 flex items-center justify-start lg:justify-center order-1 lg:order-2 z-10">
                            <div class="w-9 h-9 rounded-full bg-darkBg border-2 border-primary shadow-glow flex items-center justify-center">
                                <i data-lucide="graduation-cap" class="w-4 h-4 text-primary"></i>
                            </div>
                        </div>
                        
                        <!-- Photo Placeholder -->
                        <div class="lg:col-span-5 order-3 reveal">
                            <div class="aspect-video w-full rounded-2xl border border-white/10 bg-cardBg/40 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center relative group">
                                <div class="absolute inset-0 skeleton-loader z-0"></div>
                                <img src="./pucsp.png" alt="PUC-SP" class="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-500 group-hover:scale-105">
                            </div>
                        </div>
                    </div>

                    <!-- Node 2 (Inverted) -->
                    <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                        <div class="lg:col-span-5 order-3 lg:order-1 reveal">
                            <div class="aspect-video w-full rounded-2xl border border-white/10 bg-cardBg/40 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center relative group">
                                <div class="absolute inset-0 skeleton-loader z-0"></div>
                                <img src="./comercio.jpg" alt="Comércio da Família" class="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-500 group-hover:scale-105">
                            </div>
                        </div>
                        
                        <!-- Timeline Node Dot -->
                        <div class="lg:col-span-2 flex items-center justify-start lg:justify-center order-1 lg:order-2 z-10">
                            <div class="w-9 h-9 rounded-full bg-darkBg border-2 border-primary shadow-glow flex items-center justify-center">
                                <i data-lucide="store" class="w-4 h-4 text-primary"></i>
                            </div>
                        </div>
                        
                        <div class="lg:col-span-5 flex flex-col justify-center order-2 reveal">
                            <span class="font-display font-black text-4xl text-primary mb-3">2004</span>
                            <h3 class="font-display font-bold text-xl text-white mb-2">Inovação e Modernização no Varejo</h3>
                            <p class="text-gray-400 leading-relaxed">Após a graduação, assumiu a gestão do tradicional comércio de sua família em Limeira. Uniu a tecnologia ao dia a dia do varejo para otimizar processos comerciais internos e vivenciar de perto a realidade dos empreendedores que geram empregos e sustentam a economia do nosso país.</p>
                        </div>
                    </div>

                    <!-- Node 3 -->
                    <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                        <div class="lg:col-span-5 lg:text-right flex flex-col justify-center order-2 lg:order-1 reveal">
                            <span class="font-display font-black text-4xl text-primary mb-3">2015</span>
                            <h3 class="font-display font-bold text-xl text-white mb-2">Da Indignação para a Ação</h3>
                            <p class="text-gray-400 leading-relaxed">Incomodado com a impunidade, Guto liderou movimento de combate à corrupção. Durante dois anos de atuação direta nas ruas, mobilizou milhares de pessoas pelo resgate da ética pública, culminando no maior ato democrático da história de Limeira, que reuniu 20 mil cidadãos em uma manifestação orgânica.</p>
                        </div>
                        
                        <!-- Timeline Node Dot -->
                        <div class="lg:col-span-2 flex items-center justify-start lg:justify-center order-1 lg:order-2 z-10">
                            <div class="w-9 h-9 rounded-full bg-darkBg border-2 border-primary shadow-glow flex items-center justify-center">
                                <i data-lucide="megaphone" class="w-4 h-4 text-primary"></i>
                            </div>
                        </div>
                        
                        <!-- Photo Placeholder -->
                        <div class="lg:col-span-5 order-3 reveal">
                            <div class="aspect-video w-full rounded-2xl border border-white/10 bg-cardBg/40 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center relative group">
                                <div class="absolute inset-0 skeleton-loader z-0"></div>
                                <img src="./manifestacao.jpg" alt="Manifestação Popular" class="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-500 group-hover:scale-105">
                            </div>
                        </div>
                    </div>

                    <!-- Node 4 (Inverted) -->
                    <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                        <div class="lg:col-span-5 order-3 lg:order-1 reveal">
                            <div class="aspect-video w-full rounded-2xl border border-white/10 bg-cardBg/40 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center relative group">
                                <div class="absolute inset-0 skeleton-loader z-0"></div>
                                <img src="./gestao.png" alt="Gestão Pública" class="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-500 group-hover:scale-105">
                            </div>
                        </div>
                        
                        <!-- Timeline Node Dot -->
                        <div class="lg:col-span-2 flex items-center justify-start lg:justify-center order-1 lg:order-2 z-10">
                            <div class="w-9 h-9 rounded-full bg-darkBg border-2 border-primary shadow-glow flex items-center justify-center">
                                <i data-lucide="database" class="w-4 h-4 text-primary"></i>
                            </div>
                        </div>
                        
                        <div class="lg:col-span-5 flex flex-col justify-center order-2 reveal">
                            <span class="font-display font-black text-4xl text-primary mb-3">2017</span>
                            <h3 class="font-display font-bold text-xl text-white mb-2">Tecnologia Aplicada à Gestão Ambiental</h3>
                            <p class="text-gray-400 leading-relaxed">Como Diretor de Educação Ambiental no Executivo municipal, usou seus conhecimentos em ciência de dados para revolucionar a pasta do Meio Ambiente. Coordenou programas de Sustentabilidade e parcerias com a academia e por meio da inovação tecnológica, consolidou a cidade de Limeira como destaque em sustentabilidade no Estado de São Paulo por três anos consecutivos.</p>
                        </div>
                    </div>

                    <!-- Node 5 -->
                    <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                        <div class="lg:col-span-5 lg:text-right flex flex-col justify-center order-2 lg:order-1 reveal">
                            <span class="font-display font-black text-4xl text-primary mb-3">2019</span>
                            <h3 class="font-display font-bold text-xl text-white mb-2">Liderança Qualificada na Política</h3>
                            <p class="text-gray-400 leading-relaxed">Buscando excelência técnica continuada, iniciou a formação em Gestão Pública na FATEC. No mesmo ano, obteve destaque nacional ao ser selecionado entre mais de 31 mil inscritos em todo o país para ingressar no RenovaBR, a mais prestigiada escola de formação de lideranças focada em eficiência pública.</p>
                        </div>
                        
                        <!-- Timeline Node Dot -->
                        <div class="lg:col-span-2 flex items-center justify-start lg:justify-center order-1 lg:order-2 z-10">
                            <div class="w-9 h-9 rounded-full bg-darkBg border-2 border-primary shadow-glow flex items-center justify-center">
                                <i data-lucide="award" class="w-4 h-4 text-primary"></i>
                            </div>
                        </div>
                        
                        <!-- Photo Placeholder -->
                        <div class="lg:col-span-5 order-3 reveal">
                            <div class="aspect-video w-full rounded-2xl border border-white/10 bg-cardBg/40 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center relative group">
                                <div class="absolute inset-0 skeleton-loader z-0"></div>
                                <img src="./renova.png" alt="RenovaBR" class="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-500 group-hover:scale-105">
                            </div>
                        </div>
                    </div>

                    <!-- Node 6 (Inverted) -->
                    <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div class="lg:col-span-5 order-3 lg:order-1 reveal">
                            <div class="aspect-video w-full rounded-2xl border border-white/10 bg-cardBg/40 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center relative group">
                                <div class="absolute inset-0 skeleton-loader z-0"></div>
                                <img src="./comunicacao.png" alt="Comunicação de Impacto" class="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-500 group-hover:scale-105">
                            </div>
                        </div>
                        
                        <!-- Timeline Node Dot -->
                        <div class="lg:col-span-2 flex items-center justify-start lg:justify-center order-1 lg:order-2 z-10">
                            <div class="w-9 h-9 rounded-full bg-darkBg border-2 border-primary shadow-glow flex items-center justify-center">
                                <i data-lucide="radio" class="w-4 h-4 text-primary"></i>
                            </div>
                        </div>
                        
                        <div class="lg:col-span-5 flex flex-col justify-center order-2 reveal">
                            <span class="font-display font-black text-4xl text-primary mb-3">2023</span>
                            <h3 class="font-display font-bold text-xl text-white mb-2">De volta ao Cenário Nacional</h3>
                            <p class="text-gray-400 leading-relaxed">Guto entrou para o Movimento Brasil Livre (MBL), assumindo papel de destaque na análise de debates nacionais e na articulação como Porta-voz no município de Limeira. Consolidou sua representatividade regional nas eleições seguintes como o terceiro candidato mais votado de sua legenda, pavimentando a preparação técnica e de rede para o parlamento federal. Participou ativamente do processo de coleta de assinaturas e da formação do Partido Missão.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('campaign-timeline', CampaignTimeline);

// 5. PROPOSALS COMPONENT (BENTO GRID)
class CampaignProposals extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="propostas" class="py-24 px-6 relative border-t border-white/5 bg-black/10">
            <div class="max-w-7xl mx-auto">
                <!-- Section Title -->
                <div class="text-center max-w-3xl mx-auto mb-20 reveal">
                    <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4">Propostas de Inovação</h2>
                    <div class="w-12 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p class="text-gray-400 text-lg">[PLACEHOLDER PARA SUBTITULO SEÇÃO PROPOSTAS — Breve introdução sobre a visão programática, eixos de atuação e objetivos estratégicos]</p>
                </div>

                <!-- Modern irregular Bento Grid Layout -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <!-- Card 1: Eixo 1 (Double width 2/3) -->
                    <div class="group md:col-span-2 p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-cardBg/40 via-cardBg/30 to-black/30 backdrop-blur-md hover:border-primary/20 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[320px] reveal">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i data-lucide="cpu" class="w-6 h-6"></i>
                            </div>
                            <h3 class="font-display font-bold text-2xl text-white mb-3 group-hover:text-primary transition-colors duration-200">
                                [PLACEHOLDER TITULO EIXO 1]
                            </h3>
                            <p class="text-gray-400 text-sm leading-relaxed max-w-xl">
                                [PLACEHOLDER TEXTO DETALHE EIXO 1 — Descrição detalhada e completa das propostas prioritárias relacionadas a este pilar técnico do mandato]
                            </p>
                        </div>
                        <div class="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                            <span class="text-xs font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-1.5">
                                [PLACEHOLDER BADGE DETALHES] <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                            </span>
                            <span class="text-[10px] text-gray-500 font-mono">[01 / EIXO FUNDAMENTAL]</span>
                        </div>
                    </div>

                    <!-- Card 2: Eixo 2 (Single width 1/3) -->
                    <div class="group md:col-span-1 p-8 rounded-2xl border border-white/5 bg-cardBg/30 backdrop-blur-md hover:border-primary/20 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[320px] reveal" style="transition-delay: 100ms;">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i data-lucide="shield-check" class="w-6 h-6"></i>
                            </div>
                            <h3 class="font-display font-bold text-xl text-white mb-3 group-hover:text-primary transition-colors duration-200">
                                [PLACEHOLDER TITULO EIXO 2]
                            </h3>
                            <p class="text-gray-400 text-xs leading-relaxed">
                                [PLACEHOLDER TEXTO DETALHE EIXO 2 — Breve descrição da proposta de segurança, transparência ou compliance]
                            </p>
                        </div>
                        <span class="text-xs font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-1.5 mt-6">
                            [PLACEHOLDER BADGE DETALHES] <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </span>
                    </div>

                    <!-- Card 3: Eixo 3 (Single width 1/3) -->
                    <div class="group md:col-span-1 p-8 rounded-2xl border border-white/5 bg-cardBg/30 backdrop-blur-md hover:border-primary/20 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[320px] reveal">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i data-lucide="graduation-cap" class="w-6 h-6"></i>
                            </div>
                            <h3 class="font-display font-bold text-xl text-white mb-3 group-hover:text-primary transition-colors duration-200">
                                [PLACEHOLDER TITULO EIXO 3]
                            </h3>
                            <p class="text-gray-400 text-xs leading-relaxed">
                                [PLACEHOLDER TEXTO DETALHE EIXO 3 — Detalhe da proposta voltada à educação, cultura ou formação tecnológica]
                            </p>
                        </div>
                        <span class="text-xs font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-1.5 mt-6">
                            [PLACEHOLDER BADGE DETALHES] <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </span>
                    </div>

                    <!-- Card 4: Eixo 4 (Double width 2/3) -->
                    <div class="group md:col-span-2 p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-cardBg/40 via-cardBg/30 to-black/30 backdrop-blur-md hover:border-primary/20 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[320px] reveal" style="transition-delay: 100ms;">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i data-lucide="activity" class="w-6 h-6"></i>
                            </div>
                            <h3 class="font-display font-bold text-2xl text-white mb-3 group-hover:text-primary transition-colors duration-200">
                                [PLACEHOLDER TITULO EIXO 4]
                            </h3>
                            <p class="text-gray-400 text-sm leading-relaxed max-w-xl">
                                [PLACEHOLDER TEXTO DETALHE EIXO 4 — Descrição detalhada e completa das propostas prioritárias relacionadas a este pilar técnico do mandato]
                            </p>
                        </div>
                        <div class="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                            <span class="text-xs font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-1.5">
                                [PLACEHOLDER BADGE DETALHES] <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                            </span>
                            <span class="text-[10px] text-gray-500 font-mono">[04 / EIXO FUNDAMENTAL]</span>
                        </div>
                    </div>

                    <!-- Card 5: Eixo 5 (Single width 1/3) -->
                    <div class="group md:col-span-1 p-8 rounded-2xl border border-white/5 bg-cardBg/30 backdrop-blur-md hover:border-primary/20 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[320px] reveal">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i data-lucide="route" class="w-6 h-6"></i>
                            </div>
                            <h3 class="font-display font-bold text-xl text-white mb-3 group-hover:text-primary transition-colors duration-200">
                                [PLACEHOLDER TITULO EIXO 5]
                            </h3>
                            <p class="text-gray-400 text-xs leading-relaxed">
                                [PLACEHOLDER TEXTO DETALHE EIXO 5 — Detalhe da proposta voltada à mobilidade urbana, infraestrutura ou habitação]
                            </p>
                        </div>
                        <span class="text-xs font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-1.5 mt-6">
                            [PLACEHOLDER BADGE DETALHES] <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </span>
                    </div>

                    <!-- Card 6: Eixo 6 (Double width 2/3) -->
                    <div class="group md:col-span-2 p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-cardBg/40 via-cardBg/30 to-black/30 backdrop-blur-md hover:border-primary/20 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[320px] reveal" style="transition-delay: 100ms;">
                        <div>
                            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i data-lucide="leaf" class="w-6 h-6"></i>
                            </div>
                            <h3 class="font-display font-bold text-2xl text-white mb-3 group-hover:text-primary transition-colors duration-200">
                                [PLACEHOLDER TITULO EIXO 6]
                            </h3>
                            <p class="text-gray-400 text-sm leading-relaxed max-w-xl">
                                [PLACEHOLDER TEXTO DETALHE EIXO 6 — Descrição detalhada e completa das propostas prioritárias relacionadas a este pilar técnico do mandato]
                            </p>
                        </div>
                        <div class="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                            <span class="text-xs font-semibold text-primary uppercase tracking-wider inline-flex items-center gap-1.5">
                                [PLACEHOLDER BADGE DETALHES] <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                            </span>
                            <span class="text-[10px] text-gray-500 font-mono">[06 / EIXO FUNDAMENTAL]</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('campaign-proposals', CampaignProposals);

// 6. MANDATE COMPONENT
class CampaignMandate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="plano" class="py-24 px-6 relative border-t border-white/5">
            <div class="max-w-7xl mx-auto">
                <div class="w-full rounded-3xl border border-white/5 bg-gradient-to-r from-cardBg via-[#161616] to-[#1e1e1e] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl reveal">
                    
                    <!-- Decorative Glow behind PDF mockup -->
                    <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

                    <!-- Content (Left) -->
                    <div class="lg:max-w-[55%] flex flex-col items-start text-left relative z-10">
                        <span class="text-xs font-bold uppercase tracking-widest text-primary mb-3">Plano de Mandato</span>
                        <h2 class="font-display font-extrabold text-2xl sm:text-4xl text-white mb-6">
                            Um mandato orientado a metas, com transparência contínua e resultados práticos para o futuro do Brasil.
                        </h2>
                        <p class="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed">
                            Baixe as diretrizes do nosso plano de mandato e saiba como pretendemos aplicar a tecnologia e a eficiência técnica na legislação federal.
                        </p>
                        
                        <!-- Download CTA Button with simple progress simulation -->
                        <button id="download-plano-btn" class="ripple-btn inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primaryDark text-darkBg font-bold text-base rounded-xl transition-all duration-300 shadow-glow hover:shadow-glowHover focus:ring-2 focus:ring-primary focus:outline-none">
                            <i data-lucide="file-down" id="download-icon" class="w-5 h-5"></i>
                            <span id="download-text">Baixar Plano Completo (PDF)</span>
                        </button>
                    </div>

                    <!-- Mockup PDF Placeholder (Right) -->
                    <div class="w-full max-w-[340px] aspect-[1/1.4] rounded-xl border border-white/10 bg-darkBg/60 backdrop-blur-md relative overflow-hidden flex flex-col items-center justify-center shadow-2xl group transition-transform duration-500 hover:rotate-1 hover:scale-105 z-10">
                        <div class="absolute inset-0 skeleton-loader z-0"></div>
                        <div class="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent z-10"></div>
                        
                        <!-- Mini cap/layout representation -->
                        <div class="z-20 text-center px-4">
                            <div class="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                                <i data-lucide="file-text" class="w-6 h-6 text-primary"></i>
                            </div>
                            <span class="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2 block">Plano de Mandato</span>
                            <span class="text-[10px] text-gray-500 block">[CAPA DO PLANO DE GOVERNO]</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('campaign-mandate', CampaignMandate);

// 7. SOCIAL PROOF COMPONENT (NEW)
class CampaignSocialProof extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="prova-social" class="py-24 px-6 relative border-t border-white/5 bg-black/10">
            <div class="max-w-7xl mx-auto">
                <!-- Grid of Stats -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 text-center">
                    
                    <!-- Stat 1 -->
                    <div class="p-6 rounded-2xl border border-white/5 bg-cardBg/20 backdrop-blur-sm flex flex-col items-center justify-start reveal">
                        <span class="font-display font-black text-4xl text-primary mb-3 font-mono tracking-tight" id="stat-1-val">+50.000</span>
                        <h4 class="font-bold text-white mb-2 text-sm uppercase tracking-wider">Árvores Mapeadas</h4>
                        <p class="text-gray-400 text-xs leading-relaxed">
                            Criou o aplicativo Censo Arbóreo Digital e realizou o mapeamento de todas as árvores de vias públicas em parceria com a UNICAMP-FT.
                        </p>
                    </div>

                    <!-- Stat 2 -->
                    <div class="p-6 rounded-2xl border border-white/5 bg-cardBg/20 backdrop-blur-sm flex flex-col items-center justify-start reveal" style="transition-delay: 100ms;">
                        <span class="font-display font-black text-4xl text-primary mb-3 font-mono tracking-tight" id="stat-2-val">2</span>
                        <h4 class="font-bold text-white mb-2 text-sm uppercase tracking-wider">Selecionado RenovaBR</h4>
                        <p class="text-gray-400 text-xs leading-relaxed">
                            Aprovado e formado por duas vezes (2020 e 2024) na maior escola de formação de lideranças políticas do Brasil.
                        </p>
                    </div>

                    <!-- Stat 3 -->
                    <div class="p-6 rounded-2xl border border-white/5 bg-cardBg/20 backdrop-blur-sm flex flex-col items-center justify-start reveal" style="transition-delay: 200ms;">
                        <span class="font-display font-black text-4xl text-primary mb-3 font-mono tracking-tight" id="stat-3-val">+20k</span>
                        <h4 class="font-bold text-white mb-2 text-sm uppercase tracking-wider">Manifestações</h4>
                        <p class="text-gray-400 text-xs leading-relaxed">
                            Liderou e coordenou a maior manifestação democrática e anticorrupção da história de Limeira.
                        </p>
                    </div>

                    <!-- Stat 4 -->
                    <div class="p-6 rounded-2xl border border-white/5 bg-cardBg/20 backdrop-blur-sm flex flex-col items-center justify-start reveal" style="transition-delay: 300ms;">
                        <span class="font-display font-black text-4xl text-primary mb-3 font-mono tracking-tight" id="stat-4-val">142</span>
                        <h4 class="font-bold text-white mb-2 text-sm uppercase tracking-wider">Famílias Apoiadas</h4>
                        <p class="text-gray-400 text-xs leading-relaxed">
                            Arrecadou recursos emergenciais e cestas de alimentos para famílias vulneráveis durante a pandemia.
                        </p>
                    </div>

                </div>

                <!-- Marquee Partners/Supporters -->
                <div class="text-center reveal">
                    <span class="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6 block">EM PARCERIA COM LIDERANÇAS E CIDADÃOS DO ESTADO DE SÃO PAULO</span>
                    
                    <!-- Infinite Scrolling Marquee Container -->
                    <div class="w-full relative overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 before:bg-gradient-to-r before:from-darkBg before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 after:bg-gradient-to-l after:from-darkBg after:to-transparent after:z-10">
                        <div class="flex items-center gap-12 w-max animate-[marquee_25s_linear_infinite]" id="marquee-track">
                            
                            <!-- Slide list (doubled for infinite loops) -->
                            <div class="flex items-center gap-12 text-gray-600 font-display font-extrabold text-sm uppercase tracking-widest select-none">
                                <span class="hover:text-primary transition-colors">Voluntários e Apoiadores</span>
                                <span class="text-primary/20">&bull;</span>
                                <span class="hover:text-primary transition-colors">Limeira Solidária</span>
                                <span class="text-primary/20">&bull;</span>
                                <span class="hover:text-primary transition-colors">Gestores Públicos Técnicos</span>
                                <span class="text-primary/20">&bull;</span>
                                <span class="hover:text-primary transition-colors">RenovaBR Alumni</span>
                                <span class="text-primary/20">&bull;</span>
                                <span class="hover:text-primary transition-colors">Movimento Brasil Livre</span>
                                <span class="text-primary/20">&bull;</span>
                            </div>
                            
                            <div class="flex items-center gap-12 text-gray-600 font-display font-extrabold text-sm uppercase tracking-widest select-none" aria-hidden="true">
                                <span class="hover:text-primary transition-colors">Voluntários e Apoiadores</span>
                                <span class="text-primary/20">&bull;</span>
                                <span class="hover:text-primary transition-colors">Limeira Solidária</span>
                                <span class="text-primary/20">&bull;</span>
                                <span class="hover:text-primary transition-colors">Gestores Públicos Técnicos</span>
                                <span class="text-primary/20">&bull;</span>
                                <span class="hover:text-primary transition-colors">RenovaBR Alumni</span>
                                <span class="text-primary/20">&bull;</span>
                                <span class="hover:text-primary transition-colors">Movimento Brasil Livre</span>
                                <span class="text-primary/20">&bull;</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Custom Marquee animation keyframe -->
        <style>
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        </style>
        `;
    }
}
customElements.define('campaign-social-proof', CampaignSocialProof);

// 8. DONATION COMPONENT
class CampaignDonation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="vaquinha" class="py-24 px-6 relative border-t border-white/5 bg-black/15">
            <div class="max-w-4xl mx-auto reveal">
                <!-- Premium Card -->
                <div class="p-8 sm:p-12 rounded-3xl border border-primary/20 bg-cardBg/40 backdrop-blur-md relative overflow-hidden shadow-2xl">
                    <!-- Tech outline decor -->
                    <div class="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl pointer-events-none"></div>
                    <div class="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl pointer-events-none"></div>

                    <!-- Header -->
                    <div class="text-center">
                        <div class="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                            <i data-lucide="badge-check" class="w-4 h-4 text-primary"></i>
                            <span class="text-[10px] font-bold uppercase tracking-wider text-primary">Campanha 100% Legalizada e Homologada</span>
                        </div>
                        <h2 class="font-display font-extrabold text-2xl sm:text-4xl text-white mb-3">
                            Financiamento Independente.
                        </h2>
                        <p class="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                            Nossa campanha não aceita recursos de corrupção ou privilégios. Apoie a construção de uma política transparente, ética e eficiente com sua doação.
                        </p>

                        <!-- CTA Button DOAR -->
                        <a href="https://www.queroapoiar.com.br/guto" target="_blank" class="ripple-btn inline-flex items-center justify-center px-12 py-4 bg-primary hover:bg-primaryDark text-darkBg font-bold text-base rounded-xl transition-all duration-300 shadow-glow hover:shadow-glowHover focus:ring-2 focus:ring-primary focus:outline-none">
                            DOAR
                        </a>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('campaign-donation', CampaignDonation);

// 9. IMPULSIONADOR COMPONENT (EXPANDED + FAQ)
class CampaignImpulsionador extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="impulsionador" class="py-24 px-6 relative border-t border-white/5">
            <div class="max-w-7xl mx-auto">
                <!-- Top Header -->
                <div class="text-center max-w-3xl mx-auto mb-16 reveal">
                    <span class="text-xs font-bold uppercase tracking-widest text-primary mb-3">Junte-se à Rede</span>
                    <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4">
                        Multiplique esta ideia.
                    </h2>
                    <p class="text-gray-400 text-lg leading-relaxed">
                        A verdadeira renovação é descentralizada. Una-se à rede de Impulsionadores e ajude a levar propostas técnicas e éticas mais longe utilizando o ambiente digital.
                    </p>
                </div>

                <!-- Main Grid: Col 1 (Details, Process & FAQ) | Col 2 (Form) -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    <!-- Left: Benefits, Process and FAQ Accordion -->
                    <div class="lg:col-span-6 flex flex-col gap-10 reveal">
                        
                        <!-- Step Process -->
                        <div>
                            <h3 class="font-display font-bold text-xl text-white mb-6">Como funciona a jornada:</h3>
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div class="p-4 rounded-xl border border-white/5 bg-white/5 relative">
                                    <span class="text-xs font-bold text-primary block mb-1">Passo 01</span>
                                    <span class="text-xs font-semibold text-white block mb-1">Cadastro</span>
                                    <span class="text-[10px] text-gray-500 block">Inscreva seus dados básicos no formulário ao lado de forma segura.</span>
                                </div>
                                <div class="p-4 rounded-xl border border-white/5 bg-white/5 relative">
                                    <span class="text-xs font-bold text-primary block mb-1">Passo 02</span>
                                    <span class="text-xs font-semibold text-white block mb-1">Conexão</span>
                                    <span class="text-[10px] text-gray-500 block">Receba as orientações e seja integrado ao grupo oficial de coordenação.</span>
                                </div>
                                <div class="p-4 rounded-xl border border-white/5 bg-white/5 relative">
                                    <span class="text-xs font-bold text-primary block mb-1">Passo 03</span>
                                    <span class="text-xs font-semibold text-white block mb-1">Divulgação</span>
                                    <span class="text-[10px] text-gray-500 block">Compartilhe materiais oficiais e participe da nossa rede orgânica.</span>
                                </div>
                            </div>
                        </div>

                        <!-- Benefits checklist -->
                        <div>
                            <h3 class="font-display font-bold text-xl text-white mb-4">Vantagens de ser Impulsionador:</h3>
                            <div class="flex flex-col gap-4 w-full">
                                <div class="flex gap-3">
                                    <div class="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                                        <i data-lucide="check" class="w-3 h-3"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-semibold text-white">Acesso a Conteúdo Oficial</h4>
                                        <p class="text-gray-400 text-xs mt-0.5">Receba em primeira mão materiais exclusivos e dados de propostas de campanha.</p>
                                    </div>
                                </div>

                                <div class="flex gap-3">
                                    <div class="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                                        <i data-lucide="check" class="w-3 h-3"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-semibold text-white">Comunidade Ativa</h4>
                                        <p class="text-gray-400 text-xs mt-0.5">Participe de discussões sobre propostas de transparência e gestão com outros voluntários.</p>
                                    </div>
                                </div>

                                <div class="flex gap-3">
                                    <div class="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                                        <i data-lucide="check" class="w-3 h-3"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-semibold text-white">Contato Direto</h4>
                                        <p class="text-gray-400 text-xs mt-0.5">Acesso aos canais oficiais de comunicação para sugerir melhorias no projeto de mandato.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- FAQ Accordion -->
                        <div>
                            <h3 class="font-display font-bold text-xl text-white mb-6">Dúvidas Frequentes (FAQ):</h3>
                            <div class="flex flex-col gap-3">
                                
                                <!-- FAQ 1 -->
                                <div class="faq-item border border-white/5 bg-cardBg/20 rounded-xl overflow-hidden">
                                    <button type="button" class="faq-trigger w-full px-5 py-4 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-primary transition-colors focus:outline-none">
                                        <span>Quem é Guto Schiavetto?</span>
                                        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-500 transition-transform duration-300"></i>
                                    </button>
                                    <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                        <p class="px-5 pb-4 text-xs text-gray-400 leading-relaxed">
                                            Guto é cientista da computação graduado pela PUC-SP, empreendedor comercial e ex-diretor de Educação Ambiental. Possui formação continuada em Gestão Pública pela FATEC/Univesp e foi selecionado pela escola de liderança política RenovaBR.
                                        </p>
                                    </div>
                                </div>

                                <!-- FAQ 2 -->
                                <div class="faq-item border border-white/5 bg-cardBg/20 rounded-xl overflow-hidden">
                                    <button type="button" class="faq-trigger w-full px-5 py-4 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-primary transition-colors focus:outline-none">
                                        <span>Como o voluntariado de Impulsionador ajuda na prática?</span>
                                        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-500 transition-transform duration-300"></i>
                                    </button>
                                    <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                        <p class="px-5 pb-4 text-xs text-gray-400 leading-relaxed">
                                            Os impulsionadores formam uma rede digital orgânica e de baixo custo. Compartilhando dados técnicos e materiais nas redes, combatemos as estruturas milionárias das campanhas tradicionais com voluntariado consciente.
                                        </p>
                                    </div>
                                </div>

                                <!-- FAQ 3 -->
                                <div class="faq-item border border-white/5 bg-cardBg/20 rounded-xl overflow-hidden">
                                    <button type="button" class="faq-trigger w-full px-5 py-4 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-primary transition-colors focus:outline-none">
                                        <span>Qual é a preparação do candidato para atuar como Deputado Federal?</span>
                                        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-500 transition-transform duration-300"></i>
                                    </button>
                                    <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                        <p class="px-5 pb-4 text-xs text-gray-400 leading-relaxed">
                                            Guto une a experiência prática do varejo privado à gestão pública orientada por dados do Executivo. Cursou Gestão Pública na Univesp e se formou no RenovaBR para obter o embasamento técnico necessário para legislar com eficiência.
                                        </p>
                                    </div>
                                </div>

                                <!-- FAQ 4 -->
                                <div class="faq-item border border-white/5 bg-cardBg/20 rounded-xl overflow-hidden">
                                    <button type="button" class="faq-trigger w-full px-5 py-4 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-primary transition-colors focus:outline-none">
                                        <span>Quais foram seus principais resultados na gestão municipal?</span>
                                        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-500 transition-transform duration-300"></i>
                                    </button>
                                    <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                        <p class="px-5 pb-4 text-xs text-gray-400 leading-relaxed">
                                            Destacam-se o desenvolvimento do aplicativo de Censo Arbóreo Digital em parceria com a UNICAMP (76 mil árvores mapeadas), a manutenção de Limeira no Top 35 de Sustentabilidade de SP e ações de solidariedade para apoiar 142 famílias.
                                        </p>
                                    </div>
                                </div>

                                <!-- FAQ 5 -->
                                <div class="faq-item border border-white/5 bg-cardBg/20 rounded-xl overflow-hidden">
                                    <button type="button" class="faq-trigger w-full px-5 py-4 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-primary transition-colors focus:outline-none">
                                        <span>Onde posso acessar a prestação de contas dos recursos doados?</span>
                                        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-500 transition-transform duration-300"></i>
                                    </button>
                                    <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                        <p class="px-5 pb-4 text-xs text-gray-400 leading-relaxed">
                                            Todos os recursos da vaquinha são homologados, registrados e declarados oficialmente sob as diretrizes e resoluções de transparência do Tribunal Superior Eleitoral (TSE).
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <!-- Right: Form (Lead Generation) -->
                    <div class="lg:col-span-6 reveal">
                        <div class="p-8 sm:p-10 rounded-2xl border border-white/5 bg-cardBg/30 backdrop-blur-md shadow-2xl relative">
                            <form id="impulsionador-form" class="flex flex-col gap-6" novalidate>
                                
                                <!-- Input Name -->
                                <div class="flex flex-col">
                                    <label for="form-name" class="text-xs font-semibold text-gray-400 uppercase mb-2">Nome Completo</label>
                                    <input type="text" id="form-name" required class="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Digite seu nome completo">
                                    <span class="text-xs text-red-500 mt-1 hidden" id="err-name">Nome é obrigatório.</span>
                                </div>

                                <!-- Input Email -->
                                <div class="flex flex-col">
                                    <label for="form-email" class="text-xs font-semibold text-gray-400 uppercase mb-2">Endereço de E-mail</label>
                                    <input type="email" id="form-email" required class="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Ex: seuemail@dominio.com">
                                    <span class="text-xs text-red-500 mt-1 hidden" id="err-email">E-mail inválido.</span>
                                </div>

                                <!-- Input Phone (Whatsapp) -->
                                <div class="flex flex-col">
                                    <label for="form-phone" class="text-xs font-semibold text-gray-400 uppercase mb-2">WhatsApp / Telefone</label>
                                    <input type="tel" id="form-phone" required class="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="(00) 00000-0000">
                                    <span class="text-xs text-red-500 mt-1 hidden" id="err-phone">WhatsApp é obrigatório.</span>
                                </div>

                                <!-- Input Cidade/Estado -->
                                <div class="flex flex-col">
                                    <label for="form-city" class="text-xs font-semibold text-gray-400 uppercase mb-2">Cidade / Estado</label>
                                    <input type="text" id="form-city" required class="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Ex: Limeira / SP">
                                    <span class="text-xs text-red-500 mt-1 hidden" id="err-city">Cidade e Estado são obrigatórios.</span>
                                </div>

                                <!-- LGPD Checkbox -->
                                <div class="flex items-start gap-3 mt-2">
                                    <input type="checkbox" id="form-lgpd" required class="w-4 h-4 rounded border-white/10 bg-darkBg accent-primary text-darkBg focus:ring-0 focus:ring-offset-0 mt-1 cursor-pointer">
                                    <label for="form-lgpd" class="text-xs text-gray-400 leading-normal cursor-pointer select-none">
                                        Concordo em compartilhar meus dados para fins de comunicação oficial do mandato, conforme diretrizes da LGPD.
                                    </label>
                                </div>
                                <span class="text-xs text-red-500 hidden" id="err-lgpd">Você precisa concordar para continuar.</span>

                                <!-- Submit Button -->
                                <button type="submit" class="ripple-btn w-full py-4 bg-primary hover:bg-primaryDark text-darkBg font-bold text-base rounded-xl transition-all duration-300 shadow-glow hover:shadow-glowHover flex items-center justify-center gap-2 focus:ring-2 focus:ring-primary focus:outline-none mt-2">
                                    <span id="submit-btn-spinner" class="hidden w-4 h-4 border-2 border-darkBg border-t-transparent rounded-full animate-spin"></span>
                                    <span id="submit-btn-text">QUERO ME TORNAR UM IMPULSIONADOR!</span>
                                </button>

                            </form>

                            <!-- Success Feedback State Overlay -->
                            <div id="form-success-overlay" class="absolute inset-0 bg-darkBg/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-center p-8 hidden transition-all duration-500 opacity-0 scale-95 z-20">
                                <div class="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 animate-bounce">
                                    <i data-lucide="party-popper" class="w-8 h-8"></i>
                                </div>
                                <h3 class="font-display font-bold text-2xl text-white mb-2">Cadastro Realizado!</h3>
                                <p class="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed">
                                    Seus dados foram enviados com sucesso. Entraremos em contato via WhatsApp nas próximas horas para te passar os materiais e te adicionar no grupo de coordenação.
                                </p>
                                <button onclick="resetFormState();" class="ripple-btn px-6 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors duration-200">
                                    Voltar ao Formulário
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('campaign-impulsionador', CampaignImpulsionador);

// 10. MATERIALS COMPONENT (SEARCH + FILTER)
class CampaignMaterials extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="materiais" class="py-24 px-6 relative border-t border-white/5 bg-black/10">
            <div class="max-w-7xl mx-auto">
                <!-- Section Title -->
                <div class="text-center max-w-3xl mx-auto mb-16 reveal">
                    <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4">Materiais de Apoio</h2>
                    <div class="w-12 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p class="text-gray-400 text-lg">Baixe as artes oficiais da campanha para compartilhar no WhatsApp e redes sociais. Espalhe a renovação técnica de forma orgânica.</p>
                </div>

                <!-- Category Filters & Search (Premium Library Bar) -->
                <div class="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 reveal">
                    <!-- Search input field -->
                    <div class="relative w-full md:max-w-xs rounded-xl border border-white/10 bg-cardBg/60 backdrop-blur-md overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <i data-lucide="search" class="w-4 h-4"></i>
                        </span>
                        <input type="text" id="materials-search-input" class="w-full bg-transparent pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none" placeholder="Buscar materiais...">
                    </div>

                    <!-- Category Tab Filters -->
                    <div class="flex flex-wrap items-center gap-2">
                        <button class="material-filter-btn px-5 py-2.5 rounded-full text-sm font-medium border border-primary/20 bg-primary/10 text-primary transition-all duration-200" data-filter="all">Todos</button>
                        <button class="material-filter-btn px-5 py-2.5 rounded-full text-sm font-medium border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-all duration-200" data-filter="social">Redes Sociais</button>
                        <button class="material-filter-btn px-5 py-2.5 rounded-full text-sm font-medium border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-all duration-200" data-filter="print">Impressos</button>
                        <button class="material-filter-btn px-5 py-2.5 rounded-full text-sm font-medium border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-all duration-200" data-filter="stickers">Adesivos</button>
                    </div>
                </div>

                <!-- Materials Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="materials-grid">
                    
                    <!-- Material 1 (Social) -->
                    <div class="material-card group rounded-2xl border border-white/5 bg-cardBg/30 backdrop-blur-md overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/20 hover:shadow-glow reveal" data-category="social" data-title="adesivo digital guto 1444">
                        <div class="aspect-square w-full bg-darkBg/60 relative overflow-hidden flex flex-col items-center justify-center">
                            <div class="absolute inset-0 skeleton-loader z-0"></div>
                            <div class="z-10 text-center px-4">
                                <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                                    <i data-lucide="image" class="w-5 h-5 text-primary/80"></i>
                                </div>
                                <span class="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">[IMAGEM DA ARTE]</span>
                            </div>
                        </div>
                        <div class="p-6 flex flex-col flex-grow">
                            <span class="text-[9px] font-bold text-primary uppercase tracking-widest mb-1.5">Redes Sociais</span>
                            <h3 class="font-display font-bold text-base text-white mb-4 line-clamp-2">Adesivo Digital Guto 1444</h3>
                            <button class="ripple-btn w-full mt-auto py-2.5 bg-white/5 hover:bg-primary hover:text-darkBg text-white font-bold text-xs rounded-lg border border-white/10 hover:border-primary transition-all duration-200 flex items-center justify-center gap-1.5">
                                <i data-lucide="download" class="w-3.5 h-3.5"></i> Baixar Arquivo
                            </button>
                        </div>
                    </div>

                    <!-- Material 2 (Print) -->
                    <div class="material-card group rounded-2xl border border-white/5 bg-cardBg/30 backdrop-blur-md overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/20 hover:shadow-glow reveal" data-category="print" data-title="panfleto oficial guto 1444">
                        <div class="aspect-square w-full bg-darkBg/60 relative overflow-hidden flex flex-col items-center justify-center">
                            <div class="absolute inset-0 skeleton-loader z-0"></div>
                            <div class="z-10 text-center px-4">
                                <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                                    <i data-lucide="image" class="w-5 h-5 text-primary/80"></i>
                                </div>
                                <span class="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">[IMAGEM DA ARTE]</span>
                            </div>
                        </div>
                        <div class="p-6 flex flex-col flex-grow">
                            <span class="text-[9px] font-bold text-primary uppercase tracking-widest mb-1.5">Impressos</span>
                            <h3 class="font-display font-bold text-base text-white mb-4 line-clamp-2">Panfleto Oficial Guto 1444</h3>
                            <button class="ripple-btn w-full mt-auto py-2.5 bg-white/5 hover:bg-primary hover:text-darkBg text-white font-bold text-xs rounded-lg border border-white/10 hover:border-primary transition-all duration-200 flex items-center justify-center gap-1.5">
                                <i data-lucide="download" class="w-3.5 h-3.5"></i> Baixar Arquivo
                            </button>
                        </div>
                    </div>

                    <!-- Material 3 (Stickers) -->
                    <div class="material-card group rounded-2xl border border-white/5 bg-cardBg/30 backdrop-blur-md overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/20 hover:shadow-glow reveal" data-category="stickers" data-title="logomarca oficial vetorial">
                        <div class="aspect-square w-full bg-darkBg/60 relative overflow-hidden flex flex-col items-center justify-center">
                            <div class="absolute inset-0 skeleton-loader z-0"></div>
                            <div class="z-10 text-center px-4">
                                <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                                    <i data-lucide="image" class="w-5 h-5 text-primary/80"></i>
                                </div>
                                <span class="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">[IMAGEM DA ARTE]</span>
                            </div>
                        </div>
                        <div class="p-6 flex flex-col flex-grow">
                            <span class="text-[9px] font-bold text-primary uppercase tracking-widest mb-1.5">Adesivos</span>
                            <h3 class="font-display font-bold text-base text-white mb-4 line-clamp-2">Logomarca Oficial Vetorial</h3>
                            <button class="ripple-btn w-full mt-auto py-2.5 bg-white/5 hover:bg-primary hover:text-darkBg text-white font-bold text-xs rounded-lg border border-white/10 hover:border-primary transition-all duration-200 flex items-center justify-center gap-1.5">
                                <i data-lucide="download" class="w-3.5 h-3.5"></i> Baixar Arquivo
                            </button>
                        </div>
                    </div>

                    <!-- Material 4 (Social) -->
                    <div class="material-card group rounded-2xl border border-white/5 bg-cardBg/30 backdrop-blur-md overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/20 hover:shadow-glow reveal" data-category="social" data-title="cards de propostas whatsapp">
                        <div class="aspect-square w-full bg-darkBg/60 relative overflow-hidden flex flex-col items-center justify-center">
                            <div class="absolute inset-0 skeleton-loader z-0"></div>
                            <div class="z-10 text-center px-4">
                                <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                                    <i data-lucide="image" class="w-5 h-5 text-primary/80"></i>
                                </div>
                                <span class="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">[IMAGEM DA ARTE]</span>
                            </div>
                        </div>
                        <div class="p-6 flex flex-col flex-grow">
                            <span class="text-[9px] font-bold text-primary uppercase tracking-widest mb-1.5">Redes Sociais</span>
                            <h3 class="font-display font-bold text-base text-white mb-4 line-clamp-2">Cards de Propostas (WhatsApp)</h3>
                            <button class="ripple-btn w-full mt-auto py-2.5 bg-white/5 hover:bg-primary hover:text-darkBg text-white font-bold text-xs rounded-lg border border-white/10 hover:border-primary transition-all duration-200 flex items-center justify-center gap-1.5">
                                <i data-lucide="download" class="w-3.5 h-3.5"></i> Baixar Arquivo
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('campaign-materials', CampaignMaterials);

// 11. SOCIALS COMPONENT
class CampaignSocials extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="redes" class="py-24 px-6 relative border-t border-white/5">
            <div class="max-w-7xl mx-auto">
                <!-- Section Title -->
                <div class="text-center max-w-3xl mx-auto mb-16 reveal">
                    <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4">Comunidade Digital</h2>
                    <div class="w-12 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p class="text-gray-400 text-lg">Conecte-se com Guto Schiavetto nas redes sociais oficiais e acompanhe de perto o projeto de renovação para São Paulo e o Brasil.</p>
                </div>

                <!-- Bento Grid of Platforms -->
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    <!-- Card 1: Instagram (Grid span 7) -->
                    <a href="https://www.instagram.com/gutoschiavetto" target="_blank" class="md:col-span-7 group rounded-2xl border border-white/5 bg-gradient-to-tr from-cardBg via-cardBg to-[#2b1021] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-pink-500/20 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.15)] transition-all duration-300 reveal">
                        <div class="flex items-center gap-5">
                            <div class="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <img src="./perfil.jpg" alt="Guto Schiavetto" class="w-full h-full object-cover">
                                <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white border border-[#161616]">
                                    <i data-lucide="instagram" class="w-3 h-3 fill-white"></i>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-display font-bold text-xl text-white group-hover:text-pink-400 transition-colors duration-200">@gutoschiavetto</h3>
                                <p class="text-gray-400 text-sm mt-1 leading-relaxed">Acompanhe nosso dia a dia, análises técnicas e bastidores da campanha.</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center gap-1 text-xs font-semibold text-pink-500 uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0">
                            Seguir Perfil <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                        </span>
                    </a>

                    <!-- Card 2: YouTube (Grid span 5) -->
                    <a href="https://www.youtube.com/@gutoschiavetto" target="_blank" class="md:col-span-5 group rounded-2xl border border-white/5 bg-gradient-to-tr from-cardBg via-cardBg to-[#2b0e0e] p-8 flex flex-col items-start justify-between gap-8 hover:border-red-600/20 hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.15)] transition-all duration-300 reveal">
                        <div class="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:scale-110 transition-transform duration-300">
                            <img src="./perfil.jpg" alt="Guto Schiavetto" class="w-full h-full object-cover">
                            <div class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white border border-[#161616]">
                                <i data-lucide="youtube" class="w-2.5 h-2.5 fill-white"></i>
                            </div>
                        </div>
                        <div class="mt-auto">
                            <h3 class="font-display font-bold text-lg text-white group-hover:text-red-400 transition-colors duration-200">@gutoschiavetto</h3>
                            <p class="text-gray-400 text-sm mt-1 leading-relaxed">Videos shorts e lives com análises políticas.</p>
                        </div>
                    </a>

                    <!-- Card 3: WhatsApp (Grid span 5) -->
                    <a href="https://chat.whatsapp.com/Kb2iiO6dWY1190SVfZRiuE?s=cl&p=a&ilr=0" target="_blank" class="md:col-span-5 group rounded-2xl border border-white/5 bg-gradient-to-tr from-cardBg via-cardBg to-[#0a2717] p-8 flex flex-col items-start justify-between gap-8 hover:border-green-500/20 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.15)] transition-all duration-300 reveal">
                        <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform duration-300">
                            <i data-lucide="message-circle" class="w-6 h-6"></i>
                        </div>
                        <div class="mt-auto">
                            <h3 class="font-display font-bold text-lg text-white group-hover:text-green-400 transition-colors duration-200">Comunidade Oficial no WhatsApp</h3>
                            <p class="text-gray-400 text-sm mt-1 leading-relaxed">Receba notícias, novidades e materiais oficiais em tempo real.</p>
                        </div>
                    </a>

                    <!-- Card 4: TikTok / X / Outros (Grid span 7) -->
                    <div class="md:col-span-7 rounded-2xl border border-white/5 bg-cardBg/30 backdrop-blur-md p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center reveal">
                        
                        <!-- Mini Link 1 (TikTok) -->
                        <a href="https://www.tiktok.com/@gutoschiavetto" target="_blank" class="group flex items-center gap-4 hover:-translate-y-0.5 transition-transform duration-200">
                            <div class="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 group-hover:border-white/20 transition-all duration-200">
                                <img src="./perfil.jpg" alt="Guto Schiavetto" class="w-full h-full object-cover">
                                <div class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-black flex items-center justify-center text-white border border-[#161616]">
                                    <i data-lucide="music" class="w-2.5 h-2.5 text-primary fill-current"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-white group-hover:text-primary transition-colors duration-200">TikTok</h4>
                                <span class="text-xs text-gray-500 block leading-tight mt-0.5">Vídeos rápidos com conteúdo sobre política.</span>
                            </div>
                        </a>

                        <!-- Mini Link 2 (X / Twitter) -->
                        <a href="https://x.com/guto_schiavetto" target="_blank" class="group flex items-center gap-4 hover:-translate-y-0.5 transition-transform duration-200">
                            <div class="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 group-hover:border-white/20 transition-all duration-200">
                                <img src="./perfil.jpg" alt="Guto Schiavetto" class="w-full h-full object-cover">
                                <div class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#1da1f2] flex items-center justify-center text-white border border-[#161616]">
                                    <i data-lucide="twitter" class="w-2.5 h-2.5 fill-white"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-white group-hover:text-primary transition-colors duration-200">X (Twitter)</h4>
                                <span class="text-xs text-gray-500 block leading-tight mt-0.5">Minhas opiniões sobre o cenário político.</span>
                            </div>
                        </a>

                    </div>

                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('campaign-socials', CampaignSocials);

// 12. FOOTER COMPONENT
class CampaignFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="relative z-10 bg-[#060606] border-t border-white/5 py-16 px-6">
            <div class="max-w-7xl mx-auto">
                
                <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
                    <!-- Brand details -->
                    <div class="md:col-span-5 flex flex-col items-start">
                        <div class="flex items-center gap-3 mb-6" aria-label="Guto Schiavetto 1444">
                            <img src="./logo.png" alt="Guto Schiavetto 1444" class="h-12 w-auto object-contain block">
                        </div>
                        <p class="text-gray-400 text-sm max-w-sm mb-6 leading-relaxed">
                            Guto Schiavetto é cientista da computação, empreendedor e especialista em Gestão Pública com formação pelo RenovaBR. Combina vivência no setor privado e resultados práticos de tecnologia na administração pública para defender a transparência, a integridade ética e o desenvolvimento sustentável na Câmara dos Deputados.
                        </p>
                        
                        <!-- Safety Legal Badges (TSE requirements) -->
                        <div class="flex flex-col gap-2 border-l-2 border-primary/20 pl-4 py-1">
                            <span class="text-[10px] font-semibold text-gray-500 uppercase tracking-wider block">CNPJ DA CAMPANHA:</span>
                            <span class="text-xs font-mono font-semibold text-gray-300 block">--.---.---/----.--</span>
                        </div>
                    </div>

                    <!-- Navigation Quick Links -->
                    <div class="md:col-span-3">
                        <h4 class="font-display font-bold text-sm text-white uppercase tracking-wider mb-6">Mapa do Mandato</h4>
                        <ul class="flex flex-col gap-3">
                            <li><a href="#historia" class="text-sm text-gray-400 hover:text-white transition-colors duration-150">Trajetória</a></li>
                            <li><a href="#propostas" class="text-sm text-gray-400 hover:text-white transition-colors duration-150">Principais Propostas</a></li>
                            <li><a href="#plano" class="text-sm text-gray-400 hover:text-white transition-colors duration-150">Plano de Mandato (PDF)</a></li>
                            <li><a href="#vaquinha" class="text-sm text-gray-400 hover:text-white transition-colors duration-150">Financiamento Coletivo</a></li>
                        </ul>
                    </div>

                    <!-- Legal requirements/Disclaimers -->
                    <div class="md:col-span-4">
                        <h4 class="font-display font-bold text-sm text-white uppercase tracking-wider mb-6">Transparência Legal</h4>
                        <p class="text-xs text-gray-500 leading-relaxed mb-6">
                            Propaganda Eleitoral Gratuita na Internet. Todo o conteúdo foi desenvolvido e publicado de acordo com as diretrizes e resoluções de transparência do Tribunal Superior Eleitoral (TSE).
                        </p>
                        
                        <!-- Coligação legal representation -->
                        <div class="p-4 rounded-xl border border-white/5 bg-white/5">
                            <span class="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Coligação Oficial</span>
                            <span class="text-xs font-semibold text-gray-300 block leading-normal">
                                [NOMES DOS PARTIDOS DA COLIGAÇÃO COMPLETA]
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Border divider -->
                <div class="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <!-- Copyright declaration -->
                    <span class="text-xs text-gray-500">
                        &copy; 2026 Guto Schiavetto 1444. Todos os direitos reservados.
                    </span>

                    <!-- Back to Top button -->
                    <button onclick="window.scrollTo({top: 0, behavior: 'smooth'});" class="ripple-btn inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-primary hover:text-darkBg text-gray-400 hover:text-darkBg rounded-xl text-xs font-semibold uppercase tracking-wider border border-white/10 hover:border-primary transition-all duration-300" aria-label="Voltar ao topo da página">
                        Voltar ao Topo <i data-lucide="arrow-up" class="w-3.5 h-3.5"></i>
                    </button>
                </div>

            </div>
        </footer>
        `;
    }
}
customElements.define('campaign-footer', CampaignFooter);
