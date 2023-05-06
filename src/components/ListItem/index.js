import './index.css'

const ListItem = props => {
  const {data, updateVisitedList} = props
  const {id, name, isVisited} = data

  const onAdd = () => {
    updateVisitedList(id)
  }

  return (
    <li className="list-item">
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button onClick={onAdd} className="add-button" type="button">
          Visit
        </button>
      )}
    </li>
  )
}

export default ListItem
