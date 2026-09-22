/* ==================================================================
   Ruan Gomes.dev · interações da página (JavaScript puro)
   ------------------------------------------------------------------
   1. Cards de projetos gerados a partir de js/projects.js
   2. Menu responsivo
   3. Cabeçalho ao rolar e seção atual destacada no menu
   4. Animações de entrada
   5. Botão "Copiar e-mail"
   6. Ano no rodapé
   ================================================================== */

(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const escapeHTML = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[char]));

  // Só gera botão para endereços http(s) completos. "" ou "#" nunca viram link.
  const isValidUrl = (url) => typeof url === "string" && /^https?:\/\/[^\s#]+$/i.test(url.trim());

  /* ---------- 1. Projetos ---------- */
  const renderProject = (project, index) => {
    const number = String(index + 1).padStart(2, "0");
    const titleId = `projeto-${number}`;
    const name = escapeHTML(project.name);

    const media = project.image
      ? `<figure class="project__media">
           <div class="project__frame">
             <div class="project__bar" aria-hidden="true"><i></i><i></i><i></i></div>
             <img src="${escapeHTML(project.image)}"
                  alt="${escapeHTML(project.imageAlt || `Captura de tela do ${project.name}`)}"
                  width="1280" height="670" loading="lazy" decoding="async">
           </div>
         </figure>`
      : `<div class="project__media project__media--empty" aria-hidden="true"><span>${name}</span></div>`;

    const highlights = (project.highlights || []).length
      ? `<ul class="project__list">${project.highlights.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`
      : "";

    const technologies = (project.technologies || []).length
      ? `<h4 class="sr-only">Tecnologias</h4>
         <ul class="tags">${project.technologies.map((tech) => `<li>${escapeHTML(tech)}</li>`).join("")}</ul>`
      : "";

    const buttons = [];
    if (isValidUrl(project.demoUrl)) {
      buttons.push(`
        <a class="btn btn--primary btn--sm" href="${escapeHTML(project.demoUrl.trim())}" target="_blank" rel="noopener noreferrer">
          Ver projeto<span class="sr-only"> ${name} (abre em nova aba)</span>
          <svg class="icon" aria-hidden="true"><use href="#i-arrow-up-right"/></svg>
        </a>`);
    }
    if (isValidUrl(project.githubUrl)) {
      buttons.push(`
        <a class="btn btn--ghost btn--sm" href="${escapeHTML(project.githubUrl.trim())}" target="_blank" rel="noopener noreferrer">
          <svg class="icon" aria-hidden="true"><use href="#i-github"/></svg>
          Código no GitHub<span class="sr-only"> do ${name} (abre em nova aba)</span>
        </a>`);
    }

    return `
      <article class="project" data-animate aria-labelledby="${titleId}">
        ${media}
        <div class="project__body">
          <div class="project__meta">
            <span class="project__number" aria-hidden="true">${number}</span>
            ${project.status ? `<span class="badge badge--live"><span class="status-dot" aria-hidden="true"></span>${escapeHTML(project.status)}</span>` : ""}
          </div>
          <h3 class="project__name" id="${titleId}">${name}</h3>
          ${project.category ? `<p class="project__category">${escapeHTML(project.category)}</p>` : ""}
          ${project.description ? `<p class="project__description">${escapeHTML(project.description)}</p>` : ""}
          ${highlights}
          ${technologies}
          ${buttons.length ? `<div class="project__actions">${buttons.join("")}</div>` : ""}
        </div>
      </article>`;
  };

  const renderProjects = () => {
    const container = document.getElementById("projects");
    const list = typeof PROJECTS !== "undefined" && Array.isArray(PROJECTS) ? PROJECTS : [];
    const valid = list.filter((project) => project && project.name);
    if (!container || !valid.length) return;
    container.innerHTML = valid.map(renderProject).join("");
  };

  /* ---------- 2. Menu responsivo ---------- */
  const setupNavigation = () => {
    const toggle = document.getElementById("nav-toggle");
    const list = document.getElementById("nav-list");
    if (!toggle || !list) return;

    const isOpen = () => toggle.getAttribute("aria-expanded") === "true";
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      document.body.classList.toggle("nav-open", open);
    };

    toggle.addEventListener("click", () => setOpen(!isOpen()));
    list.addEventListener("click", (event) => { if (event.target.closest("a")) setOpen(false); });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen()) {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (isOpen() && !list.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
    });

    window.matchMedia("(min-width: 960px)").addEventListener("change", (event) => {
      if (event.matches) setOpen(false);
    });
  };

  /* ---------- 3. Cabeçalho + seção atual ---------- */
  const setupScrollState = () => {
    const topbar = document.getElementById("topbar");
    const links = [...document.querySelectorAll(".nav__link")];
    const sections = links.map((link) => document.querySelector(link.hash)).filter(Boolean);
    let queued = false;

    const update = () => {
      queued = false;
      topbar.classList.toggle("is-scrolled", window.scrollY > 12);

      const line = window.innerHeight * 0.35;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = sections[sections.length - 1];
      }

      links.forEach((link) => {
        const active = Boolean(current) && link.hash === `#${current.id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    const queue = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue, { passive: true });
    update();
  };

  /* ---------- 4. Animações de entrada ---------- */
  const setupAnimations = () => {
    const elements = document.querySelectorAll("[data-animate]");
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    elements.forEach((el) => observer.observe(el));
  };

  /* ---------- 5. Copiar e-mail ---------- */
  const setupCopyEmail = () => {
    const button = document.getElementById("copy-email");
    const status = document.getElementById("copy-status");
    if (!button || !status) return;

    const label = button.querySelector(".copy__label");
    const icon = button.querySelector("use");
    const email = button.dataset.email;
    let timer;

    const legacyCopy = () => {
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.className = "sr-only";
      document.body.appendChild(field);
      field.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch { ok = false; }
      field.remove();
      return ok;
    };

    const showResult = (ok) => {
      clearTimeout(timer);
      status.textContent = ok
        ? "E-mail copiado para a área de transferência."
        : `Não foi possível copiar automaticamente. O e-mail é ${email}.`;
      if (ok) {
        label.textContent = "E-mail copiado";
        icon.setAttribute("href", "#i-check");
        button.classList.add("is-done");
      }
      timer = setTimeout(() => {
        label.textContent = "Copiar e-mail";
        icon.setAttribute("href", "#i-copy");
        button.classList.remove("is-done");
        status.textContent = "";
      }, 3200);
    };

    button.addEventListener("click", async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
          showResult(true);
        } else {
          showResult(legacyCopy());
        }
      } catch {
        showResult(legacyCopy());
      }
    });
  };

  /* ---------- 6. Ano ---------- */
  const setYear = () => {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  };

  const start = () => {
    renderProjects();
    setupNavigation();
    setupScrollState();
    setupAnimations();
    setupCopyEmail();
    setYear();
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
