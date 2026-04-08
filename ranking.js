/* ═══════════════════════════════════════════════════════════════
   ROLLERZONE SPAIN — js/ranking.js
   
   ╔══════════════════════════════════════════════════════╗
   ║  CÓMO AÑADIR UN PATINADOR NUEVO                      ║
   ║                                                      ║
   ║  1. Copia uno de los bloques { } de abajo            ║
   ║  2. Pégalo al final de la lista (antes del ];)       ║
   ║  3. Asegúrate de poner una coma después del } previo ║
   ║  4. Edita los campos:                                ║
   ║     id      → identificador único (sin espacios)    ║
   ║     n       → nombre completo                       ║
   ║     ini     → 2 letras iniciales                    ║
   ║     gen     → 'f' femenino / 'm' masculino          ║
   ║     cat     → 'elite' / 'estrella' / 'promesa'      ║
   ║     club    → nombre del club                       ║
   ║     pts     → puntos MVP (número)                   ║
   ║     edad    → edad en años                          ║
   ║     ciudad  → ciudad de procedencia                 ║
   ║     tit     → número de títulos nacionales          ║
   ║     temp    → temporadas en activo                  ║
   ║     foto    → 'img/patinadores/nombre.jpg' o ''     ║
   ║     bio     → texto biográfico (entre comillas '')  ║
   ║     logros  → lista de logros ['logro1','logro2']   ║
   ╚══════════════════════════════════════════════════════╝
   
   PARA ELIMINAR: borra el bloque { } completo del patinador
   PARA EDITAR PUNTOS: cambia el número en pts:
   ═══════════════════════════════════════════════════════════════ */

