import {Component} from 'react'
import Games from '../Games'
// import SmallSquare from '../SmallSquare'
import TabItem from '../TabItem'

import './index.css'

const tabsList = [
  {tabId: '4by4', displayText: '4/4'},
  {tabId: '5by5', displayText: '5/5'},
  {tabId: '6by6', displayText: '6/6'},
  {tabId: '8by8', displayText: '8/8'},
]

const GamesList = [
  {
    squares: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    category: '4by4',
    result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
    num: 4,
  },
  {
    squares: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
    ],
    category: '5by5',
    result: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      0,
    ],
    num: 5,
  },
  {
    squares: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
    ],
    category: '6by6',
    result: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      0,
    ],
    num: 6,
  },
  {
    squares: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
    ],
    category: '8by8',
    result: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      0,
    ],
    num: 8,
  },
]

class Game extends Component {
  state = {
    appTabId: tabsList[0].tabId,
  }

  setActiveTabItem = tabId => {
    this.setState({appTabId: tabId})
  }

  getFilteredApps = appList => {
    const {appTabId} = this.state
    const filteredApp = appList.filter(eachApp => eachApp.category === appTabId)
    return filteredApp
  }

  puzzle = () => {
    const filteredApp = this.getFilteredApps(GamesList)
    return (
      <div>
        {filteredApp.map(each => (
          <div key={each.category}>
            <Games values={each} moveSquare={this.moveSquare} />
          </div>
        ))}
      </div>
    )
  }

  render() {
    const {appTabId} = this.state
    return (
      <div className="game-Container">
        <ul className="tabs-list">
          {tabsList.map(eachTab => (
            <TabItem
              key={eachTab.tabId}
              tabList={eachTab}
              setActiveTabItem={this.setActiveTabItem}
              isActive={appTabId === eachTab.tabId}
            />
          ))}
        </ul>
        <div>{this.puzzle()}</div>
      </div>
    )
  }
}

export default Game
