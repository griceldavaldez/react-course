/*
Fetch API

La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). 
Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un 
conjunto de características más potente y flexible. 
*/

const apiKey = 'XB8b3WmsNgShqhhOkTRVgnX5ly2jZmQG';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/*peticion.then(resp => {
    //console.log(resp)
    resp.json().then(data => {
        console.log(data)
    })
})
.catch(console.warn);*/ 

//las promesas pueden encadenarse tambien
/*peticion
    .then(resp => resp.json()) //esto retorna una promesa (la respuesta del endpoint)
    .then(data => console.log(data.data)) //lo anterior se pasa a este then
    .catch(console.warn);*/

//aqui usamos la desestructuracion para obtener la data
peticion
    .then(resp => resp.json())
    .then(({data}) => {
        console.log(data.images.original.url) //estas son las propiedades del json que retorna el endpoint
        const {url} = data.images.original; 
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);