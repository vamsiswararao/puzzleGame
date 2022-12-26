import './index.css'

const NameDetails = props => {
  const {jobDetails} = props
  const {name, address, date, email, phoneNumber} = jobDetails
  console.log(name, address, date, email)
  return (
    <>
      <div>
        <li className="user">
          : <span>{name}</span>
        </li>
        <li className="user">
          : <span>{email}</span>
        </li>
        <li className="user">
          : <span>{date}</span>
        </li>
        <li className="user">
          : <span>{address}</span>
        </li>
        <li className="user">
          : <span>{phoneNumber}</span>
        </li>
      </div>
    </>
  )
}

export default NameDetails
