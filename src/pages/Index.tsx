import SiteCard from "@/components/SiteCard";
import mxvagasPreview from "@/assets/mxvagas-preview.png";
import mxfornecedoresPreview from "@/assets/mxfornecedores-preview.png";

const Index = () => {
  const sites = [
    {
      title: "MX Vagas",
      description: "Plataforma completa para gestão de vagas de emprego e processos seletivos. Conecte talentos às melhores oportunidades do mercado.",
      url: "https://mxvagas.iacodelabs.com.br/",
      icon: "vagas" as const,
      gradient: "primary" as const,
      image: mxvagasPreview
    },
    {
      title: "MX Fornecedores",
      description: "Sistema integrado para gestão de fornecedores e contratos. Otimize sua cadeia de suprimentos e parcerias comerciais.",
      url: "https://mxsfornecedores.iacodelabs.com.br/",
      icon: "fornecedores" as const,
      gradient: "secondary" as const,
      image: mxfornecedoresPreview
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Plataformas MX
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Modelo de plataformas especializadas para gestão de recursos humanos e fornecedores. 
            Escolha a solução ideal para suas necessidades empresariais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sites.map((site, index) => (
            <SiteCard
              key={index}
              title={site.title}
              description={site.description}
              url={site.url}
              icon={site.icon}
              gradient={site.gradient}
              image={site.image}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            Desenvolvido por{" "}
            <span className="font-semibold text-primary">IacodeLabs</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
