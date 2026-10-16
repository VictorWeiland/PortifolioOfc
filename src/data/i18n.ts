import { Language, PortfolioData } from '../types/portfolio';

export const I18N_DATA: Record<Language, PortfolioData> = {
  pt: {
    metaTitle: 'Victor Fernandes de Almeida | Desenvolvedor de Sistemas & Analista de Sistemas',
    nav: {
      about: 'Sobre & Skills',
      experience: 'Experiência',
      certifications: 'Cursos & Certificações',
      projects: 'Projetos',
      recruiters: 'Diferenciais',
      contact: 'Contato',
      resumeBtn: 'Currículo PDF',
    },
    hero: {
      badge: 'Desenvolvedor de Sistemas / Analista de Sistemas',
      subtitleParts: {
        intro: 'Desenvolvedor de Sistemas e Analista de Sistemas especializado em ',
        highlight1: 'Salesforce (Admin, Apex, LWC & Flow)',
        mid1: ', ',
        highlight2: 'Engenharia de Dados (Databricks, Spark, PySpark, Python & SQL)',
        mid2: ', ',
        highlight3: 'SAP',
        outro: ' e desenvolvimento de aplicações web modernas.',
      },
      pills: [
        'Salesforce (Admin, Apex & LWC)',
        'Databricks, Spark & PySpark',
        'Python & Pandas',
        'SQL & MySQL',
        'SAP & Power BI',
        'Next.js & TypeScript',
      ],
      ctaPrimary: 'Ver Experiência Profissional',
      ctaSecondary: 'Visualizar / Baixar Currículo',
      cardRole: 'DESENVOLVEDOR DE SISTEMAS / ANALISTA DE SISTEMAS',
    },
    about: {
      tag: 'Apresentação, Hard Skills & Soft Skills',
      titleStart: 'Sobre',
      titleHighlight: 'Este Perfil',
      bioTitle: 'Resumo Profissional',
      bioText:
        'Profissional de tecnologia atuando como Desenvolvedor de Sistemas e Analista de Sistemas, com sólida experiência na análise, desenvolvimento e sustentação de aplicações corporativas e soluções de dados. Possuo forte capacidade para implementar ferramentas voltadas à otimização de processos, automação e desenvolvimento em Salesforce (Apex, LWC e Flow), engenharia e análise de dados (Databricks, Spark, PySpark, Python, Pandas e SQL), desenvolvimento web Full-Stack (Next.js e TypeScript) e operações no SAP. Trabalho com metodologias ágeis, garantindo entregas eficientes e de alta qualidade, atuando de forma proativa, organizada e orientada a resultados.',
      hardSkillsTitle: 'Hard Skills (Competências Técnicas)',
      softSkillsTitle: 'Soft Skills (Competências Comportamentais)',
      certTitle: 'Certificações',
      coursesResumeTitle: 'Cursos',
      langTitle: 'Idiomas',
      langNote:
        'Português nativo e Inglês voltado para leitura técnica, documentação de sistemas e ferramentas globais.',
      languages: [
        { name: 'Português', level: 'Nativo / Fluente', dots: 5 },
        { name: 'Inglês', level: 'Básico / Técnico', dots: 1 },
      ],
      hardSkills: [
        { name: 'Salesforce Admin & CRM', category: 'Salesforce', featured: true },
        { name: 'Salesforce Apex, Lightning & LWC', category: 'Salesforce', featured: true },
        { name: 'Salesforce Flow & Process Builder', category: 'Automação', featured: true },
        { name: 'Databricks (Data Engineering)', category: 'Big Data', featured: true },
        { name: 'Apache Spark & PySpark', category: 'Big Data', featured: true },
        { name: 'Python (Zero ao Avançado)', category: 'Programação', featured: true },
        { name: 'Pandas & Análise de Dados', category: 'Dados', featured: true },
        { name: 'SQL & MySQL (Avançado)', category: 'Banco de Dados', featured: true },
        { name: 'SAP (Gestão e Ciclo de Pedidos)', category: 'ERP', featured: true },
        { name: 'Next.js, React & TypeScript', category: 'Desenvolvimento Web', featured: true },
        { name: 'Node.js, Express & Prisma', category: 'Backend & APIs', featured: false },
        { name: 'Microsoft Power BI & Excel', category: 'BI & Dashboards', featured: false },
        { name: 'ServiceNow (ITSM)', category: 'Suporte Técnico', featured: false },
        { name: 'VMware Workspace ONE (AirWatch)', category: 'Gestão MDM', featured: false },
      ],
      softSkills: [
        {
          title: 'Pensamento Analítico & Resolução de Problemas',
          desc: 'Capacidade de investigar incidentes em sistemas, bancos de dados, SAP e Salesforce e corrigir a causa-raiz com agilidade.',
        },
        {
          title: 'Comunicação Clara entre Negócio e TI',
          desc: 'Facilidade para traduzir demandas de clientes, usuários e gestores em sistemas, automações e relatórios.',
        },
        {
          title: 'Metodologias Ágeis (Scrum / Kanban)',
          desc: 'Organização de prioridades, entregas contínuas no prazo e colaboração ativa em equipes multidisciplinares.',
        },
        {
          title: 'Liderança & Gestão de Projetos e Pessoas',
          desc: 'Experiência prática como Gestor de TI coordenando equipes, sistemas, indicadores e prazos estratégicos.',
        },
        {
          title: 'Foco no Cliente & Suporte Consultivo',
          desc: 'Atendimento próximo e resolutivo que gera confiança — contribuindo para a renovação de contrato por duas vezes.',
        },
        {
          title: 'Proatividade & Aprendizado Contínuo',
          desc: 'Busca constante por evolução técnica em Desenvolvimento de Sistemas, Engenharia de Dados, IA e Cloud.',
        },
      ],
    },
    experience: {
      tag: 'Trajetória Profissional',
      titleStart: 'Experiência',
      titleHighlight: 'Profissional',
      subtitle:
        'Histórico completo de atuação em projetos nos setores Bancário, Bens de Consumo (FMCG), Energia Solar, Saúde e Logística.',
      filterAll: 'Todas',
      filterTech: 'TI, Dados, Salesforce & SAP',
      filterManagement: 'Gestão & Operações',
      responsibilitiesLabel: 'Principais responsabilidades:',
      techUsedLabel: 'Tecnologias e competências:',
      items: [
        {
          id: 'exp-1',
          role: 'Analista de Soluções Digitais I',
          period: 'Julho 2025 – Setembro 2026',
          sector: 'Consultoria Global de Tecnologia',
          category: 'tech',
          highlight: 'Transformação Digital & Dados',
          summary:
            'Atuação estratégica na análise, desenvolvimento e sustentação de soluções digitais corporativas, otimizando processos de negócio, integrações de sistemas, engenharia de dados e experiência do usuário em equipes multidisciplinares ágeis.',
          responsibilities: [
            'Análise e implementação de ferramentas voltadas à otimização de processos e melhoria da experiência do usuário.',
            'Integração de sistemas corporativos, suporte técnico especializado e automação de fluxos.',
            'Aplicação de SQL, Python e ferramentas de CRM/ERP para garantir entregas eficientes e de alta qualidade.',
          ],
          techStack: ['Salesforce', 'SAP', 'SQL', 'Python', 'Pandas', 'Databricks / PySpark', 'Agile / Scrum'],
        },
        {
          id: 'exp-2',
          role: 'Suporte ao Cliente & Soluções Digitais',
          period: 'Dezembro 2025 – Julho 2026',
          sector: 'Setor FMCG (Bens de Consumo)',
          category: 'tech',
          highlight: 'Contrato Renovado 2x',
          summary:
            'Atuei no suporte e implementação de soluções digitais utilizando SAP, SQL, AirWatch, Advisor e dispositivos móveis. Realizei configurações, monitoramento, suporte ao usuário e acompanhamento de processos operacionais, contribuindo para a estabilidade do projeto e para a extensão do contrato por duas vezes. Apoio às operações de gestão de pedidos garantindo consistência de dados entre SAP e bancos de dados.',
          responsibilities: [
            'Monitoramento e validação de pedidos de clientes no SAP para garantir processamento e atendimento com sucesso.',
            'Investigação e resolução de pendências relacionadas a pedidos e dados de clientes.',
            'Gestão do ciclo de vida de pedidos, incluindo atualizações e exclusões.',
            'Execução de consultas SQL para validação de clientes e análise de dados operacionais.',
            'Monitoramento de dados de produtos e pedidos para identificar inconsistências e apoiar operações de negócio.',
            'Suporte técnico e funcional a usuários finais via ServiceNow e WhatsApp.',
          ],
          techStack: ['SAP', 'SQL', 'VMware Workspace ONE UEM', 'AirWatch', 'Advisor', 'ServiceNow'],
        },
        {
          id: 'exp-3',
          role: 'Desenvolvedor Salesforce (Salesforce Developer)',
          period: 'Agosto 2025 – Outubro 2025',
          sector: 'Setor Bancário (Bank)',
          category: 'tech',
          highlight: 'Especialista Salesforce',
          summary:
            'Projeto de suporte e evolução da plataforma Salesforce para instituição bancária, garantindo continuidade operacional, resolução de incidentes e aprimoramento de funcionalidades existentes. Atuação na análise e resolução de demandas técnicas usando Apex, fórmulas e Flow, além de ajustes de configuração e integração com sistemas legados.',
          responsibilities: [
            'Desenvolvimento de código Apex para customizações avançadas.',
            'Criação e manutenção de fórmulas complexas para regras de negócio.',
            'Implementação de Flows para automação de processos internos.',
            'Configuração e customização de objetos, campos e layouts no Salesforce.',
            'Suporte técnico e funcional para integração com sistemas legados.',
          ],
          techStack: [
            'Salesforce Admin',
            'Salesforce Apex',
            'Salesforce Lightning',
            'Salesforce LWC',
            'Flow',
            'Process Builder',
            'Formulas',
          ],
        },
        {
          id: 'exp-4',
          role: 'Gestor de TI (IT Manager)',
          period: 'Setembro 2024 – Junho 2025',
          sector: 'Energia Solar (Solar Energy)',
          category: 'tech',
          highlight: 'Liderança de TI & BI',
          summary:
            'Liderança integral da área de tecnologia em empresa do setor de Energia Solar, conduzindo projetos estratégicos, gestão de equipes, administração de sistemas e inteligência de dados.',
          responsibilities: [
            'Gestão do Departamento de TI e infraestrutura tecnológica.',
            'Gestão de Projetos e alinhamento com indicadores estratégicos.',
            'Gestão de Pessoas e liderança de equipe multidisciplinar.',
            'Gestão de Sistemas e criação de dashboards gerenciais em Power BI e Excel.',
          ],
          techStack: ['Microsoft Power BI', 'Microsoft Excel', 'Gestão de TI', 'Gestão de Projetos', 'Gestão de Sistemas'],
        },
        {
          id: 'exp-5',
          role: 'Assistente Administrativo',
          period: 'Maio 2024 – Julho 2024',
          sector: 'Envio de SMS (SMS Sending)',
          category: 'management',
          highlight: 'Gestão de Campanhas',
          summary:
            'Atuação no gerenciamento operacional de campanhas de mensageria, documentação de processos, treinamento de equipes e suporte direto ao cliente.',
          responsibilities: [
            'Suporte ao Cliente e acompanhamento de solicitações.',
            'Gestão de Campanhas e programação de disparos (Scheduling).',
            'Relatórios, Documentação e Gestão de Processos.',
            'Educação e Treinamento de usuários e equipes.',
          ],
          techStack: ['Suporte ao Cliente', 'Gestão de Campanhas', 'Gestão de Processos', 'Relatórios'],
        },
        {
          id: 'exp-6',
          role: 'Consultor de Planos de Saúde',
          period: 'Setembro 2023 – Dezembro 2023',
          sector: 'Saúde Suplementar (Health Insurance)',
          category: 'management',
          highlight: 'Vendas & Pós-Vendas',
          summary:
            'Consultoria comercial e atendimento especializado no setor de saúde, gerenciando funil de vendas, pós-venda, relatórios gerenciais e campanhas de marketing.',
          responsibilities: [
            'Vendas consultivas e relacionamento Pós-Vendas.',
            'Elaboração de relatórios de desempenho e acompanhamento.',
            'Suporte ao cliente e gestão de campanhas de marketing.',
          ],
          techStack: ['Vendas & Pós-Vendas', 'Suporte ao Cliente', 'Marketing', 'Relatórios'],
        },
        {
          id: 'exp-7',
          role: 'Assistente de Logística',
          period: 'Maio 2023 – Agosto 2023',
          sector: 'Aplicativo de Delivery (Delivery App)',
          category: 'management',
          highlight: 'Operações & Faturamento',
          summary:
            'Controle operacional de estoque, faturamento fiscal e expedição em operação dinâmica de aplicativo de delivery.',
          responsibilities: [
            'Gerenciamento de entrada e saída de materiais.',
            'Emissão de notas fiscais (invoices) e preparação de documentos.',
            'Montagem de pedidos e embalagem para expedição.',
          ],
          techStack: ['Logística', 'Notas Fiscais', 'Controle de Estoque', 'Operações'],
        },
      ],
    },
    coursesSection: {
      tag: 'Qualificações & Formação Contínua',
      titleStart: 'Cursos &',
      titleHighlight: 'Certificações',
      subtitle:
        'Certificações oficiais de indústria e Inteligência Artificial somadas a cursos práticos intensivos na Udemy em Engenharia de Dados (Databricks, Spark, PySpark), Salesforce, Python e SQL.',
      coursesBannerTag: 'UDEMY & FORMAÇÃO PRÁTICA',
      coursesSubheading: 'Cursos & Especializações',
      certifications: [
        {
          year: '2026',
          badgeLabel: 'CERTIFICAÇÃO • 2026',
          title: 'ACTIVATE AI Foundation Badge',
          subtitle: 'Inteligência Artificial & Sistemas',
          description:
            'Certificação voltada ao uso de Inteligência Artificial na otimização de processos de negócio, automação inteligente e ganho de produtividade em projetos.',
          highlights: [
            'Fundamentos de IA e Automação Inteligente',
            'Aplicação prática para agilizar processos corporativos',
            'Inovação e melhoria contínua em entregas',
            'Boas práticas de segurança e governança em IA',
          ],
        },
        {
          year: '2025',
          badgeLabel: 'CERTIFICAÇÃO • 2025',
          title: 'L1 Industry Certification — Global Banking',
          subtitle: 'Setor Bancário & Operações Financeiras',
          description:
            'Certificação focada em operações bancárias globais, atendimento a regras de negócio do setor financeiro e sustentação de sistemas críticos.',
          highlights: [
            'Processos e rotinas de negócios no setor bancário',
            'Sustentação de sistemas com foco em estabilidade',
            'Automação de regras de negócio e atendimento',
            'Integração segura entre plataformas financeiras',
          ],
        },
        {
          year: '2025',
          badgeLabel: 'CERTIFICAÇÃO • 2025',
          title: 'L1 Industry Certification — Automotive',
          subtitle: 'Indústria Automotiva & Processos',
          description:
            'Certificação em processos e sistemas digitais para o setor automotivo, abrangendo gestão de pedidos, cadeia produtiva e relacionamento com clientes.',
          highlights: [
            'Processos digitais da indústria automotiva',
            'Gestão de pedidos e acompanhamento operacional',
            'Integração entre sistemas de gestão (ERP e CRM)',
            'Foco em eficiência e qualidade de entrega',
          ],
        },
      ],
      courses: [
        {
          platform: 'UDEMY',
          category: 'Engenharia de Dados & Big Data',
          title: 'Engenharia de Dados com Databricks, Spark e PySpark',
          description:
            'Construção de pipelines de dados em larga escala, processamento distribuído com Apache Spark e PySpark, arquitetura Lakehouse (Medallion Bronze/Silver/Gold) e transformação de dados no Databricks.',
          skills: ['Databricks', 'Apache Spark', 'PySpark', 'ETL / Lakehouse'],
        },
        {
          platform: 'UDEMY',
          category: 'Engenharia de Dados Avançada',
          title: 'Databricks Certified Data Engineer Professional',
          description:
            'Aprofundamento avançado na plataforma Databricks: otimização de performance com Delta Lake, orquestração de workflows, governança de dados, processamento streaming/batch e boas práticas de engenharia de dados.',
          skills: ['Delta Lake', 'Data Pipelines', 'Databricks Workflows', 'Performance Tuning'],
        },
        {
          platform: 'UDEMY',
          category: 'CRM & Administração Salesforce',
          title: 'Salesforce na Prática — Curso Hands-On Administradores',
          description:
            'Formação prática na administração e configuração do Salesforce: gestão de usuários e permissões, criação de objetos e campos customizados, layouts de página, automação com Flows, fórmulas e relatórios.',
          skills: ['Salesforce Admin', 'Flows & Fórmulas', 'Objetos & Layouts', 'Segurança & Perfis'],
        },
        {
          platform: 'UDEMY',
          category: 'Desenvolvimento & Automação',
          title: 'Programação com Python do Zero ao Avançado',
          description:
            'Domínio completo da linguagem Python: lógica de programação, estruturas de dados, programação orientada a objetos, automação de tarefas, manipulação de arquivos e análise de dados com Pandas.',
          skills: ['Python Avançado', 'POO', 'Pandas', 'Automação de Scripts'],
        },
        {
          platform: 'UDEMY',
          category: 'Bancos de Dados Relacionais',
          title: 'Banco de Dados SQL do Zero ao Avançado',
          description:
            'Modelagem de dados relacionais, criação de tabelas, consultas avançadas (JOINs, Subqueries, Agregações, Views e Índices), validação de integridade e análise de dados operacionais em SQL e MySQL.',
          skills: ['SQL Avançado', 'MySQL', 'Modelagem de Dados', 'Consultas Complexas'],
        },
        {
          platform: 'PRÁTICA & PROJETOS',
          category: 'Desenvolvimento de Sistemas & ERP',
          title: 'Sistemas Web (Next.js / TypeScript) & Operações SAP',
          description:
            'Aplicação prática em projetos reais combinando criação de sistemas SaaS modernos (Next.js, TypeScript, Node.js e Vercel) com gestão de ciclo de pedidos no SAP e visualização em Power BI.',
          skills: ['Next.js & TypeScript', 'SAP', 'Power BI', 'ServiceNow'],
        },
      ],
    },
    projects: {
      tag: 'Portfólio Prático',
      titleStart: 'Projetos &',
      titleHighlight: 'Sistemas Desenvolvidos',
      subtitle:
        'Sistemas web publicados e projetos corporativos realizados nas áreas de Desenvolvimento de Sistemas, CRM, Engenharia de Dados e ERP.',
      searchPlaceholder: 'Buscar projeto ou tecnologia...',
      visitBtn: 'Acessar Sistema',
      caseBtn: 'Ver Experiência',
      emptyTitle: 'Nenhum projeto encontrado',
      emptySubtitle: 'Tente selecionar outra categoria ou limpar a busca.',
      categories: ['Todos', 'Projetos Corporativos', 'Sistemas Web & SaaS', 'Comércio Digital'],
      items: [
        {
          id: 'proj-1',
          name: 'OdontoGEST — Gestão e Agendamento Clínico',
          category: 'Sistemas Web & SaaS',
          subdomain: 'odonto-gest-alpha.vercel.app',
          url: 'https://odonto-gest-alpha.vercel.app/',
          status: 'ONLINE',
          uptime: 'Ativo',
          latency: 'Next.js & TypeScript',
          metrics: 'Agendamento Online',
          description:
            'Plataforma desenvolvida para clínicas e profissionais da saúde organizarem sua agenda. Permite que pacientes encontrem clínicas e marquem consultas online de forma simples e rápida.',
          techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Vercel'],
        },
        {
          id: 'proj-2',
          name: 'O Padeiro — Cardápio Digital & Pedidos',
          category: 'Comércio Digital',
          subdomain: 'cardapio-massas-artesanais.vercel.app',
          url: 'https://cardapio-massas-artesanais.vercel.app/',
          status: 'ONLINE',
          uptime: 'Ativo',
          latency: 'Node.js & TypeScript',
          metrics: 'Pedidos no WhatsApp',
          description:
            'Sistema de cardápio interativo e carrinho de compras online. O cliente escolhe produtos, personaliza o pedido e envia tudo pronto diretamente para o WhatsApp do estabelecimento.',
          techStack: ['Node.js', 'TypeScript', 'SQLite', 'Tailwind CSS', 'Vercel'],
        },
        {
          id: 'proj-3',
          name: 'Sustentação & Automação Salesforce — Setor Bancário',
          category: 'Projetos Corporativos',
          subdomain: 'Projeto Corporativo • Banco',
          url: '#experiencia',
          status: 'CONCLUÍDO',
          uptime: 'Alta Disponibilidade',
          latency: 'Salesforce CRM',
          metrics: 'Automação de Processos',
          description:
            'Atuação na melhoria e manutenção do sistema Salesforce para um grande banco, criando fluxos automáticos, ajustando regras de negócio e garantindo o funcionamento contínuo da operação.',
          techStack: ['Salesforce Admin', 'Apex', 'Lightning LWC', 'Flow', 'Process Builder'],
        },
        {
          id: 'proj-4',
          name: 'Gestão de Pedidos SAP & Análise de Dados SQL/Python',
          category: 'Projetos Corporativos',
          subdomain: 'Projeto Corporativo • Bens de Consumo',
          url: '#experiencia',
          status: 'RENOVADO 2X',
          uptime: 'Dados Consistentes',
          latency: 'SAP, SQL & Python',
          metrics: 'Contrato Estendido 2x',
          description:
            'Acompanhamento completo de pedidos no SAP e validação de dados via SQL para evitar falhas de faturamento e entrega, além de suporte direto aos usuários — resultado que levou à renovação do contrato duas vezes.',
          techStack: ['SAP', 'SQL', 'Python & Pandas', 'AirWatch', 'ServiceNow'],
        },
      ],
    },
    recruiterSection: {
      tag: 'Visão Geral para Recrutadores & Gestores',
      titleStart: 'Como Eu Gero Valor',
      titleHighlight: 'na Prática',
      description:
        'De forma simples e direta: veja como minha atuação como Desenvolvedor de Sistemas / Analista de Sistemas se traduz em resultados reais para a equipe e para o negócio.',
      cards: [
        {
          badge: '01 • DESENVOLVIMENTO & AUTOMAÇÃO',
          title: 'Desenvolvo Sistemas e Automatizo Processos Manuais',
          description:
            'Com domínio prático em desenvolvimento Web (Next.js/TypeScript), Salesforce (Flows, Fórmulas, Apex e LWC) e Python, crio sistemas e transformo tarefas manuais em fluxos rápidos e padronizados.',
        },
        {
          badge: '02 • ENGENHARIA & ANÁLISE DE DADOS',
          title: 'Transformo Dados em Segurança Operacional e Decisão',
          description:
            'Uno experiência prática em validação de pedidos no SAP e consultas SQL avançadas com capacitação em Engenharia de Dados (Databricks, Spark, PySpark, Python e Power BI) para garantir dados confiáveis.',
        },
        {
          badge: '03 • ANÁLISE DE SISTEMAS & COMUNICAÇÃO',
          title: 'Conecto a Área Técnica às Necessidades do Negócio',
          description:
            'Tenho facilidade para dialogar tanto com usuários finais quanto com gestores. Já atuei como Gestor de TI liderando equipes e projetos, além de prestar suporte consultivo via ServiceNow e WhatsApp.',
        },
        {
          badge: '04 • COMPROMISSO E RESULTADO',
          title: 'Perfil Proativo, Ágil e com Histórico de Confiança',
          description:
            'Trabalho com metodologias ágeis, organização e foco em entrega. No setor de bens de consumo (FMCG), minha dedicação à estabilidade da operação contribuiu diretamente para a renovação do contrato por duas vezes.',
        },
      ],
    },
    contact: {
      tag: 'Contato Direto',
      titleStart: 'Fale com',
      titleHighlight: 'Victor Fernandes',
      description:
        'Disponível para oportunidades como Desenvolvedor de Sistemas, Analista de Sistemas, Administrador/Desenvolvedor Salesforce, Engenharia/Análise de Dados (Databricks, Python, SQL) ou Analista SAP.',
      whatsappTitle: 'WhatsApp Direto',
      whatsappDesc: 'Converse pelo número',
      locationTitle: 'Localização & Disponibilidade',
      locationDesc: 'Brasil • Presencial, Híbrido ou Remoto',
      formTitle: 'Enviar Mensagem Rápida',
      nameLabel: 'Seu Nome *',
      namePlaceholder: 'Ex: Maria Silva / Recrutadora',
      emailLabel: 'Seu E-mail *',
      emailPlaceholder: 'voce@empresa.com',
      subjectLabel: 'Assunto',
      subjectOptions: [
        'Oportunidade / Vaga — Desenvolvedor de Sistemas / Analista de Sistemas',
        'Oportunidade / Vaga — Salesforce (Admin / Developer)',
        'Oportunidade / Vaga — Engenharia ou Análise de Dados (Databricks, Python, SQL)',
        'Oportunidade / Vaga — SAP, Operações ou Suporte Técnico',
      ],
      messageLabel: 'Mensagem *',
      messagePlaceholder: 'Conte um pouco sobre a vaga, oportunidade ou projeto...',
      submitBtn: 'Enviar Mensagem via WhatsApp',
    },
    resumeModal: {
      printBtn: 'Imprimir / Salvar PDF',
      closeBtn: 'Fechar',
      note: 'Versão limpa e atualizada do currículo com Cursos Udemy, Hard Skills e Soft Skills (Português e Inglês).',
      workExpHeading: 'EXPERIÊNCIA PROFISSIONAL',
    },
    footer: {
      subtitle: 'Desenvolvedor de Sistemas / Analista de Sistemas • Salesforce • Databricks & PySpark • SAP • SQL • Python',
    },
  },
  en: {
    metaTitle: 'Victor Fernandes de Almeida | Systems Developer & Systems Analyst',
    nav: {
      about: 'About & Skills',
      experience: 'Experience',
      certifications: 'Courses & Certifications',
      projects: 'Projects',
      recruiters: 'How I Add Value',
      contact: 'Contact',
      resumeBtn: 'Resume PDF',
    },
    hero: {
      badge: 'Systems Developer / Systems Analyst',
      subtitleParts: {
        intro: 'Systems Developer and Systems Analyst specialized in ',
        highlight1: 'Salesforce (Admin, Apex, LWC & Flow)',
        mid1: ', ',
        highlight2: 'Data Engineering (Databricks, Spark, PySpark, Python & SQL)',
        mid2: ', ',
        highlight3: 'SAP',
        outro: ', and modern web application development.',
      },
      pills: [
        'Salesforce (Admin, Apex & LWC)',
        'Databricks, Spark & PySpark',
        'Python & Pandas',
        'SQL & MySQL',
        'SAP & Power BI',
        'Next.js & TypeScript',
      ],
      ctaPrimary: 'View Work Experience',
      ctaSecondary: 'View / Download Resume',
      cardRole: 'SYSTEMS DEVELOPER / SYSTEMS ANALYST',
    },
    about: {
      tag: 'Profile, Hard Skills & Soft Skills',
      titleStart: 'About',
      titleHighlight: 'This Profile',
      bioTitle: 'Professional Summary',
      bioText:
        'Technology professional working as a Systems Developer and Systems Analyst, with strong experience analyzing, developing, and supporting enterprise systems and data solutions. I have a proven ability to implement tools aimed at process optimization, Salesforce automation & development (Apex, LWC, and Flow), data engineering & analytics (Databricks, Spark, PySpark, Python, Pandas, and SQL), Full-Stack web development (Next.js and TypeScript), and SAP operations. I work with agile methodologies, ensuring efficient and high-quality deliveries with a proactive, organized, and results-oriented mindset.',
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
        { name: 'Salesforce Admin & CRM', category: 'Salesforce', featured: true },
        { name: 'Salesforce Apex, Lightning & LWC', category: 'Salesforce', featured: true },
        { name: 'Salesforce Flow & Process Builder', category: 'Automation', featured: true },
        { name: 'Databricks (Data Engineering)', category: 'Big Data', featured: true },
        { name: 'Apache Spark & PySpark', category: 'Big Data', featured: true },
        { name: 'Python (Zero to Advanced)', category: 'Programming', featured: true },
        { name: 'Pandas & Data Analysis', category: 'Data', featured: true },
        { name: 'SQL & MySQL (Advanced)', category: 'Database', featured: true },
        { name: 'SAP (Order Lifecycle Management)', category: 'ERP', featured: true },
        { name: 'Next.js, React & TypeScript', category: 'Web Dev', featured: true },
        { name: 'Node.js, Express & Prisma', category: 'Backend & APIs', featured: false },
        { name: 'Microsoft Power BI & Excel', category: 'BI & Analytics', featured: false },
        { name: 'ServiceNow (ITSM)', category: 'Tech Support', featured: false },
        { name: 'VMware Workspace ONE (AirWatch)', category: 'MDM', featured: false },
      ],
      softSkills: [
        {
          title: 'Analytical Thinking & Problem Solving',
          desc: 'Ability to investigate complex issues across systems, databases, SAP, and Salesforce and resolve root causes quickly.',
        },
        {
          title: 'Clear Communication Between Business & IT',
          desc: 'Translating user, client, and management requirements into practical systems, automations, and dashboards.',
        },
        {
          title: 'Agile Methodologies (Scrum / Kanban)',
          desc: 'Strong prioritization, consistent on-time delivery, and active collaboration in multidisciplinary teams.',
        },
        {
          title: 'Team Leadership & Project Management',
          desc: 'Hands-on experience as an IT Manager leading teams, systems, KPIs, and strategic initiatives.',
        },
        {
          title: 'Customer Focus & Consultative Support',
          desc: 'Reliable, empathetic support that builds trust — directly contributing to extending an enterprise contract twice.',
        },
        {
          title: 'Proactivity & Continuous Learning',
          desc: 'Constant upskilling across Systems Development, Data Engineering (Databricks/PySpark), AI, and Cloud.',
        },
      ],
    },
    experience: {
      tag: 'Career Path',
      titleStart: 'Work',
      titleHighlight: 'Experience',
      subtitle:
        'Proven track record in enterprise projects across Banking, FMCG, Solar Energy, Healthcare, and Logistics sectors.',
      filterAll: 'All Roles',
      filterTech: 'IT, Data, Salesforce & SAP',
      filterManagement: 'Management & Operations',
      responsibilitiesLabel: 'Main responsibilities:',
      techUsedLabel: 'Technologies & skills used:',
      items: [
        {
          id: 'exp-1',
          role: 'Digital Solutions Analyst I',
          period: 'July 2025 – September 2026',
          sector: 'Global Technology Consultancy',
          category: 'tech',
          highlight: 'Digital Transformation & Data',
          summary:
            'Strategic role analyzing, developing, and supporting enterprise digital solutions, optimizing business processes, system integrations, data workflows, and user experience within agile multidisciplinary teams.',
          responsibilities: [
            'Analyzing and implementing tools aimed at process optimization and user experience enhancement.',
            'Enterprise system integration, specialized technical support, and workflow automation.',
            'Applying SQL, Python, and CRM/ERP platforms to ensure efficient and high-quality deliveries.',
          ],
          techStack: ['Salesforce', 'SAP', 'SQL', 'Python', 'Pandas', 'Databricks / PySpark', 'Agile / Scrum'],
        },
        {
          id: 'exp-2',
          role: 'Customer Support & Digital Solutions',
          period: 'December 2025 – July 2026',
          sector: 'FMCG (Fast-Moving Consumer Goods)',
          category: 'tech',
          highlight: 'Contract Extended Twice',
          summary:
            "I worked in the support and implementation of digital solutions, using SAP, SQL, AirWatch, Advisor, and mobile devices. I performed configurations, monitoring, user support, and operational process follow-up, contributing to the project's stability and the extension of the contract twice. Work on a project in the FMCG sector, supporting order management operations and ensuring data consistency across SAP and database systems while providing customer support.",
          responsibilities: [
            'Monitoring and validating customer orders in SAP to ensure successful processing and fulfillment.',
            'Investigating and resolving outstanding issues related to orders and customer data.',
            'Managing order lifecycle processes, including updates and deletions.',
            'Executing SQL queries for customer validation and operational data analysis.',
            'Monitoring product and order data to identify inconsistencies and support business operations.',
            'Providing technical and functional support to end users via ServiceNow and WhatsApp.',
          ],
          techStack: ['SAP', 'SQL', 'VMware Workspace ONE UEM', 'AirWatch', 'Advisor', 'ServiceNow'],
        },
        {
          id: 'exp-3',
          role: 'Salesforce Developer',
          period: 'August 2025 – October 2025',
          sector: 'Banking Sector (Bank)',
          category: 'tech',
          highlight: 'Salesforce Specialist',
          summary:
            'Salesforce platform support project for a Bank, ensuring operational continuity, incident resolution, and the enhancement of existing functionalities. I worked on analyzing and resolving technical requests, developing improvements using Apex, formulas, and Flow, as well as making configuration adjustments to meet business rules. Responsible for maintaining system stability, optimizing processes, and supporting integrations with legacy systems.',
          responsibilities: [
            'Developing Apex code for advanced customizations.',
            'Creating and maintaining complex formulas for business rules.',
            'Implementing Flows to automate internal processes.',
            'Configuring and customizing objects, fields, and layouts in Salesforce.',
            'Providing technical and functional support for integration with legacy systems.',
          ],
          techStack: [
            'Salesforce Admin',
            'Salesforce Apex',
            'Salesforce Lightning',
            'Salesforce LWC',
            'Flow',
            'Process Builder',
            'Formulas',
          ],
        },
        {
          id: 'exp-4',
          role: 'IT Manager',
          period: 'September 2024 – June 2025',
          sector: 'Solar Energy',
          category: 'tech',
          highlight: 'IT Leadership & BI',
          summary:
            'Led the Information Technology department for a Solar Energy company, overseeing project delivery, team management, enterprise systems, and business intelligence reporting.',
          responsibilities: [
            'IT Department Management and technology infrastructure oversight.',
            'Project Management aligned with strategic KPIs.',
            'People Management and leadership of multidisciplinary staff.',
            'Systems Management and executive analytics using Microsoft Power BI and Excel.',
          ],
          techStack: ['Microsoft Power BI', 'Microsoft Excel', 'IT Management', 'Project Management', 'Systems Management'],
        },
        {
          id: 'exp-5',
          role: 'Administrative Assistant',
          period: 'May 2024 – July 2024',
          sector: 'SMS Sending / Telecommunications',
          category: 'management',
          highlight: 'Campaign & Process Management',
          summary:
            'Managed messaging campaigns, operational documentation, scheduling workflows, user training, and customer support operations.',
          responsibilities: [
            'Customer Support and ticket follow-up.',
            'Campaign Management and dispatch scheduling.',
            'Reporting, Documentation, and Process Management.',
            'Education and Training for teams and clients.',
          ],
          techStack: ['Customer Support', 'Campaign Management', 'Process Management', 'Reporting'],
        },
        {
          id: 'exp-6',
          role: 'Health Insurance Consultant',
          period: 'September 2023 – December 2023',
          sector: 'Health Insurance',
          category: 'management',
          highlight: 'Sales & After-Sales',
          summary:
            'Consultative sales and customer lifecycle management in the health insurance industry, handling reporting and marketing campaigns.',
          responsibilities: [
            'Sales and After-Sales consultative support.',
            'Operational Reports and performance tracking.',
            'Customer Support and Marketing Campaign Management.',
          ],
          techStack: ['Sales & After-Sales', 'Customer Support', 'Marketing Campaigns', 'Reports'],
        },
        {
          id: 'exp-7',
          role: 'Logistics Assistant',
          period: 'May 2023 – August 2023',
          sector: 'Delivery App',
          category: 'management',
          highlight: 'Fulfillment & Invoicing',
          summary:
            'Managed inventory flow, billing documentation, and order fulfillment in a fast-paced delivery application operation.',
          responsibilities: [
            'Manage the entry and exit of materials.',
            'Issue invoices and prepare operational documents.',
            'Assemble orders and pack items for dispatch.',
          ],
          techStack: ['Logistics', 'Invoicing', 'Inventory Control', 'Order Fulfillment'],
        },
      ],
    },
    coursesSection: {
      tag: 'Qualifications & Continuous Learning',
      titleStart: 'Courses &',
      titleHighlight: 'Certifications',
      subtitle:
        'Official industry and Artificial Intelligence certifications combined with intensive hands-on Udemy courses in Data Engineering (Databricks, Spark, PySpark), Salesforce, Python, and SQL.',
      coursesBannerTag: 'UDEMY & HANDS-ON TRAINING',
      coursesSubheading: 'Completed Udemy Courses & Specializations',
      certifications: [
        {
          year: '2026',
          badgeLabel: 'CERTIFICATION • 2026',
          title: 'ACTIVATE AI Foundation Badge',
          subtitle: 'Artificial Intelligence & Systems',
          description:
            'Certification focused on applying Artificial Intelligence to optimize business workflows, automate repetitive tasks, and drive digital transformation.',
          highlights: [
            'AI Fundamentals & Intelligent Process Automation',
            'Practical application to streamline enterprise workflows',
            'Innovation and productivity in strategic projects',
            'Governance, security, and best practices in AI solutions',
          ],
        },
        {
          year: '2025',
          badgeLabel: 'CERTIFICATION • 2025',
          title: 'L1 Industry Certification — Global Banking',
          subtitle: 'Global Banking & Financial Operations',
          description:
            'Certification focused on global banking operations, financial business rules compliance, and supporting mission-critical banking platforms.',
          highlights: [
            'Banking sector processes & core workflows',
            'High-availability system support & stability',
            'Business rule automation & financial CRM',
            'Secure integration with legacy banking systems',
          ],
        },
        {
          year: '2025',
          badgeLabel: 'CERTIFICATION • 2025',
          title: 'L1 Industry Certification — Automotive',
          subtitle: 'Automotive Industry & Processes',
          description:
            'Certification in digital systems and processes for the automotive sector, covering order management, supply chain workflows, and customer experience.',
          highlights: [
            'Digital operations in the automotive industry',
            'Order lifecycle management & operational tracking',
            'ERP & CRM integration across industrial operations',
            'Focus on operational efficiency and delivery quality',
          ],
        },
      ],
      courses: [
        {
          platform: 'UDEMY',
          category: 'Data Engineering & Big Data',
          title: 'Data Engineering with Databricks, Spark and PySpark',
          description:
            'Building scalable data pipelines, distributed data processing with Apache Spark and PySpark, Medallion Lakehouse architecture (Bronze/Silver/Gold), and data transformation on Databricks.',
          skills: ['Databricks', 'Apache Spark', 'PySpark', 'ETL / Lakehouse'],
        },
        {
          platform: 'UDEMY',
          category: 'Advanced Data Engineering',
          title: 'Databricks Certified Data Engineer Professional',
          description:
            'Advanced mastery of the Databricks platform: performance optimization with Delta Lake, workflow orchestration, data governance, batch/streaming processing, and production engineering practices.',
          skills: ['Delta Lake', 'Data Pipelines', 'Databricks Workflows', 'Performance Tuning'],
        },
        {
          platform: 'UDEMY',
          category: 'CRM & Salesforce Admin',
          title: 'Hands-On Salesforce Administration Practice Course',
          description:
            'Practical training in Salesforce administration and configuration: user and permission management, custom objects and fields, page layouts, Flow automation, formulas, and analytical reports.',
          skills: ['Salesforce Admin', 'Flows & Formulas', 'Objects & Layouts', 'Security & Profiles'],
        },
        {
          platform: 'UDEMY',
          category: 'Development & Automation',
          title: 'Python Programming from Zero to Advanced',
          description:
            'Comprehensive mastery of Python: programming logic, data structures, Object-Oriented Programming (OOP), task automation, file processing, and data analysis with Pandas.',
          skills: ['Advanced Python', 'OOP', 'Pandas', 'Script Automation'],
        },
        {
          platform: 'UDEMY',
          category: 'Relational Databases',
          title: 'SQL Database from Zero to Advanced',
          description:
            'Relational database modeling, table design, advanced queries (JOINs, Subqueries, Aggregations, Views, and Indexes), data integrity validation, and operational data analysis in SQL and MySQL.',
          skills: ['Advanced SQL', 'MySQL', 'Data Modeling', 'Complex Queries'],
        },
        {
          platform: 'PROJECTS & PRACTICE',
          category: 'Systems Development & ERP',
          title: 'Modern Web Systems (Next.js / TypeScript) & SAP Operations',
          description:
            'Practical application in real-world projects combining modern SaaS web development (Next.js, TypeScript, Node.js, and Vercel) with SAP order lifecycle management and Power BI reporting.',
          skills: ['Next.js & TypeScript', 'SAP', 'Power BI', 'ServiceNow'],
        },
      ],
    },
    projects: {
      tag: 'Practical Portfolio',
      titleStart: 'Projects &',
      titleHighlight: 'Developed Systems',
      subtitle:
        'Live web applications and enterprise projects delivered across Systems Development, CRM, Data Engineering, and ERP.',
      searchPlaceholder: 'Search project or technology...',
      visitBtn: 'Open System',
      caseBtn: 'View Experience',
      emptyTitle: 'No matching projects found',
      emptySubtitle: 'Try selecting another category or clearing the search.',
      categories: ['All', 'Enterprise Projects', 'Web Systems & SaaS', 'Digital Commerce'],
      items: [
        {
          id: 'proj-1',
          name: 'OdontoGEST — Clinic Management & Scheduling',
          category: 'Web Systems & SaaS',
          subdomain: 'odonto-gest-alpha.vercel.app',
          url: 'https://odonto-gest-alpha.vercel.app/',
          status: 'ONLINE',
          uptime: 'Live',
          latency: 'Next.js & TypeScript',
          metrics: 'Online Booking',
          description:
            'Platform built for clinics and healthcare professionals to organize patient flow. Allows patients to find qualified clinics and book appointments online quickly and intuitively.',
          techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Vercel'],
        },
        {
          id: 'proj-2',
          name: 'O Padeiro — Digital Menu & Ordering System',
          category: 'Digital Commerce',
          subdomain: 'cardapio-massas-artesanais.vercel.app',
          url: 'https://cardapio-massas-artesanais.vercel.app/',
          status: 'ONLINE',
          uptime: 'Live',
          latency: 'Node.js & TypeScript',
          metrics: 'WhatsApp Orders',
          description:
            "Interactive digital menu and online shopping cart. Customers customize portions and flavors and send their complete order directly to the store's WhatsApp.",
          techStack: ['Node.js', 'TypeScript', 'SQLite', 'Tailwind CSS', 'Vercel'],
        },
        {
          id: 'proj-3',
          name: 'Salesforce CRM Support & Automation — Banking Sector',
          category: 'Enterprise Projects',
          subdomain: 'Enterprise Project • Banking',
          url: '#experiencia',
          status: 'DELIVERED',
          uptime: 'High Availability',
          latency: 'Salesforce CRM',
          metrics: 'Workflow Automation',
          description:
            'Enhanced and maintained the Salesforce platform for a bank, building automated Flows, adjusting business rule formulas, developing Apex customizations, and ensuring system stability.',
          techStack: ['Salesforce Admin', 'Apex', 'Lightning LWC', 'Flow', 'Process Builder'],
        },
        {
          id: 'proj-4',
          name: 'SAP Order Lifecycle & SQL/Python Data Validation',
          category: 'Enterprise Projects',
          subdomain: 'Enterprise Project • Consumer Goods',
          url: '#experiencia',
          status: 'EXTENDED 2X',
          uptime: 'Data Consistency',
          latency: 'SAP, SQL & Python',
          metrics: 'Contract Extended 2x',
          description:
            'End-to-end order monitoring in SAP and SQL data validation to prevent billing and fulfillment issues, combined with user support — results that contributed to extending the contract twice.',
          techStack: ['SAP', 'SQL', 'Python & Pandas', 'AirWatch', 'ServiceNow'],
        },
      ],
    },
    recruiterSection: {
      tag: 'Overview for Recruiters & Hiring Managers',
      titleStart: 'How I Deliver Value',
      titleHighlight: 'in Practice',
      description:
        'In clear, practical terms: here is how my work as a Systems Developer / Systems Analyst translates into real day-to-day results for your team and business.',
      cards: [
        {
          badge: '01 • SYSTEMS DEVELOPMENT & AUTOMATION',
          title: 'I Build Systems & Automate Manual Workflows',
          description:
            'With hands-on skills in Web Development (Next.js/TypeScript), Salesforce (Flows, Formulas, Apex, and LWC), and Python, I build applications and turn repetitive tasks into fast, standardized workflows.',
        },
        {
          badge: '02 • DATA ENGINEERING & ANALYTICS',
          title: 'I Turn Data into Operational Reliability & Insights',
          description:
            'I combine real-world experience validating SAP orders and running advanced SQL queries with specialized training in Data Engineering (Databricks, Spark, PySpark, Python, and Power BI).',
        },
        {
          badge: '03 • SYSTEMS ANALYSIS & COMMUNICATION',
          title: 'I Bridge Technical Teams and Business Needs',
          description:
            'I communicate clearly with both end users and executives. My background includes serving as an IT Manager leading teams and projects, as well as delivering consultative support via ServiceNow and WhatsApp.',
        },
        {
          badge: '04 • PROACTIVE & RESULTS-DRIVEN',
          title: 'Agile Mindset with a Proven Track Record of Trust',
          description:
            'I work with agile methodologies, strong organization, and ownership. In my FMCG project, ensuring system stability and high-quality support contributed to extending the contract twice.',
        },
      ],
    },
    contact: {
      tag: 'Direct Contact',
      titleStart: 'Get in Touch with',
      titleHighlight: 'Victor Fernandes',
      description:
        'Available for opportunities as a Systems Developer, Systems Analyst, Salesforce Administrator/Developer, Data Engineer/Analyst (Databricks, Python, SQL), or SAP Analyst.',
      whatsappTitle: 'Direct WhatsApp',
      whatsappDesc: 'Reach out at',
      locationTitle: 'Location & Availability',
      locationDesc: 'Brazil • On-site, Hybrid, or Remote',
      formTitle: 'Send a Quick Message',
      nameLabel: 'Your Name *',
      namePlaceholder: 'Ex: John Doe / Tech Recruiter',
      emailLabel: 'Your E-mail *',
      emailPlaceholder: 'you@company.com',
      subjectLabel: 'Subject',
      subjectOptions: [
        'Job Opportunity — Systems Developer / Systems Analyst',
        'Job Opportunity — Salesforce (Admin / Developer)',
        'Job Opportunity — Data Engineering / Data Analytics (Databricks, Python, SQL)',
        'Job Opportunity — SAP, Operations or Technical Support',
      ],
      messageLabel: 'Message *',
      messagePlaceholder: 'Tell me a bit about the role, opportunity, or project...',
      submitBtn: 'Send Message via WhatsApp',
    },
    resumeModal: {
      printBtn: 'Print / Save as PDF',
      closeBtn: 'Close',
      note: 'Updated printable resume including Udemy Courses, Hard Skills, and Soft Skills (switches between PT and EN).',
      workExpHeading: 'WORK EXPERIENCE',
    },
    footer: {
      subtitle: 'Systems Developer / Systems Analyst • Salesforce • Databricks & PySpark • SAP • SQL • Python',
    },
  },
};
