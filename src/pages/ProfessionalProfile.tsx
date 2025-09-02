import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button-variants"
import { TrustBadge } from "@/components/TrustBadge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Heart, ArrowLeft, Star, MapPin, GraduationCap, Award, Clock, Video, Home, Shield, Users } from "lucide-react"
import drCarlosImage from "@/assets/dr-carlos-andrade.jpg"

export default function ProfessionalProfile() {
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      navigate('/checkout')
    }
  }

  // Available time slots for the selected date
  const availableSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
  ]

  const bookedSlots = ["10:30", "14:30", "16:00"] // Mock booked slots

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

            {/* User info */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm text-primary-foreground font-medium">G</span>
              </div>
              <span className="font-medium text-foreground">Giovanna</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Professional Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card className="shadow-card animate-fadeIn">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Photo */}
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden">
                      <img 
                        src={drCarlosImage} 
                        alt="Dr. Carlos Andrade"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <TrustBadge variant="compact" />
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h1 className="text-3xl font-bold text-foreground">Dr. Carlos Andrade</h1>
                      <p className="text-xl text-muted-foreground">Pediatria</p>
                      <div className="flex items-center gap-2 mt-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">São Paulo, SP</span>
                      </div>
                    </div>

                    {/* Rating and Stats */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-warm text-warm" />
                        <span className="font-semibold">4.9</span>
                        <span className="text-muted-foreground">(127 avaliações)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">1.200+ consultas</span>
                      </div>
                    </div>

                    {/* Consultation Types */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-primary text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">
                        <Video className="h-4 w-4" />
                        Telemedicina
                      </div>
                      <div className="flex items-center gap-1 text-primary text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">
                        <Home className="h-4 w-4" />
                        Atendimento Domiciliar
                      </div>
                    </div>

                    {/* Special Tags */}
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Especialista em amamentação</Badge>
                      <Badge variant="secondary">Neonatologia</Badge>
                      <Badge variant="secondary">Urgência pediátrica</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card className="shadow-card animate-slideUp">
              <CardHeader>
                <CardTitle>Sobre o Dr. Carlos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Com 25 anos de experiência em pediatria, acredito em uma medicina humanizada 
                  que coloca o bem-estar da criança e da família em primeiro lugar. Especializado 
                  em neonatologia e apoio à amamentação, atendo desde recém-nascidos até adolescentes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Meu objetivo é criar um ambiente acolhedor onde pais e filhos se sintam seguros 
                  para compartilhar suas preocupações. Utilizo tecnologia moderna para diagnósticos 
                  precisos, sempre explicando cada passo do tratamento de forma clara e compreensível.
                </p>
              </CardContent>
            </Card>

            {/* Credentials */}
            <Card className="shadow-card animate-slideUp">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Formação e Credenciais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-trust mt-0.5" />
                      <div>
                        <div className="font-medium">Medicina - USP</div>
                        <div className="text-sm text-muted-foreground">1998</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-trust mt-0.5" />
                      <div>
                        <div className="font-medium">Residência em Pediatria</div>
                        <div className="text-sm text-muted-foreground">Hospital das Clínicas - USP</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-trust mt-0.5" />
                      <div>
                        <div className="font-medium">CRM-SP 123.456</div>
                        <div className="text-sm text-muted-foreground">Ativo desde 1999</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-trust mt-0.5" />
                      <div>
                        <div className="font-medium">RQE Pediatria</div>
                        <div className="text-sm text-muted-foreground">Certificado SBP</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Preview */}
            <Card className="shadow-card animate-slideUp">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Avaliações dos Pacientes</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warm text-warm" />
                    <span className="font-medium">4.9</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Sample reviews */}
                <div className="space-y-4">
                  <div className="border-l-4 border-trust pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-warm text-warm" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">Ana M. • há 2 semanas</span>
                    </div>
                    <p className="text-muted-foreground">
                      "Dr. Carlos foi fundamental nos primeiros meses da minha filha. 
                      Muito atencioso e sempre disponível para esclarecer dúvidas sobre amamentação."
                    </p>
                  </div>
                  <div className="border-l-4 border-trust pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-warm text-warm" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">Carlos R. • há 1 mês</span>
                    </div>
                    <p className="text-muted-foreground">
                      "Profissional excepcional! Atendimento humanizado e diagnósticos precisos. 
                      Recomendo para todas as famílias."
                    </p>
                  </div>
                </div>
                <Button variant="ghost" className="w-full text-primary">
                  Ver todas as 127 avaliações
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-card animate-slideUp">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Agendar Consulta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price */}
                <div className="text-center p-4 bg-gradient-hero rounded-lg text-white">
                  <div className="text-2xl font-bold">R$ 350</div>
                  <div className="text-sm opacity-90">por consulta</div>
                </div>

                {/* Calendar */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">
                    Escolha uma data:
                  </label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                  />
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-foreground">
                      Horários disponíveis:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {availableSlots.map((slot) => {
                        const isBooked = bookedSlots.includes(slot)
                        const isSelected = selectedTime === slot
                        
                        return (
                          <Button
                            key={slot}
                            variant={isSelected ? "trust" : "outline"}
                            size="sm"
                            disabled={isBooked}
                            onClick={() => setSelectedTime(slot)}
                            className={`text-xs ${isBooked ? 'opacity-50' : ''}`}
                          >
                            {slot}
                          </Button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Booking Button */}
                <Button 
                  variant="warm" 
                  size="lg" 
                  className="w-full"
                  disabled={!selectedDate || !selectedTime}
                  onClick={handleBooking}
                >
                  {selectedDate && selectedTime ? (
                    <>
                      <Clock className="h-4 w-4 mr-2" />
                      Agendar para {selectedTime}
                    </>
                  ) : (
                    "Selecione data e horário"
                  )}
                </Button>

                {/* Guarantee */}
                <div className="text-center p-3 bg-trust-light rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-trust font-medium text-sm">
                    <Shield className="h-4 w-4" />
                    Garantia de satisfação
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    100% do valor reembolsado se não ficar satisfeito
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}