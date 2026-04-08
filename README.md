# RollerZone Spain — Web oficial

Web de noticias, ranking MVP, eventos, entrevistas y revistas de patinaje de velocidad.

---

## 📁 Estructura de archivos

```
rollerzone/
├── index.html          ← Página principal (HTML con comentarios de guía)
├── css/
│   └── styles.css      ← Todos los estilos visuales
├── js/
│   ├── ranking.js      ← Datos y lógica del Ranking MVP ← EDITA AQUÍ
│   ├── revistas.js     ← Datos y lógica de revistas     ← EDITA AQUÍ
│   └── app.js          ← Navegación y lógica general
└── img/                ← Carpeta de imágenes (créala tú)
    ├── patinadores/    ← Fotos de los patinadores
    ├── entrevistas/    ← Fotos para entrevistas
    ├── noticias/       ← Imágenes de noticias
    ├── revistas/       ← Portadas de las revistas
    └── sponsors/       ← Logos de patrocinadores
```

---

## 🖼️ CÓMO AÑADIR IMÁGENES

### 1. Crea las carpetas de imágenes
Dentro de la carpeta `rollerzone/`, crea la carpeta `img/` con subcarpetas:
```
img/patinadores/
img/entrevistas/
img/noticias/
img/revistas/
img/sponsors/
```

### 2. Sube las imágenes a GitHub
Arrastra los archivos de imagen directamente a la carpeta correspondiente en GitHub.
- Formatos recomendados: JPG o WebP
- Tamaño máximo recomendado: 500 KB por imagen
- Nombres sin espacios ni acentos: `lucia-mendez.jpg` ✓ `Lucía Méndez.jpg` ✗

### 3. Referencia las imágenes en el código

**Foto de un patinador** (en `js/ranking.js`):
```js
foto: 'img/patinadores/lucia-mendez.jpg',
```

**Portada de revista** (en `js/revistas.js`):
```js
portada: 'img/revistas/rz7.jpg',
```

**Foto en entrevista** (en `index.html`):
```html
<!-- Busca el comentario: Para poner imagen real -->
<!-- Sustituye el div.av-xl por: -->
<img src="img/entrevistas/lucia-mendez.jpg" style="width:100%;height:100%;object-fit:cover">
```

**Imagen en noticia** (en `index.html`):
```html
<!-- Dentro del div.news-img, sustituye el div.nicon por: -->
<img src="img/noticias/europa2026.jpg" style="width:100%;height:100%;object-fit:cover">
```

**Logo de patrocinador** (en `index.html`):
```html
<!-- Dentro del div.spon-logo, sustituye el texto por: -->
<img src="img/sponsors/speed-skates-pro.png" style="width:46px;height:46px;object-fit:contain">
```

---

## ✏️ CÓMO EDITAR CONTENIDO

### Añadir/editar una NOTICIA
Abre `index.html` y busca `SECCIÓN NOTICIAS`.

**Noticia destacada** — edita el `onclick` del primer `div.card`:
```html
onclick="det('noticia',
  'TÍTULO DE LA NOTICIA',
  'Nacional',           ← o 'Internacional'
  'Fecha (ej: 8 Abril 2026)',
  'Texto completo del artículo aquí...',
  'Autor de la noticia')"
```

**Noticia mini** — copia un `div.mini` y edita su `onclick` igual que arriba.

---

### Añadir/editar un EVENTO
Abre `index.html` y busca `SECCIÓN EVENTOS`.

Copia un `div.ev` completo y edita:
```html
<div class="ev" onclick="det('evento','NOMBRE DEL EVENTO','Nacional','FECHA','DESCRIPCIÓN COMPLETA','')">
  <div class="ev-date">
    <span class="ev-day">19</span>    ← día
    <span class="ev-mon">Abr</span>  ← mes abreviado
  </div>
  <h4>Nombre del evento</h4>
  <p>Lugar, Ciudad</p>
  <span class="badge-nat">Nacional</span>  ← o badge-int para Internacional
</div>
```

Para **eliminar** un evento: borra el `div.ev` completo.

---

### Añadir/editar un PATINADOR del ranking
Abre `js/ranking.js` y añade un bloque al array `PLAYERS`:

```js
{
  id: 'nuevo-id',           // único, sin espacios
  n: 'Nombre Apellido',
  ini: 'NA',                // 2 iniciales
  gen: 'f',                 // 'f' femenino / 'm' masculino
  cat: 'elite',             // 'elite' / 'estrella' / 'promesa'
  club: 'Nombre del Club',
  pts: 1000,                // puntos MVP
  edad: 25,
  ciudad: 'Ciudad',
  tit: 2,                   // títulos nacionales
  temp: 4,                  // temporadas en activo
  foto: '',                 // 'img/patinadores/nombre.jpg' o ''
  bio: 'Texto biográfico...',
  logros: [
    'Logro 1',
    'Logro 2',
    'Logro 3'
  ]
},
```

Para **editar puntos**: cambia solo el número en `pts: 1240`.

---

### Añadir una nueva REVISTA
Abre `js/revistas.js` y añade un bloque al array `MAGS`:

