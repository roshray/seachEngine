import { useState, useEffect } from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = "6da68d082baccf19a"

const useGoogleSearch = (term) => {

const [data, setData] = useState(null)

useEffect(() => {

}, [term])
}

export default useGoogleSearch