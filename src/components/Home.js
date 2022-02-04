//1. This component will not have its own styles as the components brought in will bring their styles. 
//2. this component will have state so import the useState hook from react

//APi, import function from APi
import API from '../API';

import React, { useState, useEffect } from 'react';
//config, 4. this comes from the config file for when we are interacting witht he API
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
// Components

//Hook

//Image
import NoImage from '../images/no_image.jpg'

// 5. setting up our different states. 
const Home = () => {
    const [state, setState] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

     //6. function that fetches movies imported from API
    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false)  //grabbing new data so we want to make sure theres no error initially
            setLoading(true) //will be waiting for data so we want to show that it is loading.

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
        fetchMovies(1) //calls page 1 from movie API
    }, []) //depency array for use effect, want it to run once hence the empty array


  return (
    <div>
        Home Page
    </div>);
};

export default Home;
