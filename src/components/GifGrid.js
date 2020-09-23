import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category); // El useEffect es llamado desde este Hook tambien

  // Destructurar parametros: map(({id, title}) => ...
  return (
    <>
      <h3>{category}</h3>

      {/* {loading ? <p>Loading</p> : null} */}
      {loading && <h3 className="animate__animated animate__flash">Loading...</h3>}

      <div className="card-grid">
        { 
          images.map( img => (
            <GifGridItem
              key={img.id}
              {...img }
            />
          ))
        }
      </div>
    </>
  )
}

export default GifGrid
