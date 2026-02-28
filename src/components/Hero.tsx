import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Flame } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />

      <div className="relative z-10 container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/30 rounded-full px-4 py-1.5 mb-8"
          >
            <Flame className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-heading text-sm font-semibold">
              Segurança e qualidade certificadas
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-background leading-[1.1] mb-6">
            Instalações de Gás
            <br />
            <span className="text-secondary">&amp; Estanqueidade</span>
          </h1>

          <p className="text-lg md:text-xl text-background/60 font-body mb-10 max-w-xl leading-relaxed">
            A Cavê é referência em instalações de gás residencial e comercial,
            garantindo segurança, eficiência e conformidade com todas as normas técnicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-heading text-base font-bold hover:brightness-110 transition-all shadow-lg shadow-secondary/25"
            >
              Nossos Serviços
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 border-2 border-background/30 text-background px-8 py-4 rounded-lg font-heading text-base font-bold hover:bg-background/10 transition-all"
            >
              <ShieldCheck className="w-5 h-5" />
              Solicitar Orçamento
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
