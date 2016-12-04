import { prefixLink } from 'helpers'
import { locals } from 'config'
import React from 'react'

function Logo(props) {
  return (
    <img
      style={{ maxHeight: '2rem' }}
      alt="presentation"
      src={prefixLink(`${props.image || locals.logo}`)}
    />
  )
}

export default Logo
