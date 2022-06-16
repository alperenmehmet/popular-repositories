import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from 'react-icons/fa'

const Card = ({
  name,
  html_url,
  stargazers_count,
  forks_count,
  avatar_url,
  open_issues_count,
  index,
  svn_url,
  login,
}) => {
  return (
    <div className="card">
      <div className="card-img-container">
        <h4 className="card-number">#{index + 1}</h4>
        <img src={avatar_url} alt="avatar" className="card-img" />
      </div>
      <div className="card-info">
        <a href={svn_url} className="card-title-head">
          {login}
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
