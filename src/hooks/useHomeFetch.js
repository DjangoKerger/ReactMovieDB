import {useState, useEffect, useRef} from 'react';

//APi, import function from APi
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

     //6. function that fetches movies imported from API
    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);  //grabbing new data so we want to make sure theres no error initially
            setLoading(true); //will be waiting for data so we want to show that it is loading.

            const movies = await API.fetchMovies(searchTerm, page);
            //7. useing spread operator to spread out the previous movies
            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results] 
            }));
        } catch (error) {
            setError(true)
        }
        setLoading(false);
    };
    //initial render
    useEffect(()=> {
        fetchMovies(1); //calls page 1 from movie API
    }, []); //depency array for use effect, want it to run once hence the empty array
    return { state: state, loading, error };
}