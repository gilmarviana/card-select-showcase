import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Users, Briefcase } from "lucide-react";

interface SiteCardProps {
  title: string;
  description: string;
  url: string;
  icon: "vagas" | "fornecedores";
  gradient: "primary" | "secondary";
}

const SiteCard = ({ title, description, url, icon, gradient }: SiteCardProps) => {
  const IconComponent = icon === "vagas" ? Users : Briefcase;
  
  return (
    <Card className="group relative overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className={`absolute inset-0 bg-gradient-${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
      
      <CardContent className="relative p-8 h-full flex flex-col justify-between min-h-[280px]">
        <div className="space-y-6">
          <div className={`w-16 h-16 rounded-xl bg-gradient-${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <span className="text-sm font-medium text-muted-foreground">
            Acessar plataforma
          </span>
          <ExternalLink className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
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