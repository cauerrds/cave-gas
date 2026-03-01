import { Phone, MapPin, Flame } from "lucide-react";
import logo from "@/assets/logo_gas.png";

const WHATSAPP_NUMBER_E164 = "554198904364";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER_E164}`;

const Footer = () => {
  return (
    <footer
      id="contato"
      className="bg-slate-50 text-slate-900 border-t border-slate-200"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Cavê" className="h-12 mb-5 object-contain" />
            <p className="text-slate-600 font-body text-sm leading-relaxed">
              Referência em instalações de gás e teste de estanqueidade. Segurança e
              qualidade garantidas em todos os projetos.
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
                { label: "Contato", href: "https://wa.me/554198904364" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-secondary transition-colors font-body text-sm"
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
              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                  aria-label="Falar no WhatsApp"
                  title="Falar no WhatsApp"
                >
                  (41) 9890-4364
                </a>
              </li>

              <li className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                Curitiba, PR
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-6 text-center text-slate-500 text-sm font-body">
          © {new Date().getFullYear()} Cavê Instalações de Gás. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;