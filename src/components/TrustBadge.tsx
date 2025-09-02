import { Shield, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface TrustBadgeProps {
  className?: string
  variant?: "default" | "large" | "compact"
}

export function TrustBadge({ className, variant = "default" }: TrustBadgeProps) {
  const variants = {
    default: "px-3 py-1.5 text-sm",
    large: "px-4 py-2 text-base",
    compact: "px-2 py-1 text-xs"
  }

  return (
    <div className={cn(
      "inline-flex items-center gap-2 bg-gradient-trust text-trust-foreground rounded-full font-semibold shadow-trust animate-fadeIn",
      variants[variant],
      className
    )}>
      <CheckCircle className={cn(
        "flex-shrink-0",
        variant === "compact" ? "h-3 w-3" : variant === "large" ? "h-5 w-5" : "h-4 w-4"
      )} />
      <span>Curadoria Dinddo</span>
    </div>
  )
}

interface TrustSectionProps {
  className?: string
}

export function TrustSection({ className }: TrustSectionProps) {
  return (
    <div className={cn("flex flex-col items-center gap-3 animate-slideUp", className)}>
      <div className="flex items-center gap-4 text-muted-foreground">
        <Shield className="h-5 w-5 text-trust" />
        <span className="text-sm font-medium">Profissionais validados um a um</span>
      </div>
      <div className="flex items-center gap-6 opacity-60">
        <div className="text-xs font-medium">Sociedade Brasileira de Pediatria</div>
        <div className="text-xs font-medium">CFM Validado</div>
        <div className="text-xs font-medium">CRM Verificado</div>
      </div>
    </div>
  )
}