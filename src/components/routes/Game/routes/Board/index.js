import React from 'react'
import s from './style.module.css';
import {PokemonContext} from "../../../../../context/pokemonContext";
import {useContext} from "react";
import PokemonCard from "../../../../PokemonCard";

const BoardPage = () => {
    const {pokemon} = useContext(PokemonContext)
    const selectedPokemons = Object.entries(pokemon).reduce((acc, item) => {
        const pokemon = {...item[1]}
        if (pokemon.isSelected) {
            acc[item[0]] = pokemon;
        }
        return acc;
    }, {})

    const pokemons = Object.entries(selectedPokemons).map(([key, {name, values, type, id, img}]) =>
        <PokemonCard
            name={name}
            values={values}
            type={type}
            id={id}
            img={img}
            key={key}
            minimize={true}
            className={s.card}

        />
    )

    console.log(pokemons)

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {pokemons}
            </div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;
