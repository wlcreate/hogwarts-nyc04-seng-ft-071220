import React from 'react'
import HogTile from './HogTile'

function HogContainer(props) {

    let arrayOfComponents = props.hogsArray.map((hogObj) => {
        return(
            <HogTile 
                key={hogObj.name}
                hog={hogObj}
            />
        )
    })

    return(
        <ul className="ui grid container">
            {arrayOfComponents}
        </ul>
    )
}

export default HogContainer