const translations = new Map([
  ["Sobre mim", "About me"],
  ["Experiência", "Experience"],
  ["Projetos", "Projects"],
  ["Conhecimentos", "Skills"],
  ["Fale comigo", "Contact me"],
  ["Olá! 👋", "Hello! 👋"],
  ["Eu sou Guilherme,", "I'm Guilherme,"],
  ["Estudante de Sistemas de Informação, com experiência em suporte ao Windows e manutenção de equipamentos.", "Information Systems student with experience in Windows support and equipment maintenance."],
  ["Sou Guilherme Cardoso, estudante de Sistemas de Informação na Universidade Feevale e formado em Técnico em Informática para Internet pelo Senac São Leopoldo. Atuo como estagiário de TI no SINDIMETAL, com suporte técnico, suporte ao Windows, manutenção de equipamentos e apoio às rotinas de tecnologia da informação. Também desenvolvo o Meu Valor SINDIMETAL RS, um sistema web Full Stack de Inteligência de Negócios (BI), com API REST e arquitetura em camadas.", "I'm Guilherme Cardoso, an Information Systems student at Feevale University with a technical qualification in Web Development from Senac São Leopoldo. I work as an IT intern at SINDIMETAL, providing technical support, Windows support, equipment maintenance and assistance with day-to-day IT operations. I also develop Meu Valor SINDIMETAL RS, a Full Stack Business Intelligence (BI) web system with a REST API and layered architecture."],
  ["Busco uma oportunidade em Suporte Técnico para ajudar usuários, solucionar problemas e contribuir com o funcionamento dos recursos de TI. Minha experiência como Operador de Sistemas e meus projetos de desenvolvimento web complementam essa atuação, trazendo uma base em programação e banco de dados. Valorizo a organização, a comunicação clara e o aprendizado contínuo.", "I'm looking for an opportunity in Technical Support to help users, solve problems and keep IT resources working. My experience as a Systems Operator and my web development projects complement this work with a foundation in programming and databases. I value organization, clear communication and continuous learning."],
  ["Experiência e formação", "Experience and Education"],
  ["2026 - Atual", "2026 - Present"],
  ["Estágio de TI", "IT Intern"],
  ["Atuação em suporte técnico e manutenção de equipamentos, com apoio às demandas do dia a dia de TI.", "Providing technical support and equipment maintenance, helping with day-to-day IT needs."],
  ["Suporte técnico no ambiente Windows.", "Technical support in a Windows environment."],
  ["Manutenção de equipamentos.", "Equipment maintenance."],
  ["Apoio às rotinas de tecnologia da informação.", "Assistance with day-to-day IT operations."],
  ["Desenvolvimento do Meu Valor SINDIMETAL RS, sistema web Full Stack de Inteligência de Negócios (BI), com API REST e arquitetura em camadas.", "Development of Meu Valor SINDIMETAL RS, a Full Stack Business Intelligence (BI) web system with a REST API and layered architecture."],
  ["API REST", "REST API"],
  ["Suporte Técnico", "Technical Support"],
  ["Suporte ao Windows", "Windows Support"],
  ["Manutenção de Equipamentos", "Equipment Maintenance"],
  ["Suporte a Sistemas", "Systems Support"],
  ["Desenvolvimento e Automação", "Development and Automation"],
  ["Infraestrutura", "Infrastructure"],
  ["Automação", "Automation"],
  ["TI", "IT"],
  ["Sistemas de Informação", "Information Systems"],
  ["Cursando graduação em Sistemas de Informação, com foco em desenvolvimento de software, análise de sistemas e banco de dados.", "Pursuing a degree in Information Systems, focused on software development, systems analysis and databases."],
  ["Lógica de Programação", "Programming Logic"],
  ["Engenharia de Software", "Software Engineering"],
  ["Banco de Dados", "Databases"],
  ["Operador de Sistemas", "Systems Operator"],
  ["Atuação com suporte técnico, desenvolvimento e manutenção de sistemas web e otimização de processos.", "Working in technical support, web systems development and maintenance, and process improvement."],
  ["Técnico em Informática para Internet", "Web Development Technician"],
  ["Formação técnica em desenvolvimento web, banco de dados e programação orientada a objetos.", "Technical education in web development, databases and object-oriented programming."],
  ["Suporte a usuários no ambiente Windows, com foco em compreender dificuldades e apoiar a resolução de problemas no uso do sistema.", "Supporting users in a Windows environment, focusing on understanding their difficulties and helping resolve problems when using the system."],
  ["Atuação em suporte técnico no estágio de TI, com apoio às demandas do dia a dia e às rotinas de tecnologia da informação.", "Providing technical support during my IT internship, helping with day-to-day needs and IT operations."],
  ["Experiência com manutenção de equipamentos e apoio ao funcionamento dos recursos de TI no ambiente de trabalho.", "Experience in equipment maintenance and helping keep IT resources working in the workplace."],
  ["Vivência com suporte técnico, desenvolvimento e manutenção de sistemas web na experiência como Operador de Sistemas.", "Experience in technical support and web systems development and maintenance as a Systems Operator."],
  ["Uso de MySQL e PostgreSQL nos projetos, com organização de dados e integração com aplicações web.", "Using MySQL and PostgreSQL in projects to organize data and integrate it with web applications."],
  ["Conhecimentos em JavaScript, Node.js, Java e PHP como diferencial para criar soluções e evoluir na automação de rotinas de TI.", "Knowledge of JavaScript, Node.js, Java and PHP as a foundation for creating solutions and developing my ability to automate IT tasks."],
  ["Fale comigo!", "Contact me!"],
  ["Currículo", "CV"],
  ["©2026 por Guilherme Cardoso.", "©2026 by Guilherme Cardoso."],
  ["Todos os direitos reservados.", "All rights reserved."],
  ["Materiais de suporte", "Support Materials"],
  ["Cenários fictícios de estudo, com roteiros de diagnóstico, registro de chamados e orientação ao usuário.", "Fictional study scenarios with troubleshooting steps, support ticket documentation and user guidance."],
  ["Estudo de caso simulado", "Simulated Case Study"],
  ["Diagnóstico de conectividade", "Connectivity Troubleshooting"],
  ["Roteiro para investigar falta de conexão no Windows, comparar sintomas e validar uma solução.", "A guide to investigating connection problems in Windows, comparing symptoms and verifying a solution."],
  ["Ler material", "Read material"],
  ["Registro de chamado de suporte", "Support Ticket Documentation"],
  ["Exemplo fictício com descrição do problema, impacto, investigação, resolução e retorno ao usuário.", "A fictional example documenting the problem, impact, investigation, resolution and follow-up with the user."],
  ["Guia de estudo", "Study Guide"],
  ["Guia básico de Windows", "Windows Basics Guide"],
  ["Orientações para conferir a conexão, observar o armazenamento e solicitar ajuda com informações úteis.", "Guidance on checking your connection, reviewing storage and providing useful information when requesting help."],
  ["Projetos de desenvolvimento", "Development Projects"],
  ["Projeto profissional · SINDIMETAL", "Professional Project · SINDIMETAL"],
  ["Sistema web Full Stack de Inteligência de Negócios (BI), com API REST e arquitetura em camadas, em desenvolvimento no SINDIMETAL.", "A Full Stack Business Intelligence (BI) web system with a REST API and layered architecture, under development at SINDIMETAL."],
  ["Full Stack - BI - API REST - Arquitetura em camadas", "Full Stack - BI - REST API - Layered architecture"],
  ["NetworkUp - Projeto de conclusão de curso", "NetworkUp - Final Course Project"],
  ["Aplicação web para gerenciamento de tarefas, permitindo criar, organizar e acompanhar atividades de forma simples e eficiente.", "Web application for task management, allowing users to create, organize and track activities in a simple and efficient way."],
  ["Aplicação de networking para conectar profissionais e empresas.", "Networking application designed to connect professionals and companies."],
  ["Loja online de bolos artesanais com catálogo, carrinho, pedidos, área do cliente e painel administrativo.", "Online store for handmade cakes with a catalog, shopping cart, orders, customer area and administrative dashboard."]
]);

