const GATINHOSLINDOS = async () => {
    const URL = `https://thatcopy.pw/catapi/rest/`

    fetch(URL)
        .then(response => response.json())
        .then(gatos => {
            console.log(gatos)
        })
    
    await GATINHOSLINDOS
        .then
}

GATINHOSLINDOS()