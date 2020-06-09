import React, {Component} from "react";
import './advantages.css';
import '../../img/advantages1.jpg';


export default class Advantages extends Component {

    state = {
      pageItem: [
          {id: 1, label: 'delivery', number: 1, img: "1", active: true},
          {id: 2, label: 'Garant', number: 2, img: "1", active: false},
          {id: 3, label: 'Exp', number: 3, img: "1", active: false}
      ]
    };






    toggleProperty(arr, id, propName, activate) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: activate
        };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }


        disableAnother = (el) => {
            this.setState(({pageItem}) => {
                let newItems = pageItem;
                newItems.forEach((item) => {
                    newItems = this.toggleProperty(newItems, item.id, el, false);
                });
                return {
                    pageItem: newItems
                }
            });
        };

       onToggleActive = (id) => {
            this.disableAnother('active');
            this.setState(({pageItem}) => {
                return {
                    pageItem: this.toggleProperty(pageItem, id, 'active', true)
                };
            });
        };






    elements = this.state.pageItem.map((item) => {
        const {id, label, number, img} = item;


            return (
                <div key={id} >
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
            );


    });



    render() {

        const className = 'advantages-nav-item';
        const activeClass = ' active-adv-nav';

        const {pageItem} = this.state;

        const {href} = this.props;
        return (
            <div id={href} className="advantages-wrapper">
                {this.elements[0]}
                <ul className="advantages-nav">
                    <li onClick={()=> console.log(`${this.onToggleActive(1)}`)} className={pageItem[0].active === true ? className + activeClass : className}>
                        Доставка
                    </li>
                    <li  onClick={()=> console.log(`${this.onToggleActive(2)}`)} className={pageItem[1].active === true ? className + activeClass : className}>
                        Гарантия
                    </li>
                    <li  onClick={()=> console.log(`${this.onToggleActive(3)}`)} className={pageItem[2].active === true ? className + activeClass : className}>
                        Эксплуатация
                    </li>
                </ul>
            </div>
        )
    }

}

