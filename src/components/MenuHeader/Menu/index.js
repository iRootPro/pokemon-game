import React from 'react';
import styles from './style.module.css'
import cn from 'classnames'
import {Link} from "react-router-dom";

const Menu = ({isOpen, handleOnChangeOpen}) => {
    const links = [
        {name: 'HOME', href: "/"},
        {name: 'GAME', href: "/game"},
        {name: 'ABOUT', href: "/about"},
        {name: 'CONTACT', href: "/contact"}
    ]

    const handleClickLink = () => {
        handleOnChangeOpen()
    }

    return (
        <div className={cn(styles.menuContainer,
            {
                [styles.active]: isOpen === true,
                [styles.deactive]: isOpen === false
            })}>
            <div className={styles.overlay}/>
            <div className={styles.menuItems}>
                <ul>
                    {links.map((link, index) => <li key={index}><Link to={link.href} onClick={handleClickLink}>{link.name}</Link></li>)}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
