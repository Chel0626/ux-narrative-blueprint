import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button-variants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Heart, Search, Video, Home, Calendar, User, Bell, Settings } from "lucide-react"

export default function Dashboard() {
  const navigate = useNavigate()
  const [specialty, setSpecialty] = useState("")
  const [consultationType, setConsultationType] = useState("")

  const handleSearch = () => {
    if (specialty && consultationType) {
      navigate('/search')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Dinddo</span>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">Giovanna</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Olá, Giovanna! 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Do que sua família precisa hoje?
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8 shadow-card animate-slideUp">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Encontrar Especialista
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Specialty Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Qual especialidade você busca?
                </label>
                <Select value={specialty} onValueChange={setSpecialty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma especialidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pediatria">Pediatria</SelectItem>
                    <SelectItem value="nutricao">Nutrição Infantil</SelectItem>
                    <SelectItem value="fonoaudiologia">Fonoaudiologia</SelectItem>
                    <SelectItem value="psicologia">Psicologia Infantil</SelectItem>
                    <SelectItem value="dermatologia">Dermatologia</SelectItem>
                    <SelectItem value="ginecologia">Ginecologia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Consultation Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Como prefere o atendimento?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={consultationType === "telemedicine" ? "trust" : "outline"}
                    size="sm"
                    onClick={() => setConsultationType("telemedicine")}
                    className="justify-start"
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Online
                  </Button>
                  <Button
                    variant={consultationType === "home" ? "trust" : "outline"}
                    size="sm"
                    onClick={() => setConsultationType("home")}
                    className="justify-start"
                  >
                    <Home className="h-4 w-4 mr-2" />
                    Em Casa
                  </Button>
                </div>
              </div>

              {/* Search Button */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-transparent">Action</label>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={!specialty || !consultationType}
                  onClick={handleSearch}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Buscar Profissionais
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Recent Appointments */}
          <Card className="animate-slideUp shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Próximas Consultas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Nenhuma consulta agendada</p>
                  <p className="text-sm">Que tal agendar sua primeira?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Family Health */}
          <Card className="animate-slideUp shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Heart className="h-5 w-5 text-warm" />
                Saúde da Família
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <div className="font-medium">Giovanna</div>
                    <div className="text-sm text-muted-foreground">Última consulta: -</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Perfil
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="w-full text-primary">
                  + Adicionar membro da família
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Emergency */}
          <Card className="animate-slideUp shadow-card border-warm/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-warm">
                <Heart className="h-5 w-5" />
                Urgência?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Para emergências médicas, ligue para:
                </p>
                <Button variant="warm" className="w-full">
                  192 - SAMU
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Encontrar atendimento rápido
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Specialists Preview */}
        <Card className="animate-slideUp shadow-card">
          <CardHeader>
            <CardTitle>Especialistas Populares</CardTitle>
            <p className="text-muted-foreground">
              Profissionais mais procurados por famílias como a sua
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Preview cards - simplified */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="p-4 border border-border rounded-lg hover:shadow-soft transition-smooth cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-muted rounded-full"></div>
                    <div>
                      <div className="font-medium">Dr. Nome {i + 1}</div>
                      <div className="text-sm text-muted-foreground">Especialidade</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Perfil
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="ghost" className="text-primary">
                Ver todos os especialistas →
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}