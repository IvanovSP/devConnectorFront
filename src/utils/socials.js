export const getDeleted = ({ socials, userSocials }) => (
  Object.entries(socials).reduce(function(accumulator, [key, value]) {
    const userSocial = userSocials.find(({ social_account }) => social_account === key);
    if (!value && userSocial) accumulator.push({ id: userSocial.id });
    return accumulator;
  }, []) || []
);

export const getPosted = ({ socials, userSocials, overallSocials }) => (
  Object.entries(socials).reduce(function(accumulator, [key, value]) {
    const userSocial = userSocials.find(({ social_account }) => social_account === key);
    if (value && !userSocial) accumulator.push({ id: overallSocials.find(({ name }) => name === key).id, value });
    return accumulator;
  }, []) || []
);

export const getPutted = ({ socials, userSocials }) => (
  Object.entries(socials).reduce(function(accumulator, [key, value]) {
    const userSocial = userSocials.find(({ social_account }) => social_account === key);
    if (value && userSocial) accumulator.push({ id: userSocial.id, value });
    return accumulator;
  }, []) || []
);
