import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '@/components/Wrapper';


export default () => (
  <Wrapper>
    <div>
      <Link to="/profiles" className="btn btn-light">Back To Profiles</Link>
    </div>
    <div className="profile-grid my-1">
      <div className="profile-top bg-primary p-2">
        <img className="round-img my-1" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
          <h1 className="large">John Doe</h1>
          <p className="lead">Developer at Microsoft</p>
          <p>Seattle, WA</p>
          <div className="icons my-1">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
      </div>

      <div className="profile-about bg-light p-2">
        <h2 className="text-primary">John's Bio</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
          doloremque nesciunt, repellendus nostrum deleniti recusandae nobis
          neque modi perspiciatis similique?
        </p>
        <div className="line"/>
        <h2 className="text-primary">Skill Set</h2>
        <div className="skills">
          <div className="p-1"><i className="fa fa-check"></i> HTML</div>
          <div className="p-1"><i className="fa fa-check"></i> CSS</div>
          <div className="p-1"><i className="fa fa-check"></i> JavaScript</div>
          <div className="p-1"><i className="fa fa-check"></i> Python</div>
          <div className="p-1"><i className="fa fa-check"></i> C#</div>
        </div>
      </div>
      <div className="profile-wrapper">
        <div className="profile-info profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          <div>
            <h3 className="text-dark">Microsoft</h3>
            <p>Oct 2011 - Current</p>
            <p><strong>Position: </strong>Senior Developer</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
          <div className="line" />
          <div>
            <h3 className="text-dark">Sun Microsystems</h3>
            <p>Nov 2004 - Nov 2011</p>
            <p><strong>Position: </strong>Systems Admin</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
        </div>

        <div className="profile-info profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          <div>
            <h3>University Of Washington</h3>
            <p>Sep 1993 - June 1999</p>
            <p><strong>Degree: </strong>Masters</p>
            <p><strong>Field Of Study: </strong>Computer Science</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
        </div>
      </div>

      <div className="profile-github">
        <h2 className="text-primary my-1">
          <i className="fab fa-github"></i> Github Repos
        </h2>
        <div className="repo bg-white p-1 my-1">
          <div>
            <h4><a href="#" target="_blank" rel="noopener noreferrer">Repo Two</a></h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellat, laborum!
            </p>
          </div>
          <div>
            <ul>
              <li className="badge badge-primary">Stars: 44</li>
              <li className="badge badge-dark">Watchers: 21</li>
              <li className="badge badge-light">Forks: 25</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);
