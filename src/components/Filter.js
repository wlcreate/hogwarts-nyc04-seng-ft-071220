import React from 'react'

class Filter extends React.Component{
    
    handleChange = (evt) => {
        // debugger
        console.log("YOU CLICKED THE DROPDOWN")
        this.props.changeFilter(evt.target.value)
    }

    render(){

        return(
            <select value={this.props.selectedOption} onChange={this.handleChange}>
                <option value="all">All</option>
                <option value="true">Greasy</option>
                <option value="false">Clean</option>
                <option value="weight">Sort by Weight</option>
                <option value="name">Sort by Name</option>
            </select>
        )
    }
}

export default Filter