

export const getGifs = async (category) => {
  // api.giphy.com/v1/gifs/search
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=CyVrl4TbbMVhJLWVTvPTxt4PMnQg7Bfa`
  const response = await fetch( url );
  const { data } = await response.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url // usa '?' para validar si viene el campo
    }
  })

  return gifs;

}

