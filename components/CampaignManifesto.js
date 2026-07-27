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
