import './index.css'

const SmallSquare = props => {
  const {value, category, clickHandler} = props
  const onChangeValue = () => {
    clickHandler(value)
  }
  let change
  if (category === '4by4') {
    change = value === 0 ? 'EmptySquare' : 'FillSquare'
  } else if (category === '5by5') {
    change =
      value === 0
        ? 'EmptySquare fivByFive-Square'
        : 'FillSquare fivByFive-Square'
  } else if (category === '6by6') {
    change =
      value === 0
        ? 'EmptySquare fourByFour-Square'
        : 'FillSquare SixBySix-Square'
  } else if (category === '8by8') {
    change =
      value === 0
        ? 'EmptySquare eightByEight-Square'
        : 'FillSquare eightByEight-Square'
  }

  return (
    <li className={change} onClick={onChangeValue}>
      {value}
    </li>
  )
}

export default SmallSquare
