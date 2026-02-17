# 🚀 Monetrix - Landing Page Institucional

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Bootstrap 5.3.8](https://img.shields.io/badge/Bootstrap-5.3.8-purple?logo=bootstrap)
![JavaScript ES6](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)

O **Monetrix** é um exemplo de excelência em Landing Page institucional. O projeto equilibra o uso de frameworks consolidados com soluções customizadas leves, resultando em um site rápido, acessível e preparado para escalar tanto em conteúdo quanto em público.

---

## 🛠️ Tecnologias e Ferramentas

* **HTML5 & CSS3**: Estrutura semântica e estilização moderna.
* **JavaScript (Vanilla)**: Lógica de tradução, manipulação de DOM e interatividade.
* **Bootstrap 5.3.8**: Framework para grid responsivo e componentes de UI.
* **Google Fonts (Poppins)**: Tipografia moderna com excelente legibilidade.
* **FontAwesome**: Iconografia para dinamismo visual (benefícios e rodapé).

---

## 🌟 Diferenciais Técnicos Detalhados

### 1. Internacionalização (i18n) Nativa
Implementação eficiente via **JavaScript puro**, sem dependências externas:
* **Objeto de Traduções**: O `Script.js` mapeia chaves (ex: `nav_home`, `hero_title`) para múltiplos idiomas.
* **Atualização Dinâmica**: A função `updateLanguage()` altera o texto instantaneamente sem recarregar a página.
* **Performance**: Utiliza `querySelectorAll('[data-i18n]')` para percorrer elementos de forma otimizada.
* **Persistência**: Mantém o controle do idioma atual (`currentLang`) e atualiza rótulos de botões em tempo real.

### 2. Arquitetura e Design Responsivo
* **Grid System**: Uso de `col-md-6`, `col-md-4` para adaptação total em mobile, tablets e desktops.
* **Mobile-First**: Navbar colapsável com lógica de fallback no JavaScript para garantir o funcionamento do menu "hambúrguer".
* **UI/UX**: Hierarquia visual clara com classes `display-4` e `fw-bold`, além de feedback visual em botões (`btn-primary`, `shadow`).

### 3. SEO, Acessibilidade e Qualidade de Código
* **Semântica**: Uso rigoroso de `<header>`, `<nav>`, `<section>` e `<footer>`.
* **Otimização**: Presença de meta tags essenciais (`viewport`, `author`, `description`) para indexação no Google.
* **Acessibilidade**: Atributos `aria-label` em botões e `alt` em imagens.
* **Segurança no Código**: Execução via `DOMContentLoaded` para evitar erros de elementos nulos.

---

## 📈 Lógica de Negócios e Conversão
O layout foi projetado estrategicamente para maximizar resultados:
* **Call to Action (CTA)**: Botões "Comece agora" e "Assine já" em locais estratégicos.
* **Prova Social**: Seção de estatísticas c
* **Ancoragem de Preço**: Tabela com três níveis (Essencial, Premium, Gold), destacando a opção do meio como "Mais Popular".

---

## 📂 Estrutura de Pastas

```text
Monetrix/
├── Bootstrap-essencial/    # Dependências locais do Bootstrap
│   ├── Css/
│   └── JavaScript/
├── img/                    # Ativos visuais (Imagens e Ícones)
├── JavaScript/
│   └── Script.js           # Core: i18n, Navbar toggle e Lógica DOM
├── Style/
│   └── style.css           # Estilização customizada e Overrides
└── index.html              # Estrutura principal e SEO
