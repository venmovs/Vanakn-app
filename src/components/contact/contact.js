import React, {Component} from "react";
import './contact.css';



import ParticleEffectButton from 'react-particle-effect-button'

class Contact extends Component{

    state = {
        hidden: false
    };

    copyToClipboard() {
        let copytext = document.createElement('input');
        copytext.value = "vanakn.llc@gmail.com";
        document.body.appendChild(copytext);
        copytext.select();
        document.execCommand('copy');
        document.body.removeChild(copytext)
    }

    changeVishion = ()=> {
        this.copyToClipboard();
      this.setState({hidden: true})
    };





    render() {

        let copyTextStyle = {display: "none"};

        if (this.state.hidden === true){
            copyTextStyle = {display: 'block'}
        }

        const {href} =this.props;
        return(
            <div id={href} className='center'>

                <div style={copyTextStyle} className='contact-copy'>
                    Почта скопирована
                </div>

                <div className='contact-tittle'>
                    По всем вопросам пишите на почту
                </div>
                <a href="mailto:vanakn.llc@gmail.com" className='contact-email'>
                    vanakn.llc@gmail.com
                </a>

                <ParticleEffectButton
                    color='#121019'
                    hidden={this.state.hidden}
                >
                    <div className='contact-button' onClick={()=> this.changeVishion()}>
                        копировать ссылку
                    </div>
                </ParticleEffectButton>

            </div>
        )
    }


}

export {Contact};





