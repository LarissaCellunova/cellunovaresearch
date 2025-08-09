"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Beaker, ShieldCheck, FlaskConical, TrendingUp, FileSignature, Mail, Globe2 } from "lucide-react";

const COPY = {
  en: {
    brand: "CelluNOVA Research",
    tagline: "Licensing breakthrough bioactive formulas — without revealing the secret.",
    cta_primary: "Request NDA & Deck",
    cta_secondary: "Email us",
    sections: {
      value: {
        title: "Why partner with us",
        points: [
          { icon: "Beaker", title: "Proven science", text: "Formulas engineered with high‑performance natural actives and a scalable manufacturing pathway."},
          { icon: "ShieldCheck", title: "IP-first model", text: "Confidential technical dossier disclosed only under NDA; royalty-based licensing aligned with your growth."},
          { icon: "TrendingUp", title: "Go-to‑market speed", text: "Regulatory‑ready positioning, claims roadmap, and co-marketing support for rapid launch."}
        ]
      },
      tech: {
        title: "Technology at a glance",
        bullets: [
          "Exclusive synergistic complex of bioactive ingredients",
          "Manufacturing process validated for scale‑up",
          "Premium positioning with strong consumer acceptance",
          "Multiple line extensions possible (topical & ingestible)"
        ]
      },
      market: {
        title: "Market opportunity",
        lead: "Beauty, wellness, and longevity categories are converging — creating outsized demand for clinically credible products.",
        bullets: [
          "Growing consumer spend on science‑backed actives",
          "Trade partners prioritizing premium, high‑margin SKUs",
          "Global expansion paths across LATAM, North America, and EU"
        ]
      },
      licensing: {
        title: "Licensing model",
        items: [
          "Territory and category exclusivity options",
          "Royalty on net sales with performance tiers",
          "Tech transfer + onboarding playbook",
          "Co‑branding optional; white‑label supported"
        ]
      },
      contact: {
        title: "Let's talk",
        text: "Request an NDA to access the full technical file and commercial deck.",
        email_label: "Write to",
      }
    },
    footer: {
      rights: "All rights reserved",
      address: "Brazil • Global partnerships",
    }
  },
  pt: {
    brand: "CelluNOVA Research",
    tagline: "Licenciamento de fórmulas bioativas — sem revelar o segredo.",
    cta_primary: "Solicitar NDA e Apresentação",
    cta_secondary: "Enviar e‑mail",
    sections: {
      value: {
        title: "Por que ser nosso parceiro",
        points: [
          { icon: "Beaker", title: "Ciência comprovada", text: "Fórmulas com ativos naturais de alto desempenho e caminho de fabricação escalável."},
          { icon: "ShieldCheck", title: "Modelo focado em PI", text: "Dossiê técnico confidencial somente sob NDA; royalties alinhados ao crescimento do parceiro."},
          { icon: "TrendingUp", title: "Agilidade ao mercado", text: "Posicionamento regulatório, plano de claims e co‑marketing para lançamento rápido."}
        ]
      },
      tech: {
        title: "Tecnologia em destaque",
        bullets: [
          "Complexo sinérgico exclusivo de ingredientes bioativos",
          "Processo de fabricação validado para escala",
          "Posicionamento premium com alta aceitação",
          "Expansão de portfólio (tópico e oral)"
        ]
      },
      market: {
        title: "Oportunidade de mercado",
        lead: "Beleza, bem‑estar e longevidade estão convergindo — elevando a demanda por produtos com lastro clínico.",
        bullets: [
          "Crescimento do gasto do consumidor em ativos com evidência",
          "Varejo priorizando SKUs premium e de alta margem",
          "Rotas de expansão global: LATAM, América do Norte e UE"
        ]
      },
      licensing: {
        title: "Modelo de licenciamento",
        items: [
          "Opções de exclusividade por território e categoria",
          "Royalties sobre vendas líquidas com faixas de performance",
          "Transferência de tecnologia + playbook de onboarding",
          "Co‑branding opcional; white‑label suportado"
        ]
      },
      contact: {
        title: "Vamos conversar",
        text: "Solicite um NDA para acessar o dossiê técnico completo e o deck comercial.",
        email_label: "Escreva para",
      }
    },
    footer: {
      rights: "Todos os direitos reservados",
      address: "Brasil • Parcerias globais",
    }
  }
} as const;

