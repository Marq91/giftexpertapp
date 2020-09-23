import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch']);

  // const handleAdd = () => {
  //   // de esta forma se agrega una nueva categoria sin cambiar el array a un string
  //   // setCategories( [...categories, 'Hunter X Hunter'] ); 
  //   setCategories(cats => [...cats, 'Hunter X Hunter']);
  // }

  return (
    <div>
      <h1>
        GifExpertApp <i className="fab fa-angellist" />
      </h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        { 
          categories.map(category => (
            <GifGrid 
              key={category}
              category={category} 
            />
          )) 
        }
      </ol>
      
    </div>
  )
}

