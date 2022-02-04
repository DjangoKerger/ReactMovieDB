//1. This component will not have its own styles as the components brought in will bring their styles. 
//2. this component will have state so import the useState hook from react

import React, { useState } from 'react';
//config, 4. this comes from the config file for when we are interacting witht he API
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
// Components

//Hook

//Image

//3. import and image for when no image is found

import NoImage from '../images/no_image.jpg'
// 5.  
const Home = () => {
    const [state, setState] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

  return (
    <div>
        Home Page
    </div>);
};

export default Home;
