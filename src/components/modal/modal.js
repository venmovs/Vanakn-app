import React from "react";
import './modal.css';
import '../../img/step.jpg';

const Modal = () => {

    return(
        <div className='bg-modal'>
            <div className='bg-modal-logo'>VANAKN</div>
            <div className='img-wrapper'>
                <img className='modal-img' src="../../img/first.png" alt="page"/>
            </div>
        </div>
    )
};

export default Modal;