import React from 'react'
import get from 'lodash/fp/get'
import { connect } from 'react-redux'
import { fetchSearchResults } from './actions'

const getUrlTemplate = get('SearchService.searchServiceUrl')

const mapStateToProps = (state) => {
  return {
    urlTemplate: getUrlTemplate(state)
  }
}

export const connectService = (WrappedComponent) => {
  const wrapper = class extends React.Component {
    render () {
      return (
        <WrappedComponent
          fetchSearchResults={fetchSearchResults(this.props.urlTemplate, this.props.maxResults)}
          {...this.props}
        />
      )
    }
  }
  return connect(mapStateToProps)(wrapper)
}
