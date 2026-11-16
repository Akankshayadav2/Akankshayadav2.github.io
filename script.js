/* =========================================================
   DATA: edit this section to update the site's content
   ========================================================= */
const ICONS = {
  route: '<svg viewBox="0 0 24 24"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>',
  book: '<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>',
  info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
  github: '<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.5 3.3 6.7 6.4 7a3.4 3.4 0 0 0-.9 2.6V22"/></svg>',
};

/* PROJECTS: empty for now. To add one, copy this template into the array below:
  {
    title: 'Project name',
    icon: 'globe',                 // one of: route, book, globe (or add your own SVG to ICONS)
    gradient: 'linear-gradient(135deg,#7c6cff,#22d3ee)',
    intro: 'One or two sentences about what it does.',
    stack: ['Angular', 'TypeScript', 'Java'],
    features: ['Feature 1', 'Feature 2'],   // shown in the "More info" popup
    github: 'https://github.com/your-username/repo',
    live: '',                      // optional deployed URL
  },
*/
const projects = [];

const skills = [
  { group: 'Languages', items: ['Java (Core & Advanced)', 'SQL', 'TypeScript', 'JavaScript', 'Python'] },
  { group: 'Frontend', items: ['Angular', 'HTML5', 'CSS', 'Responsive Design', 'Form Validation'] },
  { group: 'Backend', items: ['JDBC', 'Hibernate', 'MVC Architecture'] },
  { group: 'Databases', items: ['MySQL', 'Relational Schema Design', 'CRUD / Prepared Statements'] },
  { group: 'CS Fundamentals', items: ['OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] },
  { group: 'AI / ML', items: ['Machine Learning (Python)', 'Pandas', 'NumPy', 'Scikit-learn', 'AI-based Optimisation'] },
  { group: 'AI Developer Tools', items: ['ChatGPT', 'GitHub Copilot', 'Gemini', 'Prompt Engineering'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'MATLAB'] },
];

const experience = [
  {
    role: 'Associate Engineer Trainee',
    org: 'Innofied Solution Pvt. Ltd.', mode: 'On-site',
    date: 'Jul 2026 – Nov 2026',
    points: [
      'Completed the trainee program, learning professional software development practices, tools and team workflows.',
      'Built and improved user-interface features for company projects.',
      'Helped with backend work on server-side features and application logic.',
    ],
  },
  {
    role: 'Full Stack Development Training',
    org: 'QSpiders, Kolkata', mode: 'Classroom',
    date: 'Professional training',
    points: [
      'Backend: Java, JDBC, Hibernate.',
      'Frontend: HTML, CSS, JavaScript, TypeScript, Angular.',
      'Database: SQL.',
    ],
  },
  {
    role: 'Data Science Intern',
    org: 'Celebal Technologies', mode: 'Remote',
    date: 'May 2024 – Jun 2025',
    points: [
      'Completed data science assignments in Python covering data cleaning, EDA and visualisation.',
      'Built and evaluated ML models with Pandas, NumPy and Scikit-learn.',
    ],
  },
  {
    role: 'Java Developer Intern',
    org: 'RemarkSkill Education', mode: 'Kolkata',
    date: 'Jun 2024 – Jul 2024',
    points: [
      'Built project-based applications in core Java using object-oriented design and advanced data structures.',
      'Solved problems as part of a team, following industry coding practices.',
    ],
  },
];

const education = [
  { role: 'B.Tech: Computer Science & Engineering (AI/ML)', org: 'University of Engineering & Management (UEM), Kolkata', date: 'Aug 2022 – Jul 2026', points: ['CGPA: 8.9 / 10'] },
  { role: 'Class XII (Higher Secondary)', org: 'GB Memorial Institution, Kolkata', date: 'Apr 2020 – Mar 2022', points: ['Scored 84%'] },
  { role: 'Class X', org: 'Blooming Bud Day High School, Kolkata', date: '2020', points: ['Scored 79%'] },
];

const typedPhrases = ['full-stack web apps', 'Angular frontends', 'Java backends', 'ML-powered solutions'];

/* =========================================================
   RENDERING
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const chips = (arr) => arr.map((t) => `<span class="chip">${esc(t)}</span>`).join('');

function renderProjects() {
  if (!projects.length) {
    $('#projectGrid').innerHTML = `
      <div class="card empty reveal">
        <div class="empty__icon">${ICONS.github}</div>
        <h3>New projects on the way</h3>
        <p>I'm building new full-stack projects with Angular, TypeScript and Java. They'll appear here, with code on GitHub, as soon as they're ready.</p>
      </div>`;
    return;
  }
  $('#projectGrid').innerHTML = projects.map((p, i) => `
    <article class="card project reveal">
      <div class="project__banner" style="background:${p.gradient}">${ICONS[p.icon]}</div>
      <div class="project__body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.intro)}</p>
        <div class="chips">${chips(p.stack)}</div>
        <div class="project__foot">
          <button class="link-btn" data-project="${i}">${ICONS.info} More info</button>
          ${p.github ? `<a class="link-btn" href="${esc(p.github)}" target="_blank" rel="noopener">${ICONS.github} Code</a>` : ''}
          ${p.live ? `<a class="link-btn" href="${esc(p.live)}" target="_blank" rel="noopener">${ICONS.globe} Live</a>` : ''}
        </div>
      </div>
    </article>`).join('');
}

function renderSkills() {
  $('#skillGrid').innerHTML = skills.map((s) => `
    <div class="card skill-group reveal">
      <h3><span class="dot"></span>${esc(s.group)}</h3>
      <div class="chips">${chips(s.items)}</div>
    </div>`).join('');
}

function renderTimeline(sel, items) {
  $(sel).innerHTML = items.map((e) => `
    <li class="tl-item card reveal">
      <div class="tl-head"><h3>${esc(e.role)}</h3><span class="tl-date">${esc(e.date)}</span></div>
      <p class="tl-org">${esc(e.org)}${e.mode ? ` <span>· ${esc(e.mode)}</span>` : ''}</p>
      <ul class="checklist">${e.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
    </li>`).join('');
}

renderProjects();
renderSkills();
renderTimeline('#expTimeline', experience);
renderTimeline('#eduTimeline', education);
$('#year').textContent = new Date().getFullYear();

/* =========================================================
   INTERACTIONS
   ========================================================= */
// Theme (persisted per browser)
const root = document.documentElement;
try {
  const saved = localStorage.getItem('theme');
  if (saved) root.dataset.theme = saved;
  else if (matchMedia('(prefers-color-scheme: light)').matches) root.dataset.theme = 'light';
} catch (_) { /* storage unavailable */ }
$('#themeToggle').addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (_) {}
});

