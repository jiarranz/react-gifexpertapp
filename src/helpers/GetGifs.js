export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI (category) }&api_key=rrVCBLzhW82IyosGFKMOM4ovCGTlhaZK`;
    const resp = await fetch (url);
    const {data} = await resp.json ();

    const gif = data.map (img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url
        }
    })
    // console.log(gif);
    return gif;

}