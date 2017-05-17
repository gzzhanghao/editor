import React from 'react'
import ReactDOM from 'react-dom'

import Editor from './components/Editor'

ReactDOM.render(
  <Editor />,
  document.querySelector('#editor')
)

import normalize from './model/normalize'

console.log(JSON.stringify(normalize(document.querySelector('#test')), null, 2))
