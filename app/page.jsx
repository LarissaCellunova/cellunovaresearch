import React from "react";
import Image from "next/image";

// =====================================
// Home — CelluNOVA DermoRebirth™ (B2B)
// English by default, with URL toggle ?lang=pt for Portuguese
// No external deps. Place images in /public:
//   /propaganda-albert.png   (HERO banner)
//   /produto-piloto.png      (product bottle)
// If TypeScript complains, save as app/page.jsx
// =====================================

export const metadata = {
  title: "CelluNOVA DermoRebirth™ | Blend Licensing (B2B)",
  description:
    "DermoRebirth™ is a proprietary rejuvenation blend for brand partners. Full formula shared only under NDA (no quantities).",
  openGraph: {
    title: "CelluNOVA DermoRebirth™ | Blend Licensing (B2B)",
    description:
      "Proprietary rejuvenation blend available for corporate licensing. Full details only under NDA.",
    url: "https://www.cellunovaresearch.com/",
    siteName: "CelluNOVA Research",
    images: [{ url: "/propaganda-albert.png", width: 1200, height: 630, alt: "DermoRebirth™ campaign" }],
    locale: "en_US",
    type: "website",
  },
};

// ---- Helpers ----
const marketUSD = 4.88e9; // illustrative 2025 global market size (anti‑aging supplements)
const money = (n) =>
  n >= 1e9 ? `$${(n / 1e9).toFixed(2)}B` : n >= 1e6 ? `$${(n / 1e6).toFixed(2)}M` : `$${n.toFixed(0)}`;

function Bars({ data }) {
  const W = 640, H = data.length * 46 + 10, bar = 28, gap = 18, max = Math.max(...data.map(d => d.value));
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      {data.map((d, i) => {
        const y = i * (bar + gap);
        const w = Math.round((d.value / max) * (W - 140));
        return (
          <g key={i}>
            <text x="0" y={y + bar - 8} className="fill-white" fontSize="12">{d.label}</text>
            <rect x="140" y={y} width={w} height={bar} rx="8" className="fill-fuchsia-500" />
            <text x={140 + w + 8} y={y + bar - 8} className="fill-white" fontSize="12">{money(d.value)}</text>
          </g>
        );
      })}
    </svg>
  );
}

