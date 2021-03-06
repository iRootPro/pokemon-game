import React from 'react';
import {useHistory} from 'react-router-dom'
import styles from './Header.module.css'

const Header = ({title, descr}) => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/game')
    }
    return (
        <header className={styles.root}>
            <div className={styles.forest}></div>
            <div className={styles.silhouette}></div>
            <div className={styles.moon}></div>
            <div className={styles.container}>
                {title && <h1>{title}</h1>}
                {descr && <p>{descr}</p>}
                <button onClick={handleClick}>
                    Start game
                </button>
            </div>
        </header>
    );
};

export default Header;
