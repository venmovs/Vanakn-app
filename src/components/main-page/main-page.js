import React, {Component} from "react";
import './main-page.css';
import Modal from "../modal";


export default class MainPage extends Component {

    state = {
        display: 'none'
    };


    openModal = () => {
        this.setState(() => {
            return {
                display: 'block'
            }
        });
    };

    closeModal = () => {
        this.setState(() => {
            return {
                display: 'none'
            }
        });
    };


    render() {
        let classNames = 'logo';

        const {choose} = this.props;

        let display = {display: 'none'};

        if (choose){
            display ={display: 'block'}
        }

        return (
            <div style={display} id={this.props.href}>
                <div style={{display: this.state.display === 'none' ? 'block' : 'none'}}>
                    <h1 className={classNames}
                        onClick={this.openModal}
                        >
                        VANAKN</h1>
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
                </div>

                <Modal display={this.state.display}
                       onBack={this.closeModal}/>
                <div className='main-page-wrapper'>
                </div>
            </div>
        )
    }


};


