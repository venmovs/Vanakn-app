import React, {Component} from "react";
import './app.css';
import NavBar from "../navbar";
import MainPage from "../main-page";
import Modal from "../modal";
import Advantages from "../advantages";
import {BrowserRouter as Router, Route} from 'react-router-dom';




export default class App extends Component {

    labelCount = 1;

    state = {
        navData: [
            this.createNavItem("/", true),
            this.createNavItem("about"),
            this.createNavItem("other")
        ]
    };

    createNavItem(id, important = false) {
        return {
            label: this.labelCount++,
            important,
            id
        }
    }

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


    onToggleImportant = (id) => {

        this.setState(({navData}) => {
            navData.forEach((item)=>{
                item.important = false
            });
            return {
                navData: this.toggleProperty(navData, id, 'important', true)
            };
        });
    };




/*    scrollSite=(y) =>{
        if(y < 0){
            console.log('top')
        } else {
            console.log('slide down')
        }
    };

    componentDidMount(){
        window.addEventListener('wheel', (e) => {
            this.scrollSite(e.wheelDelta);
        })
    }*/



    render() {
        const {navData} = this.state;

        return (
            <Router>
                <div className='bg'>

                    <Route path="/gallery">
                        <Modal />
                    </Route>

                            <NavBar
                                nav={navData}
                                onToggleImportant={this.onToggleImportant}
                            />

                    <Route path="/"
                           exact>
                        <MainPage href={navData[0].id} />
                    </Route>



                    <Route path="/about">
                        <Advantages href={navData[1].id} />
                    </Route>

                </div>
            </Router>

        );
    }
}

