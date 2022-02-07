import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
//import Particles from "react-particles-js"
function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Vrudit Patel.</span>
                </h1>
                <p className="h-sub-text">
                    Currently I am pursuing sem 8 in computer engineering at Gujarat Technological University.
                    Till now, I have got CPI: 8.60 and CPGA: 9.11, I possess good command on several subjects such as Java, SQL, Computer Network, Theory of Computation etc.
                </p>
                <div className="icons">
                    {/* <Link className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link className="icon-holder" >
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </Link> */}
                    {/* <Link className="icon-holder">
                        <a href="https://www.youtube.com/" className="ytls" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                        </a>
                    </Link> */}
                    <a href="https://www.facebook.com/vrudit.patel.75" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="icon fb" />
                    </a>
                    <a href="https://github.com/Vruditdp" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x" className="icon gh" />
                    </a>
                    <a href="https://www.youtube.com/channel/UC9kl2E6qRO3umDzQEoqDW-A" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} size="2x" className="icon yt" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;