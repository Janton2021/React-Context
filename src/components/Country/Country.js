import { useContext } from 'react'
import context from '../../state/context'
import './index_Country.css'


const Country = () => {
    const {countries } = useContext(context)
    console.log(countries)
    return (
        <div>
            {countries.map((e, i) => {
                return (
                    <section className="country" key={i}>
                    <img className="image" key={i} src={e.flag} alt="" />
                    <p className="name">{e.name}</p>
                   </section>
                 ) 
                
            })
            }
            
        </div>
    )
}


export default Country



