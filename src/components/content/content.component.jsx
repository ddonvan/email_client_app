import React from "react";

import '../content/content.styles.css'

export const Content = ({ email }) => {
    
    return(
        <div className="content">
            <p>{email.from}</p>
            <p>{email.subject}</p>
            <p>{email.address}</p>
            <p>{email.time}</p>
            <p>{email.message}</p>
        </div>
    )
};