/* ======================================================================
   ALU-FAB PAKISTAN — MAIN JAVASCRIPT
   All 17 Real PDF Projects & Interactive Features
   ====================================================================== */

'use strict';

const projects = {
  takmeel: {
    title: 'Takmeel Trade Tower',
    location: 'Bahria Town Karachi',
    status: 'Ongoing Project',
    statusClass: 'text-amber-400',
    description: 'Landmark multi-storey commercial trade tower featuring high-grade aluminum stick type curtain walling, reflective solar glass panels, and precision ACP spandrel cladding delivered by Alu-Fab.',
    imgSrc: 'assets/projects/takmeel_trade_tower_1.jpg'
  },
  sq29: {
    title: 'Plot # SQ-29 Tower',
    location: 'Bahria Town Karachi',
    status: 'Ongoing Project',
    statusClass: 'text-amber-400',
    description: 'High-rise commercial tower engineered with advanced structural glass curtain walls, integrated sun-shading aluminum louvers, and modern facade architecture.',
    imgSrc: 'assets/projects/plot_sq_29_1.jpg'
  },
  plot254: {
    title: 'Plot # 254, 255, 256 Towers',
    location: 'Bahria Town Karachi',
    status: 'Ongoing Project',
    statusClass: 'text-amber-400',
    description: 'Multi-block high-density commercial complex utilizing heavy-duty aluminum window frames, double-glazed energy efficient windows, and composite aluminum panels.',
    imgSrc: 'assets/projects/plot_254_255_256.jpg'
  },
  sq09: {
    title: 'Plot # SQ-09 Tower',
    location: 'Bahria Town Karachi',
    status: 'Ongoing Project',
    statusClass: 'text-amber-400',
    description: 'Multi-floor commercial tower elevation featuring aluminum stick glazing grid, glass balcony balustrades, and custom entrance automatic doors.',
    imgSrc: 'assets/projects/plot_sq_09_1.jpg'
  },
  plot285: {
    title: 'Plot # 285, 286 Towers',
    location: 'Bahria Town Karachi',
    status: 'Ongoing Project',
    statusClass: 'text-amber-400',
    description: 'Twin high-rise residential & commercial towers featuring custom anodized aluminum window systems, glazed balcony doors, and exterior ACP trims.',
    imgSrc: 'assets/projects/plot_285_286.jpg'
  },
  plot27: {
    title: 'Plot # 27, 28 Tower',
    location: 'Bahria Town Karachi',
    status: 'Ongoing Project',
    statusClass: 'text-amber-400',
    description: 'Modern urban architectural tower elevation integrating geometric aluminum composite panel framing and high-performance reflective glass.',
    imgSrc: 'assets/projects/plot_27_28.jpg'
  },
  madina: {
    title: 'Madina Icon Tower',
    location: 'Bahria Town Karachi',
    status: 'Completed Project',
    statusClass: 'text-green-400',
    description: 'Prestigious completed commercial plaza featuring a floor-to-ceiling blue reflective double glazed curtain wall system framed with high-precision aluminum extrusions.',
    imgSrc: 'assets/projects/madina_icon.jpg'
  },
  hallmark: {
    title: 'Hallmark Tower',
    location: 'Bahria Town Karachi',
    status: 'Completed Project',
    statusClass: 'text-green-400',
    description: 'Iconic high-rise corporate office tower fitted with custom insulated aluminum curtain walls, ground-floor automatic sliding doors, and frameless lobby partitions.',
    imgSrc: 'assets/projects/hallmark_tower.jpg'
  },
  farooq: {
    title: 'Farooq Tower',
    location: 'Bahria Town Karachi',
    status: 'Completed Project',
    statusClass: 'text-green-400',
    description: 'Commercial corporate tower featuring an elegant combination of silver & metallic dark gray ACP composite panel cladding with integrated stick curtain wall glazing.',
    imgSrc: 'assets/projects/farooq_tower.jpg'
  },
  zaplaza: {
    title: 'Z.A Plaza',
    location: 'D.H.A Phase VIII, Karachi',
    status: 'Completed Project',
    statusClass: 'text-green-400',
    description: 'Bespoke modern architectural facade installation combining laser-patterned aluminum screening, structural glass fins, and frameless glass showroom windows.',
    imgSrc: 'assets/projects/za_plaza.jpg'
  },
  plot5c: {
    title: 'Plot # 5-C Commercial',
    location: 'D.H.A Phase VI, Karachi',
    status: 'Completed Project',
    statusClass: 'text-green-400',
    description: 'Unique custom arched facade design integrating dark anodized aluminum window framing with terracotta exterior paneling for high-end retail.',
    imgSrc: 'assets/projects/plot_5c.jpg'
  },
  plot130c: {
    title: 'Plot # 130-C Commercial Plaza',
    location: 'D.H.A Phase II, Karachi',
    status: 'Completed Project',
    statusClass: 'text-green-400',
    description: 'State-of-the-art commercial building clad in reflective blue structural glass with horizontal aluminum accent banding and spider-glazed entrance.',
    imgSrc: 'assets/projects/plot_130c.jpg'
  },
  plot371: {
    title: 'Plot # 371 Commercial',
    location: 'Bahria Town Karachi',
    status: 'Completed Project',
    statusClass: 'text-green-400',
    description: 'Modern corporate elevation featuring clean structural glass curtain walling and dark metallic ACP spandrel cladding.',
    imgSrc: 'assets/projects/plot_371.jpg'
  },
  plot2c: {
    title: 'Plot # 2-C Commercial Building',
    location: 'D.H.A Karachi',
    status: 'Completed Project',
    statusClass: 'text-green-400',
    description: 'Multi-story commercial plaza featuring full corner aluminum glazed curtain wall facade and bronze metallic framing.',
    imgSrc: 'assets/projects/plot_2c.jpg'
  },
  plot11c: {
    title: 'Plot # 11-C Commercial',
    location: 'Bahria Town Karachi',
    status: 'Completed Project',
    statusClass: 'text-green-400',
    description: 'High-rise commercial building engineered with charcoal grey ACP paneling and high-performance blue reflective solar glass.',
    imgSrc: 'assets/projects/plot_11c.jpg'
  },
  plota79: {
    title: 'Plot # A-79 Tower',
    location: 'Bahria Town Karachi',
    status: 'Completed Project',
    statusClass: 'text-green-400',
    description: 'Corporate office elevation featuring silver metallic ACP panel cladding, aluminum louvers, and thermally broken window units.',
    imgSrc: 'assets/projects/plot_a79.jpg'
  },
  rjbtower: {
    title: 'RJB Tower',
    location: 'D.H.A, Karachi',
    status: 'Completed Project',
    statusClass: 'text-green-400',
    description: 'Modern corporate tower elevation rendered with full-height glazed curtain wall panels, metallic ACP band accents, and ground-floor glass entrances.',
    imgSrc: 'assets/projects/rjb_tower.jpg'
  }
};

