import './index.css'

const EventItem = eachItem => {
  const {id, imageUrl, name, location, registrationStatus} = eachItem
  console.log(id)
  return (
    <li className="event-item">
      <img src={imageUrl} alt={name} className="item-image" />
      <h5 className="item-name">{name}</h5>
      <p className="item-location">{location}</p>
    </li>
  )
}

export default EventItem
