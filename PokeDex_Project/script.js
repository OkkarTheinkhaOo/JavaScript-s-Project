document.getElementById('search-button').addEventListener('click', ()=>{
    clearInfo()
    getPokemon()
})

function clearInfo() {
    document.getElementById('pokemon-name').innerText = ''
    document.getElementById('pokemon-id').innerText = ''
    document.getElementById('weight').innerText = ''
    document.getElementById('height').innerText = ''
    document.getElementById('types').innerText = ''
    document.getElementById('hp').innerText = ''
    document.getElementById('attack').innerText = ''
    document.getElementById('defense').innerText = ''
    document.getElementById('special-attack').innerText = ''
    document.getElementById('special-defense').innerText = ''
    document.getElementById('speed').innerText = ''
    document.getElementById('pokemon-img').innerHTML = ''
}

function getPokemon(){
    const searchInput = document.getElementById('search-input').value.toLowerCase()
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput}`)
    .then(response =>response.json())
    .then(data=>{
    displayPokemonStats(data)
    })
    .catch(err =>{
        alert("Pokemon not found")
    })
}

function displayPokemonStats(data){
    document.getElementById('pokemon-name').innerText = data.name.toUpperCase()
    document.getElementById('pokemon-id').innerText = data.id
    document.getElementById('weight').innerText = data.weight
    document.getElementById('height').innerText = data.height
    let type = data.types
    for (const t of type){
        document.getElementById('types').innerHTML += ` 
        <span id = 'type'>${t.type.name.toUpperCase()}</span>
        `
    }
    document.getElementById('hp').innerText = data.stats[0].base_stat
    document.getElementById('attack').innerText = data.stats[1].base_stat
    document.getElementById('defense').innerText = data.stats[2].base_stat
    document.getElementById('special-attack').innerText = data.stats[3].base_stat
    document.getElementById('special-defense').innerText = data.stats[4].base_stat
    document.getElementById('speed').innerText =data.stats[5].base_stat
    document.getElementById('pokemon-img').innerHTML = `
    <img id = 'sprite' src = "${data.sprites.front_default}">
    `
}