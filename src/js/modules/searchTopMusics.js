export async function searchTopMusics (artist, amountMusics) {

    let listTopMusics = []
    const vagalumeKey = 'cc8d49c02ec592e086b41c906bd97e0d'
    let url = `https://api.vagalume.com.br/search.art?apikey=${vagalumeKey}&q=${artist}`
    let response2
    try {

        let response1 = await fetch(url)
        .then(res => res.json())
        .then(data => data.response.docs[0].url)
        response2 = await fetch(`https://www.vagalume.com.br${response1}index.js`)
        .then(res => res.json())
        .then(data => data.artist.toplyrics.item)

    } catch (error) {
        console.log(error)
    }

    await new Promise(resolve => {
        for(let i = 0; i < amountMusics; i++){
            listTopMusics.push(response2[i].desc)
        }
        resolve()
    })

    return listTopMusics
}

// searchTopMusics('Henrique e Juliano', 5)
