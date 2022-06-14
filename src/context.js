import React, {useContext, useEffect, useState} from 'react'
import {BASE_URL, URL_PARAMETER} from './constants/api'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [repos, setRepos] = useState([])
  const [query, setQuery] = useState(null)

  useEffect(() => {
    fetch(`${BASE_URL}${query}${URL_PARAMETER}`)
      .then((res) => res.json())
      .then((result) => {
        const newResult = result.items
        const newRepos = newResult.map((item, index) => {
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
        setRepos(newRepos)
      })
  }, [query])

  return (
    <AppContext.Provider value={{repos, query, setQuery}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
