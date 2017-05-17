import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const OBSERVER_OPTIONS = {
  childList: true,
  subtree: true,
  attributes: true,
  characterData: true,
}

export default class Editor extends Component {

  observer = new MutationObserver(mutations => {
    this.update(mutations)
  })

  componentDidMount() {
    this.observer.observe(ReactDOM.findDOMNode(this), OBSERVER_OPTIONS)
  }

  componentWillUnmount() {
    this.observer.disconnect()
  }

  update(mutations) {
    console.log(mutations)
  }

  render() {
    return (
      <div contentEditable={true} />
    )
  }
}
