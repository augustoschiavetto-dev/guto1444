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
