import React from 'react'

import './Cover.scss';
import logo from '../../assets/images/Logo.png';

export default function Cover({children}) {
    return (
        <div className="cover">
            {children}
            {/* <img className="logo" src={logo} alt="logo"></img> */}
           {/*  <div className="logo-container">
                
            </div> */}
        </div>
    )
}
