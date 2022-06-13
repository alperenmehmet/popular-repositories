import React, {useContext, useEffect, useState} from 'react'
import {BASE_URL_ALL} from './constants/api'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch(BASE_URL_ALL)
      .then((res) => res.json())
      .then((result) => {
        const newResult = result.items
        const newRepos = newResult.map((item) => {
          const {
            id,
            name,
            html_url,
            stargazers_count,
            forks_count,
            open_issues_count,
            owner: {avatar_url},
          } = item
          return {
            id,
            name,
            html_url,
            stargazers_count,
            forks_count,
            open_issues_count,
            avatar_url,
          }
        })
        setRepos(newRepos)
      })
  }, [])

  return <AppContext.Provider value={{repos}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
