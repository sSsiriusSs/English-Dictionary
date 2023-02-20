const inputEl = document.getElementById("input")
const infoTextEl = document.getElementById("info-text")
const meaningContainerEl = document.getElementById("meaning-container")
const titleEl = document.getElementById("title")
const meaningEl = document.getElementById("meaning")
const audioEl = document.getElementById("audio")


async function fetchAPI(word){
    console.log(word);
    try {
        meaningContainerEl.style.display = "none"
        infoTextEl.style.display = "block"
        infoTextEl.innerText = `Searching the meaning of the '${word}`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res)=>res.json())
        // console.log(result)
        infoTextEl.style.display = "none"
        meaningContainerEl.style.display = "block"
        titleEl.innerText = result[0].word;
        meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio
    } catch (error) {
        console.log(error)
    }
}

inputEl.addEventListener("keyup", (e)=>{
    // console.log(e.target.value) to see the word has written
    // console.log(e.key) to catch the 'enter' key
    if (e.target.value  &&  e.key === "Enter") {
        fetchAPI(e.target.value);
    }
});