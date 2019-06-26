import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '@/components/Wrapper';


export default () => {
  return (
    <Wrapper>
      <h1 className="large text-primary">Developers</h1>
      <p className="lead">
        <i className="fab fa-connectdevelop"></i> Browse and connect with developers
      </p>
      <div className="form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Type developers name"
            name="email"
            required
          />
        </div>
      </div>
      {/*<div>*/}
        {/*<div className="profile bg-light">*/}
          {/*<img className="round-img" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="avatar" />*/}
            {/*<div>*/}
              {/*<h2>John Doe</h2>*/}
              {/*<p>Developer at Microsoft</p>*/}
              {/*<p>Seattle, WA</p>*/}
              {/*<Link to="/profile" className="btn btn-primary">View Profile</Link>*/}
            {/*</div>*/}

            {/*<ul>*/}
              {/*<li className="text-primary">*/}
                {/*<i className="fas fa-check"></i> HTML*/}
              {/*</li>*/}
              {/*<li className="text-primary">*/}
                {/*<i className="fas fa-check"></i> CSS*/}
              {/*</li>*/}
              {/*<li className="text-primary">*/}
                {/*<i className="fas fa-check"></i> JavaScript*/}
              {/*</li>*/}
              {/*<li className="text-primary">*/}
                {/*<i className="fas fa-check"></i> Python*/}
              {/*</li>*/}
              {/*<li className="text-primary">*/}
                {/*<i className="fas fa-check"></i> C#*/}
              {/*</li>*/}
            {/*</ul>*/}
        {/*</div>*/}
      {/*</div>*/}
    </Wrapper>
  );
}
