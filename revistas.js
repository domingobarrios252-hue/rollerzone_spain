/* ═══════════════════════════════════════════════════════════════
   ROLLERZONE SPAIN — js/revistas.js
   
   ╔══════════════════════════════════════════════════════╗
   ║  CÓMO AÑADIR UNA NUEVA REVISTA                       ║
   ║                                                      ║
   ║  1. Copia el último bloque { } de la lista           ║
   ║  2. Pégalo justo antes del ];  final                 ║
   ║  3. Asegúrate de poner coma después del } anterior   ║
   ║  4. Edita los campos:                                ║
   ║     n        → número de la revista (8, 9, 10...)   ║
   ║     year     → año de publicación                   ║
   ║     theme    → tema principal del número            ║
   ║     sumario  → contenido del número (separado por ·)║
   ║     portada  → 'img/revistas/rzN.jpg' o ''          ║
   ║     precio   → precio en euros (ej: '4.99')         ║
   ║     linkPDF  → URL de compra (o '#' si no hay aún)  ║
   ║     current  → true solo para el número más nuevo   ║
   ╚══════════════════════════════════════════════════════╝
   ═══════════════════════════════════════════════════════════════ */

const MAGS = [
  {
    n: 1,
    year: '2020',
    theme: 'Origen y Pasión',
    portada: '',  /* Ej: 'img/revistas/rz1.jpg' */
    precio: '3.99',
    linkPDF: '#',  /* URL de tu tienda o Gumroad, Payhip, etc. */
    sumario: 'Historia del patinaje en España · Primeras figuras nacionales · Técnica de salida · Equipamiento básico · Entrevista fundadores',
    current: false
  },
  {
    n: 2,
    year: '2021',
    theme: 'Campeones de España',
    portada: '',
    precio: '3.99',
    linkPDF: '#',
    sumario: 'Reportaje campeonato nacional 2020 · Entrevista al campeón · Análisis técnico 500m · Clubs del año · Galería fotográfica',
    current: false
  },
  {
    n: 3,
    year: '2021',
    theme: 'Pista y Maratón',
    portada: '',
    precio: '3.99',
    linkPDF: '#',
    sumario: 'Maratón vs pista: diferencias técnicas · Preparación física maratón · Mejores patines de competición · Ranking clubs · Test de ruedas',
    current: false
  },
  {
    n: 4,
    year: '2022',
    theme: 'Generación Olímpica',
    portada: '',
    precio: '3.99',
    linkPDF: '#',
    sumario: 'El patinaje camino a los Juegos · Promesas sub-17 · Entrenamiento de élite · Reportaje World Skate Games · Nutrición deportiva',
    current: false
  },
  {
    n: 5,
    year: '2023',
    theme: 'Europa en Juego',
    portada: '',
    precio: '3.99',
    linkPDF: '#',
    sumario: 'Crónica Campeonato de Europa · Selección nacional: análisis · Innovación en materiales · Ranking MVP · Viaje a los mejores circuitos',
    current: false
  },
  {
    n: 6,
    year: '2024',
    theme: 'Velocidad Extrema',
    portada: '',
    precio: '4.49',
    linkPDF: '#',
    sumario: 'Récords nacionales e internacionales · Biomecánica del patinador · Mejores pistas España · Ranking MVP especial · Entrenamiento mental',
    current: false
  },
  {
    n: 7,
    year: '2025',
    theme: 'Número actual',
    portada: '',  /* Pon aquí la portada del N°7: 'img/revistas/rz7.jpg' */
    precio: '4.99',
    linkPDF: '#',  /* Pon aquí el enlace de compra real */
    sumario: 'España en Europa: crónica completa · Entrevista Lucía Méndez · Ranking MVP 2026 · Calendario completo temporada · Nuevos materiales · Especial promesas',
    current: true
  }
];


/* ══════════════════════════════════════════════
   MOTOR DE REVISTAS — No necesitas editar esto
   ══════════════════════════════════════════════ */
function buildMagGrid() {
  const mg = document.getElementById('mag-grid');
  MAGS.forEach(m => {
    const d = document.createElement('div');
    d.className = 'mag';
    const coverHtml = m.portada
      ? `<img src="${m.portada}" alt="RollerZone N°${m.n}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0">`
      : '';
    d.innerHTML = `
      <div class="mcov">
        ${coverHtml}
        <span class="ml" style="position:relative">RollerZone</span>
        <span class="mn" style="position:relative">N°${m.n}</span>
        <span class="my" style="position:relative">${m.year}</span>
        ${m.current ? '<span class="mnew">NUEVO</span>' : ''}
      </div>
      <div class="minfo"><h5>${m.theme}</h5><p>${m.year}</p></div>
      <div class="mbtns">
        <button class="bts"  onclick="event.stopPropagation();showMag(${m.n})">Ver</button>
        <button class="bts btbuy" onclick="event.stopPropagation();showMag(${m.n})">Comprar</button>
      </div>`;
    d.onclick = () => showMag(m.n);
    mg.appendChild(d);
  });
}

function showMag(n) {
  const m = MAGS.find(x => x.n === n);
  if (!m) return;
  showPage('pg-detail');
  document.getElementById('d-section').textContent = 'Revistas';
  document.getElementById('d-title-crumb').textContent = `RollerZone N°${n}`;
  document.getElementById('d-back-btn').onclick = goHome;

  const coverHtml = m.portada
    ? `<img src="${m.portada}" alt="RollerZone N°${n}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0">`
    : '';

  document.getElementById('d-content').innerHTML = `
    <div class="dhero"><div class="dhero-in">
      <span class="dtag" style="background:var(--acc);color:#1a1200">Revista impresa y digital</span>
      <h2>RollerZone N°${n} — ${m.theme}</h2>
      <div class="dmeta">${m.year}${m.current ? ' · Número actual' : ''} · ${m.precio} € formato digital</div>
    </div></div>
    <div class="dbody">
      <div class="mag-dcov" style="background:#1a1200">
        ${coverHtml}
        <span class="ml">RollerZone Spain</span>
        <span class="mn">N°${n}</span>
        <span class="ml">${m.year}</span>
        ${m.current ? '<span style="background:var(--acc);color:#1a1200;font-size:11px;font-weight:500;padding:3px 12px;border-radius:10px;position:relative">NÚMERO ACTUAL</span>' : ''}
      </div>
      <div class="bio-box"><h4>Sumario del número ${n}</h4><p>${m.sumario}</p></div>
      <div class="buy-blk">
        <div>
          <p>Comprar RollerZone N°${n} en formato digital (PDF)</p>
          <small>Descarga inmediata · Alta resolución · Compatible con todos los dispositivos · ${m.precio} €</small>
        </div>
        <button class="buy-btn" onclick="window.open('${m.linkPDF}','_blank')">
          Comprar PDF — ${m.precio} € →
        </button>
      </div>
      ${n < MAGS.length
        ? `<div style="margin-top:1rem;text-align:center">
             <button class="dback" style="font-size:13px;padding:6px 16px" onclick="showMag(${n+1})">
               Ver siguiente: N°${n+1} →
             </button>
           </div>`
        : ''}
    </div>`;
  window.scrollTo(0, 0);
}
