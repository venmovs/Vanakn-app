import React from "react";
import './modal.css';
import Slider1 from "../modal-func";
import ArrowBack from '../../img/arrow-back.svg';
import {Link} from "react-router-dom";


const Modal = ({showNavBarFunc}) => {


        return (
            <div className='bg-modal'>
                <Link to="/" className='back-wrapper' onClick={()=> showNavBarFunc(true)}>
                    <img className='arrow-back' src={ArrowBack} alt="back"/>
                    <div className='back-to-main'>назад</div>
                </Link>
                <div id='modal-func'>
                    <Slider1 />
                    <div className='bg-modal-logo'>VANAKN</div>
                </div>
            </div>
        )

};

export default Modal;