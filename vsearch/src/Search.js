import React,{ useState} from 'react'
import './Search.css'
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import { Button } from "@material-ui/core"
import { useHistory} from "react-router-dom"

function Search() {
  const [input, setInput] = useState('')
  const history = useHistory()

  const search =  (e) => {
      e.preventDefault()
      console.log('You hit the search >>', input)

      history.push('/search')
  } 
  return (
    <form className="search">
        <div className="search__input">
            <SearchIcon className='search__inputIcon'/>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <MicIcon />
        </div>
        <div className="search__buttons">
            <Button type='submit' onClick={search} variant="outlined">Qdrant Search</Button>
            <Button variant="outlined">Vector Similarity Space </Button>
        </div>
    </form>
  )
}

export default Search