
import './index_Detail.css'
import { useHistory } from 'react-router-dom'

export default ({ name, flag, capital, region, languages, currencies }) => {
  const history = useHistory()

  const goBack = () => {
    history.push('/')
  }

  return (
    <section>
      <h4>{name}</h4>
      <section>
        <img src={flag} />
        <section>
          <p>Capital: {capital}</p>
          <p>Region: {region}</p>
          <p>
            Languages:
            {languages.map((language) => (
              <span>- {language.name}</span>
            ))}
          </p>
          <p>Currencies: {currencies.map((currency) => currency.name)}</p>
        </section>
      </section>
      <section>
        <button onClick={goBack}>
          Go Back
        </button>
      </section>
    </section>
  )
}


