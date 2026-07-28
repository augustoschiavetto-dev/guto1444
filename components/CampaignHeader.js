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