const attributeTranslations = new Map([
  ["Carregando página", "Loading page"],
  ["Menu principal", "Main menu"],
  ["Abrir menu", "Open menu"],
  ["Fechar menu", "Close menu"],
  ["Computador com códigos", "Computer displaying code"],
  ["Foto de Guilherme Cardoso", "Photo of Guilherme Cardoso"],
  ["Enviar e-mail", "Send email"],
  ["Fazer ligação", "Make a call"],
  ["Me chama no zap!", "Message me on WhatsApp!"],
  ["Ícone de celular.", "Phone illustration."],
  ["Voltar ao topo", "Back to top"],
  ["Mudar tema", "Change theme"],
  ["Logo do projeto Task Flow.", "Task Flow project logo."],
  ["Logo do projeto NetworkUp.", "NetworkUp project logo."],
  ["Logo do projeto DoraNina.", "DoraNina project logo."],
  ["Repositório no GitHub", "GitHub repository"],
  ["Ver projeto", "View project"]
]);

const metaTranslations = new Map([
  ["Guilherme Cardoso - Suporte Técnico. Estudante de Sistemas de Informação com experiência em suporte ao Windows, manutenção de equipamentos e sistemas web.", "Guilherme Cardoso - Technical Support. Information Systems student with experience in Windows support, equipment maintenance and web systems."],
  ["Guilherme Cardoso - Suporte Técnico", "Guilherme Cardoso - Technical Support"],
  ["Guilherme Cardoso | Suporte Técnico", "Guilherme Cardoso | Technical Support"],
  ["Experiência em suporte técnico, Windows e manutenção de equipamentos, com desenvolvimento web como diferencial para as rotinas de TI.", "Experience in technical support, Windows and equipment maintenance, with web development skills that complement day-to-day IT operations."],
  ["Suporte técnico, Windows e manutenção de equipamentos. Conheça minha experiência, materiais de estudo e projetos.", "Technical support, Windows and equipment maintenance. Explore my experience, study materials and projects."],
  ["suporte técnico, suporte de TI, suporte ao Windows, manutenção de equipamentos, suporte a sistemas, Sistemas de Informação, Guilherme Cardoso, desenvolvimento web", "technical support, IT support, Windows support, equipment maintenance, systems support, Information Systems, Guilherme Cardoso, web development"]
]);

