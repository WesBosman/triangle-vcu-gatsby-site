import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import styled from 'styled-components';

const ContentStyle = styled.div`
    margin: auto;
    max-width: 80%;
`;

export default function Layout({ children }){
    return (
        <>
            <GlobalStyles/>
            <Typography/>
            <Nav/>
            <ContentStyle>
                {children}
            </ContentStyle>
            <Footer/>
        </>
    )
}