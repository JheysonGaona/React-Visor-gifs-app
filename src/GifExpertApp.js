import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One punch']);

    /**
    // Agregar un nuevo contenido al arreglo
    const handLeAdd = () => {
        // Agregar el contenido al final del arreglo
        // setCategories( [...categories, 'One Piece'] );

        // Agregar el contenido al inicio del arreglo
        // setCategories( ['One Piece', ...categories] );

        // Usando un Callback
        setCategories(cate => [...cate, 'One Piece']);
    }
    */

    // Cuando se emplea map, debe tener un key Unico
    // <> </> es un fragment, puede emplear tambien un div
    return (
        <>
            <h1>Galeria de Imágenes GIFS</h1>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;