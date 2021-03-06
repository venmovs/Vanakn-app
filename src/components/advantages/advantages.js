import React, {Component} from "react";
import './advantages.css';
import '../../img/advantages1.jpg';
import toggleProperty from "../toggle-property";


export default class Advantages extends Component {


    state = {
        pageItem: [
            {id: 1, label: 'Доставляем фурами в среднем за 15 дней до любой точки земли со дня заказа. ' +
                    ' Так же мы заботимся юююю', number: 1, img: "1", active: true},
            {id: 2, label: 'Доставляем фурами, в среднем за 15 дней довозим товар Доставляем фурами, в среднем за 15 дней довозим товарДоставляем фурами, в среднем за 15 дней довозим товарДоставляем фурами, в среднем за 15 дней довозим товарДоставляем фурами, в среднем за 15 дней довозим товарДоставляем фурами, в среднем за 15 дней довозим товар', number: 2, img: "2", active: false},
            {id: 3, label: 'Доставляем фурами, в среднем за 15 дней довозим товар Доставляем фурами, в среднем за 15 дней довозим товарДоставляем фурами, в среднем за 15 дней довозим товарДоставляем фурами, в среднем за 15 дней довозим товарДоставляем фурами, в среднем за 15 дней довозим товарДоставляем фурами, в среднем за 15 дней довозим товар', number: 3, img: "3", active: false}
        ]
    };



    onToggleActive = (id) => {

        this.setState(({pageItem}) => {
            pageItem.forEach((item) => {
                item.active = false
            });
            return {
                pageItem: toggleProperty(pageItem, id, 'active', true)
            };
        });
    };


    nextData = (id) => {
        this.setState(({pageItem}) => {
            pageItem.forEach((item) => {
                item.active = false
            });
            if (id < pageItem.length) {
                return {
                    pageItem: toggleProperty(pageItem, id + 1, 'active', true)
                }
            } else {
                return {
                    pageItem: toggleProperty(pageItem, pageItem[0].id, 'active', true)
                }

            }

        });
    };


    prepareData = () => {
        let preparedData = {};
        this.state.pageItem.forEach((item) => {
            if (item.active) {
                preparedData = {
                    id: item.id,
                    label: item.label,
                    img: item.img,
                    number: item.number,
                }
            }
        });
        return preparedData;
    };





    componentDidMount() {
        this.timer = setInterval(() => this.nextData(this.prepareData().id), 3000);
    }


    componentWillUnmount() {
        clearInterval(this.timer);
    }



    render() {
        const className = 'advantages-nav-item';
        const activeClass = ' active-adv-nav';

        const displayOf = {display: 'none'};
        const displayOn = {display: 'block'};

        const {pageItem} = this.state;
        const {href} = this.props;

        const {id, label, number, img} = this.prepareData();

        return (
            <div className="center">
            <div id={href} className="advantages-wrapper"
                 onMouseEnter={() => this.componentWillUnmount()}
                 onMouseLeave={() => this.componentDidMount()}>
                <div key={id}>
                    <img className="advantages-img" src={require(`../../img/advantages${img}.jpg`)} alt="test"/>
                    <div className="advantages-text-wrapper">
                        <div className="advantages-text">
                            {label}
                        </div>
                        <div className="advantages-number">
                            {number}
                        </div>
                    </div>
                </div>
                <div className="arrow-right" onClick={() => this.nextData(id)}>
                    <img src={require("../../img/arrow-right.svg")} alt="arrow-right"/>
                </div>
                <ul className="advantages-nav">
                    <li onClick={() => this.onToggleActive(pageItem[0].id)}
                        className={pageItem[0].active === true ? className + activeClass : className}>
                        Доставка
                        <div className='line-under-li line-right'
                             style={pageItem[0].active === true ? displayOn : displayOf}
                        />
                    </li>
                    <li onClick={() => this.onToggleActive(pageItem[1].id)}
                        className={pageItem[1].active === true ? className + activeClass : className}>
                        Гарантия
                        <div className='line-under-li line-right'
                             style={pageItem[1].active === true ? displayOn : displayOf}/>
                    </li>
                    <li onClick={() => this.onToggleActive(pageItem[2].id)}
                        className={pageItem[2].active === true ? className + activeClass : className}>
                        Эксплуатация
                        <div className='line-under-li line-right'
                             style={pageItem[2].active === true ? displayOn : displayOf}/>
                    </li>
                </ul>
            </div>
            </div>
        )
    }

}

