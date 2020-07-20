import React from "react";
import './contact.css';

import ReactVivus from 'react-vivus';
import urban from '../../img/urban.svg';

const Contact = ({href}) => {

    const Urban = () => (
        <ReactVivus
            id="contactSvg"
            option={{
                file: urban,
                animTimingFunction: 'easy-out bounce',
                type: 'oneByOne',
                duration: 3000
            }}
            style={{ height: '400px', width: '400px' }}
        />
    );

    return(
        <div id={href} className='contact-wrapper'>

            <div className='contact-tittle'>
                По всем вопросам пишите на почту
            </div>
            <a href="mailto:vanakn.llc@gmail.com" className='contact-email'>
                vanakn.llc@gmail.com
            </a>
                <Urban/>
        </div>
    )
};

export {Contact};





