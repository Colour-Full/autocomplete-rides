import React from 'react'
import TagList from './TagList'
import './Suggestion.css'

const Suggestion = props => {
  const {
    tagId,
    location,
    region,
    country
  } = props

  const tag = TagList.map(tag => {
    if (tag.id === tagId) return tag.render()
    // TODO handle non known or missing tags more gracefully
    return false
  })

  return (
    <a key className='suggestion'>
      <span className='suggestion-tag'>
        {tag}
      </span>
      <h3>{location}</h3>
      <small>
        {region},{' '}{country}
      </small>
    </a>
  )
}

export default Suggestion
