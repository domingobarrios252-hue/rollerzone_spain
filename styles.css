/* ═══════════════════════════════════════════
   ROLLERZONE SPAIN — Estilos principales
   
   COLORES MARCA:
   --acc  : #f5a623  → Amarillo/naranja principal
   --bg   : #1e1e1e  → Fondo gris oscuro
   --bg2  : #272727  → Tarjetas
   --txt  : #f0ece4  → Texto claro
   
   Para cambiar el color principal busca --acc y --acc2
   ═══════════════════════════════════════════ */

:root {
  --bg:   #1e1e1e;
  --bg2:  #272727;
  --bg3:  #2f2f2f;
  --bg4:  #383030;
  --acc:  #f5a623;
  --acc2: #e8891a;
  --acd:  #3a2800;
  --txt:  #f0ece4;
  --txt2: #b0a99a;
  --txt3: #6e6860;
  --brd:  #383530;
  --brd2: #4a4540;
  --fem:  #993556;
  --masc: #185fa5;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: var(--bg);
  color: var(--txt);
  line-height: 1.5;
}

/* ── NAVEGACIÓN ─────────────────────────── */
.nav {
  background: #161616;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  border-bottom: 1px solid var(--brd);
  position: sticky;
  top: 0;
  z-index: 100;
}
.logo { display: flex; align-items: center; gap: 9px; cursor: pointer; }
.lbox {
  width: 34px; height: 34px;
  background: var(--acc);
  border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 600; font-size: 12px; color: #1a1200;
}
.ltxt { color: var(--txt); font-size: 16px; font-weight: 500; }
.ltxt em { color: var(--acc); font-style: normal; }

.nav-links { display: flex; gap: 1rem; flex-wrap: wrap; }
.nav-links a {
  color: var(--txt2);
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: color .15s;
  white-space: nowrap;
  padding: 3px 0;
  border-bottom: 2px solid transparent;
}
.nav-links a:hover { color: var(--acc); border-bottom-color: var(--acc); }

/* ── TICKER ─────────────────────────────── */
.ticker {
  background: var(--acc);
  color: #1a1200;
  padding: 7px 0;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 500;
}
.ticker span { display: inline-block; animation: scroll 38s linear infinite; }
@keyframes scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

/* ── HERO ────────────────────────────────── */
.hero-band {
  background: #161616;
  padding: 2.25rem 1.25rem;
  border-bottom: 1px solid var(--brd);
}
.hero-band h1 { font-size: 28px; font-weight: 500; color: var(--txt); line-height: 1.2; }
.hero-band h1 em { color: var(--acc); font-style: normal; }
.hero-band p { font-size: 13px; color: var(--txt3); margin-top: 5px; }

/* ── SECCIONES ───────────────────────────── */
.sec { padding: 1.75rem 1.25rem; max-width: 1000px; margin: 0 auto; }
.sh {
  display: flex; align-items: center; gap: 9px;
  margin-bottom: 1.1rem;
  padding-bottom: .55rem;
  border-bottom: 1px solid var(--brd);
}
.stag {
  background: var(--acc); color: #1a1200;
  font-size: 10px; font-weight: 500;
  padding: 2px 8px; border-radius: 4px;
  text-transform: uppercase; letter-spacing: .06em;
}
.stitle { font-size: 17px; font-weight: 500; color: var(--txt); }
.divider { height: 1px; background: var(--brd); margin: 0 1.25rem; }

/* ── TARJETAS GENÉRICAS ──────────────────── */
.card {
  background: var(--bg2);
  border: 1px solid var(--brd);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color .15s;
}
.card:hover { border-color: var(--acc); }

