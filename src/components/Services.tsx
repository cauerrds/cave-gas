import { motion } from "framer-motion";
import { Flame, ShieldCheck, Wrench, ClipboardCheck, Building2, Home, ArrowRight } from "lucide-react";
import serviceTest from "@/assets/service-test.jpg";
import serviceResidential from "@/assets/service-residential.jpg";

const gasServices = [
  {
    icon: Flame,
    title: "Instalação de Gás",
    description: "Instalação completa de tubulações de gás natural e GLP para residências e comércios, seguindo todas as normas da ABNT.",
  },
  {
    icon: ShieldCheck,
    title: "Teste de Estanqueidade",
    description: "Ensaios de estanqueidade para verificar a integridade das tubulações, garantindo total segurança contra vazamentos.",
  },
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description: "Manutenção periódica em instalações de gás para prevenção de problemas e prolongamento da vida útil do sistema.",
  },
];

const generalServices = [
  {
    icon: ClipboardCheck,
    title: "Laudos e Certificações",
    description: "Emissão de laudos técnicos e certificações necessárias para regularização de instalações de gás.",
  },
  {
    icon: Building2,
    title: "Projetos Comerciais",
    description: "Projetos completos de instalação de gás para restaurantes, padarias, hotéis e estabelecimentos comerciais.",
  },
  {
    icon: Home,
    title: "Projetos Residenciais",
    description: "Projetos e instalações residenciais de gás, desde apartamentos até condomínios inteiros.",
  },
];

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof Flame;
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-card rounded-xl border border-border p-7 hover:shadow-xl hover:border-secondary/30 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
      <Icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
    </div>
    <h3 className="text-lg font-heading font-bold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground font-body text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-muted">
      <div className="container mx-auto px-4">

        {/* CAVÊ INSTALAÇÕES DE GÁS */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-heading text-xs font-bold uppercase tracking-[0.2em]">
                Instalações de Gás
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3 mb-5 leading-tight">
                Cavê{" "}
                <span className="text-secondary">Instalações de Gás</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Soluções completas em instalações de gás com segurança e qualidade certificada.
                Atuamos em projetos residenciais e comerciais com equipe técnica especializada.
              </p>
              <a
                href="https://wa.me/554198904364"
                className="inline-flex items-center gap-2 text-secondary font-heading font-bold text-sm hover:gap-3 transition-all"
              >
                Solicitar orçamento
                <ArrowRight className="w-4 h-4" />
              </a>W
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={serviceTest}
                alt="Teste de estanqueidade em tubulações de gás"
                className="rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-5 py-3 rounded-lg font-heading font-bold text-sm shadow-lg">
                <Flame className="w-4 h-4 inline mr-2" />
                Normas ABNT
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {gasServices.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>

        {/* CAVÊ SERVIÇOS */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <img
                src={serviceResidential}
                alt="Instalação residencial de gás"
                className="rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-heading font-bold text-sm shadow-lg">
                <ShieldCheck className="w-4 h-4 inline mr-2" />
                Equipe Certificada
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="text-secondary font-heading text-xs font-bold uppercase tracking-[0.2em]">
                Serviços Técnicos
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3 mb-5 leading-tight">
                Cavê <span className="text-secondary">Serviços</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Laudos e soluções especializadas para todos os segmentos.
                Atendemos desde pequenas residências até grandes empreendimentos comerciais.
              </p>
              <a
                href="https://wa.me/554198904364"
                className="inline-flex items-center gap-2 text-secondary font-heading font-bold text-sm hover:gap-3 transition-all"
              >
                Fale conosco
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
