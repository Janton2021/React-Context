import { useContext } from 'react'
import context from '../../state/context'
import './index_Detail.css'


const Detail = () => {
    const {countries } = useContext(context)
    return (
        <div>
            {countries.map((e, id) => {
                return (
                    <section className="country1" key={id}>
                    <img className="image1" key={id} src={e.flag} alt="" />
                    <p className="name1">{e.capital}</p>
                    <p className="name1">{e.name}</p>
                    <p className="name1">{e.region}</p>
                    </section>
                 ) 
                
            })
            }
            
        </div>
    )
}


export default Detail

  
/*import './index.css'

export default ({ sprites, name }) => {
  return (
    <section className="pokemon">
      <img className="image" src={sprites.front_default} alt={`${name} image`} />
      <p className="name">{name}</p>
    </section>
  )
}*/
