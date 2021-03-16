import React, { useState, useEffect } from 'react';
import Header from "./Components/UI/Header";
import Characters from "./Components/Characters/Characters";
import SearchBar from "./Components/UI/SearchBar"
import axios from "axios";
import "./App.css";
const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query,setQuery]=useState('')
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      //console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
     fetchItems()
  },[query])
  return (
    <div className="container">
      <Header />
      <SearchBar getQuery={(q)=>setQuery(q) }/>
      <Characters isLoading={isLoading} items={items} />
    </div>
  )
}

export default App

