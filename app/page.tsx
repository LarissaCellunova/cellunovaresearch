"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, Leaf, Clock, CheckCircle2, Star, Microscope, Beaker, PackageCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "CelluNOVA DermoRebirth™ | Licenciamento de Blend – Bioactive Rejuvenation Formula",
  description:
    "DermoRebirth™ é o blend premium da CelluNOVA com Tremella, NMN, Chaga, Fisetina e Espermidina. Fórmula bioativa disponível para licenciamento B2B a empresas parceiras.",
  openGraph: {
    title: "CelluNOVA DermoRebirth™",
    description:
      "Blend premium com Tremella, NMN, Chaga, Fisetina e Espermidina. Disponível para licenciamento empresarial.",
    url: "https://www.cellunovaresearch.com/",
    siteName: "CelluNOVA Research",
    images: [
      {
        url: "/images/propaganda-albert.png",
        width: 1200,
        height: 630,
        alt: "Campanha CelluNOVA DermoRebirth™ — Genius is eternal. Now, youth is too.",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const features = [
  { icon: ShieldCheck, title: "Qualidade Premium", text: "Matérias-primas selecionadas e lote rastreável." },
  { icon: FlaskConical, title: "Baseado em Evidências", text: "Blend desenvolvido com literatura científica de referência.*" },
  { icon: Leaf, title: "Clean Label", text: "Sem corantes artificiais. Sem glúten." },
  { icon: Clock, title: "Pronto para Licenciamento", text: "Integração ágil no portfólio da empresa parceira." },
];

const benefits = [
  "Fórmula pronta para licenciamento e personalização pela empresa parceira",
  "Composição diferenciada com suporte científico*",
  "Potencial de posicionamento premium e alto LTV",
  "Exclusividade negociável por região/linha de produto",
];

const ingredients = [
  { name: "Tremella (Tremella fuciformis)", note: "Polissacarídeos associados à hidratação e elasticidade da pele*" },
  { name: "NMN (Nicotinamida Mononucleotídeo)", note: "Precursor de NAD+ para suporte metabólico celular*" },
  { name: "Chaga (Inonotus obliquus)", note: "Betaglucanos e polifenóis com ação antioxidante*" },
  { name: "Fisetina", note: "Flavonóide estudado em protocolos de longevidade*" },
  { name: "Espermidina", note: "Composto associado a processos autofágicos*" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HERO MARKETING (Propaganda Albert) */}
      <section id="hero" className="relative pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-slate-300/80">
              <PackageCheck className="size-4" /> Disponível para licenciamento
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
              CelluNOVA <span className="text-fuchsia-400">DermoRebirth™</span>
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
              Bioactive Rejuvenation Formula com Tremella, NMN, Chaga, Fisetina e Espermidina —
              pronta para integrar seu portfólio sob licenciamento B2B.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-6">
                <Link href="#parceria">Solicitar parceria</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-2xl px-6">
                <Link href="#comparativo">Ver comparativo</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-300/80">
              <Star className="size-4" /> Exclusividade negociável
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <Image
              src="/images/propaganda-albert.png"
              alt="Campanha de marketing DermoRebirth™"
              width={900}
              height={900}
              className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* STRIP DE PROVAS */}
      <section className="py-6 border-y border-white/5 bg-black/20 backdrop-blur">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="size-5 mt-0.5 text-fuchsia-300" />
              <div>
                <p className="text-sm font-medium">{f.title}</p>
                <p className="text-xs text-slate-300/80">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS + FOTO DO PRODUTO PILOTO */}
      <section id="beneficios" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Oportunidade de Parceria</h2>
            <p className="mt-3 text-slate-300/90 max-w-prose">
              Licencie o DermoRebirth™ e ofereça ao mercado um produto exclusivo, com formulação respaldada por evidências e alto valor agregado. Produto (piloto) abaixo é referência do design e embalagem final a ser oferecida.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 mt-0.5 text-fuchsia-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl">Produto (piloto)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src="/images/produto-piloto.png"
                alt="Frasco piloto CelluNOVA DermoRebirth™"
                width={720}
                height={720}
                className="w-full h-auto rounded-xl border border-white/10"
              />
              <div className="space-y-3">
                {ingredients.map((ing, i) => (
                  <div key={i} className="p-3 rounded-xl bg-black/30 border border-white/10">
                    <p className="font-medium">{ing.name}</p>
                    <p className="text-sm text-slate-300/80">{ing.note}</p>
                  </div>
                ))}
                <p className="text-xs text-slate-400 pt-1">
                  *As descrições referem-se a propriedades e literatura do(s) ingrediente(s). Consulte documentação técnica para detalhes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BASE CIENTÍFICA */}
      <section id="ciencia" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold">Base científica</h2>
              <p className="mt-3 text-slate-300/90 max-w-prose">
                Mantemos um dossiê de referências para cada ingrediente do blend, com foco em protocolos, segurança de uso e sinergias potenciais em adultos saudáveis. Resumos técnicos disponíveis mediante solicitação.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {["Tremella e hidratação cutânea", "NMN e metabolismo celular", "Chaga e polifenóis antioxidantes", "Fisetina e estudos de longevidade", "Espermidina e processos autofágicos"].map((t, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <Beaker className="size-5 mt-0.5 text-fuchsia-300" />
                    <div>
                      <p className="font-medium">{t}</p>
                      <p className="text-sm text-slate-300/80">Resumo técnico disponível mediante solicitação.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Transparência & Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>Lote rastreável e fornecedores com controle de qualidade.</p>
                <p>Boas Práticas de Fabricação (BPF/GMP) no processo do parceiro fabricante.</p>
                <p>Rótulo claro, sem promessas médicas. Indicado para maiores de 19 anos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COMPARATIVO DE MERCADO */}
      <section id="comparativo" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Comparativo de mercado (ingredientes & posicionamento)</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Abaixo, uma base comparativa lógica focada nos ingredientes principais e no posicionamento de mercado. Não se trata de equivalência clínica; usamos dados públicos e documentação de cada marca para comparação de proposta e composição.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-2">
              <thead className="text-slate-300/80">
                <tr>
                  <th className="py-2">Marca / Produto</th>
                  <th className="py-2">Core da fórmula</th>
                  <th className="py-2">Ângulo de claims</th>
                  <th className="py-2">Modelo</th>
                  <th className="py-2">Referências públicas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">CelluNOVA DermoRebirth™</td>
                  <td className="p-3">Tremella + NMN + Chaga + Fisetina + Espermidina</td>
                  <td className="p-3">Renovação celular, antioxidante, pele/vitalidade*</td>
                  <td className="p-3">Licenciamento B2B; exclusividade opcional</td>
                  <td className="p-3 text-fuchsia-200">Dossiê técnico sob NDA</td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">Elysium Health – Basis</td>
                  <td className="p-3">Nicotinamide Riboside (NR) + Pterostilbene</td>
                  <td className="p-3">Suporte a NAD+ e envelhecimento celular*</td>
                  <td className="p-3">B2C premium (assinatura)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/products/basis" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Site oficial</Link>
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/pages/basis-supplement-facts" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Fórmula pública</Link>
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">ChromaDex – Tru Niagen (portfólio NR)</td>
                  <td className="p-3">Nicotinamide Riboside (NR) como ativo principal</td>
                  <td className="p-3">Apoio a NAD+ e metabolismo celular*</td>
                  <td className="p-3">B2C global; ingrediente B2B (Niagen®)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://companiesmarketcap.com/chromadex/revenue/" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Receita 2024</Link>
                  </td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">NOVOS (linhas longevity)
                  </td>
                  <td className="p-3">Combinações pró-longevidade (varia por SKU)</td>
                  <td className="p-3">Healthy aging e performance*</td>
                  <td className="p-3">B2C digital-first</td>
                  <td className="p-3"><span className="text-slate-300/80">Dados públicos limitados</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PROJEÇÕES */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Tamanho de mercado & contexto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  O mercado global de suplementos anti-idade é estimado entre US$4.5–4.9 bi em 2024/2025, com CAGR ~8% até 2030–2034.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300/80">
                  <li>Fonte (estimativa): Grand View Research 2024 e Precedence Research 2025.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Cenário de alcance para parceiros (ilustrativo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  Considerando um parceiro com distribuição nacional capturando 0,05% do mercado global projetado para 2025 (~US$4,88 bi), o volume anual potencial seria ~US$2,44 mi em sell-out. Em 0,1%: ~US$4,88 mi. *Valores ilustrativos; validar com seu canal e mix de SKUs.*
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-6 text-xs text-slate-400">*As menções a benefícios referem-se a literatura de ingredientes. Não se trata de alegações medicinais.</p>
        </div>
      </section>

      {/* PARCERIA */}
      <section id="parceria" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Modelos de Licenciamento</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Trabalhamos com modelos flexíveis de licenciamento, incluindo exclusividade por setor, região ou canal de distribuição, suporte de dossiê técnico, referências científicas e orientação de rotulagem/posicionamento.
          </p>
          <div className="mt-6 flex gap-3">
            <Button size="lg" className="rounded-2xl"><Link href="/contato">Falar com nosso time</Link></Button>
            <Button size="lg" variant="secondary" className="rounded-2xl"><Link href="#ciencia">Ver ciência</Link></Button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold">Novidades da CelluNOVA</h3>
          <p className="mt-2 text-slate-300/90">Entre para a lista de parceiros e receba materiais técnicos e oportunidades de licenciamento.</p>
          <form className="mt-6 flex gap-3 justify-center">
            <Input type="email" placeholder="Seu e-mail corporativo" className="max-w-sm rounded-2xl" />
            <Button type="submit" className="rounded-2xl">Quero receber</Button>
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

      {/* Structured Data (JSON-LD) para Serviço de Licenciamento */}
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
            description: 'Licenciamento B2B do blend nutracêutico DermoRebirth™. Não vendemos ao consumidor final.'
          }),
        }}
      />
    </main>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, Leaf, Clock, CheckCircle2, Star, Microscope, Beaker, PackageCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "CelluNOVA DermoRebirth™ | Licenciamento de Blend – Bioactive Rejuvenation Formula",
  description:
    "DermoRebirth™ é o blend premium da CelluNOVA com Tremella, NMN, Chaga, Fisetina e Espermidina. Fórmula bioativa disponível para licenciamento B2B a empresas parceiras.",
  openGraph: {
    title: "CelluNOVA DermoRebirth™",
    description:
      "Blend premium com Tremella, NMN, Chaga, Fisetina e Espermidina. Disponível para licenciamento empresarial.",
    url: "https://www.cellunovaresearch.com/",
    siteName: "CelluNOVA Research",
    images: [
      {
        url: "/images/propaganda-albert.png",
        width: 1200,
        height: 630,
        alt: "Campanha CelluNOVA DermoRebirth™ — Genius is eternal. Now, youth is too.",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const features = [
  { icon: ShieldCheck, title: "Qualidade Premium", text: "Matérias-primas selecionadas e lote rastreável." },
  { icon: FlaskConical, title: "Baseado em Evidências", text: "Blend desenvolvido com literatura científica de referência.*" },
  { icon: Leaf, title: "Clean Label", text: "Sem corantes artificiais. Sem glúten." },
  { icon: Clock, title: "Pronto para Licenciamento", text: "Integração ágil no portfólio da empresa parceira." },
];

const benefits = [
  "Fórmula pronta para licenciamento e personalização pela empresa parceira",
  "Composição diferenciada com suporte científico*",
  "Potencial de posicionamento premium e alto LTV",
  "Exclusividade negociável por região/linha de produto",
];

const ingredients = [
  { name: "Tremella (Tremella fuciformis)", note: "Polissacarídeos associados à hidratação e elasticidade da pele*" },
  { name: "NMN (Nicotinamida Mononucleotídeo)", note: "Precursor de NAD+ para suporte metabólico celular*" },
  { name: "Chaga (Inonotus obliquus)", note: "Betaglucanos e polifenóis com ação antioxidante*" },
  { name: "Fisetina", note: "Flavonóide estudado em protocolos de longevidade*" },
  { name: "Espermidina", note: "Composto associado a processos autofágicos*" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HERO MARKETING (Propaganda Albert) */}
      <section id="hero" className="relative pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-slate-300/80">
              <PackageCheck className="size-4" /> Disponível para licenciamento
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
              CelluNOVA <span className="text-fuchsia-400">DermoRebirth™</span>
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
              Bioactive Rejuvenation Formula com Tremella, NMN, Chaga, Fisetina e Espermidina —
              pronta para integrar seu portfólio sob licenciamento B2B.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-6">
                <Link href="#parceria">Solicitar parceria</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-2xl px-6">
                <Link href="#comparativo">Ver comparativo</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-300/80">
              <Star className="size-4" /> Exclusividade negociável
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <Image
              src="/images/propaganda-albert.png"
              alt="Campanha de marketing DermoRebirth™"
              width={900}
              height={900}
              className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* STRIP DE PROVAS */}
      <section className="py-6 border-y border-white/5 bg-black/20 backdrop-blur">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="size-5 mt-0.5 text-fuchsia-300" />
              <div>
                <p className="text-sm font-medium">{f.title}</p>
                <p className="text-xs text-slate-300/80">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS + FOTO DO PRODUTO PILOTO */}
      <section id="beneficios" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Oportunidade de Parceria</h2>
            <p className="mt-3 text-slate-300/90 max-w-prose">
              Licencie o DermoRebirth™ e ofereça ao mercado um produto exclusivo, com formulação respaldada por evidências e alto valor agregado. Produto (piloto) abaixo é referência do design e embalagem final a ser oferecida.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 mt-0.5 text-fuchsia-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl">Produto (piloto)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src="/images/produto-piloto.png"
                alt="Frasco piloto CelluNOVA DermoRebirth™"
                width={720}
                height={720}
                className="w-full h-auto rounded-xl border border-white/10"
              />
              <div className="space-y-3">
                {ingredients.map((ing, i) => (
                  <div key={i} className="p-3 rounded-xl bg-black/30 border border-white/10">
                    <p className="font-medium">{ing.name}</p>
                    <p className="text-sm text-slate-300/80">{ing.note}</p>
                  </div>
                ))}
                <p className="text-xs text-slate-400 pt-1">
                  *As descrições referem-se a propriedades e literatura do(s) ingrediente(s). Consulte documentação técnica para detalhes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BASE CIENTÍFICA */}
      <section id="ciencia" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold">Base científica</h2>
              <p className="mt-3 text-slate-300/90 max-w-prose">
                Mantemos um dossiê de referências para cada ingrediente do blend, com foco em protocolos, segurança de uso e sinergias potenciais em adultos saudáveis. Resumos técnicos disponíveis mediante solicitação.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {["Tremella e hidratação cutânea", "NMN e metabolismo celular", "Chaga e polifenóis antioxidantes", "Fisetina e estudos de longevidade", "Espermidina e processos autofágicos"].map((t, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <Beaker className="size-5 mt-0.5 text-fuchsia-300" />
                    <div>
                      <p className="font-medium">{t}</p>
                      <p className="text-sm text-slate-300/80">Resumo técnico disponível mediante solicitação.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Transparência & Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>Lote rastreável e fornecedores com controle de qualidade.</p>
                <p>Boas Práticas de Fabricação (BPF/GMP) no processo do parceiro fabricante.</p>
                <p>Rótulo claro, sem promessas médicas. Indicado para maiores de 19 anos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COMPARATIVO DE MERCADO */}
      <section id="comparativo" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Comparativo de mercado (ingredientes & posicionamento)</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Abaixo, uma base comparativa lógica focada nos ingredientes principais e no posicionamento de mercado. Não se trata de equivalência clínica; usamos dados públicos e documentação de cada marca para comparação de proposta e composição.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-2">
              <thead className="text-slate-300/80">
                <tr>
                  <th className="py-2">Marca / Produto</th>
                  <th className="py-2">Core da fórmula</th>
                  <th className="py-2">Ângulo de claims</th>
                  <th className="py-2">Modelo</th>
                  <th className="py-2">Referências públicas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">CelluNOVA DermoRebirth™</td>
                  <td className="p-3">Tremella + NMN + Chaga + Fisetina + Espermidina</td>
                  <td className="p-3">Renovação celular, antioxidante, pele/vitalidade*</td>
                  <td className="p-3">Licenciamento B2B; exclusividade opcional</td>
                  <td className="p-3 text-fuchsia-200">Dossiê técnico sob NDA</td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">Elysium Health – Basis</td>
                  <td className="p-3">Nicotinamide Riboside (NR) + Pterostilbene</td>
                  <td className="p-3">Suporte a NAD+ e envelhecimento celular*</td>
                  <td className="p-3">B2C premium (assinatura)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/products/basis" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Site oficial</Link>
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/pages/basis-supplement-facts" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Fórmula pública</Link>
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">ChromaDex – Tru Niagen (portfólio NR)</td>
                  <td className="p-3">Nicotinamide Riboside (NR) como ativo principal</td>
                  <td className="p-3">Apoio a NAD+ e metabolismo celular*</td>
                  <td className="p-3">B2C global; ingrediente B2B (Niagen®)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://companiesmarketcap.com/chromadex/revenue/" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Receita 2024</Link>
                  </td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">NOVOS (linhas longevity)
                  </td>
                  <td className="p-3">Combinações pró-longevidade (varia por SKU)</td>
                  <td className="p-3">Healthy aging e performance*</td>
                  <td className="p-3">B2C digital-first</td>
                  <td className="p-3"><span className="text-slate-300/80">Dados públicos limitados</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PROJEÇÕES */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Tamanho de mercado & contexto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  O mercado global de suplementos anti-idade é estimado entre US$4.5–4.9 bi em 2024/2025, com CAGR ~8% até 2030–2034.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300/80">
                  <li>Fonte (estimativa): Grand View Research 2024 e Precedence Research 2025.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Cenário de alcance para parceiros (ilustrativo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  Considerando um parceiro com distribuição nacional capturando 0,05% do mercado global projetado para 2025 (~US$4,88 bi), o volume anual potencial seria ~US$2,44 mi em sell-out. Em 0,1%: ~US$4,88 mi. *Valores ilustrativos; validar com seu canal e mix de SKUs.*
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-6 text-xs text-slate-400">*As menções a benefícios referem-se a literatura de ingredientes. Não se trata de alegações medicinais.</p>
        </div>
      </section>

      {/* PARCERIA */}
      <section id="parceria" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Modelos de Licenciamento</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Trabalhamos com modelos flexíveis de licenciamento, incluindo exclusividade por setor, região ou canal de distribuição, suporte de dossiê técnico, referências científicas e orientação de rotulagem/posicionamento.
          </p>
          <div className="mt-6 flex gap-3">
            <Button size="lg" className="rounded-2xl"><Link href="/contato">Falar com nosso time</Link></Button>
            <Button size="lg" variant="secondary" className="rounded-2xl"><Link href="#ciencia">Ver ciência</Link></Button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold">Novidades da CelluNOVA</h3>
          <p className="mt-2 text-slate-300/90">Entre para a lista de parceiros e receba materiais técnicos e oportunidades de licenciamento.</p>
          <form className="mt-6 flex gap-3 justify-center">
            <Input type="email" placeholder="Seu e-mail corporativo" className="max-w-sm rounded-2xl" />
            <Button type="submit" className="rounded-2xl">Quero receber</Button>
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

      {/* Structured Data (JSON-LD) para Serviço de Licenciamento */}
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
            description: 'Licenciamento B2B do blend nutracêutico DermoRebirth™. Não vendemos ao consumidor final.'
          }),
        }}
      />
    </main>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, Leaf, Clock, CheckCircle2, Star, Microscope, Beaker, PackageCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "CelluNOVA DermoRebirth™ | Licenciamento de Blend – Bioactive Rejuvenation Formula",
  description:
    "DermoRebirth™ é o blend premium da CelluNOVA com Tremella, NMN, Chaga, Fisetina e Espermidina. Fórmula bioativa disponível para licenciamento B2B a empresas parceiras.",
  openGraph: {
    title: "CelluNOVA DermoRebirth™",
    description:
      "Blend premium com Tremella, NMN, Chaga, Fisetina e Espermidina. Disponível para licenciamento empresarial.",
    url: "https://www.cellunovaresearch.com/",
    siteName: "CelluNOVA Research",
    images: [
      {
        url: "/images/propaganda-albert.png",
        width: 1200,
        height: 630,
        alt: "Campanha CelluNOVA DermoRebirth™ — Genius is eternal. Now, youth is too.",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const features = [
  { icon: ShieldCheck, title: "Qualidade Premium", text: "Matérias-primas selecionadas e lote rastreável." },
  { icon: FlaskConical, title: "Baseado em Evidências", text: "Blend desenvolvido com literatura científica de referência.*" },
  { icon: Leaf, title: "Clean Label", text: "Sem corantes artificiais. Sem glúten." },
  { icon: Clock, title: "Pronto para Licenciamento", text: "Integração ágil no portfólio da empresa parceira." },
];

const benefits = [
  "Fórmula pronta para licenciamento e personalização pela empresa parceira",
  "Composição diferenciada com suporte científico*",
  "Potencial de posicionamento premium e alto LTV",
  "Exclusividade negociável por região/linha de produto",
];

const ingredients = [
  { name: "Tremella (Tremella fuciformis)", note: "Polissacarídeos associados à hidratação e elasticidade da pele*" },
  { name: "NMN (Nicotinamida Mononucleotídeo)", note: "Precursor de NAD+ para suporte metabólico celular*" },
  { name: "Chaga (Inonotus obliquus)", note: "Betaglucanos e polifenóis com ação antioxidante*" },
  { name: "Fisetina", note: "Flavonóide estudado em protocolos de longevidade*" },
  { name: "Espermidina", note: "Composto associado a processos autofágicos*" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HERO MARKETING (Propaganda Albert) */}
      <section id="hero" className="relative pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-slate-300/80">
              <PackageCheck className="size-4" /> Disponível para licenciamento
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
              CelluNOVA <span className="text-fuchsia-400">DermoRebirth™</span>
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
              Bioactive Rejuvenation Formula com Tremella, NMN, Chaga, Fisetina e Espermidina —
              pronta para integrar seu portfólio sob licenciamento B2B.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-6">
                <Link href="#parceria">Solicitar parceria</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-2xl px-6">
                <Link href="#comparativo">Ver comparativo</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-300/80">
              <Star className="size-4" /> Exclusividade negociável
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <Image
              src="/images/propaganda-albert.png"
              alt="Campanha de marketing DermoRebirth™"
              width={900}
              height={900}
              className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* STRIP DE PROVAS */}
      <section className="py-6 border-y border-white/5 bg-black/20 backdrop-blur">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="size-5 mt-0.5 text-fuchsia-300" />
              <div>
                <p className="text-sm font-medium">{f.title}</p>
                <p className="text-xs text-slate-300/80">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS + FOTO DO PRODUTO PILOTO */}
      <section id="beneficios" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Oportunidade de Parceria</h2>
            <p className="mt-3 text-slate-300/90 max-w-prose">
              Licencie o DermoRebirth™ e ofereça ao mercado um produto exclusivo, com formulação respaldada por evidências e alto valor agregado. Produto (piloto) abaixo é referência do design e embalagem final a ser oferecida.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 mt-0.5 text-fuchsia-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl">Produto (piloto)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src="/images/produto-piloto.png"
                alt="Frasco piloto CelluNOVA DermoRebirth™"
                width={720}
                height={720}
                className="w-full h-auto rounded-xl border border-white/10"
              />
              <div className="space-y-3">
                {ingredients.map((ing, i) => (
                  <div key={i} className="p-3 rounded-xl bg-black/30 border border-white/10">
                    <p className="font-medium">{ing.name}</p>
                    <p className="text-sm text-slate-300/80">{ing.note}</p>
                  </div>
                ))}
                <p className="text-xs text-slate-400 pt-1">
                  *As descrições referem-se a propriedades e literatura do(s) ingrediente(s). Consulte documentação técnica para detalhes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BASE CIENTÍFICA */}
      <section id="ciencia" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold">Base científica</h2>
              <p className="mt-3 text-slate-300/90 max-w-prose">
                Mantemos um dossiê de referências para cada ingrediente do blend, com foco em protocolos, segurança de uso e sinergias potenciais em adultos saudáveis. Resumos técnicos disponíveis mediante solicitação.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {["Tremella e hidratação cutânea", "NMN e metabolismo celular", "Chaga e polifenóis antioxidantes", "Fisetina e estudos de longevidade", "Espermidina e processos autofágicos"].map((t, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <Beaker className="size-5 mt-0.5 text-fuchsia-300" />
                    <div>
                      <p className="font-medium">{t}</p>
                      <p className="text-sm text-slate-300/80">Resumo técnico disponível mediante solicitação.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Transparência & Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>Lote rastreável e fornecedores com controle de qualidade.</p>
                <p>Boas Práticas de Fabricação (BPF/GMP) no processo do parceiro fabricante.</p>
                <p>Rótulo claro, sem promessas médicas. Indicado para maiores de 19 anos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COMPARATIVO DE MERCADO */}
      <section id="comparativo" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Comparativo de mercado (ingredientes & posicionamento)</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Abaixo, uma base comparativa lógica focada nos ingredientes principais e no posicionamento de mercado. Não se trata de equivalência clínica; usamos dados públicos e documentação de cada marca para comparação de proposta e composição.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-2">
              <thead className="text-slate-300/80">
                <tr>
                  <th className="py-2">Marca / Produto</th>
                  <th className="py-2">Core da fórmula</th>
                  <th className="py-2">Ângulo de claims</th>
                  <th className="py-2">Modelo</th>
                  <th className="py-2">Referências públicas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">CelluNOVA DermoRebirth™</td>
                  <td className="p-3">Tremella + NMN + Chaga + Fisetina + Espermidina</td>
                  <td className="p-3">Renovação celular, antioxidante, pele/vitalidade*</td>
                  <td className="p-3">Licenciamento B2B; exclusividade opcional</td>
                  <td className="p-3 text-fuchsia-200">Dossiê técnico sob NDA</td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">Elysium Health – Basis</td>
                  <td className="p-3">Nicotinamide Riboside (NR) + Pterostilbene</td>
                  <td className="p-3">Suporte a NAD+ e envelhecimento celular*</td>
                  <td className="p-3">B2C premium (assinatura)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/products/basis" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Site oficial</Link>
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/pages/basis-supplement-facts" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Fórmula pública</Link>
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">ChromaDex – Tru Niagen (portfólio NR)</td>
                  <td className="p-3">Nicotinamide Riboside (NR) como ativo principal</td>
                  <td className="p-3">Apoio a NAD+ e metabolismo celular*</td>
                  <td className="p-3">B2C global; ingrediente B2B (Niagen®)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://companiesmarketcap.com/chromadex/revenue/" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Receita 2024</Link>
                  </td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">NOVOS (linhas longevity)
                  </td>
                  <td className="p-3">Combinações pró-longevidade (varia por SKU)</td>
                  <td className="p-3">Healthy aging e performance*</td>
                  <td className="p-3">B2C digital-first</td>
                  <td className="p-3"><span className="text-slate-300/80">Dados públicos limitados</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PROJEÇÕES */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Tamanho de mercado & contexto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  O mercado global de suplementos anti-idade é estimado entre US$4.5–4.9 bi em 2024/2025, com CAGR ~8% até 2030–2034.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300/80">
                  <li>Fonte (estimativa): Grand View Research 2024 e Precedence Research 2025.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Cenário de alcance para parceiros (ilustrativo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  Considerando um parceiro com distribuição nacional capturando 0,05% do mercado global projetado para 2025 (~US$4,88 bi), o volume anual potencial seria ~US$2,44 mi em sell-out. Em 0,1%: ~US$4,88 mi. *Valores ilustrativos; validar com seu canal e mix de SKUs.*
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-6 text-xs text-slate-400">*As menções a benefícios referem-se a literatura de ingredientes. Não se trata de alegações medicinais.</p>
        </div>
      </section>

      {/* PARCERIA */}
      <section id="parceria" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Modelos de Licenciamento</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Trabalhamos com modelos flexíveis de licenciamento, incluindo exclusividade por setor, região ou canal de distribuição, suporte de dossiê técnico, referências científicas e orientação de rotulagem/posicionamento.
          </p>
          <div className="mt-6 flex gap-3">
            <Button size="lg" className="rounded-2xl"><Link href="/contato">Falar com nosso time</Link></Button>
            <Button size="lg" variant="secondary" className="rounded-2xl"><Link href="#ciencia">Ver ciência</Link></Button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold">Novidades da CelluNOVA</h3>
          <p className="mt-2 text-slate-300/90">Entre para a lista de parceiros e receba materiais técnicos e oportunidades de licenciamento.</p>
          <form className="mt-6 flex gap-3 justify-center">
            <Input type="email" placeholder="Seu e-mail corporativo" className="max-w-sm rounded-2xl" />
            <Button type="submit" className="rounded-2xl">Quero receber</Button>
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

      {/* Structured Data (JSON-LD) para Serviço de Licenciamento */}
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
            description: 'Licenciamento B2B do blend nutracêutico DermoRebirth™. Não vendemos ao consumidor final.'
          }),
        }}
      />
    </main>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, Leaf, Clock, CheckCircle2, Star, Microscope, Beaker, PackageCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "CelluNOVA DermoRebirth™ | Licenciamento de Blend – Bioactive Rejuvenation Formula",
  description:
    "DermoRebirth™ é o blend premium da CelluNOVA com Tremella, NMN, Chaga, Fisetina e Espermidina. Fórmula bioativa disponível para licenciamento B2B a empresas parceiras.",
  openGraph: {
    title: "CelluNOVA DermoRebirth™",
    description:
      "Blend premium com Tremella, NMN, Chaga, Fisetina e Espermidina. Disponível para licenciamento empresarial.",
    url: "https://www.cellunovaresearch.com/",
    siteName: "CelluNOVA Research",
    images: [
      {
        url: "/images/propaganda-albert.png",
        width: 1200,
        height: 630,
        alt: "Campanha CelluNOVA DermoRebirth™ — Genius is eternal. Now, youth is too.",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const features = [
  { icon: ShieldCheck, title: "Qualidade Premium", text: "Matérias-primas selecionadas e lote rastreável." },
  { icon: FlaskConical, title: "Baseado em Evidências", text: "Blend desenvolvido com literatura científica de referência.*" },
  { icon: Leaf, title: "Clean Label", text: "Sem corantes artificiais. Sem glúten." },
  { icon: Clock, title: "Pronto para Licenciamento", text: "Integração ágil no portfólio da empresa parceira." },
];

const benefits = [
  "Fórmula pronta para licenciamento e personalização pela empresa parceira",
  "Composição diferenciada com suporte científico*",
  "Potencial de posicionamento premium e alto LTV",
  "Exclusividade negociável por região/linha de produto",
];

const ingredients = [
  { name: "Tremella (Tremella fuciformis)", note: "Polissacarídeos associados à hidratação e elasticidade da pele*" },
  { name: "NMN (Nicotinamida Mononucleotídeo)", note: "Precursor de NAD+ para suporte metabólico celular*" },
  { name: "Chaga (Inonotus obliquus)", note: "Betaglucanos e polifenóis com ação antioxidante*" },
  { name: "Fisetina", note: "Flavonóide estudado em protocolos de longevidade*" },
  { name: "Espermidina", note: "Composto associado a processos autofágicos*" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HERO MARKETING (Propaganda Albert) */}
      <section id="hero" className="relative pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-slate-300/80">
              <PackageCheck className="size-4" /> Disponível para licenciamento
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
              CelluNOVA <span className="text-fuchsia-400">DermoRebirth™</span>
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
              Bioactive Rejuvenation Formula com Tremella, NMN, Chaga, Fisetina e Espermidina —
              pronta para integrar seu portfólio sob licenciamento B2B.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-6">
                <Link href="#parceria">Solicitar parceria</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-2xl px-6">
                <Link href="#comparativo">Ver comparativo</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-300/80">
              <Star className="size-4" /> Exclusividade negociável
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <Image
              src="/images/propaganda-albert.png"
              alt="Campanha de marketing DermoRebirth™"
              width={900}
              height={900}
              className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* STRIP DE PROVAS */}
      <section className="py-6 border-y border-white/5 bg-black/20 backdrop-blur">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="size-5 mt-0.5 text-fuchsia-300" />
              <div>
                <p className="text-sm font-medium">{f.title}</p>
                <p className="text-xs text-slate-300/80">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS + FOTO DO PRODUTO PILOTO */}
      <section id="beneficios" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Oportunidade de Parceria</h2>
            <p className="mt-3 text-slate-300/90 max-w-prose">
              Licencie o DermoRebirth™ e ofereça ao mercado um produto exclusivo, com formulação respaldada por evidências e alto valor agregado. Produto (piloto) abaixo é referência do design e embalagem final a ser oferecida.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 mt-0.5 text-fuchsia-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl">Produto (piloto)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src="/images/produto-piloto.png"
                alt="Frasco piloto CelluNOVA DermoRebirth™"
                width={720}
                height={720}
                className="w-full h-auto rounded-xl border border-white/10"
              />
              <div className="space-y-3">
                {ingredients.map((ing, i) => (
                  <div key={i} className="p-3 rounded-xl bg-black/30 border border-white/10">
                    <p className="font-medium">{ing.name}</p>
                    <p className="text-sm text-slate-300/80">{ing.note}</p>
                  </div>
                ))}
                <p className="text-xs text-slate-400 pt-1">
                  *As descrições referem-se a propriedades e literatura do(s) ingrediente(s). Consulte documentação técnica para detalhes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BASE CIENTÍFICA */}
      <section id="ciencia" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold">Base científica</h2>
              <p className="mt-3 text-slate-300/90 max-w-prose">
                Mantemos um dossiê de referências para cada ingrediente do blend, com foco em protocolos, segurança de uso e sinergias potenciais em adultos saudáveis. Resumos técnicos disponíveis mediante solicitação.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {["Tremella e hidratação cutânea", "NMN e metabolismo celular", "Chaga e polifenóis antioxidantes", "Fisetina e estudos de longevidade", "Espermidina e processos autofágicos"].map((t, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <Beaker className="size-5 mt-0.5 text-fuchsia-300" />
                    <div>
                      <p className="font-medium">{t}</p>
                      <p className="text-sm text-slate-300/80">Resumo técnico disponível mediante solicitação.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Transparência & Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>Lote rastreável e fornecedores com controle de qualidade.</p>
                <p>Boas Práticas de Fabricação (BPF/GMP) no processo do parceiro fabricante.</p>
                <p>Rótulo claro, sem promessas médicas. Indicado para maiores de 19 anos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COMPARATIVO DE MERCADO */}
      <section id="comparativo" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Comparativo de mercado (ingredientes & posicionamento)</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Abaixo, uma base comparativa lógica focada nos ingredientes principais e no posicionamento de mercado. Não se trata de equivalência clínica; usamos dados públicos e documentação de cada marca para comparação de proposta e composição.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-2">
              <thead className="text-slate-300/80">
                <tr>
                  <th className="py-2">Marca / Produto</th>
                  <th className="py-2">Core da fórmula</th>
                  <th className="py-2">Ângulo de claims</th>
                  <th className="py-2">Modelo</th>
                  <th className="py-2">Referências públicas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">CelluNOVA DermoRebirth™</td>
                  <td className="p-3">Tremella + NMN + Chaga + Fisetina + Espermidina</td>
                  <td className="p-3">Renovação celular, antioxidante, pele/vitalidade*</td>
                  <td className="p-3">Licenciamento B2B; exclusividade opcional</td>
                  <td className="p-3 text-fuchsia-200">Dossiê técnico sob NDA</td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">Elysium Health – Basis</td>
                  <td className="p-3">Nicotinamide Riboside (NR) + Pterostilbene</td>
                  <td className="p-3">Suporte a NAD+ e envelhecimento celular*</td>
                  <td className="p-3">B2C premium (assinatura)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/products/basis" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Site oficial</Link>
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/pages/basis-supplement-facts" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Fórmula pública</Link>
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">ChromaDex – Tru Niagen (portfólio NR)</td>
                  <td className="p-3">Nicotinamide Riboside (NR) como ativo principal</td>
                  <td className="p-3">Apoio a NAD+ e metabolismo celular*</td>
                  <td className="p-3">B2C global; ingrediente B2B (Niagen®)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://companiesmarketcap.com/chromadex/revenue/" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Receita 2024</Link>
                  </td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">NOVOS (linhas longevity)
                  </td>
                  <td className="p-3">Combinações pró-longevidade (varia por SKU)</td>
                  <td className="p-3">Healthy aging e performance*</td>
                  <td className="p-3">B2C digital-first</td>
                  <td className="p-3"><span className="text-slate-300/80">Dados públicos limitados</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PROJEÇÕES */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Tamanho de mercado & contexto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  O mercado global de suplementos anti-idade é estimado entre US$4.5–4.9 bi em 2024/2025, com CAGR ~8% até 2030–2034.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300/80">
                  <li>Fonte (estimativa): Grand View Research 2024 e Precedence Research 2025.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Cenário de alcance para parceiros (ilustrativo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  Considerando um parceiro com distribuição nacional capturando 0,05% do mercado global projetado para 2025 (~US$4,88 bi), o volume anual potencial seria ~US$2,44 mi em sell-out. Em 0,1%: ~US$4,88 mi. *Valores ilustrativos; validar com seu canal e mix de SKUs.*
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-6 text-xs text-slate-400">*As menções a benefícios referem-se a literatura de ingredientes. Não se trata de alegações medicinais.</p>
        </div>
      </section>

      {/* PARCERIA */}
      <section id="parceria" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Modelos de Licenciamento</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Trabalhamos com modelos flexíveis de licenciamento, incluindo exclusividade por setor, região ou canal de distribuição, suporte de dossiê técnico, referências científicas e orientação de rotulagem/posicionamento.
          </p>
          <div className="mt-6 flex gap-3">
            <Button size="lg" className="rounded-2xl"><Link href="/contato">Falar com nosso time</Link></Button>
            <Button size="lg" variant="secondary" className="rounded-2xl"><Link href="#ciencia">Ver ciência</Link></Button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold">Novidades da CelluNOVA</h3>
          <p className="mt-2 text-slate-300/90">Entre para a lista de parceiros e receba materiais técnicos e oportunidades de licenciamento.</p>
          <form className="mt-6 flex gap-3 justify-center">
            <Input type="email" placeholder="Seu e-mail corporativo" className="max-w-sm rounded-2xl" />
            <Button type="submit" className="rounded-2xl">Quero receber</Button>
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

      {/* Structured Data (JSON-LD) para Serviço de Licenciamento */}
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
            description: 'Licenciamento B2B do blend nutracêutico DermoRebirth™. Não vendemos ao consumidor final.'
          }),
        }}
      />
    </main>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, Leaf, Clock, CheckCircle2, Star, Microscope, Beaker, PackageCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "CelluNOVA DermoRebirth™ | Licenciamento de Blend – Bioactive Rejuvenation Formula",
  description:
    "DermoRebirth™ é o blend premium da CelluNOVA com Tremella, NMN, Chaga, Fisetina e Espermidina. Fórmula bioativa disponível para licenciamento B2B a empresas parceiras.",
  openGraph: {
    title: "CelluNOVA DermoRebirth™",
    description:
      "Blend premium com Tremella, NMN, Chaga, Fisetina e Espermidina. Disponível para licenciamento empresarial.",
    url: "https://www.cellunovaresearch.com/",
    siteName: "CelluNOVA Research",
    images: [
      {
        url: "/images/propaganda-albert.png",
        width: 1200,
        height: 630,
        alt: "Campanha CelluNOVA DermoRebirth™ — Genius is eternal. Now, youth is too.",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const features = [
  { icon: ShieldCheck, title: "Qualidade Premium", text: "Matérias-primas selecionadas e lote rastreável." },
  { icon: FlaskConical, title: "Baseado em Evidências", text: "Blend desenvolvido com literatura científica de referência.*" },
  { icon: Leaf, title: "Clean Label", text: "Sem corantes artificiais. Sem glúten." },
  { icon: Clock, title: "Pronto para Licenciamento", text: "Integração ágil no portfólio da empresa parceira." },
];

const benefits = [
  "Fórmula pronta para licenciamento e personalização pela empresa parceira",
  "Composição diferenciada com suporte científico*",
  "Potencial de posicionamento premium e alto LTV",
  "Exclusividade negociável por região/linha de produto",
];

const ingredients = [
  { name: "Tremella (Tremella fuciformis)", note: "Polissacarídeos associados à hidratação e elasticidade da pele*" },
  { name: "NMN (Nicotinamida Mononucleotídeo)", note: "Precursor de NAD+ para suporte metabólico celular*" },
  { name: "Chaga (Inonotus obliquus)", note: "Betaglucanos e polifenóis com ação antioxidante*" },
  { name: "Fisetina", note: "Flavonóide estudado em protocolos de longevidade*" },
  { name: "Espermidina", note: "Composto associado a processos autofágicos*" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HERO MARKETING (Propaganda Albert) */}
      <section id="hero" className="relative pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-slate-300/80">
              <PackageCheck className="size-4" /> Disponível para licenciamento
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
              CelluNOVA <span className="text-fuchsia-400">DermoRebirth™</span>
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
              Bioactive Rejuvenation Formula com Tremella, NMN, Chaga, Fisetina e Espermidina —
              pronta para integrar seu portfólio sob licenciamento B2B.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-6">
                <Link href="#parceria">Solicitar parceria</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-2xl px-6">
                <Link href="#comparativo">Ver comparativo</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-300/80">
              <Star className="size-4" /> Exclusividade negociável
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <Image
              src="/images/propaganda-albert.png"
              alt="Campanha de marketing DermoRebirth™"
              width={900}
              height={900}
              className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* STRIP DE PROVAS */}
      <section className="py-6 border-y border-white/5 bg-black/20 backdrop-blur">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="size-5 mt-0.5 text-fuchsia-300" />
              <div>
                <p className="text-sm font-medium">{f.title}</p>
                <p className="text-xs text-slate-300/80">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS + FOTO DO PRODUTO PILOTO */}
      <section id="beneficios" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Oportunidade de Parceria</h2>
            <p className="mt-3 text-slate-300/90 max-w-prose">
              Licencie o DermoRebirth™ e ofereça ao mercado um produto exclusivo, com formulação respaldada por evidências e alto valor agregado. Produto (piloto) abaixo é referência do design e embalagem final a ser oferecida.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 mt-0.5 text-fuchsia-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl">Produto (piloto)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src="/images/produto-piloto.png"
                alt="Frasco piloto CelluNOVA DermoRebirth™"
                width={720}
                height={720}
                className="w-full h-auto rounded-xl border border-white/10"
              />
              <div className="space-y-3">
                {ingredients.map((ing, i) => (
                  <div key={i} className="p-3 rounded-xl bg-black/30 border border-white/10">
                    <p className="font-medium">{ing.name}</p>
                    <p className="text-sm text-slate-300/80">{ing.note}</p>
                  </div>
                ))}
                <p className="text-xs text-slate-400 pt-1">
                  *As descrições referem-se a propriedades e literatura do(s) ingrediente(s). Consulte documentação técnica para detalhes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BASE CIENTÍFICA */}
      <section id="ciencia" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold">Base científica</h2>
              <p className="mt-3 text-slate-300/90 max-w-prose">
                Mantemos um dossiê de referências para cada ingrediente do blend, com foco em protocolos, segurança de uso e sinergias potenciais em adultos saudáveis. Resumos técnicos disponíveis mediante solicitação.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {["Tremella e hidratação cutânea", "NMN e metabolismo celular", "Chaga e polifenóis antioxidantes", "Fisetina e estudos de longevidade", "Espermidina e processos autofágicos"].map((t, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <Beaker className="size-5 mt-0.5 text-fuchsia-300" />
                    <div>
                      <p className="font-medium">{t}</p>
                      <p className="text-sm text-slate-300/80">Resumo técnico disponível mediante solicitação.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Transparência & Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>Lote rastreável e fornecedores com controle de qualidade.</p>
                <p>Boas Práticas de Fabricação (BPF/GMP) no processo do parceiro fabricante.</p>
                <p>Rótulo claro, sem promessas médicas. Indicado para maiores de 19 anos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COMPARATIVO DE MERCADO */}
      <section id="comparativo" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Comparativo de mercado (ingredientes & posicionamento)</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Abaixo, uma base comparativa lógica focada nos ingredientes principais e no posicionamento de mercado. Não se trata de equivalência clínica; usamos dados públicos e documentação de cada marca para comparação de proposta e composição.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-2">
              <thead className="text-slate-300/80">
                <tr>
                  <th className="py-2">Marca / Produto</th>
                  <th className="py-2">Core da fórmula</th>
                  <th className="py-2">Ângulo de claims</th>
                  <th className="py-2">Modelo</th>
                  <th className="py-2">Referências públicas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">CelluNOVA DermoRebirth™</td>
                  <td className="p-3">Tremella + NMN + Chaga + Fisetina + Espermidina</td>
                  <td className="p-3">Renovação celular, antioxidante, pele/vitalidade*</td>
                  <td className="p-3">Licenciamento B2B; exclusividade opcional</td>
                  <td className="p-3 text-fuchsia-200">Dossiê técnico sob NDA</td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">Elysium Health – Basis</td>
                  <td className="p-3">Nicotinamide Riboside (NR) + Pterostilbene</td>
                  <td className="p-3">Suporte a NAD+ e envelhecimento celular*</td>
                  <td className="p-3">B2C premium (assinatura)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/products/basis" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Site oficial</Link>
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/pages/basis-supplement-facts" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Fórmula pública</Link>
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">ChromaDex – Tru Niagen (portfólio NR)</td>
                  <td className="p-3">Nicotinamide Riboside (NR) como ativo principal</td>
                  <td className="p-3">Apoio a NAD+ e metabolismo celular*</td>
                  <td className="p-3">B2C global; ingrediente B2B (Niagen®)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://companiesmarketcap.com/chromadex/revenue/" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Receita 2024</Link>
                  </td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">NOVOS (linhas longevity)
                  </td>
                  <td className="p-3">Combinações pró-longevidade (varia por SKU)</td>
                  <td className="p-3">Healthy aging e performance*</td>
                  <td className="p-3">B2C digital-first</td>
                  <td className="p-3"><span className="text-slate-300/80">Dados públicos limitados</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PROJEÇÕES */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Tamanho de mercado & contexto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  O mercado global de suplementos anti-idade é estimado entre US$4.5–4.9 bi em 2024/2025, com CAGR ~8% até 2030–2034.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300/80">
                  <li>Fonte (estimativa): Grand View Research 2024 e Precedence Research 2025.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Cenário de alcance para parceiros (ilustrativo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  Considerando um parceiro com distribuição nacional capturando 0,05% do mercado global projetado para 2025 (~US$4,88 bi), o volume anual potencial seria ~US$2,44 mi em sell-out. Em 0,1%: ~US$4,88 mi. *Valores ilustrativos; validar com seu canal e mix de SKUs.*
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-6 text-xs text-slate-400">*As menções a benefícios referem-se a literatura de ingredientes. Não se trata de alegações medicinais.</p>
        </div>
      </section>

      {/* PARCERIA */}
      <section id="parceria" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Modelos de Licenciamento</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Trabalhamos com modelos flexíveis de licenciamento, incluindo exclusividade por setor, região ou canal de distribuição, suporte de dossiê técnico, referências científicas e orientação de rotulagem/posicionamento.
          </p>
          <div className="mt-6 flex gap-3">
            <Button size="lg" className="rounded-2xl"><Link href="/contato">Falar com nosso time</Link></Button>
            <Button size="lg" variant="secondary" className="rounded-2xl"><Link href="#ciencia">Ver ciência</Link></Button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold">Novidades da CelluNOVA</h3>
          <p className="mt-2 text-slate-300/90">Entre para a lista de parceiros e receba materiais técnicos e oportunidades de licenciamento.</p>
          <form className="mt-6 flex gap-3 justify-center">
            <Input type="email" placeholder="Seu e-mail corporativo" className="max-w-sm rounded-2xl" />
            <Button type="submit" className="rounded-2xl">Quero receber</Button>
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

      {/* Structured Data (JSON-LD) para Serviço de Licenciamento */}
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
            description: 'Licenciamento B2B do blend nutracêutico DermoRebirth™. Não vendemos ao consumidor final.'
          }),
        }}
      />
    </main>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, Leaf, Clock, CheckCircle2, Star, Microscope, Beaker, PackageCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "CelluNOVA DermoRebirth™ | Licenciamento de Blend – Bioactive Rejuvenation Formula",
  description:
    "DermoRebirth™ é o blend premium da CelluNOVA com Tremella, NMN, Chaga, Fisetina e Espermidina. Fórmula bioativa disponível para licenciamento B2B a empresas parceiras.",
  openGraph: {
    title: "CelluNOVA DermoRebirth™",
    description:
      "Blend premium com Tremella, NMN, Chaga, Fisetina e Espermidina. Disponível para licenciamento empresarial.",
    url: "https://www.cellunovaresearch.com/",
    siteName: "CelluNOVA Research",
    images: [
      {
        url: "/images/propaganda-albert.png",
        width: 1200,
        height: 630,
        alt: "Campanha CelluNOVA DermoRebirth™ — Genius is eternal. Now, youth is too.",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const features = [
  { icon: ShieldCheck, title: "Qualidade Premium", text: "Matérias-primas selecionadas e lote rastreável." },
  { icon: FlaskConical, title: "Baseado em Evidências", text: "Blend desenvolvido com literatura científica de referência.*" },
  { icon: Leaf, title: "Clean Label", text: "Sem corantes artificiais. Sem glúten." },
  { icon: Clock, title: "Pronto para Licenciamento", text: "Integração ágil no portfólio da empresa parceira." },
];

const benefits = [
  "Fórmula pronta para licenciamento e personalização pela empresa parceira",
  "Composição diferenciada com suporte científico*",
  "Potencial de posicionamento premium e alto LTV",
  "Exclusividade negociável por região/linha de produto",
];

const ingredients = [
  { name: "Tremella (Tremella fuciformis)", note: "Polissacarídeos associados à hidratação e elasticidade da pele*" },
  { name: "NMN (Nicotinamida Mononucleotídeo)", note: "Precursor de NAD+ para suporte metabólico celular*" },
  { name: "Chaga (Inonotus obliquus)", note: "Betaglucanos e polifenóis com ação antioxidante*" },
  { name: "Fisetina", note: "Flavonóide estudado em protocolos de longevidade*" },
  { name: "Espermidina", note: "Composto associado a processos autofágicos*" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HERO MARKETING (Propaganda Albert) */}
      <section id="hero" className="relative pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-slate-300/80">
              <PackageCheck className="size-4" /> Disponível para licenciamento
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
              CelluNOVA <span className="text-fuchsia-400">DermoRebirth™</span>
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
              Bioactive Rejuvenation Formula com Tremella, NMN, Chaga, Fisetina e Espermidina —
              pronta para integrar seu portfólio sob licenciamento B2B.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-6">
                <Link href="#parceria">Solicitar parceria</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-2xl px-6">
                <Link href="#comparativo">Ver comparativo</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-300/80">
              <Star className="size-4" /> Exclusividade negociável
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <Image
              src="/images/propaganda-albert.png"
              alt="Campanha de marketing DermoRebirth™"
              width={900}
              height={900}
              className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* STRIP DE PROVAS */}
      <section className="py-6 border-y border-white/5 bg-black/20 backdrop-blur">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="size-5 mt-0.5 text-fuchsia-300" />
              <div>
                <p className="text-sm font-medium">{f.title}</p>
                <p className="text-xs text-slate-300/80">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS + FOTO DO PRODUTO PILOTO */}
      <section id="beneficios" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Oportunidade de Parceria</h2>
            <p className="mt-3 text-slate-300/90 max-w-prose">
              Licencie o DermoRebirth™ e ofereça ao mercado um produto exclusivo, com formulação respaldada por evidências e alto valor agregado. Produto (piloto) abaixo é referência do design e embalagem final a ser oferecida.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 mt-0.5 text-fuchsia-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl">Produto (piloto)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src="/images/produto-piloto.png"
                alt="Frasco piloto CelluNOVA DermoRebirth™"
                width={720}
                height={720}
                className="w-full h-auto rounded-xl border border-white/10"
              />
              <div className="space-y-3">
                {ingredients.map((ing, i) => (
                  <div key={i} className="p-3 rounded-xl bg-black/30 border border-white/10">
                    <p className="font-medium">{ing.name}</p>
                    <p className="text-sm text-slate-300/80">{ing.note}</p>
                  </div>
                ))}
                <p className="text-xs text-slate-400 pt-1">
                  *As descrições referem-se a propriedades e literatura do(s) ingrediente(s). Consulte documentação técnica para detalhes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BASE CIENTÍFICA */}
      <section id="ciencia" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold">Base científica</h2>
              <p className="mt-3 text-slate-300/90 max-w-prose">
                Mantemos um dossiê de referências para cada ingrediente do blend, com foco em protocolos, segurança de uso e sinergias potenciais em adultos saudáveis. Resumos técnicos disponíveis mediante solicitação.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {["Tremella e hidratação cutânea", "NMN e metabolismo celular", "Chaga e polifenóis antioxidantes", "Fisetina e estudos de longevidade", "Espermidina e processos autofágicos"].map((t, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <Beaker className="size-5 mt-0.5 text-fuchsia-300" />
                    <div>
                      <p className="font-medium">{t}</p>
                      <p className="text-sm text-slate-300/80">Resumo técnico disponível mediante solicitação.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Transparência & Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>Lote rastreável e fornecedores com controle de qualidade.</p>
                <p>Boas Práticas de Fabricação (BPF/GMP) no processo do parceiro fabricante.</p>
                <p>Rótulo claro, sem promessas médicas. Indicado para maiores de 19 anos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COMPARATIVO DE MERCADO */}
      <section id="comparativo" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Comparativo de mercado (ingredientes & posicionamento)</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Abaixo, uma base comparativa lógica focada nos ingredientes principais e no posicionamento de mercado. Não se trata de equivalência clínica; usamos dados públicos e documentação de cada marca para comparação de proposta e composição.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-2">
              <thead className="text-slate-300/80">
                <tr>
                  <th className="py-2">Marca / Produto</th>
                  <th className="py-2">Core da fórmula</th>
                  <th className="py-2">Ângulo de claims</th>
                  <th className="py-2">Modelo</th>
                  <th className="py-2">Referências públicas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">CelluNOVA DermoRebirth™</td>
                  <td className="p-3">Tremella + NMN + Chaga + Fisetina + Espermidina</td>
                  <td className="p-3">Renovação celular, antioxidante, pele/vitalidade*</td>
                  <td className="p-3">Licenciamento B2B; exclusividade opcional</td>
                  <td className="p-3 text-fuchsia-200">Dossiê técnico sob NDA</td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">Elysium Health – Basis</td>
                  <td className="p-3">Nicotinamide Riboside (NR) + Pterostilbene</td>
                  <td className="p-3">Suporte a NAD+ e envelhecimento celular*</td>
                  <td className="p-3">B2C premium (assinatura)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/products/basis" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Site oficial</Link>
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/pages/basis-supplement-facts" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Fórmula pública</Link>
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">ChromaDex – Tru Niagen (portfólio NR)</td>
                  <td className="p-3">Nicotinamide Riboside (NR) como ativo principal</td>
                  <td className="p-3">Apoio a NAD+ e metabolismo celular*</td>
                  <td className="p-3">B2C global; ingrediente B2B (Niagen®)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://companiesmarketcap.com/chromadex/revenue/" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Receita 2024</Link>
                  </td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">NOVOS (linhas longevity)
                  </td>
                  <td className="p-3">Combinações pró-longevidade (varia por SKU)</td>
                  <td className="p-3">Healthy aging e performance*</td>
                  <td className="p-3">B2C digital-first</td>
                  <td className="p-3"><span className="text-slate-300/80">Dados públicos limitados</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PROJEÇÕES */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Tamanho de mercado & contexto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  O mercado global de suplementos anti-idade é estimado entre US$4.5–4.9 bi em 2024/2025, com CAGR ~8% até 2030–2034.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300/80">
                  <li>Fonte (estimativa): Grand View Research 2024 e Precedence Research 2025.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Cenário de alcance para parceiros (ilustrativo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  Considerando um parceiro com distribuição nacional capturando 0,05% do mercado global projetado para 2025 (~US$4,88 bi), o volume anual potencial seria ~US$2,44 mi em sell-out. Em 0,1%: ~US$4,88 mi. *Valores ilustrativos; validar com seu canal e mix de SKUs.*
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-6 text-xs text-slate-400">*As menções a benefícios referem-se a literatura de ingredientes. Não se trata de alegações medicinais.</p>
        </div>
      </section>

      {/* PARCERIA */}
      <section id="parceria" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Modelos de Licenciamento</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Trabalhamos com modelos flexíveis de licenciamento, incluindo exclusividade por setor, região ou canal de distribuição, suporte de dossiê técnico, referências científicas e orientação de rotulagem/posicionamento.
          </p>
          <div className="mt-6 flex gap-3">
            <Button size="lg" className="rounded-2xl"><Link href="/contato">Falar com nosso time</Link></Button>
            <Button size="lg" variant="secondary" className="rounded-2xl"><Link href="#ciencia">Ver ciência</Link></Button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold">Novidades da CelluNOVA</h3>
          <p className="mt-2 text-slate-300/90">Entre para a lista de parceiros e receba materiais técnicos e oportunidades de licenciamento.</p>
          <form className="mt-6 flex gap-3 justify-center">
            <Input type="email" placeholder="Seu e-mail corporativo" className="max-w-sm rounded-2xl" />
            <Button type="submit" className="rounded-2xl">Quero receber</Button>
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

      {/* Structured Data (JSON-LD) para Serviço de Licenciamento */}
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
            description: 'Licenciamento B2B do blend nutracêutico DermoRebirth™. Não vendemos ao consumidor final.'
          }),
        }}
      />
    </main>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, Leaf, Clock, CheckCircle2, Star, Microscope, Beaker, PackageCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "CelluNOVA DermoRebirth™ | Licenciamento de Blend – Bioactive Rejuvenation Formula",
  description:
    "DermoRebirth™ é o blend premium da CelluNOVA com Tremella, NMN, Chaga, Fisetina e Espermidina. Fórmula bioativa disponível para licenciamento B2B a empresas parceiras.",
  openGraph: {
    title: "CelluNOVA DermoRebirth™",
    description:
      "Blend premium com Tremella, NMN, Chaga, Fisetina e Espermidina. Disponível para licenciamento empresarial.",
    url: "https://www.cellunovaresearch.com/",
    siteName: "CelluNOVA Research",
    images: [
      {
        url: "/images/propaganda-albert.png",
        width: 1200,
        height: 630,
        alt: "Campanha CelluNOVA DermoRebirth™ — Genius is eternal. Now, youth is too.",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const features = [
  { icon: ShieldCheck, title: "Qualidade Premium", text: "Matérias-primas selecionadas e lote rastreável." },
  { icon: FlaskConical, title: "Baseado em Evidências", text: "Blend desenvolvido com literatura científica de referência.*" },
  { icon: Leaf, title: "Clean Label", text: "Sem corantes artificiais. Sem glúten." },
  { icon: Clock, title: "Pronto para Licenciamento", text: "Integração ágil no portfólio da empresa parceira." },
];

const benefits = [
  "Fórmula pronta para licenciamento e personalização pela empresa parceira",
  "Composição diferenciada com suporte científico*",
  "Potencial de posicionamento premium e alto LTV",
  "Exclusividade negociável por região/linha de produto",
];

const ingredients = [
  { name: "Tremella (Tremella fuciformis)", note: "Polissacarídeos associados à hidratação e elasticidade da pele*" },
  { name: "NMN (Nicotinamida Mononucleotídeo)", note: "Precursor de NAD+ para suporte metabólico celular*" },
  { name: "Chaga (Inonotus obliquus)", note: "Betaglucanos e polifenóis com ação antioxidante*" },
  { name: "Fisetina", note: "Flavonóide estudado em protocolos de longevidade*" },
  { name: "Espermidina", note: "Composto associado a processos autofágicos*" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HERO MARKETING (Propaganda Albert) */}
      <section id="hero" className="relative pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-slate-300/80">
              <PackageCheck className="size-4" /> Disponível para licenciamento
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
              CelluNOVA <span className="text-fuchsia-400">DermoRebirth™</span>
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
              Bioactive Rejuvenation Formula com Tremella, NMN, Chaga, Fisetina e Espermidina —
              pronta para integrar seu portfólio sob licenciamento B2B.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-6">
                <Link href="#parceria">Solicitar parceria</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-2xl px-6">
                <Link href="#comparativo">Ver comparativo</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-300/80">
              <Star className="size-4" /> Exclusividade negociável
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <Image
              src="/images/propaganda-albert.png"
              alt="Campanha de marketing DermoRebirth™"
              width={900}
              height={900}
              className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* STRIP DE PROVAS */}
      <section className="py-6 border-y border-white/5 bg-black/20 backdrop-blur">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="size-5 mt-0.5 text-fuchsia-300" />
              <div>
                <p className="text-sm font-medium">{f.title}</p>
                <p className="text-xs text-slate-300/80">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS + FOTO DO PRODUTO PILOTO */}
      <section id="beneficios" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Oportunidade de Parceria</h2>
            <p className="mt-3 text-slate-300/90 max-w-prose">
              Licencie o DermoRebirth™ e ofereça ao mercado um produto exclusivo, com formulação respaldada por evidências e alto valor agregado. Produto (piloto) abaixo é referência do design e embalagem final a ser oferecida.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 mt-0.5 text-fuchsia-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl">Produto (piloto)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src="/images/produto-piloto.png"
                alt="Frasco piloto CelluNOVA DermoRebirth™"
                width={720}
                height={720}
                className="w-full h-auto rounded-xl border border-white/10"
              />
              <div className="space-y-3">
                {ingredients.map((ing, i) => (
                  <div key={i} className="p-3 rounded-xl bg-black/30 border border-white/10">
                    <p className="font-medium">{ing.name}</p>
                    <p className="text-sm text-slate-300/80">{ing.note}</p>
                  </div>
                ))}
                <p className="text-xs text-slate-400 pt-1">
                  *As descrições referem-se a propriedades e literatura do(s) ingrediente(s). Consulte documentação técnica para detalhes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BASE CIENTÍFICA */}
      <section id="ciencia" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold">Base científica</h2>
              <p className="mt-3 text-slate-300/90 max-w-prose">
                Mantemos um dossiê de referências para cada ingrediente do blend, com foco em protocolos, segurança de uso e sinergias potenciais em adultos saudáveis. Resumos técnicos disponíveis mediante solicitação.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {["Tremella e hidratação cutânea", "NMN e metabolismo celular", "Chaga e polifenóis antioxidantes", "Fisetina e estudos de longevidade", "Espermidina e processos autofágicos"].map((t, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <Beaker className="size-5 mt-0.5 text-fuchsia-300" />
                    <div>
                      <p className="font-medium">{t}</p>
                      <p className="text-sm text-slate-300/80">Resumo técnico disponível mediante solicitação.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Transparência & Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>Lote rastreável e fornecedores com controle de qualidade.</p>
                <p>Boas Práticas de Fabricação (BPF/GMP) no processo do parceiro fabricante.</p>
                <p>Rótulo claro, sem promessas médicas. Indicado para maiores de 19 anos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COMPARATIVO DE MERCADO */}
      <section id="comparativo" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Comparativo de mercado (ingredientes & posicionamento)</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Abaixo, uma base comparativa lógica focada nos ingredientes principais e no posicionamento de mercado. Não se trata de equivalência clínica; usamos dados públicos e documentação de cada marca para comparação de proposta e composição.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-2">
              <thead className="text-slate-300/80">
                <tr>
                  <th className="py-2">Marca / Produto</th>
                  <th className="py-2">Core da fórmula</th>
                  <th className="py-2">Ângulo de claims</th>
                  <th className="py-2">Modelo</th>
                  <th className="py-2">Referências públicas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">CelluNOVA DermoRebirth™</td>
                  <td className="p-3">Tremella + NMN + Chaga + Fisetina + Espermidina</td>
                  <td className="p-3">Renovação celular, antioxidante, pele/vitalidade*</td>
                  <td className="p-3">Licenciamento B2B; exclusividade opcional</td>
                  <td className="p-3 text-fuchsia-200">Dossiê técnico sob NDA</td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">Elysium Health – Basis</td>
                  <td className="p-3">Nicotinamide Riboside (NR) + Pterostilbene</td>
                  <td className="p-3">Suporte a NAD+ e envelhecimento celular*</td>
                  <td className="p-3">B2C premium (assinatura)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/products/basis" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Site oficial</Link>
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/pages/basis-supplement-facts" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Fórmula pública</Link>
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">ChromaDex – Tru Niagen (portfólio NR)</td>
                  <td className="p-3">Nicotinamide Riboside (NR) como ativo principal</td>
                  <td className="p-3">Apoio a NAD+ e metabolismo celular*</td>
                  <td className="p-3">B2C global; ingrediente B2B (Niagen®)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://companiesmarketcap.com/chromadex/revenue/" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Receita 2024</Link>
                  </td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">NOVOS (linhas longevity)
                  </td>
                  <td className="p-3">Combinações pró-longevidade (varia por SKU)</td>
                  <td className="p-3">Healthy aging e performance*</td>
                  <td className="p-3">B2C digital-first</td>
                  <td className="p-3"><span className="text-slate-300/80">Dados públicos limitados</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PROJEÇÕES */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Tamanho de mercado & contexto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  O mercado global de suplementos anti-idade é estimado entre US$4.5–4.9 bi em 2024/2025, com CAGR ~8% até 2030–2034.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300/80">
                  <li>Fonte (estimativa): Grand View Research 2024 e Precedence Research 2025.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Cenário de alcance para parceiros (ilustrativo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  Considerando um parceiro com distribuição nacional capturando 0,05% do mercado global projetado para 2025 (~US$4,88 bi), o volume anual potencial seria ~US$2,44 mi em sell-out. Em 0,1%: ~US$4,88 mi. *Valores ilustrativos; validar com seu canal e mix de SKUs.*
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-6 text-xs text-slate-400">*As menções a benefícios referem-se a literatura de ingredientes. Não se trata de alegações medicinais.</p>
        </div>
      </section>

      {/* PARCERIA */}
      <section id="parceria" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Modelos de Licenciamento</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Trabalhamos com modelos flexíveis de licenciamento, incluindo exclusividade por setor, região ou canal de distribuição, suporte de dossiê técnico, referências científicas e orientação de rotulagem/posicionamento.
          </p>
          <div className="mt-6 flex gap-3">
            <Button size="lg" className="rounded-2xl"><Link href="/contato">Falar com nosso time</Link></Button>
            <Button size="lg" variant="secondary" className="rounded-2xl"><Link href="#ciencia">Ver ciência</Link></Button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold">Novidades da CelluNOVA</h3>
          <p className="mt-2 text-slate-300/90">Entre para a lista de parceiros e receba materiais técnicos e oportunidades de licenciamento.</p>
          <form className="mt-6 flex gap-3 justify-center">
            <Input type="email" placeholder="Seu e-mail corporativo" className="max-w-sm rounded-2xl" />
            <Button type="submit" className="rounded-2xl">Quero receber</Button>
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

      {/* Structured Data (JSON-LD) para Serviço de Licenciamento */}
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
            description: 'Licenciamento B2B do blend nutracêutico DermoRebirth™. Não vendemos ao consumidor final.'
          }),
        }}
      />
    </main>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, Leaf, Clock, CheckCircle2, Star, Microscope, Beaker, PackageCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "CelluNOVA DermoRebirth™ | Licenciamento de Blend – Bioactive Rejuvenation Formula",
  description:
    "DermoRebirth™ é o blend premium da CelluNOVA com Tremella, NMN, Chaga, Fisetina e Espermidina. Fórmula bioativa disponível para licenciamento B2B a empresas parceiras.",
  openGraph: {
    title: "CelluNOVA DermoRebirth™",
    description:
      "Blend premium com Tremella, NMN, Chaga, Fisetina e Espermidina. Disponível para licenciamento empresarial.",
    url: "https://www.cellunovaresearch.com/",
    siteName: "CelluNOVA Research",
    images: [
      {
        url: "/images/propaganda-albert.png",
        width: 1200,
        height: 630,
        alt: "Campanha CelluNOVA DermoRebirth™ — Genius is eternal. Now, youth is too.",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const features = [
  { icon: ShieldCheck, title: "Qualidade Premium", text: "Matérias-primas selecionadas e lote rastreável." },
  { icon: FlaskConical, title: "Baseado em Evidências", text: "Blend desenvolvido com literatura científica de referência.*" },
  { icon: Leaf, title: "Clean Label", text: "Sem corantes artificiais. Sem glúten." },
  { icon: Clock, title: "Pronto para Licenciamento", text: "Integração ágil no portfólio da empresa parceira." },
];

const benefits = [
  "Fórmula pronta para licenciamento e personalização pela empresa parceira",
  "Composição diferenciada com suporte científico*",
  "Potencial de posicionamento premium e alto LTV",
  "Exclusividade negociável por região/linha de produto",
];

const ingredients = [
  { name: "Tremella (Tremella fuciformis)", note: "Polissacarídeos associados à hidratação e elasticidade da pele*" },
  { name: "NMN (Nicotinamida Mononucleotídeo)", note: "Precursor de NAD+ para suporte metabólico celular*" },
  { name: "Chaga (Inonotus obliquus)", note: "Betaglucanos e polifenóis com ação antioxidante*" },
  { name: "Fisetina", note: "Flavonóide estudado em protocolos de longevidade*" },
  { name: "Espermidina", note: "Composto associado a processos autofágicos*" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HERO MARKETING (Propaganda Albert) */}
      <section id="hero" className="relative pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-slate-300/80">
              <PackageCheck className="size-4" /> Disponível para licenciamento
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
              CelluNOVA <span className="text-fuchsia-400">DermoRebirth™</span>
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
              Bioactive Rejuvenation Formula com Tremella, NMN, Chaga, Fisetina e Espermidina —
              pronta para integrar seu portfólio sob licenciamento B2B.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-6">
                <Link href="#parceria">Solicitar parceria</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-2xl px-6">
                <Link href="#comparativo">Ver comparativo</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-300/80">
              <Star className="size-4" /> Exclusividade negociável
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <Image
              src="/images/propaganda-albert.png"
              alt="Campanha de marketing DermoRebirth™"
              width={900}
              height={900}
              className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* STRIP DE PROVAS */}
      <section className="py-6 border-y border-white/5 bg-black/20 backdrop-blur">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="size-5 mt-0.5 text-fuchsia-300" />
              <div>
                <p className="text-sm font-medium">{f.title}</p>
                <p className="text-xs text-slate-300/80">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS + FOTO DO PRODUTO PILOTO */}
      <section id="beneficios" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Oportunidade de Parceria</h2>
            <p className="mt-3 text-slate-300/90 max-w-prose">
              Licencie o DermoRebirth™ e ofereça ao mercado um produto exclusivo, com formulação respaldada por evidências e alto valor agregado. Produto (piloto) abaixo é referência do design e embalagem final a ser oferecida.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 mt-0.5 text-fuchsia-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl">Produto (piloto)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src="/images/produto-piloto.png"
                alt="Frasco piloto CelluNOVA DermoRebirth™"
                width={720}
                height={720}
                className="w-full h-auto rounded-xl border border-white/10"
              />
              <div className="space-y-3">
                {ingredients.map((ing, i) => (
                  <div key={i} className="p-3 rounded-xl bg-black/30 border border-white/10">
                    <p className="font-medium">{ing.name}</p>
                    <p className="text-sm text-slate-300/80">{ing.note}</p>
                  </div>
                ))}
                <p className="text-xs text-slate-400 pt-1">
                  *As descrições referem-se a propriedades e literatura do(s) ingrediente(s). Consulte documentação técnica para detalhes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BASE CIENTÍFICA */}
      <section id="ciencia" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold">Base científica</h2>
              <p className="mt-3 text-slate-300/90 max-w-prose">
                Mantemos um dossiê de referências para cada ingrediente do blend, com foco em protocolos, segurança de uso e sinergias potenciais em adultos saudáveis. Resumos técnicos disponíveis mediante solicitação.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {["Tremella e hidratação cutânea", "NMN e metabolismo celular", "Chaga e polifenóis antioxidantes", "Fisetina e estudos de longevidade", "Espermidina e processos autofágicos"].map((t, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <Beaker className="size-5 mt-0.5 text-fuchsia-300" />
                    <div>
                      <p className="font-medium">{t}</p>
                      <p className="text-sm text-slate-300/80">Resumo técnico disponível mediante solicitação.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Transparência & Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>Lote rastreável e fornecedores com controle de qualidade.</p>
                <p>Boas Práticas de Fabricação (BPF/GMP) no processo do parceiro fabricante.</p>
                <p>Rótulo claro, sem promessas médicas. Indicado para maiores de 19 anos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COMPARATIVO DE MERCADO */}
      <section id="comparativo" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Comparativo de mercado (ingredientes & posicionamento)</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Abaixo, uma base comparativa lógica focada nos ingredientes principais e no posicionamento de mercado. Não se trata de equivalência clínica; usamos dados públicos e documentação de cada marca para comparação de proposta e composição.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-2">
              <thead className="text-slate-300/80">
                <tr>
                  <th className="py-2">Marca / Produto</th>
                  <th className="py-2">Core da fórmula</th>
                  <th className="py-2">Ângulo de claims</th>
                  <th className="py-2">Modelo</th>
                  <th className="py-2">Referências públicas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">CelluNOVA DermoRebirth™</td>
                  <td className="p-3">Tremella + NMN + Chaga + Fisetina + Espermidina</td>
                  <td className="p-3">Renovação celular, antioxidante, pele/vitalidade*</td>
                  <td className="p-3">Licenciamento B2B; exclusividade opcional</td>
                  <td className="p-3 text-fuchsia-200">Dossiê técnico sob NDA</td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">Elysium Health – Basis</td>
                  <td className="p-3">Nicotinamide Riboside (NR) + Pterostilbene</td>
                  <td className="p-3">Suporte a NAD+ e envelhecimento celular*</td>
                  <td className="p-3">B2C premium (assinatura)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/products/basis" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Site oficial</Link>
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/pages/basis-supplement-facts" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Fórmula pública</Link>
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">ChromaDex – Tru Niagen (portfólio NR)</td>
                  <td className="p-3">Nicotinamide Riboside (NR) como ativo principal</td>
                  <td className="p-3">Apoio a NAD+ e metabolismo celular*</td>
                  <td className="p-3">B2C global; ingrediente B2B (Niagen®)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://companiesmarketcap.com/chromadex/revenue/" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Receita 2024</Link>
                  </td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">NOVOS (linhas longevity)
                  </td>
                  <td className="p-3">Combinações pró-longevidade (varia por SKU)</td>
                  <td className="p-3">Healthy aging e performance*</td>
                  <td className="p-3">B2C digital-first</td>
                  <td className="p-3"><span className="text-slate-300/80">Dados públicos limitados</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PROJEÇÕES */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Tamanho de mercado & contexto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  O mercado global de suplementos anti-idade é estimado entre US$4.5–4.9 bi em 2024/2025, com CAGR ~8% até 2030–2034.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300/80">
                  <li>Fonte (estimativa): Grand View Research 2024 e Precedence Research 2025.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Cenário de alcance para parceiros (ilustrativo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  Considerando um parceiro com distribuição nacional capturando 0,05% do mercado global projetado para 2025 (~US$4,88 bi), o volume anual potencial seria ~US$2,44 mi em sell-out. Em 0,1%: ~US$4,88 mi. *Valores ilustrativos; validar com seu canal e mix de SKUs.*
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-6 text-xs text-slate-400">*As menções a benefícios referem-se a literatura de ingredientes. Não se trata de alegações medicinais.</p>
        </div>
      </section>

      {/* PARCERIA */}
      <section id="parceria" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Modelos de Licenciamento</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Trabalhamos com modelos flexíveis de licenciamento, incluindo exclusividade por setor, região ou canal de distribuição, suporte de dossiê técnico, referências científicas e orientação de rotulagem/posicionamento.
          </p>
          <div className="mt-6 flex gap-3">
            <Button size="lg" className="rounded-2xl"><Link href="/contato">Falar com nosso time</Link></Button>
            <Button size="lg" variant="secondary" className="rounded-2xl"><Link href="#ciencia">Ver ciência</Link></Button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold">Novidades da CelluNOVA</h3>
          <p className="mt-2 text-slate-300/90">Entre para a lista de parceiros e receba materiais técnicos e oportunidades de licenciamento.</p>
          <form className="mt-6 flex gap-3 justify-center">
            <Input type="email" placeholder="Seu e-mail corporativo" className="max-w-sm rounded-2xl" />
            <Button type="submit" className="rounded-2xl">Quero receber</Button>
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

      {/* Structured Data (JSON-LD) para Serviço de Licenciamento */}
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
            description: 'Licenciamento B2B do blend nutracêutico DermoRebirth™. Não vendemos ao consumidor final.'
          }),
        }}
      />
    </main>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, Leaf, Clock, CheckCircle2, Star, Microscope, Beaker, PackageCheck, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "CelluNOVA DermoRebirth™ | Licenciamento de Blend – Bioactive Rejuvenation Formula",
  description:
    "DermoRebirth™ é o blend premium da CelluNOVA com Tremella, NMN, Chaga, Fisetina e Espermidina. Fórmula bioativa disponível para licenciamento B2B a empresas parceiras.",
  openGraph: {
    title: "CelluNOVA DermoRebirth™",
    description:
      "Blend premium com Tremella, NMN, Chaga, Fisetina e Espermidina. Disponível para licenciamento empresarial.",
    url: "https://www.cellunovaresearch.com/",
    siteName: "CelluNOVA Research",
    images: [
      {
        url: "/images/propaganda-albert.png",
        width: 1200,
        height: 630,
        alt: "Campanha CelluNOVA DermoRebirth™ — Genius is eternal. Now, youth is too.",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const features = [
  { icon: ShieldCheck, title: "Qualidade Premium", text: "Matérias-primas selecionadas e lote rastreável." },
  { icon: FlaskConical, title: "Baseado em Evidências", text: "Blend desenvolvido com literatura científica de referência.*" },
  { icon: Leaf, title: "Clean Label", text: "Sem corantes artificiais. Sem glúten." },
  { icon: Clock, title: "Pronto para Licenciamento", text: "Integração ágil no portfólio da empresa parceira." },
];

const benefits = [
  "Fórmula pronta para licenciamento e personalização pela empresa parceira",
  "Composição diferenciada com suporte científico*",
  "Potencial de posicionamento premium e alto LTV",
  "Exclusividade negociável por região/linha de produto",
];

const ingredients = [
  { name: "Tremella (Tremella fuciformis)", note: "Polissacarídeos associados à hidratação e elasticidade da pele*" },
  { name: "NMN (Nicotinamida Mononucleotídeo)", note: "Precursor de NAD+ para suporte metabólico celular*" },
  { name: "Chaga (Inonotus obliquus)", note: "Betaglucanos e polifenóis com ação antioxidante*" },
  { name: "Fisetina", note: "Flavonóide estudado em protocolos de longevidade*" },
  { name: "Espermidina", note: "Composto associado a processos autofágicos*" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HERO MARKETING (Propaganda Albert) */}
      <section id="hero" className="relative pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-slate-300/80">
              <PackageCheck className="size-4" /> Disponível para licenciamento
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
              CelluNOVA <span className="text-fuchsia-400">DermoRebirth™</span>
            </h1>
            <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
              Bioactive Rejuvenation Formula com Tremella, NMN, Chaga, Fisetina e Espermidina —
              pronta para integrar seu portfólio sob licenciamento B2B.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-6">
                <Link href="#parceria">Solicitar parceria</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-2xl px-6">
                <Link href="#comparativo">Ver comparativo</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-300/80">
              <Star className="size-4" /> Exclusividade negociável
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <Image
              src="/images/propaganda-albert.png"
              alt="Campanha de marketing DermoRebirth™"
              width={900}
              height={900}
              className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* STRIP DE PROVAS */}
      <section className="py-6 border-y border-white/5 bg-black/20 backdrop-blur">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="size-5 mt-0.5 text-fuchsia-300" />
              <div>
                <p className="text-sm font-medium">{f.title}</p>
                <p className="text-xs text-slate-300/80">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS + FOTO DO PRODUTO PILOTO */}
      <section id="beneficios" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Oportunidade de Parceria</h2>
            <p className="mt-3 text-slate-300/90 max-w-prose">
              Licencie o DermoRebirth™ e ofereça ao mercado um produto exclusivo, com formulação respaldada por evidências e alto valor agregado. Produto (piloto) abaixo é referência do design e embalagem final a ser oferecida.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 mt-0.5 text-fuchsia-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl">Produto (piloto)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src="/images/produto-piloto.png"
                alt="Frasco piloto CelluNOVA DermoRebirth™"
                width={720}
                height={720}
                className="w-full h-auto rounded-xl border border-white/10"
              />
              <div className="space-y-3">
                {ingredients.map((ing, i) => (
                  <div key={i} className="p-3 rounded-xl bg-black/30 border border-white/10">
                    <p className="font-medium">{ing.name}</p>
                    <p className="text-sm text-slate-300/80">{ing.note}</p>
                  </div>
                ))}
                <p className="text-xs text-slate-400 pt-1">
                  *As descrições referem-se a propriedades e literatura do(s) ingrediente(s). Consulte documentação técnica para detalhes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* BASE CIENTÍFICA */}
      <section id="ciencia" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold">Base científica</h2>
              <p className="mt-3 text-slate-300/90 max-w-prose">
                Mantemos um dossiê de referências para cada ingrediente do blend, com foco em protocolos, segurança de uso e sinergias potenciais em adultos saudáveis. Resumos técnicos disponíveis mediante solicitação.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {["Tremella e hidratação cutânea", "NMN e metabolismo celular", "Chaga e polifenóis antioxidantes", "Fisetina e estudos de longevidade", "Espermidina e processos autofágicos"].map((t, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <Beaker className="size-5 mt-0.5 text-fuchsia-300" />
                    <div>
                      <p className="font-medium">{t}</p>
                      <p className="text-sm text-slate-300/80">Resumo técnico disponível mediante solicitação.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Transparência & Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>Lote rastreável e fornecedores com controle de qualidade.</p>
                <p>Boas Práticas de Fabricação (BPF/GMP) no processo do parceiro fabricante.</p>
                <p>Rótulo claro, sem promessas médicas. Indicado para maiores de 19 anos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COMPARATIVO DE MERCADO */}
      <section id="comparativo" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Comparativo de mercado (ingredientes & posicionamento)</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Abaixo, uma base comparativa lógica focada nos ingredientes principais e no posicionamento de mercado. Não se trata de equivalência clínica; usamos dados públicos e documentação de cada marca para comparação de proposta e composição.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-2">
              <thead className="text-slate-300/80">
                <tr>
                  <th className="py-2">Marca / Produto</th>
                  <th className="py-2">Core da fórmula</th>
                  <th className="py-2">Ângulo de claims</th>
                  <th className="py-2">Modelo</th>
                  <th className="py-2">Referências públicas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">CelluNOVA DermoRebirth™</td>
                  <td className="p-3">Tremella + NMN + Chaga + Fisetina + Espermidina</td>
                  <td className="p-3">Renovação celular, antioxidante, pele/vitalidade*</td>
                  <td className="p-3">Licenciamento B2B; exclusividade opcional</td>
                  <td className="p-3 text-fuchsia-200">Dossiê técnico sob NDA</td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">Elysium Health – Basis</td>
                  <td className="p-3">Nicotinamide Riboside (NR) + Pterostilbene</td>
                  <td className="p-3">Suporte a NAD+ e envelhecimento celular*</td>
                  <td className="p-3">B2C premium (assinatura)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/products/basis" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Site oficial</Link>
                    <Link className="inline-flex items-center gap-1 underline" href="https://www.elysiumhealth.com/pages/basis-supplement-facts" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Fórmula pública</Link>
                  </td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-3 font-medium">ChromaDex – Tru Niagen (portfólio NR)</td>
                  <td className="p-3">Nicotinamide Riboside (NR) como ativo principal</td>
                  <td className="p-3">Apoio a NAD+ e metabolismo celular*</td>
                  <td className="p-3">B2C global; ingrediente B2B (Niagen®)</td>
                  <td className="p-3 flex gap-3 flex-wrap">
                    <Link className="inline-flex items-center gap-1 underline" href="https://companiesmarketcap.com/chromadex/revenue/" target="_blank" rel="noreferrer"><ExternalLink className="size-3"/>Receita 2024</Link>
                  </td>
                </tr>
                <tr className="bg-white/5/50">
                  <td className="p-3 font-medium">NOVOS (linhas longevity)
                  </td>
                  <td className="p-3">Combinações pró-longevidade (varia por SKU)</td>
                  <td className="p-3">Healthy aging e performance*</td>
                  <td className="p-3">B2C digital-first</td>
                  <td className="p-3"><span className="text-slate-300/80">Dados públicos limitados</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PROJEÇÕES */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Tamanho de mercado & contexto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  O mercado global de suplementos anti-idade é estimado entre US$4.5–4.9 bi em 2024/2025, com CAGR ~8% até 2030–2034.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300/80">
                  <li>Fonte (estimativa): Grand View Research 2024 e Precedence Research 2025.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl">Cenário de alcance para parceiros (ilustrativo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300/90">
                <p>
                  Considerando um parceiro com distribuição nacional capturando 0,05% do mercado global projetado para 2025 (~US$4,88 bi), o volume anual potencial seria ~US$2,44 mi em sell-out. Em 0,1%: ~US$4,88 mi. *Valores ilustrativos; validar com seu canal e mix de SKUs.*
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-6 text-xs text-slate-400">*As menções a benefícios referem-se a literatura de ingredientes. Não se trata de alegações medicinais.</p>
        </div>
      </section>

      {/* PARCERIA */}
      <section id="parceria" className="py-16 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold">Modelos de Licenciamento</h2>
          <p className="mt-3 text-slate-300/90 max-w-prose">
            Trabalhamos com modelos flexíveis de licenciamento, incluindo exclusividade por setor, região ou canal de distribuição, suporte de dossiê técnico, referências científicas e orientação de rotulagem/posicionamento.
          </p>
          <div className="mt-6 flex gap-3">
            <Button size="lg" className="rounded-2xl"><Link href="/contato">Falar com nosso time</Link></Button>
            <Button size="lg" variant="secondary" className="rounded-2xl"><Link href="#ciencia">Ver ciência</Link></Button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold">Novidades da CelluNOVA</h3>
          <p className="mt-2 text-slate-300/90">Entre para a lista de parceiros e receba materiais técnicos e oportunidades de licenciamento.</p>
          <form className="mt-6 flex gap-3 justify-center">
            <Input type="email" placeholder="Seu e-mail corporativo" className="max-w-sm rounded-2xl" />
            <Button type="submit" className="rounded-2xl">Quero receber</Button>
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

      {/* Structured Data (JSON-LD) para Serviço de Licenciamento */}
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
            description: 'Licenciamento B2B do blend nutracêutico DermoRebirth™. Não vendemos ao consumidor final.'
          }),
        }}
      />
    </main>
  );
}
