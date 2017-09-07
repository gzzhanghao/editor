import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { observer } from 'mobx-react'

import style from './App.css'
import Editor from '../models/Editor'

@observer
export default class App extends Component {

  editor = new Editor

  componentDidMount() {
    document.addEventListener('selectionchange', this.editor.onSelectionChange)

    this.editor.initialize({
      trap: ReactDOM.findDOMNode(this.refs.trap),
      content: ReactDOM.findDOMNode(this.refs.content),
    })
  }

  componentWillUnmount() {
    document.removeEventListener('selectionchange', this.editor.onSelectionChange)
  }

  render() {
    return (
      <div className={style.container}>
        <div
          className={style.trap}
          contentEditable
          ref="trap"
          onCompositionStart={this.editor.onCompositionStart}
          onCompositionEnd={this.editor.onCompositionEnd}
          onKeyDown={this.editor.onKeyDown}
          onKeyPress={this.editor.onKeyPress}
          onInput={this.editor.onInput}
          onCopy={this.editor.onCopy}
          onCut={this.editor.onCut}
          onPaste={this.editor.onPaste}
        />
        <div
          className={style.editor}
          contentEditable
          suppressContentEditableWarning
          ref="editor"
        >
        </div>
      </div>
    )
  }
}
