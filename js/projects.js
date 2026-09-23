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
   demoUrl       Endereço do projeto publicado  → botão "Ver projeto"
   githubUrl     Endereço do repositório        → botão "Código no GitHub"

   REGRA: use em demoUrl e githubUrl somente endereços reais, que você
   já abriu e funcionam. Se ainda não existirem, deixe "" (vazio): o
   botão correspondente simplesmente não aparece.
   ================================================================== */

const PROJECTS = [
  // ---------------------------------------------------------------
  // Projeto 01 · SalesFlow
  // ---------------------------------------------------------------
  {
    name: "SalesFlow",
    category: "Sistema Web de Gestão Comercial",
    status: "Publicado",
    description:
      "Sistema de gestão comercial para pequenos negócios e vendedores autônomos, com cadastro " +
      "de clientes e produtos, registro de vendas com controle de estoque e um dashboard com os " +
      "principais números. Feito em JavaScript puro, sem frameworks, com os dados salvos no navegador.",
    highlights: [
      "Dashboard com faturamento, valores a receber e alerta de estoque baixo",
      "Cadastro, edição, exclusão e busca de clientes e produtos",
      "Vendas com vários itens e baixa automática do estoque",
      "Status de venda: pendente, paga e cancelada",
      "Validação de formulários e tratamento de erros",
      "Testes unitários da lógica de negócio",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage", "node:test", "GitHub Actions"],
    image: "assets/images/salesflow.webp",
    imageAlt: "Dashboard do SalesFlow com faturamento, valores a receber, vendas, clientes e produtos",
    demoUrl: "https://ruangdev0-ux.github.io/salesflow/",
    githubUrl: "https://github.com/ruangdev0-ux/salesflow",
  },

  // ---------------------------------------------------------------
  // Projeto 02 · SkyCast
  // ---------------------------------------------------------------
  {
    name: "SkyCast",
    category: "Aplicação Web de Previsão do Tempo",
    status: "Publicado",
    description:
      "Painel que mostra as condições atuais e a previsão de 7 dias para qualquer cidade do mundo, " +
      "consumindo a API gratuita Open-Meteo. O deploy é automático, com GitHub Actions e GitHub Pages.",
    highlights: [
      "Busca por nome de cidade",
      "Opção de usar a localização do navegador",
      "Temperatura, sensação térmica, umidade, vento e chance de chuva",
      "Previsão de 7 dias com ícone e descrição",
      "Mensagens de erro claras",
      "Layout adaptado para telas menores",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "API Open-Meteo", "Vite", "GitHub Actions"],
    image: "assets/images/skycast.webp",
    imageAlt: "Painel do SkyCast com as condições atuais e a previsão de 7 dias para São Paulo",
    demoUrl: "https://ruangdev0-ux.github.io/skycast/",
    githubUrl: "https://github.com/ruangdev0-ux/skycast",
  },

  // ---------------------------------------------------------------
  // Projeto 03 · Trilha Devs — Login
  // ---------------------------------------------------------------
  {
    name: "Trilha Devs — Login",
    category: "UI/UX · Do protótipo no Figma ao Front-end",
    status: "Publicado",
    description:
      "Tela de login que desenhei no Figma no primeiro semestre de ADS, em atividades de UI/UX, " +
      "design de interfaces e prototipagem, e depois reconstruí em código mantendo a identidade " +
      "visual original. Tem um acesso de demonstração para testar o fluxo, com login simulado " +
      "apenas no Front-end, sem autenticação real.",
    highlights: [
      "Protótipo mobile original feito no Figma",
      "Interface reconstruída em código e exibida dentro de um smartphone no desktop",
      "Acesso de demonstração com botão para preencher os dados",
      "Login simulado com tela de sucesso e aviso de credenciais incorretas",
      "Validação dos campos, mostrar/ocultar senha e notificações discretas",
      "Layout responsivo de 320 px a 1920 px, com navegação por teclado",
    ],
    technologies: ["UI/UX", "Figma", "Prototipagem", "HTML5", "CSS3", "JavaScript"],
    image: "assets/images/trilha-devs-login.webp",
    imageAlt: "Dois smartphones com o app Trilha Devs: a tela de login com o acesso de demonstração e a tela de login de demonstração realizado com sucesso",
    demoUrl: "https://ruangdev0-ux.github.io/trilha-devs-login/",
    githubUrl: "https://github.com/ruangdev0-ux/trilha-devs-login",
  },

  // ---------------------------------------------------------------
  // Projeto 04 · cole aqui o próximo projeto (use o MODELO abaixo).
  // Projeto 05, 06, 07...: repita o processo, sempre antes do "];".
  // Não há nada a mudar no HTML, no CSS ou no script.js.
  // ---------------------------------------------------------------
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
