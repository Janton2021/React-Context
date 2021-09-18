import { useContext } from 'react'
import context from '../state/context'


const Country = () => {
    const {countries } = useContext(context)
    console.log(countries)
    return (
        <div>
            {countries.map((e, i) => {
                return (
                   <div key={i}>
                    <img key={i} src={e.flag} alt="" />
                   </div>
                 ) 
                
            })
            }
            
        </div>
    )
}

export default Country