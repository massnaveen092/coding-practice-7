// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput1: '',
  }

  searchInput = value => {
    this.setState({
      searchInput1: value,
    })
  }

  onClickSuggestion = event => {
    this.setState({
      searchInput1: event.target.value,
    })
  }
  
  render() {
    const {searchInput1} = this.state
    const {suggestionList} = this.props
    const searchResults = suggestionList.filter(each =>
      each.suggestion.tolowerCase().includes(searchInput1.toLocaleLowerCase()),
    )

    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google"
          />
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="button"
              />
              <input
                type="search"
                value={searchInput1}
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                className="Input"
              />
            </div>
            <ul className="list">
              {searchResults.map(each => (
                <SuggestionItem
                  key={each.id}
                  details={each}
                  searchInput={this.searchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
