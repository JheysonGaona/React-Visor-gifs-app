import React /*, { useState, useEffect }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGif } from '../helpers/getGifs';

export const GifGrid = ( {category} ) => {

    const {data:images, loading} = useFetchGifs(category);

    /**
    const [images, setImages] = useState([])
    
    // Se emplea este código para que el componente sea renderizado
    // solo una unica vez, o cada vez que cambia el category
    useEffect( () => {
        getGif(category)
            .then(setImages);
    }, [category]);
    */

    return (
        <>
            <h3> { category } </h3>

            {loading && <p className="animate__animated animate__bounce animate__flash">Loading</p>}

            <div className="container-grid">
                <ol className="card-grid">
                    { images.map( ( img ) => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ))}
                </ol>
            </div>
        </>
    )
}
