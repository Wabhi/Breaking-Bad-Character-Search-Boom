import React from 'react'
import CharacterItem from "./CharacterItem"
import Spinner from '../UI/Spinner'


const Characters = ({ items, isLoading }) => {    
    return isLoading ? (<Spinner/>) : (
        <section className="cards">
            {items.map((item) => (
                <CharacterItem item={item}></CharacterItem>
            ))}
        </section>
    )
    
}

export default Characters
