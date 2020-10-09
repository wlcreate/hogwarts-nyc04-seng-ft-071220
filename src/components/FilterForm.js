import React from 'react'

function FilterForm(props){
    
    let handleChange = (evt) => {
        // debugger
        props.changeFilter(evt.target.value)
    }

    return(
        <form>
            <label>
                Greased?
                <select value={props.value} onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            </label>
            
        </form>
    )
}

export default FilterForm