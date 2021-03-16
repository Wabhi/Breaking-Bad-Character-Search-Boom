import React,{useState} from 'react'

const SearchBar = ({getQuery}) => {
    const [text, setText] = useState('')
    const onchange = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <section className="search">
            <form>
                <input type="text" className="form-control" placeholder="Enter the character which you want to see.."
                    autoFocus
                    value={text}
                    onChange={(e)=>onchange(e.target.value)}
                ></input>
            </form>
        </section>
    )
}

export default SearchBar
