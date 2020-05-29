import React, { Component } from "react";
import './app.css';
import NavBar from "../navbar";
import MainPage from "../main-page";
import AboutUs from "../about-us";





export default class App extends Component{

     labelCount = 1;

    state = {
        navData: [
            this.createNavItem( "main", true, true),
            this.createNavItem( "about"),
            this.createNavItem("other")
        ]
    };

    createNavItem(id, choose = false, important = false) {
        return {
            label: this.labelCount++,
            important,
            id,
            choose
        }
    }

    toggleProperty(arr, id, propName, activate) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem,
            [propName]: activate};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    disableAnother = (el) =>{
        this.setState(({navData}) =>{
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
        this.setState(({ navData }) => {
            return {
                navData: this.toggleProperty(navData, id, 'important', true)
            };
        });
    };


    onToggleChoose = (id) => {
        this.disableAnother('choose');
        this.setState(({ navData }) => {
            return {
                navData: this.toggleProperty(navData, id, 'choose', true)
            };
        });
    };




    render() {
        const { navData } = this.state;


        return (
            <div className='bg'>
                <NavBar
                    nav={navData}
                    onToggleImportant={this.onToggleImportant}
                    onToggleChoose={this.onToggleChoose}
                />
                <MainPage href = {navData[0].id}
                choose={navData[0].choose}/>
                <AboutUs href = {navData[1].id}
                         choose={navData[1].choose}/>
            </div>
        );
    }
}

