class CampaignEmissary extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="emissario" class="py-24 px-6 relative border-t border-white/5">
            <div class="max-w-7xl mx-auto">
                <!-- Top Header -->
                <div class="text-center max-w-3xl mx-auto mb-16 reveal">
                    <span class="text-xs font-bold uppercase tracking-widest text-primary mb-3">Junte-se à Rede</span>
                    <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4">
                        Multiplique esta ideia.
                    </h2>
                    <p class="text-gray-400 text-lg leading-relaxed">
                        A verdadeira renovação é descentralizada. Una-se à rede de Emissários e ajude a levar propostas técnicas e éticas mais longe utilizando o ambiente digital.
                    </p>
                </div>

                <!-- Main Grid: Col 1 (Details, Process & FAQ) | Col 2 (Form) -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    <!-- Left: Benefits, Process and FAQ Accordion -->
                    <div class="lg:col-span-6 flex flex-col gap-10 reveal">
                        
                        <!-- Step Process -->
                        <div>
                            <h3 class="font-display font-bold text-xl text-white mb-6">Como funciona a jornada:</h3>
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div class="p-4 rounded-xl border border-white/5 bg-white/5 relative">
                                    <span class="text-xs font-bold text-primary block mb-1">Passo 01</span>
                                    <span class="text-xs font-semibold text-white block mb-1">Cadastro</span>
                                    <span class="text-[10px] text-gray-500 block">Inscreva seus dados básicos no formulário ao lado de forma segura.</span>
                                </div>
                                <div class="p-4 rounded-xl border border-white/5 bg-white/5 relative">
                                    <span class="text-xs font-bold text-primary block mb-1">Passo 02</span>
                                    <span class="text-xs font-semibold text-white block mb-1">Conexão</span>
                                    <span class="text-[10px] text-gray-500 block">Receba as orientações e seja integrado ao grupo oficial de coordenação.</span>
                                </div>
                                <div class="p-4 rounded-xl border border-white/5 bg-white/5 relative">
                                    <span class="text-xs font-bold text-primary block mb-1">Passo 03</span>
                                    <span class="text-xs font-semibold text-white block mb-1">Divulgação</span>
                                    <span class="text-[10px] text-gray-500 block">Compartilhe materiais oficiais e participe da nossa rede orgânica.</span>
                                </div>
                            </div>
                        </div>

                        <!-- Benefits checklist -->
                        <div>
                            <h3 class="font-display font-bold text-xl text-white mb-4">Vantagens de ser Emissário:</h3>
                            <div class="flex flex-col gap-4 w-full">
                                <div class="flex gap-3">
                                    <div class="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                                        <i data-lucide="check" class="w-3 h-3"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-semibold text-white">Acesso a Conteúdo Oficial</h4>
                                        <p class="text-gray-400 text-xs mt-0.5">Receba em primeira mão materiais exclusivos e dados de propostas de campanha.</p>
                                    </div>
                                </div>

                                <div class="flex gap-3">
                                    <div class="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                                        <i data-lucide="check" class="w-3 h-3"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-semibold text-white">Comunidade Ativa</h4>
                                        <p class="text-gray-400 text-xs mt-0.5">Participe de discussões sobre propostas de transparência e gestão com outros voluntários.</p>
                                    </div>
                                </div>

                                <div class="flex gap-3">
                                    <div class="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                                        <i data-lucide="check" class="w-3 h-3"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-semibold text-white">Contato Direto</h4>
                                        <p class="text-gray-400 text-xs mt-0.5">Acesso aos canais oficiais de comunicação para sugerir melhorias no projeto de mandato.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- FAQ Accordion -->
                        <div>
                            <h3 class="font-display font-bold text-xl text-white mb-6">Dúvidas Frequentes (FAQ):</h3>
                            <div class="flex flex-col gap-3">
                                
                                <!-- FAQ 1 -->
                                <div class="faq-item border border-white/5 bg-cardBg/20 rounded-xl overflow-hidden">
                                    <button type="button" class="faq-trigger w-full px-5 py-4 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-primary transition-colors focus:outline-none">
                                        <span>Quem é Guto Schiavetto?</span>
                                        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-500 transition-transform duration-300"></i>
                                    </button>
                                    <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                        <p class="px-5 pb-4 text-xs text-gray-400 leading-relaxed">
                                            Guto é cientista da computação graduado pela PUC-SP, empreendedor comercial e ex-diretor de Educação Ambiental. Possui formação continuada em Gestão Pública pela FATEC/Univesp e foi selecionado pela escola de liderança política RenovaBR.
                                        </p>
                                    </div>
                                </div>

                                <!-- FAQ 2 -->
                                <div class="faq-item border border-white/5 bg-cardBg/20 rounded-xl overflow-hidden">
                                    <button type="button" class="faq-trigger w-full px-5 py-4 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-primary transition-colors focus:outline-none">
                                        <span>Como o voluntariado de Emissário ajuda na prática?</span>
                                        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-500 transition-transform duration-300"></i>
                                    </button>
                                    <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                        <p class="px-5 pb-4 text-xs text-gray-400 leading-relaxed">
                                            Os emissários formam uma rede digital orgânica e de baixo custo. Compartilhando dados técnicos e materiais nas redes, combatemos as estruturas milionárias das campanhas tradicionais com voluntariado consciente.
                                        </p>
                                    </div>
                                </div>

                                <!-- FAQ 3 -->
                                <div class="faq-item border border-white/5 bg-cardBg/20 rounded-xl overflow-hidden">
                                    <button type="button" class="faq-trigger w-full px-5 py-4 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-primary transition-colors focus:outline-none">
                                        <span>Qual é a preparação do candidato para atuar como Deputado Federal?</span>
                                        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-500 transition-transform duration-300"></i>
                                    </button>
                                    <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                        <p class="px-5 pb-4 text-xs text-gray-400 leading-relaxed">
                                            Guto une a experiência prática do varejo privado à gestão pública orientada por dados do Executivo. Cursou Gestão Pública na Univesp e se formou no RenovaBR para obter o embasamento técnico necessário para legislar com eficiência.
                                        </p>
                                    </div>
                                </div>

                                <!-- FAQ 4 -->
                                <div class="faq-item border border-white/5 bg-cardBg/20 rounded-xl overflow-hidden">
                                    <button type="button" class="faq-trigger w-full px-5 py-4 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-primary transition-colors focus:outline-none">
                                        <span>Quais foram seus principais resultados na gestão municipal?</span>
                                        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-500 transition-transform duration-300"></i>
                                    </button>
                                    <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                        <p class="px-5 pb-4 text-xs text-gray-400 leading-relaxed">
                                            Destacam-se o desenvolvimento do aplicativo de Censo Arbóreo Digital em parceria com a UNICAMP (76 mil árvores mapeadas), a manutenção de Limeira no Top 35 de Sustentabilidade de SP e ações de solidariedade para apoiar 142 famílias.
                                        </p>
                                    </div>
                                </div>

                                <!-- FAQ 5 -->
                                <div class="faq-item border border-white/5 bg-cardBg/20 rounded-xl overflow-hidden">
                                    <button type="button" class="faq-trigger w-full px-5 py-4 flex items-center justify-between text-left text-sm font-semibold text-white hover:text-primary transition-colors focus:outline-none">
                                        <span>Onde posso acessar a prestação de contas dos recursos doados?</span>
                                        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-500 transition-transform duration-300"></i>
                                    </button>
                                    <div class="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                        <p class="px-5 pb-4 text-xs text-gray-400 leading-relaxed">
                                            Todos os recursos da vaquinha são homologados, registrados e declarados oficialmente sob as diretrizes e resoluções de transparência do Tribunal Superior Eleitoral (TSE).
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <!-- Right: Form (Lead Generation) -->
                    <div class="lg:col-span-6 reveal">
                        <div class="p-8 sm:p-10 rounded-2xl border border-white/5 bg-cardBg/30 backdrop-blur-md shadow-2xl relative">
                            <form id="emissario-form" class="flex flex-col gap-6" novalidate>
                                
                                <!-- Input Name -->
                                <div class="flex flex-col">
                                    <label for="form-name" class="text-xs font-semibold text-gray-400 uppercase mb-2">Nome Completo</label>
                                    <input type="text" id="form-name" required class="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Digite seu nome completo">
                                    <span class="text-xs text-red-500 mt-1 hidden" id="err-name">Nome é obrigatório.</span>
                                </div>

                                <!-- Input Email -->
                                <div class="flex flex-col">
                                    <label for="form-email" class="text-xs font-semibold text-gray-400 uppercase mb-2">Endereço de E-mail</label>
                                    <input type="email" id="form-email" required class="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Ex: seuemail@dominio.com">
                                    <span class="text-xs text-red-500 mt-1 hidden" id="err-email">E-mail inválido.</span>
                                </div>

                                <!-- Input Phone (Whatsapp) -->
                                <div class="flex flex-col">
                                    <label for="form-phone" class="text-xs font-semibold text-gray-400 uppercase mb-2">WhatsApp / Telefone</label>
                                    <input type="tel" id="form-phone" required class="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="(00) 00000-0000">
                                    <span class="text-xs text-red-500 mt-1 hidden" id="err-phone">WhatsApp é obrigatório.</span>
                                </div>

                                <!-- Input Bairro -->
                                <div class="flex flex-col">
                                    <label for="form-district" class="text-xs font-semibold text-gray-400 uppercase mb-2">Bairro ou Região</label>
                                    <input type="text" id="form-district" required class="w-full bg-darkBg border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" placeholder="Ex: Vila Mariana, São Paulo">
                                    <span class="text-xs text-red-500 mt-1 hidden" id="err-district">Bairro é obrigatório.</span>
                                </div>

                                <!-- LGPD Checkbox -->
                                <div class="flex items-start gap-3 mt-2">
                                    <input type="checkbox" id="form-lgpd" required class="w-4 h-4 rounded border-white/10 bg-darkBg accent-primary text-darkBg focus:ring-0 focus:ring-offset-0 mt-1 cursor-pointer">
                                    <label for="form-lgpd" class="text-xs text-gray-400 leading-normal cursor-pointer select-none">
                                        Concordo em compartilhar meus dados para fins de comunicação oficial do mandato, conforme diretrizes da LGPD.
                                    </label>
                                </div>
                                <span class="text-xs text-red-500 hidden" id="err-lgpd">Você precisa concordar para continuar.</span>

                                <!-- Submit Button -->
                                <button type="submit" class="ripple-btn w-full py-4 bg-primary hover:bg-primaryDark text-darkBg font-bold text-base rounded-xl transition-all duration-300 shadow-glow hover:shadow-glowHover flex items-center justify-center gap-2 focus:ring-2 focus:ring-primary focus:outline-none mt-2">
                                    <span id="submit-btn-spinner" class="hidden w-4 h-4 border-2 border-darkBg border-t-transparent rounded-full animate-spin"></span>
                                    <span id="submit-btn-text">Quero ser um Emissário</span>
                                </button>

                            </form>

                            <!-- Success Feedback State Overlay -->
                            <div id="form-success-overlay" class="absolute inset-0 bg-darkBg/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-center p-8 hidden transition-all duration-500 opacity-0 scale-95 z-20">
                                <div class="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 animate-bounce">
                                    <i data-lucide="party-popper" class="w-8 h-8"></i>
                                </div>
                                <h3 class="font-display font-bold text-2xl text-white mb-2">Cadastro Realizado!</h3>
                                <p class="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed">
                                    Seus dados foram enviados com sucesso. Entraremos em contato via WhatsApp nas próximas horas para te passar os materiais e te adicionar no grupo de coordenação.
                                </p>
                                <button onclick="resetFormState();" class="ripple-btn px-6 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors duration-200">
                                    Voltar ao Formulário
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('campaign-emissary', CampaignEmissary);
