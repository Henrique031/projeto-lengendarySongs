import { searchUrlVideoYT } from './modules/getUrlYTByTitle.js'

let inputNomeMusica = document.getElementById('input-nomeMusica')
let btDownload = document.getElementById('bt-download')

console.log('Pegou')



btDownload.addEventListener('click', async function(event) {
    event.preventDefault()
    let resp = await searchUrlVideoYT(inputNomeMusica.value)
    console.log(resp)
})
