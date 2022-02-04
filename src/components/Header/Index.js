import React from 'react';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

//1. Created Header.styles.js for the css. Made 2 divs called wrapper and content and 2 imgs called LogoImg and TMDBLogoImg. Set the
//structure of the header up as Wrapper -> content -> then both images in the content.


const Header = () => {
  return (
  <Wrapper>
    <Content>
        <LogoImg src={RMDBLogo} alt="rmdb-logo"/>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo"/> 
    </Content>
  </Wrapper>);
};

export default Header;
