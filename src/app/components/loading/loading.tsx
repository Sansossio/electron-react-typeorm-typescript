import React from 'react'
import { Spinner } from 'react-bootstrap'

import './loading.scss'

export const Loading = () => {
  return (
    <Spinner animation="border" role="status" id="loading">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}
