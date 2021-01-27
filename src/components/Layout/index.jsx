import React from 'react';
import styles from './Layout.module.css'

const Layout = ({id=0, title, descr, urlBg, colorBg}) => {
    const background = urlBg ? { backgroundImage: `url(${urlBg})` } : colorBg ? {background: colorBg} : null
    return (
        <section className={styles.root} id={id}>
            <div className={styles.wrapper} style={background}>
                <article>
                    <div className={styles.title}>
                        {title && <h3>{title}</h3>}
                        <span className={styles.separator}></span>
                    </div>
                    <div className={styles.desc + ' ' + styles.full}>
                        {descr && <p>{descr}</p>}
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Layout;
