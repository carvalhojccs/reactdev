async function Tempo(request, response) {
    const apiSecret = process.env.API_KEY;
    const dynamicDate = new Date();

    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/500?api_key=${API_KEY}&language=pt-BR`);
    const movieResponseJson = await movieResponse.json();
    const title = movieResponseJson.title;

    response.json({
        date: dynamicDate.toUTCString(),
        title: title
    });
}

export default Tempo;