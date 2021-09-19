import Country from '../../components/Country/Country'
import './index_Home.css'
import { Link } from 'react-router-dom'


export default () => {
    return (
        <Link to={`./details`}>
            <section className="cards">
                <Country /> 
            </section>
        </Link>
    )
}


/*{`/details/${i}`} key={i} */
/*"./details"*/