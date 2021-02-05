import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import PokemonCard from "../../PokemonCard";
import database from "../../../services/firebase";
import styles from './style.module.css'

const GamePage = () => {
        const [ps, setPs] = useState({})

        useEffect(() => {
            database.ref('pokemons').once('value', (snapshot) => {
                setPs(snapshot.val())
            })
        }, [ps])

        const writeIsActive = (values) => {
            console.log(values)
            database.ref('pokemons/' + values.objId).set({
                ...values.pokemon
            });
        }

        const changeActive = (id) => {
            setPs(prevState => {
                return Object.entries(prevState).reduce((acc, item) => {
                    const pokemon = {...item[1]}
                    if (pokemon.id === id) {
                        pokemon.active = !pokemon.active;
                        writeIsActive({objId: item[0], pokemon})
                    }
                    acc[item[0]] = pokemon;

                    return acc;
                }, {})
            })

        }

        const handleCreatePokemon = () => {
            const newKey = database.ref().child('pokemons').push().key;
            const newPokemon = {
                "abilities": ["keen-eye", "tangled-feet", "big-pecks"],
                "base_experience": 122,
                "height": 11,
                "id": 17,
                "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
                "name": "pidgeotto",
                "stats": {
                    "attack": 60,
                    "defense": 55,
                    "hp": 63,
                    "special-attack": 50,
                    "special-defense": 50,
                    "speed": 71
                },
                "type": "flying",
                "values": {
                    "bottom": 7,
                    "left": 5,
                    "right": 2,
                    "top": "A"
                }
            }
            database.ref('pokemons/' + newKey).set(newPokemon);
        }

        return (
            <>
                <h1>Game Page</h1>
                <button onClick={handleCreatePokemon}>Создать нового покемона</button>
                <div className={styles.flex}>
                    {
                        Object.entries(ps).map(([key, {name, values, type, id, img, active}]) => <PokemonCard
                                name={name}
                                values={values}
                                type={type}
                                id={id}
                                img={img}
                                active={active}
                                changeActive={changeActive}
                                key={key}
                            />
                        )}

                </div>
                <Link to="/">Go to home</Link>
            </>

        );
    }
;

export default GamePage;
