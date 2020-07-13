import React from "react";
import './main-page.css';
import {Link} from "react-router-dom";

/*import ReactVivus from 'react-vivus';
import svg from '../../img/house.svg';*/

const MainPage = ({href}) => {






        return (
            <div  id={href}>
                <div>
                    <Link to="/gallery" className='logo'>
                        VANAKN
                    </Link>
                    <div className='main-page-wrapper'>
                        <div className='tittle'>
                            Поставляем камни из Армении
                        </div>
                        <div className='sub-tittle'>
                            Удобная схема для получения камней
                            в любую точку земного шара
                        </div>

                        <div className='scroll-down-wrapper'>
                            <img className='mouse' src={require('../../img/mouse.svg')} alt="mouse"/>
                            <img className='slide-bottom' src={require('../../img/arrow-down.svg')} alt="arrow-down"/>
                        </div>
                    </div>
                    <a className="mail" href="#">vanakn.llc@gmail.com</a>
                </div>
            </div>
        )
};

export default MainPage;

