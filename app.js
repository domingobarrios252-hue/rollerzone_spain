/* ═══════════════════════════════════════════════════════════════
   ROLLERZONE SPAIN — js/app.js
   Lógica principal: navegación, páginas de detalle, utilidades
   No necesitas editar este archivo salvo que añadas secciones nuevas
   ═══════════════════════════════════════════════════════════════ */

/* ── NAVEGACIÓN ENTRE PÁGINAS ─────────────────────────────────── */
function showPage(id) {
  /* Oculta todo */
  document.getElementById('pg-detail').style.display  = 'none';
  document.getElementById('pg-ranking').style.display = 'none';

  /* Muestra o esconde la página principal */
  const isMain = (id === 'home');
  document.querySelector('.nav').style.display      = isMain ? '' : 'none';
  document.querySelector('.ticker').style.display   = isMain ? '' : 'none';
  document.querySelector('.hero-band').style.display= isMain ? '' : 'none';
  document.querySelectorAll('section, .divider, footer').forEach(el => {
    el.style.display = isMain ? '' : 'none';
  });

  if (id !== 'home') {
    document.getElementById(id).style.display = 'block';
  }
  window.scrollTo(0, 0);
}

function goHome() {
  showPage('home');
}

function showMain() {
  /* Vuelve al ranking desde ficha de patinador */
  showPage('home');
  setTimeout(() => scr('mvp'), 80);
}

/* ── SCROLL A SECCIÓN ─────────────────────────────────────────── */
function scr(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── FILTROS POR TABS ─────────────────────────────────────────── */
function tabClick(el, sel) {
  document.querySelectorAll(sel).forEach(b => b.classList.remove('on'));
  el.classList.add('on');
}

/* ── PÁGINAS DE DETALLE GENÉRICAS ─────────────────────────────── */
/*
   det(type, title, sub, meta, body, av)
   
   type  → 'noticia' | 'evento' | 'entrevista' | 'club' | 'sponsor'
   title → título principal
   sub   → subtítulo o categoría (ej: 'Nacional', 'Patinadora · Lucía Méndez')
   meta  → fecha o lugar
   body  → texto completo del artículo
   av    → iniciales del avatar (2 letras) o '' si hay imagen
*/
function det(type, title, sub, meta, body, av) {
  showPage('pg-detail');

  const labels = {
    noticia:    'Noticias',
    evento:     'Eventos',
    entrevista: 'Entrevistas',
    club:       'Clubs',
    sponsor:    'Patrocinadores'
  };
  document.getElementById('d-section').textContent      = labels[type] || type;
  document.getElementById('d-title-crumb').textContent  = title.substring(0, 48) + (title.length > 48 ? '…' : '');
  document.getElementById('d-back-btn').onclick = goHome;

  let html = '';

  /* ── Noticia / Evento ── */
  if (type === 'noticia' || type === 'evento') {
    html = `
      <div class="dhero"><div class="dhero-in">
        <span class="dtag" style="background:var(--acc);color:#1a1200">${sub}</span>
        <h2>${title}</h2>
        <div class="dmeta">${meta}</div>
      </div></div>
      <div class="dbody">
        <div class="det-img">
          <div class="det-ico">⛸</div>
        </div>
        <p class="det-txt">${body}</p>
        ${type === 'evento' ? `
          <div class="det-grid">
            <div class="sbox"><span class="sv">${meta.split(' ').slice(0,2).join(' ')}</span><span class="sl">Fecha</span></div>
            <div class="sbox"><span class="sv">${sub}</span><span class="sl">Categoría</span></div>
          </div>` : ''}
      </div>`;
  }

  /* ── Entrevista ── */
  else if (type === 'entrevista') {
    const avClass = (av === 'AS' || av === 'LM' || av === 'AT') ? 'f' : 'm';
    html = `
      <div class="dhero"><div class="dhero-in">
        <span class="dtag" style="background:var(--acc);color:#1a1200">Entrevista</span>
        <h2>${title}</h2>
        <div class="dmeta">${sub} · ${meta}</div>
      </div></div>
      <div class="dbody">
        <div class="prof-card">
          <div class="av-xl ${avClass}">${av}</div>
          <div class="pi">
            <h3>${meta}</h3>
            <p>${sub}</p>
          </div>
        </div>
        <div class="det-img"><div class="det-ico">⛸</div></div>
        <p class="det-txt">${body}</p>
      </div>`;
  }

  /* ── Club ── */
  else if (type === 'club') {
    html = `
      <div class="dhero"><div class="dhero-in">
        <span class="dtag" style="background:var(--acc);color:#1a1200">Club</span>
        <h2>${title}</h2>
        <div class="dmeta">${sub}</div>
      </div></div>
      <div class="dbody">
        <div class="prof-card">
          <div class="av-xl f" style="background:var(--acd);color:var(--acc)">${av}</div>
          <div class="pi">
            <h3>${title}</h3>
            <p>${sub}</p>
            <span class="ptag ptag-cl" style="margin-top:8px;display:inline-block">${meta}</span>
          </div>
        </div>
        <p class="det-txt">${body}</p>
        <div class="det-grid">
          <div class="sbox">
            <span class="sv">${meta.split('·')[0].trim()}</span>
            <span class="sl">Patinadores</span>
          </div>
          <div class="sbox">
            <span class="sv">${meta.split('·')[1] ? meta.split('·')[1].trim() : '—'}</span>
            <span class="sl">Palmarés</span>
          </div>
        </div>
      </div>`;
  }

  /* ── Patrocinador ── */
  else if (type === 'sponsor') {
    html = `
      <div class="dhero"><div class="dhero-in">
        <span class="dtag" style="background:var(--acc);color:#1a1200">Patrocinador</span>
        <h2>${title}</h2>
        <div class="dmeta">${sub} · ${meta}</div>
      </div></div>
      <div class="dbody">
        <div class="prof-card">
          <div class="av-xl f" style="background:var(--acd);color:var(--acc);font-size:${av==='+' ? '22px' : '18px'}">${av}</div>
          <div class="pi">
            <h3>${title}</h3>
            <p>${sub}</p>
            <span class="ptag ptag-cl" style="margin-top:8px;display:inline-block">${meta}</span>
          </div>
        </div>
        <p class="det-txt">${body}</p>
      </div>`;
  }

  document.getElementById('d-content').innerHTML = html;
}

/* ── INICIO ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderRanking();  /* ranking.js */
  buildMagGrid();   /* revistas.js */
});