const PLAYERS = [

  /* ── CATEGORÍA ELITE FEMENINA ── */
  {
    id: 'lm',
    n: 'Lucía Méndez',
    ini: 'LM',
    gen: 'f',
    cat: 'elite',
    club: 'CD Velocidad Asturias',
    pts: 1240,
    edad: 24,
    ciudad: 'Oviedo',
    tit: 3,
    temp: 6,
    foto: '',  /* Ej: 'img/patinadores/lucia-mendez.jpg' */
    bio: 'Lucía Méndez es la patinadora española más en forma de la temporada 2026. Natural de Oviedo, lleva seis temporadas en la élite nacional y suma ya tres títulos de campeona de España en categoría absoluta femenina.',
    logros: [
      'Campeona de España Absoluta 2024 y 2025',
      'Medalla de plata Campeonato de Europa 2025',
      'Récord nacional 500m pista cubierta',
      '3 victorias en Copa de España 2026'
    ]
  },
  {
    id: 'cg',
    n: 'Carmen García',
    ini: 'CG',
    gen: 'f',
    cat: 'elite',
    club: 'CD Velocidad Madrid',
    pts: 934,
    edad: 26,
    ciudad: 'Madrid',
    tit: 2,
    temp: 7,
    foto: '',
    bio: 'Carmen García es una de las veteranas del pelotón nacional femenino. Con siete temporadas y dos títulos nacionales, la madrileña aporta experiencia y regularidad.',
    logros: [
      'Campeona de España Absoluta 2021 y 2022',
      'Top 10 Campeonato de Europa 2024',
      '5 podios Copa de España desde 2020',
      'Récord de la Comunidad de Madrid 1000m'
    ]
  },
  {
    id: 'ir',
    n: 'Irene Ramos',
    ini: 'IR',
    gen: 'f',
    cat: 'elite',
    club: 'Escola de Patinatge BCN',
    pts: 891,
    edad: 23,
    ciudad: 'Barcelona',
    tit: 1,
    temp: 4,
    foto: '',
    bio: 'Irene Ramos irrumpió en la élite nacional hace cuatro temporadas. La barcelonesa combina excelente técnica de salida con gran resistencia.',
    logros: [
      'Subcampeona de España Absoluta 2025',
      'Campeona de Cataluña 2023 y 2024',
      'Seleccionada nacional 2025 y 2026',
      'Mejor debut del año 2022 según RollerZone'
    ]
  },

  /* ── CATEGORÍA ELITE MASCULINA ── */
  {
    id: 'sf',
    n: 'Sergio Fernández',
    ini: 'SF',
    gen: 'm',
    cat: 'elite',
    club: 'Club Patín Zaragoza',
    pts: 1185,
    edad: 22,
    ciudad: 'Zaragoza',
    tit: 1,
    temp: 2,
    foto: '',
    bio: 'Sergio Fernández es la gran revelación de la élite masculina en 2026. Campeón nacional junior en 2025, ha dado el salto definitivo a la categoría absoluta con una primera temporada sensacional.',
    logros: [
      'Campeón de España Junior 2025',
      '2 victorias Copa de España 2026',
      'Récord de Aragón 500m y 1000m',
      'Mejor patinador junior RollerZone 2025'
    ]
  },
  {
    id: 'mr',
    n: 'Marco Rodríguez',
    ini: 'MR',
    gen: 'm',
    cat: 'elite',
    club: 'Athletic Patinaje Bilbao',
    pts: 987,
    edad: 31,
    ciudad: 'Bilbao',
    tit: 4,
    temp: 11,
    foto: '',
    bio: 'Marco Rodríguez es el decano de la élite nacional masculina. Con once temporadas y cuatro títulos de campeón de España, el bilbaíno sigue siendo uno de los patinadores más completos del país.',
    logros: [
      '4 veces campeón de España Absoluto',
      'Medallista Mundial 2021 (bronce)',
      'Capitán Selección Nacional 2022-2024',
      'Embajador del patinaje en el País Vasco'
    ]
  },
  {
    id: 'jl',
    n: 'Javier López',
    ini: 'JL',
    gen: 'm',
    cat: 'elite',
    club: 'CD Velocidad Madrid',
    pts: 876,
    edad: 28,
    ciudad: 'Madrid',
    tit: 2,
    temp: 8,
    foto: '',
    bio: 'Javier López es un habitual del podio nacional desde hace casi una década. El madrileño destaca especialmente en pruebas de fondo y maratón.',
    logros: [
      '2 veces subcampeón de España Absoluto',
      'Ganador Maratón de Donostia 2023',
      '5 podios Copa de España 2022-2025',
      'Seleccionado nacional en 4 Europeos'
    ]
  },

  /* ── CATEGORÍA ESTRELLA FEMENINA ── */
  {
    id: 'at',
    n: 'Ana Torres',
    ini: 'AT',
    gen: 'f',
    cat: 'estrella',
    club: 'Escola de Patinatge BCN',
    pts: 1092,
    edad: 19,
    ciudad: 'Barcelona',
    tit: 2,
    temp: 3,
    foto: '',
    bio: 'Ana Torres es la gran figura de la categoría Estrella femenina. Con solo 19 años, la barcelonesa ha batido varios récords regionales esta temporada.',
    logros: [
      'Campeona de España Estrella 2024 y 2025',
      'Récord de Cataluña sub-20 en 500m',
      'Convocada selección absoluta por primera vez',
      'N°1 ranking Estrella Femenina 2026'
    ]
  },
  {
    id: 'ps',
    n: 'Paula Sanz',
    ini: 'PS',
    gen: 'f',
    cat: 'estrella',
    club: 'Club Patín Zaragoza',
    pts: 945,
    edad: 20,
    ciudad: 'Zaragoza',
    tit: 1,
    temp: 3,
    foto: '',
    bio: 'Paula Sanz destaca por su potencia en las salidas y ha logrado su mejor temporada en 2026 con una constancia notable en todas las pruebas del circuito Estrella.',
    logros: [
      'Campeona de España Estrella 2025',
      '3 podios Copa de España Estrella 2026',
      'Récord de Aragón sub-21 1000m',
      'Premio revelación RollerZone 2025'
    ]
  },
  {
    id: 'nr',
    n: 'Nora Ruiz',
    ini: 'NR',
    gen: 'f',
    cat: 'estrella',
    club: 'Athletic Patinaje Bilbao',
    pts: 812,
    edad: 21,
    ciudad: 'Bilbao',
    tit: 0,
    temp: 3,
    foto: '',
    bio: 'Nora Ruiz representa el futuro del patinaje vasco. La bilbaína ha mejorado notablemente su rendimiento en velocidad pura.',
    logros: [
      'Subcampeona de España Estrella 2025',
      'Campeona del País Vasco sub-21 2024 y 2025',
      '2 podios Copa de España Estrella 2026',
      'Participante Campeonato de Europa Estrella 2025'
    ]
  },

  /* ── CATEGORÍA ESTRELLA MASCULINA ── */
  {
    id: 'dp',
    n: 'Diego Palma',
    ini: 'DP',
    gen: 'm',
    cat: 'estrella',
    club: 'CD Velocidad Asturias',
    pts: 1034,
    edad: 20,
    ciudad: 'Gijón',
    tit: 1,
    temp: 3,
    foto: '',
    bio: 'Diego Palma es el líder de la categoría Estrella masculina y el gran favorito a subir a la élite la próxima temporada.',
    logros: [
      'Campeón de España Estrella 2025',
      'Líder ranking Estrella Masculino 2026',
      'Récord de Asturias sub-21 500m',
      'Preseleccionado selección nacional 2026'
    ]
  },
  {
    id: 'rb',
    n: 'Raúl Blanco',
    ini: 'RB',
    gen: 'm',
    cat: 'estrella',
    club: 'CD Velocidad Madrid',
    pts: 878,
    edad: 21,
    ciudad: 'Madrid',
    tit: 0,
    temp: 2,
    foto: '',
    bio: 'Raúl Blanco ha sido la gran sorpresa del circuito Estrella masculino en 2026. El madrileño ha mejorado sus marcas personales en todas las distancias.',
    logros: [
      'Subcampeón de España Estrella 2025',
      '3 victorias parciales Copa España 2026',
      'Mejor marca personal 300m TT en 2026',
      'Nominado MVP Estrella Masculino RollerZone N°7'
    ]
  },
  {
    id: 'am',
    n: 'Álvaro Martín',
    ini: 'AM',
    gen: 'm',
    cat: 'estrella',
    club: 'Club Patinaje Sevilla',
    pts: 743,
    edad: 22,
    ciudad: 'Sevilla',
    tit: 0,
    temp: 2,
    foto: '',
    bio: 'Álvaro Martín es el referente del patinaje andaluz en la categoría Estrella. El sevillano ha traído aire fresco al sur de España.',
    logros: [
      'Top 5 ranking Estrella Masculino 2025 y 2026',
      'Campeón de Andalucía Estrella 2024 y 2025',
      '2 podios Copa de España Estrella 2026',
      'Embajador del patinaje en Andalucía'
    ]
  },

  /* ── CATEGORÍA PROMESA FEMENINA ── */
  {
    id: 'ms',
    n: 'Marta Soto',
    ini: 'MS',
    gen: 'f',
    cat: 'promesa',
    club: 'CD Velocidad Asturias',
    pts: 780,
    edad: 15,
    ciudad: 'Avilés',
    tit: 2,
    temp: 2,
    foto: '',
    bio: 'Marta Soto es la mayor promesa del patinaje femenino español en este momento. Con solo 15 años, la avilesina ya destaca en competiciones nacionales.',
    logros: [
      'Campeona de España Promesa 2024 y 2025',
      'Récord nacional Promesa Femenino 500m',
      'Convocada concentración selección sub-17',
      'Premio mejor promesa RollerZone N°7'
    ]
  },
  {
    id: 'lg',
    n: 'Laura Gil',
    ini: 'LG',
    gen: 'f',
    cat: 'promesa',
    club: 'Escola de Patinatge BCN',
    pts: 698,
    edad: 16,
    ciudad: 'Sabadell',
    tit: 1,
    temp: 2,
    foto: '',
    bio: 'Laura Gil compagina sus estudios con un régimen de entrenamiento muy exigente y ya ha demostrado su nivel en las principales pruebas nacionales.',
    logros: [
      'Campeona de Cataluña Promesa 2025',
      'Subcampeona de España Promesa 2025',
      '2 podios Copa de España Promesa 2026',
      'Seleccionada concentración nacional sub-17'
    ]
  },
  {
    id: 'ev',
    n: 'Elena Vidal',
    ini: 'EV',
    gen: 'f',
    cat: 'promesa',
    club: 'Athletic Patinaje Bilbao',
    pts: 614,
    edad: 14,
    ciudad: 'Barakaldo',
    tit: 0,
    temp: 1,
    foto: '',
    bio: 'Elena Vidal, con solo 14 años, ya aparece en el top 3 del ranking Promesa femenino en su primera temporada oficial.',
    logros: [
      'Top 3 ranking Promesa Femenino en 1ª temporada',
      'Campeona del País Vasco Promesa 2025',
      'Récord de Bizkaia sub-15 300m',
      'Talento destacado por RollerZone N°7'
    ]
  },

  /* ── CATEGORÍA PROMESA MASCULINA ── */
  {
    id: 'co',
    n: 'Carlos Ortega',
    ini: 'CO',
    gen: 'm',
    cat: 'promesa',
    club: 'Club Patín Zaragoza',
    pts: 856,
    edad: 16,
    ciudad: 'Zaragoza',
    tit: 2,
    temp: 2,
    foto: '',
    bio: 'Carlos Ortega sigue los pasos de su ídolo Sergio Fernández. El joven zaragozano ha dominado la categoría Promesa masculina con autoridad en 2026.',
    logros: [
      'Campeón de España Promesa 2024 y 2025',
      'Récord de Aragón Promesa 500m y 1000m',
      'Convocado selección sub-17 para Europa',
      'Mejor promesa masculino RollerZone N°7'
    ]
  },
  {
    id: 'hm',
    n: 'Hugo Medina',
    ini: 'HM',
    gen: 'm',
    cat: 'promesa',
    club: 'CD Velocidad Madrid',
    pts: 721,
    edad: 15,
    ciudad: 'Getafe',
    tit: 1,
    temp: 2,
    foto: '',
    bio: 'Hugo Medina, hijo de un ex patinador de élite, lleva el patinaje en la sangre. El getafeño ha demostrado en sus primeras temporadas un nivel excepcional.',
    logros: [
      'Campeón de la Comunidad de Madrid Promesa 2025',
      'Subcampeón de España Promesa 2025',
      '3 podios Copa de España Promesa 2026',
      'Sigue los pasos de su padre, ex élite nacional'
    ]
  },
  {
    id: 'pa',
    n: 'Pablo Arenas',
    ini: 'PA',
    gen: 'm',
    cat: 'promesa',
    club: 'Club Patinaje Sevilla',
    pts: 589,
    edad: 14,
    ciudad: 'Málaga',
    tit: 0,
    temp: 1,
    foto: '',
    bio: 'Pablo Arenas es la gran sorpresa del sur en la categoría Promesa masculina. El malagueño ha demostrado en su primera temporada un talento natural excepcional.',
    logros: [
      'Top 5 ranking Promesa Masculino en 1ª temporada',
      'Campeón de Andalucía Promesa 2025',
      'Récord de Málaga sub-15 300m TT',
      'Descubierto en el campeonato escolar regional 2024'
    ]
  }

]; /* ← NO borres este corchete y punto y coma */


