import React, {Component} from 'react'
import Calculator from "awesome-react-calculator";

const style = {
    height: '24rem',
    width: '15rem'
};

export default class MiniCalc extends Component {

    render() {
        const {miniCalc} = this.props;

        let miniCalcClassName = 'mini-calc';
        let miniCalcStyle = {display: 'none'};

        if (miniCalc) {
            miniCalcStyle = {display: 'block'};
            miniCalcClassName+= ' bounce-calc';
        }

        return <div className={miniCalcClassName} style={miniCalcStyle}>
            <div className='calculator-demo' style={style}>
                <Calculator/>
            </div>
        </div>
    }
}