export default function initFetchAnimais() {
    
}

async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();

    console.log(animaisJSON)
}

fetchAnimais('./animaisapi.json')
