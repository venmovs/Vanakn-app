import React, {Component} from "react";
import './main-page.css';
/*import ReactVivus from 'react-vivus';
import svg from '../../img/huy.svg';*/
import Modal from "../modal";


export default class MainPage extends Component{




    openModal(){
        console.log(11);
    }

    render() {
        let classNames = 'logo';



        return (
            <div>
                <h1 className={classNames}
                onMouseEnter={this.openModal}>
                    VANAKN</h1>

            {/*    <ReactVivus
                    id="foo"
                    option={{
                        file: svg,
                        animTimingFunction: 'EASE-IN',
                        type: 'oneByOne',
                        onReady: console.log,
                        duration: 1000
                    }}
                    style={{ height: '1000px', width: '1000px' }}
                    callback={console.log}
                />*/}
                <Modal />
            </div>
        )
    }




};


