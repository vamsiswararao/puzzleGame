import './index.css'

const SmallSquare = props => {
  const {value, clickHandler} = props
  const onChangeValue = () => {
    clickHandler(value)
  }

  return (
    <li
      className={value === 0 ? 'EmptySquare' : 'FillSquare'}
      onClick={onChangeValue}
    >
      {value}
    </li>
  )
}

export default SmallSquare
