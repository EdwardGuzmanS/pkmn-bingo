# 🔴 Pokémon HeartGold — Bingo Challenge

> Un reto entre amigos basado en **Pokémon HeartGold** con tablero de bingo interactivo, ranking en tiempo real y sistema de premios.

---

## ¿De qué trata?

Cuatro amigos juegan **Pokémon HeartGold** de forma paralela e independiente, cada uno en su emulador (melonDS / Delta para iOS). El objetivo es completar 25 tareas distribuidas en un tablero de Bingo 5×5 — desde atrapar un shiny salvaje hasta vencer a Red en la cima del Monte Plata.

El primero en completar más líneas y tareas gana. Hay premios para el top 3 y un castigo para el último.

---

## ✨ Features

- **Tablero BINGO interactivo** — casillas marcables con detección automática de líneas completadas
- **Sincronización en tiempo real** — todos los jugadores ven el avance de los demás al instante gracias a Firebase Firestore
- **Login por apodo** — sin cuentas ni contraseñas, solo escribes tu nombre de entrenador
- **Ranking en vivo** — pódium y tabla ordenada por puntos y BINGOs
- **Sistema de puntuación** — puntos base, bonos especiales y penalizaciones
- **Handicap** — el jugador más avanzado arranca con restricciones para equilibrar el reto
- **Reglas y premios** — todo documentado en el sitio

---

## 🗺️ Páginas

| Página | Descripción |
|--------|-------------|
| `/` | Login por apodo + lista de entrenadores activos |
| `/pages/bingo.html` | Tablero personal + vista del progreso de otros |
| `/pages/ranking.html` | Pódium y tabla de posiciones en tiempo real |
| `/pages/rules.html` | Reglamento completo + handicap + puntuación |
| `/pages/prizes.html` | Premios para top 3 y castigos para el último |

---

## 🏆 Las 25 tareas del reto

| Categoría | Ejemplos |
|-----------|---------|
| ✨ Shiny | Atrapar un Pokémon shiny salvaje |
| 🏆 Liga | Vencer los 8 líderes de Johto · Completar la Elite Four · Vencer a Red |
| 🐲 Legendarios | Atrapar los 3 perros legendarios · Los 4 pseudolegendarios |
| 📖 Historia | Despertar a Snorlax · Obtener el Dratini en Ciudad Endrino |
| 🌿 Pokédex | Completar la Pokédex de Johto · Pokédex Nacional (251+) |
| 🎰 Especial | MT Rayo en el Casino · 30 pts en la Tarjeta Azul de Buena |

---

## 🛠️ Stack

- **Frontend** — HTML, CSS y JavaScript vanilla
- **Base de datos** — Firebase Firestore (tiempo real)
- **Hosting** — GitHub Pages
- **Fuentes** — Press Start 2P · VT323 (Google Fonts)

---

## 📁 Estructura

```
pkmn-bingo/
├── index.html          ← Login
├── css/
│   └── shared.css      ← Estilos compartidos
├── js/
│   └── firebase-config.js
└── pages/
    ├── bingo.html
    ├── ranking.html
    ├── rules.html
    └── prizes.html
```

---

*Pokémon HeartGold Bingo Challenge · 2025 · 4 jugadores*