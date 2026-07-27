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

                    <!-- Card 5: Eixo 5 (Single width 1/3 - Full Span Mobile) -->
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

                    <!-- Card 6: Eixo 6 (Double width 2/3 - full row mobile or offset desktop) -->
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