/* ── PILLS / FILTROS ─────────────────────── */
.pill {
  padding: 5px 13px;
  border: 1px solid var(--brd2);
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  background: transparent;
  color: var(--txt2);
  transition: all .15s;
  white-space: nowrap;
}
.pill:hover { border-color: var(--acc); color: var(--acc); }
.pill.on { background: var(--acc); color: #1a1200; border-color: var(--acc); font-weight: 500; }
.pill.fem.on  { background: var(--fem);  color: #fff; border-color: var(--fem); }
.pill.masc.on { background: var(--masc); color: #fff; border-color: var(--masc); }

/* ── BADGES ──────────────────────────────── */
.badge-int { background: var(--acc); color: #1a1200; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: 500; }
.badge-nat { background: var(--acd); color: var(--acc); border: 1px solid #5a3d00; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: 500; }

/* ── NOTICIAS ────────────────────────────── */
.news-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 1.1rem; }
.news-img {
  height: 175px; background: #222;
  display: flex; align-items: center; justify-content: center;
  position: relative; border-bottom: 1px solid var(--brd);
  overflow: hidden;
}
.news-img img { width: 100%; height: 100%; object-fit: cover; }
.abs { position: absolute; top: 10px; left: 10px; }
.nicon { font-size: 40px; opacity: .15; color: var(--acc); }
.nbody { padding: .9rem; }
.nbody h3 { font-size: 13.5px; font-weight: 500; color: var(--txt); line-height: 1.4; margin-bottom: 5px; }
.nbody p  { font-size: 12px; color: var(--txt2); line-height: 1.55; }
.nmeta    { font-size: 11px; color: var(--txt3); margin-top: 7px; }
.nsidebar { display: flex; flex-direction: column; gap: .85rem; }
.mini {
  background: var(--bg2); border: 1px solid var(--brd);
  border-radius: 10px; padding: .9rem;
  cursor: pointer; transition: border-color .15s;
}
.mini:hover { border-color: var(--acc); }
.mini h4 { font-size: 12.5px; font-weight: 500; color: var(--txt); line-height: 1.4; margin-bottom: 3px; }
.mini p  { font-size: 11px; color: var(--txt3); }

/* ── EVENTOS ─────────────────────────────── */
.ev-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: .9rem; }
.ev {
  background: var(--bg2); border: 1px solid var(--brd);
  border-radius: 10px; padding: 1rem;
  cursor: pointer; transition: border-color .15s;
}
.ev:hover { border-color: var(--acc); }
.ev-date {
  width: 46px; height: 50px; background: var(--acc);
  border-radius: 7px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  margin-bottom: 9px;
}
.ev-day { font-size: 19px; font-weight: 500; color: #1a1200; line-height: 1; }
.ev-mon { font-size: 9px; text-transform: uppercase; color: #1a1200; letter-spacing: .05em; }
.ev h4  { font-size: 13px; font-weight: 500; color: var(--txt); margin-bottom: 3px; }
.ev p   { font-size: 11.5px; color: var(--txt2); }

/* ── RANKING ─────────────────────────────── */
.fbar {
  padding: 1rem 1.25rem;
  background: var(--bg2);
  border-bottom: 1px solid var(--brd);
  display: flex; flex-wrap: wrap; gap: 9px; align-items: center;
}
.flbl  { font-size: 11px; color: var(--txt3); align-self: center; white-space: nowrap; }
.fsep  { width: 1px; height: 26px; background: var(--brd2); align-self: center; }
.cat-block { padding: 1.25rem; border-bottom: 1px solid var(--brd); }
.cat-block:last-child { border-bottom: none; }
.cat-hd { display: flex; align-items: center; gap: 8px; margin-bottom: .9rem; }
.cbadge { font-size: 10px; font-weight: 500; padding: 2px 9px; border-radius: 4px; text-transform: uppercase; letter-spacing: .05em; }
.ctitle { font-size: 15px; font-weight: 500; color: var(--txt); }
.ccount { font-size: 11.5px; color: var(--txt3); margin-left: auto; }
.tbl { background: var(--bg3); border: 1px solid var(--brd); border-radius: 9px; overflow: hidden; }
.tr {
  display: grid; align-items: center;
  padding: 9px 1rem; border-bottom: 1px solid var(--brd);
  cursor: pointer; transition: background .12s; gap: 9px;
  grid-template-columns: 30px 34px 1fr 1fr 75px 46px;
}
.tr:last-child { border-bottom: none; }
.tr:hover { background: var(--bg4); }
.tr.hd { background: var(--bg4); cursor: default; }
.tr.hd:hover { background: var(--bg4); }
.tr.hd span { font-size: 10px; color: var(--txt3); font-weight: 500; text-transform: uppercase; letter-spacing: .04em; }
.rk { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 500; flex-shrink: 0; }
.r1 { background: var(--acc); color: #1a1200; }
.r2 { background: #888; color: #fff; }
.r3 { background: #7a5c3a; color: #f5e6d0; }
.rn { background: var(--bg); color: var(--txt2); }
.av { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11.5px; font-weight: 500; flex-shrink: 0; }
.avf { background: #4b1528; color: #ed93b1; }
.avm { background: #042c53; color: #85b7eb; }
.pn  { font-size: 13px; font-weight: 500; color: var(--txt); }
.pc  { font-size: 11px; color: var(--txt2); }
.pts { font-size: 13.5px; font-weight: 500; color: var(--acc); text-align: right; }

/* ── ENTREVISTAS ─────────────────────────── */
.int-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; }
.iphoto {
  height: 148px; background: #222;
  display: flex; align-items: center; justify-content: center;
  position: relative; border-bottom: 1px solid var(--brd);
  overflow: hidden;
}
.iphoto img { width: 100%; height: 100%; object-fit: cover; }
.iphoto-cap { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,.7); padding: 5px 9px; }
.iphoto-cap p { color: var(--txt); font-size: 11px; font-weight: 500; }
.ibody { padding: .9rem; }
.ibody h4 { font-size: 13px; font-weight: 500; color: var(--txt); line-height: 1.4; margin-bottom: 4px; }
.ibody p  { font-size: 11.5px; color: var(--txt2); line-height: 1.5; }
.itag { font-size: 10px; padding: 2px 8px; border-radius: 4px; margin-top: 7px; display: inline-block; font-weight: 500; background: var(--acd); color: var(--acc); }

/* ── REVISTAS ────────────────────────────── */
.mag-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: .9rem; }
.mag { background: var(--bg2); border: 1px solid var(--brd); border-radius: 10px; overflow: hidden; cursor: pointer; transition: border-color .15s; text-align: center; }
.mag:hover { border-color: var(--acc); }
.mcov { height: 185px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; position: relative; background: #1a1200; overflow: hidden; }
.mcov img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; }
.mcov .ml { font-size: 9px; color: rgba(255,255,255,.6); text-transform: uppercase; letter-spacing: .1em; position: relative; }
.mcov .mn { font-size: 28px; font-weight: 500; color: #fff; position: relative; }
.mcov .my { font-size: 9.5px; color: rgba(255,255,255,.55); position: relative; }
.mnew { position: absolute; top: 7px; right: 7px; background: var(--acc); color: #1a1200; font-size: 9px; font-weight: 500; padding: 2px 7px; border-radius: 10px; z-index: 1; }
.minfo { padding: 7px 9px; border-bottom: 1px solid var(--brd); }
.minfo h5 { font-size: 12px; font-weight: 500; color: var(--txt); }
.minfo p  { font-size: 10.5px; color: var(--txt3); }
.mbtns { display: flex; gap: 4px; padding: 7px; }
.bts { flex: 1; font-size: 10.5px; padding: 5px 2px; border: 1px solid var(--brd2); border-radius: 6px; cursor: pointer; background: transparent; color: var(--txt2); transition: all .15s; }
.bts:hover { border-color: var(--acc); color: var(--acc); }
.btbuy { background: var(--acc); color: #1a1200; border-color: var(--acc); font-weight: 500; }
.btbuy:hover { background: var(--acc2); }

/* ── CLUBS ───────────────────────────────── */
.clubs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: .9rem; }
.club { background: var(--bg2); border: 1px solid var(--brd); border-radius: 10px; padding: 1rem; cursor: pointer; transition: border-color .15s; }
.club:hover { border-color: var(--acc); }
.clav { width: 40px; height: 40px; border-radius: 50%; background: var(--acd); display: flex; align-items: center; justify-content: center; font-size: 12.5px; font-weight: 500; color: var(--acc); margin-bottom: 7px; }
.club h4 { font-size: 13px; font-weight: 500; color: var(--txt); margin-bottom: 3px; }
.club p  { font-size: 11.5px; color: var(--txt2); }
.club small { font-size: 10.5px; color: var(--txt3); }

/* ── PATROCINADORES ──────────────────────── */
.spon-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: .9rem; }
.spon {
  background: var(--bg2); border: 1px solid var(--brd);
  border-radius: 10px; padding: 1rem;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-height: 90px; cursor: pointer; transition: border-color .15s; gap: 7px;
}
.spon:hover { border-color: var(--acc); }
.spon-logo {
  width: 46px; height: 46px; border-radius: 8px;
  background: var(--acd);
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 500; color: var(--acc);
  overflow: hidden;
}
.spon-logo img { width: 100%; height: 100%; object-fit: contain; }
.spon p { font-size: 11px; color: var(--txt2); text-align: center; }

/* ── FOOTER ──────────────────────────────── */
.footer { background: #161616; color: var(--txt3); text-align: center; padding: 1.5rem; font-size: 12px; border-top: 1px solid var(--brd); margin-top: 2rem; }
.footer strong { color: var(--acc); }

/* ── PÁGINAS DETALLE ─────────────────────── */
.dpage { background: var(--bg); min-height: 100vh; }
.dnavbar { background: #161616; padding: 0 1.25rem; display: flex; align-items: center; justify-content: space-between; height: 56px; border-bottom: 1px solid var(--brd); position: sticky; top: 0; z-index: 100; }
.dback { background: var(--acd); color: var(--acc); border: 1px solid var(--brd2); border-radius: 6px; padding: 4px 12px; font-size: 12px; cursor: pointer; transition: all .15s; }
.dback:hover { background: var(--acc); color: #1a1200; }
.dcrumb-bar { padding: .85rem 1.25rem; background: var(--bg2); border-bottom: 1px solid var(--brd); }
.dcrumb { font-size: 11.5px; color: var(--txt3); }
.dcrumb em { color: var(--acc); font-style: normal; }
.dhero { background: #161616; padding: 1.4rem 1.25rem; border-bottom: 1px solid var(--brd); }
.dhero-in { max-width: 900px; margin: 0 auto; }
.dtag { display: inline-block; font-size: 10px; font-weight: 500; padding: 2px 9px; border-radius: 4px; margin-bottom: 9px; text-transform: uppercase; letter-spacing: .06em; }
.dhero h2 { font-size: 21px; font-weight: 500; color: var(--txt); line-height: 1.3; }
.dhero .dmeta { font-size: 12px; color: var(--txt3); margin-top: 5px; }
.dbody { max-width: 900px; margin: 0 auto; padding: 1.4rem 1.25rem; }
.prof-card { background: var(--bg2); border: 1px solid var(--brd); border-radius: 11px; padding: 1.25rem; display: flex; gap: 1.1rem; align-items: flex-start; margin-bottom: 1.25rem; flex-wrap: wrap; }
.av-xl { width: 74px; height: 74px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 500; flex-shrink: 0; border: 2px solid var(--acc); overflow: hidden; }
.av-xl img { width: 100%; height: 100%; object-fit: cover; }
.av-xl.f { background: #4b1528; color: #ed93b1; }
.av-xl.m { background: #042c53; color: #85b7eb; }
.pi h3  { font-size: 19px; font-weight: 500; color: var(--txt); margin-bottom: 4px; }
.pi p   { font-size: 12.5px; color: var(--txt2); margin-top: 2px; }
.ptags  { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px; }
.ptag   { font-size: 10.5px; padding: 2px 8px; border-radius: 4px; font-weight: 500; }
.ptag-cl { background: var(--bg3); color: var(--txt2); border: 1px solid var(--brd2); }
.stats-g { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: .75rem; margin-bottom: 1.25rem; }
.sbox { background: var(--bg2); border: 1px solid var(--brd); border-radius: 8px; padding: .9rem; text-align: center; }
.sv { font-size: 21px; font-weight: 500; color: var(--acc); display: block; }
.sl { font-size: 11px; color: var(--txt3); margin-top: 2px; display: block; }
.bio-box { background: var(--bg2); border: 1px solid var(--brd); border-radius: 10px; padding: 1.1rem; margin-bottom: 1rem; }
.bio-box h4 { font-size: 12.5px; font-weight: 500; color: var(--acc); margin-bottom: .55rem; }
.bio-box p  { font-size: 13px; color: var(--txt2); line-height: 1.75; }
.logros { list-style: none; display: flex; flex-direction: column; gap: 5px; margin-top: .4rem; }
.logros li { font-size: 12.5px; color: var(--txt2); padding-left: 13px; position: relative; }
.logros li::before { content: '›'; position: absolute; left: 0; color: var(--acc); }
.det-img { background: var(--bg2); border: 1px solid var(--brd); border-radius: 10px; height: 190px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem; overflow: hidden; }
.det-img img { width: 100%; height: 100%; object-fit: cover; }
.det-ico { font-size: 44px; opacity: .14; color: var(--acc); }
.det-txt { font-size: 13.5px; color: var(--txt2); line-height: 1.8; margin-bottom: 1rem; }
.det-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: .75rem; margin-top: 1.25rem; }
.mag-dcov { height: 240px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; border-radius: 10px; margin-bottom: 1.25rem; border: 1px solid var(--brd); overflow: hidden; position: relative; background: #1a1200; }
.mag-dcov img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; }
.mag-dcov .mn { font-size: 48px; font-weight: 500; color: #fff; position: relative; }
.mag-dcov .ml { font-size: 10px; color: rgba(255,255,255,.6); text-transform: uppercase; letter-spacing: .1em; position: relative; }
.buy-blk { background: var(--bg2); border: 1px solid var(--brd); border-radius: 10px; padding: 1.1rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-top: 1.25rem; }
.buy-blk p     { font-size: 13.5px; color: var(--txt); }
.buy-blk small { font-size: 11.5px; color: var(--txt3); display: block; margin-top: 2px; }
.buy-btn { background: var(--acc); color: #1a1200; border: none; border-radius: 7px; padding: 9px 20px; font-size: 13.5px; font-weight: 500; cursor: pointer; transition: background .15s; }
.buy-btn:hover { background: var(--acc2); }

/* ── RESPONSIVE ──────────────────────────── */
@media (max-width: 680px) {
  .news-grid { grid-template-columns: 1fr; }
  .nav-links { gap: .6rem; }
  .nav-links a { font-size: 11px; }
  .tr { grid-template-columns: 28px 32px 1fr 70px; }
  .tr .col-club, .tr span:nth-child(4) { display: none; }
}
