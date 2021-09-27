import Country from '../../components/Country/Country'
import './index_Home.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import context from '../../state/context'

const Home = () => {
    const { countries } = useContext(context)

    return (
        <Link to={`./details`}>
            <section className="cards">
                <Country countries={ countries } /> 
            </section>
        </Link>
    )


}

export default Home



    


