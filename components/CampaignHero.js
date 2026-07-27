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
                        <a href="#emissario" class="ripple-btn inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primaryDark text-darkBg font-bold text-base rounded-xl transition-all duration-300 shadow-glow hover:shadow-glowHover transform hover:-translate-y-0.5 focus:ring-2 focus:ring-primary focus:outline-none">
                            Seja um Emissário
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
