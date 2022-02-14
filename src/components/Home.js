//1. This component will not have its own styles as the components brought in will bring their styles. 
//2. this component will have state so import the useState hook from react


import React from 'react';
//config, 4. this comes from the config file for when we are interacting witht he API
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';

//Hook
import {useHomeFetch} from '../hooks/useHomeFetch'
//Image
import NoImage from '../images/no_image.jpg'

// 5. setting up our different states. 
// whole section now moved to useHomeFetch as a custom hook
const Home = () => {
    const {state, loading, error, setSearchTerm} = useHomeFetch();
    console.log(state)


  return (

        //importing heroimage, check to see if theres anything in the array, if yes return HeroImage if no it will return false.
        <>
        {state.results[0] &&
        <HeroImage 
            //prop on heroImage, this calls for the image from the API origional is in the config file.
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
        />
        
        }
        <SearchBar setSearchTerm={setSearchTerm}/>
        <Grid header='Popular Movies'>
            {state.results.map(movie => (
                <Thumb 
                    key={movie.id}
                    clickable
                    image={
                        movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage
                    }
                    movieId={movie.id}
                    />
            ))}
        </Grid>
        <Spinner />               
        </>
    )
};

export default Home;