```js
{
  n: 8,                             // número siguiente
  year: '2026',
  theme: 'Tema del número',
  portada: 'img/revistas/rz8.jpg', // o '' si no tienes imagen aún
  precio: '4.99',
  linkPDF: 'https://tu-tienda.com/rz8',  // enlace de compra
  sumario: 'Artículo 1 · Artículo 2 · Artículo 3 · Entrevista...',
  current: true   // ← pon false en el N°7 anterior y true aquí
},
```

---

### Añadir una ENTREVISTA
Abre `index.html`, busca `SECCIÓN ENTREVISTAS` y copia un `div.card`:

```html
<div class="card" onclick="det('entrevista',
  'Título de la entrevista',
  'Tipo · Nombre Persona',
  'Club o cargo',
  'Texto completo de la entrevista...',
  'XX')">                           ← 2 iniciales del avatar
  <div class="iphoto">
    <img src="img/entrevistas/foto.jpg" style="width:100%;height:100%;object-fit:cover">
    <div class="iphoto-cap"><p>Nombre — Cargo</p></div>
  </div>
  <div class="ibody">
    <h4>Frase destacada de la entrevista</h4>
    <p>Resumen breve.</p>
    <span class="itag">Patinador/a</span>  ← o Entrenador, Club
  </div>
</div>
```

---

### Añadir un CLUB
Abre `index.html`, busca `SECCIÓN CLUBS` y copia un `div.club`:

```html
<div class="club" onclick="det('club',
  'Nombre del Club',
  'Ciudad, Comunidad · Fundado XXXX',
  'XX patinadores · X títulos nacionales',
  'Descripción del club...',
  'XX')">                           ← 2 iniciales
  <div class="clav">XX</div>
  <h4>Nombre del Club</h4>
  <p>Ciudad, Comunidad · XXXX</p>
  <small>XX patinadores · X títulos</small>
</div>
```

---

### Añadir un PATROCINADOR
Abre `index.html`, busca `SECCIÓN PATROCINADORES` y copia un `div.spon`:

```html
<div class="spon" onclick="det('sponsor',
  'Nombre de la Marca',
  'Tipo de patrocinio',
  'Descripción corta',
  'Texto completo sobre el patrocinador...',
  'XX')">                           ← 2 iniciales o logo
  <div class="spon-logo">
    <img src="img/sponsors/marca.png" style="width:46px;height:46px;object-fit:contain">
  </div>
  <p>Nombre de la Marca</p>
</div>
```

---

### Editar el TICKER (barra de noticias rápidas)
Abre `index.html` y busca `TICKER DE NOTICIAS`.
Edita el texto dentro del `<span id="ticker-content">`.
Añade noticias con el formato: `★ Texto nuevo &nbsp;`

---

## 🚀 CÓMO SUBIR A GITHUB PAGES (hosting gratuito)

### Primera vez:
1. Ve a [github.com](https://github.com) y crea una cuenta si no tienes
2. Crea un repositorio nuevo → botón **"New"**
3. Nombre sugerido: `rollerzone-spain`
4. Visibilidad: **Public** (necesario para GitHub Pages gratis)
5. Haz clic en **"Create repository"**

### Subir los archivos:
**Opción A — Desde el navegador (más fácil):**
1. En tu repositorio, haz clic en **"Add file" → "Upload files"**
2. Arrastra toda la carpeta `rollerzone/` 
3. Escribe un mensaje: `"Primera versión de la web"`
4. Clic en **"Commit changes"**

**Opción B — Con GitHub Desktop (recomendado para actualizaciones frecuentes):**
1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. Clona tu repositorio
3. Copia los archivos a la carpeta del repositorio
4. Commit y Push desde la app

### Activar GitHub Pages:
1. Ve a tu repositorio → **Settings** (arriba a la derecha)
2. En el menú izquierdo: **Pages**
3. En "Source" selecciona: **Deploy from a branch**
4. Branch: **main** · Folder: **/ (root)**
5. Clic en **Save**
6. En 2-3 minutos tu web estará en:
   `https://TU-USUARIO.github.io/rollerzone-spain/`

### Para actualizar la web después:
1. Edita el archivo en tu ordenador
2. Sube el archivo editado a GitHub (reemplaza el anterior)
3. GitHub Pages se actualiza solo en 1-2 minutos

---

## 🎨 CAMBIAR COLORES

Abre `css/styles.css` y busca la sección `:root` al principio:

```css
:root {
  --acc:  #f5a623;  ← Color naranja/dorado principal
  --acc2: #e8891a;  ← Naranja más oscuro (hover)
  --bg:   #1e1e1e;  ← Fondo gris oscuro
  --bg2:  #272727;  ← Fondo tarjetas
  --txt:  #f0ece4;  ← Texto principal
}
```

Cambia el valor hexadecimal para cambiar el color en toda la web.

---

## 📞 Soporte
Si tienes dudas sobre editar la web, puedes pedir ayuda a Claude en claude.ai
explicando qué sección quieres modificar y pegando el código actual.
