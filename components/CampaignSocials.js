class CampaignSocials extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="redes" class="py-24 px-6 relative border-t border-white/5">
            <div class="max-w-7xl mx-auto">
                <!-- Section Title -->
                <div class="text-center max-w-3xl mx-auto mb-16 reveal">
                    <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4">Comunidade Digital</h2>
                    <div class="w-12 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p class="text-gray-400 text-lg">Conecte-se com Guto Schiavetto nas redes sociais oficiais e acompanhe de perto o projeto de renovação para São Paulo e o Brasil.</p>
                </div>

                <!-- Bento Grid of Platforms -->
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    <!-- Card 1: Instagram (Grid span 7) -->
                    <a href="https://www.instagram.com/gutoschiavetto" target="_blank" class="md:col-span-7 group rounded-2xl border border-white/5 bg-gradient-to-tr from-cardBg via-cardBg to-[#2b1021] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-pink-500/20 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.15)] transition-all duration-300 reveal">
                        <div class="flex items-center gap-5">
                            <div class="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <img src="./perfil.jpg" alt="Guto Schiavetto" class="w-full h-full object-cover">
                                <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white border border-[#161616]">
                                    <i data-lucide="instagram" class="w-3 h-3 fill-white"></i>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-display font-bold text-xl text-white group-hover:text-pink-400 transition-colors duration-200">@gutoschiavetto</h3>
                                <p class="text-gray-400 text-sm mt-1 leading-relaxed">Acompanhe nosso dia a dia, análises técnicas e bastidores da campanha.</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center gap-1 text-xs font-semibold text-pink-500 uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0">
                            Seguir Perfil <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                        </span>
                    </a>

                    <!-- Card 2: YouTube (Grid span 5) -->
                    <a href="https://www.youtube.com/@gutoschiavetto" target="_blank" class="md:col-span-5 group rounded-2xl border border-white/5 bg-gradient-to-tr from-cardBg via-cardBg to-[#2b0e0e] p-8 flex flex-col items-start justify-between gap-8 hover:border-red-600/20 hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.15)] transition-all duration-300 reveal">
                        <div class="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:scale-110 transition-transform duration-300">
                            <img src="./perfil.jpg" alt="Guto Schiavetto" class="w-full h-full object-cover">
                            <div class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white border border-[#161616]">
                                <i data-lucide="youtube" class="w-2.5 h-2.5 fill-white"></i>
                            </div>
                        </div>
                        <div class="mt-auto">
                            <h3 class="font-display font-bold text-lg text-white group-hover:text-red-400 transition-colors duration-200">@gutoschiavetto</h3>
                            <p class="text-gray-400 text-sm mt-1 leading-relaxed">Videos shorts e lives com análises políticas.</p>
                        </div>
                    </a>

                    <!-- Card 3: WhatsApp (Grid span 5) -->
                    <a href="https://chat.whatsapp.com/Kb2iiO6dWY1190SVfZRiuE?s=cl&p=a&ilr=0" target="_blank" class="md:col-span-5 group rounded-2xl border border-white/5 bg-gradient-to-tr from-cardBg via-cardBg to-[#0a2717] p-8 flex flex-col items-start justify-between gap-8 hover:border-green-500/20 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.15)] transition-all duration-300 reveal">
                        <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform duration-300">
                            <i data-lucide="message-circle" class="w-6 h-6"></i>
                        </div>
                        <div class="mt-auto">
                            <h3 class="font-display font-bold text-lg text-white group-hover:text-green-400 transition-colors duration-200">Comunidade Oficial no WhatsApp</h3>
                            <p class="text-gray-400 text-sm mt-1 leading-relaxed">Receba notícias, novidades e materiais oficiais em tempo real.</p>
                        </div>
                    </a>

                    <!-- Card 4: TikTok / X / Outros (Grid span 7) -->
                    <div class="md:col-span-7 rounded-2xl border border-white/5 bg-cardBg/30 backdrop-blur-md p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center reveal">
                        
                        <!-- Mini Link 1 (TikTok) -->
                        <a href="https://www.tiktok.com/@gutoschiavetto" target="_blank" class="group flex items-center gap-4 hover:-translate-y-0.5 transition-transform duration-200">
                            <div class="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 group-hover:border-white/20 transition-all duration-200">
                                <img src="./perfil.jpg" alt="Guto Schiavetto" class="w-full h-full object-cover">
                                <div class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-black flex items-center justify-center text-white border border-[#161616]">
                                    <i data-lucide="music" class="w-2.5 h-2.5 text-primary fill-current"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-white group-hover:text-primary transition-colors duration-200">TikTok</h4>
                                <span class="text-xs text-gray-500 block leading-tight mt-0.5">Vídeos rápidos com conteúdo sobre política.</span>
                            </div>
                        </a>

                        <!-- Mini Link 2 (X / Twitter) -->
                        <a href="https://x.com/guto_schiavetto" target="_blank" class="group flex items-center gap-4 hover:-translate-y-0.5 transition-transform duration-200">
                            <div class="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 group-hover:border-white/20 transition-all duration-200">
                                <img src="./perfil.jpg" alt="Guto Schiavetto" class="w-full h-full object-cover">
                                <div class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#1da1f2] flex items-center justify-center text-white border border-[#161616]">
                                    <i data-lucide="twitter" class="w-2.5 h-2.5 fill-white"></i>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-white group-hover:text-primary transition-colors duration-200">X (Twitter)</h4>
                                <span class="text-xs text-gray-500 block leading-tight mt-0.5">Minhas opiniões sobre o cenário político.</span>
                            </div>
                        </a>

                    </div>

                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('campaign-socials', CampaignSocials);
