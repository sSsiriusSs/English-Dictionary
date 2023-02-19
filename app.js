const inputEl = document.getElementById('input')


async function fetchAPI(word){
    // console.log(word);
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result = await fetch(url).then((res)=>res.json())
}

inputEl.addEventListener('keyup', (e)=>{
    // console.log(e.target.value) to see the word has written
    // console.log(e.key) to catch the 'enter' key
    if(e.target.value && e.key === 'Enter'){
        fetchAPI(e.target.value);
    }
});