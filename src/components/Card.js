import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from 'react-icons/fa'
import {useGlobalContext} from '../context'
import {useState} from 'react'

const Card = ({
  name,
  html_url,
  stargazers_count,
  forks_count,
  avatar_url,
  open_issues_count,
}) => {
  const {repos} = useGlobalContext()

  //TODO: count will be add

  const [count, setCount] = useState(1)

  const handleCount = () => {
    for (let count = 1; count < repos.length; count++) {
      return setCount(count + 1)
    }
  }

  return (
    <div className="card">
      <div className="card-img-container">
        <h3 className="card-number">#1</h3>
        <img src={avatar_url} alt="avatar" className="card-img" />
      </div>
      <div className="card-info">
        <a href={html_url} className="card-title-head">
          {name}
        </a>
        <p className="card-title">
          <span>
            <FaUser className="card-info-user" />
          </span>
          <a href={html_url}>{name}</a>
        </p>
        <p className="card-stars">
          <span>
            <FaStar className="card-info-star" />
          </span>
          {stargazers_count}
        </p>
        <p className="card-forks">
          <span>
            <FaCodeBranch className="card-info-branch" />
          </span>
          {forks_count}
        </p>
        <p className="card-issues">
          <span>
            <FaExclamationTriangle className="card-info-issue" />
          </span>
          {open_issues_count}
        </p>
      </div>
    </div>
  )
}

export default Card
