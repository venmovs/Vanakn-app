import React, {Component} from "react";
import './app.css';
import NavBar from "../navbar";
import MainPage from "../main-page";
import Modal from "../modal";
import Advantages from "../advantages";
import Consultation from "../consultation";
import toggleProperty from "../toggle-property";
import {BrowserRouter as Router, Route} from 'react-router-dom';



export default class App extends Component {


    labelCount = 1;

    state = {
        page: '',
        navData: [
            this.createNavItem("/", true),
            this.createNavItem("/advantages"),
            this.createNavItem("/consultation")

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
            navData.forEach((item)=>{
                item.important = false
            });
            return {
                navData: toggleProperty(navData, id, 'important', true)
            };
        });
    };




    scrollSite = (y) => {
       let router = new Router();
       let location = router.history.location.pathname;
        let currentPage = 0;
        this.state.navData.forEach((items) => {
            if (items.id === location) {
                currentPage = items.label;
            }
        });

        if (y < 0) {
            if (currentPage > 0) {
                this.setState(() => {
                    return {page: '/advantages'};
                });
                return router.history.push(this.state.page);
            }
        } else {
            if (currentPage < this.state.navData.length) {
                this.setState(() => {
                    return {page: '/consultation'};
                });
                return router.history.push(this.state.page);
            }
        }
    };


/*
    this.state.navData[currentPage - 1].id
*/




    componentDidMount () {
        window.addEventListener('wheel', (e) => {
            this.scrollSite(e.deltaY);
        });
    };





    render() {
        const {navData} = this.state;




        return (
            <Router key={this.state.page}>

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



                    <Route path="/advantages">
                        <Advantages href={navData[1].id} />
                    </Route>

                    <Route path='/consultation'>
                        <Consultation />
                    </Route>

                </div>
            </Router>

        );
    }
}

