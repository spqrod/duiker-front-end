import React from 'react';
import "../styles/about.css";

function About() {
  return (
    <div className="about">

      <section className="section info">
        <h1>About Duiker Travel</h1>

        <div className='contentContainer'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates a laudantium nesciunt vero explicabo iure, possimus, accusamus temporibus excepturi illo eius voluptas facere reiciendis nobis ad neque impedit vel velit.<br></br><br></br>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, quam!
          
          </p>
          <div className="placeholder">
            Image
          </div>
        </div>

        <div className='contentContainer'>

          <div className="placeholder">
            Image
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates a laudantium nesciunt vero explicabo iure, possimus, accusamus temporibus excepturi illo eius voluptas facere reiciendis nobis ad neque impedit vel velit.<br></br><br></br>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, quam!
          </p>
        </div>
        
      </section>

      <section className="section team">
        <h2>Meet Our Team</h2>

        <div className="teamMembersContainer">

          <div className="team-member">
            <div className="photo">
              
            </div>
            <div className="info">
              <div className="name">John Doe</div>
              <div className="position">Manager</div>
            </div>
          </div>

          <div className="team-member">
            <div className="photo">
              
            </div>
            <div className="info">
              <div className="name">Jane Smith</div>
              <div className="position">Driver</div>
            </div>
          </div>

          <div className="team-member">
            <div className="photo">
              
            </div>
            <div className="info">
              <div className="name">Emily Johnson</div>
              <div className="position">Driver</div>
            </div>
          </div>

          <div className="team-member">
            <div className="photo">
              
            </div>
            <div className="info">
              <div className="name">Sarah Davis</div>
              <div className="position">Concierge</div>
            </div>
          </div>

          <div className="team-member">
            <div className="photo">
              
            </div>
            <div className="info">
              <div className="name">David Wilson</div>
              <div className="position">Security</div>
            </div>
          </div>

          <div className="team-member">
            <div className="photo">
              
            </div>
            <div className="info">
              <div className="name">Laura Martinez</div>
              <div className="position">Event Coordinator</div>
            </div>
          </div>

          <div className="team-member">
            <div className="photo">
              
            </div>
            <div className="info">
              <div className="name">Chris Anderson</div>
              <div className="position">Maintenance</div>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}

export default About;