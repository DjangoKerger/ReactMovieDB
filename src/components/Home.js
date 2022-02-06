//1. This component will not have its own styles as the components brought in will bring their styles. 
//2. this component will have state so import the useState hook from react


import React, { useState, useEffect } from 'react';
//config, 4. this comes from the config file for when we are interacting witht he API
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
// Components

//Hook
import {useHomeFetch} from '../hooks/useHomeFetch'
//Image
import NoImage from '../images/no_image.jpg'

// 5. setting up our different states. 
// whole section now moved to useHomeFetch as a custom hook
const Home = () => {
    const {state, loading, error} = useHomeFetch();
    console.log(state)


  return (
    <div>
        Home Page
    </div>);
};

export default Home;
