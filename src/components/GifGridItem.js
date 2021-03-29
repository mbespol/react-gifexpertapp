import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img className="animate__animated animate__fadeInDown" src={ url } alt={ title } />
            <p className="animate__animated animate__fadeInUp">{ title }</p>
        </div>
    )
}
