import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://fakestoreapi.com/products/${ counter }`);
    const { title, description } = !!data && data;
    //console.log(title);
    //console.log(description);
    
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