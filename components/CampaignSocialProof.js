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
