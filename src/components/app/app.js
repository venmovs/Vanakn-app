import React, {Component} from "react";
import './app.css';
import NavBar from "../navbar";
import MainPage from "../main-page";
import Modal from "../modal";
import AboutUs from "../about-us";
import {BrowserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component {

    labelCount = 1;

    state = {
        navData: [
            this.createNavItem("main", true),
            this.createNavItem("about"),
            this.createNavItem("other")
        ]
    };

    createNavItem(id, important = false) {
        return {
            label: this.labelCount++,
            important,
            id,
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

    disableAnother = (el) => {
        this.setState(({navData}) => {
            let newData = navData;
            newData.forEach((item) => {
                newData = this.toggleProperty(newData, item.id, el, false);
            });
            return {
                navData: newData
            }
        });
    };

    onToggleImportant = (id) => {
        this.disableAnother('important');
        this.setState(({navData}) => {
            return {
                navData: this.toggleProperty(navData, id, 'important', true)
            };
        });
    };



    render() {
        const {navData} = this.state;

        return (
            <Router>
                <div className='bg'>
                    <NavBar
                        nav={navData}
                        onToggleImportant={this.onToggleImportant}
                    />

                    <Route path="/main">
                        <MainPage href={navData[0].id}
                            exact
                        />
                    </Route>

                    <Route path="/gallery">
                        <Modal />
                    </Route>

                    <Route path="/about">
                        <AboutUs href={navData[1].id}
                        />
                    </Route>

                </div>
            </Router>

        );
    }
}

