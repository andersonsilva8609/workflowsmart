import { useEffect, useRef, useState } from 'react';
import { 
  Zap, 
  Workflow, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Shield,
  MessageSquare,
  Cpu,
  Layers,
  Sparkles,
  Play,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer para animações
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-wfs-dark text-white overflow-x-hidden">
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-wfs-dark/90 backdrop-blur-xl border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-wfs-green to-wfs-blue rounded-lg flex items-center justify-center">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-wfs-orange rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-wfs-blue-light">Work</span>
              <span className="text-wfs-green">Flow</span>
              <span className="text-wfs-orange">Smart</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('servicos')} className="text-sm text-gray-400 hover:text-wfs-green transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('n8n')} className="text-sm text-gray-400 hover:text-wfs-green transition-colors">
              n8n
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-sm text-gray-400 hover:text-wfs-green transition-colors">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-sm text-gray-400 hover:text-wfs-green transition-colors">
              Contato
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contato')}
            className="bg-gradient-to-r from-wfs-green to-wfs-green-light text-black font-semibold hover:opacity-90 transition-opacity"
          >
            Começar Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wfs-green/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-wfs-blue/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wfs-orange/10 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <Badge className="mb-6 bg-wfs-green/10 text-wfs-green border-wfs-green/30 px-4 py-2 text-sm animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2" />
              Automação Inteligente com Agentes Digitais
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white">Deixe os</span>
              <span className="block text-gradient">robôs trabalharem</span>
              <span className="block text-white">por você!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Automatizamos seus processos com <span className="text-wfs-orange font-semibold">agentes digitais</span> integrados ao <span className="text-wfs-green font-semibold">n8n</span>. 
              Mais eficiência, menos trabalho manual, resultados absurdos!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg"
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-to-r from-wfs-orange to-wfs-orange-light text-black font-bold text-lg px-8 py-6 hover:scale-105 transition-transform glow-orange"
              >
                Quero Automatizar!
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('servicos')}
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Como Funciona
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {[
                { value: '500+', label: 'Processos Automatizados' },
                { value: '10x', label: 'Mais Produtividade' },
                { value: '80%', label: 'Economia de Tempo' },
                { value: '24/7', label: 'Disponibilidade' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-wfs-green" />
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-32 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wfs-blue/10 rounded-full blur-[200px]" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-4 bg-wfs-orange/10 text-wfs-orange border-wfs-orange/30">
              <Zap className="w-4 h-4 mr-2" />
              Nossos Serviços
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              O que a gente faz de <span className="text-gradient">incrível</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transformamos tarefas chatas em processos automáticos. Seu time vai agradecer!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: 'Agentes Digitais',
                description: 'Criamos bots inteligentes que conversam, processam e tomam decisões automaticamente.',
                color: 'green',
              },
              {
                icon: Workflow,
                title: 'Fluxos Automatizados',
                description: 'Conectamos todos os seus sistemas em workflows que funcionam sozinhos, 24/7.',
                color: 'orange',
              },
              {
                icon: MessageSquare,
                title: 'Chatbots Avançados',
                description: 'Atendimento automático com IA que entende contexto e resolve problemas reais.',
                color: 'blue',
              },
              {
                icon: Layers,
                title: 'Integrações',
                description: 'Conectamos qualquer ferramenta: CRM, ERP, planilhas, APIs... Tudo conversando!',
                color: 'green',
              },
              {
                icon: Cpu,
                title: 'Processamento de Dados',
                description: 'Extração, transformação e análise automática de dados em escala.',
                color: 'orange',
              },
              {
                icon: Shield,
                title: 'Monitoramento',
                description: 'Acompanhamos tudo em tempo real. Se der problema, resolvemos na hora!',
                color: 'blue',
              },
            ].map((service, index) => (
              <div 
                key={index}
                className="group glass rounded-2xl p-8 card-glow hover:border-wfs-green/30 transition-all duration-500 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-wfs-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 text-wfs-${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center text-wfs-green opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Saiba mais</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* n8n Section */}
      <section id="n8n" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-wfs-dark via-wfs-gray to-wfs-dark" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-wfs-green/10 rounded-full blur-[200px] -translate-y-1/2" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <Badge className="mb-4 bg-wfs-green/10 text-wfs-green border-wfs-green/30">
                <Cpu className="w-4 h-4 mr-2" />
                Tecnologia n8n
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A magia acontece com o <span className="text-wfs-green">n8n</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                O n8n é a ferramenta de automação mais poderosa do mercado. E a gente é mestre nela!
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: '400+ Integrações Prontas',
                    description: 'Conecte qualquer ferramenta em minutos, não em dias.',
                  },
                  {
                    title: 'Código Quando Precisar',
                    description: 'Fluxos visuais + JavaScript/Python para casos complexos.',
                  },
                  {
                    title: 'Self-hosted ou Cloud',
                    description: 'Sua automação, do seu jeito. Total controle e segurança.',
                  },
                  {
                    title: 'Escalabilidade Garantida',
                    description: 'De 100 a 1 milhão de execuções, sem travar.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-wfs-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-wfs-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                size="lg"
                onClick={() => scrollToSection('contato')}
                className="mt-10 bg-wfs-green text-black font-bold hover:bg-wfs-green-light"
              >
                Falar com Especialista
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="relative animate-on-scroll">
              <div className="relative glass rounded-3xl p-8 glow-green">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-gray-500">workflow_automation.json</span>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-wfs-green/10 border border-wfs-green/30">
                    <div className="w-8 h-8 rounded bg-wfs-green/20 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-wfs-green" />
                    </div>
                    <div className="flex-1">
                      <div className="text-wfs-green font-semibold">Trigger: Webhook</div>
                      <div className="text-gray-500">Recebe dados do formulário</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-wfs-green/30" />
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-wfs-blue/10 border border-wfs-blue/30">
                    <div className="w-8 h-8 rounded bg-wfs-blue/20 flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-wfs-blue-light" />
                    </div>
                    <div className="flex-1">
                      <div className="text-wfs-blue-light font-semibold">Process: AI Agent</div>
                      <div className="text-gray-500">Analisa e classifica lead</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-wfs-orange/30" />
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-wfs-orange/10 border border-wfs-orange/30">
                    <div className="w-8 h-8 rounded bg-wfs-orange/20 flex items-center justify-center">
                      <Layers className="w-4 h-4 text-wfs-orange" />
                    </div>
                    <div className="flex-1">
                      <div className="text-wfs-orange font-semibold">Action: Multi-integração</div>
                      <div className="text-gray-500">CRM + Email + Slack</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-20 h-20 bg-wfs-green rounded-full flex items-center justify-center animate-pulse-glow">
                  <Zap className="w-10 h-10 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-32 relative">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-wfs-orange/10 rounded-full blur-[200px] -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-on-scroll">
            <Badge className="mb-4 bg-wfs-blue/10 text-wfs-blue-light border-wfs-blue/30">
              <TrendingUp className="w-4 h-4 mr-2" />
              Resultados Reais
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Por que <span className="text-gradient">automatizar</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Os números não mentem. Veja o que nossos clientes conquistaram:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: 'Economia de Tempo',
                value: '80%',
                description: 'Reduza tarefas manuais e libere seu time para o que importa.',
                color: 'green',
              },
              {
                icon: TrendingUp,
                title: 'Aumento de Produtividade',
                value: '10x',
                description: 'Processos que levavam dias, agora acontecem em segundos.',
                color: 'orange',
              },
              {
                icon: Shield,
                title: 'Zero Erros',
                value: '99.9%',
                description: 'Automação não dorme, não distrai e não erra.',
                color: 'blue',
              },
              {
                icon: Zap,
                title: 'ROI Rápido',
                value: '3x',
                description: 'Retorno do investimento em até 3 meses.',
                color: 'green',
              },
            ].map((benefit, index) => (
              <div 
                key={index}
                className="relative group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass rounded-2xl p-8 h-full hover:border-wfs-green/30 transition-all duration-500">
                  <div className={`text-5xl font-bold text-wfs-${benefit.color} mb-4`}>
                    {benefit.value}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                  <div className={`w-12 h-12 rounded-xl bg-wfs-${benefit.color}/10 flex items-center justify-center mt-6`}>
                    <benefit.icon className={`w-6 h-6 text-wfs-${benefit.color}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-wfs-green/20 via-wfs-blue/20 to-wfs-orange/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wfs-green/10 rounded-full blur-[200px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Pronto para <span className="text-gradient">revolucionar</span> seus processos?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Não deixe sua concorrência te ultrapassar. Automatize agora e veja sua produtividade explodir!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-to-r from-wfs-green to-wfs-green-light text-black font-bold text-lg px-10 py-7 hover:scale-105 transition-transform glow-green"
              >
                Quero Começar Agora!
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-gray-500">
              Consultoria gratuita • Orçamento em 24h • Sem compromisso
            </p>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-on-scroll">
              <Badge className="mb-4 bg-wfs-orange/10 text-wfs-orange border-wfs-orange/30">
                <MessageSquare className="w-4 h-4 mr-2" />
                Vamos Conversar
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bora <span className="text-wfs-orange">automatizar</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Conta pra gente o que você precisa. Em 24h te mandamos uma proposta irrecusável!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-wfs-green/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-wfs-green" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-lg font-semibold">contato@workflowsmart.com.br</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-wfs-blue/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-wfs-blue-light" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">WhatsApp</div>
                    <div className="text-lg font-semibold">+55 (11) 96362-0903</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-wfs-orange/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-wfs-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Localização</div>
                    <div className="text-lg font-semibold">São Paulo, SP - Brasil</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-wfs-green/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-wfs-green" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-wfs-orange/20 transition-colors">
                  <Instagram className="w-6 h-6 text-wfs-orange" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-wfs-blue/20 transition-colors">
                  <Twitter className="w-6 h-6 text-wfs-blue-light" />
                </a>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 animate-on-scroll">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-wfs-green focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Empresa</label>
                    <input 
                      type="text" 
                      placeholder="Sua empresa"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-wfs-green focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-wfs-green focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="(11) 99999-9999"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-wfs-green focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Conte-nos sobre seu projeto</label>
                  <textarea 
                    rows={4}
                    placeholder="O que você quer automatizar?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-wfs-green focus:outline-none transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-wfs-orange to-wfs-orange-light text-black font-bold text-lg py-6 hover:opacity-90 transition-opacity"
                >
                  Enviar Mensagem
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-wfs-green to-wfs-blue rounded-lg flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">
                  <span className="text-wfs-blue-light">Work</span>
                  <span className="text-wfs-green">Flow</span>
                  <span className="text-wfs-orange">Smart</span>
                </span>
              </div>
              <p className="text-gray-400 max-w-md mb-6">
                Transformamos empresas através da automação inteligente. 
                Agentes digitais + n8n = produtividade sem limites.
              </p>
              <p className="text-sm text-gray-500">
                © 2025 Work Flow Smart. Todos os direitos reservados.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('servicos')} className="text-gray-400 hover:text-wfs-green transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollToSection('n8n')} className="text-gray-400 hover:text-wfs-green transition-colors">Sobre o n8n</button></li>
                <li><button onClick={() => scrollToSection('beneficios')} className="text-gray-400 hover:text-wfs-green transition-colors">Benefícios</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="text-gray-400 hover:text-wfs-green transition-colors">Contato</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-wfs-green transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-wfs-green transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 text-sm">
              Feito com <span className="text-wfs-green">💚</span> e muita <span className="text-wfs-orange">automação</span> no Brasil
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
