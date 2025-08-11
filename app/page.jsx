import React from "react";
import Image from "next/image";
import Link from "next/link";

// =============================
// CelluNOVA — Home (B2B Licensing)
// Pagina minimalista, sem dependências externas, segura para build na Vercel
// Coloque as imagens em /public/images/ com estes nomes:
//   - propaganda-albert.png (banner marketing no HERO)
//   - produto-piloto.png   (frasco de referência)
// Se estiver usando TypeScript, salve este arquivo como page.jsx para evitar erros de tipagem.
// =============================

export const metadata = {
  title: "CelluNOVA DermoRebirth™ | Licenciamento do Blend",
  description:
    "DermoRebirth™ é um blend proprietário para rejuvenescimento, disponível para licenciamento B2B. Fórmula revelada apenas sob NDA (sem quantidades).",
  openGraph: {
    title: "CelluNOVA DermoRebirth™ | Licenciamento do Blend",
    description:
      "Blend proprietário de rejuvenescimento, disponível para licenciamento a parceiros. Fórmula sob NDA.",
    url: "https://www.cellunovaresearch.com/",
    siteName: "CelluNOVA Research",
    images: [
      { url: "/propaganda-albert.png", width: 1200, height: 630, alt: "Campanha de marketing DermoRebirth™" },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

// -------- Helpers simples --------
function formatUSDShort(n) {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(1)}K`;
  return `$${n.toFixed(2)}`;
}

// Dados para projeções (ilustrativos — ajustar conforme estudos internos)
const marketUSD = 4.88e9; // tamanho de mercado global estimado 2025 (anti-aging supplements)
const scenarios = [
  { label: "Participação 0,05%", value: marketUSD * 0.0005 },
  { label: "Participação 0,10%", value: marketUSD * 0.001 },
];

function BarsSVG({ data }) {
  const chartWidth = 640;
  const barHeight = 28;
  const gap = 18;
  const maxVal = Math.max(...data.map((d) => d.value));
  const totalHeight = data.length * (barHeight + gap) + 10;
  return (
    <svg viewBox={`0 0 ${chartWidth} ${totalHeight}`} className="w-full h-auto">
      {data.map((d, i) => {
        const w = Math.round((d.value / maxVal) * (chartWidth - 140));
        const y = i * (barHeight + gap);
        return (
          <g key={i}>
            <text x="0" y={y + barHeight - 8} className="fill-white" fontSize="12">{d.label}</text>
            <rect x="140" y={y} width={w} height={barHeight} rx="8" className="fill-fuchsia-500" />
            <text x={140 + w + 8} y={y + barHeight - 8} className="fill-white" fontSize="12">{formatUSDShort(d.value)}</text>
          </g>
        );
      })}
    </svg>
  );
}

export default function Home() {
  const features = [
    { title: "Blend proprietário", text: "Fórmula confidencial revelada apenas sob NDA (sem quantidades)." },
    { title: "Pronto para licenciamento", text: "Modelos flexíveis, com opção de exclusividade por região/linha." },
    { title: "Suporte técnico", text: "Dossiê de referências e orientação regulatória/rotulagem." },
    { title: "Posicionamento premium", text: "Arquitetura de marca e materiais de lançamento inclusos." },
  ];

  const comparativo = [
    { marca: "CelluNOVA DermoRebirth™", core: "Composição proprietária (sob NDA)", claims: "Rejuvenescimento/healthy aging*", modelo: "Licenciamento B2B" , refs: "Dossiê técnico sob NDA" },
    { marca: "Elysium Health — Basis", core: "NR + pterostilbene (público)", claims: "Suporte a NAD+ e envelhecimento*", modelo: "B2C assinatura", refs: "Site e factsheet públicos" },
    { marca: "ChromaDex — Tru Niagen / Niagen®", core: "NR (público)", claims: "NAD+ e metabolismo celular*", modelo: "B2C global / ingrediente B2B", refs: "Relatórios e base de investidores" },
  ];

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
              Um blend proprietário de rejuvenescimento, desenvolvido para marcas que desejam lançar uma linha premium com base em evidências. A fórmula completa é fornecida apenas sob NDA — sem divulgação de quantidades — e o detalhamento final ocorre após o fechamento do contrato.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#parceria" className="rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 px-6 py-3 text-white text-sm font-medium">Solicitar parceria</Link>
              <Link href="#comparativo" className="rounded-2xl bg-white/10 hover:bg-white/20 px-6 py-3 text-white text-sm font-medium">Ver comparativo</Link>
            </div>
          </div>

          <div className="relative">
            <Image src="/images/propaganda-albert.png" alt="Campanha DermoRebirth™" width={900} height={900} className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl" priority />
          </div>
        </div>
      </section>

      {/* PROVAS RÁPIDAS */}
      <section className="py-6 border-y border-white/5 bg-black/20 backdrop-blur">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-0.5 text-fuchsia-300">●</div>
              <div>
                <p className="text-sm font-medium">{f.title}</p>
                <p className="text-xs text-slate-300/80">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUTO PILOTO + TEXTO */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Produto (piloto)</h2>
            <p className="mt-3 text-slate-300/90 max-w-prose">
              O frasco abaixo é uma referência visual do DermoRebirth™ para parceiros (design e embalagem do produto final). Especificações técnicas, fornecedores e protocolos de qualidade são apresentados apenas sob NDA.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <Image src="/images/produto-piloto.png" alt="Frasco piloto CelluNOVA DermoRebirth™" width={720} height={720} className="w-full h-auto rounded-xl border border-white/10" />
          </div>
        </div>
      </section>

      {/* COMPARATIVO DE MERCADO (alto nível, sem revelar fórmula) */}
      <section id="comparativo" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Comparativo de mercado (alto nível)</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Base comparativa com marcas de referência em rejuvenescimento. As informações abaixo são públicas ou sob estimativas de mercado. O DermoRebirth™ mantém sua composição confidencial e é detalhado apenas mediante NDA.
          </p>

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
                {comparativo.map((c, i) => (
                  <tr key={i} className={i % 2 ? "bg-white/5/50" : "bg-white/5"}>
                    <td className="p-3 font-medium">{c.marca}</td>
                    <td className="p-3">{c.core}</td>
                    <td className="p-3">{c.claims}</td>
                    <td className="p-3">{c.modelo}</td>
                    <td className="p-3">{c.refs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PROJEÇÕES com gráfico SVG */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6 items-start">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-xl font-semibold mb-2">Tamanho de mercado & contexto</div>
              <div className="space-y-3 text-sm text-slate-300/90">
                <p>Mercado global de suplementos anti-idade estimado em ~{formatUSDShort(marketUSD)} em 2025, com crescimento anual composto (CAGR) próximo de 8% em projeções setoriais.</p>
                <p className="text-slate-300/80">*Valores ilustrativos; use sua matriz de canais e margens para refinar a projeção.</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-xl font-semibold mb-2">Cenários de alcance (sell‑out anual)</div>
              <BarsSVG data={scenarios} />
            </div>
          </div>
        </div>
      </section>

      {/* PARCERIA */}
      <section id="parceria" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Modelos de Licenciamento</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">Exclusividade por região/linha opcional, dossiê científico sob NDA, suporte em rotulagem/regulatório e materiais de lançamento. Fale com nosso time para roadmap e MOQs.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/contato" className="rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-500 px-6 py-3 text-white text-sm font-medium">Falar com o time</Link>
            <Link href="#" className="rounded-2xl bg-white/10 hover:bg-white/20 px-6 py-3 text-white text-sm font-medium">Solicitar NDA</Link>
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
            <Link href="/politica-privacidade">Política de Privacidade</Link>
            <Link href="/contato">Contato</Link>
          </div>
        </div>
      </footer>

      {/* JSON-LD (Serviço de Licenciamento) */}
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
            description: 'Licenciamento B2B do blend proprietario DermoRebirth™. Fórmula revelada apenas sob NDA (sem quantidades).',
          }),
        }}
      />
    </main>
  );
}
