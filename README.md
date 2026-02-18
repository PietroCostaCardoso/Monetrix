# 🚀 Monetrix - Landing Page Institucional
![Autor](https://img.shields.io/badge/Autor-Pietro%20Costa%20Cardoso-blue?style=flat-square&logo=github)
![Licença](https://img.shields.io/badge/Licença-MIT-yellow.svg?style=flat-square)
![Status](https://img.shields.io/badge/Status-Original%20Repo-green?style=flat-square)

> *Aviso:* Este é o repositório original do projeto Monetrix. Se você encontrar este código em outro perfil sem os devidos créditos, ele foi plagiado.......
---

<p align="center">
  <a href="#-sobre-o-projeto">Português</a> • 
  <a href="#-about-the-project">English</a>
</p>

---

## 🇧🇷 Sobre o Projeto

O **Monetrix** é uma landing page de alta performance que equilibra o uso de frameworks consolidados com soluções customizadas leves. O resultado é um site rápido, acessível e preparado para escalar tanto em conteúdo quanto em público devido ao suporte nativo a múltiplos idiomas.

### 🛠️ Tecnologias Utilizadas
* **HTML5 & CSS3**: Estrutura semântica e estilização moderna.
* **JavaScript (Vanilla)**: Lógica de tradução (i18n), manipulação de DOM e controle de estado.
* **Bootstrap 5.3.8**: Framework robusto para grid responsivo e componentes de UI.
* **Google Fonts (Poppins)**: Tipografia moderna focada em legibilidade.
* **FontAwesome**: Iconografia vetorial para dinamismo visual.

### 🌟 Diferenciais Técnicos Detalhados

1. **Internacionalização (i18n) Nativa**
   * Implementação eficiente via JavaScript puro usando um objeto `translations`.
   * **Troca Dinâmica**: Função `updateLanguage()` que altera textos instantaneamente sem recarregar a página.
   * **Persistência**: Controle do estado `currentLang` que atualiza inclusive rótulos de botões.

2. **Design Responsivo e Framework Moderno**
   * **Grid System**: Uso estratégico de `col-md-6`, `col-md-4`, garantindo adaptação total (Mobile-First).
   * **Navbar Inteligente**: Menu colapsável com lógica customizada para garantir o funcionamento do "hambúrguer" mesmo em falhas de dependências.

3. **Estrutura Semântica e SEO**
   * Uso correto de tags `<header>`, `<nav>`, `<section>` e `<footer>`.
   * **Meta Tags**: Otimização via `viewport`, `author` e `description` para indexação no Google.
   * **Acessibilidade**: Atributos `aria-label` e textos alternativos (`alt`) em imagens.

4. **Qualidade do Código JavaScript**
   * **Event Delegation**: Uso de `DOMContentLoaded` para garantir execução segura.
   * **Código Limpo**: Mapeamento via `querySelectorAll('[data-i18n]')`, facilitando a manutenção futura.

### 📈 Lógica de Negócios e Conversão
* **Call to Action (CTA)**: Botões estratégicos como "Comece agora" e "Assine já".
* **Prova Social**: Seção de estatísticas.
* **Ancoragem de Preço**: Tabela com três níveis (Essencial, Premium, Gold), destacando a opção "Mais Popular".

---

## 🛠️ Status do Desenvolvimento: Back-end
> 🚧 **Em Construção:** Atualmente, o Monetrix é uma aplicação Front-end robusta. O desenvolvimento do Back-end está em progresso para incluir funcionalidades como autenticação de usuários, processamento de pagamentos reais e um painel administrativo.

---

## 🇺🇸 About the Project

**Monetrix** is a high-performance landing page that balances established frameworks with lightweight custom solutions. The result is a fast, accessible website ready to scale in both content and audience due to its native multi-language support.

### 🛠️ Technologies Used
* **HTML5 & CSS3**: Semantic structure and modern styling.
* **JavaScript (Vanilla)**: Translation logic (i18n), DOM manipulation, and state control.
* **Bootstrap 5.3.8**: Robust framework for responsive grid and UI components.
* **Google Fonts (Poppins)**: Modern typography focused on readability.
* **FontAwesome**: Vector iconography for visual dynamism.

### 🌟 Technical Highlights

1. **Native Internationalization (i18n)**
   * Efficient implementation via pure JavaScript using a `translations` object.
   * **Dynamic Switch**: `updateLanguage()` function that changes text instantly without page reloads.
   * **State Persistence**: Controls `currentLang` to update even button labels in real-time.

2. **Responsive Design & Modern Framework**
   * **Grid System**: Strategic use of `col-md-6`, `col-md-4` for total adaptation (Mobile-First).
   * **Smart Navbar**: Collapsible menu with custom logic to ensure "hamburger" functionality even if dependencies fail.

3. **Semantic Structure & SEO**
   * Proper use of `<header>`, `<nav>`, `<section>`, and `<footer>` tags.
   * **Meta Tags**: Optimized via `viewport`, `author`, and `description` for Google indexing.
   * **Accessibility**: `aria-label` attributes and alternative text (`alt`) for images.

4. **JavaScript Code Quality**
   * **Event Delegation**: Uses `DOMContentLoaded` for safe execution.
   * **Clean Code**: Mapping via `querySelectorAll('[data-i18n]')`, making future maintenance easy.
  
  ---

## 🛠️ Development Status: Back-end
> 🚧 **Under Construction:** Currently, Monetrix is a robust Front-end application. Back-end development is in progress to include features such as user authentication, real payment processing, and an administrative dashboard.

---

## 📂 Estrutura de Pastas / Folder Structure

```text
Monetrix/
├── Bootstrap-essencial/    # Framework local dependencies
│   ├── Css/
│   └── JavaScript/
├── img/                    # Visual assets and icons
├── JavaScript/
│   └── Script.js           # Core: i18n, Navbar toggle, and DOM logic
├── Style/
│   └── style.css           # Custom design and visual overrides
└── index.html              # Main file with semantic structure
```
## 👤 Autor

Desenvolvido com dedicação por **Pietro Costa Cardoso**.  
Se este projeto te ajudou, considere dar uma ⭐ no repositório!

Link original: https://pietrocostacardoso.github.io/Monetrix/

Pietro Costa Cardoso. Todos os direitos reservados sob a Licença MIT.


