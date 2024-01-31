import React from "react";

import './email.styles.css'
import '../content/content.component'
import { renderIntoDocument } from "react-dom/test-utils";

export const Email = ({ email, handleClick }) => {
    const { id, from, address, time, message, subject, tag, read} = email;
    

    return (
    
        <div className='email-container' onClick={() => handleClick(email)}>
            <p>{from}</p>
            <p>{subject}</p>
            <p>{address}</p>
            <p>{time}</p>
            
        </div>
    
    )

    
};