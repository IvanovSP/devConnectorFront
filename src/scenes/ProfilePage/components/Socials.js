import React from 'react';
const { useEffect, useState } = React;

export default ({ profileSocials = [], overallSocials = [], editMode = false, onSubmit }) => {
  const [socialsMap, setSocialsMap] = useState({});

  useEffect(() => {
    if (
      !profileSocials.length
    ) return;

    const newMap = {};
    overallSocials.forEach(({ name }) => {
      newMap[name] = '';
    });
    profileSocials.forEach(({ social_account, socialUrl, handle }) => {
      newMap[social_account] = `${socialUrl}/${handle}`;
    });

    setSocialsMap(newMap);
  }, [profileSocials, overallSocials]);

  useEffect(() => {
    if (editMode || !Object.keys(socialsMap).length) return;
    onSubmit(socialsMap);
  }, [editMode]);

  const updateValue = (key, value) => {
    setSocialsMap({ ...socialsMap, ...{ [key]: value } });
  };

  const validateValue = (key, value) => {
    const { url } = overallSocials.find(({name}) => name === key);
    const isValid = value.search(`${url}/`) === 0;
    setSocialsMap({ ...socialsMap, ...{ [key]: isValid ? value : ''} });
  };

  return (
    editMode
      ? (
        <div className="iconWrapper">
          {
            Object.entries(socialsMap).map(([key, value]) => (
              <div className="socialRow" key={key}>
                <i className={`fab fa-${key} fa-2x"`} />
                <input
                  className="center middle-font"
                  value={value}
                  onChange={e => updateValue(key, e.target.value)}
                  onBlur={e => validateValue(key, e.target.value)}
                />
              </div>
            ))
          }
        </div>
      )
      : (
        <div className="icons my-1">
          {
            profileSocials.map(
              (social) => {
                const className = `fab fa-${social.social_account} fa-2x"`;
                return (
                  <a
                    key={social.social_account}
                    href={`${social.socialUrl}/${social.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', fontSize: '30px' }}
                  >
                    <i className={className} />
                  </a>
                );
              },
            )
          }
        </div>
      )
  );
};
