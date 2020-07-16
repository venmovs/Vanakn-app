import React, {Component} from "react";
import './calculator.css';
import DiscreteSlider from './discreteSlider';
import SimpleSelect from './simpleSelect';
import MiniCalc from "./mini-calc";

export default class CalculatorStone extends Component {

    state = {
        type: 0,
        count: 0,
        packing: 0,
        guarantee: 0,
        miniCalc: false
    };



    typeHandleChange = (event) => {
        this.setState({type: event.target.value});
    };

    countHandleChange = (event) => {
        this.setState({count: +event.target.ariaValueNow});
    };

    packagingHandleChange = (event) => {
        this.setState({packing: +event.target.value});
    };

    guaranteeHandleChange = (event) => {
        this.setState({guarantee: +event.target.value});
    };

    onToggleMiniCalc = (id) => {
        this.setState({miniCalc: !this.state.miniCalc})
    };




    render() {
        const {href} = this.props;
        const {type, count, packing, guarantee} = this.state;

        return (
            <div id={href} className="calculator">
                <div className='calculator-wrapper'>
                    <div className="consultation_tittle">
                        Калькулятор для оценки стоимости
                    </div>
                    <div className='small-wrapper'>
                        <div className='left-calc'>
                            <div className="calculator-tittle">
                                Выберите камень
                            </div>
                            <div className='calculator-number'>
                                1
                            </div>
                        </div>
                        <div className="right-calc">
                            <div className="calculator-input">
                                <SimpleSelect typeHandleChange={this.typeHandleChange}/>
                            </div>
                        </div>
                    </div>

                    <div className='small-wrapper'>
                        <div className='left-calc'>
                            <div className="calculator-tittle">
                                Количество камня
                            </div>
                            <div className='calculator-number'>
                                2
                            </div>
                        </div>

                        <div className="right-calc">
                            <DiscreteSlider countHandleChange={this.countHandleChange}/>
                        </div>
                    </div>


                    <div className='small-wrapper-reverse'>
                        <div className="top-calc">
                            <div className="calculator-tittle">
                                Дополнительные параметры
                            </div>
                            <div className='calculator-number'>
                                3
                            </div>
                        </div>
                        <div className="bottom-calc">
                            <div className='type-wrapper'>
                                Тип упаковки
                                <div className='select_wrapper'>
                                    <div>
                                        <input onChange={this.packagingHandleChange} type="radio" value='1500' name='calculator-packaging' id='checkbox-box'
                                        />
                                        <label htmlFor='checkbox-box'>Ящик</label>
                                    </div>
                                    <div>
                                        <input onChange={this.packagingHandleChange} type="radio" value='2000' name='calculator-packaging' id='checkbox-pallet'
                                        />
                                        <label htmlFor='checkbox-pallet'>Паддон</label>
                                    </div>
                                </div>
                            </div>

                            <div className='type-wrapper'>
                                Гарантия
                                <div className='select_wrapper'>
                                    <div>
                                        <input onChange={this.guaranteeHandleChange} type="radio" value='1000' name='calculator' id='checkbox-standard'
                                        />
                                        <label htmlFor='checkbox-standard'>Типовая</label>
                                    </div>
                                    <div>
                                        <input onChange={this.guaranteeHandleChange} type="radio" value='2000' name='calculator' id='checkbox-premium'
                                        />
                                        <label htmlFor='checkbox-premium'>Премиум</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="calc-result">
                        <div className="calc-result-tittle">
                            Примерная стоимость:
                        </div>
                        <div className="calc-result-number">
                            {type * count + guarantee + packing} ₽
                        </div>
                    </div>
                </div>

                <div className='singl-calc'>
                    <div className='mini-calc-wrapper'>
                        <div className="plus" onClick={()=>this.onToggleMiniCalc()}>
                        </div>
                        <div>
                            <MiniCalc miniCalc={this.state.miniCalc}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

