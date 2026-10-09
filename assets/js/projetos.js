function materiaisSuporte(section) {
  section.innerHTML = `<header>
      <h2>Materiais de suporte</h2>
      <p class="section-intro">Cenários fictícios de estudo, com roteiros de diagnóstico, registro de chamados e orientação ao usuário.</p>
    </header>
    <div class="content">
      <div class="cards">
        <div class="card support-material">
          <i class="bi bi-wifi material-icon" aria-hidden="true"></i>
          <span class="material-label">Estudo de caso simulado</span>
          <h3>Diagnóstico de conectividade</h3>
          <p>Roteiro para investigar falta de conexão no Windows, comparar sintomas e validar uma solução.</p>
          <a class="button material-link" href="./materiais/suporte.html#conectividade">Ler material <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>
        </div>
        <div class="card support-material">
          <i class="bi bi-ticket-detailed material-icon" aria-hidden="true"></i>
          <span class="material-label">Estudo de caso simulado</span>
          <h3>Registro de chamado de suporte</h3>
          <p>Exemplo fictício com descrição do problema, impacto, investigação, resolução e retorno ao usuário.</p>
          <a class="button material-link" href="./materiais/suporte.html#chamado">Ler material <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>
        </div>
        <div class="card support-material">
          <i class="bi bi-microsoft material-icon" aria-hidden="true"></i>
          <span class="material-label">Guia de estudo</span>
          <h3>Guia básico de Windows</h3>
          <p>Orientações para conferir a conexão, observar o armazenamento e solicitar ajuda com informações úteis.</p>
          <a class="button material-link" href="./materiais/suporte.html#windows">Ler material <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>`;
}

function projetos(section) {
  section.innerHTML = `<header>
      <h2 id="projects-title">Projetos</h2>
    </header>
    <div class="content">
      <div class="project-carousel" data-project-carousel role="region" aria-labelledby="projects-title">
        <div class="cards project-carousel-track" id="project-carousel-track" data-carousel-track tabindex="0" role="group" aria-label="Carrossel de projetos">
        <div class="card">
          <h3>Meu Valor SINDIMETAL RS</h3>
          <div class="img-wrapper">
            <i class="bi bi-bar-chart-line project-icon" aria-hidden="true"></i>
          </div>
          <span class="material-label">Projeto profissional · SINDIMETAL</span>
          <p>Sistema web Full Stack de Inteligência de Negócios (BI), com API REST e arquitetura em camadas,
            em desenvolvimento no SINDIMETAL.</p>
          <p>Full Stack - BI - API REST - Arquitetura em camadas</p>
        </div>
        <div class="card">
          <h3>Task Flow</h3>
          <div class="img-wrapper">
            <img
              src="./assets/images/projects/logo_taskflow.png"
              alt="Logo do projeto Task Flow."
            />
            <div class="buttons">
              <a
                href="https://github.com/guicardoso0404/taskflow"
                target="_blank"
                rel="noopener noreferrer"
                title="Repositório no GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
              </a>
              <a
                href="https://deploy-task-flow-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                title="Ver projeto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <p>
            Aplicação web para gerenciamento de tarefas, permitindo criar,
            organizar e acompanhar atividades de forma simples e eficiente.
          </p>
          <p>Java - Spring Boot - MySQL - HTML - CSS - JavaScript</p>
        </div>
        <div class="card">
          <h3>NetworkUp - Projeto de conclusão de curso</h3>
          <div class="img-wrapper">
            <img
              src="./assets/images/projects/networkup.png"
              alt="Logo do projeto NetworkUp."
            />
            <div class="buttons">
              <a
                href="https://github.com/guicardoso0404/NetworkUp"
                target="_blank"
                rel="noopener noreferrer"
                title="Repositório no GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
              </a>
              <a
                href="https://deploy-frontend-snowy.vercel.app/home"
                target="_blank"
                rel="noopener noreferrer"
                title="Ver projeto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <p>Aplicação de networking para conectar profissionais e empresas.</p>
          <p>HTML - CSS - JavaScript - NodeJS - MySQL</p>
        </div>
        <div class="card">
          <h3>DoraNina</h3>
          <div class="img-wrapper">
            <img
              src="./assets/images/projects/logo_doranina.png"
              alt="Logo do projeto DoraNina."
            />
            <div class="buttons">
              <a
                href="https://github.com/guicardoso0404/doranina"
                target="_blank"
                rel="noopener noreferrer"
                title="Repositório no GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
              </a>
              <a
                href="https://doranina.vercel.app/index.php"
                target="_blank"
                rel="noopener noreferrer"
                title="Ver projeto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <p>
            Loja online de bolos artesanais com catálogo, carrinho, pedidos,
            área do cliente e painel administrativo.
          </p>
          <p>PHP - PostgreSQL - HTML - CSS - JavaScript - Vercel</p>
        </div>
        </div>
        <div class="project-carousel-controls">
          <button class="button project-carousel-control" type="button" data-carousel-prev aria-label="Projeto anterior" aria-controls="project-carousel-track" disabled>
            <i class="bi bi-arrow-left" aria-hidden="true"></i><span class="project-carousel-control-label">Projeto anterior</span>
          </button>
          <p class="project-carousel-position" data-carousel-position role="status" aria-live="polite" aria-atomic="true">1 / 4</p>
          <button class="button project-carousel-control" type="button" data-carousel-next aria-label="Próximo projeto" aria-controls="project-carousel-track">
            <span class="project-carousel-control-label">Próximo projeto</span><i class="bi bi-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>`;
}

export { projetos, materiaisSuporte };
