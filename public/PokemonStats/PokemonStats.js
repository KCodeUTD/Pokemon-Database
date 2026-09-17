document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');

    if (pokemonId) {
        fetch(`/api/pokemon/${pokemonId}`)
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);
                const pokemonNameElement = document.getElementById('pokemon-name');
                pokemonNameElement.textContent = data.Name || 'N/A';
                pokemonNameElement.dataset.id = pokemonId; // Set data attribute
                
                const imagePath = `../images/${pokemonId}.png`;
                console.log('Image path set to:', imagePath);
                const imgElement = document.getElementById('pokemon-image');
                console.log('Image element before update:', imgElement);
                imgElement.src = imagePath;
                console.log('Image element after update:', imgElement);

                /*document.getElementById('pokemon-details').innerHTML = `
                    Type: ${data.Type || 'N/A'}<br>
                    #${data.Pokedex_ID || 'N/A'}
                `;*/
                document.querySelector('.pokemon-list h1:nth-child(1)').innerHTML = `PokedexID: ${data.Pokedex_ID || 'N/A'}`;
                document.querySelector('.pokemon-list h1:nth-child(2)').innerHTML = `Name: ${data.Name || 'N/A'}`;
                document.querySelector('.pokemon-list h1:nth-child(3)').innerHTML = `Type: ${data.Pokemon_Elemental_Type || 'N/A'}`;
                document.querySelector('.pokemon-list h1:nth-child(4)').innerHTML = `Generation: ${data.Fk_GenKey || 'N/A'}`;
                //document.querySelector('.pokemon-list h1:nth-child(5)').innerHTML = `Special Forms: ${data.Special_Forms || 'N/A'}`;
                document.querySelector('.pokemon-list h1:nth-child(5)').innerHTML = `Evolves Into: ${data.Evolves_Into || 'N/A'}`;
                document.querySelector('.pokemon-list h1:nth-child(6)').innerHTML = `Smogon Category: ${data.Category || 'N/A'}`;
                document.querySelector('.pokemon-list h2:nth-child(8)').innerHTML = `HP: ${data.HP || 'N/A'}`;
                document.querySelector('.pokemon-list h2:nth-child(9)').innerHTML = `Attack: ${data.Attack || 'N/A'}`;
                document.querySelector('.pokemon-list h2:nth-child(10)').innerHTML = `Defense: ${data.Defense || 'N/A'}`;
                document.querySelector('.pokemon-list h2:nth-child(11)').innerHTML = `Special Attack: ${data.Special_Attack || 'N/A'}`;
                document.querySelector('.pokemon-list h2:nth-child(12)').innerHTML = `Special Defense: ${data.Special_Defense || 'N/A'}`;
                document.querySelector('.pokemon-list h2:nth-child(13)').innerHTML = `Speed: ${data.Speed || 'N/A'}`;
            })
            .catch(error => {
                console.error('Error fetching Pokémon stats:', error);
            });
    } else {
        console.error('Pokémon ID not found in the URL');
    }
});
