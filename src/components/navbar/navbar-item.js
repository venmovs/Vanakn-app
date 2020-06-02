import React from "react";
import './navbar.css';


const NavBarItem = ({label, onToggleImportant, important}) => {

    let classNames = 'nav-bar-line';
    if (important) {
        classNames += ' nav-bar-line-active scale-in-hor-left'
    }

    let classForNum = 'nav-bar-n';
    if (important) {
        classForNum += ' scale-in-hor-left'
    }


    return (
        <div className="n-line-wrapper"
             onMouseEnter={onToggleImportant}
        >


            <div className={classNames}>
            </div>
            <div className={classForNum}>
                {label}
            </div>
        </div>

    )
};

export default NavBarItem;




