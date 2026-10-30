/* ==================================================================
   PROJETOS · Ruan Gomes.dev
   ------------------------------------------------------------------
   Esta é a única lista que você precisa editar para mostrar novos
   projetos. A seção "Projetos" é montada automaticamente a partir
   dela, na mesma ordem (a numeração 01, 02, 03... também é automática).

   COMO ADICIONAR O PRÓXIMO PROJETO
   1. Copie o bloco MODELO que está no fim deste arquivo.
   2. Cole dentro da lista PROJECTS, depois do último projeto.
   3. Preencha os campos e faça o commit. O site se atualiza sozinho.

   CAMPOS
   name          Nome do projeto                              (obrigatório)
   category      Tipo de aplicação
   status        Situação: "Publicado", "Em desenvolvimento"...
   description   Resumo em 1 a 3 frases
   highlights    Funcionalidades principais (lista)            (opcional)
   technologies  Tecnologias utilizadas (lista)
   image         Caminho da captura de tela em assets/images/  (opcional)
   imageAlt      Descrição da imagem, para acessibilidade
   demoUrl       Endereço do projeto publicado  → botão "Ver demonstração"
   demoLabel     Texto do botão do demoUrl, se não for "Ver demonstração" (opcional)
   githubUrl     Endereço do repositório        → botão "Ver código"
   links         Botões extras: [{ label, url, ghost }]          (opcional)
   featured      true destaca o card como projeto principal      (opcional)
   count         Quantos projetos o card reúne (padrão 1); usado
                 no contador "projetos publicados" do início     (opcional)

   REGRA: use em demoUrl e githubUrl somente endereços reais, que você
   já abriu e funcionam. Se ainda não existirem, deixe "" (vazio): o
   botão correspondente simplesmente não aparece.
   ================================================================== */

