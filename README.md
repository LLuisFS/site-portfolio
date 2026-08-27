# Relatório de Arquitetura de Software Front-end

Este documento apresenta a análise técnica detalhada da estrutura atual do projeto **site-portifolio**, desenvolvido com **Next.js (App Router)**, **TypeScript** e **CSS Modules**.

---

## 1. Visão Geral do Projeto

O projeto é um **Portfólio Pessoal Interativo** projetado para apresentar trabalhos nas áreas de Programação, Design e Literatura. A aplicação adota o padrão moderno do Next.js App Router combinado com CSS Modules e TypeScript para fornecer uma experiência tipada, modular e performática.

### Main Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) `16.3.3` (App Router)
- **UI & Runtime**: [React](https://react.dev/) `19.2.8` e `react-dom` `19.2.8`
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) `5.x`
- **Estilização**: CSS Modules (`*.module.css`) + CSS Global (`globals.css`)
- **Otimização de Fontes**: `next/font/google` (Geist & Geist Mono)

---

## 2. Árvore de Arquivos Comentada (`src/`)

```
src/
├── app/                              # Diretório do Next.js App Router (Rotas e Layouts)
│   ├── about/                        # Rota "/about" (Página Sobre)
│   │   ├── page.module.css           # Estilos exclusivos da página Sobre
│   │   └── page.tsx                  # Server Component da página Sobre mim
│   ├── admin/                        # Rota "/admin" (Página de Administração)
│   │   ├── page.module.css           # Estilos da página Admin
│   │   └── page.tsx                  # Server Component da página Admin
│   ├── favicon.ico                   # Ícone da aplicação
│   ├── globals.css                   # Estilos globais (Reset, background do body, variáveis)
│   ├── layout.tsx                    # Root Layout da aplicação (Carregamento de fontes e metadata)
│   ├── page.module.css               # Estilos da página principal (Grid de cards e badges)
│   └── page.tsx                      # Client Component da Home ("/") com listagem e modal
├── components/                       # Componentes reutilizáveis de interface
│   ├── layout/                       # Componentes de estrutura/layout global
│   │   ├── header.module.css         # Estilos do cabeçalho principal
│   │   ├── header.tsx                # Cabeçalho da aplicação com título e navegação
│   │   ├── navbar.module.css         # Estilos da barra de navegação
│   │   └── navbar.tsx                # Barra de navegação que renderiza os botões das rotas
│   ├── ProjectModal/                 # Módulo de visualização detalhada do projeto
│   │   ├── CodePreview.tsx           # Subcomponente para renderizar snippets de código formatados
│   │   ├── Lightbox.tsx              # Subcomponente usando React Portal para zoom de imagem em tela cheia
│   │   ├── ProjectGallery.tsx        # Subcomponente para renderização do grid de miniaturas da galeria
│   │   ├── ProjectModal.module.css   # Estilos centralizados do modal, overlays e lightbox
│   │   └── ProjectModal.tsx          # Componente principal do Modal com controle de estado do Lightbox
│   ├── NavBarButton.module.css       # Estilos do botão de navegação
│   └── NavBarButton.tsx              # Componente genérico de botão/link navegável (`next/link`)
├── data/                             # Camada de Mock e dados estáticos
│   └── projectMock.ts                # Dados de teste estáticos (`PROJETOS_MOCK`)
└── types/                            # Definições de tipos e interfaces TypeScript
    └── project.ts                    # Interfaces do modelo de Projeto e categorias
```

---

## 3. Mapeamento de Componentes e Telas

### Páginas e Rotas (`src/app/`)

