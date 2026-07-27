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
