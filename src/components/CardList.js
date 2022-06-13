import {useGlobalContext} from '../context'
import Card from './Card'

const CardList = () => {
  const {repos} = useGlobalContext()
  return (
    <div className="card-container section-center">
      {repos.map((item) => {
        return <Card key={item.id} {...item} />
      })}
    </div>
  )
}

export default CardList
