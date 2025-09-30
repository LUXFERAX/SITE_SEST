import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Palette, Leaf, Mail, Phone, MapPin as MapPinIcon, ArrowRight, Building2, Users, Award } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Navegação suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Detectar seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'projetos', 'sobre', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animações
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-white font-bold">
                  <div className="flex items-center justify-center space-x-1">
                    <div className="w-4 h-4 bg-blue-300 rounded transform rotate-45"></div>
                    <div className="w-4 h-4 bg-cyan-300 rounded transform -rotate-12"></div>
                  </div>
                </div>
              </div>
              <span className="text-2xl font-bold text-slate-800">CYBERLOCK</span>
            </div>

            {/* Menu da área de trabalho */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: 'projetos', label: 'Serviços' },
                { id: 'sobre', label: 'Sobre' },
                { id: 'contato', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all"
              >
                Fale conosco
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              {[
                { id: 'projetos', label: 'Serviços' },
                { id: 'sobre', label: 'Sobre' },
                { id: 'contato', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contato')}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all"
              >
                Fale conosco
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="text-cyan-400">CYBERLOCK</span><br />
              Projetos que se destacam<br />
              no horizonte
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A CYBERLOCK é uma empresa de serviços digitais que combina inovação 
              e excelência tecnológica em cada projeto
            </p>
            <button 
              onClick={() => scrollToSection('projetos')}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              Conheça nossos serviços
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DIFERENCIAIS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O que nos torna únicos no mercado imobiliário
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Desenvolvimento Web",
                description: "Criamos sites e aplicações web modernas, responsivas e otimizadas para oferecer a melhor experiência aos seus usuários."
              },
              {
                icon: Users,
                title: "Apps Mobile",
                description: "Desenvolvemos aplicativos móveis nativos e híbridos para iOS e Android, conectando sua marca aos clientes."
              },
              {
                icon: Award,
                title: "Transformação Digital",
                description: "Consultoria especializada para digitalizar processos e implementar soluções tecnológicas inovadoras em sua empresa."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-cyan-500 transition-all">
                  <item.icon className="text-blue-600 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO PROJETOS */}
      <section id="projetos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Nossos Projetos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empreendimentos que redefinem o conceito de morar bem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
                title: "E-commerce Moderno",
                description: "Plataforma de vendas online completa com sistema de pagamento integrado e painel administrativo avançado."
              },
              {
                image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
                title: "App de Delivery",
                description: "Aplicativo móvel para delivery com geolocalização, pagamento online e sistema de avaliações em tempo real."
              },
              {
                image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
                title: "Sistema Corporativo",
                description: "Dashboard empresarial com análise de dados, relatórios automatizados e integração com APIs externas."
              }
            ].map((project, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Sobre a CYBERLOCK
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fundada com a visão de transformar o mundo digital, a CYBERLOCK é uma empresa de tecnologia 
                que combina criatividade, inovação e excelência técnica em cada projeto.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nossa experiência no desenvolvimento de soluções digitais nos permite 
                entregar projetos que não apenas atendem, mas superam as expectativas 
                dos nossos clientes.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg mb-2 mx-auto">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-slate-800">100+</div>
                  <div className="text-sm text-gray-600">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg mb-2 mx-auto">
                    <Users className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-slate-800">200+</div>
                  <div className="text-sm text-gray-600">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg mb-2 mx-auto">
                    <Award className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-slate-800">15+</div>
                  <div className="text-sm text-gray-600">Prêmios</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Projeto Acadêmico
                </h3>
                <p className="text-gray-600 text-sm">
                  Esta apresentação foi desenvolvida por um grupo de alunos do 
                  <strong className="text-blue-600"> SEST SENAT - MT Cuiabá</strong> como 
                  projeto de conclusão do curso de desenvolvimento web.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop"
                alt="Sobre a CYBERLOCK"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl flex items-center justify-center shadow-xl">
                <div className="text-white font-bold text-lg">
                  <div className="flex items-center justify-center space-x-1">
                    <div className="w-8 h-8 bg-blue-400 rounded transform rotate-45"></div>
                    <div className="w-8 h-8 bg-cyan-400 rounded transform -rotate-12"></div>
                  </div>
                </div>
              </div>
            </div>
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
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white h-fit">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
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
                    <Phone className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Telefone</h4>
                      <p className="text-gray-300">(65) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">E-mail</h4>
                      <p className="text-gray-300">contato@cyberlock.com.br</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <img 
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                    alt="Localização CYBERLOCK"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Logo e descrição */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <div className="text-white font-bold">
                    <div className="flex items-center justify-center space-x-1">
                      <div className="w-4 h-4 bg-blue-300 rounded transform rotate-45"></div>
                      <div className="w-4 h-4 bg-cyan-300 rounded transform -rotate-12"></div>
                    </div>
                  </div>
                </div>
                <span className="text-2xl font-bold">CYBERLOCK</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Construindo o futuro digital através de soluções tecnológicas inovadoras 
                que transformam negócios e conectam pessoas.
              </p>
            </div>

            {/* Links rápidos */}
            <div>
              <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Serviços', id: 'projetos' },
                  { label: 'Sobre', id: 'sobre' },
                  { label: 'Contato', id: 'contato' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Criadores */}
            <div>
              <h3 className="text-xl font-bold mb-6">Criadores</h3>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center border-2 border-cyan-400">
                  <span className="text-white font-bold text-xl">JN</span>
                </div>
                <div>
                  <h4 className="font-semibold">João Felipe Nevs</h4>
                  <p className="text-gray-400 text-sm">Desenvolvimento e Design</p>
                  <p className="text-gray-500 text-xs mt-1">SEST SENAT - MT Cuiabá</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © CYBERLOCK 2025. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;