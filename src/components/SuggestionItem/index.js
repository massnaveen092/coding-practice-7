// Write your code here
const SuggestionItem = props => {
  const {details, searchInput} = props
  const {suggestion} = details

  const onClickSuggestion = () => {
    searchInput(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button type="button" className="button" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
