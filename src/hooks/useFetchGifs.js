import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  // Los useEffect no pueden ser Async
  useEffect(() => {
    getGifs(category)
      .then( imgs => {

        setState({
          data: imgs,
          loading: false
        })

      })

  }, [category])

  return state; // {data: [], loading: true}

  // // Se ejecuta cuando el componente es llamado
  // useEffect(() => {
  //   // getGifs retorna una promesa 
  //   getGifs(category)
  //     .then(imgs => setImages(imgs));
  //     // .then(setImages) es lo mismo
  // }, [ category ]);

}


