import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {

    const titleImg = (titleCurrent) =>{
        if(titleCurrent.length > 20){
            titleCurrent = titleCurrent.substring(0, 20);
            titleCurrent += "...";
        }
        return titleCurrent;
    }

    return (
        <div className="card animate__animated animate__bounce animate__fadeIn">
            <img src={ url } alt={ title }/>
            <p> { titleImg(title) } </p>
        </div>
    )
}
