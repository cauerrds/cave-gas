import { Phone, Mail, MapPin, Flame } from "lucide-react";
import logo from "@/assets/logo_cave.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Cavê" className="h-12 mb-5 brightness-0 invert" />
            <p className="text-background/50 font-body text-sm leading-relaxed">
              Referência em instalações de gás e teste de estanqueidade.
              Segurança e qualidade garantidas em todos os projetos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5 flex items-center gap-2">
              <Flame className="w-4 h-4 text-secondary" />
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/50 hover:text-secondary transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5 flex items-center gap-2">
              <Flame className="w-4 h-4 text-secondary" />
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-background/50 text-sm">
                <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                (00) 0000-0000
              </li>
              <li className="flex items-center gap-3 text-background/50 text-sm">
                <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                contato@cave.com.br
              </li>
              <li className="flex items-center gap-3 text-background/50 text-sm">
                <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-6 text-center text-background/30 text-sm font-body">
          © {new Date().getFullYear()} Cavê Instalações de Gás. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
