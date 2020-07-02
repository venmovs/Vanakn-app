import React, {Component} from "react";
import './consultation.css';
import toggleProperty from "../toggle-property";


export default class Consultation extends Component{

 state ={
        username: '',
        connectionType: '',
        userData: '',
     forms: [
         {id: 1, active: true},
         {id: 2, active: false},
         {id: 3, active: false},
         {id: 4, active: false}
     ]
 };




    nameHandleChange = (event) => {
        this.setState({username: event.target.value});
    };

    connectionHandleChange = (event) => {
      this.setState({connectionType: event.target.value})
    };

    userDataHandleChange = (event) => {
        this.setState({userData: event.target.value})
    };



    currentPage = () => {
        let current = 0;
        this.state.forms.forEach((item) => {
            if(item.active){
                return current = item.id
            }
        });
        return current
    };

    /*handleFormSubmit(e) {
        e.preventDefault();
        let userData = this.state.newUser;

        fetch('http://example.com',{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data =>{
                console.log("Successful" + data);
            })
        })
    }*/


    pageChanger = (id, plusSlide) => {
        this.setState(({forms}) => {
            forms.forEach((item) => {
                item.active = false
            });
            if(plusSlide === true){
                return {
                    forms: toggleProperty(forms, id + 1, 'active', true)
                }
            }else {
                return {
                    forms: toggleProperty(forms, id - 1, 'active', true)
                }
            }
        });
    };


    changeDisplay = (condition, reverse = false) => {
        if (reverse === false){
            if(condition){
                return {display: 'flex'}
            } else {
                return  {display: 'none'}
            }
        } else {
            if(condition){
                return {display: 'none'}
            } else {
                return  {display: 'flex'}
            }
        }

    };


render() {

    const {forms, username, connectionType} = this.state;

    return(
        <div className="consultation_wrapper">
            <div className="consultation_tittle">
                Бесплатная консультация
            </div>


            <form className="consultation_block_wrapper">

                <label key={forms[0].id} style={this.changeDisplay(forms[0].active)}
                       className='consultation_block_wrapper_name'>
                    <input className="consultation_block_wrapper_input" name="connection" placeholder="Имя Отчество" type="text"
                           value={username}
                           onChange={this.nameHandleChange} />
                </label>

                <label key={forms[1].id} style={this.changeDisplay(forms[1].active)}
                       className='consultation_block_wrapper_select'>
                    <div className="select_tittle">{username}</div>
                    <div className='select_sub_tittle'> Выберите удобный вид связи</div>
                   <div className='select_wrapper'>
                       <div>
                       <input type="radio" value='mail' name="connection" id='checkbox-email'
                                     onClick={this.connectionHandleChange}/>
                       <label htmlFor='checkbox-email'>Почта</label>
                       </div>
                       <div>
                       <input type="radio" value='tel' name="connection" id='checkbox-tel'
                                     onClick={this.connectionHandleChange}/>
                       <label htmlFor='checkbox-tel'>Телефон</label>
                       </div>
                   </div>
                </label>

                <label key={forms[2].id} style={this.changeDisplay(forms[2].active)}>
                    <input type={connectionType === 'tel' ? 'tel' : 'email'} name="connection"
                           placeholder={connectionType === 'tel' ? 'Введите номер телефона' : 'Адрес эл. почты' }
                            onChange={this.userDataHandleChange}/>
                </label>

                <label key={forms[3].id} style={this.changeDisplay(forms[3].active)}>
                    <input type="textarea" name="connection"/>
                    <input type="file" name="connection"/>
                    <input type="submit" name="connection" title="Проект сооружения"/>
                </label>

            </form>

            <div className="consultation_next" style={this.changeDisplay(forms[forms.length - 1].active, true)}
                 onClick={()=>this.pageChanger(this.currentPage(), true)}>
                <div className="consultation_next_text">
                    Дальше
                </div>
                <img src={require("../../img/small-arrow-right.svg")} alt="arrow"/>
            </div>

            <div className="consultation_back" style={this.changeDisplay(forms[0].active, true)}
                 onClick={()=> this.pageChanger(this.currentPage(), false)}>
                <img src={require("../../img/arrow-left.svg")} alt="arrow"/>
                <div className="consultation_back_text">
                    Назад
                </div>
            </div>

        </div>
    )
}
};


