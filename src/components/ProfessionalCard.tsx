import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button-variants"
import { TrustBadge } from "@/components/TrustBadge"
import { Star, MapPin, Video, Home, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProfessionalCardProps {
  name: string
  specialty: string
  image: string
  rating: number
  reviewCount: number
  experience: string
  availableToday?: boolean
  consultationTypes: ("telemedicine" | "home")[]
  price: string
  specialTags?: string[]
  className?: string
  onViewProfile?: () => void
}

export function ProfessionalCard({
  name,
  specialty,
  image,
  rating,
  reviewCount,
  experience,
  availableToday = false,
  consultationTypes,
  price,
  specialTags = [],
  className,
  onViewProfile
}: ProfessionalCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden hover:shadow-card transition-smooth cursor-pointer animate-fadeIn",
      className
    )} onClick={onViewProfile}>
      <CardContent className="p-0">
        {/* Header com foto e badge */}
        <div className="relative">
          <div className="aspect-[4/3] bg-muted overflow-hidden">
            <img 
              src={image} 
              alt={`Foto do ${name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-3 left-3">
            <TrustBadge variant="compact" />
          </div>
          {availableToday && (
            <div className="absolute top-3 right-3 bg-trust text-trust-foreground px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Hoje
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="p-4 space-y-3">
          {/* Nome e especialidade */}
          <div>
            <h3 className="font-semibold text-lg text-foreground">{name}</h3>
            <p className="text-muted-foreground text-sm">{specialty}</p>
          </div>

          {/* Rating e experiência */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-warm text-warm" />
              <span className="font-medium">{rating}</span>
              <span className="text-muted-foreground">({reviewCount})</span>
            </div>
            <div className="text-muted-foreground">{experience}</div>
          </div>

          {/* Tags especiais */}
          {specialTags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {specialTags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-accent text-accent-foreground rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Tipos de consulta */}
          <div className="flex items-center gap-3">
            {consultationTypes.includes("telemedicine") && (
              <div className="flex items-center gap-1 text-primary text-xs font-medium">
                <Video className="h-3 w-3" />
                Online
              </div>
            )}
            {consultationTypes.includes("home") && (
              <div className="flex items-center gap-1 text-primary text-xs font-medium">
                <Home className="h-3 w-3" />
                Domicílio
              </div>
            )}
          </div>

          {/* Preço e CTA */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div>
              <span className="text-lg font-bold text-foreground">{price}</span>
              <span className="text-muted-foreground text-sm ml-1">/consulta</span>
            </div>
            <Button variant="trust-outline" size="sm">
              Ver Perfil
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}