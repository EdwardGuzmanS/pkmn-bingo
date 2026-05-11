# 🎮 Pokémon HeartGold Bingo Challenge

Sitio web del reto Bingo entre amigos. Incluye tablero interactivo, ranking en tiempo real, reglas y premios.

---

## 🚀 Cómo publicar en GitHub Pages

### Paso 1 — Crear el repositorio
1. Ve a [github.com](https://github.com) e inicia sesión
2. Clic en **New repository** (botón verde arriba a la derecha)
3. Nómbralo: `heartgold-bingo`
4. Márcalo como **Public**
5. Clic en **Create repository**

### Paso 2 — Subir los archivos
1. En la página del repo recién creado, clic en **uploading an existing file**
2. Arrastra TODOS los archivos y carpetas de este proyecto
3. Escribe un mensaje tipo: `Primer commit - sitio del bingo`
4. Clic en **Commit changes**

### Paso 3 — Activar GitHub Pages
1. Ve a **Settings** (pestaña del repo)
2. En el menú izquierdo, clic en **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. En **Branch**, elige `main` y carpeta `/ (root)`
5. Clic en **Save**

### Paso 4 — Esperar y acceder
- GitHub tarda 1-2 minutos en publicar
- Tu sitio quedará en: `https://EdwardGuzmanS.github.io/heartgold-bingo`
- ¡Comparte ese link con tus amigos!

---

## 🔥 Configurar Firebase (base de datos)

### Paso 1 — Reglas de Firestore
1. Ve a [console.firebase.google.com](https://console.firebase.google.com)
2. Selecciona tu proyecto `pkmn-heartgold`
3. En el menú izquierdo: **Firestore Database** → **Rules**
4. Reemplaza todo el contenido con esto:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /players/{playerId} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

5. Clic en **Publish**

> ⚠️ Estas reglas permiten lectura y escritura libre. Está bien para un grupo de amigos de confianza.

---

## 📁 Estructura del proyecto

```
heartgold-bingo/
├── index.html          ← Página de inicio (login por apodo)
├── css/
│   └── shared.css      ← Estilos compartidos
├── js/
│   └── firebase-config.js  ← Config de Firebase (referencia)
└── pages/
    ├── bingo.html      ← Tablero interactivo
    ├── ranking.html    ← Ranking en tiempo real
    ├── rules.html      ← Reglas del reto
    └── prizes.html     ← Premios y castigos
```

---

## 🎮 Cómo usarlo

1. Cada jugador entra al link y escribe su apodo
2. Si es la primera vez, crea su perfil automáticamente en Firebase
3. Marca las tareas completadas en el tablero
4. Los cambios se guardan en tiempo real — todos los demás lo ven al instante
5. El ranking se actualiza automáticamente

---

## 👥 Jugadores del reto
- Jugador 1
- Jugador 2  
- Jugador 3
- Jugador 4 ⚡ (handicap)

---

*Pokémon HeartGold Bingo Challenge 2025*
