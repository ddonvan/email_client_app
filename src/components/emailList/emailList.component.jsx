import React from "react";

import { Email } from '../email/email.component'
import '../emailList/emailList.styles.css'

export const EmailList = ({ emails, handleClick}) => (
    <div className="emailList">
        {emails.map(email => (
            <Email key={email.id} email = {email} handleClick={handleClick}/>
        ))}
    </div>
);

