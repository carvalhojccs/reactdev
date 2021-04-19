function Tempo(request, response) {
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toUTCString()
    })
}

export default Tempo;