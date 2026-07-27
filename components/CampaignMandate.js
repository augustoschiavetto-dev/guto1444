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
