import React, { Component } from "react";
import ReactDom from 'react-dom';
import './app.css';
import MainPage from "../main-page";


export default class App extends Component{


    render() {
        return (
            <div className='bg'>
                <MainPage />
            </div>
        );
    }
}