import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Wrapper from '@/components/Wrapper';
import { connect } from 'react-redux';

import { getInfo, getGitProjects } from '@/redux/selectors/profile';
import { getProfileInfo } from '@/redux/actions/profile';

const { useEffect } = React;

const Profile = ({ profile, getInfo, match, gitProjects }) => {
  const { userId } = match.params;
  useEffect(() => {
    getInfo(match.params.userId);
  }, [getInfo, userId]);

  return  (
    <Wrapper>
      <div>
        <Link to="/profiles" className="btn btn-light">Back To Profiles</Link>
      </div>
      { profile.user_name && (
          <div className="profile-grid my-1">
            <div className="profile-top bg-primary p-2">
                <img className="round-img my-1" src={profile.avatar} alt="" />
                <h1 className="large">{profile.user_name}</h1>
                <p className="lead">{profile.prof_status} at {profile.company_name}</p>
                <p>{profile.city}</p>
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
                        <div>
                          <h3 className="text-dark"><a href={experience.company_website}>{experience.company_name}</a></h3>
                          <p>{moment(experience.startedDate).format('LL')} - {moment(experience.endedDate).format('LL')}</p>
                          <p><strong>Position: </strong>{experience.job_title}</p>
                          <p><strong>Location: </strong>{experience.work_location}</p>
                          <p>
                            <strong>Description: </strong>
                            {experience.work_descriprion}
                          </p>
                        </div>
                        {arr[i + 1] && <div className="line" />}
                      </React.Fragment>
                    ),
                  )
                }
              </div>

              <div className="profile-info profile-edu bg-white p-2">
                <h2 className="text-primary">Education</h2>
                {
                  profile.education.map(education => (
                    <>
                      <h3 style={{textTransform: 'uppercase'}}>{education.establishment}</h3>
                      <p>{moment(education.start_date).format('LL')} - {moment(education.end_date).format('LL')}</p>
                      <p><strong>Degree: </strong>{education.degree}</p>
                      <p><strong>Field Of Study: </strong>{education.stydy_field}</p>
                      <p>
                        <strong>Description: </strong> {education.program_description}
                      </p>
                    </>
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
                  <div className="repo bg-white p-1 my-1">
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
