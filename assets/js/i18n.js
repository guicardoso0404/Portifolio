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
  ["Pular para o conteúdo", "Skip to content"],
  ["Voltar ao portfólio", "Back to portfolio"],
  ["Materiais para estudar a resolução de problemas e a comunicação com quem precisa de ajuda.", "Materials for studying troubleshooting and communicating with people who need help."],
  ["Os casos desta página são fictícios. As ações e os resultados descritos nos exemplos são simulados e não representam atendimentos realizados.", "The cases on this page are fictional. The actions and results described in the examples are simulated and do not represent actual support work."],
  ["NESTA PÁGINA", "ON THIS PAGE"],
  ["Conectividade", "Connectivity"],
  ["Chamado de suporte", "Support Ticket"],
  ["Guia de Windows", "Windows Guide"],
  ["Cenário fictício: um notebook com Windows 11 não acessa sites. Outro equipamento na mesma rede funciona normalmente.", "Fictional scenario: a Windows 11 laptop cannot access websites. Another device on the same network works normally."],
  ["Roteiro de investigação", "Investigation Steps"],
  ["Entender o relato.", "Understand the reported problem."],
  ["Perguntar quando começou, se todos os sites falham e se houve alguma mudança recente. Registrar a mensagem de erro, sem antecipar a causa.", "Ask when it started, whether all websites fail and whether anything has changed recently. Record the error message without assuming the cause."],
  ["Conferir a conexão.", "Check the connection."],
  ["Verificar em Configurações → Rede e Internet se o Wi-Fi está ativado, se o modo avião está desligado e se a rede esperada está selecionada. Em uma conexão por cabo, observar o encaixe e o estado do cabo.", "In Settings → Network & internet, check that Wi-Fi is on, airplane mode is off and the expected network is selected. For a wired connection, check that the cable is securely plugged in and inspect its condition."],
  ["Comparar o alcance do problema.", "Compare the scope of the problem."],
  ["Testar um segundo site e verificar outro dispositivo na mesma rede. Esses resultados ajudam a separar uma falha do notebook, da rede ou de um serviço específico.", "Try a second website and check another device on the same network. These results help determine whether the problem affects the laptop, the network or a specific service."],
  ["Testar uma mudança por vez.", "Test one change at a time."],
  ["Neste exemplo, a hipótese é Wi-Fi desativado. O teste proposto é ativá-lo e conectar à rede correta. Se isso não explicar o problema, consultar o diagnóstico de Rede e Internet no aplicativo Obter Ajuda.", "In this example, the hypothesis is that Wi-Fi is off. The proposed test is to turn it on and connect to the correct network. If this does not explain the problem, use the Network and Internet troubleshooter in the Get Help app."],
  ["Validar e registrar.", "Verify and document."],
  ["Conferir a conexão e repetir o acesso que estava falhando. Anotar o que foi observado antes e depois, a ação testada e o resultado.", "Check the connection and try accessing the websites again. Record the observations before and after the change, the action tested and the result."],
  ["Desfecho simulado", "Simulated Outcome"],
  ["No cenário fictício, o Wi-Fi estava desativado. Após sua ativação e conexão à rede correta, dois sites passam a abrir e o usuário confirma o acesso. Esse resultado é uma premissa do exercício, não um teste executado.", "In the fictional scenario, Wi-Fi was off. After it is turned on and connected to the correct network, two websites open and the user confirms access. This result is an assumption of the exercise, not a test that was performed."],
  ["Se continuar sem conexão:", "If there is still no connection:"],
  ["encaminhar o chamado com os sintomas, o alcance do problema e os testes já feitos. Em uma rede de empresa, mudanças em roteadores, VPN ou configurações administradas dependem da equipe responsável.", "forward the ticket with the symptoms, the scope of the problem and the tests already performed. On a company network, changes to routers, VPNs or managed settings must be handled by the responsible team."],
  ["Referência para as verificações de conexão:", "Reference for connection checks:"],
  ["Microsoft — problemas de conexão Wi-Fi no Windows", "Microsoft — fixing Wi-Fi connection issues in Windows"],
  ["Um exemplo de como organizar o cenário anterior para que outra pessoa consiga entender o problema e acompanhar sua resolução.", "An example of how to document the previous scenario so that someone else can understand the problem and follow its resolution."],
  ["EXEMPLO FICTÍCIO · SUP-001", "FICTIONAL EXAMPLE · SUP-001"],
  ["Notebook sem conexão com a internet", "Laptop without an internet connection"],
  ["Solicitante e ambiente", "Requester and Environment"],
  ["Usuário de demonstração; notebook de estudo com Windows 11 e conexão Wi-Fi.", "Demo user; a study laptop running Windows 11 with a Wi-Fi connection."],
  ["Descrição", "Description"],
  ["O usuário informa que não consegue abrir sites no notebook. O problema começou ao iniciar o expediente fictício.", "The user reports being unable to open websites on the laptop. The problem began at the start of the fictional workday."],
  ["Impacto e prioridade", "Impact and Priority"],
  ["Uma pessoa sem acesso a atividades online. Neste exercício, prioridade média, considerando a existência de outro equipamento disponível; a classificação real depende dos critérios da organização.", "One person cannot access online activities. In this exercise, the priority is medium because another device is available; the actual classification depends on the organization's criteria."],
  ["Evidências do cenário", "Scenario Evidence"],
  ["Dois sites não abrem no notebook; outro dispositivo acessa a mesma rede; a opção de Wi-Fi aparece desativada.", "Two websites do not open on the laptop; another device can access the same network; Wi-Fi is shown as turned off."],
  ["Ação proposta", "Proposed Action"],
  ["Ativar o Wi-Fi, selecionar a rede correta e verificar se a conexão é estabelecida.", "Turn on Wi-Fi, select the correct network and check whether a connection is established."],
  ["Resolução simulada", "Simulated Resolution"],
  ["No exercício, a ativação do Wi-Fi restabelece a conexão. O acesso aos dois sites é considerado validado e o usuário confirma que pode continuar.", "In the exercise, turning on Wi-Fi restores the connection. Access to both websites is considered verified, and the user confirms they can continue."],
  ["Status do exemplo", "Example Status"],
  ["Resolvido no cenário simulado. Em um atendimento real, registrar a validação e seguir o fluxo de encerramento da organização.", "Resolved in the simulated scenario. In actual support work, record the verification and follow the organization's ticket closure process."],
  ["Exemplo de retorno ao usuário", "Example of a Reply to the User"],
  ["“Neste exemplo, identificamos que o Wi-Fi estava desativado e orientamos sua ativação. Por favor, confirme se os sites que você precisa usar estão abrindo. Se o problema voltar, informe o horário e a mensagem apresentada.”", "“In this example, we found that Wi-Fi was off and explained how to turn it on. Please confirm that the websites you need are opening. If the problem returns, let us know the time and the message displayed.”"],
  ["Um registro útil descreve fatos, ações e resultados em ordem. Use identificadores de equipamentos e mensagens de erro quando necessário; exclua senhas e informações pessoais desnecessárias.", "A useful record describes facts, actions and results in sequence. Include device identifiers and error messages when needed; leave out passwords and unnecessary personal information."],
  ["Orientações introdutórias para o Windows 11. Em equipamentos da empresa, siga as orientações da equipe de TI.", "Introductory guidance for Windows 11. On company devices, follow the IT team's instructions."],
  ["Quando a internet não funciona", "When the Internet Is Not Working"],
  ["Abra Configurações → Rede e Internet. Confira se está conectado à rede esperada. No Wi-Fi, observe se ele está ativado e se o modo avião está desligado. Teste outro site e informe ao suporte se a falha ocorre em todos ou apenas em um.", "Open Settings → Network & internet. Check that you are connected to the expected network. For Wi-Fi, check that it is on and airplane mode is off. Try another website and tell support whether the problem affects all websites or just one."],
  ["Consulta:", "Reference:"],
  ["orientações de conexão da Microsoft", "Microsoft's connection guidance"],
  ["Quando aparece um aviso de pouco espaço", "When a Low Storage Warning Appears"],
  ["Abra Configurações → Sistema → Armazenamento e observe as categorias que ocupam espaço. Revise os itens antes de qualquer exclusão. Se tiver dúvida sobre um arquivo ou aplicativo, consulte o suporte; mantenha os documentos de trabalho no local de armazenamento definido pela empresa.", "Open Settings → System → Storage and review the categories using space. Review items before deleting anything. If you are unsure about a file or app, contact support; keep work documents in the storage location specified by your company."],
  ["configurações de armazenamento da Microsoft", "Microsoft's storage settings guidance"],
  ["Como pedir ajuda com clareza", "How to Ask for Help Clearly"],
  ["Informe o que tentava fazer e qual aplicativo estava usando.", "Explain what you were trying to do and which app you were using."],
  ["Copie a mensagem de erro ou envie uma captura sem dados sensíveis.", "Copy the error message or send a screenshot without sensitive data."],
  ["Indique quando começou, a frequência e quem mais foi afetado.", "State when it started, how often it happens and who else is affected."],
  ["Conte quais verificações já fez e os resultados observados.", "Describe the checks you have already performed and the results you observed."],
  ["Exemplo fictício:", "Fictional example:"],
  ["“Ao abrir o sistema no navegador, aparece uma mensagem de falha de conexão. Começou hoje de manhã. Outros sites abrem normalmente; tentei novamente e o erro continuou.”", "“When I open the system in my browser, a connection error message appears. It started this morning. Other websites open normally; I tried again and the error persisted.”"],
  ["Materiais de estudo em suporte técnico", "Technical support study materials"],
  ["Projetos de desenvolvimento", "Development Projects"],
  ["Projeto anterior", "Previous project"],
  ["Próximo projeto", "Next project"],
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
  ["Navegação do portfólio", "Portfolio navigation"],
  ["Conteúdo dos materiais", "Materials contents"],
  ["Logo do projeto Task Flow.", "Task Flow project logo."],
  ["Logo do projeto NetworkUp.", "NetworkUp project logo."],
  ["Logo do projeto DoraNina.", "DoraNina project logo."],
  ["Repositório no GitHub", "GitHub repository"],
  ["Ver projeto", "View project"],
  ["Carrossel de projetos", "Project carousel"],
  ["Projeto anterior", "Previous project"],
  ["Próximo projeto", "Next project"]
]);

const metaTranslations = new Map([
  ["Materiais de suporte ao Windows | Guilherme Cardoso", "Windows Support Materials | Guilherme Cardoso"],
  ["Materiais de estudo sobre suporte ao Windows: diagnóstico de conectividade, registro fictício de chamado e orientações ao usuário.", "Windows support study materials: connectivity troubleshooting, a fictional support ticket and user guidance."],
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

function updateResumeLink(language) {
  const link = document.querySelector("[data-resume-pt][data-resume-en]");
  if (!link) return;

  link.setAttribute("href", language === "en" ? link.dataset.resumeEn : link.dataset.resumePt);
}

function updateSupportReferenceLinks(language) {
  const locale = language === "en" ? "en-us" : "pt-br";
  document.querySelectorAll('a[href^="https://support.microsoft.com/"]').forEach((link) => {
    const url = new URL(link.href);
    url.pathname = url.pathname.replace(/^\/(?:pt-br|en-us)\//, `/${locale}/`);
    link.href = url.href;
  });
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
  updateResumeLink(currentLanguage);
  updateSupportReferenceLinks(currentLanguage);
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