const dict = {
  en: {
    hero_kicker: "Available for licensing",
    h1_a: "CelluNOVA ",
    h1_b: "DermoRebirth™",
    hero_p:
      "A proprietary rejuvenation blend for brands that want to launch a premium, evidence‑informed line. The full formula is shared only under NDA — no quantities — and final disclosure occurs after contract execution.",
    cta_primary: "Request partnership",
    cta_secondary: "See comparison",
    quickproof: [
      "Proprietary blend (under NDA)",
      "Flexible licensing models",
      "Technical & regulatory support",
      "Premium positioning",
    ],
    pilot_title: "Pilot product",
    pilot_p: "Visual reference (design/packaging). Specifications and suppliers are presented only under NDA.",

    // COMPARISON
    comp_title: "Market comparison (data‑driven)",
    comp_p:
      "High‑level view of leading players and models. DermoRebirth™ keeps composition confidential and is disclosed only under NDA.",
    comp_headers: [
      "Brand / Product",
      "Core proposal",
      "Positioning angle",
      "Model",
      "Revenue scale",
      "Formula disclosure",
      "Licensing",
      "Notes",
    ],
    rows: [
      [
        "CelluNOVA DermoRebirth™",
        "Proprietary composition (under NDA)",
        "Rejuvenation / healthy aging*",
        "B2B licensing; optional exclusivity",
        "—",
        "Confidential",
        "Yes (licensing)",
        "Technical dossier under NDA",
      ],
      [
        "Elysium Health — Basis",
        "Public composition (NAD+ focus)",
        "Cellular aging / premium subscription*",
        "B2C",
        "Private (not disclosed)",
        "Public (NR + pterostilbene)",
        "No",
        "Official site",
      ],
      [
        "ChromaDex — Tru Niagen / Niagen®",
        "Public composition (NAD+ focus)",
        "Metabolic health / global portfolio*",
        "B2C + B2B ingredient",
        "~$100M FY2024 (public)",
        "Public (NR / Niagen®)",
        "Ingredient supply",
        "Public revenue",
      ],
    ],

    // PROJECTIONS
    proj_title_1: "Market size & context",
    proj_p_1: `Global anti‑aging supplements market ~${money(marketUSD)} (2025). CAGR near 8% in major sector projections.`,
    proj_title_2: "Reach scenarios (annual sell‑out)",
    scenarios: [
      { label: "0.05% share", value: marketUSD * 0.0005 },
      { label: "0.10% share", value: marketUSD * 0.001 },
      { label: "0.25% share", value: marketUSD * 0.0025 },
    ],

    // VALUE PROPS WITH NUMBERS
    why_title: "Why partners choose DermoRebirth™",
    why_points: [
      "Time‑to‑market as fast as 6–12 weeks (depending on partner ops).",
      "5‑pillar bioactive architecture (hydration, cellular energy, oxidation balance, senescence modulation, autophagy support) — details under NDA.",
      "Benchmark gross margin range for premium nutraceuticals: 60–75% (illustrative).",
      "Optional regional/category exclusivity tied to volume commitments.",
    ],

    partner_title: "Licensing models",
    partner_p:
      "Optional exclusivity by region/line, scientific dossier under NDA, labeling/regulatory support and launch materials.",
    partner_cta_1: "Talk to our team",
    partner_cta_2: "Request NDA",

    news_title: "CelluNOVA updates",
    news_p: "Join the partners list to receive technical materials and licensing opportunities.",
    newsletter_placeholder: "Your corporate email",
    newsletter_cta: "Subscribe",
    footer_priv: "Privacy Policy",
    footer_contact: "Contact",
    disclaimer: "*No medical claims. Illustrative values.",
    lang_switch_label: "Language:",
    lang_en: "EN",
    lang_pt: "PT",
  },
  pt: {
    hero_kicker: "Disponível para licenciamento",
    h1_a: "CelluNOVA ",
    h1_b: "DermoRebirth™",
    hero_p:
      "Blend proprietário de rejuvenescimento para marcas que desejam lançar uma linha premium com base em evidências. A fórmula completa é fornecida apenas sob NDA — sem divulgar quantidades — e o detalhamento final ocorre após o fechamento do contrato.",
    cta_primary: "Solicitar parceria",
    cta_secondary: "Ver comparativo",
    quickproof: [
      "Blend proprietário (sob NDA)",
      "Modelo de licenciamento flexível",
      "Suporte técnico e regulatório",
      "Posicionamento premium",
    ],
    pilot_title: "Produto (piloto)",
    pilot_p: "Referência visual (design/embalagem). Especificações e fornecedores são apresentados apenas sob NDA.",

    comp_title: "Comparativo de mercado (com dados)",
    comp_p:
      "Visão de alto nível dos principais players e modelos. O DermoRebirth™ mantém sua composição confidencial e é detalhado apenas sob NDA.",
    comp_headers: [
      "Marca / Produto",
      "Núcleo da proposta",
      "Ângulo de posicionamento",
      "Modelo",
      "Escala de receita",
      "Divulgação da fórmula",
      "Licenciamento",
      "Notas",
    ],
    rows: [
      [
        "CelluNOVA DermoRebirth™",
        "Composição proprietária (sob NDA)",
        "Rejuvenescimento / healthy aging*",
        "Licenciamento B2B; exclusividade opcional",
        "—",
        "Confidencial",
        "Sim (licenciamento)",
        "Dossiê técnico sob NDA",
      ],
      [
        "Elysium Health — Basis",
        "Composição pública (foco em NAD+)",
        "Envelhecimento celular / assinatura premium*",
        "B2C",
        "Privada (não divulgada)",
        "Pública (NR + pterostilbene)",
        "Não",
        "Site oficial",
      ],
      [
        "ChromaDex — Tru Niagen / Niagen®",
        "Composição pública (foco em NAD+)",
        "Saúde metabólica / portfólio global*",
        "B2C + ingrediente B2B",
        "~$100M FY2024 (público)",
        "Pública (NR / Niagen®)",
        "Ingrediente (fornecimento)",
        "Receita pública",
      ],
    ],

    proj_title_1: "Tamanho de mercado & contexto",
    proj_p_1: `Mercado global de suplementos anti‑idade ~${money(marketUSD)} (2025). CAGR próximo de 8% nas principais projeções setoriais.`,
    proj_title_2: "Cenários de alcance (sell‑out anual)",
    scenarios: [
      { label: "Participação 0,05%", value: marketUSD * 0.0005 },
      { label: "Participação 0,10%", value: marketUSD * 0.001 },
      { label: "Participação 0,25%", value: marketUSD * 0.0025 },
    ],

    why_title: "Por que parceiros escolhem o DermoRebirth™",
    why_points: [
      "Time‑to‑market a partir de 6–12 semanas (depende das operações do parceiro).",
      "Arquitetura bioativa em 5 pilares (hidratação, energia celular, equilíbrio oxidativo, modulação de senescência, suporte à autofagia) — detalhes sob NDA.",
      "Faixa de margem bruta de referência para nutracêuticos premium: 60–75% (ilustrativo).",
      "Exclusividade regional/categoria opcional vinculada a compromissos de volume.",
    ],

    partner_title: "Modelos de Licenciamento",
    partner_p:
      "Exclusividade por região/linha opcional, dossiê científico sob NDA, suporte em rotulagem/regulatório e materiais de lançamento.",
    partner_cta_1: "Falar com o time",
    partner_cta_2: "Solicitar NDA",

    news_title: "Novidades da CelluNOVA",
    news_p: "Entre para a lista de parceiros e receba materiais técnicos e oportunidades de licenciamento.",
    newsletter_placeholder: "Seu e‑mail corporativo",
    newsletter_cta: "Quero receber",
    footer_priv: "Política de Privacidade",
    footer_contact: "Contato",
    disclaimer: "*Não constitui alegação médica. Valores ilustrativos.",
    lang_switch_label: "Idioma:",
    lang_en: "EN",
    lang_pt: "PT",
  },
};

