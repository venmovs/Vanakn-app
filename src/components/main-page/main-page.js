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

        return (
            <div>
                <div style={{display: this.state.display === 'none' ? 'block' : 'none'}}>
                    <h1 className={classNames}
                        onClick={this.openModal}>
                        VANAKN</h1>
                </div>
                <Modal display={this.state.display}
                       onBack={this.closeModal}/>
            </div>
        )
    }


};


