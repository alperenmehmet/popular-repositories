import {useGlobalContext} from '../context'
import {useState} from 'react'
import {queries} from '@testing-library/react'

const Header = () => {
  const {setQuery} = useGlobalContext()
  const [active, setActive] = useState('')

  const catchTheQuery = (e) => {
    e.preventDefault()
    setQuery(e.target.innerHTML)
    console.log(e)
  }

  return (
    <div className="header section-center">
      <ul className="header-links">
        <li>
          <a href="" onClick={catchTheQuery}>
            all
          </a>
        </li>
        <li>
          <a href="" onClick={catchTheQuery}>
            JavaScript
          </a>
        </li>
        <li>
          <a href="" onClick={catchTheQuery}>
            ruby
          </a>
        </li>
        <li>
          <a href="" onClick={catchTheQuery}>
            java
          </a>
        </li>
        <li>
          <a href="" onClick={catchTheQuery}>
            CSS
          </a>
        </li>
        <li>
          <a href="" onClick={catchTheQuery}>
            python
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header
