import './index.css'

const TabItem = props => {
  const {tabList, setActiveTabItem, isActive} = props
  const {tabId, displayText} = tabList

  const onClickTabItem = () => {
    setActiveTabItem(tabId)
  }
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="list-tab-container">
      <button
        type="button"
        onClick={onClickTabItem}
        className={tabBtnClassName}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