// Nav: scrolled state + mobile menu
const nav = $('#nav'), burger = $('#burger'), links = $('#navLinks');
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 20);
addEventListener('scroll', onScroll, { passive: true }); onScroll();
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') { links.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
});

// Highlight the nav link for the section in view
const navAnchors = [...links.querySelectorAll('a')];
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) navAnchors.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('section[id]').forEach((s) => spy.observe(s));

// Reveal on scroll + count-up stats
const revealer = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add('visible');
    en.target.querySelectorAll('[data-count]').forEach(countUp);
    revealer.unobserve(en.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealer.observe(el));

function countUp(el) {
  const target = parseFloat(el.dataset.count), dec = +(el.dataset.decimals || 0), dur = 1200, t0 = performance.now();
  const step = (t) => {
    const k = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - k, 3);
    el.textContent = (target * eased).toFixed(dec);
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Typing effect
(function typer() {
  const el = $('#typed');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let p = 0, c = typedPhrases[0].length, deleting = true;
  const tick = () => {
    const word = typedPhrases[p];
    c += deleting ? -1 : 1;
    el.textContent = word.slice(0, c);
    let delay = deleting ? 45 : 90;
    if (!deleting && c === word.length) { deleting = true; delay = 1800; }
    else if (deleting && c === 0) { deleting = false; p = (p + 1) % typedPhrases.length; delay = 300; }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 2200);
})();

// Project modal
const modal = $('#modal');
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-project]');
  if (btn) {
    const p = projects[btn.dataset.project];
    $('#modalTitle').textContent = p.title;
    $('#modalChips').innerHTML = chips(p.stack);
    $('#modalList').innerHTML = p.features.map((f) => `<li>${esc(f)}</li>`).join('');
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
    $('.modal__close', modal).focus();
  }
  if (e.target.closest('[data-close]')) closeModal();
});
const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); };
addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// Contact form validation; on success, opens the visitor's mail app with the message filled in
$('#contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const rules = {
    name: (v) => v.trim().length >= 2 || 'Please enter your name.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Please enter a valid email address.',
    message: (v) => v.trim().length >= 10 || 'Your message should be at least 10 characters.',
  };
  let ok = true;
  for (const [name, rule] of Object.entries(rules)) {
    const input = form.elements[name], field = input.closest('.field'), res = rule(input.value);
    field.classList.toggle('invalid', res !== true);
    $('.error', field).textContent = res === true ? '' : res;
    if (res !== true && ok) { input.focus(); ok = false; }
  }
  if (!ok) return;
  const { name, email, message } = form.elements;
  const subject = encodeURIComponent(`Portfolio enquiry from ${name.value.trim()}`);
  const body = encodeURIComponent(`${message.value.trim()}\n\n${name.value.trim()} (${email.value.trim()})`);
  location.href = `mailto:yakanksha813@gmail.com?subject=${subject}&body=${body}`;
  $('#formNote').textContent = 'Opening your email app…';
  form.reset();
});
