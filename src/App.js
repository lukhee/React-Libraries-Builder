import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import SideBar from './components/sideBar/sideBar'
import Header from './components/sideBar/header'
import HomePage from './components/layout/homePage/homePage';
import ColorPickker from './components/layout/colorPicker';
import Skelenton from './components/layout/skelenton';
import LazyLoading from './components/layout/lazyLoading';
import DarkModeToggle from './components/layout/darkModeToggle';
import FileUload from './components/layout/filesUpload/fileUpload';
import Login from './components/layout/auth/login';
import Register from './components/layout/auth/register';
import FileManager from './components/layout/auth/fileManager';

const MainPage = styled.div`
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    background: #f8f9fa;
    display: flex;
`

const MainSection = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow-y: auto
`

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <MainPage>
                    <SideBar />
                    <section className="col-12 col-md-10 bg-light mt-2  px-0 pt-5">
                        <MainSection>
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <Route path="/color-picker" component={ColorPickker} />
                                <Route path="/skelenton" component={Skelenton} />
                                <Route path="/lazy-loading" component={LazyLoading} />
                                <Route path="/dark-mode" component={DarkModeToggle} />
                                <Route path="/file-upload" component={FileUload} />
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Register} />
                                <Route path="/file-manager" component={FileManager} />
                            </Switch>
                        </MainSection>
                    </section>
                </MainPage>
            </Router>
        </div>
    );
}

export default App;
