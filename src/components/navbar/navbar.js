import React from "react";
import './navbar.css';
import NavBarItem from "./navbar-item";
import {Link} from "react-router-dom";


const NavBar = ({nav, onToggleImportant, onToggleChoose}) =>{

        const elements = nav.map((item) => {
                const { id, ...itemProps } = item;

                return (
                    <div key={id} className="nav-bar-page">
                        <Link to={id}>
                            <NavBarItem
                                {...itemProps }
                                onToggleImportant={() => onToggleImportant(id)}
                                onToggleChoose={() => onToggleChoose(id)}
                            />
                            </Link>
                    </div>
                );
        });

        return (
            <div className="nav-bar-wrapper">
                    { elements }
            </div>
        );
};

export default NavBar;
