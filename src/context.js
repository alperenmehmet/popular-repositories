import React, {useContext, useEffect, useState} from 'react'
import {getData} from './hooks/getData'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [repos, setRepos] = useState([])
  const [query, setQuery] = useState('all')

  useEffect(() => {
    getData(query).then((res) => setRepos(res))
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
