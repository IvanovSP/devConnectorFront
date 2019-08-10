export const getInfo = state => state.profile.info;
export const getGitProjects = state => state.profile.projects.map(project => {
  const { html_url, description, stargazers_count, watchers_count, forks_count, name } = project;
  return { html_url, description, stargazers_count, watchers_count, forks_count, name };
});
export const getSuggestions = state => state.profile.suggestions;
