export async function searchUrlVideoYT(titleMusic) {
 
    // const developerKey = process.env.YOUTUBE_API_KEY // Pegar valor de uma variável de ambiente
    // console.log(developerKey)
    const developerKey = 'AIzaSyCiMoq2-FW6pEg4bmOJ0t1VJB5Cwh6rQ64' // Pegar valor de uma variável de ambiente

    let url = `https://youtube.googleapis.com/youtube/v3/search?type=video&part=id&maxResults=1&q=${titleMusic}&key=${developerKey}`
    let result = await fetch(url)
    .then(res => res.json())
    .then(data => data.items[0].id.videoId)

    return `https://www.youtube.com/watch?v=${result}`

}

// (async () => {
//     const videoUrl = await searchUrlVideoYT('Dormi na praça');
//     console.log(videoUrl);
// })();
  