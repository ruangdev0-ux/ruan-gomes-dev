# Ruan Gomes.dev

Portfólio de **Ruan Gomes**, estudante de Análise e Desenvolvimento de Sistemas (Unifran) em busca de estágio em Desenvolvimento de Software.

🔗 **Site publicado:** https://ruangdev0-ux.github.io/ruan-gomes-dev/

> "Ruan Gomes.dev" é o nome e a identidade visual do projeto, não um domínio próprio. O site é publicado pelo GitHub Pages no endereço acima.

## Objetivo

Reunir em um único link quem eu sou, o que busco, as tecnologias que uso, os projetos que já publiquei, minha experiência, formação e certificados, e as formas de falar comigo. É o link que uso no LinkedIn e no GitHub.

## Conteúdo

| Seção | O que mostra |
| --- | --- |
| Início | Nome, objetivo (estágio em Desenvolvimento de Software), linha de tecnologias, botões para projetos, GitHub e LinkedIn e uma vitrine com capturas reais |
| Sobre | Formação, objetivo, interesse em desenvolvimento e back-end, aprendizado por projetos e um resumo rápido |
| Tecnologias | Separadas entre "Uso em projetos" e "Em estudo", indicando onde cada uma aparece (sem porcentagens) |
| Projetos | SalesFlow (principal), Ordena e Prateleira, SkyCast, Trilha Devs — Login e Demo PDV, com imagem, descrição, tecnologias e links |
| Experiência | Vortyx, como Fundador & Desenvolvedor |
| Formação | Análise e Desenvolvimento de Sistemas, Unifran (fev/2026 – dez/2027) e certificados com link para a credencial |
| Contato | LinkedIn, GitHub, e-mail, WhatsApp e Instagram, mais um botão para copiar o e-mail |

Também inclui:

- menu responsivo, com a seção atual destacada;
- rolagem suave e animações discretas, desativadas quando o sistema pede movimento reduzido;
- foco visível e navegação por teclado;
- SEO básico, Open Graph com imagem de compartilhamento e favicon "RG".

## Tecnologias

- **HTML5**: estrutura semântica, SEO e metadados de compartilhamento
- **CSS3**: layout mobile first com Grid, Flexbox, variáveis e media queries
- **JavaScript**: puro, sem bibliotecas
- **Google Fonts**: Outfit, Inter e JetBrains Mono
- **GitHub Pages**: hospedagem

Não há frameworks, etapa de build nem dependências para instalar.

## Estrutura

```
ruan-gomes-dev/
├── index.html              # Página única com todas as seções
├── css/
│   └── style.css           # Estilos, organizados por seção
├── js/
│   ├── projects.js         # LISTA DE PROJETOS: edite aqui para adicionar novos
│   └── script.js           # Menu, animações, seção ativa, cards, contador e cópia do e-mail
├── assets/
│   ├── images/             # Capturas dos projetos e imagem de compartilhamento
│   └── icons/              # Favicons "RG"
├── .nojekyll               # Faz o GitHub Pages servir os arquivos como estão
└── README.md
```

## Publicação

O site é servido pelo **GitHub Pages** a partir da branch `main`, na pasta raiz (`/`). Qualquer commit na `main` atualiza o site publicado em cerca de um minuto.

## Como adicionar um novo projeto

Todos os projetos ficam em [`js/projects.js`](js/projects.js).

1. Abra `js/projects.js` e copie o bloco **MODELO** que está no fim do arquivo.
2. Cole dentro da lista `PROJECTS`, depois do último projeto, e preencha os campos:

   | Campo | Descrição |
   | --- | --- |
   | `name` | Nome do projeto |
   | `category` | Tipo de aplicação |
   | `status` | Por exemplo, `"Publicado"` ou `"Em desenvolvimento"` |
   | `description` | Resumo em poucas frases |
   | `highlights` | Lista de funcionalidades (opcional) |
   | `technologies` | Lista de tecnologias |
   | `image` | Caminho da captura em `assets/images/` (opcional) |
   | `imageAlt` | Descrição da imagem |
   | `demoUrl` | Endereço do projeto publicado, que gera o botão **Ver demonstração** |
   | `githubUrl` | Endereço do repositório, que gera o botão **Ver código** |
   | `links` | Botões extras, como `[{ label: "Ver Ordena", url: "https://..." }]` (opcional) |
   | `featured` | `true` destaca o card como projeto principal (opcional) |
   | `count` | Quantos projetos o card reúne, usado no contador do início (opcional) |

3. (Opcional) Envie a captura de tela para `assets/images/`.
4. Faça o commit. O card e a numeração (01, 02, 03…) são criados automaticamente.

**Regra:** `demoUrl` e `githubUrl` só devem receber endereços reais, já testados. Se ainda não existirem, deixe `""`: o botão correspondente não aparece.

## Currículo

Ainda não há currículo publicado. Quando houver um PDF atualizado e aprovado, salve em `assets/docs/curriculo-ruan-gomes.pdf` e descomente o botão "Currículo (PDF)" marcado no início do `index.html`.

## Projetos apresentados

- **SalesFlow**, sistema web de gestão comercial: [demonstração](https://ruangdev0-ux.github.io/salesflow/) · [código](https://github.com/ruangdev0-ux/salesflow)
- **Ordena** e **Prateleira**, protótipos SaaS da Vortyx com dados fictícios: [Ordena](https://somosvortyx.com.br/demonstracoes/saas/central-atendimento/) · [Prateleira](https://somosvortyx.com.br/demonstracoes/saas/pedidos-estoque/)
- **SkyCast**, aplicação web de previsão do tempo: [demonstração](https://ruangdev0-ux.github.io/skycast/) · [código](https://github.com/ruangdev0-ux/skycast)
- **Trilha Devs — Login**, projeto acadêmico do Figma ao código: [demonstração](https://ruangdev0-ux.github.io/trilha-devs-login/) · [código](https://github.com/ruangdev0-ux/trilha-devs-login)
- **Demo PDV — Lanchonete Demo**, demonstração fictícia de frente de caixa: [demonstração](https://ruangdev0-ux.github.io/demo-pdv-lanchonete/) · [código](https://github.com/ruangdev0-ux/demo-pdv-lanchonete)

As imagens dos projetos são capturas de tela das próprias aplicações.

## Autor

**Ruan Gomes**, estudante de Análise e Desenvolvimento de Sistemas (Unifran).

- GitHub: [github.com/ruangdev0-ux](https://github.com/ruangdev0-ux)
- LinkedIn: [linkedin.com/in/ruan-gomes-805029393](https://www.linkedin.com/in/ruan-gomes-805029393)
