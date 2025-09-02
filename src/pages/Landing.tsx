import { Button } from "@/components/ui/button-variants"
import { ArrowRight, Search, Calendar, VideoIcon, Shield, CheckCircle, Star, Heart, Home } from "lucide-react"
import { useNavigate } from "react-router-dom"
import heroImage from "@/assets/hero-dinddo.jpg"

export default function Landing() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full px-4 py-4 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Dinddo</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Para Profissionais
            </Button>
            <Button variant="outline" size="sm">
              Entrar
            </Button>
          </div>
        </div>
      </nav>

      {/* Seção 1: Herói - A Primeira Impressão */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Saúde familiar com a{" "}
                <span className="text-primary">confiança</span> que você merece
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conectamos você aos melhores pediatras e especialistas, validados um a um. 
                Atendimento online ou no conforto da sua casa.
              </p>
            </div>

            <div className="space-y-4">
              <Button variant="warm" size="xl" className="group" onClick={handleGetStarted}>
                Encontrar meu especialista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slideUp">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="Mãe sorrindo tranquila com seu bebê enquanto uma pediatra amigável interage com a criança em ambiente doméstico acolhedor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Como Funciona - A Promessa de Simplicidade */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Cuidado de qualidade em 3 passos simples
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Passo 1 */}
            <div className="text-center space-y-6 animate-slideUp">
              <div className="mx-auto w-20 h-20 bg-gradient-trust rounded-2xl flex items-center justify-center shadow-trust relative">
                <Search className="h-8 w-8 text-trust-foreground" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-warm-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">1. Busque com Confiança</h3>
                <p className="text-muted-foreground">
                  Descreva o que precisa e encontre uma lista de especialistas 100% validados pela nossa rigorosa curadoria.
                </p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="text-center space-y-6 animate-slideUp">
              <div className="mx-auto w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-card relative">
                <Calendar className="h-8 w-8 text-white" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center">
                  <span className="text-warm-foreground text-xs font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">2. Agende na Hora</h3>
                <p className="text-muted-foreground">
                  Veja a agenda real do profissional, escolha o melhor horário para você e faça o pagamento online com total segurança.
                </p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="text-center space-y-6 animate-slideUp">
              <div className="mx-auto w-20 h-20 bg-gradient-warm rounded-2xl flex items-center justify-center shadow-card relative">
                <div className="relative">
                  <VideoIcon className="h-6 w-6 text-warm-foreground" />
                  <Home className="h-4 w-4 text-warm-foreground absolute -bottom-1 -right-1" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-trust rounded-full flex items-center justify-center">
                  <span className="text-trust-foreground text-xs font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">3. Receba o Cuidado</h3>
                <p className="text-muted-foreground">
                  Realize sua consulta por vídeo ou receba o especialista no conforto do seu lar, sem estresse e sem sala de espera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Diferenciais - Por que Somos a Melhor Escolha */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative animate-slideUp">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <img 
                src="/assets/dr-carlos-andrade.jpg" 
                alt="Médico sorrindo com selo de Curadoria Dinddo Aprovado"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Selo sobreposto */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-trust text-trust-foreground px-4 py-2 rounded-full font-semibold shadow-trust flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Curadoria Dinddo Aprovado</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Não é uma lista.{" "}
                <span className="text-primary">É uma rede de confiança.</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Sua tranquilidade é nossa prioridade. Por isso, nosso processo vai além do básico:
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-trust flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Validação de Credenciais</h4>
                  <p className="text-muted-foreground">Verificamos o CRM, RQE e todo o histórico profissional.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-trust flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Entrevista com Especialistas</h4>
                  <p className="text-muted-foreground">Nossa equipe de saúde entrevista cada candidato para garantir um perfil técnico e humano de excelência.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-trust flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Foco em Cuidado Humanizado</h4>
                  <p className="text-muted-foreground">Selecionamos profissionais que oferecem uma experiência de cuidado, não apenas uma consulta.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-trust flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Zero Perfis Falsos ou Desatualizados</h4>
                  <p className="text-muted-foreground">Nossa rede é ativa e constantemente avaliada pela comunidade e por nossa equipe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Prova Social - A Voz de Outras Mães */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Quem usa, recomenda
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-card p-6 rounded-2xl shadow-soft animate-slideUp">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warm text-warm" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Finalmente encontrei um pediatra que me ouviu e respeitou minhas decisões como mãe, sem julgamentos. A tranquilidade de saber que ele foi validado pela Dinddo não tem preço."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">CR</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Camila R.</p>
                  <p className="text-sm text-muted-foreground">mãe do Theo</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-card p-6 rounded-2xl shadow-soft animate-slideUp">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warm text-warm" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Meu filho acordou com febre e consegui uma teleconsulta para uma hora depois. Fugir do pronto-socorro e ter essa paz de espírito foi incrível."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-trust rounded-full flex items-center justify-center">
                  <span className="text-trust-foreground font-semibold">JF</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Juliana F.</p>
                  <p className="text-sm text-muted-foreground">mãe da Luísa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: CTA Final - O Convite para a Ação */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Pronta para experimentar um novo nível de cuidado?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Junte-se a centenas de famílias e tenha a paz de espírito que só uma rede de especialistas curados pode oferecer.
          </p>
          <Button variant="warm" size="xl" className="group bg-white text-primary hover:bg-white/90" onClick={handleGetStarted}>
            Começar agora
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  )
}