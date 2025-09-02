import { Button } from "@/components/ui/button-variants"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { Heart, CheckCircle, Calendar, Clock, Video, Mail, MessageCircle, ArrowRight, Download } from "lucide-react"
import drCarlosImage from "@/assets/dr-carlos-andrade.jpg"

export default function Success() {
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate('/dashboard')
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Dinddo</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-16">
        {/* Success Animation */}
        <div className="text-center mb-8 animate-fadeIn">
          <div className="mx-auto w-24 h-24 bg-gradient-trust rounded-full flex items-center justify-center mb-6 animate-bounce-soft">
            <CheckCircle className="h-12 w-12 text-trust-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Tudo certo, Giovanna! 🎉
          </h1>
          <p className="text-xl text-muted-foreground">
            Sua consulta por vídeo com o Dr. Carlos Andrade está confirmada
          </p>
        </div>

        {/* Appointment Details Card */}
        <Card className="shadow-card mb-8 animate-slideUp">
          <CardContent className="p-6">
            {/* Professional Info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden">
                <img 
                  src={drCarlosImage} 
                  alt="Dr. Carlos Andrade"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-lg">Dr. Carlos Andrade</div>
                <div className="text-muted-foreground">Pediatria</div>
              </div>
            </div>

            {/* Appointment Info */}
            <div className="grid md:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">02/09/2025</div>
                  <div className="text-sm text-muted-foreground">Terça-feira</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">15:00 - 15:50</div>
                  <div className="text-sm text-muted-foreground">50 minutos</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Video className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Telemedicina</div>
                  <div className="text-sm text-muted-foreground">Online</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="shadow-card mb-8 animate-slideUp">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              📧 Próximos passos
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-trust-light rounded-lg mt-0.5">
                  <Mail className="h-4 w-4 text-trust" />
                </div>
                <div>
                  <div className="font-medium">Email de confirmação enviado</div>
                  <div className="text-sm text-muted-foreground">
                    Enviamos todos os detalhes para <strong>giovanna@email.com</strong>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg mt-0.5">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Lembrete via WhatsApp</div>
                  <div className="text-sm text-muted-foreground">
                    Você receberá um lembrete 1 hora antes da consulta
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-warm-light rounded-lg mt-0.5">
                  <Video className="h-4 w-4 text-warm" />
                </div>
                <div>
                  <div className="font-medium">Link de acesso</div>
                  <div className="text-sm text-muted-foreground">
                    O link da videochamada será enviado 15 minutos antes do horário
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4 mb-8 animate-slideUp">
          <Button variant="trust" size="lg" className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Adicionar à minha Agenda
          </Button>
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Baixar Comprovante
          </Button>
        </div>

        {/* Preparation Tips */}
        <Card className="border-primary/20 mb-8 animate-slideUp">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3 text-primary">💡 Dicas para a consulta</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Teste sua câmera e microfone alguns minutos antes</li>
              <li>• Tenha em mãos documentos médicos relevantes</li>
              <li>• Escolha um local silencioso e bem iluminado</li>
              <li>• Prepare uma lista com suas principais dúvidas</li>
            </ul>
          </CardContent>
        </Card>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp">
          <Button variant="hero" size="lg" className="group" onClick={handleBackToHome}>
            Voltar ao Início
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => navigate('/dashboard')}>
            Agendar Outra Consulta
          </Button>
        </div>

        {/* Support */}
        <div className="text-center mt-12 animate-fadeIn">
          <p className="text-muted-foreground mb-2">
            Precisa de ajuda? Estamos aqui para você
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm" className="text-primary">
              Chat de Suporte
            </Button>
            <Button variant="ghost" size="sm" className="text-primary">
              (11) 9999-9999
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}