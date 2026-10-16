import { Language, PortfolioData } from '../types/portfolio';

/**
 * ARQUIVO CENTRAL DE DADOS DO PORTFÓLIO — VICTOR FERNANDES DE ALMEIDA
 * Edite facilmente seus links, projetos, métricas (marcadas com TODO), certificações e experiências aqui.
 */

export const SOCIAL_LINKS = {
  // TODO: Substitua pela URL exata do seu perfil no LinkedIn
  linkedin: 'https://www.linkedin.com/in/TODO-victor-fernandes',
  github: 'https://github.com/VictorWeiland',
  // TODO: Substitua pelo seu e-mail profissional principal
  email: 'mailto:TODO-seu-email@dominio.com',
  whatsapp: 'https://wa.me/5511956920083',
};

export const I18N_DATA: Record<Language, PortfolioData> = {
  pt: {
    metaTitle: 'Victor Fernandes de Almeida | Engenheiro de Dados & Desenvolvedor Salesforce',
    metaDescription:
      'Desenvolvo pipelines de dados e automações em sistemas corporativos para empresas que precisam escalar operações com segurança e eficiência.',
    socials: SOCIAL_LINKS,
    nav: {
      projects: 'Projetos',
      experience: 'Experiência',
      certifications: 'Certificações',
      about: 'Skills',
      contact: 'Contato',
      resumeBtn: 'Baixar currículo (PDF)',
    },
    hero: {
      eyebrow: 'VICTOR FERNANDES DE ALMEIDA • SÃO PAULO, BRASIL',
      headline: 'Engenheiro de Dados &',
      headlineAccent: 'Desenvolvedor Salesforce',
      valueProposition:
        'Construo pipelines analíticos, automações de processos e aplicações web para empresas que buscam transformar dados operacionais e fluxos manuais em sistemas rápidos e confiáveis.',
      primaryStackLabel: 'Foco Principal:',
      primaryStack: ['Databricks & PySpark', 'Python & SQL', 'Salesforce (Apex, LWC & Flow)'],
      secondaryStackLabel: 'Stack Secundária:',
      secondaryStack: ['SAP', 'Power BI', 'Next.js & TypeScript', 'Node.js', 'ServiceNow'],
      ctaProjects: 'Ver Projetos em Destaque',
      ctaResume: 'Baixar currículo (PDF)',
      cardRole: 'DESENVOLVEDOR DE SISTEMAS / ANALISTA DE DADOS',
    },
    projects: {
      tag: 'Projetos Selecionados',
      titleStart: 'Projetos em Produção &',
      titleHighlight: 'Arquitetura de Dados',
      subtitle:
        'Cada projeto abaixo apresenta o problema de negócio, a solução técnica implementada, a stack utilizada e o resultado alcançado.',
      featuredBadge: 'PROJETO PRINCIPAL • SAAS EM PRODUÇÃO',
      problemLabel: 'Problema',
      solutionLabel: 'Solução',
      architectureLabel: 'Arquitetura do Pipeline',
      dataVolumeLabel: 'Volume & Processamento',
      resultLabel: 'Resultado & Impacto',
      stackLabel: 'Stack Utilizada',
      liveBtn: 'Ver Projeto no Ar',
      repoBtn: 'Repositório GitHub',
      demoBtn: 'Ver Demo / Preview',
      items: [
        {
          id: 'proj-odontogest',
          featured: true,
          name: 'OdontoGEST — SaaS de Agendamento para Clínicas Odontológicas',
          category: 'SaaS & Web Full-Stack',
          subdomain: 'odonto-gest-alpha.vercel.app',
          liveUrl: 'https://odonto-gest-alpha.vercel.app/',
          // TODO: Insira o link exato do repositório do OdontoGEST no GitHub
          repoUrl: 'https://github.com/VictorWeiland/TODO-odontogest-repo',
          demoMedia: {
            type: 'preview',
            // TODO: Você pode substituir por um print local ex: '/demos/odontogest.webp' ou vídeo '.mp4'
            url: 'https://odonto-gest-alpha.vercel.app/',
            alt: 'Interface da plataforma SaaS OdontoGEST exibindo busca de clínicas e agendamento online',
            caption: 'Aplicação publicada na Vercel com autenticação, painel clínico e agendamento em tempo real.',
          },
          status: 'EM PRODUÇÃO (VERCEL)',
          problem:
            'Clínicas odontológicas perdiam pacientes e tempo operacional gerenciando agendamentos manualmente por telefone e planilhas descentralizadas.',
          solution:
            'Desenvolvi uma plataforma SaaS completa onde pacientes localizam clínicas qualificadas e agendam consultas online 24/7, enquanto os profissionais gerenciam horários, serviços e disponibilidade em um painel centralizado.',
          result:
            'Fluxo de agendamento 100% digitalizado em produção na Vercel, com autenticação segura, upload otimizado de mídia e carregamento rápido em dispositivos móveis (TODO: adicionar métrica de clínicas/usuários testados).',
          techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'NextAuth', 'Cloudinary', 'Vercel'],
        },
        {
          id: 'proj-data-pipeline',
          featured: true,
          isDataProject: true,
          name: 'Pipeline Lakehouse de Pedidos & Operações com PySpark e Databricks',
          category: 'Engenharia de Dados & Big Data',
          subdomain: 'databricks-medallion-pipeline',
          // TODO: Insira o link do notebook público / documentação ou dashboard do pipeline
          liveUrl: 'https://github.com/VictorWeiland/TODO-databricks-pipeline-demo',
          // TODO: Insira o link do repositório GitHub com os scripts PySpark / SQL
          repoUrl: 'https://github.com/VictorWeiland/TODO-databricks-pyspark-repo',
          demoMedia: {
            type: 'preview',
            url: '#projetos',
            alt: 'Diagrama da arquitetura Medallion (Bronze, Silver, Gold) no Databricks com PySpark e Delta Lake',
            caption: 'Pipeline estruturado em camadas Bronze → Silver → Gold com validação de qualidade de dados.',
          },
          status: 'ENGENHARIA DE DADOS',
          problem:
            'Dados de pedidos, faturamento e clientes vindos de múltiplas fontes (arquivos brutos e bancos relacionais) apresentavam inconsistências, atrasando relatórios gerenciais e auditorias operacionais.',
          solution:
            'Construção de um pipeline ETL distribuído utilizando Apache Spark (PySpark) e SQL no Databricks, aplicando limpeza, deduplicação, regras de negócio e armazenamento transacional em Delta Lake.',
          architecture:
            'Arquitetura Medallion no Databricks: Ingestão bruta (Bronze) → Limpeza, tipagem e validação com PySpark/SQL (Silver) → Tabelas agregadas para BI e Analytics (Gold) orquestradas via Databricks Workflows.',
          dataVolume:
            'TODO: Inserir volume de dados processados (ex.: X milhões de registros / Y GB por lote diário em tabelas Delta).',
          result:
            'Padronização e confiabilidade das tabelas analíticas para consumo direto em Power BI e SQL (TODO: inserir redução no tempo de processamento, ex.: de Xh para Y minutos).',
          techStack: ['Databricks', 'Apache Spark', 'PySpark', 'Delta Lake', 'Python', 'SQL', 'Power BI'],
        },
        {
          id: 'proj-opadeiro',
          name: 'O Padeiro — Cardápio Digital & Automação de Pedidos',
          category: 'E-Commerce & Automação Comercial',
          subdomain: 'cardapio-massas-artesanais.vercel.app',
          liveUrl: 'https://cardapio-massas-artesanais.vercel.app/',
          // TODO: Insira o link exato do repositório de O Padeiro no GitHub
          repoUrl: 'https://github.com/VictorWeiland/TODO-cardapio-massas-repo',
          demoMedia: {
            type: 'preview',
            url: 'https://cardapio-massas-artesanais.vercel.app/',
            alt: 'Tela do cardápio digital O Padeiro com carrinho de compras e integração WhatsApp',
            caption: 'Cardápio interativo com cálculo automático de carrinho e envio estruturado via WhatsApp.',
          },
          status: 'EM PRODUÇÃO (VERCEL)',
          problem:
            'Atendimento manual via WhatsApp gerava erros na anotação de sabores, porções e cálculo de valores em encomendas de produtos artesanais.',
          solution:
            'Aplicação web leve de autoatendimento com catálogo dinâmico, personalização de itens, banco de dados em nuvem (SQLite/Turso) e geração automática do resumo padronizado do pedido direto para o WhatsApp.',
          result:
            'Eliminação de erros de cálculo no atendimento e agilidade no fechamento de encomendas pelo celular.',
          techStack: ['Node.js', 'TypeScript', 'Express', 'SQLite / Turso', 'Tailwind CSS', 'Vercel'],
        },
        {
          id: 'proj-salesforce-bank',
          name: 'Automação de Regras de Negócio & Sustentação Salesforce CRM (Setor Bancário)',
          category: 'Salesforce CRM Corporativo',
          subdomain: 'Case Corporativo • Instituição Financeira',
          liveUrl: '#experiencia',
          repoUrl: '#experiencia',
          demoMedia: {
            type: 'preview',
            url: '#experiencia',
            alt: 'Arquitetura de automação Salesforce com Apex, Lightning Web Components e Flows',
            caption: 'Customizações corporativas em ambiente bancário de alta criticidade.',
          },
          status: 'CASE CORPORATIVO',
          problem:
            'Necessidade de manter a continuidade operacional do CRM bancário, resolver incidentes técnicos rapidamente e automatizar validações complexas integradas a sistemas legados.',
          solution:
            'Desenvolvimento de classes Apex, componentes Lightning/LWC, fórmulas avançadas e Flows automatizados, além de configuração de objetos, layouts e suporte às integrações.',
          result:
            'Estabilidade contínua da plataforma Salesforce e redução de etapas manuais na operação bancária (TODO: inserir quantidade média de chamados/melhorias entregues no período).',
          techStack: ['Salesforce Admin', 'Apex', 'Lightning LWC', 'Salesforce Flow', 'Process Builder', 'Fórmulas'],
        },
      ],
    },
    experience: {
      tag: 'Trajetória e Impacto',
      titleStart: 'Experiência',
      titleHighlight: 'Profissional',
      subtitle:
        'Histórico focado em impacto operacional, estabilidade de sistemas e resultados entregues em projetos nos setores Bancário, Bens de Consumo (FMCG) e Energia Solar.',
      filterAll: 'Todas',
      filterTech: 'Dados, Salesforce, SAP & TI',
      filterManagement: 'Gestão & Operações',
      impactLabel: 'Impacto & Resultados:',
      responsibilitiesLabel: 'Entregas e responsabilidades:',
      techUsedLabel: 'Tecnologias utilizadas:',
      items: [
        {
          id: 'exp-1',
          role: 'Analista de Soluções Digitais I',
          period: 'Julho 2025 – Setembro 2026',
          sector: 'Consultoria Global de Tecnologia',
          category: 'tech',
          highlight: 'Transformação Digital & Dados',
          impactSummary:
            'Otimização de fluxos operacionais e integração entre plataformas de CRM (Salesforce), ERP (SAP) e bancos de dados SQL em projetos corporativos multidisciplinares.',
          metricsPlaceholder:
            'TODO: Inserir métrica de impacto geral (ex.: X projetos corporativos atendidos / Y% de melhoria no SLA de entregas ágeis).',
          responsibilities: [
            'Análise e implementação de melhorias e automações para reduzir retrabalho operacional e elevar a experiência do usuário.',
            'Atuação direta na integração de sistemas, validação de dados com SQL/Python e suporte técnico especializado.',
            'Entrega contínua em sprints ágeis (Scrum/Kanban) alinhada aos indicadores de negócio.',
          ],
          techStack: ['Salesforce', 'SAP', 'SQL', 'Python', 'Pandas', 'Databricks / PySpark', 'Agile / Scrum'],
        },
        {
          id: 'exp-2',
          role: 'Suporte ao Cliente & Soluções Digitais (SAP & SQL)',
          period: 'Dezembro 2025 – Julho 2026',
          sector: 'Setor FMCG (Bens de Consumo)',
          category: 'tech',
          highlight: 'Contrato Renovado 2x pelo Cliente',
          impactSummary:
            'Garantiu a consistência de dados entre o SAP e bancos relacionais na operação de gestão de pedidos, contribuindo diretamente para a estabilidade do projeto e para a renovação do contrato por duas vezes.',
          metricsPlaceholder:
            'TODO: Inserir volume operacional (ex.: validação de +X mil pedidos/mês no SAP e redução de Y% em incidentes de faturamento).',
          responsibilities: [
            'Auditoria e validação diária de pedidos no SAP e via consultas SQL para prevenir falhas de processamento e entrega.',
            'Investigação de inconsistências em cadastros de produtos/clientes e gestão do ciclo de vida de pedidos.',
            'Configuração e suporte a dispositivos corporativos (VMware Workspace ONE / AirWatch) e atendimento via ServiceNow.',
          ],
          techStack: ['SAP', 'SQL', 'VMware Workspace ONE UEM', 'AirWatch', 'Advisor', 'ServiceNow'],
        },
        {
          id: 'exp-3',
          role: 'Desenvolvedor Salesforce (Salesforce Developer)',
          period: 'Agosto 2025 – Outubro 2025',
          sector: 'Setor Bancário (Bank)',
          category: 'tech',
          highlight: 'Sustentação & Evolução CRM Bancário',
          impactSummary:
            'Manteve a continuidade operacional e evoluiu funcionalidades críticas do Salesforce para instituição bancária por meio de customizações em Apex, Flows e integração com sistemas legados.',
          metricsPlaceholder:
            'TODO: Inserir métrica do projeto bancário (ex.: 100% de cumprimento de SLA em incidentes críticos / X automações em Flow e Apex entregues).',
          responsibilities: [
            'Desenvolvimento de código Apex e manutenção de fórmulas complexas para regras de negócio financeiras.',
            'Criação de Flows para automatizar aprovações e processos internos do banco.',
            'Customização de objetos, campos e layouts Lightning e suporte às integrações com sistemas legados.',
          ],
          techStack: ['Salesforce Admin', 'Salesforce Apex', 'Salesforce Lightning', 'Salesforce LWC', 'Flow', 'Process Builder'],
        },
        {
          id: 'exp-4',
          role: 'Gestor de TI (IT Manager)',
          period: 'Setembro 2024 – Junho 2025',
          sector: 'Energia Solar (Solar Energy)',
          category: 'tech',
          highlight: 'Liderança de TI & Dashboards Power BI',
          impactSummary:
            'Estruturou a gestão do departamento de TI, projetos e sistemas da empresa, implementando painéis de indicadores em Power BI e Excel para apoiar decisões da diretoria.',
          metricsPlaceholder:
            'TODO: Inserir resultado da gestão (ex.: liderança de equipe de X pessoas / Y dashboards estratégicos implantados).',
          responsibilities: [
            'Gestão completa do departamento de TI, infraestrutura, sistemas internos e fornecedores.',
            'Liderança de pessoas e gerenciamento de cronogramas de projetos tecnológicos.',
            'Desenvolvimento de relatórios executivos e acompanhamento de KPIs com Microsoft Power BI e Excel.',
          ],
          techStack: ['Microsoft Power BI', 'Microsoft Excel', 'Gestão de TI', 'Gestão de Projetos', 'Gestão de Sistemas'],
        },
        {
          id: 'exp-5',
          role: 'Assistente Administrativo | Consultor | Assistente de Logística',
          period: 'Maio 2023 – Julho 2024',
          sector: 'Telecomunicações (SMS), Saúde Suplementar & Delivery App',
          category: 'management',
          highlight: 'Base Sólida em Operações & Negócios',
          impactSummary:
            'Experiência prévia consolidada em gestão de campanhas, documentação de processos, treinamento de usuários, relatórios comerciais e controle de faturamento/estoque.',
          responsibilities: [
            'Assistente Administrativo (Maio 2024 – Julho 2024): Gestão de campanhas de SMS, relatórios, documentação de processos e treinamento de equipes.',
            'Consultor de Planos de Saúde (Setembro 2023 – Dezembro 2023): Vendas consultivas, pós-venda, relatórios de conversão e campanhas.',
            'Assistente de Logística (Maio 2023 – Agosto 2023): Controle de entrada/saída de materiais, emissão de notas fiscais e expedição de pedidos.',
          ],
          techStack: ['Gestão de Processos', 'Relatórios Operacionais', 'Treinamento', 'Faturamento & Notas Fiscais', 'Atendimento ao Cliente'],
        },
      ],
    },
    coursesSection: {
      tag: 'Credibilidade Técnica',
      titleStart: 'Certificações &',
      titleHighlight: 'Formação Especializada',
      subtitle:
        'Certificações oficiais e cursos práticos concluídos com foco em Engenharia de Dados (Databricks, Spark, PySpark), Administração/Desenvolvimento Salesforce, Python e SQL.',
      verifyBadgeBtn: 'Verificar Credencial',
      coursesBannerTag: 'CURSOS PRÁTICOS CONCLUÍDOS • UDEMY',
      coursesSubheading: 'Formação em Engenharia de Dados, Salesforce, Python & SQL',
      certifications: [
        {
          id: 'cert-ai-2026',
          year: '2026',
          issuer: 'Certificação Corporativa / IA',
          badgeLabel: 'BADGE OFICIAL • 2026',
          title: 'ACTIVATE AI Foundation Badge',
          subtitle: 'Inteligência Artificial & Automação de Processos',
          description:
            'Certificação de fundamentos de Inteligência Artificial aplicados à otimização de processos corporativos, produtividade e governança.',
          // TODO: Insira o link público de verificação (Credly / certificado PDF)
          verificationUrl: 'https://github.com/VictorWeiland#TODO-link-verificacao-activate-ai',
          highlights: [
            'Fundamentos de IA Generativa e Analítica',
            'Aplicação prática em fluxos de trabalho corporativos',
            'Ética, segurança e governança em soluções de IA',
          ],
        },
        {
          id: 'cert-banking-2025',
          year: '2025',
          issuer: 'Certificação de Indústria L1',
          badgeLabel: 'CERTIFICAÇÃO L1 • 2025',
          title: 'L1 Industry Certification — Global Banking',
          subtitle: 'Sistemas Financeiros & Operações Bancárias',
          description:
            'Certificação de domínio funcional e técnico em operações bancárias globais, regras de negócio do setor financeiro e plataformas críticas.',
          // TODO: Insira o link público de verificação do certificado Global Banking
          verificationUrl: 'https://github.com/VictorWeiland#TODO-link-verificacao-global-banking',
          highlights: [
            'Arquitetura de processos e operações bancárias',
            'Sustentação de sistemas financeiros de alta disponibilidade',
            'Automação e conformidade em CRM bancário',
          ],
        },
        {
          id: 'cert-auto-2025',
          year: '2025',
          issuer: 'Certificação de Indústria L1',
          badgeLabel: 'CERTIFICAÇÃO L1 • 2025',
          title: 'L1 Industry Certification — Automotive',
          subtitle: 'Indústria Automotiva & Cadeia Produtiva',
          description:
            'Certificação em processos digitais e integração de sistemas (ERP/CRM) voltados à cadeia automotiva, gestão de pedidos e pós-venda.',
          // TODO: Insira o link público de verificação do certificado Automotive
          verificationUrl: 'https://github.com/VictorWeiland#TODO-link-verificacao-automotive',
          highlights: [
            'Gestão de ciclo de vida de pedidos e cadeia logística',
            'Integração entre plataformas ERP e CRM no setor industrial',
            'Eficiência operacional e transformação digital',
          ],
        },
      ],
      courses: [
        {
          id: 'udemy-databricks-spark',
          platform: 'UDEMY',
          category: 'Engenharia de Dados & Big Data',
          title: 'Engenharia de Dados com Databricks, Spark e PySpark',
          description:
            'Construção de pipelines ETL distribuídos, processamento de grandes volumes com Apache Spark e PySpark e arquitetura Lakehouse no Databricks.',
          // TODO: Insira a URL do certificado da Udemy (ex: https://www.udemy.com/certificate/UC-XXXX/)
          verificationUrl: 'https://www.udemy.com/certificate/TODO-databricks-spark-pyspark',
          skills: ['Databricks', 'Apache Spark', 'PySpark', 'Lakehouse ETL'],
        },
        {
          id: 'udemy-databricks-pro',
          platform: 'UDEMY',
          category: 'Engenharia de Dados Avançada',
          title: 'Databricks Certified Data Engineer Professional',
          description:
            'Otimização com Delta Lake, orquestração de Databricks Workflows, governança, processamento batch/streaming e performance tuning.',
          // TODO: Insira a URL do certificado da Udemy
          verificationUrl: 'https://www.udemy.com/certificate/TODO-databricks-professional',
          skills: ['Delta Lake', 'Databricks Workflows', 'Data Governance', 'Streaming & Batch'],
        },
        {
          id: 'udemy-salesforce-admin',
          platform: 'UDEMY',
          category: 'CRM & Salesforce',
          title: 'Salesforce na Prática — Curso Hands-On Administradores',
          description:
            'Administração prática do Salesforce: objetos customizados, layouts, permissões, automação com Flows, fórmulas e relatórios gerenciais.',
          // TODO: Insira a URL do certificado da Udemy
          verificationUrl: 'https://www.udemy.com/certificate/TODO-salesforce-admin-handson',
          skills: ['Salesforce Admin', 'Flows & Fórmulas', 'Objetos & Layouts', 'Perfis & Segurança'],
        },
        {
          id: 'udemy-python-adv',
          platform: 'UDEMY',
          category: 'Programação & Dados',
          title: 'Programação com Python do Zero ao Avançado',
          description:
            'Domínio de Python: lógica, estruturas de dados, programação orientada a objetos, automação de scripts e análise de dados com Pandas.',
          // TODO: Insira a URL do certificado da Udemy
          verificationUrl: 'https://www.udemy.com/certificate/TODO-python-zero-ao-avancado',
          skills: ['Python Avançado', 'POO', 'Pandas', 'Automação'],
        },
        {
          id: 'udemy-sql-adv',
          platform: 'UDEMY',
          category: 'Bancos de Dados',
          title: 'Banco de Dados SQL do Zero ao Avançado',
          description:
            'Modelagem relacional, consultas avançadas (JOINs, Subqueries, Views, Índices e Agregações), auditoria e análise de dados em SQL e MySQL.',
          // TODO: Insira a URL do certificado da Udemy
          verificationUrl: 'https://www.udemy.com/certificate/TODO-sql-zero-ao-avancado',
          skills: ['SQL Avançado', 'MySQL', 'Modelagem Relacional', 'Performance SQL'],
        },
      ],
    },
    about: {
      tag: 'Competências Técnicas & Comportamentais',
      titleStart: 'Hard Skills, Soft Skills &',
      titleHighlight: 'Idiomas',
      bioTitle: 'Resumo Executivo',
      bioText:
        'Desenvolvedor de Sistemas e Analista de Sistemas com foco prático em Engenharia de Dados (Databricks, Spark, PySpark, Python e SQL), plataforma Salesforce (Admin, Apex, LWC e Flow) e operações SAP. Uno visão analítica de dados, capacidade de desenvolvimento de ponta a ponta e comunicação clara com áreas de negócio para entregar soluções estáveis e escaláveis.',
      hardSkillsTitle: 'Hard Skills (Competências Técnicas)',
      softSkillsTitle: 'Soft Skills (Competências Comportamentais)',
      certTitle: 'Certificações',
      coursesResumeTitle: 'Cursos Especializados (Udemy)',
      langTitle: 'Idiomas',
      langNote:
        'Português nativo e Inglês técnico para leitura de documentação, código e ferramentas globais.',
      languages: [
        { name: 'Português', level: 'Nativo / Fluente', dots: 5 },
        { name: 'Inglês', level: 'Básico / Técnico', dots: 1 },
      ],
      hardSkills: [
        { name: 'Databricks & Delta Lake', category: 'Engenharia de Dados', featured: true },
        { name: 'Apache Spark & PySpark', category: 'Big Data', featured: true },
        { name: 'Python & Pandas (Avançado)', category: 'Dados & Automação', featured: true },
        { name: 'SQL & MySQL (Avançado)', category: 'Banco de Dados', featured: true },
        { name: 'Salesforce Admin, Flow & Fórmulas', category: 'Salesforce CRM', featured: true },
        { name: 'Salesforce Apex, Lightning & LWC', category: 'Salesforce Dev', featured: true },
        { name: 'SAP (Ciclo de Vida de Pedidos)', category: 'ERP Corporativo', featured: true },
        { name: 'Next.js, React & TypeScript', category: 'Web Full-Stack', featured: true },
        { name: 'Node.js, Express & Prisma', category: 'Backend & APIs', featured: false },
        { name: 'Microsoft Power BI & Excel', category: 'BI & Analytics', featured: false },
        { name: 'ServiceNow (ITSM)', category: 'Suporte & Operações', featured: false },
        { name: 'VMware Workspace ONE (AirWatch)', category: 'Gestão MDM', featured: false },
      ],
      softSkills: [
        {
          title: 'Pensamento Analítico & Resolução de Causa-Raiz',
          desc: 'Investigação rápida de inconsistências em pipelines de dados, consultas SQL, SAP e regras do Salesforce.',
        },
        {
          title: 'Comunicação Clara entre Negócio e Tecnologia',
          desc: 'Tradução de necessidades operacionais e gerenciais em automações, relatórios e requisitos técnicos objetivos.',
        },
        {
          title: 'Metodologias Ágeis (Scrum / Kanban)',
          desc: 'Organização de backlog, priorização por valor de negócio e entregas consistentes dentro das sprints.',
        },
        {
          title: 'Liderança & Gestão de Projetos',
          desc: 'Experiência real como Gestor de TI conduzindo equipes, indicadores em Power BI e cronogramas de implantação.',
        },
        {
          title: 'Compromisso com Estabilidade & Cliente',
          desc: 'Postura consultiva e proativa que gerou alta confiança e a renovação de contrato corporativo por duas vezes.',
        },
      ],
    },
    recruiterSection: {
      tag: 'Por Que Contratar?',
      titleStart: 'Como Eu Gero Valor',
      titleHighlight: 'para a Sua Equipe',
      description:
        'Resumo direto para recrutadores e gestores sobre como minha combinação de Dados, Salesforce e Sistemas resolve problemas reais.',
      cards: [
        {
          badge: '01 • ENGENHARIA DE DADOS & SQL',
          title: 'Dados Limpos, Confiáveis e Prontos para Decisão',
          description:
            'Construo rotinas em Python, PySpark, Databricks e SQL para validar, transformar e cruzar dados operacionais sem falhas manuais.',
        },
        {
          badge: '02 • SALESFORCE & AUTOMAÇÃO',
          title: 'Menos Trabalho Manual na Operação Comercial e Bancária',
          description:
            'Configuro e desenvolvo Flows, regras de validação, componentes LWC e código Apex no Salesforce para acelerar processos internos.',
        },
        {
          badge: '03 • SAP & SUSTENTAÇÃO CRÍTICA',
          title: 'Operação Estável e Pedidos Validados de Ponta a Ponta',
          description:
            'Histórico comprovado garantindo a consistência entre SAP e bancos de dados no setor de bens de consumo, com contrato renovado 2x.',
        },
        {
          badge: '04 • VISÃO FULL-STACK & NEGÓCIOS',
          title: 'Capacidade de Construir Produtos Completos',
          description:
            'Além de atuar em grandes sistemas corporativos, desenvolvo e publico aplicações SaaS modernas (como o OdontoGEST em Next.js/TypeScript).',
        },
      ],
    },
    contact: {
      tag: 'Vamos Conversar?',
      titleStart: 'Entre em Contato',
      titleHighlight: 'Diretamente',
      description:
        'Estou disponível para oportunidades como Engenheiro/Analista de Dados, Desenvolvedor/Administrador Salesforce ou Desenvolvedor/Analista de Sistemas. Escolha o canal de sua preferência abaixo:',
      emailLabel: 'Enviar E-mail',
      linkedinLabel: 'Conectar no LinkedIn',
      githubLabel: 'Ver Repositórios no GitHub',
      whatsappLabel: 'Chamar no WhatsApp (11) 95692-0083',
      resumeCta: 'Baixar currículo (PDF)',
    },
    resumeModal: {
      printBtn: 'Imprimir / Salvar PDF',
      closeBtn: 'Fechar',
      note: 'Currículo formatado para impressão ou salvamento em PDF (alterne entre PT e EN se desejar).',
      workExpHeading: 'EXPERIÊNCIA PROFISSIONAL',
    },
    footer: {
      subtitle: 'Engenharia de Dados (Databricks, PySpark, Python, SQL) • Salesforce • SAP',
    },
  },

  en: {
    metaTitle: 'Victor Fernandes de Almeida | Data Engineer & Salesforce Developer',
    metaDescription:
      'I build data pipelines and enterprise system automations for companies that need to scale operations reliably and efficiently.',
    socials: SOCIAL_LINKS,
    nav: {
      projects: 'Projects',
      experience: 'Experience',
      certifications: 'Certifications',
      about: 'Skills',
      contact: 'Contact',
      resumeBtn: 'Download Resume (PDF)',
    },
    hero: {
      eyebrow: 'VICTOR FERNANDES DE ALMEIDA • BRAZIL (REMOTE / HYBRID)',
      headline: 'Data Engineer &',
      headlineAccent: 'Salesforce Developer',
      valueProposition:
        'I build analytical data pipelines, workflow automations, and web applications for companies looking to turn operational data and manual processes into fast, reliable systems.',
      primaryStackLabel: 'Primary Focus:',
      primaryStack: ['Databricks & PySpark', 'Python & SQL', 'Salesforce (Apex, LWC & Flow)'],
      secondaryStackLabel: 'Secondary Stack:',
      secondaryStack: ['SAP', 'Power BI', 'Next.js & TypeScript', 'Node.js', 'ServiceNow'],
      ctaProjects: 'View Featured Projects',
      ctaResume: 'Download Resume (PDF)',
      cardRole: 'SYSTEMS DEVELOPER / SYSTEMS ANALYST',
    },
    projects: {
      tag: 'Selected Work',
      titleStart: 'Production Projects &',
      titleHighlight: 'Data Architecture',
      subtitle:
        'Each project below highlights the business problem, technical solution, stack used, and measurable outcome.',
      featuredBadge: 'FEATURED PROJECT • PRODUCTION SAAS',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      architectureLabel: 'Pipeline Architecture',
      dataVolumeLabel: 'Data Volume & Processing',
      resultLabel: 'Outcome & Impact',
      stackLabel: 'Tech Stack',
      liveBtn: 'Live Project',
      repoBtn: 'GitHub Repo',
      demoBtn: 'View Demo / Preview',
      items: [
        {
          id: 'proj-odontogest',
          featured: true,
          name: 'OdontoGEST — Appointment Scheduling SaaS for Dental Clinics',
          category: 'SaaS & Full-Stack Web',
          subdomain: 'odonto-gest-alpha.vercel.app',
          liveUrl: 'https://odonto-gest-alpha.vercel.app/',
          repoUrl: 'https://github.com/VictorWeiland/TODO-odontogest-repo',
          demoMedia: {
            type: 'preview',
            url: 'https://odonto-gest-alpha.vercel.app/',
            alt: 'OdontoGEST SaaS interface showing clinic directory and online appointment booking',
            caption: 'Production SaaS deployed on Vercel with authentication, clinic management dashboard, and online booking.',
          },
          status: 'LIVE ON VERCEL',
          problem:
            'Dental clinics were losing patients and administrative time managing appointments manually via phone calls and scattered spreadsheets.',
          solution:
            'Built a complete multi-clinic SaaS platform where patients find qualified clinics and book appointments online 24/7, while healthcare professionals manage schedules and services in a centralized dashboard.',
          result:
            '100% digitalized booking workflow live on Vercel with secure authentication, cloud media handling, and mobile-first responsiveness (TODO: add clinic/user test metrics).',
          techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'NextAuth', 'Cloudinary', 'Vercel'],
        },
        {
          id: 'proj-data-pipeline',
          featured: true,
          isDataProject: true,
          name: 'Order & Operations Lakehouse Pipeline with PySpark & Databricks',
          category: 'Data Engineering & Big Data',
          subdomain: 'databricks-medallion-pipeline',
          liveUrl: 'https://github.com/VictorWeiland/TODO-databricks-pipeline-demo',
          repoUrl: 'https://github.com/VictorWeiland/TODO-databricks-pyspark-repo',
          demoMedia: {
            type: 'preview',
            url: '#projetos',
            alt: 'Databricks Medallion Architecture diagram (Bronze, Silver, Gold) using PySpark and Delta Lake',
            caption: 'End-to-end Bronze → Silver → Gold data pipeline with automated data quality checks.',
          },
          status: 'DATA ENGINEERING',
          problem:
            'Order, billing, and customer data coming from multiple sources had schema inconsistencies and duplicates, delaying executive reporting and operational audits.',
          solution:
            'Engineered a distributed ETL pipeline using Apache Spark (PySpark) and SQL on Databricks, applying data cleansing, deduplication, business rules, and ACID storage in Delta Lake.',
          architecture:
            'Medallion Architecture on Databricks: Raw Ingestion (Bronze) → Cleansing, schema enforcement & validation with PySpark/SQL (Silver) → Aggregated business tables for BI (Gold) orchestrated via Databricks Workflows.',
          dataVolume:
            'TODO: Insert processed data volume (e.g., X million records / Y GB per daily batch in Delta tables).',
          result:
            'Standardized, audit-ready analytical tables for direct consumption in Power BI and SQL (TODO: insert processing time reduction, e.g., from X hours to Y minutes).',
          techStack: ['Databricks', 'Apache Spark', 'PySpark', 'Delta Lake', 'Python', 'SQL', 'Power BI'],
        },
        {
          id: 'proj-opadeiro',
          name: 'O Padeiro — Digital Menu & Automated Order Fulfilment',
          category: 'E-Commerce & Commercial Automation',
          subdomain: 'cardapio-massas-artesanais.vercel.app',
          liveUrl: 'https://cardapio-massas-artesanais.vercel.app/',
          repoUrl: 'https://github.com/VictorWeiland/TODO-cardapio-massas-repo',
          demoMedia: {
            type: 'preview',
            url: 'https://cardapio-massas-artesanais.vercel.app/',
            alt: 'O Padeiro digital menu web app showing customizable cart and WhatsApp checkout',
            caption: 'Interactive digital catalog with automated cart pricing and structured WhatsApp checkout.',
          },
          status: 'LIVE ON VERCEL',
          problem:
            'Manual WhatsApp order-taking caused frequent mistakes in flavors, portion sizes, and pricing calculations for artisanal food orders.',
          solution:
            'Developed a fast self-service web app with dynamic catalog management, cloud database (SQLite/Turso), automatic cart calculation, and instant structured WhatsApp order dispatch.',
          result:
            'Eliminated manual pricing errors and streamlined mobile checkout for customers.',
          techStack: ['Node.js', 'TypeScript', 'Express', 'SQLite / Turso', 'Tailwind CSS', 'Vercel'],
        },
        {
          id: 'proj-salesforce-bank',
          name: 'Business Rule Automation & Salesforce CRM Support (Banking Sector)',
          category: 'Enterprise Salesforce CRM',
          subdomain: 'Enterprise Case • Banking Institution',
          liveUrl: '#experiencia',
          repoUrl: '#experiencia',
          demoMedia: {
            type: 'preview',
            url: '#experiencia',
            alt: 'Salesforce CRM architecture featuring Apex, Lightning Web Components, and automated Flows',
            caption: 'Enterprise customizations and mission-critical support in the banking sector.',
          },
          status: 'ENTERPRISE CASE',
          problem:
            'Needed to maintain operational continuity of a banking CRM platform, resolve technical incidents rapidly, and automate complex validations integrated with legacy systems.',
          solution:
            'Developed custom Apex code, Lightning/LWC components, complex business rule formulas, and automated Flows while configuring objects, layouts, and legacy integrations.',
          result:
            'Maintained high platform availability and reduced manual steps in banking workflows (TODO: insert average number of tickets/enhancements delivered).',
          techStack: ['Salesforce Admin', 'Apex', 'Lightning LWC', 'Salesforce Flow', 'Process Builder', 'Formulas'],
        },
      ],
    },
    experience: {
      tag: 'Track Record & Impact',
      titleStart: 'Work',
      titleHighlight: 'Experience',
      subtitle:
        'Career history focused on operational impact, system reliability, and measurable outcomes across Banking, FMCG, and Solar Energy sectors.',
      filterAll: 'All Roles',
      filterTech: 'Data, Salesforce, SAP & IT',
      filterManagement: 'Management & Operations',
      impactLabel: 'Impact & Results:',
      responsibilitiesLabel: 'Key deliveries & responsibilities:',
      techUsedLabel: 'Technologies used:',
      items: [
        {
          id: 'exp-1',
          role: 'Digital Solutions Analyst I',
          period: 'July 2025 – September 2026',
          sector: 'Global Technology Consultancy',
          category: 'tech',
          highlight: 'Digital Transformation & Data',
          impactSummary:
            'Optimized operational workflows and system integrations across CRM (Salesforce), ERP (SAP), and SQL databases within agile multidisciplinary teams.',
          metricsPlaceholder:
            'TODO: Insert overall impact metric (e.g., X enterprise projects supported / Y% improvement in agile delivery SLA).',
          responsibilities: [
            'Analyzed and implemented process automations and system improvements to reduce manual rework and improve UX.',
            'Worked on enterprise system integrations, SQL/Python data validation, and specialized technical support.',
            'Delivered continuous improvements in agile sprints (Scrum/Kanban) aligned with business KPIs.',
          ],
          techStack: ['Salesforce', 'SAP', 'SQL', 'Python', 'Pandas', 'Databricks / PySpark', 'Agile / Scrum'],
        },
        {
          id: 'exp-2',
          role: 'Customer Support & Digital Solutions (SAP & SQL)',
          period: 'December 2025 – July 2026',
          sector: 'FMCG (Fast-Moving Consumer Goods)',
          category: 'tech',
          highlight: 'Contract Extended Twice by Client',
          impactSummary:
            'Ensured end-to-end data consistency between SAP and relational databases in order management operations, directly contributing to project stability and extending the contract twice.',
          metricsPlaceholder:
            'TODO: Insert operational volume (e.g., validated +X thousand orders/month in SAP and reduced billing/order issues by Y%).',
          responsibilities: [
            'Monitored and audited customer orders in SAP and via SQL queries to guarantee accurate processing and fulfillment.',
            'Investigated product and customer data inconsistencies and managed the full order lifecycle.',
            'Configured mobile devices (VMware Workspace ONE / AirWatch) and provided support via ServiceNow and WhatsApp.',
          ],
          techStack: ['SAP', 'SQL', 'VMware Workspace ONE UEM', 'AirWatch', 'Advisor', 'ServiceNow'],
        },
        {
          id: 'exp-3',
          role: 'Salesforce Developer',
          period: 'August 2025 – October 2025',
          sector: 'Banking Sector (Bank)',
          category: 'tech',
          highlight: 'Banking CRM Evolution & Support',
          impactSummary:
            'Ensured operational continuity and enhanced mission-critical Salesforce functionalities for a bank through Apex customizations, automated Flows, and legacy system integrations.',
          metricsPlaceholder:
            'TODO: Insert banking project metric (e.g., 100% SLA compliance on critical incidents / X Flows and Apex improvements deployed).',
          responsibilities: [
            'Developed Apex classes and maintained complex formulas to enforce banking business rules.',
            'Implemented automated Flows to streamline internal banking approvals and processes.',
            'Configured custom objects, fields, and Lightning page layouts while supporting legacy integrations.',
          ],
          techStack: ['Salesforce Admin', 'Salesforce Apex', 'Salesforce Lightning', 'Salesforce LWC', 'Flow', 'Process Builder'],
        },
        {
          id: 'exp-4',
          role: 'IT Manager',
          period: 'September 2024 – June 2025',
          sector: 'Solar Energy',
          category: 'tech',
          highlight: 'IT Leadership & Power BI Analytics',
          impactSummary:
            'Led the company’s IT department, projects, and internal systems, implementing executive Power BI and Excel dashboards to drive leadership decisions.',
          metricsPlaceholder:
            'TODO: Insert management outcome (e.g., led a team of X people / deployed Y executive KPI dashboards).',
          responsibilities: [
            'Managed the IT department, technology infrastructure, internal systems, and vendor operations.',
            'Led multidisciplinary staff and oversaw technology project timelines.',
            'Built executive KPI dashboards and operational analytics using Microsoft Power BI and Excel.',
          ],
          techStack: ['Microsoft Power BI', 'Microsoft Excel', 'IT Management', 'Project Management', 'Systems Management'],
        },
        {
          id: 'exp-5',
          role: 'Administrative Assistant | Health Consultant | Logistics Assistant',
          period: 'May 2023 – July 2024',
          sector: 'Telecommunications (SMS), Healthcare & Delivery App',
          category: 'management',
          highlight: 'Strong Business & Operations Foundation',
          impactSummary:
            'Consolidated operational foundation in campaign management, process documentation, user training, commercial reporting, and invoicing/inventory control.',
          responsibilities: [
            'Administrative Assistant (May 2024 – Jul 2024): Managed SMS campaigns, process documentation, scheduling, and user training.',
            'Health Insurance Consultant (Sep 2023 – Dec 2023): Consultative sales, after-sales support, performance reports, and marketing campaigns.',
            'Logistics Assistant (May 2023 – Aug 2023): Managed material entry/exit, issued invoices, and coordinated order fulfillment.',
          ],
          techStack: ['Process Management', 'Operational Reporting', 'User Training', 'Invoicing', 'Customer Support'],
        },
      ],
    },
    coursesSection: {
      tag: 'Technical Credibility',
      titleStart: 'Certifications &',
      titleHighlight: 'Specialized Training',
      subtitle:
        'Official industry and AI certifications combined with hands-on courses in Data Engineering (Databricks, Spark, PySpark), Salesforce Administration/Development, Python, and SQL.',
      verifyBadgeBtn: 'Verify Credential',
      coursesBannerTag: 'COMPLETED HANDS-ON COURSES • UDEMY',
      coursesSubheading: 'Training in Data Engineering, Salesforce, Python & SQL',
      certifications: [
        {
          id: 'cert-ai-2026',
          year: '2026',
          issuer: 'Enterprise AI Certification',
          badgeLabel: 'OFFICIAL BADGE • 2026',
          title: 'ACTIVATE AI Foundation Badge',
          subtitle: 'Artificial Intelligence & Process Automation',
          description:
            'Certification in Artificial Intelligence fundamentals applied to business workflow optimization, productivity, and governance.',
          verificationUrl: 'https://github.com/VictorWeiland#TODO-link-verificacao-activate-ai',
          highlights: [
            'Generative & Analytical AI Fundamentals',
            'Practical application in enterprise workflows',
            'AI governance, security, and best practices',
          ],
        },
        {
          id: 'cert-banking-2025',
          year: '2025',
          issuer: 'L1 Industry Certification',
          badgeLabel: 'L1 CERTIFICATION • 2025',
          title: 'L1 Industry Certification — Global Banking',
          subtitle: 'Financial Systems & Banking Operations',
          description:
            'Functional and technical domain certification in global banking operations, financial business rules, and mission-critical platforms.',
          verificationUrl: 'https://github.com/VictorWeiland#TODO-link-verificacao-global-banking',
          highlights: [
            'Banking core processes and system architecture',
            'High-availability financial platform support',
            'Automation and compliance in banking CRM',
          ],
        },
        {
          id: 'cert-auto-2025',
          year: '2025',
          issuer: 'L1 Industry Certification',
          badgeLabel: 'L1 CERTIFICATION • 2025',
          title: 'L1 Industry Certification — Automotive',
          subtitle: 'Automotive Industry & Value Chain',
          description:
            'Certification in digital processes and ERP/CRM integration for the automotive industry, covering order lifecycle and supply chain.',
          verificationUrl: 'https://github.com/VictorWeiland#TODO-link-verificacao-automotive',
          highlights: [
            'Order lifecycle management & supply chain workflows',
            'ERP and CRM integration across industrial operations',
            'Operational efficiency and digital transformation',
          ],
        },
      ],
      courses: [
        {
          id: 'udemy-databricks-spark',
          platform: 'UDEMY',
          category: 'Data Engineering & Big Data',
          title: 'Data Engineering with Databricks, Spark and PySpark',
          description:
            'Building distributed ETL pipelines, large-scale data processing with Apache Spark and PySpark, and Lakehouse architecture on Databricks.',
          verificationUrl: 'https://www.udemy.com/certificate/TODO-databricks-spark-pyspark',
          skills: ['Databricks', 'Apache Spark', 'PySpark', 'Lakehouse ETL'],
        },
        {
          id: 'udemy-databricks-pro',
          platform: 'UDEMY',
          category: 'Advanced Data Engineering',
          title: 'Databricks Certified Data Engineer Professional',
          description:
            'Delta Lake optimization, Databricks Workflows orchestration, data governance, batch/streaming pipelines, and performance tuning.',
          verificationUrl: 'https://www.udemy.com/certificate/TODO-databricks-professional',
          skills: ['Delta Lake', 'Databricks Workflows', 'Data Governance', 'Streaming & Batch'],
        },
        {
          id: 'udemy-salesforce-admin',
          platform: 'UDEMY',
          category: 'CRM & Salesforce',
          title: 'Hands-On Salesforce Administration Practice Course',
          description:
            'Practical Salesforce administration: custom objects, page layouts, permissions, Flow automation, complex formulas, and analytical reports.',
          verificationUrl: 'https://www.udemy.com/certificate/TODO-salesforce-admin-handson',
          skills: ['Salesforce Admin', 'Flows & Formulas', 'Objects & Layouts', 'Profiles & Security'],
        },
        {
          id: 'udemy-python-adv',
          platform: 'UDEMY',
          category: 'Programming & Data',
          title: 'Python Programming from Zero to Advanced',
          description:
            'Comprehensive Python mastery: logic, data structures, OOP, script automation, and operational data analysis with Pandas.',
          verificationUrl: 'https://www.udemy.com/certificate/TODO-python-zero-ao-avancado',
          skills: ['Advanced Python', 'OOP', 'Pandas', 'Automation'],
        },
        {
          id: 'udemy-sql-adv',
          platform: 'UDEMY',
          category: 'Relational Databases',
          title: 'SQL Database from Zero to Advanced',
          description:
            'Relational data modeling, advanced queries (JOINs, Subqueries, Views, Indexes, and Aggregations), auditing, and data analysis in SQL and MySQL.',
          verificationUrl: 'https://www.udemy.com/certificate/TODO-sql-zero-ao-avancado',
          skills: ['Advanced SQL', 'MySQL', 'Relational Modeling', 'SQL Performance'],
        },
      ],
    },
    about: {
      tag: 'Technical & Behavioral Competencies',
      titleStart: 'Hard Skills, Soft Skills &',
      titleHighlight: 'Languages',
      bioTitle: 'Executive Summary',
      bioText:
        'Systems Developer and Systems Analyst with hands-on focus on Data Engineering (Databricks, Spark, PySpark, Python, and SQL), Salesforce platform (Admin, Apex, LWC, and Flow), and SAP operations. I combine analytical rigor, end-to-end development skills, and clear business communication to deliver stable, scalable solutions.',
      hardSkillsTitle: 'Hard Skills (Technical Competencies)',
      softSkillsTitle: 'Soft Skills (Behavioral & Leadership)',
      certTitle: 'Certifications',
      coursesResumeTitle: 'Specialized Courses (Udemy)',
      langTitle: 'Languages',
      langNote:
        'Native Portuguese and Technical English for system documentation, code, and global tools.',
      languages: [
        { name: 'Portuguese (Português)', level: 'Native / Fluent', dots: 5 },
        { name: 'English (Inglês)', level: 'Basic / Technical', dots: 1 },
      ],
      hardSkills: [
        { name: 'Databricks & Delta Lake', category: 'Data Engineering', featured: true },
        { name: 'Apache Spark & PySpark', category: 'Big Data', featured: true },
        { name: 'Python & Pandas (Advanced)', category: 'Data & Automation', featured: true },
        { name: 'SQL & MySQL (Advanced)', category: 'Database', featured: true },
        { name: 'Salesforce Admin, Flow & Formulas', category: 'Salesforce CRM', featured: true },
        { name: 'Salesforce Apex, Lightning & LWC', category: 'Salesforce Dev', featured: true },
        { name: 'SAP (Order Lifecycle Management)', category: 'Enterprise ERP', featured: true },
        { name: 'Next.js, React & TypeScript', category: 'Full-Stack Web', featured: true },
        { name: 'Node.js, Express & Prisma', category: 'Backend & APIs', featured: false },
        { name: 'Microsoft Power BI & Excel', category: 'BI & Analytics', featured: false },
        { name: 'ServiceNow (ITSM)', category: 'Support & Ops', featured: false },
        { name: 'VMware Workspace ONE (AirWatch)', category: 'MDM Management', featured: false },
      ],
      softSkills: [
        {
          title: 'Analytical Thinking & Root-Cause Problem Solving',
          desc: 'Fast investigation of inconsistencies across data pipelines, SQL databases, SAP orders, and Salesforce rules.',
        },
        {
          title: 'Clear Communication Between Business & Tech',
          desc: 'Translating operational and executive requirements into automations, dashboards, and clear technical specs.',
        },
        {
          title: 'Agile Methodologies (Scrum / Kanban)',
          desc: 'Backlog organization, business-value prioritization, and consistent sprint deliveries.',
        },
        {
          title: 'Team Leadership & Project Management',
          desc: 'Hands-on experience as an IT Manager leading teams, Power BI KPIs, and implementation roadmaps.',
        },
        {
          title: 'Commitment to Stability & Client Success',
          desc: 'Proactive, consultative ownership that built strong client trust and extended an enterprise contract twice.',
        },
      ],
    },
    recruiterSection: {
      tag: 'Why Hire Me?',
      titleStart: 'How I Deliver Value',
      titleHighlight: 'to Your Team',
      description:
        'A quick summary for recruiters and hiring managers on how my combination of Data, Salesforce, and Systems solves real problems.',
      cards: [
        {
          badge: '01 • DATA ENGINEERING & SQL',
          title: 'Clean, Reliable Data Ready for Decision-Making',
          description:
            'I build pipelines in Python, PySpark, Databricks, and SQL to validate, transform, and cross-check operational data without manual errors.',
        },
        {
          badge: '02 • SALESFORCE & AUTOMATION',
          title: 'Less Manual Rework in Commercial & Banking Operations',
          description:
            'I configure and develop Flows, validation rules, LWC components, and Apex code in Salesforce to accelerate internal workflows.',
        },
        {
          badge: '03 • SAP & CRITICAL SUPPORT',
          title: 'Stable Operations & End-to-End Validated Orders',
          description:
            'Proven track record ensuring consistency between SAP and relational databases in the FMCG sector, with a contract extended 2x.',
        },
        {
          badge: '04 • FULL-STACK & PRODUCT MINDSET',
          title: 'Ability to Build Complete Web Applications',
          description:
            'Beyond enterprise systems, I design and deploy complete SaaS applications in production (such as OdontoGEST with Next.js/TypeScript).',
        },
      ],
    },
    contact: {
      tag: "Let's Talk?",
      titleStart: 'Get in Touch',
      titleHighlight: 'Directly',
      description:
        'Available for opportunities as a Data Engineer/Analyst, Salesforce Developer/Administrator, or Systems Developer/Analyst. Reach out via your preferred channel below:',
      emailLabel: 'Send E-mail',
      linkedinLabel: 'Connect on LinkedIn',
      githubLabel: 'View GitHub Repositories',
      whatsappLabel: 'Chat on WhatsApp +55 (11) 95692-0083',
      resumeCta: 'Download Resume (PDF)',
    },
    resumeModal: {
      printBtn: 'Print / Save as PDF',
      closeBtn: 'Close',
      note: 'Formatted resume ready for printing or saving as PDF (switch between PT and EN above).',
      workExpHeading: 'WORK EXPERIENCE',
    },
    footer: {
      subtitle: 'Data Engineering (Databricks, PySpark, Python, SQL) • Salesforce • SAP',
    },
  },
};
