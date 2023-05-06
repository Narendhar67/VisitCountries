import './index.css'

const VisitedCountry = props => {
  const {data, updateVisitedList} = props
  const {id, imageUrl, name} = data

  const onRemove = () => {
    updateVisitedList(id)
  }

  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" className="country-flag" />
      <div className="name-and-button">
        <p>{name}</p>
        <button onClick={onRemove} className="remove-button" type="button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