/* ══════════════════════════════════════════════
   MOTOR DEL RANKING — No necesitas editar esto
   ══════════════════════════════════════════════ */
const CC = {
  elite:    { bg: '#f5a623', fg: '#1a1200' },
  estrella: { bg: '#534ab7', fg: '#fff'    },
  promesa:  { bg: '#1d9e75', fg: '#fff'    }
};
const CL = { elite: 'Elite', estrella: 'Estrella', promesa: 'Promesa' };
let selCat = 'todas', selGen = 'todos';

function renderRanking() {
  const cats = selCat === 'todas' ? ['elite','estrella','promesa'] : [selCat];
  const gens = selGen === 'todos' ? ['f','m'] : [selGen];
  let html = '';
  cats.forEach(cat => {
    gens.forEach(gen => {
      const rows = PLAYERS.filter(d => d.cat === cat && d.gen === gen).sort((a,b) => b.pts - a.pts);
      if (!rows.length) return;
      const cc = CC[cat];
      const gLabel = gen === 'f' ? 'Femenino' : 'Masculino';
      const gBg    = gen === 'f' ? '#993556'  : '#185fa5';
      html += `<div class="cat-block">
        <div class="cat-hd">
          <span class="cbadge" style="background:${cc.bg};color:${cc.fg}">${CL[cat]}</span>
          <span class="cbadge" style="background:${gBg};color:#fff">${gLabel}</span>
          <span class="ctitle">${CL[cat]} — ${gLabel}</span>
          <span class="ccount">${rows.length} patinadores</span>
        </div>
        <div class="tbl">
          <div class="tr hd">
            <span>#</span><span></span><span>Patinador/a</span><span>Club</span>
            <span style="text-align:right">Pts</span><span style="text-align:center">País</span>
          </div>`;
      rows.forEach((p, i) => {
        const rk = i === 0 ? 'r1' : i === 1 ? 'r2' : i === 2 ? 'r3' : 'rn';
        const avHtml = p.foto
          ? `<img src="${p.foto}" style="width:32px;height:32px;border-radius:50%;object-fit:cover">`
          : `<div class="av ${p.gen==='f'?'avf':'avm'}">${p.ini}</div>`;
        html += `<div class="tr" onclick="showPlayer('${p.id}')">
          <div><div class="rk ${rk}">${i+1}</div></div>
          <div>${avHtml}</div>
          <div><div class="pn">${p.n}</div><div class="pc">${p.ciudad}</div></div>
          <div class="pc">${p.club}</div>
          <div class="pts">${p.pts}</div>
          <div style="text-align:center;font-size:17px">🇪🇸</div>
        </div>`;
      });
      html += `</div></div>`;
    });
  });
  if (!html) html = `<div style="padding:2rem;text-align:center;color:var(--txt3);font-size:13px">No hay patinadores con estos filtros.</div>`;
  document.getElementById('rkwrap').innerHTML = html;
}

