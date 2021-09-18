import { useState, useEffect } from 'react'

const useCountries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then((response) => response.json())
        .then((data) => setCountries([...data]))
    }, [])

    return countries
}

export default useCountries