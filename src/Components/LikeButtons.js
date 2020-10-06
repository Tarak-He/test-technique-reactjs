import React, { useEffect, useState } from 'react';
import Jauge from './Jauge'

const LikeButtons = (props) => {

    const [num, setNum] = useState(props.likes)
    const [num2, setNum2] = useState(props.dislikes)

    const [pressed, setPressed] = useState(false)
    const [pressed2, setPressed2] = useState(false)

    const handleLike = (x) => {
        x === 1 ? setNum(props.likes + 1) : setNum(props.likes); setPressed(true)

        //retirer le like de ce bouton
        if (num === props.likes + 1) {
            setNum(props.likes)
            setPressed(false)
        }

        //retirer le dislike sur l'autre bouton
        if (num2 === props.dislikes + 1) {
            setNum2(props.dislikes)
            setPressed2(false)
        }
    }
    
    const handleDislike = (x) => {
        x === 2 ? setNum2(props.dislikes + 1) : setNum2(props.dislikes); setPressed2(true)

        //retirer le dislike de ce bouton
        if (num2 === props.dislikes + 1) {
            setNum2(props.dislikes)
            setPressed2(false)
        }

        //retirer le like de l'autre bouton
        if (num === props.likes + 1) {
            setNum(props.likes)
            setPressed(false)
        }
    }



    return (
        <>
            <div className="likes-btn-container">
                <button style={pressed ? {fontWeight: 'bold'} : {fontWeight : 'normal'}} className='likes-btn' onClick={() => handleLike(1)}> <i className="fas fa-thumbs-up"></i> {num} </button>
                <button style={pressed2 ? {fontWeight: 'bold'} : {fontWeight : 'normal'}} className='likes-btn' onClick={() => handleDislike(2)}> <i className="fas fa-thumbs-down"></i> {num2} </button>
            </div>
            <Jauge likes={num} dislikes={num2}/>
        </>
    )
}

export default LikeButtons