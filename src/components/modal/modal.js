import React from "react";
import './modal.css';
import Slider1 from "../modal-func";
import ArrowBack from '../../img/arrow-back.svg';




const Modal = ({display, onBack}) => {




        return (
            <div className='bg-modal'
                 style={{display: display}}>
                <div className='back-wrapper'
              onClick={onBack}>
                    <img className='arrow-back' src={ArrowBack} alt="back"/>
                    <div className='back-to-main'>назад</div>
                </div>
                <div id='modal-func'>
                    <Slider1 />
                    <div className='bg-modal-logo'>VANAKN</div>
                </div>
            </div>
        )

};


export default Modal;