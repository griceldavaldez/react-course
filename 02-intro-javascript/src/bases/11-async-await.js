
/*const getImagenPromesa = () => {
    const promesa = new Promise((resolve, reject) => {
        resolve('https://sgyugdtyefdtyefd.com')
    })
    return promesa;
}

getImagenPromesa().then(console.log);*/


//ASYNC convierte la funcion en una promesa
/*const getImagen = async() => {
    return 'https://sgyugdtyefdtyefd.com';
}

console.log(getImagen());
getImagen().then(console.log);*/

//Para trabajar con await la condición es que debe estar 
//dentro de una funcion async
const getImagen = async() => {
    try{
        const apiKey = 'XB8b3WmsNgShqhhOkTRVgnX5ly2jZmQG';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original; 
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }catch(error){
        //manejo del error
        console.error(error);
    }
}

getImagen();