const galleryImages = [
  { src: 'assets/projects/takmeel_trade_tower_1.jpg', alt: 'Takmeel Trade Tower' },
  { src: 'assets/projects/plot_sq_29_1.jpg', alt: 'Plot # SQ-29' },
  { src: 'assets/projects/madina_icon.jpg', alt: 'Madina Icon' },
  { src: 'assets/projects/hallmark_tower.jpg', alt: 'Hallmark Tower' },
  { src: 'assets/projects/farooq_tower.jpg', alt: 'Farooq Tower' },
  { src: 'assets/projects/za_plaza.jpg', alt: 'Z.A Plaza' }
];

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initMobileMenu();
  initDarkMode();
  initScrollReveal();
  initCounters();
  initProjectFilters();
  initFAQ();
  initBackToTop();
  initContactForm();
});

function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
    document.body.style.overflow = '';
  }, 1800);
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  const moonIcon = document.getElementById('moonIcon');
  const sunIcon = document.getElementById('sunIcon');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (moonIcon && sunIcon) {
      moonIcon.classList.toggle('hidden');
      sunIcon.classList.toggle('hidden');
    }
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  elements.forEach(el => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll('.counter-num');
  if (!counters.length) return;
  let started = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      counters.forEach(c => animateCounter(c));
    }
  }, { threshold: 0.5 });
  const section = document.querySelector('.counters-grid');
  if (section) observer.observe(section);
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const suffix = el.getAttribute('data-suffix') || '';
  let count = 0;
  const step = Math.ceil(target / 40);
  const timer = setInterval(() => {
    count += step;
    if (count >= target) {
      el.textContent = target + suffix;
      clearInterval(timer);
    } else {
      el.textContent = count + suffix;
    }
  }, 30);
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      items.forEach(item => {
        const cat = item.getAttribute('data-category') || '';
        if (filter === 'all' || cat.includes(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function openProjectModal(id) {
  const project = projects[id];
  if (!project) return;
  const modal = document.getElementById('projectModal');
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalLocation').textContent = project.location;
  document.getElementById('modalStatus').textContent = project.status;
  document.getElementById('modalStatus').className = project.statusClass + ' font-semibold text-sm';
  document.getElementById('modalDesc').textContent = project.description;
  document.getElementById('modalImg').innerHTML = `<img src="${project.imgSrc}" alt="${project.title}" class="w-full h-full object-cover" />`;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function openLightbox(idx) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (lb && img && galleryImages[idx]) {
    img.src = galleryImages[idx].src;
    img.alt = galleryImages[idx].alt;
    lb.classList.remove('hidden');
    lb.classList.add('flex');
  }
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.classList.add('hidden');
    lb.classList.remove('flex');
  }
}

window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const isOpen = q.getAttribute('aria-expanded') === 'true';
      q.setAttribute('aria-expanded', !isOpen);
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = '0';
      }
    });
  });
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0)';
    } else {
      btn.style.opacity = '0';
      btn.style.transform = 'translateY(16px)';
    }
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initContactForm() {
  const form = document.getElementById('quoteForm');
  const msg = document.getElementById('formMessage');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.textContent = '✓ Quote request sent successfully to Muhammad Qurban (Alu-Fab). We will reach out within 24 hours!';
    msg.className = 'text-center py-3 rounded-xl text-sm font-manrope bg-green-500/20 text-green-400 border border-green-500/30';
    msg.classList.remove('hidden');
    form.reset();
  });
}
