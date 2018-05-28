import React from 'react'

const TagList = [
  {
    id: 'A',
    render: () => (
      <p key='airport-tag' id='airport-tag'>Airport</p>
    )
  },
  {
    id: 'C',
    render: () => (
      <p key='city-tag' id='city-tag'>City</p>
    )
  },
  {
    id: 'T',
    render: () => (
      <p key='train-station-tag' id='train-station-tag'>Station</p>
    )
  }
]

export default TagList
