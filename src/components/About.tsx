import { motion } from "framer-motion";
import { Award, MapPin, CheckCircle, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Profissional com +15 anos de experiência" },
  { icon: MapPin, value: "PR", label: "Atendimento em Curitiba e região" },
  { icon: CheckCircle, value: "100%", label: "Conformidade técnica" },
  { icon: Clock, value: "24h", label: "Atendimento rápido" },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-secondary font-heading text-sm font-bold uppercase tracking-widest">
              Sobre a Cavê
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mt-3 mb-6 leading-tight">
              Confiança e excelência em{" "}
              <span className="text-secondary">instalações de gás</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A Cavê Instalações de Gás oferece serviços de instalação, manutenção e
              teste de estanqueidade para residências, comércios e indústrias, com foco
              total em segurança e qualidade.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa equipe é formada por profissionais certificados e comprometidos com
              a segurança. Trabalhamos com materiais de primeira linha e seguimos
              rigorosamente as normas da ABNT, garantindo total conformidade técnica.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-muted rounded-xl p-6 text-center hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-heading font-black text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-body mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;