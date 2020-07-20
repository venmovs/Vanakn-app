import React, {Component} from "react";
import './app.css';
import NavBar from "../navbar";
import MainPage from "../main-page";
import Modal from "../modal";
import Advantages from "../advantages";
import Consultation from "../consultation";
import Calculator from "../calculator";
import {Contact} from "../contact";
import toggleProperty from "../toggle-property";
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {

    labelCount = 1;

    state = {
        showNavBar: true,
        navData: [
            this.createNavItem("/", true),
            this.createNavItem("/advantages"),
            this.createNavItem("/consultation"),
            this.createNavItem('/calculator'),
            this.createNavItem('/contact')
        ]
    };

    createNavItem(id, important = false) {
        return {
            label: this.labelCount++,
            important,
            id
        }
    }

    onToggleImportant = (id) => {
        this.setState(({navData}) => {
            navData.forEach((item) => {
                item.important = false
            });
            return {
                navData: toggleProperty(navData, id, 'important', true)
            };
        });
    };

    showNavBarFunc=(switcher)=>{
        this.setState({showNavBar: switcher})
    };




    render() {
        const {navData} = this.state;
        return (
            <Router>
                <div className='bg'>
                    <Route path="/gallery">
                        <Modal showNavBarFunc={this.showNavBarFunc}/>
                    </Route>
                    <NavBar
                        nav={navData}
                        onToggleImportant={this.onToggleImportant}
                        showNavBar={this.state.showNavBar}
                    />
                    <Route path="/"
                           exact>
                        <MainPage href={navData[0].id}
                                  showNavBarFunc={this.showNavBarFunc}/>
                    </Route>
                    <Route path="/advantages">
                        <Advantages href={navData[1].id}/>
                    </Route>
                    <Route path='/consultation'>
                        <Consultation href={navData[2].id}/>
                    </Route>
                    <Route path='/calculator'>
                        <Calculator href={navData[3].id}/>
                    </Route>
                    <Route path='/contact'>
                        <Contact href={navData[4].id}/>
                    </Route>
                </div>
            </Router>
        );
    }
}

