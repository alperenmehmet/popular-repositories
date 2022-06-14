import {FaMoon, FaSun} from 'react-icons/fa'
import {useState} from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState()

  const handleTheme = () => {
    setToggle(!toggle)
  }

  return (
    <div className="navbar section-center">
      <ul className="navbar-links">
        <li>
          <a href="">popular</a>
        </li>
        <li>
          <i onClick={handleTheme}>
            {toggle ? (
              <FaSun className="sun-icon" />
            ) : (
              <FaMoon className="moon-icon" />
            )}
          </i>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
