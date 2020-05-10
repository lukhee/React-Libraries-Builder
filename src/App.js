import React from 'react';
import styled from 'styled-components'
import SideBar from './components/sideBar/sideBar'
import Header from './components/sideBar/header'
// import './App.css';

const MainPage = styled.div`
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    background: #f8f9fa;
    display: flex;
`

const App = () => {
    return (
        <div>
            <Header />
            <MainPage>
                <SideBar />
                <section className="col-12 col-md-8 bg-danger">
                    <p> Main Page </p>
                </section>
            </MainPage>
        </div>
    );
}

export default App;
