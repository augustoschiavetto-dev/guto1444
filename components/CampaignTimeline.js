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
                    
                    <!-- Node 1 (Left) -->
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

                    <!-- Node 2 (Right) -->
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

                    <!-- Node 3 (Left) -->
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

                    <!-- Node 4 (Right) -->
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

                    <!-- Node 5 (Left) -->
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

                    <!-- Node 6 (Right) -->
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
