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
