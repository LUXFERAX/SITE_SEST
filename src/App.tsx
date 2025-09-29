importar Reagir, { estado de uso, efeito de uso } de 'reagir';
importar { movimento } de 'movimento-de-quadro';
importar { Menu, X, MapaPin, Paleta, Folha, Correio, Telefone, MapaPin como Ícone de Alfinete de Mapa, Seta Direita, Edifício2, Usuários, Prêmio } de 'reação lúcida';

diversidade Aplicativo() {
  const [isMenuAbrir, setIsMenuAbrir] = estado de uso(falso);
  const [Seção ativa, definirSeçãoAtiva] = estado de uso('inicio');

  // Navegação suave
  const rugido parágrafo a sessão = (sessãoId: corda) => {
    const elemento = documento.obterElementoPorId(sessãoId);
    se (elemento) {
      const alta fazer caboçalho = 80;
      const elementoPosição = elemento.offsetTopo - alta fazer caboçalho;
      Janela.rugido parágrafo({
        topo: elementoPosição,
        comportamento: 'suave'
      });
    }
    setIsMenuAbrir(falso);
  };

  // Detectar seção ativa
  efeito de uso(() => {
    const lidar com rolagem = () => {
      const seções = ['inicio', 'projetos', 'sobre', 'contato'];
      const posição de rolagem = Janela.rolante + 100;

      parágrafo (const sessão de seções) {
        const elemento = documento.obterElementoPorId(sessão);
        se (elemento) {
          const { offsetTopo, alta de deslocamento } = elemento;
          se (posição de rolagem >= offsetTopo && posição de rolagem < offsetTopo + alta de deslocamento) {
            definirSeçãoAtiva(sessão);
            quebrar;
          }
        }
      }
    };

    Janela.addEventListener('rolar', lidar com rolagem);
    retornar () => Janela.removedorEventListener('rolar', lidar com rolagem);
  }, []);

  // Animações
  const fadeInUp = {
    inicial: { opacidade: 0, y: 60 },
    animar: { opacidade: 1, y: 0 },
    transição: { duração: 0,6 }
  };

  const contador de cambaleio = {
    animar: { transição: { cambalearCrianças: 0,1 } }
  };

  retornar (
    <dividir nome sim classe="min-h-screen bg-branco">
      {/* CABEÇALHO */}
      <caboçalho nome sim classe="fixo top-0 espada-0 direita-0 z-50 bg-branco/95 fundo-borrão-sm borda-b borda-cinza-100">
        <dividir nome sim classe="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dividir nome sim classe="justificação flexível entre itens-centro h-20">
            {/* Logotipo */}
            <dividir nome sim classe="itens flexíveis-espaço central-x-3">
              <imagem 
                fonte="/Design de logotipo de ensino dourado.png" 
                alt="Logotipo SKYLINE" 
                nome sim classe="w-16 h-16 objeto-contém arredondado-xl"
              />
              <extensão nome sim classe="texto-2xl fonte-negrito texto-ardósia-800">HORIZONTE</extensão>
            </dividir>

            {/* Menu da área de trabalho */}
            <navegação nome sim classe="md oculto: itens flexíveis-espaço central-x-8">
              {[
                { id: 'projetos', rótulo: 'Projetos' },
                { id: 'sobre', rótulo: 'Sobre' },
                { id: 'contato', rótulo: 'Contato' }
              ].mapa((item) => (
                <botão
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-sky-600 ${
                    activeSection === item.id ? 'text-sky-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-sky-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-sky-700 transition-colors"
              >
                Fale conosco
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-sky-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-3">
              {[
                { id: 'projetos', label: 'Projetos' },
                { id: 'sobre', label: 'Sobre' },
                { id: 'contato', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-sky-600 py-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contato')}
                className="w-full bg-sky-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-sky-700 transition-colors"
              >
                Fale conosco
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - TROQUE AQUI: Substitua pela sua imagem de fundo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="text-sky-400">CYBERLOCK</span><br />
              Projetos que se destacam<br />
              no horizonte
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Construímos empreendimentos únicos que transformam paisagens urbanas 
              e criam novos marcos na cidade
            </p>
            <button 
              onClick={() => scrollToSection('projetos')}
              className="bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-700 transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              Conheça nossos projetos
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DIFERENCIAIS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O que nos torna únicos no mercado imobiliário
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: MapPin,
                title: "Localização estratégica",
                description: "Nossos empreendimentos são estrategicamente posicionados nas melhores regiões da cidade, garantindo valorização constante."
              },
              {
                icon: Palette,
                title: "Design moderno",
                description: "Arquitetura contemporânea e inovadora, com projetos assinados pelos melhores escritórios do país."
              },
              {
                icon: Leaf,
                title: "Sustentabilidade",
                description: "Comprometimento com o meio ambiente através de tecnologias sustentáveis e práticas ecológicas em todos os projetos."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors">
                  <item.icon className="text-sky-600 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO PROJETOS */}
      <section id="projetos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Nossos Projetos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empreendimentos que redefinem o conceito de morar bem
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                // TROQUE AQUI: Substitua pelas imagens dos seus projetos
                image: "https://images.pexels.com/photos/1694360/pexels-photo-1694360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
                title: "Skyline Residencial",
                description: "Apartamentos de alto padrão com vista panorâmica da cidade. 3 e 4 quartos com acabamentos de primeira linha."
              },
              {
                // TROQUE AQUI: Substitua pelas imagens dos seus projetos
                image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
                title: "Skyline Corporate",
                description: "Salas comerciais modernas em uma das regiões mais valorizadas, ideal para empresas que buscam prestígio."
              },
              {
                // TROQUE AQUI: Substitua pelas imagens dos seus projetos
                image: "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
                title: "Skyline Garden",
                description: "Casas em condomínio fechado com amplas áreas verdes, oferecendo qualidade de vida e segurança."
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO SOBRE */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Sobre a SKYLINE
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fundada com a visão de transformar a paisagem urbana, a SKYLINE é uma construtora 
                que combina tradição, inovação e excelência em cada projeto.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nossa experiência de mais de duas décadas no mercado imobiliário nos permite 
                entregar empreendimentos que não apenas atendem, mas superam as expectativas 
                dos nossos clientes.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-sky-600 rounded-lg mb-2 mx-auto">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-slate-800">50+</div>
                  <div className="text-sm text-gray-600">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-sky-600 rounded-lg mb-2 mx-auto">
                    <Users className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-slate-800">5000+</div>
                  <div className="text-sm text-gray-600">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-sky-600 rounded-lg mb-2 mx-auto">
                    <Award className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-slate-800">20+</div>
                  <div className="text-sm text-gray-600">Prêmios</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* TROQUE AQUI: Substitua pela imagem sobre a empresa */}
              <img 
                src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop"
                alt="Sobre a SKYLINE"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-600 rounded-2xl flex items-center justify-center">
                <img 
                  src="/Golden building logo design.png" 
                  alt="SKYLINE Logo" 
                  className="w-24 h-24 object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO */}
      <section id="contato" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos prontos para realizar o seu próximo projeto
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent transition-all"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent transition-all"
                    placeholder="Digite seu e-mail"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent transition-all resize-none"
                    placeholder="Digite sua mensagem"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-sky-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
                >
                  Enviar mensagem
                </button>
              </form>
            </motion.div>

            {/* Informações de contato */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pl-8"
            >
              <div className="bg-slate-800 rounded-2xl p-8 text-white h-fit">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="text-sky-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Endereço</h4>
                      <p className="text-gray-300">
                        Av. Miguel Sutil, 8000 - Sala 1205<br />
                        Consil, Cuiabá - MT<br />
                        CEP: 78048-800
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="text-sky-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Telefone</h4>
                      <p className="text-gray-300">(65) 3000-0000</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-sky-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">E-mail</h4>
                      <p className="text-gray-300">contato@cyberlock.com.br</p>
                    </div>
                  </div>
                </div>

                {/* TROQUE AQUI: Substitua pelo mapa da sua localização */}
                <div className="mt-8">
                  <img 
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                    alt="Localização SKYLINE"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-slate-900 text-white py-16">
        <dividir nome sim classe="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dividir nome sim classe="grau md:grau-cols-3 lacuna-12">
            {/* Logotipo e descrição */}
            <dividir>
              <dividir nome sim classe="itens flexíveis-espaço central-x-3 mb-4">
                <imagem 
                  fonte="/Design de logotipo de ensino dourado.png" 
                  alt="Logotipo SKYLINE" 
                  nome sim classe="w-16 h-16 objeto-conter"
                />
                <extensão nome sim classe="texto-2xl fonte-negrito">HORIZONTE</extensão>
              </dividir>
              <p nome sim classe="texto-cinza-400 levando-relaxado">
 Construindo o futuro através de projetos inovadores que se desestacam 
 sem horizonte urbano.
              </p>
            </dividir>

            {/* Links rápidos */}
            <dividir>
              <h3 nome sim classe="texto-xl fonte-negrito mb-6">Links Rápidos</h3>
              <ul nome sim classe="espaço-y-3">
                {[
                  { rótulo: 'Projetos', id: 'projetos' },
                  { rótulo: 'Sobre', id: 'sobre' },
                  { rótulo: 'Contato', id: 'contato' }
                ].mapa((link) => (
                  <eu chave={link.id}>
                    <botão
                      ao clicar={() => rugido parágrafo a sessão(link.id)}
 nome da classe="text-gray-400 hover:text-sky-400 núcleos de transição"
                    >
                      {link.rótulo}
                    </botão>
                  </ue>
                ))}
              </ul>
            </dividir>

            {/* Criadores */}
            <dividir>
              <h3 nome sim classe="texto-xl fonte-negrito mb-6">Criadores</h3>
              <dividir nome sim classe="itens flexíveis-espaço central-x-4">
                {/* TROQUE AQUI: Substitua pela foto do criador */}
                <imagem nome sim classe="w-16 h-16 flex itens-centro justificar-centro arredondado-completo bg-cinza-300 borda-2 borda-ceu-400">
 fonteUser "bolha:https://web.whatsapp.com/bf412211-97a5-4386-a25a-4f48eee5818d"={32} className="texto-branco" />
</dividir>
 />
                <dividir>
                  <h4 nome sim classe="fonte-semibold">João Felipe Nevs</h4>
                  <p nome sim classe="texto-cinza-400 texto-sm">Desenvolvimento e Design</p>
                  <p nome sim classe="texto-cinza-500 texto-xs mt-1">SEST SENAT - MT Cuiabá</p>
                </dividir>
              </dividir>
            </dividir>
          </dividir>

          <dividir nome sim classe="border-t border-gray-700 mt-12 pt-8 centro de texto">
            <p nome sim classe="texto-cinza-400">
 © CYBERLOCK 2024. Todos os direitos reservados.
            </p>
          </dividir>
        </dividir>
      </rodapé>
    </dividir>
  );
}

exportar padrão Aplicativo;
