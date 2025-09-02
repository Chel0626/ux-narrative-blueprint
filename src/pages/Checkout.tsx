import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button-variants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Heart, ArrowLeft, CreditCard, Smartphone, Shield, Clock, Video, Calendar, User } from "lucide-react"
import drCarlosImage from "@/assets/dr-carlos-andrade.jpg"

export default function Checkout() {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState("credit")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [cardName, setCardName] = useState("")

  const handleConfirmBooking = () => {
    // Simulate payment processing
    setTimeout(() => {
      navigate('/success')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Back */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Heart className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-primary">Dinddo</span>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Passo 3 de 3</span>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Payment Form */}
          <div className="space-y-6">
            {/* Page Title */}
            <div className="animate-fadeIn">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Quase lá! 🎉
              </h1>
              <p className="text-muted-foreground">
                Confirme sua consulta e realize o pagamento
              </p>
            </div>

            {/* Payment Method */}
            <Card className="shadow-card animate-slideUp">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Forma de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Payment Options */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant={paymentMethod === "credit" ? "trust" : "outline"}
                    onClick={() => setPaymentMethod("credit")}
                    className="h-auto p-4 flex flex-col items-center gap-2"
                  >
                    <CreditCard className="h-6 w-6" />
                    <span className="text-sm font-medium">Cartão de Crédito</span>
                  </Button>
                  <Button
                    variant={paymentMethod === "pix" ? "trust" : "outline"}
                    onClick={() => setPaymentMethod("pix")}
                    className="h-auto p-4 flex flex-col items-center gap-2"
                  >
                    <Smartphone className="h-6 w-6" />
                    <span className="text-sm font-medium">PIX</span>
                  </Button>
                </div>

                {/* Credit Card Form */}
                {paymentMethod === "credit" && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Número do Cartão</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Validade</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/AA"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Nome no Cartão</Label>
                      <Input
                        id="cardName"
                        placeholder="Nome como impresso no cartão"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* PIX Instructions */}
                {paymentMethod === "pix" && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <div className="flex items-center gap-2 text-primary font-medium mb-2">
                        <Smartphone className="h-5 w-5" />
                        Pagamento via PIX
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Após confirmar, você receberá um QR Code para realizar o pagamento 
                        instantaneamente pelo aplicativo do seu banco.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Security Notice */}
            <Card className="border-trust/20 animate-slideUp">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-trust-light rounded-lg">
                    <Shield className="h-5 w-5 text-trust" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Pagamento 100% Seguro</div>
                    <div className="text-sm text-muted-foreground">
                      Seus dados são protegidos com criptografia SSL
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            {/* Consultation Summary */}
            <Card className="shadow-card animate-slideUp">
              <CardHeader>
                <CardTitle>Resumo da Consulta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Professional Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img 
                      src={drCarlosImage} 
                      alt="Dr. Carlos Andrade"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Dr. Carlos Andrade</div>
                    <div className="text-sm text-muted-foreground">Pediatria</div>
                    <div className="flex items-center gap-1 text-trust text-xs font-medium mt-1">
                      <Shield className="h-3 w-3" />
                      Curadoria Dinddo
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Appointment Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">02 de Setembro de 2025</div>
                      <div className="text-sm text-muted-foreground">Terça-feira</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">15:00 - 15:50</div>
                      <div className="text-sm text-muted-foreground">50 minutos</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Telemedicina</div>
                      <div className="text-sm text-muted-foreground">Consulta por videochamada</div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Patient Info */}
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Giovanna Santos</div>
                    <div className="text-sm text-muted-foreground">Paciente</div>
                  </div>
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Consulta</span>
                    <span className="font-medium">R$ 350,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxa de conveniência</span>
                    <span className="font-medium">R$ 0,00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">R$ 350,00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="border-warm/20 animate-slideUp">
              <CardContent className="p-4">
                <div className="space-y-3 text-sm">
                  <div className="font-medium text-foreground">📧 Próximos passos:</div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Confirmação por email em até 2 minutos</li>
                    <li>• Link da videochamada será enviado 1h antes</li>
                    <li>• Lembrete via WhatsApp no dia da consulta</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Confirm Button */}
            <Button 
              variant="warm" 
              size="xl" 
              className="w-full"
              disabled={paymentMethod === "credit" && (!cardNumber || !expiryDate || !cvv || !cardName)}
              onClick={handleConfirmBooking}
            >
              Confirmar e Agendar Consulta
            </Button>

            {/* Cancellation Policy */}
            <div className="text-center text-xs text-muted-foreground">
              <p>
                Cancelamento gratuito até 2h antes da consulta. 
                <br />
                <span className="text-primary cursor-pointer hover:underline">
                  Ver política completa
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}