export default function Home({ searchParams }) {
  const lang = (searchParams && searchParams.lang === "pt") ? "pt" : "en";
  const t = dict[lang];
  const scenarios = t.scenarios; // language-aware labels
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* LANGUAGE TOGGLE */}
      <div className="container mx-auto px-6 max-w-7xl pt-4 flex justify-end text-sm text-slate-300/90">
        <span className="mr-2">{t.lang_switch_label}</span>
        <a href="?lang=en" className={`px-2 py-1 rounded ${lang==='en' ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'}`}>{t.lang_en}</a>
        <a href="?lang=pt" className={`ml-2 px-2 py-1 rounded ${lang==='pt' ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'}`}>{t.lang_pt}</a>
      </div>

      {/* HERO */}
      <section className="relative pt-6 pb-10">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex text-xs tracking-widest uppercase text-slate-300/80">{t.hero_kicker}</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
              {t.h1_a}<span className="text-fuchsia-400">{t.h1_b}</span>
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg max-w-xl">{t.hero_p}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#parceria" className="rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 px-6 py-3 text-white text-sm font-medium">{t.cta_primary}</a>
              <a href="#comparativo" className="rounded-2xl bg-white/10 hover:bg-white/20 px-6 py-3 text-white text-sm font-medium">{t.cta_secondary}</a>
            </div>
          </div>
          <div className="relative">
            <Image src="/propaganda-albert.png" alt="DermoRebirth™ campaign" width={900} height={900} className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl" priority />
          </div>
        </div>
      </section>

      {/* QUICK PROOF */}
      <section className="py-6 border-y border-white/5 bg-black/20 backdrop-blur">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.quickproof.map((txt, i) => (
            <div key={i} className="flex items-start gap-3"><div className="mt-0.5 text-fuchsia-300">●</div><div><p className="text-sm font-medium">{txt}</p></div></div>
          ))}
        </div>
      </section>

      {/* PILOT PRODUCT */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">{t.pilot_title}</h2>
            <p className="mt-3 text-slate-300/90 max-w-prose">{t.pilot_p}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <Image src="/produto-piloto.png" alt="CelluNOVA DermoRebirth™ bottle (pilot)" width={720} height={720} className="w-full h-auto rounded-xl border border-white/10" />
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="comparativo" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">{t.comp_title}</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">{t.comp_p}</p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-2">
              <thead className="text-slate-300/80">
                <tr>
                  {t.comp_headers.map((h, i) => (<th key={i} className="py-2">{h}</th>))}
                </tr>
              </thead>
              <tbody>
                {t.rows.map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-white/5/50" : "bg-white/5"}>
                    {r.map((cell, j) => (
                      <td key={j} className={`p-3 ${j === 0 ? 'font-medium' : ''}`}>
                        {/* turn specific cells into links when label matches */}
                        {(() => {
                          const os = lang==='en' ? 'Official site' : 'Site oficial';
                          const pr = lang==='en' ? 'Public revenue' : 'Receita pública';
                          if (cell === os) return <a className="underline" href="https://www.elysiumhealth.com/products/basis" target="_blank" rel="noreferrer">{cell}</a>;
                          if (cell === pr) return <a className="underline" href="https://companiesmarketcap.com/chromadex/revenue/" target="_blank" rel="noreferrer">{cell}</a>;
                          return cell;
                        })()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PROJECTIONS + CHART */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6 items-start">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-xl font-semibold mb-2">{t.proj_title_1}</div>
              <div className="space-y-3 text-sm text-slate-300/90">
                <p>{t.proj_p_1}</p>
                <p className="text-slate-300/80">{t.disclaimer}</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-xl font-semibold mb-2">{t.proj_title_2}</div>
              <Bars data={scenarios} />
            </div>
          </div>
        </div>
      </section>

      {/* Chart image (comparison) */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-2xl font-semibold">
            {lang === 'en' ? 'Refined benefit comparison — CelluNOVA vs top anti‑aging blends' : 'Comparativo refinado de benefícios — CelluNOVA vs blends líderes'}
          </h3>
          <div className="mt-4 bg-white/5 border border-white/10 rounded-2xl p-3">
            <Image src="/benefit-comparison.jpeg" alt={lang === 'en' ? 'Benefit comparison chart' : 'Gráfico de comparativo de benefícios'} width={1600} height={800} className="w-full h-auto rounded-xl border border-white/10" />
            <p className="mt-2 text-xs text-slate-400">
              {lang === 'en' ? 'Illustrative scoring (0–10) across key dimensions. Created for partner presentations; full method under NDA.' : 'Pontuação ilustrativa (0–10) em dimensões‑chave. Criado para apresentações a parceiros; método completo sob NDA.'}
            </p>
          </div>
        </div>
      </section>

      {/* WHY / VALUE WITH NUMBERS */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">{t.why_title}</h2>
          <ul className="mt-6 grid gap-3">
            {t.why_points.map((p, i) => (
              <li key={i} className="flex items-start gap-3"><div className="mt-0.5 text-fuchsia-300">●</div><span>{p}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section id="parceria" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">{t.partner_title}</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">{t.partner_p}</p>
          <div className="mt-6 flex gap-3">
            <a href="mailto:larissa.guimaraes@cellunovaresearch.com" className="rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 px-6 py-3 text-white text-sm font-medium">{t.partner_cta_1}</a>
            <a href="mailto:larissa.guimaraes@cellunovaresearch.com?subject=NDA%20Request%20-%20DermoRebirth&body=Hello%20CelluNOVA%20team%2C%0D%0A%0D%0APlease%20send%20the%20Mutual%20NDA%20for%20DermoRebirth%20licensing.%0D%0A%0D%0AThanks." className="rounded-2xl bg-white/10 hover:bg-white/20 px-6 py-3 text-white text-sm font-medium">{t.partner_cta_2}</a>
          </div>
          <p className="mt-3 text-slate-300/80 text-sm">
            {lang === 'en' ? 'Or email us directly at: ' : 'Ou envie um e-mail diretamente para: '}
            <a href="mailto:larissa.guimaraes@cellunovaresearch.com" className="underline break-words">larissa.guimaraes@cellunovaresearch.com</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 text-sm text-slate-400">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} CelluNOVA LTDA. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/politica-privacidade">{t.footer_priv}</a>
            <a href="mailto:larissa.guimaraes@cellunovaresearch.com">{t.footer_contact}</a>
          </div>
        </div>
      </footer>

      {/* JSON-LD (service) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'DermoRebirth™ blend licensing',
            provider: { '@type': 'Organization', name: 'CelluNOVA LTDA', email: 'larissa.guimaraes@cellunovaresearch.com', contactPoint: [{ '@type': 'ContactPoint', contactType: 'business development', email: 'larissa.guimaraes@cellunovaresearch.com' }] },
            serviceType: 'Licensing',
            areaServed: ['BR', 'US', 'EU'],
            description: 'B2B licensing of the proprietary DermoRebirth™ blend. Full formula disclosed only under NDA (no quantities).',
          }),
        }}
      />
    </main>
  );
}
