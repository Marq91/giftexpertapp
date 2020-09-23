import React from 'react';

export const GifGridItem = ({id, title, url}) => {
  // const {id, title, url} = props;

  return (
    <div className="card animate__animated animate__fadeInUp">
      <img className="card-image" src={url} alt={title} />
      <div className="container">
        <p>{title}</p>
      </div>
    </div>
  )
}
