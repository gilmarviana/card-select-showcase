import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Users, Briefcase } from "lucide-react";

interface SiteCardProps {
  title: string;
  description: string;
  url: string;
  icon: "vagas" | "fornecedores";
  gradient: "primary" | "secondary";
  image: string;
}

const SiteCard = ({ title, description, url, icon, gradient, image }: SiteCardProps) => {
  const IconComponent = icon === "vagas" ? Users : Briefcase;
  
  return (
    <Card className="group relative overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className={`absolute inset-0 bg-gradient-${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
      
      <CardContent className="relative p-0 h-full">
        {/* Image Preview */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={`Preview do ${title}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          
          {/* Icon overlay */}
          <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-${gradient} flex items-center justify-center shadow-lg`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-medium text-muted-foreground">
              Acessar plataforma
            </span>
            <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </CardContent>
      
      <div 
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={() => window.open(url, '_blank')}
      />
    </Card>
  );
};

export default SiteCard;