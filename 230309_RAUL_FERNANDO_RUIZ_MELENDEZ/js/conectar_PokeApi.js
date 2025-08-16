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
        numero_pokemon.innerHTML = "Numero: " + pokemon.id;
    
        const nombre_pokemon = document.querySelector("#nombre_Pokemon");
        nombre_pokemon.innerHTML = pokemon.name;
    
        const imagen_pokemon = document.querySelector("img");
        imagen_pokemon.src = pokemon.sprites.front_default;
    
        const altura_pokemon = document.querySelector("#height");
        altura_pokemon.innerHTML = "Altura: "+ pokemon.height/10;

        const peso_pokemon = document.querySelector("#peso_Pokemon");
        peso_pokemon.innerHTML = "Peso: " + pokemon.weight/10 +"kg";
    
        const tipo_pokemon = document.querySelector("#tipo_pokemon");
        if(pokemon.types.length > 1)
            {
                tipo_pokemon.innerHTML = "tipo: "+ pokemon.types[0].type.name + "/" + pokemon.types[1].type.name;
            }
            else
            {
                tipo_pokemon.innerHTML = "tipo: "+ pokemon.types[0].type.name;
            }
        
        /*    const audio_pokemon = document.querySelector("audio");
        audio_pokemon.src = pokemon.cries.latest; */
        const contenedor_audio = document.querySelector("#contenedor_audio")
        contenedor_audio.innerHTML = "<audio controls><source src='" + pokemon.cries.latest +"'></audio>";
    })
    });


//tarea:hacerle diseño a esta madre