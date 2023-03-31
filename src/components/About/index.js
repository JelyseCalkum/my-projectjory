import React from 'react';
import profileImage from "../../assets/images/meandhenry.jpeg";

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Jelyse (Jory) Calkum</h2>
            <hr></hr>
            <div>
                <img class="mb-5" id="avatar" src={profileImage} alt="Jelyse Calkum"/>

            <p>Hi, my name is Jelyse, but you can call me Jory. I'm currently working towards becoming a full-stack web developer.</p>

            <p>When I'm not dedicating my time to studying, you can catch me engaging in an epic Nerf gun battle with my five-year-old son,
              assisting him in building the ultimate Hot Wheels track, or passionately discussing Star Wars.</p>

            <p>Currently, my primary focus is on expanding my knowledge of full-stack web development, so that I can utilize my 
              strong attention to detail and efficiency to pursue a career where I can express my creativity to the fullest extent.</p>
            
            </div>
            </section>
    )
}

export default About;






