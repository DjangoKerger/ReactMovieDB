import React from 'react';

//Components
import Header from './components/Header/Index';

//Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => {
    return (

        <div className='App'>
            <Header />
            Start Here!
            <GlobalStyle />
        </div>
    )
};

export default App;
