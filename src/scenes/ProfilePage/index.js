import React from 'react';
import moment from 'moment';
import produce from 'immer';
import { Link } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import Wrapper from '@/components/Wrapper';
import Socials from './components/Socials';
import { connect } from 'react-redux';
import showcase from '@/assets/img/loading.gif';
import ReactTags from 'react-tag-autocomplete';
import Datepicker from '@/components/Datepicker';

import {
  getInfo, getGitProjects, getSuggestions as getSuggestionsProps,
  getProfileIsLoading, getOverallSocials as getOverallSocialsSelector,
} from '@/redux/selectors/profile';
import {
  getProfileInfo, getSuggestions, setSuggestions,
  updateProfile, getOverallSocials,
} from '@/redux/actions/profile';

const { useEffect, useState } = React;

const Profile = ({
  profile,
  getInfo,
  match,
  gitProjects,
  getSuggestions,
  suggestions,
  setSuggestions,
  profileIsLoading,
  setUserProfileInfo,
  getOverallSocialsDispatch,
  overallSocials = [],
}) => {
  const { userId } = match.params;
  const [editMode, setEditMode] = useState(false);
  const [userName, setUserName] = useState('');
  const [profession, setProfession] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [bio, setBio] = useState('');
  const [city, setCity] = useState('');
  const [skills, setSkills] = useState([]);
  const [socialsMap, setSocialsMap] = useState({});
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [githubUsername, setGithubUsername] = useState('');

  const isMyPage = !match.params.userId;
  useEffect(() => {
    getInfo(match.params.userId);
  }, [getInfo, userId]);

  useEffect(() => {
    getOverallSocialsDispatch();
  }, []);

  // set values on fetch or editMode turned on
  useEffect(() => {
    if (profile.user_name && editMode) {
      setUserName(profile.user_name);
      setProfession(profile.profession);
      setCompanyName(profile.company_name);
      setBio(profile.bio);
      setCity(profile.city);
      setSkills(profile.skills.slice(0));
      setExperience([...profile.experience]);
      setEducation([...profile.education]);
    }
  }, [profile, editMode]);

  return (
    <Wrapper>
      <div>
        <Link to="/profiles" className="btn btn-light">Back To Profiles</Link>
      </div>
      {profile.user_name && (
      <div className={`profile-grid my-1 ${editMode ? 'editMode' : ''}`}>
        <div className="profile-top bg-primary p-2">

          {isMyPage && !profileIsLoading && (
          <button
            className="editProfile"
            type="button"
            onClick={() => {
              setEditMode(!editMode);
              if (editMode) {
                setUserProfileInfo(
                  city,
                  githubUsername,
                  bio,
                  profile.email,
                  profession,
                  companyName,
                  userName,
                  skills,
                  socialsMap,
                  experience.filter(({ company_name }) => !!company_name),
                  education.filter(({ establishment }) => !!establishment),
                );
              }
            }}
          >
            {editMode ? 'Submit' : 'Change'}
          </button>
          )}
          { profileIsLoading && <img className="editProfile" src={showcase} alt="" /> }
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
                        <Autosuggest
                          suggestions={suggestions.professions || []}
                          onSuggestionsFetchRequested={({ value }) => getSuggestions(value, 'profession')}
                          onSuggestionsClearRequested={() => setSuggestions([], 'professions')}
                          getSuggestionValue={({ name }) => name}
                          renderSuggestion={suggestion => <span>{suggestion.name}</span>}
                          inputProps={{
                            placeholder: 'Chose your profession',
                            className: 'center middle-font',
                            value: profession,
                            onChange: (e, { newValue }) => setProfession(newValue),
                          }}
                        />
                        at
                        <Autosuggest
                          suggestions={suggestions.companies || []}
                          onSuggestionsFetchRequested={({ value }) => getSuggestions(value, 'company')}
                          onSuggestionsClearRequested={() => setSuggestions([], 'companies')}
                          getSuggestionValue={({ name }) => name}
                          renderSuggestion={suggestion => <span>{suggestion.name}</span>}
                          inputProps={{
                            placeholder: 'Chose company you work on',
                            className: 'center middle-font',
                            value: companyName,
                            onChange: (e, { newValue }) => setCompanyName(newValue),
                          }}
                        />
                      </div>
                    )
                    : (
                      <p className="lead">
                        {profile.profession}
                        {' '}
                          at
                        {' '}
                        {profile.company_name}
                      </p>
                    )
                }
          {
                  editMode
                    ? (
                      <>
                        <br />
                        <input className="center small-font" onChange={e => setCity(e.target.value)} value={city} />
                      </>
                    )
                    : <p>{profile.city}</p>
                }
          <Socials
            profileSocials={profile.social}
            overallSocials={overallSocials}
            editMode={editMode}
            socialsMap={socialsMap}
            setSocialsMap={setSocialsMap}
          />
        </div>

        <div className="profile-about bg-light p-2">
          <h2 className="text-primary">
            {profile.user_name}'s Bio
          </h2>
          <p>
            {
                  editMode
                    ? (
                      <textarea className="bio" value={bio} onChange={e => setBio(e.target.value)} />
                    ) : profile.bio
                }
          </p>
          <div className="line" />
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
            {
              editMode
                ? (
                  <ReactTags
                    tags={skills.map(({ skill, id }) => ({ name: skill, id }))}
                    allowNew
                    autofocus={false}
                    minQueryLength={1}
                    maxSuggestionsLength={100}
                    suggestions={suggestions.skills || []}
                    handleInputChange={(input) => {
                      if (!input) {
                        setSuggestions([], 'skills');
                      } else {
                        return getSuggestions(input, 'skills');
                      }
                    }}
                    handleDelete={(i) => {
                      const copySkills = skills.slice(0);
                      copySkills.splice(i, 1);
                      setSkills(copySkills);
                    }}
                    handleAddition={
                      ({ name, ...props }) => setSkills([...skills, { skill: name, ...props }])
                    }
                  />
                )
                : profile.skills.map(({ skill }) => (
                  <div className="p-1" key={skill}>
                    <i className="fa fa-check" />
                    {' '}
                    {skill}
                  </div>
                ))
            }
          </div>
        </div>
        <div className="profile-wrapper">
          <div className="profile-info profile-exp bg-white p-2">
            <h2 className="text-primary">Experience</h2>
            {
              editMode
                ? (
                  experience.map(
                    (exp, i, arr) => (
                      <React.Fragment>
                        <span
                          onClick={() => {
                            setExperience(
                              produce(
                                experience, (draft) => {
                                  draft.splice(i, 1);
                                },
                              ),
                            );
                          }}
                          className="closeIcon"
                        >
                          remove
                        </span>
                        <div className="info-row">
                          <Autosuggest
                            suggestions={suggestions.companies || []}
                            onSuggestionsFetchRequested={({ value }) => getSuggestions(value, 'company')}
                            onSuggestionsClearRequested={() => setSuggestions([], 'companies')}
                            getSuggestionValue={({ name }) => name}
                            renderSuggestion={suggestion => <span>{suggestion.name}</span>}
                            inputProps={{
                              placeholder: 'Chose company you worked on',
                              value: exp.company_name,
                              onChange: (e, { newValue }) => (
                                setExperience(
                                  produce(
                                    experience, draft => {
                                      draft[i].company_name = newValue;
                                    },
                                  ),
                                )
                              ),
                            }}
                          />
                        </div>
                        <div className="info-row">
                          <Datepicker
                            placeholderText="From date"
                            date={new Date(exp.startedDate)}
                            handleChange={date => setExperience(
                              produce(
                                experience, draft => {
                                  draft[i].startedDate = date.toISOString();
                                },
                              ),
                            )}
                          />
                          <span className="toWrapper">To</span>
                          <Datepicker
                            placeholderText="To date"
                            date={new Date(exp.endedDate)}
                            handleChange={date => setExperience(
                              produce(
                                experience, draft => {
                                  draft[i].endedDate = date.toISOString();
                                },
                              ),
                            )}
                          />
                        </div>
                        <div className="info-row">
                          <input
                            placeholder="Work Location"
                            value={exp.work_location}
                            onChange={(e) => {
                              setExperience(
                                produce(
                                  experience, (draft) => {
                                    draft[i].work_location = e.target.value;
                                  },
                                ),
                              );
                            }}
                          />
                        </div>
                        <div className="info-row">
                          <textarea
                            className="work-description"
                            value={exp.work_descriprion}
                            maxLength="255"
                            onChange={(e) => {
                              setExperience(
                                produce(
                                  experience, (draft) => {
                                    draft[i].work_descriprion = e.target.value;
                                  },
                                ),
                              );
                            }}
                          />
                        </div>
                        {arr[i + 1] && (
                          <div
                            key={moment(exp.startedDate).format() + moment(exp.endedDate).format() + 1}
                            className="line"
                          />
                        )}
                      </React.Fragment>
                    ),
                  )
                ) : (
                  profile.experience.map(
                    (exp, i, arr) => (
                      <React.Fragment>
                        <div key={moment(exp.startedDate).format() + moment(exp.endedDate).format()}>
                          <h3 className="text-dark"><a href={exp.company_website}>{exp.company_name}</a></h3>
                          <p>
                            {moment(exp.startedDate).format('LL')}
                            {' '}
                              -
                            {' '}
                            {moment(exp.endedDate).format('LL')}
                          </p>
                          <p>
                            <strong>Position: </strong>
                            {exp.job_title}
                          </p>
                          <p>
                            <strong>Location: </strong>
                            {exp.work_location}
                          </p>
                          <p>
                            <strong>Description: </strong>
                            {exp.work_descriprion}
                          </p>
                        </div>
                        {arr[i + 1] && (
                        <div
                          key={moment(exp.startedDate).format() + moment(exp.endedDate).format() + 1}
                          className="line"
                        />
                        )}
                      </React.Fragment>
                    ),
                  )
                )}
            {
              editMode && (
                <div
                  className="btn btn-light"
                  onClick={() => {
                    setExperience(
                      produce(experience, draft => [...draft, {
                        startedDate: new Date(),
                        endedDate: new Date(),
                        company_name: '',
                        job_title: '',
                        work_location: '',
                        work_descriprion: '',
                      }]),
                    );
                  }}
                >
                  Add company you worked for
                </div>
              )
            }
          </div>

          <div className="profile-info profile-edu bg-white p-2">
            <h2 className="text-primary">Education</h2>
            {
              editMode
                ? (
                  education.map((educat, i) => (
                    <React.Fragment>
                      <span
                        onClick={() => {
                          setEducation(
                            produce(
                              education, (draft) => {
                                draft.splice(i, 1);
                              },
                            ),
                          );
                        }}
                        className="closeIcon"
                      >
                        remove
                      </span>
                      <div className="info-row">
                        <Autosuggest
                          suggestions={suggestions.establishments || []}
                          onSuggestionsFetchRequested={({ value }) => getSuggestions(value, 'educational-establishment')}
                          onSuggestionsClearRequested={() => setSuggestions([], 'educational-establishment')}
                          getSuggestionValue={({ name }) => name}
                          renderSuggestion={suggestion => <span>{suggestion.name}</span>}
                          inputProps={{
                            placeholder: 'Chose academy you studied in',
                            value: educat.establishment,
                            onChange: (e, { newValue }) => (
                              setEducation(
                                produce(
                                  education, draft => {
                                    draft[i].establishment = newValue;
                                  },
                                ),
                              )
                            ),
                          }}
                        />
                      </div>
                      <div className="info-row">
                        <Datepicker
                          placeholderText="From date"
                          date={new Date(educat.start_date)}
                          handleChange={date => setEducation(
                            produce(
                              education, draft => {
                                draft[i].start_date = date.toISOString();
                              },
                            ),
                          )}
                        />
                        <span className="toWrapper">To</span>
                        <Datepicker
                          placeholderText="To date"
                          date={new Date(educat.end_date)}
                          handleChange={date => setEducation(
                            produce(
                              education, draft => {
                                draft[i].end_date = date.toISOString();
                              },
                            ),
                          )}
                        />
                      </div>
                      <div className="info-row">
                        <input
                          placeholder="Degree"
                          value={educat.degree}
                          onChange={(e) => {
                            setExperience(
                              produce(
                                education, (draft) => {
                                  draft[i].degree = e.target.value;
                                },
                              ),
                            );
                          }}
                        />
                      </div>
                      <div className="info-row">
                        <input
                          placeholder="Field"
                          value={educat.stydy_field}
                          onChange={(e) => {
                            setExperience(
                              produce(
                                education, (draft) => {
                                  draft[i].stydy_field = e.target.value;
                                },
                              ),
                            );
                          }}
                        />
                      </div>
                      <div className="info-row">
                        <input
                          placeholder="Description"
                          value={educat.program_description}
                          onChange={(e) => {
                            setExperience(
                              produce(
                                education, (draft) => {
                                  draft[i].program_description = e.target.value;
                                },
                              ),
                            );
                          }}
                        />
                      </div>
                    </React.Fragment>
                  ))
                ) : (
                  profile.education.map(educat => (
                    <div key={moment(educat.start_date).format('LL') + educat.degree}>
                      <h3 style={{ textTransform: 'uppercase' }}>{educat.establishment}</h3>
                      <p>
                        {moment(educat.start_date).format('LL')}
                        {' '}
                        -
                        {' '}
                        {moment(educat.end_date).format('LL')}
                      </p>
                      <p>
                        <strong>Degree: </strong>
                        {educat.degree}
                      </p>
                      <p>
                        <strong>Field Of Study: </strong>
                        {educat.stydy_field}
                      </p>
                      <p className="desciptionBlock">
                        <strong>Description: </strong>
                        {' '}
                        {educat.program_description}
                      </p>
                    </div>
                  ))
                )
            }
            {
              editMode && (
                <div
                  className="btn btn-light"
                  onClick={() => {
                    setEducation(
                      produce(education, draft => [...draft, {
                        degree: '',
                        stydy_field: '',
                        program_description: '',
                        start_date: new Date(),
                        end_date: new Date(),
                        establishment: '',
                        establishment_id: '',
                      }]),
                    );
                  }}
                >
                  Add company you worked for
                </div>
              )
            }
          </div>
        </div>

          <div className="profile-github">
            <h2 className="text-primary my-1">
              <i className="fab fa-github" />
              {
                editMode
                  ? (
                    <input
                      className="gitName"
                      placeholder="Git nickname"
                      value={githubUsername}
                      onChange={e => setGithubUsername(e.target.value)}
                    />
                  )
                  : ` ${profile.github_username}'s Github Repos`
              }
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
                      <li className="badge badge-primary">
                        Stars:
                        {gitProject.stargazers_count}
                      </li>
                      <li className="badge badge-dark">
                        Watchers:
                        {gitProject.watchers_count}
                      </li>
                      <li className="badge badge-light">
                        Forks:
                        {gitProject.forks_count}
                      </li>
                    </ul>
                  </div>
                </div>
              ))
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
  overallSocials: getOverallSocialsSelector(state),
  gitProjects: getGitProjects(state),
  suggestions: getSuggestionsProps(state),
  profileIsLoading: getProfileIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getOverallSocialsDispatch: () => dispatch(getOverallSocials()),
  getInfo: userId => dispatch(getProfileInfo(userId)),
  setUserProfileInfo: (...params) => dispatch(updateProfile(...params)),
  getSuggestions: (query, fieldName) => dispatch(getSuggestions(query, fieldName)),
  setSuggestions: (suggestions, fieldName) => dispatch(setSuggestions(suggestions, fieldName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
