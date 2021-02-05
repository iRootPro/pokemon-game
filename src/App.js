import React, {useState} from 'react';
import HomePage from "./components/routes/Home";
import GamePage from "./components/routes/Game";
import {useRouteMatch, Switch, Route} from "react-router-dom";
import cn from 'classnames'
import AboutPage from "./components/routes/About";
import NotFound from "./components/routes/NotFound";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import styles from './style.module.css'

const App = () => {
    const match = useRouteMatch('/')
    return (
        <Switch>
            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact}/>
                    <div className={cn(styles.wrap, {[styles.isHomePage]: match.isExact})}>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/home" component={HomePage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route render={() => <NotFound/>}/>
                        </Switch>
                    </div>
                    <Footer/>

                </>
            </Route>
        </Switch>

    )


};

export default App;
