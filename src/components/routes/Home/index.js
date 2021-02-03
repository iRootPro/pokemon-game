import React from "react";
import styles from './style.module.css'
import Header from "./../../Header";
import Layout from "./../../Layout";
import Footer from "./../../Footer";
import pokemons from './../../../db/pokemons'
import bg1 from './../../../assets/bg1.jpg'
import bg3 from './../../../assets/bg3.jpg'
import PokemonCard from "./../../PokemonCard";
import MenuHeader from "../../MenuHeader";


function HomePage({onChangePage}) {
    // const items = pokemons.map(pokemon => <PokemonCard
    //     key={pokemon.id}
    //     type={pokemon.type}
    //     values={pokemon.values}
    //     img={pokemon.img}
    //     name={pokemon.name}
    //     id={pokemon.id}
    // />)
    const handleClickButton = () => {
        console.log('HomePage')
        onChangePage && onChangePage('game')
    }
    return (
        <div>
            <MenuHeader/>
            <Header
                title='This is title'
                descr='This is Description!'
                onClickButton={handleClickButton}
            />
            <Layout title='Заголовок для Layout 1' descr='Описание для layout 1' id={1} urlBg={bg1}>
                <p>In the game two players face off against one another, one side playing as "blue", the other
                    as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning
                    them into the player's own color of red or blue.
                </p>
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the
                    board) must be of the player's card color. To do this, the player must capture cards by placing a
                    card
                    adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be
                    compared. If the rank of the opponent's card is higher than the player's card, the player's card
                    will be
                    captured and turned into the opponent's color. If the player's rank is higher, the opponent's card
                    will
                    be captured and changed into the player's color instead.
                </p>
            </Layout>
            {/*<Layout title='Покемоны' descr='Описание для layout 2' id={2} colorBg='green'>*/}
            {/*    <div className={styles.flex}>*/}
            {/*        {items}*/}
            {/*    </div>*/}
            {/*</Layout>*/}
            <Layout title='Заголовок для Layout 3' descr='Описание для layout 3' id={3} urlBg={bg3}/>
            <Footer/>
        </div>
    );
}

export default HomePage;
