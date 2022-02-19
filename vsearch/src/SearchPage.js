import React from 'react'
import './SearchPage.css'
import { useStateValue} from './StateProvider'
import useGoogleSearch from './useGoogleSearch'
import { Link } from 'react-router-dom'
import Search from './Search'

import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'


function SearchPage() {
    
    const [{ term }, dispatch] = useStateValue()

    const { data } = useGoogleSearch(term)

    console.log(data)

  return (
    <div className='searchPage'>
        <div className="searchPage__header">
            <Link to='/'>
                <img 
                    className='searchPage__logo'
                    src="https://raw.githubusercontent.com/qdrant/qdrant/master/docs/logo.svg" 
                    alt=""  
                />
            </Link> 

            <div className="searchPage__headerBody"><Search hideButtons/>
                <div 
                    className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                 <Link to='/all'>ALL</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                 <Link to='/news'>NEWS</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                 <Link to='/images'>Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                 <Link to='/shopping'>shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                 <Link to='/maps'>maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to='/more'>more</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to='/settings'>Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>
                     

                </div>
            </div>           
        </div>
        {term && (
        <div className="searchPage__results">
            <p className="searchPage__resultCount">
                About {data?.searchInformation.formattedSearchTime} results ({data?.searchInformation.formattedSearchTime} seconds ) for {term}
            </p>

            {data?.items.map(item => (
                <div className="searchPage__result">
                    <a href={item.link}>
                        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                            <img 
                                src={
                                    item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src 
                                 } 
                             alt="" 
                            />
                        )}
                        {item.displayLink}
                    </a>

                    <a href={item.link} className="searhPage__resultTitle">
                        <h2>{item.title}</h2>
                    </a>
                    <p className="searchPage__resultSnippet">{item.snippet}</p>
                </div>
            ))}
        </div>
        )}
    </div>
  )
}

export default SearchPage