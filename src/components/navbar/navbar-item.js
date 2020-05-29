import React, {Component} from "react";
import './navbar.css';


export default class NavBarItem extends Component {

    render() {

        const {label, onToggleImportant, important, onToggleChoose} = this.props;

        let classNames = 'nav-bar-line';
        if(important){
            classNames += ' nav-bar-line-active scale-in-hor-left'
        }

        let classForNum = 'nav-bar-n';
        if(important){
            classForNum += ' scale-in-hor-left'
        }


        return(
            <div className="n-line-wrapper"
                 onMouseEnter={onToggleImportant}
                 onClick={onToggleChoose}
            >


            <div className={classNames}>
            </div>
            <div className={classForNum}>
                {label}
            </div>
            </div>

        )


    }

}