const PROJECTS = [
  // ---------------------------------------------------------------
  // Projeto 01 · StockCore API (projeto principal)
  // ---------------------------------------------------------------
  {
    name: "StockCore API",
    featured: true,
    category: "API REST de controle de estoque · C# e .NET 8",
    status: "Publicado",
    description:
      "Projeto pessoal de back-end: API de estoque com entradas e saídas, estornos, estoque mínimo, " +
      "alertas e relatórios, em arquitetura em camadas com Entity Framework Core e PostgreSQL.",
    highlights: [
      "Saldo nunca negativo, com a regra no domínio e no banco",
      "Controle de concorrência com SELECT ... FOR UPDATE",
      "Estorno em transação, sem apagar o histórico",
      "Autenticação JWT com papéis e validação com FluentValidation",
      "Migrations do Entity Framework Core checadas no CI",
      "90 testes (44 unitários e 46 de integração) no GitHub Actions",
    ],
    technologies: ["C#", ".NET 8", "ASP.NET Core", "EF Core", "PostgreSQL", "xUnit", "GitHub Actions"],
    image: "assets/images/stockcore-api.webp",
    imageAlt: "Documentação Swagger da StockCore API com as rotas de alertas, autenticação e categorias",
    demoUrl: "https://ruangdev0-ux.github.io/stockcore-api/",
    demoLabel: "Ver documentação da API",
    githubUrl: "https://github.com/ruangdev0-ux/stockcore-api",
  },

  // ---------------------------------------------------------------
  // Projeto 02 · TeamTasks API (projeto principal)
  // ---------------------------------------------------------------
  {
    name: "TeamTasks API",
    featured: true,
    category: "API REST de tarefas e equipes · TypeScript e Node.js",
    status: "Publicado",
    description:
      "Projeto pessoal de back-end: API com usuários, equipes, projetos e tarefas, papéis e permissões, " +
      "fluxo de status e histórico, com Express e PostgreSQL.",
    highlights: [
      "Autenticação com JWT e senhas com bcrypt",
      "Papéis e permissões por equipe",
      "Fluxo de status validado e histórico de alterações",
      "Filtros e paginação",
      "Validação com Zod e documentação Swagger/OpenAPI",
      "70 testes (35 unitários e 35 de integração) no GitHub Actions",
    ],
    technologies: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Vitest", "GitHub Actions"],
    image: "assets/images/teamtasks-api.webp",
    imageAlt: "Documentação Swagger da TeamTasks API com as rotas de autenticação e equipes",
    demoUrl: "https://ruangdev0-ux.github.io/teamtasks-api/",
    demoLabel: "Ver documentação da API",
    githubUrl: "https://github.com/ruangdev0-ux/teamtasks-api",
  },

  // ---------------------------------------------------------------
  // Projeto 03 · SalesFlow (projeto principal)
  // ---------------------------------------------------------------
  {
    name: "SalesFlow",
    featured: true,
    category: "Sistema web de gestão comercial · JavaScript puro",
    status: "Publicado",
    description:
      "Sistema com cadastro de clientes e produtos, vendas com vários itens e baixa automática do " +
      "estoque. Feito em JavaScript puro, sem frameworks, com o código organizado em camadas " +
      "(dados, regras de negócio, interface e telas), testes unitários e CI/CD com GitHub Actions.",
    highlights: [
      "CRUD completo de clientes e produtos, com busca",
      "Vendas com vários itens e baixa automática do estoque",
      "Regras de negócio: status da venda, estoque insuficiente e exclusões protegidas",
      "Validação de formulários e tratamento de erros",
      "Código em camadas: dados, serviços, interface e telas",
      "Testes unitários com node:test, rodando no GitHub Actions antes de cada deploy",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "localStorage", "node:test", "GitHub Actions"],
    image: "assets/images/salesflow.webp",
    imageAlt: "Dashboard do SalesFlow com faturamento, valores a receber, vendas, clientes e produtos",
    demoUrl: "https://ruangdev0-ux.github.io/salesflow/",
    githubUrl: "https://github.com/ruangdev0-ux/salesflow",
  },

  // ---------------------------------------------------------------
  // Projeto 04 · Ordena e Prateleira (Vortyx) — conta como 2 projetos
  // ---------------------------------------------------------------
  {
    name: "Ordena e Prateleira",
    count: 2,
    category: "Ordena + Prateleira — 2 protótipos SaaS · Vortyx · dados fictícios",
    status: "Demonstração",
    description:
      "Dois protótipos de SaaS que rodam inteiramente no navegador, com empresas, pessoas e números " +
      "fictícios. O Ordena é uma central de atendimento; o Prateleira faz a gestão de pedidos e estoque " +
      "de várias unidades. São demonstrações, não sistemas de cliente em produção.",
    highlights: [
      "Perfis de acesso: cada perfil vê telas e ações diferentes",
      "Pedidos, estoque com alertas de mínimo e quadro Kanban",
      "Relatórios e indicadores por período",
      "Ordena: classificação de mensagens por “IA” simulada por regras no navegador",
      "Layout responsivo",
      "Acessibilidade: navegação por teclado e ARIA",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "localStorage", "Acessibilidade"],
    image: "assets/images/ordena-prateleira.webp",
    imageAlt: "Telas dos protótipos Ordena, com a caixa de entrada de atendimento, e Prateleira, com o painel de pedidos e estoque",
    links: [
      { label: "Ver Ordena", url: "https://somosvortyx.com.br/demonstracoes/saas/central-atendimento/" },
      { label: "Ver Prateleira", url: "https://somosvortyx.com.br/demonstracoes/saas/pedidos-estoque/", ghost: true },
    ],
  },

  // ---------------------------------------------------------------
  // Projeto 05 · SkyCast
  // ---------------------------------------------------------------
  {
    name: "SkyCast",
    category: "Aplicação web de previsão do tempo · API REST",
    status: "Publicado",
    description:
      "Painel com as condições atuais e a previsão de 7 dias para qualquer cidade, consumindo a API " +
      "REST Open-Meteo. Build com Vite e deploy automático com GitHub Actions e GitHub Pages.",
    highlights: [
      "Consumo da API REST Open-Meteo com fetch e async/await",
      "Busca por cidade e localização pela Geolocation API",
      "Tratamento de erros com mensagens claras",
      "Previsão de 7 dias com ícone e descrição",
      "Build com Vite e deploy pelo GitHub Actions",
      "Layout adaptado para telas menores",
    ],
    technologies: ["JavaScript", "API REST", "fetch", "Geolocation API", "Vite", "GitHub Actions"],
    image: "assets/images/skycast.webp",
    imageAlt: "Painel do SkyCast com as condições atuais e a previsão de 7 dias para São Paulo",
    demoUrl: "https://ruangdev0-ux.github.io/skycast/",
    githubUrl: "https://github.com/ruangdev0-ux/skycast",
  },

  // ---------------------------------------------------------------
  // Projeto 06 · Trilha Devs — Login
  // ---------------------------------------------------------------
  {
    name: "Trilha Devs — Login",
    category: "Projeto acadêmico · do Figma ao código",
    status: "Publicado",
    description:
      "Tela de login que desenhei no Figma em atividades de UI/UX da graduação e depois reconstruí em " +
      "HTML, CSS e JavaScript, mantendo a identidade visual. O login é simulado apenas no front-end, " +
      "sem autenticação real.",
    highlights: [
      "Protótipo original no Figma, reconstruído em código",
      "Validação dos campos em tempo real",
      "Acesso de demonstração e aviso de credenciais incorretas",
      "Mostrar/ocultar senha e mensagens acessíveis",
      "Navegação por teclado e foco visível",
      "Layout responsivo de 320 px a 1920 px",
    ],
    technologies: ["Figma", "HTML", "CSS", "JavaScript", "Acessibilidade"],
    image: "assets/images/trilha-devs-login.webp",
    imageAlt: "Dois smartphones com o app Trilha Devs: a tela de login com o acesso de demonstração e a tela de login de demonstração realizado com sucesso",
    demoUrl: "https://ruangdev0-ux.github.io/trilha-devs-login/",
    githubUrl: "https://github.com/ruangdev0-ux/trilha-devs-login",
  },

  // ---------------------------------------------------------------
  // Projeto 07 · Demo PDV — Lanchonete Demo
  // ---------------------------------------------------------------
  {
    name: "Demo PDV — Lanchonete Demo",
    category: "Demonstração fictícia de frente de caixa",
    status: "Publicado",
    description:
      "Demonstração fictícia de PDV para lanchonete com vendas, adicionais, pagamentos simulados, " +
      "comprovante, caixa do dia, delivery e relatórios, usando HTML, CSS, JavaScript e localStorage.",
    highlights: [
      "Vendas com adicionais e cálculo de troco",
      "Pagamentos, gaveta e pedidos de delivery simulados",
      "Comprovante em 80 mm com impressão pelo navegador",
      "Caixa do dia, fechamento e relatórios por período",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "localStorage"],
    image: "assets/images/demo-pdv.webp",
    imageAlt: "Tela de venda da Demo PDV com categorias, produtos fictícios e o pedido atual",
    demoUrl: "https://ruangdev0-ux.github.io/demo-pdv-lanchonete/",
    githubUrl: "https://github.com/ruangdev0-ux/demo-pdv-lanchonete",
  },
];

/* ------------------------------ MODELO ------------------------------
   Copie da chave { até a vírgula depois de }, cole na lista acima e
   preencha.

  {
    name: "Nome do projeto",
    category: "Tipo de aplicação",
    status: "Em desenvolvimento",
    description: "Resumo do projeto em poucas frases.",
    highlights: ["Funcionalidade 1", "Funcionalidade 2"],
    technologies: ["JavaScript", "HTML5", "CSS3"],
    image: "",
    imageAlt: "",
    demoUrl: "",
    githubUrl: "",
  },
--------------------------------------------------------------------- */
