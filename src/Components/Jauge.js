import React from 'react'

const Jauge = (props) => {

    let likesWidth = (props.likes * 100) / (props.dislikes + props.likes);

    return (
        <>
            <div className="jauge-conteneur">
                <span style={{width: likesWidth + '%'}} className='jauge-pleine' />
            </div>
        </>
    )
}

export default Jauge;