const reverseTranslations = new Map(
  Array.from(translations, ([pt, en]) => [en, pt])
);
const reverseAttributeTranslations = new Map(
  Array.from(attributeTranslations, ([pt, en]) => [en, pt])
);
const reverseMetaTranslations = new Map(
  Array.from(metaTranslations, ([pt, en]) => [en, pt])
);

const LANGUAGE_KEY = "portfolioLanguage";
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "pt";

function normalize(value) {
  return value.replace(/\s+/g, " ").trim();
}

function translateTextNode(node, language) {
  const raw = node.nodeValue;
  const normalized = normalize(raw);
  if (!normalized) return;

  const dictionary = language === "en" ? translations : reverseTranslations;
  const translated = dictionary.get(normalized);
  if (!translated) return;

  const leadingWhitespace = raw.match(/^\s*/)?.[0] ?? "";
  const trailingWhitespace = raw.match(/\s*$/)?.[0] ?? "";
  node.nodeValue = `${leadingWhitespace}${translated}${trailingWhitespace}`;
}

function translateText(root, language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];

  while (walker.nextNode()) {
    const parent = walker.currentNode.parentElement;
    if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) continue;
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => translateTextNode(node, language));
}

function translateAttributes(root, language) {
  const dictionary = language === "en" ? attributeTranslations : reverseAttributeTranslations;
  const elements = root.querySelectorAll("[title], [aria-label], [alt]");

  elements.forEach((element) => {
    ["title", "aria-label", "alt"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const currentValue = normalize(element.getAttribute(attribute));
      const translated = dictionary.get(currentValue);
      if (translated) element.setAttribute(attribute, translated);
    });
  });
}

