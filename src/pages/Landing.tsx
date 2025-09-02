import { Button } from "@/components/ui/button-variants"
import { TrustSection } from "@/components/TrustBadge"
import { ArrowRight, Users, Shield, Heart, Star } from "lucide-react"
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Saúde familiar com a{" "}
                <span className="text-primary">confiança</span> que você merece
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conectamos você aos melhores especialistas, validados um a um. 
                Atendimento online ou no conforto da sua casa.
              </p>
            </div>

            <div className="space-y-4">
              <Button variant="hero" size="xl" className="group" onClick={handleGetStarted}>
                Encontrar meu especialista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <TrustSection />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center animate-slideUp">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Especialistas</div>
              </div>
              <div className="text-center animate-slideUp">
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Famílias</div>
              </div>
              <div className="text-center animate-slideUp">
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <Star className="h-3 w-3 fill-warm text-warm" />
                  Avaliação
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slideUp">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="Mãe sorrindo com bebê e profissional de saúde ao fundo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-trust-light rounded-lg">
                  <Shield className="h-5 w-5 text-trust" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">100% Verificados</div>
                  <div className="text-sm text-muted-foreground">CRM e especialização</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Por que escolher a Dinddo?
            </h2>
            <p className="text-muted-foreground text-lg">
              Cuidado de qualidade com a conveniência que sua família precisa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center space-y-4 animate-slideUp">
              <div className="mx-auto w-16 h-16 bg-gradient-trust rounded-2xl flex items-center justify-center shadow-trust">
                <Shield className="h-8 w-8 text-trust-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Curadoria Rigorosa</h3>
              <p className="text-muted-foreground">
                Todos os profissionais passam por validação criteriosa de credenciais e experiência.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-4 animate-slideUp">
              <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-card">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Atendimento Flexível</h3>
              <p className="text-muted-foreground">
                Consultas online ou em casa, no horário que funciona para sua família.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-4 animate-slideUp">
              <div className="mx-auto w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center shadow-card">
                <Heart className="h-8 w-8 text-warm-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Cuidado Humanizado</h3>
              <p className="text-muted-foreground">
                Profissionais que entendem as necessidades únicas de cada família.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Pronta para começar?
          </h2>
          <p className="text-xl text-muted-foreground">
            Encontre o especialista ideal para sua família em poucos cliques.
          </p>
          <Button variant="warm" size="xl" className="group" onClick={handleGetStarted}>
            Começar agora
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  )
}