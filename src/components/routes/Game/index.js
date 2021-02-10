import React, {useEffect, useState} from 'react'
import {useRouteMatch, Route, Switch} from "react-router-dom"
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import {PokemonContext} from "../../../context/pokemonContext";
import database from "../../../services/firebase";

const GamePage = () => {
    const [pokemon, setPokemon] = useState([])
    const match = useRouteMatch();
    const handleSelectPokemon = (id) => {
        setPokemon(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]}
                if (pokemon.id === id) {
                    pokemon.isSelected = !pokemon.isSelected;
                }
                acc[item[0]] = pokemon;

                return acc;
            }, {})
        })
    }

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemon(snapshot.val())
        })
    }, [])


    return (
        <PokemonContext.Provider value={{
            pokemon,
            selectPokemon: handleSelectPokemon
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage}/>
                <Route path={`${match.path}/board`} component={BoardPage}/>
                <Route path={`${match.path}/finish`} component={FinishPage}/>
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage
