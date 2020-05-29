import React from "react";
import './about-us.css';


const AboutUs = ({href, choose}) => {




    let display = {display: 'none'};

    if (choose){
        display ={display: 'block'}
    }

    return(
        <div style={display} id={href}>
            ABOUT US
        </div>
    )
};

export default AboutUs;