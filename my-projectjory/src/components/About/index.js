import React from 'react';
import profileImage from "../../assets/images/meandhenry.jpeg";

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Jelyse Calkum</h2>
            <hr></hr>
            <div>
                <img class="mb-5" id="avatar" src={profileImage} alt="Jelyse Calkum"/>
            <p>Programming student blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
            <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
            <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
            
            </div>
            </section>
    )
}

export default About;