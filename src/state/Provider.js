import context from './context'
import useCountries from '../hooks/useCountries'


const Provider = (props) => {
    
    const countries = useCountries()

    return (
        <context.Provider value={{countries}}>
            {props.children}
        </context.Provider>
    )
}

export default Provider