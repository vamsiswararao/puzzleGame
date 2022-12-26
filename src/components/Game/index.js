import {Component} from 'react'
import SmallSquare from '../SmallSquare'

import './index.css'

const shuffle = array => [...array].sort(() => Math.random() - 0.5)

const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]

class Game extends Component {
  state = {
    randomNum: shuffle(squares),
  }

  moveSquare = val => {
    const {randomNum} = this.state
    const zeroIndex = randomNum.indexOf(0)
    const valIndex = randomNum.indexOf(val)

    if (
      valIndex + 4 === zeroIndex ||
      valIndex - 4 === zeroIndex ||
      (valIndex + 1 === zeroIndex && zeroIndex % 4 !== 0) ||
      (valIndex - 1 === zeroIndex && (zeroIndex + 1) % 4 !== 0)
    ) {
      const temArray = [...randomNum]
      temArray[zeroIndex] = randomNum[valIndex]
      temArray[valIndex] = 0
      this.setState({randomNum: temArray})
    }
    console.log(randomNum, result)
    if (randomNum === result) {
      console.log('winner')
    }
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="game-Container">
        <div className="Container">
          {randomNum.map(each => (
            <div key={each} className="Container-Sub">
              <SmallSquare value={each} clickHandler={this.moveSquare} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Game
