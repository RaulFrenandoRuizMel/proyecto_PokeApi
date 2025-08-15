    // Función para obtener datos de la API de Pokémon
    async function fetchData(limit) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`); // Se obtiene la cantidad según el input
            const data = await response.json();
            return data.results; // Devuelve los resultados
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }

    // Función para obtener detalles de un Pokémon (como la imagen)
    async function obtenerDetalles(url) {
        try {
            const response = await fetch(url); // Hacemos una nueva solicitud para obtener detalles del Pokémon
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error al obtener los detalles:', error);
        }
    }

    // Función para crear las cajas dinámicamente
    async function crearCajas() {
        // Obtener el valor del input
        let cantidad = parseInt(document.getElementById('cantidad').value);

        // Definir un límite máximo, por ejemplo 151 (o el límite de la API)
        const LIMITE_MAXIMO = 151;

        // Si la cantidad solicitada es mayor al límite, ajustarla
        if (cantidad >= LIMITE_MAXIMO) {
                alert(`El máximo número de Pokémon es ${LIMITE_MAXIMO}, Mostrando ${LIMITE_MAXIMO} Pokémon.`);
        }
        else if (cantidad <= 0) {
            alert("Por favor ingresa un número válido mayor a 0.");
            return;}

        let container = document.getElementById('pokemonContainer');
        // Limpiar el contenedor antes de agregar nuevas cajas
        container.innerHTML = '';

        // Obtener los datos de la API
        let datos = await fetchData(cantidad);

        // Iterar sobre los datos y obtener detalles adicionales para cada Pokémon
        for (let i = 0; i < datos.length; i++) {
            let pokemon = datos[i];
            let detalles = await obtenerDetalles(pokemon.url); // Obtener detalles adicionales como la imagen

            // Crear un div para cada Pokémon
            let div = document.createElement('div');
            div.classList.add('pokemon');

            // Añadir contenido a la caja
            div.innerHTML = `<h3>${pokemon.name}</h3><img src="${detalles.sprites.front_default}" alt="${pokemon.name}" width="300">`;

            container.appendChild(div);
        }
    }