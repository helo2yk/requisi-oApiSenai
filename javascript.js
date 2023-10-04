const container = document.getElementById
console.log(container)

async function requisicaoApiPokemon (){

    const retornoPromessas = []

    for(let index =0; index <= 150; index ++){
    const fetchApiPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)

    const retornoApiPokemon = await fetchApiPokemon.arrayBuffer()
    retornoPromessas.push(retornoApiPokemon)
    }
    const arrayPokemon = await retornoPromessas 
    console.log(arrayPokemon)
    return arrayPokemon
}

async function renderizaPokemons (){
    const arrayPokemon = await requisicaoApiPokemon()
    const cardPokemon = arrayPokemon.map((pokemon) => {
return
    <h2>${pokemon.name}</h2>
})
}
