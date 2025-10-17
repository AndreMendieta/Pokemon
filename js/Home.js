let pokemones = [];

async function Conexion(filtrotipo) {
  if (filtrotipo === "All") {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1024");
    const data = await res.json();
    return data.results;
  } else {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${filtrotipo}`);
    const data = await res.json();

    const pokemonesTipo = [];
    for (let i = 0; i < data.pokemon.length; i++) {
      pokemonesTipo.push(data.pokemon[i].pokemon);
    }
    return pokemonesTipo;
  }
}

async function General() {
  if (pokemones.length === 0) {
    pokemones = await Conexion("All");
  }

  // Asegúrate de tener definida esta función antes de llamarla
  // Si no la tienes, comenta esta línea o crea la función
  // Home();
}

General();

async function FiltroConexion(Elfiltro) {
  document.getElementById("la-lista").innerHTML = "";
  pokemones = await Conexion(Elfiltro);
  const listaHTML = generarLista(pokemones);
  document.getElementById("la-lista").innerHTML = listaHTML;
}
