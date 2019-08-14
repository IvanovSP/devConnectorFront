import React from 'react';
const { useEffect, useState } = React;

export default ({ profileSocials = [], overallSocials = [], editMode = false }) => {
  const [socialsMap, setSocialsMap] = useState({});

  useEffect(() => {
    if (
      !profileSocials.length
    ) return;

    const newMap = {};
    overallSocials.forEach(({ name }) => {
      newMap[name] = '';
    });
    profileSocials.forEach(({ social_account, url }) => {
      newMap[social_account] = url;
    });

    setSocialsMap(newMap);
  }, [profileSocials, overallSocials]);

  useEffect(() => {
    if (!editMode) return;


  }, [editMode]);

  const updateValue = (key, value) => {
    setSocialsMap({ ...socialsMap, ...{ [key]: value } });
  };

  return (
    editMode
      ? (
        <div className="iconWrapper">
          {
            Object.entries(socialsMap).map(([key, value]) => (
              <div className="socialRow" key={key}>
                <i className={`fab fa-${key} fa-2x"`} />
                <input className="center middle-font" value={value} onChange={e => updateValue(key, e.target.value)} />
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
                  <a key={social.social_account} href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '30px' }}>
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
