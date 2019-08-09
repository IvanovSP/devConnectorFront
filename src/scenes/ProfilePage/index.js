import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import Wrapper from '@/components/Wrapper';
import { connect } from 'react-redux';

import { getInfo, getGitProjects } from '@/redux/selectors/profile';
import { getProfileInfo } from '@/redux/actions/profile';

const { useEffect, useState } = React;

const Profile = ({ profile, getInfo, match, gitProjects }) => {
  const { userId } = match.params;
  const [ editMode, setEditMode ] = useState(false);
  const [ userName, setUserName ] = useState('');
  const [ profession, setProfession ] = useState('');
  const [ companyName, setCompanyName ] = useState('');
  const [ city, setCity ] = useState('');

  const isMyPage = !match.params.userId;
  useEffect(() => {
    getInfo(match.params.userId);
  }, [getInfo, userId]);

  // set values on fetch or editMode turned on
  useEffect(() => {
    if (profile.user_name && editMode) {
      setUserName(profile.user_name);
      setProfession(profile.profession);
      setCompanyName(profile.company_name);
      setCity(profile.city);
    }
  }, [profile, editMode]);

  return  (
    <Wrapper>
      <div>
        <Link to="/profiles" className="btn btn-light">Back To Profiles</Link>
      </div>
      { profile.user_name && (
          <div className="profile-grid my-1">
            <div className="profile-top bg-primary p-2">

                { isMyPage && <button className="editProfile" type="button" onClick={() => setEditMode(!editMode)}>Change</button> }

                <img className="round-img my-1" src={profile.avatar} alt="" />

                {
                  editMode
                    ? <input value={userName} onChange={e => setUserName(e.target.value)} className="large center" />
                    : <h1 className="large">{profile.user_name}</h1>
                }

                {
                  editMode
                    ? (
                      <div className="status-occupation-wrapper">
                        {/*<Autosuggest />*/}
                        <input value={profession} onChange={e => setProfession(e.target.value)} className="center middle-font" />
                        at
                        <input value={companyName} onChange={e => setCompanyName(e.target.value)} className="center middle-font" />
                      </div>
                    )
                    : <p className="lead">{profile.profession} at {profile.company_name}</p>
                }
                {
                  editMode
                    ? (
                      <>
                        <br/>
                        <input className="center small-font" onChange={e => setCity(e.target.value)} value={city} />
                      </>
                    )
                    : <p>{profile.city}</p>
                }
                <div className="icons my-1">
                  {profile.social.map((social) => {
                    const className = `fab fa-${social.social_account} fa-2x"`;
                    return (
                      <a key={social.social_account} href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '30px' }}>
                        <i className={className} />
                      </a>
                    )}
                  )}
                </div>
            </div>

            <div className="profile-about bg-light p-2">
              <h2 className="text-primary">{profile.user_name}'s Bio</h2>
              <p>
                {profile.bio}
              </p>
              <div className="line"/>
              <h2 className="text-primary">Skill Set</h2>
              <div className="skills">
                {
                  profile.skills.map(({ skill }) => (<div className="p-1" key={skill}><i className="fa fa-check"></i> {skill}</div>))
                }
              </div>
            </div>
            <div className="profile-wrapper">
              <div className="profile-info profile-exp bg-white p-2">
                <h2 className="text-primary">Experience</h2>
                {
                  profile.experience.map(
                    (experience, i, arr) => (
                      <React.Fragment>
                        <div key={moment(experience.startedDate).format()+moment(experience.endedDate).format()}>
                          <h3 className="text-dark"><a href={experience.company_website}>{experience.company_name}</a></h3>
                          <p>{moment(experience.startedDate).format('LL')} - {moment(experience.endedDate).format('LL')}</p>
                          <p><strong>Position: </strong>{experience.job_title}</p>
                          <p><strong>Location: </strong>{experience.work_location}</p>
                          <p>
                            <strong>Description: </strong>
                            {experience.work_descriprion}
                          </p>
                        </div>
                        {arr[i + 1] && <div
                          key={moment(experience.startedDate).format()+moment(experience.endedDate).format()+1}
                          className="line"
                        />}
                      </React.Fragment>
                    ),
                  )
                }
              </div>

              <div className="profile-info profile-edu bg-white p-2">
                <h2 className="text-primary">Education</h2>
                {
                  profile.education.map(education => (
                    <div key={moment(education.start_date).format('LL') + education.degree}>
                      <h3 style={{textTransform: 'uppercase'}}>{education.establishment}</h3>
                      <p>{moment(education.start_date).format('LL')} - {moment(education.end_date).format('LL')}</p>
                      <p><strong>Degree: </strong>{education.degree}</p>
                      <p><strong>Field Of Study: </strong>{education.stydy_field}</p>
                      <p>
                        <strong>Description: </strong> {education.program_description}
                      </p>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="profile-github">
              <h2 className="text-primary my-1">
                <i className="fab fa-github"></i> Github Repos
              </h2>
              {
                gitProjects.map(gitProject => (
                  <div key={gitProject.html_url} className="repo bg-white p-1 my-1">
                    <div>
                      <h4><a href={gitProject.html_url} target="_blank" rel="noopener noreferrer">{gitProject.name}</a></h4>
                      <p>
                        {gitProject.description}
                      </p>
                    </div>
                    <div>
                      <ul>
                        <li className="badge badge-primary">Stars: {gitProject.stargazers_count}</li>
                        <li className="badge badge-dark">Watchers: {gitProject.watchers_count}</li>
                        <li className="badge badge-light">Forks: {gitProject.forks_count}</li>
                      </ul>
                    </div>
                  </div>
                  )
                )
              }
            </div>
          </div>
      )
      }
    </Wrapper>
  );
};

const mapStateToProps = /* istanbul ignore next */ state => ({
  profile: getInfo(state),
  gitProjects: getGitProjects(state),
});

const mapDispatchToProps = dispatch => ({
  getInfo: (userId) => dispatch(getProfileInfo(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
