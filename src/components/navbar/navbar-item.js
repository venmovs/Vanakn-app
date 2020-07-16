import React from "react";
import './navbar.css';


const NavBarItem = ({label, onToggleImportant, important}) => {

    let classNames = 'nav-bar-line';
    if (important) {
        classNames += ' nav-bar-line-active'
    }

    let classForNum = 'nav-bar-n';
    if(important){
        classForNum += ' fade-in';
    }

    let styleNum = {display: 'none'};

    if(important){
        styleNum = {display: 'block'}
    }


    return (
        <div className="n-line-wrapper"
             onClick={onToggleImportant}>
            <div className={classNames}>
            </div>
            <div className={classForNum} style={styleNum}>
                {label}
            </div>
        </div>

    )
};

export default NavBarItem;




