export const selectedField = (data) => {
  const newData = data.map((item) => {
    const {
      id,
      name,
      svn_url,
      stargazers_count,
      forks_count,
      open_issues_count,
      owner: {avatar_url, login, html_url},
    } = item
    return {
      id,
      name,
      svn_url,
      stargazers_count,
      forks_count,
      open_issues_count,
      avatar_url,
      login,
      html_url,
    }
  })
  return newData
}