1. **Home / Catálogo (`/`)** — [`src/app/page.tsx`](file:///c:/Users/lfsrl/Documents/site-portifolio/src/app/page.tsx)
   - **Tipo**: Client Component (`'use client'`).
   - **Responsabilidade**: Renderiza o [Header](file:///c:/Users/lfsrl/Documents/site-portifolio/src/components/layout/header.tsx), mapeia os projetos vindos do [PROJETOS_MOCK](file:///c:/Users/lfsrl/Documents/site-portifolio/src/data/projectMock.ts) em formato de *cards* com categoria, título, descrição e data, e gerencia o estado do modal ativo via `selectedProject`.

2. **Sobre Mim (`/about`)** — [`src/app/about/page.tsx`](file:///c:/Users/lfsrl/Documents/site-portifolio/src/app/about/page.tsx)
   - **Tipo**: Server Component.
   - **Responsabilidade**: Exibe informações sobre o profissional/autor.

3. **Administração (`/admin`)** — [`src/app/admin/page.tsx`](file:///c:/Users/lfsrl/Documents/site-portifolio/src/app/admin/page.tsx)
   - **Tipo**: Server Component.
   - **Responsabilidade**: Rota reservada para o painel administrativo/gestão de projetos.

---

### Módulo `ProjectModal` (`src/components/ProjectModal/`)

A estrutura do modal foi projetada seguindo o princípio da **responsabilidade única**, dividindo o modal em subcomponentes coesos:

- **[ProjectModal.tsx](file:///c:/Users/lfsrl/Documents/site-portifolio/src/components/ProjectModal/ProjectModal.tsx)**: Componente orquestrador. Recebe a *prop* `projeto: Projeto | null`. Se `null`, interrompe a renderização (`return null`). Controla a abertura do `Lightbox` e lida com o evento de fechamento.
- **[CodePreview.tsx](file:///c:/Users/lfsrl/Documents/site-portifolio/src/components/ProjectModal/CodePreview.tsx)**: Renderiza um bloco de código estilizado com `<pre>` e `<code>` quando o projeto possui `codigoPreview`.
- **[ProjectGallery.tsx](file:///c:/Users/lfsrl/Documents/site-portifolio/src/components/ProjectModal/ProjectGallery.tsx)**: Exibe a lista de imagens em miniaturas clicáveis (`onSelectImage`).
- **[Lightbox.tsx](file:///c:/Users/lfsrl/Documents/site-portifolio/src/components/ProjectModal/Lightbox.tsx)**: Modal de alta prioridade (`z-index: 9999`) renderizado diretamente no `document.body` via `React.createPortal`, permitindo visualização de imagem em tela cheia com desfoque de fundo.

---

## 4. Modelos de Dados e Gerenciamento de Estado

### Definição dos Tipos TypeScript ([`src/types/project.ts`](file:///c:/Users/lfsrl/Documents/site-portifolio/src/types/project.ts))

```typescript
export type CategoriaProjeto = 'Programação' | 'Design' | 'Literatura' | 'Outros';

export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  categoria: CategoriaProjeto;
  data?: string;
  imagens: string[];       // URLs das imagens/prints
  svgs?: string[];         // SVGs para artes/vetores
  codigoPreview?: string;  // Trecho de código para projetos de TI
  linkExterno?: string;    // GitHub, Behance, Wattpad, Amazon, LinkedIn
}
```

### Arquitetura de Estado Local e Modais

1. **Estado Principal na Home** ([`src/app/page.tsx`](file:///c:/Users/lfsrl/Documents/site-portifolio/src/app/page.tsx)):
   ```tsx
   const [selectedProject, setSelectedProject] = useState<Projeto | null>(null);
   ```
   - Ao clicar em um `<article className={styles.card}>`, o projeto é atribuído ao estado.
   - O `ProjectModal` é renderizado declarativamente condicionado à existência de `selectedProject`.

2. **Estado Interno do Modal & Resets** ([`src/components/ProjectModal/ProjectModal.tsx`](file:///c:/Users/lfsrl/Documents/site-portifolio/src/components/ProjectModal/ProjectModal.tsx)):
   ```tsx
   const [selectedImage, setSelectedImage] = useState<string | null>(null);

   useEffect(() => {
     setSelectedImage(null);
   }, [projeto]);
   ```
   - O `useEffect` garante que o estado da imagem no Lightbox seja zerado sempre que um novo projeto for selecionado.

3. **Portal do Lightbox** ([`src/components/ProjectModal/Lightbox.tsx`](file:///c:/Users/lfsrl/Documents/site-portifolio/src/components/ProjectModal/Lightbox.tsx)):
   - Utiliza `createPortal(..., document.body)` para desvincular o DOM do Lightbox do fluxo hierárquico da página e evitar problemas de empilhamento de z-index ou estouro de *overflow container*.
   - Utiliza `e.stopPropagation()` no elemento da imagem para evitar que o clique na imagem feche o Lightbox ao clicar na área do conteúdo.

---

## 5. Padrões de Estilização e Design System

### 1. Escopo com CSS Modules
Todos os componentes utilizam a estratégia de **CSS Modules** (`[nome].module.css`), isolando completamente os seletores CSS por componente e evitando colisão de escopo global.

### 2. Estilos Globais ([`src/app/globals.css`](file:///c:/Users/lfsrl/Documents/site-portifolio/src/app/globals.css))
- Define o reset de box-sizing (`box-sizing: border-box; margin: 0; padding: 0;`).
- Aplica o tema escuro base no `body` (`background-color: #1d191f`, `color: #f1f1f1`) e define a largura máxima centralizada do layout (`max-width: 1100px; margin: 0 auto;`).

### 3. Paleta de Cores e Estética Dark Modern
- **Backgrounds**: `#1d191f` (Geral), `#18181b` (Cards), `#141416` (Modal container), `#09090b` (Bloco de código).
- **Acentos e Destaques**: `#8A00E0` (Borda do Header e Título), `#6366f1` / `#8b5cf6` (Estados de Hover e Botão de Ação), `#a7f3d0` (Texto de sintaxe do código).
- **Efeitos de Vidro/Profundidade**: `backdrop-filter: blur(4px)` e `backdrop-filter: blur(6px)` para overlays escuros.

---

## Resumo Arquitetural

| Aspecto | Implementação Atual |
| :--- | :--- |
| **Arquitetura de Rotas** | App Router (`app/page.tsx`, `app/about/page.tsx`, `app/admin/page.tsx`) |
| **Componentização** | Modular e desacoplada em `src/components/` |
| **Gestão de Estado** | Estado local baseado em `useState` e sincronização via `useEffect` |
| **Renderização Modal/Overlay** | React Portals (`createPortal`) em `document.body` com `z-index: 9999` |
| **Tipagem** | Interfaces fortemente tipadas em `src/types/project.ts` |
| **Estilização** | CSS Modules puras com responsividade baseada em CSS Grid |