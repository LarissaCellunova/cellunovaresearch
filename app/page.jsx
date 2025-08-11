import React from "react";
import Image from "next/image";

// =====================================
// Home — CelluNOVA DermoRebirth™ (B2B)
// Refeito do zero, SEM dependências externas.
// Coloque as imagens em /public com estes nomes:
//   /propaganda-albert.png   (banner do HERO)
//   /produto-piloto.png      (frasco de referência)
// Se seu projeto estiver em TypeScript e der erro, salve este arquivo como page.jsx.
// =====================================

export const metadata = {
  title: "CelluNOVA DermoRebirth™ | Licenciamento do Blend (B2B)",
  description:
    "DermoRebirth™ é um blend proprietário para rejuvenescimento. Licenciamento para marcas parceiras. Fórmula revelada apenas sob NDA (sem quantidades).",
  openGraph: {
    title: "CelluNOVA DermoRebirth™ | Licenciamento do Blend (B2B)",
    description:
      "Blend proprietário para rejuvenescimento. Licenciamento corporativo. Fórmula revelada apenas sob NDA.",
    url: "https://www.cellunovaresearch.com/",
    siteName: "CelluNOVA Research",
    images: [{ url: "/propaganda-albert.png", width: 1200, height: 630, alt: "Campanha DermoRebirth™" }],
    locale: "pt_BR",
    type: "website",
  },
};

// ---- Helpers ----
const marketUSD = 4.88e9; // estimativa ilustrativa de mercado global 2025
const scenarios = [
  { label: "Participação 0,05%", value: marketUSD * 0.0005 },
  { label: "Participação 0,10%", value: marketUSD * 0.001 },
];
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

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HERO */}
      <section className="relative pt-24 pb-10">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex text-xs tracking-widest uppercase text-slate-300/80">Disponível para licenciamento</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
              CelluNOVA <span className="text-fuchsia-400">DermoRebirth™</span>
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
              Blend proprietário de rejuvenescimento para marcas que desejam lançar uma linha premium com base em evidências. A fórmula completa é fornecida apenas sob NDA — sem divulgar quantidades — e o detalhamento final ocorre após o fechamento do contrato.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#parceria" className="rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 px-6 py-3 text-white text-sm font-medium">Solicitar parceria</a>
              <a href="#comparativo" className="rounded-2xl bg-white/10 hover:bg-white/20 px-6 py-3 text-white text-sm font-medium">Ver comparativo</a>
            </div>
          </div>
          <div className="relative">
            <Image src="/propaganda-albert.png" alt="Campanha DermoRebirth™" width={900} height={900} className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl" priority />
          </div>
        </div>
      </section>

      {/* PROVAS RÁPIDAS */}
      <section className="py-6 border-y border-white/5 bg-black/20 backdrop-blur">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Blend proprietário (sob NDA)", "Modelo de licenciamento flexível", "Suporte técnico e regulatório", "Posicionamento premium"].map((t, i) => (
            <div key={i} className="flex items-start gap-3"><div className="mt-0.5 text-fuchsia-300">●</div><div><p className="text-sm font-medium">{t}</p></div></div>
          ))}
        </div>
      </section>

      {/* PRODUTO PILOTO */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Produto (piloto)</h2>
            <p className="mt-3 text-slate-300/90 max-w-prose">Referência visual (design/embalagem). Especificações e fornecedores são apresentados apenas sob NDA.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <Image src="/produto-piloto.png" alt="Frasco piloto CelluNOVA DermoRebirth™" width={720} height={720} className="w-full h-auto rounded-xl border border-white/10" />
          </div>
        </div>
      </section>

      {/* COMPARATIVO (alto nível) */}
      <section id="comparativo" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Comparativo de mercado (alto nível)</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">Informações públicas/estimativas. DermoRebirth™ mantém composição confidencial, detalhada apenas sob NDA.</p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-2">
              <thead className="text-slate-300/80">
                <tr>
                  <th className="py-2">Marca / Produto</th>
                  <th className="py-2">Núcleo da proposta</th>
                  <th className="py-2">Ângulo de posicionamento</th>
                  <th className="py-2">Modelo</th>
                  <th className="py-2">Notas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">CelluNOVA DermoRebirth™</td>
                  <td className="p-3">Composição proprietária (sob NDA)</td>
                  <td className="p-3">Rejuvenescimento / healthy aging*</td>
                  <td className="p-3">Licenciamento B2B; exclusividade opcional</td>
                  <td className="p-3">Dossiê técnico sob NDA</td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">Elysium Health — Basis</td>
                  <td className="p-3">Composição pública (NAD+ como foco)</td>
                  <td className="p-3">Envelhecimento celular / assinatura premium*</td>
                  <td className="p-3">B2C</td>
                  <td className="p-3"><a className="underline" href="https://www.elysiumhealth.com/products/basis" target="_blank" rel="noreferrer">Site oficial</a></td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">ChromaDex — Tru Niagen / Niagen®</td>
                  <td className="p-3">Composição pública (NAD+ como foco)</td>
                  <td className="p-3">Saúde metabólica / portfólio global*</td>
                  <td className="p-3">B2C + ingrediente B2B</td>
                  <td className="p-3"><a className="underline" href="https://companiesmarketcap.com/chromadex/revenue/" target="_blank" rel="noreferrer">Receita pública</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PROJEÇÕES + GRÁFICO */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6 items-start">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-xl font-semibold mb-2">Tamanho de mercado & contexto</div>
              <div className="space-y-3 text-sm text-slate-300/90">
                <p>Mercado global de suplementos anti-idade estimado em ~{money(marketUSD)} (2025). Crescimento anual composto próximo de 8% nas principais projeções setoriais.</p>
                <p className="text-slate-300/80">*Não constitui alegação médica. Valores ilustrativos.</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-xl font-semibold mb-2">Cenários de alcance (sell‑out anual)</div>
              <Bars data={scenarios} />
            </div>
          </div>
        </div>
      </section>

      {/* PARCERIA */}
      <section id="parceria" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Modelos de Licenciamento</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">Exclusividade por região/linha opcional, dossiê científico sob NDA, suporte em rotulagem/regulatório e materiais de lançamento.</p>
          <div className="mt-6 flex gap-3">
            <a href="/contato" className="rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 px-6 py-3 text-white text-sm font-medium">Falar com o time</a>
            <a href="#" className="rounded-2xl bg-white/10 hover:bg-white/20 px-6 py-3 text-white text-sm font-medium">Solicitar NDA</a>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold">Novidades da CelluNOVA</h3>
          <p className="mt-2 text-slate-300/90">Entre para a lista de parceiros e receba materiais técnicos e oportunidades de licenciamento.</p>
          <form className="mt-6 flex gap-3 justify-center">
            <input type="email" placeholder="Seu e-mail corporativo" className="max-w-sm w-full rounded-2xl bg-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500" />
            <button type="submit" className="rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 px-6 py-3 text-white text-sm font-medium">Quero receber</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 text-sm text-slate-400">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} CelluNOVA LTDA. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="/politica-privacidade">Política de Privacidade</a>
            <a href="/contato">Contato</a>
          </div>
        </div>
      </footer>

      {/* JSON-LD (serviço) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Licenciamento do blend DermoRebirth™',
            provider: { '@type': 'Organization', name: 'CelluNOVA LTDA' },
            serviceType: 'Licensing',
            areaServed: ['BR', 'US', 'EU'],
            description: 'Licenciamento B2B do blend proprietário DermoRebirth™. Fórmula revelada apenas sob NDA (sem quantidades).',
          }),
        }}
      />
    </main>
  );
}
