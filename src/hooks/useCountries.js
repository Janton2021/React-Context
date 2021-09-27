import { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuid } from 'uuid'


const useCountries = () => {
    const [countries, setCountries] = useState([])

    useEffect(async () => {
        const response =  (await axios.get("https://restcountries.eu/rest/v2/all"))
            .data;
        const results = response.map((country) => {
            return {
                name: country.name,
                flag: country.flag,
                languages: country.languages,
                currencies: country.currencies,
                capital: country.capital,
                region: country.region,
                id: uuid(),
            }
        })
        setCountries(results)
    }, [])

    console.log(countries)
    return countries
}

export default useCountries

