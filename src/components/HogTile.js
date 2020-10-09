import React from 'react'

class HogTile extends React.Component{
    
    state = {
        open: false
    }

    handleDetails = ((evt) => {
        this.setState({
            open: !this.state.open
        })
    })

    render(){

        let {name, specialty, weight} = this.props.hog
        let pigImage = require(`../hog-imgs/${name.toLowerCase().replace(/ /g,"_")}.jpg`)

        return(
            <li className="ui eight wide column" onClick={this.handleDetails}>
                <h3> {name} </h3>
                <img src={pigImage} alt={name}/>

                { this.state.open? <p> <strong>Specialty:</strong> {specialty}</p> : <p></p>}
                { this.state.open? <p> <strong>Weight:</strong> {weight} </p> : <p></p>}
                { this.state.open? <p> <strong>Medal:</strong> {this.props.hog['highest medal achieved']} </p> : <p></p>}

            </li>
        )
    }
}

export default HogTile
