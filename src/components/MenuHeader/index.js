import React, {useState} from 'react';
import Menu from "./Menu";
import NavBar from "./Navbar";

const MenuHeader = ({bgActive}) => {
    const [open, setOpen] = useState(null)
    const handleOnChangeOpen = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <div>
            <Menu isOpen={open} handleOnChangeOpen={handleOnChangeOpen}/>
            <NavBar isOpen={open} onChangeOpen={handleOnChangeOpen} bgActive={bgActive}/>
        </div>
    );
};

export default MenuHeader;
