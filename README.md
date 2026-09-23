# Ruan Gomes.dev

Site profissional e portfólio de **Ruan Gomes**, estudante de Análise e Desenvolvimento de Sistemas: desenvolvimento de software, tecnologia e projetos.

🔗 **Site publicado:** https://ruangdev0-ux.github.io/ruan-gomes-dev/

> "Ruan Gomes.dev" é o nome e a identidade visual do projeto, não um domínio próprio. O site é publicado pelo GitHub Pages no endereço acima.

## Objetivo

Reunir em um único link quem eu sou, o que estudo, as tecnologias que uso, os projetos que já publiquei e as formas de falar comigo. Esse link é o que uso na bio do Instagram, no LinkedIn, no GitHub e no currículo.

## Conteúdo

| Seção | O que mostra |
| --- | --- |
| Início | Apresentação, acesso aos projetos e ao GitHub e uma vitrine com capturas reais dos projetos |
| Sobre | A trajetória da área comercial até a tecnologia e os diferenciais que ela me trouxe |
| Tecnologias | JavaScript, HTML5, CSS3, APIs, LocalStorage, Git, GitHub, Python e C#, indicando onde cada uma aparece (sem porcentagens) |
| Projetos | SalesFlow, SkyCast e Trilha Devs — Login, com imagem, descrição, tecnologias, status e links |
| Formação | Análise e Desenvolvimento de Sistemas, Unifran, com conclusão prevista para dezembro de 2027 |
| Contato | E-mail, GitHub, LinkedIn e Instagram, mais um botão para copiar o e-mail |

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
│   └── script.js           # Menu, animações, seção ativa, cards e cópia do e-mail
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
   | `demoUrl` | Endereço do projeto publicado, que gera o botão **Ver projeto** |
   | `githubUrl` | Endereço do repositório, que gera o botão **Código no GitHub** |

3. (Opcional) Envie a captura de tela para `assets/images/`.
4. Faça o commit. O card e a numeração (01, 02, 03…) são criados automaticamente.

**Regra:** `demoUrl` e `githubUrl` só devem receber endereços reais, já testados. Se ainda não existirem, deixe `""`: o botão correspondente não aparece.

## Projetos apresentados

- **SalesFlow**, sistema web de gestão comercial: [site](https://ruangdev0-ux.github.io/salesflow/) · [código](https://github.com/ruangdev0-ux/salesflow)
- **SkyCast**, aplicação web de previsão do tempo: [site](https://ruangdev0-ux.github.io/skycast/) · [código](https://github.com/ruangdev0-ux/skycast)

As imagens desses projetos são capturas de tela que já estão nos próprios repositórios.

## Autor

**Ruan Gomes**, estudante de Análise e Desenvolvimento de Sistemas (Unifran).

- GitHub: [github.com/ruangdev0-ux](https://github.com/ruangdev0-ux)
- LinkedIn: [linkedin.com/in/ruan-gomes-805029393](https://www.linkedin.com/in/ruan-gomes-805029393)
