import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '@/components/Wrapper';
import { connect } from 'react-redux';
import axios from 'axios';
const { useEffect, useState } = React;

// handle
// name
// avatar
// profession
// city

const ProfilesPage = () => {
  const [search, setSearch] = useState('');
  const [devs, setDevs] = useState([]);
  console.log(devs);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: 'get',
        url: `http://localhost:5000/api/users/${search}`,
        headers: { Authorization: localStorage.getItem('session-token') },
      });
      setDevs(result.data);
    };

    search
      ? fetchData()
      : setDevs([]);
  }, [search, axios, setDevs]);

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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {
        devs.map(({ handle, name, avatar, profession, city }) => (
          <div className="card card-body bg-light mb-3" key={handle}>
            <div className="row">
              <div className="ava">
                <img className="rounded-circle" src={avatar} alt="" />
              </div>
              <div className="search-info">
                <h3>{name}</h3>
                <p>{profession}</p>
                <p>{city}</p>
                <Link to={`/${handle}`} >View Profile</Link>
              </div>
            </div>
          </div>
        ))
      }
    </Wrapper>
  );
};

export default ProfilesPage;
