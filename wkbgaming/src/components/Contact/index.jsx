import React from 'react';
import { Forms } from './Form';
import Styles from './Contact.module.css'
import CanvasBackground from '../CanvasBackground';

 const Contact = () => {
    return (
        <div id="contact" className={Styles.containerContact}>
            <CanvasBackground className={Styles.myCanvas} />
            <h1>Say hello to your future team!</h1>
            <div className={Styles.subtitle}><p>Let's create what's next.</p></div>
            <div className={Styles.form}><Forms/></div>
        </div>
    )
}

export default Contact;