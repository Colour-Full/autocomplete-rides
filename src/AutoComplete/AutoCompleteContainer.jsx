import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Autosuggest from 'react-autosuggest'
import Suggestion from './Suggestion/Suggestion'
import { connectService } from './auto-complete-api/connect'
import get from 'lodash/fp/get'
import './AutoComplete.css'

const getSearchResults = get('AutoComplete.searchResults.results.docs')

let AutoComplete = class extends React.Component {
  constructor () {
    super()
    this.state = {
      ...this.state,
      value: '',
      suggestions: []
    }
  }

  getSuggestions = value => {
    if (value.length > 2 && this.props.results) {
      const suggestions = this.props.results
      return suggestions
    }
    // TODO add a loading spinner during fetch to provide feedback to the user
    return []
  }

  getSuggestionValue = suggestion => suggestion.name

  renderSuggestion = suggestion => (
    <Suggestion
      key={suggestion.bookingId}
      tagId={suggestion.placeType}
      location={suggestion.name}
      region={suggestion.region}
      country={suggestion.country}
    />
  )

  onChange = (event, { newValue }) => {
    this.onSuggestionsClearRequested()
    this.props.fetchResults(newValue)
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    })
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  };

  shouldRenderSuggestions = (value) => {
    return value.trim().length > 1
  }

  render () {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'city, airport, station, region, district...',
      value,
      onChange: this.onChange
    }
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        shouldRenderSuggestions={this.shouldRenderSuggestions}
        inputProps={inputProps}
        maxResults
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    results: getSearchResults(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({fetchResults: ownProps.fetchSearchResults}, dispatch)

AutoComplete = connect(mapStateToProps, mapDispatchToProps)(AutoComplete)
AutoComplete = connectService(AutoComplete)

export default AutoComplete
