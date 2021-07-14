import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1090.9949638482915!2d72.6613537750918!3d23.10972131691499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8102904592df%3A0x89bae3724bc140d2!2skalrav%20apartment!5e0!3m2!1sen!2sin!4v1626100569889!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 9081106815'} text2={'+91 9426045907'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'vruditdpatel1809@gmail.com'} text2={'buntydpatel1809@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'C/101 Kalarav, New Shahibaug, Ahmedabad,'} text2={'GJ, India'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;