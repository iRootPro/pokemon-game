import React from 'react';
import styles from './style.module.css'
import cn from 'classnames'

const Menu = ({isOpen}) => {
    return (
        <div className={cn(styles.menuContainer, {[styles.active]: isOpen})}>
            <div className={styles.overlay}/>
            <div className={styles.menuItems}>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
