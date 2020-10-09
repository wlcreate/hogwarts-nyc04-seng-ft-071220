import React from 'react'
import HogTile from './HogTile'

function HogContainer(props) {

    let arrayOfComponents = props.hogsArray.map((hogObj) => {
        return(
            <HogTile 
                key={hogObj.id}
                hog={hogObj}
            />
        )
    })

    return(
        <div className="ui grid container"> 
            <ul>
                {arrayOfComponents}
            </ul>
        </div>
    )
}

export default HogContainer