function translateMetadata(language) {
  const dictionary = language === "en" ? metaTranslations : reverseMetaTranslations;
  const metadata = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[name="twitter:title"], meta[name="twitter:description"], meta[property="og:title"], meta[property="og:description"]');

  const translatedTitle = dictionary.get(normalize(document.title));
  if (translatedTitle) document.title = translatedTitle;

  metadata.forEach((meta) => {
    const currentValue = normalize(meta.getAttribute("content") || "");
    const translated = dictionary.get(currentValue);
    if (translated) meta.setAttribute("content", translated);
  });
}

function updateWhatsAppLink(language) {
  const link = document.querySelector('#contact a[href*="api.whatsapp.com/send"]');
  if (!link) return;

  const message = language === "en"
    ? "Hello, Guilherme! I found your portfolio and would like to discuss a technical support opportunity."
    : "Olá, Guilherme! Vim do seu portfólio e gostaria de conversar sobre uma oportunidade em suporte técnico.";

  link.href = `https://api.whatsapp.com/send?phone=5551991603189&text=${encodeURIComponent(message)}`;
}

function updateSwitcher(language) {
  const switcher = document.getElementById("language-switcher");
  if (!switcher) return;

  switcher.setAttribute("aria-label", language === "en" ? "Change language" : "Alterar idioma");

  switcher.querySelectorAll("button[data-language]").forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyLanguage(language) {
  currentLanguage = language === "en" ? "en" : "pt";
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage === "en" ? "en" : "pt-BR";

  translateText(document.body, currentLanguage);
  translateAttributes(document, currentLanguage);
  translateMetadata(currentLanguage);
  updateWhatsAppLink(currentLanguage);
  updateSwitcher(currentLanguage);
}

function createLanguageSwitcher() {
  if (document.getElementById("language-switcher")) return;

  const switcher = document.createElement("div");
  switcher.id = "language-switcher";
  switcher.setAttribute("role", "group");
  switcher.innerHTML = `
    <button type="button" data-language="pt" title="Português">PT</button>
    <button type="button" data-language="en" title="English">EN</button>
  `;

  switcher.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-language]");
    if (!button) return;
    applyLanguage(button.dataset.language);
  });

  document.body.appendChild(switcher);
}

function injectLanguageStyles() {
  if (document.getElementById("language-switcher-styles")) return;

  const style = document.createElement("style");
  style.id = "language-switcher-styles";
  style.textContent = `
    #language-switcher {
      position: fixed;
      bottom: 7rem;
      left: 2.5rem;
      z-index: 120;
      width: 8rem;
      height: 4rem;
      padding: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.3rem;
      background: var(--secundary-color);
      border: 0.1rem solid var(--primary-color);
      border-radius: 5rem;
      box-shadow: 0 0.4rem 1.5rem rgba(0, 0, 0, 0.18);
      backdrop-filter: blur(1rem);
      -webkit-backdrop-filter: blur(1rem);
    }

    #language-switcher button {
      flex: 1;
      height: 3rem;
      padding: 0;
      border: 0;
      border-radius: 5rem;
      background: transparent;
      color: var(--paragraph);
      font-family: "DM Sans", sans-serif;
      font-size: 1.15rem;
      font-weight: 700;
      line-height: 1;
      cursor: pointer;
      transition: color 250ms, background-color 250ms, transform 250ms;
    }

    #language-switcher button:hover {
      color: var(--primary-color);
    }

    #language-switcher button.active {
      color: #fff;
      background: var(--primary-color);
    }

    #language-switcher button:active {
      transform: scale(0.94);
    }

    #language-switcher button:focus-visible {
      outline: 0.2rem solid var(--primary-color);
      outline-offset: 0.2rem;
    }

    @media (max-width: 480px) {
      #language-switcher {
        left: 1.5rem;
      }
    }
  `;

  document.head.appendChild(style);
}

function observeDynamicContent() {
  const observer = new MutationObserver((mutations) => {
    const hasNewContent = mutations.some((mutation) => mutation.addedNodes.length > 0);
    if (!hasNewContent) return;

    translateText(document.body, currentLanguage);
    translateAttributes(document, currentLanguage);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

document.addEventListener("DOMContentLoaded", () => {
  injectLanguageStyles();
  createLanguageSwitcher();
  applyLanguage(currentLanguage);
  observeDynamicContent();
});
