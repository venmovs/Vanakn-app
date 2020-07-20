import React from "react";
import './navbar.css';
import NavBarItem from "./navbar-item";
import {Link} from "react-router-dom";


const NavBar = ({nav, onToggleImportant, showNavBar}) => {




    const elements = nav.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <div key={id}  className="nav-bar-page">
                <Link to={id}>
                    <NavBarItem
                        {...itemProps}
                        onToggleImportant={() => onToggleImportant(id)}
                    />
                </Link>
            </div>
        );
    });

    let styleNav = {display: 'none'};
    if (showNavBar){
        styleNav = {display: 'flex'}
    } else {
        styleNav = {display: 'none'};
    }

    return (
        <div className="nav-bar-wrapper" style={styleNav}>
            {elements}
        </div>
    );
};

export default NavBar;
