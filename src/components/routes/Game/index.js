import React from 'react';

const GamePage = ({onChangePage}) => {
    const handleClick = () => {
        onChangePage && onChangePage('app')
    }
    return (
        <button onClick={handleClick}>
            Go to HomePage
        </button>
    );
};

export default GamePage;
