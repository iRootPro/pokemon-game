import React, {useState} from 'react';
import {Link} from "react-router-dom";
import pokemons from "../../../db/pokemons";
import PokemonCard from "../../PokemonCard";

const GamePage = () => {
    const [ps, setPs] = useState(pokemons)

    const changeActive = (id) => {
        const newPs = ps.map(p => {
            if (p.id === id) {
                p.isActive = true
                return p
            }
            return p
        })
        setPs(newPs)
    }
    return (
        <>
            <h1>Game Page</h1>
            {ps.map(p => <PokemonCard
                name={p.name}
                values={p.values}
                type={p.type}
                id={p.id}
                img={p.img}
                isActive={p.isActive}
                changeActive={changeActive}
                key={p.id}
            />)}
            <Link to="/">Go to home</Link>
        </>

    );
};

export default GamePage;
