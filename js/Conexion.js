let pokemones = [];

async function Conexion(filtrotipo) {
  try {
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
  } catch (error) {
    console.error("❌ Error al conectar con la API:", error);
    return [];
  }
}

async function General() {
  if (pokemones.length === 0) {
    pokemones = await Conexion("All");
  }

  // Si tienes una función Home() que pinta la lista, actívala aquí:
  // Home();
  console.log("✅ Pokémon cargados:", pokemones.length);
}

General();

async function FiltroConexion(Elfiltro) {
  const lista = document.getElementById("la-lista");
  lista.innerHTML = "<p>Cargando...</p>";

  pokemones = await Conexion(Elfiltro);

  const listaHTML = generarLista(pokemones);
  lista.innerHTML = listaHTML;
}
