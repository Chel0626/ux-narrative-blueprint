import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button-variants"
import { ProfessionalCard } from "@/components/ProfessionalCard"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ArrowLeft, Filter, MapPin, Clock, Star } from "lucide-react"
import drCarlosImage from "@/assets/dr-carlos-andrade.jpg"

export default function SearchResults() {
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState("relevance")
  const [filterRating, setFilterRating] = useState("")
  const [filterPrice, setFilterPrice] = useState("")

  const handleViewProfile = (professionalId: number) => {
    navigate(`/professional/${professionalId}`)
  }

  // Mock data for search results
  const professionals = [
    {
      id: 1,
      name: "Dr. Carlos Andrade",
      specialty: "Pediatria",
      image: drCarlosImage,
      rating: 4.9,
      reviewCount: 127,
      experience: "25 anos",
      availableToday: true,
      consultationTypes: ["telemedicine", "home"] as ("telemedicine" | "home")[],
      price: "R$ 350",
      specialTags: ["Especialista em amamentação", "Neonatologia"],
    },
    {
      id: 2,
      name: "Dra. Marina Silva",
      specialty: "Pediatria",
      image: drCarlosImage, // Using same image for demo
      rating: 4.8,
      reviewCount: 89,
      experience: "18 anos",
      availableToday: false,
      consultationTypes: ["telemedicine"] as ("telemedicine" | "home")[],
      price: "R$ 280",
      specialTags: ["Desenvolvimento infantil"],
    },
    {
      id: 3,
      name: "Dr. Rafael Costa",
      specialty: "Pediatria",
      image: drCarlosImage, // Using same image for demo
      rating: 4.7,
      reviewCount: 156,
      experience: "22 anos",
      availableToday: true,
      consultationTypes: ["home"] as ("telemedicine" | "home")[],
      price: "R$ 420",
      specialTags: ["Urgência pediátrica", "Alergias"],
    }
  ]

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
        {/* Search Summary */}
        <div className="mb-8 animate-fadeIn">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <MapPin className="h-4 w-4" />
            <span>Telemedicina • Pediatria</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Estes são os pediatras que nossa curadoria validou para você:
          </h1>
          <p className="text-muted-foreground">
            {professionals.length} especialistas encontrados • Todos verificados pela Dinddo
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold text-foreground">Filtros</h2>
                </div>

                <div className="space-y-6">
                  {/* Sort by */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Ordenar por
                    </label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Relevância</SelectItem>
                        <SelectItem value="rating">Melhor avaliado</SelectItem>
                        <SelectItem value="price-low">Menor preço</SelectItem>
                        <SelectItem value="price-high">Maior preço</SelectItem>
                        <SelectItem value="availability">Disponível hoje</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Rating filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Avaliação mínima
                    </label>
                    <Select value={filterRating} onValueChange={setFilterRating}>
                      <SelectTrigger>
                        <SelectValue placeholder="Qualquer avaliação" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4.5">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-warm text-warm" />
                            4.5+
                          </div>
                        </SelectItem>
                        <SelectItem value="4.0">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-warm text-warm" />
                            4.0+
                          </div>
                        </SelectItem>
                        <SelectItem value="3.5">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-warm text-warm" />
                            3.5+
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price range */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Faixa de preço
                    </label>
                    <Select value={filterPrice} onValueChange={setFilterPrice}>
                      <SelectTrigger>
                        <SelectValue placeholder="Qualquer preço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-200">Até R$ 200</SelectItem>
                        <SelectItem value="200-350">R$ 200 - R$ 350</SelectItem>
                        <SelectItem value="350-500">R$ 350 - R$ 500</SelectItem>
                        <SelectItem value="500+">Acima de R$ 500</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Availability */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-foreground">
                      Disponibilidade
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm">Disponível hoje</span>
                        <Clock className="h-3 w-3 text-trust ml-auto" />
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm">Esta semana</span>
                      </label>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Limpar filtros
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {professionals.map((professional) => (
                <ProfessionalCard
                  key={professional.id}
                  {...professional}
                  className="animate-fadeIn"
                  onViewProfile={() => handleViewProfile(professional.id)}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Carregar mais especialistas
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Mostrando 3 de 12 resultados
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}