import Detail from '../../components/Detail/Detail'
import './index_Details.css'

import { useContext } from 'react'
import { useParams} from 'react-router-dom'
import context from '../../state/context'

const Details = () => {
    const { countries } = useContext(context)
    const { id } = useParams()

    const country = countries.find((c) => c.id === id)
    console.log('DetailCountry', country)


    return (
        <section className="body">
            <Detail {...{...country}} />
        </section>
    )
}


export default Details