function showPlayer(id) {
  const p = PLAYERS.find(d => d.id === id);
  if (!p) return;
  showPage('pg-ranking');
  document.getElementById('pk-crumb').textContent = p.n;
  const cc     = CC[p.cat];
  const gLabel = p.gen === 'f' ? 'Femenino' : 'Masculino';
  const gBg    = p.gen === 'f' ? '#993556'  : '#185fa5';
  const fotoHtml = p.foto
    ? `<img src="${p.foto}" style="width:74px;height:74px;border-radius:50%;object-fit:cover;border:2px solid ${cc.bg}">`
    : `<div class="av-xl ${p.gen}" style="border-color:${cc.bg}">${p.ini}</div>`;

  document.getElementById('pk-content').innerHTML = `
    <div class="dhero"><div class="dhero-in">
      <span class="dtag" style="background:${cc.bg};color:${cc.fg}">${CL[p.cat]}</span>
      <span class="dtag" style="background:${gBg};color:#fff;margin-left:6px">${gLabel}</span>
      <h2>${p.n}</h2>
      <div class="dmeta">${p.club} · ${p.ciudad} · Temporada 2026</div>
    </div></div>
    <div class="dbody">
      <div class="prof-card">
        ${fotoHtml}
        <div class="pi">
          <h3>${p.n}</h3>
          <p>${p.club}</p>
          <p>${p.ciudad}, España · ${p.edad} años</p>
          <div class="ptags">
            <span class="ptag" style="background:${cc.bg};color:${cc.fg}">${CL[p.cat]}</span>
            <span class="ptag" style="background:${gBg};color:#fff">${gLabel}</span>
            <span class="ptag ptag-cl">${p.club}</span>
          </div>
        </div>
      </div>
      <div class="stats-g">
        <div class="sbox"><span class="sv">${p.pts}</span><span class="sl">Puntos MVP 2026</span></div>
        <div class="sbox"><span class="sv">${p.edad}</span><span class="sl">Edad</span></div>
        <div class="sbox"><span class="sv">${p.tit}</span><span class="sl">Títulos nacionales</span></div>
        <div class="sbox"><span class="sv">${p.temp}</span><span class="sl">Temporadas</span></div>
      </div>
      <div class="bio-box"><h4>Biografía</h4><p>${p.bio}</p></div>
      <div class="bio-box">
        <h4>Palmarés y logros</h4>
        <ul class="logros">${p.logros.map(l => `<li>${l}</li>`).join('')}</ul>
      </div>
    </div>`;
  window.scrollTo(0, 0);
}

document.getElementById('fg-cat').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('#fg-cat .pill').forEach(x => x.classList.remove('on'));
  b.classList.add('on'); selCat = b.dataset.cat; renderRanking();
});
document.getElementById('fg-gen').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('#fg-gen .pill').forEach(x => x.classList.remove('on'));
  b.classList.add('on'); selGen = b.dataset.gen; renderRanking();
});
