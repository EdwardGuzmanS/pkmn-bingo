// Firebase shared config — used by all pages
export const firebaseConfig = {
  apiKey: "AIzaSyBSOal28NySNl8WwIXXgE4rL0l4EsDVXl8",
  authDomain: "pkmn-heartgold.firebaseapp.com",
  projectId: "pkmn-heartgold",
  storageBucket: "pkmn-heartgold.firebasestorage.app",
  messagingSenderId: "100911488175",
  appId: "1:100911488175:web:7b9798872692ced629885a"
};

export const TASKS = [
  { icon: "✨", text: "Atrapa un Pokémon shiny salvaje", cat: "Shiny", shiny: true },
  { icon: "🏆", text: "Vence a los 8 líderes de Johto", cat: "Liga" },
  { icon: "🥚", text: "Obtén tu primer huevo en el Guardería", cat: "Crianza" },
  { icon: "💰", text: "Acumula ₽99,999 en dinero", cat: "Coleccionista" },
  { icon: "🌊", text: "Completa la ruta de surf hasta Isla Canela", cat: "Exploración" },
  { icon: "🦊", text: "Evoluciona a tu Pokémon inicial", cat: "Evolución" },
  { icon: "📱", text: "Intercambia números con 10 entrenadores", cat: "Social" },
  { icon: "🎰", text: "Consigue la MT Rayo en el Casino de Ciudad Trigal", cat: "Especial" },
  { icon: "🍃", text: "Derrota a un entrenador solo con el starter", cat: "Reto" },
  { icon: "🌙", text: "Atrapa un Pokémon en la Torre Oculta", cat: "Especial" },
  { icon: "🌿", text: "Completa la Pokédex de Johto (160)", cat: "Pokédex" },
  { icon: "🎵", text: "Usa el PokeFlute para despertar a Snorlax", cat: "Historia" },
  { free: true, icon: "❤️", text: "CASILLA LIBRE", cat: "FREE" },
  { icon: "🏅", text: "Completa la Liga Pokémon (E4 + Campeón)", cat: "Liga" },
  { icon: "🌺", text: "Atrapa los 3 perros legendarios", cat: "Legendario" },
  { icon: "🎒", text: "Llena tu caja PC con 50 Pokémon", cat: "Coleccionista" },
  { icon: "🤝", text: "Vence a tu rival 3 veces", cat: "Rival" },
  { icon: "💊", text: "Usa 20 Pociones en una partida", cat: "Supervivencia" },
  { icon: "🐉", text: "Obtén el obsequio del Dratini en Ciudad Endrino", cat: "Historia" },
  { icon: "🏄", text: "Aprende Corte, Surf, Vuelo, Fuerza y Cascada", cat: "MO" },
  { icon: "🔴", text: "Vence a Red en la cima del Monte Plata", cat: "Endgame" },
  { icon: "🃏", text: "Consigue 30 puntos en la Tarjeta Azul del programa de Buena", cat: "Especial" },
  { icon: "🐲", text: "Atrapa los 4 pseudolegendarios: Dragonite, Tyranitar, Salamence y Metagross", cat: "Coleccionista" },
  { icon: "⚔️", text: "Vence a los 16 líderes (Johto + Kanto)", cat: "Liga" },
  { icon: "🌸", text: "Completa el Pokédex Nacional (251+)", cat: "Pokédex" },
];

export const BINGO_LINES = [
  [0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],
  [0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],
  [0,6,12,18,24],[4,8,12,16,20]
];

export function countBingos(marks) {
  return BINGO_LINES.filter(line => line.every(i => marks[i])).length;
}
