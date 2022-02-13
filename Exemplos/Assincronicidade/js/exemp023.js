const catImg = window.document.querySelector('img#cat')
const btn = window.document.querySelector('input#mudarGato')

/* const GATINHOSLINDOS = async () => {
    const URL = `https://thatcopy.pw/catapi/rest/`

    fetch(URL)
        .then(response => response.json)
        .then(gatos => {
            console.log(gatos)
        })
}

gatinhosLindos() */



const GATINHOSLINDOS = async () => {
    const URL = `https://thatcopy.pw/catapi/rest/`

    try{
        const data = await fetch(URL);
        const json = await data.json()
        return json.webpurl;
    }catch (e){
        console.log(e.message);
    }

}

const loadImg = async () => {
     catImg.src = await GATINHOSLINDOS();
}

btn.addEventListener('click', loadImg)

loadImg();
