import React from 'react'

function SearchBar(props) {
    return (
        
            <div class={props.class}>
                <input className={props.inputName} type="text" placeholder="Търсене..."/>
                <button className={props.buttonName} type="button"><i class="fas fa-search"></i></button>
            </div>
        
    )
}

export default SearchBar;
