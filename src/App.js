import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import SideBar from './components/sideBar/sideBar'
import Header from './components/sideBar/header'
import HomePage from './components/layout/homePage/homePage';
import ColorPickker from './components/layout/colorPicker';
import Skelenton from './components/layout/skelenton';
import LazyLoading from './components/layout/lazyLoading';
// import OtherPage from './components/layout/newPage'
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
            <Router>
                <Header />
                <MainPage>
                    <SideBar />
                    <section className="col-12 col-md-10 bg-light mt-2 pt-5">
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/color-picker" component={ColorPickker} />
                            <Route path="/skelenton" component={Skelenton} />
                            <Route path="/lazy-loading" component={LazyLoading} />
                        </Switch>
                    </section>
                </MainPage>
            </Router>
        </div>
    );
}

export default App;