const Icon = ({name}:{name: keyof typeof import('lucide-react')}) => {
  const M: any = { Beaker, ShieldCheck, TrendingUp };
  const C = (M as any)[name as any] || Beaker;
  return <C className="w-5 h-5" />;
};

export default function Page() {
  const [lang, setLang] = useState<'en'|'pt'>('en');
  const t = COPY[lang];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-black/20 border-b border-white/10">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-6 h-6" />
            <span className="font-semibold tracking-wide">{t.brand}</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn btn-secondary" onClick={() => setLang(lang==='en'?'pt':'en')}>
              <Globe2 className="w-4 h-4" /> {lang==='en' ? 'PT' : 'EN'}
            </button>
            <a className="btn" href="mailto:larissa.guimaraes@cellunovaresearch.com">
              <Mail className="w-4 h-4" /> {t.cta_secondary}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            {t.brand}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg md:text-2xl text-white/90 max-w-3xl"
          >
            {t.tagline}
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="mailto:larissa.guimaraes@cellunovaresearch.com?subject=NDA%20Request%20—%20CelluNOVA%20Research">
              <FileSignature className="w-4 h-4" /> {t.cta_primary}
            </a>
            <a className="btn btn-secondary" href="mailto:larissa.guimaraes@cellunovaresearch.com">
              <Mail className="w-4 h-4" /> {t.cta_secondary}
            </a>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-white/10 blur-3xl" />
      </section>

      {/* Value Props */}
      <section className="py-12">
        <div className="container grid md:grid-cols-3 gap-6">
          {t.sections.value.points.map((p: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="card p-5">
                <div className="flex items-center gap-2 text-white mb-2">
                  <span className="badge"><Icon name={p.icon as any} /></span>
                  <span className="font-semibold">{p.title}</span>
                </div>
                <p className="text-white/80">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t.sections.tech.title}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {t.sections.tech.bullets.map((b: string, i: number) => (
              <div key={i} className="card p-4"><p className="text-white/85">• {b}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">{t.sections.market.title}</h2>
          <p className="text-white/85 mb-6 max-w-3xl">{t.sections.market.lead}</p>
          <div className="grid md:grid-cols-3 gap-4">
            {t.sections.market.bullets.map((b: string, i: number) => (
              <div key={i} className="card p-4"><p className="text-white/85">• {b}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t.sections.licensing.title}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {t.sections.licensing.items.map((b: string, i: number) => (
              <div key={i} className="card p-4"><p className="text-white/85">• {b}</p></div>
            ))}
          </div>
          <div className="mt-8">
            <a className="btn btn-primary" href="mailto:larissa.guimaraes@cellunovaresearch.com?subject=NDA%20Request%20—%20CelluNOVA%20Research">
              <FileSignature className="w-4 h-4" /> {t.cta_primary}
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="py-12 border-t border-white/10 bg-black/20">
        <div className="container grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">{t.sections.contact.title}</h3>
            <p className="text-white/85 mb-4">{t.sections.contact.text}</p>
            <a className="inline-flex items-center gap-2 underline" href="mailto:larissa.guimaraes@cellunovaresearch.com">
              <Mail className="w-4 h-4" /> {t.sections.contact.email_label}: larissa.guimaraes@cellunovaresearch.com
            </a>
          </div>
          <div className="text-white/70 text-sm md:text-right">
            <p>{t.footer.address}</p>
            <p>© {new Date().getFullYear()} {COPY.en.brand}. {t.footer.rights}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
