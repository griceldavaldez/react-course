import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';


export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://fakestoreapi.com/products/${ counter }`);
    const { title, description } = !!data && data;
    
    return (
        <>
            <h1>FakeStoreApi</h1>
            <hr />

            {
                isLoading
                 ? <LoadingQuote />
                 : <Quote title={ title } description={ description } />
            }
                      
            <button 
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }>
                Next quote
            </button>

        </>
    )
}