'use client'

import Image from "next/image";
import Header from './components/Header'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-[#111111] pt-28 pb-32">
          {/* Grid decorativo */}
          <div className="absolute inset-0 z-0">
            <div className="container h-full mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 h-full border-x border-[#222222]">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border-r border-[#222222]" />
                ))}
              </div>
            </div>
          </div>

          {/* Imagem de fundo */}
          <div className="absolute right-0 top-0 h-full w-1/2 z-0">
            <div className="relative h-full">
        <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop"
                alt="Interior arquitetônico minimalista"
                fill
                className="object-cover object-center opacity-40 mix-blend-luminosity"
          priority
        />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#111111]/90 to-[#111111]" />
            </div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="animate-fade-in mb-12">
                <div className="flex items-center space-x-4">
                  <div className="line-detail" />
                  <span className="text-sm uppercase tracking-wider text-[#D4B98C]">
                    Arquitetura Digital
                  </span>
                </div>
              </div>

              <h1 className="animate-slide-up text-6xl md:text-7xl lg:text-8xl font-light mb-12 leading-[1.1]">
                Sua Arquitetura <br />
                <span className="font-normal text-[#D4B98C]">Merece Brilhar</span> <br />
                no Digital
              </h1>
              
              <p className="animate-slide-up text-xl md:text-2xl mb-16 text-[#999999] delay-100 max-w-2xl leading-relaxed">
                Criamos sites exclusivos para arquitetos que buscam transmitir elegância e sofisticação em cada pixel.
              </p>
              
              <div className="animate-slide-up delay-200 flex flex-col sm:flex-row gap-6">
                <a 
                  href="https://wa.me/5543996096047?text=Olá!%20Gostaria%20de%20iniciar%20um%20projeto%20para%20meu%20site%20profissional."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Iniciar Projeto
                </a>
              </div>
                </div>
              </div>


          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-0 w-full z-20">
            <div className="container">
              <div className="flex items-center space-x-4">
                <div className="line-detail" />
                <span className="text-sm uppercase tracking-wider text-[#999999] animate-pulse">
                  Scroll para explorar
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios Section */}
        <section id="beneficios" className="relative bg-[#111111] py-32">
          {/* Grid decorativo */}
          <div className="absolute inset-0 z-0">
            <div className="container h-full mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 h-full border-x border-[#222222]">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border-r border-[#222222]" />
                ))}
              </div>
            </div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Cabeçalho da seção */}
              <div className="text-center mb-24">
                <div className="animate-fade-in flex items-center justify-center space-x-4 mb-8">
                  <div className="line-detail" />
                  <span className="text-sm uppercase tracking-wider text-[#D4B98C]">
                    Por que nos escolher
                  </span>
                  <div className="line-detail" />
                </div>
                <h2 className="animate-slide-up text-5xl md:text-6xl font-light mb-8">
                  Benefícios de um <span className="text-[#D4B98C]">Site Profissional</span>
                </h2>
                <p className="animate-slide-up text-[#999999] text-xl max-w-3xl mx-auto">
                  Transforme sua presença online com um site que reflete a sofisticação do seu trabalho
                </p>
              </div>

              {/* Grid de benefícios */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* Benefício 1 */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4B98C] to-[#111111] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-sm" />
                  <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500">
                    <div className="flex items-start space-x-6">
                      <span className="text-[#D4B98C] text-4xl font-light">01</span>
                      <div>
                        <h3 className="text-2xl font-light mb-4">Credibilidade Instantânea</h3>
                        <p className="text-[#999999] leading-relaxed">
                          Impressione seus clientes desde o primeiro contato com um site que transmite profissionalismo e excelência.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefício 2 */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4B98C] to-[#111111] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-sm" />
                  <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500">
                    <div className="flex items-start space-x-6">
                      <span className="text-[#D4B98C] text-4xl font-light">02</span>
                      <div>
                        <h3 className="text-2xl font-light mb-4">Visibilidade no Google</h3>
                        <p className="text-[#999999] leading-relaxed">
                          Seja encontrado por clientes que buscam por arquitetos na sua região através de um site otimizado para SEO.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefício 3 */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4B98C] to-[#111111] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-sm" />
                  <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500">
                    <div className="flex items-start space-x-6">
                      <span className="text-[#D4B98C] text-4xl font-light">03</span>
                      <div>
                        <h3 className="text-2xl font-light mb-4">Portfólio Elegante</h3>
                        <p className="text-[#999999] leading-relaxed">
                          Apresente seus projetos de forma profissional e impactante, com galerias interativas e layouts personalizados.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefício 4 */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4B98C] to-[#111111] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-sm" />
                  <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500">
                    <div className="flex items-start space-x-6">
                      <span className="text-[#D4B98C] text-4xl font-light">04</span>
                      <div>
                        <h3 className="text-2xl font-light mb-4">Leads Qualificados</h3>
                        <p className="text-[#999999] leading-relaxed">
                          Capture leads de qualidade com formulários estratégicos e chamadas para ação eficientes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-24">
                <a 
                  href="https://wa.me/5543996096047?text=Olá!%20Gostaria%20de%20iniciar%20um%20projeto%20para%20meu%20site%20profissional."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Comece seu Projeto
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona Section */}
        <section id="portfolio" className="relative bg-[#111111] py-32 overflow-hidden">
          {/* Grid decorativo */}
          <div className="absolute inset-0 z-0">
            <div className="container h-full mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 h-full border-x border-[#222222]">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border-r border-[#222222]" />
                ))}
              </div>
            </div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Cabeçalho da seção */}
              <div className="text-center mb-24">
                <div className="animate-fade-in flex items-center justify-center space-x-4 mb-8">
                  <div className="line-detail" />
                  <span className="text-sm uppercase tracking-wider text-[#D4B98C]">
                    Processo Simplificado
                  </span>
                  <div className="line-detail" />
                </div>
                <h2 className="animate-slide-up text-5xl md:text-6xl font-light mb-8">
                  Como <span className="text-[#D4B98C]">Funciona</span>
                </h2>
                <p className="animate-slide-up text-[#999999] text-xl max-w-3xl mx-auto">
                  Um processo transparente e eficiente para criar seu site em apenas 4 dias
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Linha conectora */}
                <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[#222222] hidden md:block" />
                
                {/* Etapas */}
                <div className="space-y-24 relative">
                  {/* Etapa 1 */}
                  <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                    <div className="md:text-right md:w-1/2 animate-slide-up">
                      <span className="text-sm text-[#D4B98C] uppercase tracking-wider mb-4 block">Dia 1</span>
                      <h3 className="text-3xl font-light mb-4">Briefing & Design</h3>
                      <p className="text-[#999999] leading-relaxed">
                        Entendemos suas necessidades e preferências para criar um design único que reflita sua identidade profissional.
                      </p>
                    </div>
                    <div className="relative md:w-1/2 flex md:justify-start justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#D4B98C] flex items-center justify-center relative">
                        <span className="text-[#D4B98C] text-xl font-light">01</span>
                      </div>
                    </div>
                  </div>

                  {/* Etapa 2 */}
                  <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
                    <div className="md:text-left md:w-1/2 animate-slide-up">
                      <span className="text-sm text-[#D4B98C] uppercase tracking-wider mb-4 block">Dia 2</span>
                      <h3 className="text-3xl font-light mb-4">Desenvolvimento</h3>
                      <p className="text-[#999999] leading-relaxed">
                        Implementamos seu site com as melhores tecnologias, garantindo performance e responsividade.
                      </p>
                    </div>
                    <div className="relative md:w-1/2 flex md:justify-end justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#D4B98C] flex items-center justify-center">
                        <span className="text-[#D4B98C] text-xl font-light">02</span>
                      </div>
                    </div>
                  </div>

                  {/* Etapa 3 */}
                  <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                    <div className="md:text-right md:w-1/2 animate-slide-up">
                      <span className="text-sm text-[#D4B98C] uppercase tracking-wider mb-4 block">Dia 3</span>
                      <h3 className="text-3xl font-light mb-4">Revisão & Ajustes</h3>
                      <p className="text-[#999999] leading-relaxed">
                        Refinamos cada detalhe do seu site com base no seu feedback para garantir a perfeição.
                      </p>
                    </div>
                    <div className="relative md:w-1/2 flex md:justify-start justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#D4B98C] flex items-center justify-center">
                        <span className="text-[#D4B98C] text-xl font-light">03</span>
                      </div>
                    </div>
                  </div>

                  {/* Etapa 4 */}
                  <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
                    <div className="md:text-left md:w-1/2 animate-slide-up">
                      <span className="text-sm text-[#D4B98C] uppercase tracking-wider mb-4 block">Dia 4</span>
                      <h3 className="text-3xl font-light mb-4">Lançamento</h3>
                      <p className="text-[#999999] leading-relaxed">
                        Seu site vai ao ar com todas as otimizações necessárias para começar a atrair clientes imediatamente.
                      </p>
                    </div>
                    <div className="relative md:w-1/2 flex md:justify-end justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#D4B98C] flex items-center justify-center">
                        <span className="text-[#D4B98C] text-xl font-light">04</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-32">
                <p className="text-[#999999] mb-8 text-lg">
                  Pronto para transformar sua presença digital?
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="https://wa.me/5543996096047?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20processo%20de%20criação%20do%20site."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Iniciar Projeto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por que ter um site Section */}
        <section className="relative bg-[#1A1A1A] py-32">
          {/* Grid decorativo */}
          <div className="absolute inset-0 z-0">
            <div className="container h-full mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 h-full border-x border-[#222222]">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border-r border-[#222222]" />
                ))}
              </div>
            </div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Cabeçalho da seção */}
              <div className="text-center mb-24">
                <div className="animate-fade-in flex items-center justify-center space-x-4 mb-8">
                  <div className="line-detail" />
                  <span className="text-sm uppercase tracking-wider text-[#D4B98C]">
                    Presença Digital
                  </span>
                  <div className="line-detail" />
                </div>
                <h2 className="animate-slide-up text-5xl md:text-6xl font-light mb-8">
                  Por que arquitetos <span className="text-[#D4B98C]">precisam</span> de um site?
                </h2>
                <p className="animate-slide-up text-[#999999] text-xl max-w-3xl mx-auto">
                  Muitos arquitetos sofrem para conseguir clientes porque:
                </p>
              </div>

              {/* Problemas e Solução */}
              <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                {/* Coluna dos Problemas */}
                <div className="space-y-8">
                  {/* Problema 1 */}
                  <div className="group">
                    <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-12 bg-[#D4B98C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="pl-4">
                        <p className="text-[#999999] leading-relaxed">
                          Dependem apenas de indicações e não têm um fluxo previsível de projetos
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Problema 2 */}
                  <div className="group">
                    <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-12 bg-[#D4B98C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="pl-4">
                        <p className="text-[#999999] leading-relaxed">
                          Não aparecem no Google quando potenciais clientes pesquisam arquitetos na região
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Problema 3 */}
                  <div className="group">
                    <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-12 bg-[#D4B98C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="pl-4">
                        <p className="text-[#999999] leading-relaxed">
                          Têm um portfólio incrível, mas não sabem como apresentá-lo profissionalmente
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Problema 4 */}
                  <div className="group">
                    <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-12 bg-[#D4B98C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="pl-4">
                        <p className="text-[#999999] leading-relaxed">
                          Gastam tempo demais respondendo leads frios que não fecham contrato
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coluna da Solução */}
                <div className="relative">
                  <div className="sticky top-32">
                    <div className="relative">
                      <div className="absolute -left-12 top-0 bottom-0 w-px bg-[#D4B98C]" />
                      <div className="space-y-8">
                        <h3 className="text-4xl font-light">A <span className="text-[#D4B98C]">solução?</span></h3>
                        <p className="text-2xl text-white leading-relaxed">
                          Um site estratégico, feito para vender seus serviços no piloto automático!
                        </p>
                        <div className="pt-8">
                          <a 
                            href="https://wa.me/5543996096047?text=Olá!%20Quero%20saber%20mais%20sobre%20como%20ter%20um%20site%20profissional%20para%20ajudar%20no%20meu%20negócio."
            target="_blank"
            rel="noopener noreferrer"
                            className="btn-primary"
                          >
                            Quero um Site Profissional
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investimento Section */}
        <section className="relative bg-[#111111] py-32">
          {/* Grid decorativo */}
          <div className="absolute inset-0 z-0">
            <div className="container h-full mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 h-full border-x border-[#222222]">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border-r border-[#222222]" />
                ))}
              </div>
            </div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Cabeçalho da seção */}
              <div className="text-center mb-24">
                <div className="animate-fade-in flex items-center justify-center space-x-4 mb-8">
                  <div className="line-detail" />
                  <span className="text-sm uppercase tracking-wider text-[#D4B98C]">
                    Investimento
                  </span>
                  <div className="line-detail" />
                </div>
                <h2 className="animate-slide-up text-5xl md:text-6xl font-light mb-8">
                  Quanto custa investir em um <span className="text-[#D4B98C]">site profissional?</span>
                </h2>
                <p className="animate-slide-up text-2xl text-white font-light max-w-3xl mx-auto italic">
                  Pense assim: quanto vale um cliente novo para você?
                </p>
              </div>

              {/* Benefícios do Investimento */}
              <div className="grid md:grid-cols-3 gap-8 mb-24">
                <div className="group">
                  <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500 h-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#D4B98C] flex items-center justify-center">
                        <span className="text-[#D4B98C] text-2xl">💎</span>
                      </div>
                    </div>
                    <div className="pt-12 text-center">
                      <p className="text-[#999999] leading-relaxed">
                        Um site profissional pode gerar clientes continuamente, sem esforço
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500 h-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#D4B98C] flex items-center justify-center">
                        <span className="text-[#D4B98C] text-2xl">📈</span>
                      </div>
                    </div>
                    <div className="pt-12 text-center">
                      <p className="text-[#999999] leading-relaxed">
                        Diferente de anúncios pagos, um site bem feito atrai tráfego gratuito do Google
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500 h-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#D4B98C] flex items-center justify-center">
                        <span className="text-[#D4B98C] text-2xl">💰</span>
                      </div>
                    </div>
                    <div className="pt-12 text-center">
                      <p className="text-[#999999] leading-relaxed">
                        Arquitetos com um site profissional conseguem cobrar mais por seus serviços, aumentando o faturamento
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Planos */}
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Plano Básico */}
                <div className="group">
                  <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4B98C] to-[#111111] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-sm" />
                    <div className="p-8 md:p-12 relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-light">Plano Básico</h3>
                        <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#D4B98C] flex items-center justify-center">
                          <span className="text-[#D4B98C] text-xl">1</span>
                        </div>
                      </div>
                      <p className="text-[#999999] leading-relaxed mb-8">
                        Para quem quer um site profissional simples e eficiente
                      </p>
                      <a 
                        href="https://wa.me/5543996096047?text=Olá!%20Gostaria%20de%20iniciar%20um%20projeto%20para%20meu%20site%20profissional."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary w-full inline-block text-center"
                      >
                        Solicitar Orçamento
                      </a>
                    </div>
                  </div>
                </div>

                {/* Plano Completo */}
                <div className="group">
                  <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4B98C] to-[#111111] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-sm" />
                    <div className="p-8 md:p-12 relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-light">Plano Completo</h3>
                        <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#D4B98C] flex items-center justify-center">
                          <span className="text-[#D4B98C] text-xl">2</span>
                        </div>
                      </div>
                      <p className="text-[#999999] leading-relaxed mb-8">
                        Site + gestão de tráfego para resultados ainda mais rápidos
                      </p>
                      <a 
                        href="https://wa.me/5543996096047?text=Olá!%20Gostaria%20de%20iniciar%20um%20projeto%20para%20meu%20site%20profissional."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full inline-block text-center"
                      >
                        Solicitar Orçamento
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Final */}
              <div className="text-center mt-24">
                <p className="text-[#999999] mb-8 text-lg">
                  Pronto para investir no crescimento do seu negócio?
                </p>
                <a 
                  href="https://wa.me/5543996096047?text=Olá!%20Gostaria%20de%20iniciar%20um%20projeto%20para%20meu%20site%20profissional."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  Faça já o seu orçamento!
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative bg-[#1A1A1A] py-32">
          {/* Grid decorativo */}
          <div className="absolute inset-0 z-0">
            <div className="container h-full mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 h-full border-x border-[#222222]">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border-r border-[#222222]" />
                ))}
              </div>
            </div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              {/* Cabeçalho da seção */}
              <div className="text-center mb-24">
                <div className="animate-fade-in flex items-center justify-center space-x-4 mb-8">
                  <div className="line-detail" />
                  <span className="text-sm uppercase tracking-wider text-[#D4B98C]">
                    Tire Suas Dúvidas
                  </span>
                  <div className="line-detail" />
                </div>
                <h2 className="animate-slide-up text-5xl md:text-6xl font-light mb-8">
                  Perguntas <span className="text-[#D4B98C]">Frequentes</span>
                </h2>
                <p className="animate-slide-up text-[#999999] text-xl max-w-3xl mx-auto">
                  Encontre respostas para as principais dúvidas sobre nosso serviço
                </p>
              </div>

              {/* Acordeon de FAQs */}
              <div className="space-y-4">
                {[
                  {
                    pergunta: "Quanto tempo leva para o site ficar pronto?",
                    resposta: "O processo completo leva apenas 4 dias, desde o briefing inicial até o lançamento. Trabalhamos de forma ágil e focada para entregar seu site rapidamente, sem comprometer a qualidade."
                  },
                  {
                    pergunta: "Preciso ter experiência técnica para atualizar o site?",
                    resposta: "Não! Desenvolvemos uma interface administrativa intuitiva e oferecemos treinamento completo para você adicionar projetos. Além disso, fornecemos suporte contínuo para ajudar quando precisar."
                  },
                  {
                    pergunta: "O site será otimizado para o Google?",
                    resposta: "Sim! Todos os nossos sites são desenvolvidos seguindo as melhores práticas de SEO (Otimização para Mecanismos de Busca). Isso ajuda seu site a aparecer melhor nas pesquisas do Google quando potenciais clientes procuram por arquitetos na sua região."
                  },
                  {
                    pergunta: "Como funciona o processo de pagamento?",
                    resposta: "Oferecemos condições flexíveis de pagamento, com entrada de 50% + parcelamento em até 12x nos cartões. Também aceitamos PIX e transferência bancária com condições especiais."
                  },
                  {
                    pergunta: "O site será responsivo para dispositivos móveis?",
                    resposta: "Sim! Seu site funcionará perfeitamente em qualquer dispositivo: computadores, tablets e smartphones. Hoje, mais de 60% dos acessos vêm de dispositivos móveis, por isso damos atenção especial a essa experiência."
                  },
                  {
                    pergunta: "O que está incluído no serviço?",
                    resposta: "Nosso serviço é completo e inclui: design personalizado, desenvolvimento, otimização para SEO, formulários de contato, galeria de projetos, área administrativa e suporte técnico."
                  },
                  {
                    pergunta: "Preciso ter um domínio e hospedagem?",
                    resposta: "Não se preocupe! Nós cuidamos de todo o processo técnico, incluindo registro de domínio e hospedagem no primeiro ano. Após esse período, o custo de manutenção é bastante acessível."
                  },
                  {
                    pergunta: "Posso fazer alterações no site depois de pronto?",
                    resposta: "Claro! Você terá total autonomia para adicionar seus projetos através do painel administrativo. Para alterações mais complexas, nossa equipe de suporte estará à disposição."
                  },
                  {
                    pergunta: "Como faço para começar?",
                    resposta: "É simples! Basta clicar no botão 'Solicitar Orçamento' e iniciar uma conversa conosco pelo WhatsApp. Faremos algumas perguntas para entender seu projeto e apresentaremos a melhor solução para suas necessidades."
                  },
                  {
                    pergunta: "Oferecem suporte após a entrega do site?",
                    resposta: "Sim! Fornecemos 30 dias de suporte gratuito após o lançamento do site para garantir que tudo funcione perfeitamente. Depois, disponibilizamos planos de manutenção mensais opcionais."
                  }
                ].map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-[#111111] border border-[#222222] hover:border-[#D4B98C] transition-colors duration-500"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer text-white">
                      <span className="text-lg font-light">{faq.pergunta}</span>
                      <span className="text-[#D4B98C] transition-transform duration-300 group-open:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-[#999999] leading-relaxed">
                        {faq.resposta}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center mt-24">
                <p className="text-[#999999] mb-8 text-lg">
                  Ainda tem dúvidas? Entre em contato conosco!
                </p>
                <a 
                  href="https://wa.me/5543996096047?text=Olá!%20Gostaria%20de%20iniciar%20um%20projeto%20para%20meu%20site%20profissional."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2 group"
                >
                  <span>Tirar Dúvidas</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="relative bg-[#1A1A1A] py-32">
          {/* Grid decorativo */}
          <div className="absolute inset-0 z-0">
            <div className="container h-full mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 h-full border-x border-[#222222]">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border-r border-[#222222]" />
                ))}
              </div>
            </div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Cabeçalho da seção */}
              <div className="text-center mb-24">
                <div className="animate-fade-in flex items-center justify-center space-x-4 mb-8">
                  <div className="line-detail" />
                  <span className="text-sm uppercase tracking-wider text-[#D4B98C]">
                    Vamos Conversar
                  </span>
                  <div className="line-detail" />
                </div>
                <h2 className="animate-slide-up text-5xl md:text-6xl font-light mb-8">
                  Pronto para <span className="text-[#D4B98C]">começar?</span>
                </h2>
                <p className="animate-slide-up text-[#999999] text-xl max-w-3xl mx-auto">
                  Inicie uma conversa agora mesmo e transforme sua presença digital
                </p>
              </div>

              {/* Card WhatsApp */}
              <div className="max-w-xl mx-auto">
                <div className="group">
                  <div className="relative card group-hover:border-[#D4B98C] transition-colors duration-500">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4B98C] to-[#111111] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-sm" />
                    <div className="p-8 md:p-12 relative z-10">
                      <div className="flex items-center space-x-6 mb-8">
                        <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-[#D4B98C] flex items-center justify-center">
                          <span className="text-[#D4B98C] text-2xl">💬</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-light mb-2">WhatsApp</h3>
                          <p className="text-[#999999]">Resposta em até 2 horas</p>
                        </div>
                      </div>
                      <a 
                        href="https://wa.me/5543996096047?text=Olá!%20Gostaria%20de%20iniciar%20uma%20conversa%20sobre%20o%20site%20profissional." 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full inline-block text-center"
                      >
                        Iniciar Conversa
                      </a>
                    </div>
                  </div>
                </div>

                {/* Horário de Atendimento */}
                <div className="text-center mt-12">
                  <p className="text-[#999999]">
                    Horário de atendimento: Segunda a Sexta, das 9h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-[#111111] pt-16 pb-8 border-t border-[#222222]">
          <div className="container">
            {/* Grid Principal */}
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              {/* Logo e Informações */}
              <div className="space-y-6">
                <Link href="/" className="flex items-center space-x-5 group">
                  <div className="relative w-16 h-16 border border-[#D4B98C] flex items-center justify-center overflow-hidden before:content-[''] before:absolute before:inset-[2px] before:border before:border-[#D4B98C]/20">
                    <span className="text-2xl font-extralight tracking-wider text-[#D4B98C] relative z-10">BR</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4B98C] to-[#A38E6A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                    <span className="absolute text-2xl font-extralight tracking-wider text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 z-20">BR</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-extralight tracking-wider text-white">BR</span>
                    <span className="text-base font-light tracking-[0.2em] text-[#D4B98C]">AGENCY</span>
                  </div>
                </Link>
                <p className="text-[#999999] text-sm leading-relaxed">
                  Transformando a presença digital de arquitetos com websites profissionais e estratégicos.
                </p>
              </div>

              {/* Links Rápidos */}
              <div>
                <h4 className="text-white text-lg font-light mb-6">Links Rápidos</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#beneficios" className="text-[#999999] hover:text-[#D4B98C] transition-colors duration-300">
                      Benefícios
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" className="text-[#999999] hover:text-[#D4B98C] transition-colors duration-300">
                      Como Funciona
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="text-[#999999] hover:text-[#D4B98C] transition-colors duration-300">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contato */}
              <div>
                <h4 className="text-white text-lg font-light mb-6">Contato</h4>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#D4B98C]">→</span>
                    <a href="https://wa.me/5543996096047?text=Olá!%20Gostaria%20de%20iniciar%20uma%20conversa%20sobre%20o%20site%20profissional." className="text-[#999999] hover:text-[#D4B98C] transition-colors duration-300">
                      WhatsApp
                    </a>
                  </li>
                  <li className="text-[#999999]">
                    Segunda a Sexta
                  </li>
                  <li className="text-[#999999]">
                    9h às 18h
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white text-lg font-light mb-6">Legal</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-[#999999] hover:text-[#D4B98C] transition-colors duration-300">
                      Política de Privacidade
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#999999] hover:text-[#D4B98C] transition-colors duration-300">
                      Termos de Uso
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Linha Divisória */}
            <div className="w-full h-px bg-[#222222] mb-8" />

            {/* Copyright e CNPJ */}
            <div className="flex flex-col md:flex-row items-center justify-between text-sm">
              <p className="text-[#999999] mb-4 md:mb-0">
                © 2024 ArquiWeb. Todos os direitos reservados.
              </p>
              <p className="text-[#999999]">
                CNPJ: 28.788.831/0001-99
              </p>
            </div>
          </div>
      </footer>
      </main>
    </>
  );
}
