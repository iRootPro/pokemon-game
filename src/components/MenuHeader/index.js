import React, {useState} from 'react';
import Menu from "./Menu";
import NavBar from "./Navbar";

const MenuHeader = () => {
    const [open, setOpen] = useState(false)
    const handleOnChangeOpen = () => {
        setOpen(prevState => !prevState)
    }
    return (
        <div>
            <Menu isOpen={open}/>
            <NavBar isOpen={open} onChangeOpen={handleOnChangeOpen}/>
        </div>
    );
};

export default MenuHeader;
