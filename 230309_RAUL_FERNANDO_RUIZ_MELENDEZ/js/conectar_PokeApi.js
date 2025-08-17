/*fetch("https://pokeapi.co/api/v2/pokemon/tyranitar").then(recurso => {
    recurso.json().then(pokemon => {
        console.log(pokemon);
    });
});*/

const input_buscar = document.querySelector("input");
const button_buscar = document.querySelector("button");

button_buscar.addEventListener("click", function(){
    fetch("https://pokeapi.co/api/v2/pokemon/" + input_buscar.value).then(recurso => recurso.json()).then(pokemon=>{
        console.log(pokemon); //obtiene el recurso de la pokeapi, lo convierte en .JSON de forma directa y despues lo imprime en la consola
    
        const numero_pokemon = document.querySelector("#numero_Pokemon");
        numero_pokemon.innerHTML = "<p>Numero: </p>" + "<p>" + pokemon.id + "</p>";
    
        const nombre_pokemon = document.querySelector("#nombre_Pokemon");
        nombre_pokemon.innerHTML = "<p>" + pokemon.name + "</p>";
    
        const imagen_pokemon = document.querySelector("img");
        imagen_pokemon.src = pokemon.sprites.front_default;
    
        const altura_pokemon = document.querySelector("#height");
        altura_pokemon.innerHTML = "<p>Altura: </p> "+ "<p>" + pokemon.height/10 + "</p>";

        const peso_pokemon = document.querySelector("#peso_Pokemon");
        peso_pokemon.innerHTML = "<p>Peso: </p> " + "<p>" + pokemon.weight/10 + "</p>" + "<p>KG</p>";
    
        const tipo_pokemon = document.querySelector("#tipo_pokemon");
        if(pokemon.types.length > 1)
            {
                tipo_pokemon.innerHTML = "<p>" + "Tipo: "+ "<div class='"+pokemon.types[0].type.name+"'>" + "<p>" + pokemon.types[0].type.name + "</p>" + "</div>" + "<p>" + "/" + "</p>" + "<p>" + "Tipo: "+ "<div class='"+pokemon.types[1].type.name+"'>" + "<p>" + pokemon.types[1].type.name + "</p>" + "</div>";
            }
            else
            {
                tipo_pokemon.innerHTML = "<p>" + "Tipo: "+ "<div class='"+pokemon.types[0].type.name+"'>" + "<p>" + pokemon.types[0].type.name + "</p>" + "</div>" + "<p>" + "<p>.</p>"+ "<p></p>"+ "<p></p>";
            }
        
        /*    const audio_pokemon = document.querySelector("audio");
        audio_pokemon.src = pokemon.cries.latest; */
        const contenedor_audio = document.querySelector("#contenedor_audio");
        contenedor_audio.innerHTML = "<audio controls><source src='" + pokemon.cries.latest +"'></audio>";

        const contenedorPokemon = document.querySelector("#contenedorPokemon");
        contenedorPokemon.classList.add(pokemon.types[0].type.name + "1");
        contenedorPokemon.style.backgroundImage = "url(../IMAGENES/"+ pokemon.types[0].type.name +".png)";

        const Separador_Imagen = document.querySelector("#separador_Imagen");
        Separador_Imagen.style.display = "none"
    })
    });