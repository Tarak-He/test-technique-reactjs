import React from 'react'
import LikeButtons from './LikeButtons'

const Movie = ({props, onDelete}) => {
    

    return (
        <div className="movie-card">
            <p className="card-title">{props.title}</p>
            <p className="card-category">Catégorie : {props.category}</p>
            <button className="card-delete-btn" onClick={() => {onDelete(props.id)}}>Supprimer</button>
            <LikeButtons likes={props.likes} dislikes={props.dislikes} />
        </div>
    )
}

export default Movie;