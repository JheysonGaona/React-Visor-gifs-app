import { useState, useEffect } from 'react'
import { getGif } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // const [images, setImages] = useState([])
    
    // Se emplea este código para que el componente sea renderizado
    // solo una unica vez, o cada vez que cambia el category
    useEffect( () => {
        getGif(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [ category ] );

    return state;
}