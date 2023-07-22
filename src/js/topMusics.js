// Puxar as melhores músicas de cada artista
import { searchTopMusics } from './modules/searchTopMusics.js' // api do vagalume

//Pegando elemento do html
const inputName = document.getElementById('input-name')
const inputAmountMusics = document.getElementById('input-amountMusics')
const btnSearch = document.getElementById('btn-search')
const divListMusics = document.getElementById('div-listMusics')


btnSearch.addEventListener('click', async (event) => {
    event.preventDefault()

    divListMusics.innerText = ''

    let result = await searchTopMusics(inputName.value, inputAmountMusics.value)
    .then(value => value.forEach(element => {
        const pNomeMusic = document.createElement('p')
        pNomeMusic.setAttribute('class', 'nameMusic')
        divListMusics.append(pNomeMusic)

        const nomeArtist = document.createTextNode(element)
        pNomeMusic.appendChild(nomeArtist)
    }))

    
    
    
    /* await new Promise(resolve => {
        result.forEach(element => {
            divListMusics.innerText = element
        }) 
        resolve()
    }) */

    // console.log(result)
})

