import {Link} from 'react-router';
import React from 'react';

export default function(address, text){
    if(address.indexOf('/') === 0){
        return <Link to={address}>{text}</Link>
    }
    
    return <a href={address} target="_blank">{text}</a>
}