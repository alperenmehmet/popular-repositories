import {FaMoon, FaSun} from 'react-icons/fa'
import {useEffect, useState} from 'react'
import {getLocalStorage} from '../hooks/getLocalStorage'

const Navbar = () => {
  const [toggle, setToggle] = useState()
  const [theme, setTheme] = useState(getLocalStorage())

  const handleTheme = () => {
    setToggle(!toggle)
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="navbar section-center">
      <ul className="navbar-links">
        <li>
          <a href="">popular</a>
        </li>
        <li>
          <i onClick={handleTheme}>
            {toggle ? (
              <FaMoon className="moon-icon" />
            ) : (
              <FaSun className="sun-icon" />
            )}
          </i>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
