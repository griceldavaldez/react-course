
export const getGifs = async(category) =>{
    const apiKey = 'sMDo0Uebx5HhMNejonXOeLL5YGSNA7CY';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=12`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    //console.log(data);

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title != " " ? img.title : category,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}