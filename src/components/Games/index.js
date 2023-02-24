import {useState} from 'react'

import SmallSquare from '../SmallSquare'

const shuffle = array => [...array].sort(() => Math.random() - 0.5)

const Games = props => {
  const {values} = props
  const {squares, result, category, num} = values
  const random = shuffle(squares)
  const [randomNum, setRandomNum] = useState(random)
  const [isGameInProgress, setGame] = useState(random)

  const moveSquare = val => {
    console.log(val)
    const zeroIndex = randomNum.indexOf(0)
    const valIndex = randomNum.indexOf(val)

    if (
      valIndex + num === zeroIndex ||
      valIndex - num === zeroIndex ||
      (valIndex + 1 === zeroIndex && zeroIndex % num !== 0) ||
      (valIndex - 1 === zeroIndex && (zeroIndex + 1) % num !== 0)
    ) {
      const temArray = [...randomNum]
      temArray[zeroIndex] = randomNum[valIndex]
      temArray[valIndex] = 0
      setRandomNum(temArray)
      const dataOneSession = temArray.map(item => item)
      const dataTwoSession = result.map(item => item)

      let matchResult = 0

      dataOneSession.forEach((value, i) => {
        console.log(dataOneSession[i] === dataTwoSession[i])
        if (dataOneSession[i] === dataTwoSession[i]) {
          matchResult += 1
        }
      })

      if (matchResult === 16) {
        setGame(false)
      }
    }
  }

  const resetGame = () => {
    setGame(true)
  }

  const renderScoreCard = () => (
    <ul className="scoreCard-container">
      <h1>Congratulations </h1>
      <p>You win the game</p>
      <button type="button" className="play-again-button" onClick={resetGame}>
        play Again
      </button>
    </ul>
  )

  let by
  let sub
  if (category === '4by4') {
    by = 'Container'
    sub = 'Container-Sub'
  } else if (category === '5by5') {
    by = 'Container fivByFive'
    sub = 'Container-Sub fivByFive-sub'
  } else if (category === '6by6') {
    by = 'Container  SixBySix'
    sub = 'Container-Sub SixBySix-sub'
  } else if (category === '8by8') {
    by = 'Container eight'
    sub = 'Container-Sub By-sub'
  }

  const renderSmallSquare = () => (
    <div className={by}>
      {randomNum.map(each => (
        <div key={each} className={sub}>
          <SmallSquare
            value={each}
            category={category}
            clickHandler={moveSquare}
          />
        </div>
      ))}
    </div>
  )

  return (
    <>
      <div>{isGameInProgress ? renderSmallSquare() : renderScoreCard()}</div>
    </>
  )
}

export default Games
