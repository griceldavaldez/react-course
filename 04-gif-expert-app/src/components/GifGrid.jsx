import { GifItems } from "./GifItems";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);
  

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }

        {
          images.length > 0 ? 
          (
            <div className="card-grid">
              {images.map((image) => (
                    <GifItems
                      key={image.id}
                      {...image}
                    />
                  ))}
            </div>
          )
          :
          ( 
            <div className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: isLoading ? 'none' : '' }}>
              No hay gifs que coincidan con la búsqueda <strong>{ category }</strong>
            </div>
          )
        }

    </>
        
  )
}


GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}