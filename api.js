/* async function fetchAPI (){
try{const requisicao = await fetch('https://restcountries.com/v3.1/all')
const requisicaoConvertida = await requisicao.json()
console.log(requisicaoConvertida)
//retornando array
const arrayPaises = requisicaoConvertida
return arrayPaises
}catch (erro){
  console.log(erro)
}
}

async function renderizaPaíses (){ 
const arrayPaises = await fetchAPI()
const cardPais = arrayPaises.map(iten => {
  return `
  <div class=card>
  <img src="${iten.flags.png}"alt"Bandeira de ${iten.name.common}">
  <h2>${iten.name.common}</h2>
  </div>`

  
  })
  const container = document.getElementById('container')
  container.innerHTML = cardPais.join('')

}

renderizaPaíses() */

async function requisicaoApiRestCountries() {
  try {
      const fetcApiRestCountries = await fetch('https://restcountries.com/v3.1/all')
      const respostaConvertida = await fetcApiRestCountries.json()
      const arrayPaises = respostaConvertida
      return arrayPaises 
  }catch (erro){
      console.log(erro)
  }
  
  }
  async function filtraPaisPorNome (nomePais){}
  
  async function renderizaPaises() {
  const arrayPaises = await requisicaoApiRestCountries()
  const cardPaises = arrayPaises.map((pais) => {
    return `
    <div class="card-container">
        <img src="${pais.flags.png}" alt="">
        <div class="card-texto">
          <h2>${pais.name.common}</h2>
          <div>
          <h3>População:</h3>
          <p>${pais.population}</p>
          </div>
          <div>
          <h3>Capital:</h3>
          <p>${pais.capital}</p>
        </div>
        <div>
        <h3>Continente:</h3>
        <p>${pais.continents}</p>
        </div>
        <div>
        <h3>Sigla:</h3>
        <p>${pais.continents}</p>
        </div>
        </div>
    </div>
    `
  })

    container.innerHTML = cardPaises.join('')
  }

  renderizaPaises()
  