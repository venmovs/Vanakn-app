import React, {Component} from "react";
import './consultation.css';
import toggleProperty from "../toggle-property";
import axios from 'axios';


export default class Consultation extends Component{

 state ={
        username: '',
        connectionType: '',
        userData: '',
        comment: '',
        file: null,
     forms: [
         {id: 1, active: true},
         {id: 2, active: false},
         {id: 3, active: false},
         {id: 4, active: false}
     ],
     faq: false
 };




    nameHandleChange = (event) => {
        this.setState({username: event.target.value});
    };

    connectionHandleChange = (event) => {
      this.setState({connectionType: event.target.value});
    };

    userDataHandleChange = (event) => {
        this.setState({userData: event.target.value});
    };

    commentHandChange = (event) => {
        this.setState({comment: event.target.value});
    };

    fileHandChange = (e) =>{
        this.setState({file: e.target.files[0]});
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

    faqShower = () => {
      this.setState(({faq}) => {
          return {
              faq: !faq
          }
      })
    };







    handleFormSubmit = (e) => {
        e.preventDefault();

        let dataForSend = {username: this.state.username, userData: this.state.userData, comment: this.state.comment, file: this.state.file};
        dataForSend = JSON.stringify(dataForSend);

        axios
            .post('http://vanakn.am/mail.php', dataForSend)
            .then(response => {
                if (!response.ok){
                    throw new Error("Что-то пошло не так")
                }
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
    };




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
    const {href} = this.props;
    const {forms, username, connectionType, faq, file} = this.state;
    return(
        <div className="center">
        <div id={href} className="consultation_wrapper">
            <div className="consultation_tittle">
                Бесплатная консультация
            </div>

            <div className="faq"
            onClick={this.faqShower}>
                ?
            </div>

            <form className="consultation_block_wrapper" onSubmit={this.handleFormSubmit}>

                <div className="faq_attribute" style={this.changeDisplay(faq)}>
                    Консультация бесплатная, наша задача чтобы перед пользователем нашего сайта была максимально прозрачная картина!
                </div>

                <label key={forms[0].id} style={this.changeDisplay(forms[0].active && faq === false)}
                       className='consultation_block_wrapper_name'>
                    <input className="consultation_block_wrapper_input" name="connection" placeholder="Имя Отчество" type="text"
                           value={username}
                           onChange={this.nameHandleChange} />
                </label>

                <label key={forms[1].id} style={this.changeDisplay(forms[1].active && faq === false)}
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

                <label key={forms[2].id} style={this.changeDisplay(forms[2].active && faq === false)}>
                    <input type={connectionType === 'tel' ? 'tel' : 'email'} name="connection"
                           placeholder={connectionType === 'tel' ? 'Номер телефона' : 'Адрес эл. почты' }
                           className="consultation_block_wrapper_input"
                            onChange={this.userDataHandleChange}/>
                </label>

                <label key={forms[3].id} style={this.changeDisplay(forms[3].active && faq === false)}
                className="submit_page_wrapper">

                    <textarea className="comment"  placeholder="Оставить комментарий можете здесь"
                            name="connection"
                            onChange={this.commentHandChange}/>
                    <div className='fail_submit_wrapper'>
                        <input className='inputfile' type="file" id="file" name="connection"
                        onChange={this.fileHandChange}/>
                        <label htmlFor="file">{file === null ? "Выберите файл" : "Файл загружен" }</label>
                        <input type="submit" name="connection" className='submit'/>
                    </div>
                </label>

            </form>

            <div className="consultation_next bounce-in-left" style={this.changeDisplay(forms[forms.length - 1].active, true)}
                 onClick={()=>this.pageChanger(this.currentPage(), true)}>
                <div className="consultation_next_text">
                    Дальше
                </div>
                <img src={require("../../img/small-arrow-right.svg")} alt="arrow"/>
            </div>

            <div className="consultation_back bounce-in-right" style={this.changeDisplay(forms[0].active, true)}
                 onClick={()=> this.pageChanger(this.currentPage(), false)}>
                <img src={require("../../img/arrow-left.svg")} alt="arrow"/>
                <div className="consultation_back_text">
                    Назад
                </div>
            </div>

        </div>
        </div>
    )
}
};


